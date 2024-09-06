import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HomeComponent, FeaturesComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  showFeatures = false;
  isAnimating = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateElements();
    }
  }

  toggleFeatures() {
    if (isPlatformBrowser(this.platformId) && !this.isAnimating) {
      if (this.showFeatures) {
        this.showHome();
      } else {
        this.showFeaturesAnimation();
      }
    }
  }

  onHomeClick() {
    if (this.showFeatures && !this.isAnimating) {
      this.showHome();
    }
  }

  onContactClick() {
    console.log('お問い合わせがクリックされました');
    // ここにお問い合わせページへの遷移ロジックを追加
  }

  animateElements() {
    const tl = gsap.timeline();

    tl.from('.header', { y: -50, opacity: 0, duration: 1 })
      .from('.home-main', { opacity: 0, duration: 1 }, '-=0.5')
      .from('.cta-button', { scale: 0, opacity: 0, duration: 0.5 }, '-=0.5');
  }

  showFeaturesAnimation() {
    this.isAnimating = true;
    const tl = gsap.timeline({
      onComplete: () => {
        this.showFeatures = true;
        this.isAnimating = false;
      }
    });

    tl.to('.header, .home-main', { opacity: 0, duration: 0.5 })
      .set('.header, .home-main', { display: 'none' })
      .set('.features-main, app-footer', { display: 'block', opacity: 0 })
      .to('.features-main', { opacity: 1, duration: 0.5 })
      .from('.features-section h2', { opacity: 0, y: -50, duration: 0.5 })
      .from('.feature:nth-child(1)', { 
        opacity: 0, 
        x: '-100%', 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.3')
      .from('.feature:nth-child(2)', { 
        opacity: 0, 
        y: '100%', 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5')
      .from('.feature:nth-child(3)', { 
        opacity: 0, 
        x: '100%', 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5')
      .from('app-footer', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
  }

  showHome() {
    this.isAnimating = true;
    const tl = gsap.timeline({
      onComplete: () => {
        this.showFeatures = false;
        this.isAnimating = false;
      }
    });

    tl.to('.features-main, app-footer', { opacity: 0, duration: 0.5 })
      .set('.features-main, app-footer', { display: 'none' })
      .set('.header, .home-main', { display: 'block', opacity: 0 })
      .to('.header', { opacity: 1, duration: 0.5 })
      .to('.home-main', { opacity: 1, duration: 0.5 }, '-=0.3');
  }
}
