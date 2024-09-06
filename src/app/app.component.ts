import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.animateElements();
  }

  animateElements() {
    const tl = gsap.timeline();

    tl.from('.header', { y: -50, opacity: 0, duration: 1 })
      .from('.hero-text', { x: -100, opacity: 0, duration: 1 }, '-=0.5')
      .from('.hero-image', { x: 100, opacity: 0, duration: 1 }, '-=0.5')
      .from('.cta-button', { scale: 0, opacity: 0, duration: 0.5 }, '-=0.5')
      .from('.feature', { y: 50, opacity: 0, duration: 0.5, stagger: 0.2 });
  }
}
