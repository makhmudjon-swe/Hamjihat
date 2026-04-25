import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type NavLink = {
  readonly label: string;
  readonly href: string;
};

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected readonly links: ReadonlyArray<NavLink> = [
    { label: 'Muammo', href: '#problem' },
    { label: 'Oqibatlar', href: '#consequences' },
    { label: 'Yechim', href: '#solution' },
    { label: 'Imkoniyatlar', href: '#features' },
    { label: "Yo'nalishlar", href: '#directions' },
    { label: 'Qanday ishlaydi', href: '#how-it-works' },
    { label: 'Yuklab olish', href: '#download-app' },
  ];

  protected readonly languages: ReadonlyArray<string> = ['UZ', 'EN', 'RU'];
  protected readonly selectedLanguage = signal('UZ');

  protected onLanguageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    if (!selectElement) {
      return;
    }

    this.selectedLanguage.set(selectElement.value);
  }
}
