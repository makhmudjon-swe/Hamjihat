import { ChangeDetectionStrategy, Component } from '@angular/core';

type DirectionItem = {
  readonly title: string;
  readonly description: string;
  readonly iconPath: string;
  readonly accentRgb: string;
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
      title: "Yo'l va infratuzilma",
      description: "Yo‘llar, ko‘priklar va transport obyektlari holatini kuzating.",
      iconPath:
        'M12 2a7 7 0 0 0-7 7c0 5.25 6.2 12.18 6.47 12.47a.75.75 0 0 0 1.06 0C12.8 21.18 19 14.25 19 9a7 7 0 0 0-7-7Zm0 9.2A2.2 2.2 0 1 1 14.2 9 2.2 2.2 0 0 1 12 11.2Z',
      accentRgb: '59 130 246',
    },
    {
      title: 'Qurilish va uy-joy',
      description: "Uy-joy va ijtimoiy obyektlar qurilishini baholang.",
      iconPath:
        'M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Zm7 0h4v3h-4v-3Z',
      accentRgb: '245 158 11',
    },
    {
      title: "Ta'lim",
      description: "Maktab, bog‘cha va ta’lim loyihalarini kuzating.",
      iconPath:
        'M12 3 2 8l10 5 10-5-10-5Zm0 7L4.5 8 12 4.25 19.5 8 12 10Zm-8 3.5V10l8 4 8-4v3.5L12 18l-8-4.5Z',
      accentRgb: '14 165 233',
    },
    {
      title: "Sog'liqni saqlash",
      description: "Kasalxona va poliklinika loyihalarini kuzating.",
      iconPath:
        'M10 2h4a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2Zm0 6V4h4v4h-4Zm1 3h2v2h2v2h-2v2h-2v-2H9v-2h2v-2Z',
      accentRgb: '139 92 246',
    },
    {
      title: 'Kommunal xizmatlar',
      description: "Suv, elektr, gaz loyihalarini baholang.",
      iconPath:
        'M12 2c4 5 6 8 6 12a6 6 0 1 1-12 0c0-4 2-7 6-12Zm-1 15.5a.75.75 0 0 0 1.5 0c0-1.1-1.2-1.7-1.2-2.7a.75.75 0 0 0-1.5 0c0 1.6 1.2 1.7 1.2 3.2Z',
      accentRgb: '34 211 238',
    },
    {
      title: 'Ekologiya va obodonlashtirish',
      description: "Parklar va yashil hududlar ijrosini kuzating.",
      iconPath:
        'M12 2c4.5 2.2 7 5.5 7 9.5A7 7 0 0 1 12 19a7 7 0 0 1-7-7.5C5 7.5 7.5 4.2 12 2Zm-1 16h2v4h-2v-4Z',
      accentRgb: '244 63 94',
    },
    {
      title: 'Ijtimoiy obyektlar',
      description: "Sport va madaniyat obyektlari holatini baholang.",
      iconPath:
        'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5.3 6.1-2.2 1.3 1 2.4-2.4-1-1.3 2.2-1.3-2.2-2.4 1 1-2.4-2.2-1.3 2.5-.2L10.7 6l1.3-2.2L13.3 6l2.5 1.9 1.5.2Z',
      accentRgb: '99 102 241',
    },
    {
      title: 'Raqamli xizmatlar',
      description: "Raqamlashtirish va IT loyihalarni kuzating.",
      iconPath:
        'M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4l1.5 3H9.5L11 17H6a2 2 0 0 1-2-2V5Zm2 0v10h12V5H6Z',
      accentRgb: '59 130 246',
    },
  ];
}
