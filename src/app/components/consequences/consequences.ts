import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-consequences',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './consequences.html',
  styleUrl: './consequences.css',
})
export class ConsequencesComponent {}
