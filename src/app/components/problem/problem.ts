import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-problem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './problem.html',
  styleUrl: './problem.css',
})
export class ProblemComponent {}
