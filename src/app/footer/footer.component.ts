import { Component, OnInit, PLATFORM_ID, Inject, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <p>&copy; 2023 クールなホームページ. All rights reserved.</p>
          <div class="space-x-4">
            <button (click)="onHomeClick()" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              ホーム
            </button>
            <button (click)="onContactClick()" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,
  standalone: true
})
export class FooterComponent implements OnInit {
  @Output() homeClicked = new EventEmitter<void>();
  @Output() contactClicked = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateFooter();
    }
  }

  animateFooter() {
    gsap.from('footer', { opacity: 0, y: 20, duration: 0.5 });
  }

  onHomeClick() {
    this.homeClicked.emit();
  }

  onContactClick() {
    this.contactClicked.emit();
  }
}
