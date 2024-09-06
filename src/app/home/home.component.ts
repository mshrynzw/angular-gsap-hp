import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  template: `
    <div class="hero-section">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">素晴らしいウェブサイトへようこそ</h2>
      <p class="text-xl text-gray-600 mb-6">GSAPとAngular、Tailwind CSSで作成された驚くべきアニメーション付きのホームページです。</p>
      <button class="cta-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        詳細を見る
      </button>
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
