import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppsComponent } from './components/apps/apps';
import { AppsLinkComponent } from './components/apps-link/apps-link';
import { ConsequencesComponent } from './components/consequences/consequences';
import { DirectionsComponent } from './components/directions/directions';
import { FooterComponent } from './components/footer/footer';
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
    AppsLinkComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
