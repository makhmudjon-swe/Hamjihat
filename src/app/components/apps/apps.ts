import { ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';

interface FeatureItem {
  id: string;
  name: string;
  image: string;
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
      name: 'Xavfsiz kirish',
      image: '/img.png',
      solution:
        "OneID orqali foydalanuvchini tez va ishonchli tarzda platformaga ulaydi.",
      result:
        "Kirish jarayoni soddalashadi va foydalanuvchi loyihalarni kuzatishni darhol boshlaydi.",
    },
    {
      id: '02',
      name: 'Joylashuv va xavfsizlik',
      image: '/img1.png',
      solution:
        "Xaritada loyihalar, obyektlar va yaqin nuqtalar qulay qidiruv hamda filtr orqali ko'rsatiladi.",
      result:
        "Kerakli manzilni tez topish va hudud bo'yicha aniq tasavvur olish osonlashadi.",
    },
    {
      id: '03',
      name: 'Loyiha jarayonini kuzatish',
      image: '/img2.png',
      solution:
        "Har bir loyiha uchun bosqichlar, muddatlar va joriy bajarilish holati bitta sahifada jamlanadi.",
      result:
        "Ishlarning qaysi bosqichda ekanini tushunish yengillashadi va kechikishlar tez seziladi.",
    },
    {
      id: '04',
      name: 'Muammo haqida xabar berish',
      image: '/img3.png',
      solution:
        "Muammo turi, batafsil tavsif va foto dalillarni bir joyning o'zida yuborish mumkin.",
      result:
        "Murojaatlar tartibli yuboriladi va mas'ullarga yetkazish jarayoni ancha qulaylashadi.",
    },
    {
      id: '05',
      name: 'Profil va nazorat',
      image: '/img4.png',
      solution:
        "Foydalanuvchi o'z yuborgan muammolari, bildirishnomalari va joylashuv sozlamalarini profil orqali boshqaradi.",
      result:
        "Shaxsiy nazorat kuchayadi, murojaatlar holati va ogohlantirishlar bir joyda saqlanadi.",
    },
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
