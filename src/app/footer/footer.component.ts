import { Component, OnInit, PLATFORM_ID, Inject, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="fixed bottom-0 left-0 right-0 py-8 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-white">
          <p class="mb-4 md:mb-0">&copy; 2023 CoolHomepage. All rights reserved.</p>
          <div class="flex space-x-4">
            <button (click)="onHomeClick()" class="text-center">
              <h6 class="text-lg font-semibold">Home</h6>
              <p class="mt-2 text-sm text-gray-500">Top page</p>
            </button>
            <button (click)="onFeaturesClick()" class="text-center">
              <h6 class="text-lg font-semibold">Features</h6>
              <p class="mt-2 text-sm text-gray-500">Detail</p>
            </button>
            <button (click)="onBlogClick()" class="text-center">
              <h6 class="text-lg font-semibold">Blog</h6>
              <p class="mt-2 text-sm text-gray-500">Dairy news</p>
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
  @Output() featuresClicked = new EventEmitter<void>();
  @Output() blogClicked = new EventEmitter<void>();

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

  onFeaturesClick() {
    this.featuresClicked.emit();
  }

  onBlogClick() {
    this.blogClicked.emit();
  }
}
