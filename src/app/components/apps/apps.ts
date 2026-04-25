import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './apps.html',
  styleUrl: './apps.css',
})
export class AppsComponent {}
