import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-features',
  template: `
    <div class="features-section">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">特徴</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="feature bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">高速</h3>
          <p class="text-gray-600">最適化されたパフォーマンスで、ユーザーに最高の体験を提供します。</p>
        </div>
        <div class="feature bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">レスポンシブ</h3>
          <p class="text-gray-600">あらゆるデバイスで完璧に動作するデザインです。</p>
        </div>
        <div class="feature bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">モダン</h3>
          <p class="text-gray-600">最新のウェブ技術を使用して構築されています。</p>
        </div>
      </div>
    </div>
  `,
  standalone: true
})
export class FeaturesComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateFeatures();
    }
  }

  animateFeatures() {
    gsap.from('.feature', { opacity: 0, y: 50, duration: 0.8, stagger: 0.2 });
  }
}
