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
    { label: 'Muammo', href: '#muammo' },
    { label: 'Oqibatlar', href: '#oqibatlar' },
    { label: 'Yechim', href: '#yechim' },
    { label: 'Imkoniyatlar', href: '#imkoniyatlar' },
    { label: "Yo'nalishlar", href: '#yonalishlar' },
    { label: 'Jamoamiz', href: '#jamoamiz' },
    { label: 'Ilovalar', href: '#ilovalar' },
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
