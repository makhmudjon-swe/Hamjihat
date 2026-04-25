import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type FeatureItem = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly iconPath: string;
  readonly accentRgb: string;
};

@Component({
  selector: 'app-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class FeaturesComponent {
  protected readonly features: ReadonlyArray<FeatureItem> = [
    {
      id: 1,
      title: "Ochiq loyiha ma'lumotlari",
      description: 'Loyiha joylashuvi, muddat, byudjet va hozirgi holat bitta joyda.',
      iconPath:
        'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8 14H7v-2h4v2Zm6-4H7v-2h10v2Zm0-4H7V7h10v2Z',
      accentRgb: '59 130 246', /* blue */
    },
    {
      id: 2,
      title: 'Xarita orqali kuzatish',
      description: "Loyihalarni interaktiv xaritada ko'rib, hududingizni kuzatib boring.",
      iconPath:
        'M20.5 3.5 15 5.5 9 3.5 3.5 5.5A1.5 1.5 0 0 0 2 7v12a1.5 1.5 0 0 0 1.92 1.44L9 18.5l6 2 5.58-2.06A1.5 1.5 0 0 0 22 17V5a1.5 1.5 0 0 0-1.5-1.5ZM14 17.13l-4-1.33V6.87l4 1.33v8.93Z',
      accentRgb: '14 165 233', /* cyan */
    },
    {
      id: 3,
      title: 'Aholi bahosi va feedback',
      description: 'Foydalanuvchilar baho beradi, izoh qoldiradi va real fikr bildiradi.',
      iconPath:
        'M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm1-14h-2v5h5v-2h-3V8Zm-7 2H4a8 8 0 0 0 8 8v-2a6 6 0 0 1-6-6Z',
      accentRgb: '139 92 246', /* violet */
    },
    {
      id: 4,
      title: 'Foto va video dalillar',
      description: 'Loyiha holatini rasm va video bilan tasdiqlash imkoniyati mavjud.',
      iconPath:
        'M19 4h-1.17l-1.24-1.35A2 2 0 0 0 15.12 2h-6.24a2 2 0 0 0-1.47.65L6.17 4H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-7 13a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z',
      accentRgb: '245 158 11', /* amber */
    },
    {
      id: 5,
      title: 'Muammo aniqlash tizimi',
      description: "Salbiy fikrlar ko'payganda tizim muammoli loyihani avtomatik aniqlaydi.",
      iconPath:
        'M11.1 3.52a1 1 0 0 1 1.8 0l8.49 16.04A1 1 0 0 1 20.5 21h-17a1 1 0 0 1-.89-1.44L11.1 3.52ZM12 9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Zm0 9a1.1 1.1 0 1 0 0-2.2A1.1 1.1 0 0 0 12 18Z',
      accentRgb: '244 63 94', /* rose */
    },
    {
      id: 6,
      title: 'Hududlar reytingi',
      description: 'Viloyat va tumanlar kesimida samaradorlik reytingi shakllanadi.',
      iconPath: 'M3 3h2v18H3V3Zm16 8h2v10h-2V11ZM7 13h2v8H7v-8Zm4-6h2v14h-2V7Zm4-4h2v18h-2V3Z',
      accentRgb: '34 211 238', /* sky */
    },
  ];

  protected readonly activeFeatureId = signal(1);

  protected readonly activeFeature = computed(() => {
    return (
      this.features.find((feature) => feature.id === this.activeFeatureId()) ?? this.features[0]
    );
  });

  protected selectFeature(featureId: number): void {
    this.activeFeatureId.set(featureId);
  }
}
