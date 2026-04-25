import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class TeamComponent {}
