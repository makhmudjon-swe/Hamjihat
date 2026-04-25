import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppsComponent } from './components/apps/apps';
import { ConsequencesComponent } from './components/consequences/consequences';
import { DirectionsComponent } from './components/directions/directions';
import { FeaturesComponent } from './components/features/features';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { ProblemComponent } from './components/problem/problem';
import { SolutionComponent } from './components/solution/solution';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeaderComponent,
    ProblemComponent,
    SolutionComponent,
    ConsequencesComponent,
    FeaturesComponent,
    DirectionsComponent,
    AppsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
