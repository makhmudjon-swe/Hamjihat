import { ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';

interface FeatureItem {
  id: string;
  name: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
}

@Component({
  selector: 'app-apps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './apps.html',
  styleUrl: './apps.css',
})
export class AppsComponent {
  activeIndex = signal(0);
  section = viewChild<ElementRef<HTMLElement>>('section');

  features: FeatureItem[] = [
    {
      id: '01',
      name: 'Diqqatni jamlash',
      image: '/img.png',
      problem: "Dars paytida chalg‘ituvchi ilovalar diqqatni bo‘ladi.",
      solution: "Dars rejimi: chalg‘ituvchi ilovalar vaqtincha bloklanadi.",
      result: "Diqqat va samaradorlik oshadi."
    },
    {
      id: '02',
      name: 'Joylashuv va xavfsizlik',
      image: '/img1.png',
      problem: "Joylashuv bo‘yicha aniq ma’lumot yetishmaydi.",
      solution: "Real vaqt kuzatuv + xavfsiz hududlar.",
      result: "Xavfsizlik va xotirjamlik."
    },
    {
      id: '03',
      name: "Vaqtni to'g'ri boshqarish",
      image: '/img2.png',
      problem: "Vaqt me’yoridan oshib ketadi.",
      solution: "Kunlik limitlar va uyqu jadvali.",
      result: "Tartibli rejim."
    },
    {
      id: '04',
      name: 'Aniq statistika va nazorat',
      image: '/img3.png',
      problem: "Sarflangan vaqtni aniq ko‘rish qiyin.",
      solution: "Kunlik/haftalik statistika.",
      result: "To‘g‘ri xulosa va nazorat."
    },
    {
      id: '05',
      name: 'Zararli ilovalardan himoya',
      image: '/img4.png',
      problem: "Zararli kontent xavfi bor.",
      solution: "Filtr va bloklash sozlamalari.",
      result: "Xavfsiz muhit."
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    const sectionEl = this.section();
    if (!sectionEl) return;
    const rect = sectionEl.nativeElement.getBoundingClientRect();
    const sectionTop = rect.top;
    
    if (sectionTop > 0) {
      if (this.activeIndex() !== 0) this.activeIndex.set(0);
      return;
    }

    const scrolled = -sectionTop;
    const windowHeight = window.innerHeight;
    
    let index = Math.floor((scrolled + windowHeight / 2) / windowHeight);
    
    if (index < 0) index = 0;
    if (index >= this.features.length) index = this.features.length - 1;
    
    if (this.activeIndex() !== index) {
      this.activeIndex.set(index);
    }
  }
}
