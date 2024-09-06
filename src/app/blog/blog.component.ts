import { Component, OnInit, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  title: string;
  content: string;
  date: Date;
}

@Component({
  selector: 'app-blog',
  template: `
    <div class="blog-section container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">ブログ</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let post of blogPosts; let i = index" class="blog-post bg-white p-6 rounded-lg shadow-md" [attr.data-index]="i">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.content }}</p>
          <p class="text-sm text-gray-500">{{ post.date | date:'yyyy/MM/dd HH:mm' }}</p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class BlogComponent implements OnInit, AfterViewInit {
  blogPosts: BlogPost[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.generateBlogPosts();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateBlogPosts();
    }
  }

  generateBlogPosts() {
    for (let i = 1; i <= 100; i++) {
      this.blogPosts.push({
        title: `ブログ投稿 ${i}`,
        content: `これはブログ投稿 ${i} の本文です。ここに記事の内容が入ります。`,
        date: new Date(2023, 0, i)
      });
    }
  }

  animateBlogPosts() {
    gsap.set('.blog-post', { opacity: 0, y: 50 });

    ScrollTrigger.batch('.blog-post', {
      onEnter: (elements, triggers) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          overwrite: true
        });
      },
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: -50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.in",
          overwrite: true
        });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          overwrite: true
        });
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.in",
          overwrite: true
        });
      },
      start: "top bottom-=50",
      end: "bottom top+=50",
    });
  }
}