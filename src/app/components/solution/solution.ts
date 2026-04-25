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
      subtitle: "Barcha ma'lumotlar bir joyda",
      description:
        "Hududingizdagi davlat loyihalarini xarita yoki ro'yxat orqali ko'ring. Har bir loyiha bo'yicha asosiy ma'lumotlar ochiq taqdim etiladi.",
    },
    {
      id: 2,
      shortLabel: 'Holatni baholash',
      title: '2. Real holatni baholash',
      subtitle: 'Aholi asosiy nazoratchi',
      description:
        "Foydalanuvchilar loyiha tugagan yoki yo'qligini belgilaydi, sifatiga baho beradi va fikr qoldiradi.",
    },
    {
      id: 3,
      shortLabel: 'Dalillar bilan fikr',
      title: '3. Dalillar bilan fikr bildirish',
      subtitle: 'Foto va video orqali tasdiqlang',
      description:
        "Har bir foydalanuvchi loyiha holatini rasm yoki video orqali ko'rsatishi mumkin. Bu shaffoflikni oshiradi.",
    },
    {
      id: 4,
      shortLabel: 'Muammoni aniqlash',
      title: '4. Muammolarni aniqlash',
      subtitle: 'Tizim avtomatik signal beradi',
      description:
        "Agar loyiha bo'yicha salbiy fikrlar ko'paysa, tizim uni muammoli sifatida belgilab e'tiborga chiqaradi.",
    },
    {
      id: 5,
      shortLabel: 'Reyting va tahlil',
      title: '5. Reyting va tahlil',
      subtitle: 'Qaysi hudud yaxshiroq ishlayapti?',
      description:
        "Hududlar kesimida reyting shakllanadi. Shu orqali samaradorlik va muammoli nuqtalar aniq ko'rinadi.",
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
