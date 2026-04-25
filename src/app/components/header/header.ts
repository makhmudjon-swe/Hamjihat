import { ChangeDetectionStrategy, Component } from '@angular/core';

type StatItem = {
  readonly value: string;
  readonly label: string;
};

type FeatureItem = {
  readonly label: string;
  readonly iconPath: string;
};

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  protected readonly features: ReadonlyArray<FeatureItem> = [
    {
      label: 'Hududiy nazorat',
      iconPath:
        'M20 6.5V16a2 2 0 0 1-1.13 1.8l-6 3a2 2 0 0 1-1.74 0l-6-3A2 2 0 0 1 4 16V6.5a2 2 0 0 1 1.1-1.79l6-3.1a2 2 0 0 1 1.8 0l6 3.1A2 2 0 0 1 20 6.5ZM12 5.04 8 7.12v4.2c0 2.26 1.34 4.36 4 5.64 2.66-1.28 4-3.38 4-5.64v-4.2L12 5.04Z',
    },
    {
      label: 'Tasdiqlangan foydalanuvchi',
      iconPath:
        'M12 2 4 5v6c0 5.06 3.41 9.78 8 11 4.59-1.22 8-5.94 8-11V5l-8-3Zm3.53 7.53-4.25 4.25a1 1 0 0 1-1.41 0l-1.84-1.84 1.42-1.42 1.13 1.13 3.54-3.54 1.41 1.42Z',
    },
    {
      label: 'Muammoli hududlarni aniqlash',
      iconPath:
        'M11.1 3.52a1 1 0 0 1 1.8 0l8.49 16.04A1 1 0 0 1 20.5 21h-17a1 1 0 0 1-.89-1.44L11.1 3.52ZM12 9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Zm0 9a1.1 1.1 0 1 0 0-2.2A1.1 1.1 0 0 0 12 18Z',
    },
  ];

  protected readonly stats: ReadonlyArray<StatItem> = [
    { value: '12K+', label: 'Faol foydalanuvchi' },
    { value: '48', label: 'Hamkor tashkilot' },
    { value: '99%', label: 'Mamnunlik darajasi' },
  ];
}
