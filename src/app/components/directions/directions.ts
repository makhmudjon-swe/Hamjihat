import { ChangeDetectionStrategy, Component } from '@angular/core';

type DirectionItem = {
  readonly title: string;
  readonly description: string;
};

@Component({
  selector: 'app-directions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './directions.html',
  styleUrl: './directions.css',
})
export class DirectionsComponent {
  protected readonly directions: ReadonlyArray<DirectionItem> = [
    {
      title: "1. Yo'l va infratuzilma",
      description:
        "Yo'llar, ko'priklar va transport infratuzilmasi loyihalarining qurilishi va ta'mirlanishini kuzating.",
    },
    {
      title: '2. Qurilish va uy-joy',
      description:
        "Yangi uy-joylar, ko'p qavatli binolar va ijtimoiy obyektlar qurilish jarayonini baholang.",
    },
    {
      title: "3. Ta'lim",
      description:
        "Maktablar, bog'chalar va boshqa ta'lim muassasalari bilan bog'liq loyihalarni nazorat qiling.",
    },
    {
      title: "4. Sog'liqni saqlash",
      description:
        'Kasalxonalar, poliklinikalar va tibbiyot markazlari qurilishi hamda jihozlanishini kuzating.',
    },
    {
      title: '5. Kommunal xizmatlar',
      description:
        'Suv, elektr, gaz va boshqa kommunal infratuzilma loyihalarining holatini baholang.',
    },
    {
      title: '6. Ekologiya va obodonlashtirish',
      description:
        'Yashil hududlar, parklar va ekologik loyihalarning amalga oshirilishini kuzating.',
    },
    {
      title: '7. Ijtimoiy obyektlar',
      description:
        'Sport majmualari, madaniyat markazlari va boshqa jamoat obyektlari holatini baholang.',
    },
    {
      title: '8. Raqamli va davlat xizmatlari',
      description: 'Davlat xizmatlarini raqamlashtirish va IT loyihalar rivojlanishini kuzating.',
    },
  ];
}
