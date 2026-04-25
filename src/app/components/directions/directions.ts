import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-directions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './directions.html',
  styleUrl: './directions.css',
})
export class DirectionsComponent {}
