import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

export type ScrollRevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') variant: ScrollRevealVariant = 'up';
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    this.renderer.setAttribute(host, 'data-sr', this.variant || 'up');
    if (this.revealDelay > 0) {
      this.renderer.setStyle(host, 'transition-delay', `${this.revealDelay}ms`);
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion) {
      this.renderer.addClass(host, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'is-visible');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
