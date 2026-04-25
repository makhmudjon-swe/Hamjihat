import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ProblemItem {
  id: string;
  text: string;
  iconPath: string;
}

@Component({
  selector: 'app-problem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './problem.html',
  styleUrl: './problem.css',
})
export class ProblemComponent {
  activeIndex = signal(0);

  readonly problemItems: ReadonlyArray<ProblemItem> = [
    {
      id: '01',
      text: 'Loyihalar boshlanib tugallanmasligi',
      iconPath:
        'M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.56a2.25 2.25 0 0 0-.66-1.59l-2.81-2.81A2.25 2.25 0 0 0 14.44 3H6.75Zm2.25 5.25h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm0 3.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm0 3.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Z',
    },
    {
      id: '02',
      text: 'Xalqqa sifatsiz obyektlar berilishi',
      iconPath:
        'M12 2.25 1.5 6.75V12c0 5.52 4.2 9.94 10.5 10.5 6.3-.56 10.5-4.98 10.5-10.5V6.75L12 2.25Zm0 6a.9.9 0 0 1 .9.9v4.2a.9.9 0 0 1-1.8 0v-4.2a.9.9 0 0 1 .9-.9Zm0 8.1a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z',
    },
    {
      id: '03',
      text: '“Soya”da qolib ketayotgan resurslar',
      iconPath:
        'M2.25 12C4.7 7.54 8.1 5.25 12 5.25c3.9 0 7.3 2.29 9.75 6.75-2.45 4.46-5.85 6.75-9.75 6.75-3.9 0-7.3-2.29-9.75-6.75Zm6.22 0a3.53 3.53 0 1 0 7.06 0 3.53 3.53 0 0 0-7.06 0Z',
    },
    {
      id: '04',
      text: 'Mansabdor shaxslar tomonidan nazoratning kuchsizligi',
      iconPath:
        'M12 2.25 3.75 6v5.1c0 4.67 3.2 8.88 8.25 9.9 5.05-1.02 8.25-5.23 8.25-9.9V6L12 2.25Zm0 5.25a.94.94 0 0 1 .94.94v4.5a.94.94 0 0 1-1.88 0v-4.5A.94.94 0 0 1 12 7.5Zm0 8.62a1.13 1.13 0 1 1 0-2.25 1.13 1.13 0 0 1 0 2.25Z',
    },
    {
      id: '05',
      text: 'Jamoatchilik nazorati kamligi',
      iconPath:
        'M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm-7.5 8.25a7.5 7.5 0 1 1 15 0 .75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75Z',
    },
  ];
}
