import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  template: `
    <div class="hero-section flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl mb-6">
        Welcome to our amazing website
      </h2>
      <p class="text-primary dark:text-white text-xl mb-12 max-w-2xl">
        An amazing animated homepage created with GSAP, Angular and Tailwind CSS.
      </p>
      <div class="flex justify-center">
        <button
          class="relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
          <span class="relative text-base font-semibold text-white">Learn more</span>
        </button>
      </div>
    </div>
  `,
  standalone: true
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateHome();
    }
  }

  animateHome() {
    gsap.from('.hero-section', { opacity: 0, y: 50, duration: 1 });
  }
}
