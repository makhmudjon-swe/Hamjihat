import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type SolutionStep = {
  readonly id: number;
  readonly shortLabel: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
};

@Component({
  selector: 'app-solution',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './solution.html',
  styleUrl: './solution.css',
})
export class SolutionComponent {
  protected readonly steps: ReadonlyArray<SolutionStep> = [
    {
      id: 1,
      shortLabel: "Loyihalarni ko'rish",
      title: "1. Loyihalarni ochiq ko'rish",
      subtitle: "Ma'lumotlar bitta joyda",
      description:
        "Hududingizdagi loyihalarni xarita yoki ro'yxatda ko'ring. Asosiy ma'lumotlar ochiq ko'rsatiladi.",
    },
    {
      id: 2,
      shortLabel: 'Holatni baholash',
      title: '2. Real holatni baholash',
      subtitle: 'Aholi asosiy nazoratchi',
      description: "Holatni belgilang, sifatga baho bering va fikr qoldiring.",
    },
    {
      id: 3,
      shortLabel: 'Dalillar bilan fikr',
      title: '3. Dalillar bilan fikr bildirish',
      subtitle: 'Foto va video orqali tasdiqlang',
      description: "Rasm va video bilan tasdiqlang, shaffoflik oshadi.",
    },
    {
      id: 4,
      shortLabel: 'Muammoni aniqlash',
      title: '4. Muammolarni aniqlash',
      subtitle: 'Tizim avtomatik signal beradi',
      description: "Salbiy fikrlar ko'paysa, tizim loyiha bo'yicha signal beradi.",
    },
    {
      id: 5,
      shortLabel: 'Reyting va tahlil',
      title: '5. Reyting va tahlil',
      subtitle: 'Qaysi hudud yaxshiroq ishlayapti?',
      description: "Hududlar reytingi orqali samaradorlik va muammoli nuqtalar ko'rinadi.",
    },
  ];

  protected readonly activeStepId = signal(1);

  protected readonly activeStep = computed(() => {
    return this.steps.find((step) => step.id === this.activeStepId()) ?? this.steps[0];
  });

  protected setActiveStep(stepId: number): void {
    this.activeStepId.set(stepId);
  }
}
