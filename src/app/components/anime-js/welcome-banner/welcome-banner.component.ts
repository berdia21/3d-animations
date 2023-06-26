import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-welcome-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.scss'],
})
export class WelcomeBannerComponent {
  @ViewChild('titleWrapper', { static: false })
  titleWrapperRef!: ElementRef<HTMLHeadingElement>;
  showWelcomeText: boolean = true;

  gridItems: any[] = [];
  columns: number = 0;
  rows: number = 0;
  total: number = 1;

  ngOnInit(): void {
    this.getGridSize();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.getGridSize();
  }

  handleStagger(index: number): void {
    anime({
      targets: '.grid-item',
      backgroundColor: this.randomColor(),
      delay: anime.stagger(50, {
        grid: [this.columns, this.rows],
        from: index,
      }),
    });
  }

  getGridSize(): void {
    this.columns = Math.floor(document.body.clientWidth / 50);
    this.rows = Math.floor(document.body.clientHeight / 50);
    this.total = this.rows * this.columns;
    this.gridItems = Array(this.total).fill(null);
    anime({
      targets: '.grid-item',
      duration: 0,
      easing: 'linear',
    });
  }

  randomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  ngAfterViewInit(): void {
    this.addSpans();
    this.animateWelcomeText();
  }

  addSpans() {
    const textWrapperElement = this.titleWrapperRef.nativeElement;
    if (textWrapperElement && textWrapperElement.textContent) {
      textWrapperElement.innerHTML = textWrapperElement.textContent?.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }
  }

  handleBtnMouseOver(event: Event): void {
    const targetElement = event.target as HTMLElement;

    const top = this.getRandomNumber(
      window.innerHeight - targetElement.offsetHeight
    );
    const left = this.getRandomNumber(
      window.innerWidth - targetElement.offsetWidth
    );

    this.animateMove(targetElement, 'left', left).play();
    this.animateMove(targetElement, 'top', top).play();
  }

  animateMove = (element: Element, prop: string, pixels: number) =>
    anime({
      targets: element,
      duration: 300,
      [prop]: `${pixels}px`,
      easing: 'easeOutCirc',
    });

  getRandomNumber = (num: number) => {
    return Math.floor(Math.random() * (num + 1));
  };

  animateWelcomeText() {
    const animation = anime
      .timeline({ loop: false })
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 900,
        delay: (el, i) => 70 * i + 6500,
      })
      .add({
        targets: '.ml2 .letter',
        scale: [1, 4],
        opacity: [1, 0],
        translateX: 70,
        easing: 'easeInExpo',
        duration: 1000,
        delay: (el, i) => 70 * i + 1000,
      });

    animation.finished.then(() => (this.showWelcomeText = false));
  }
}
