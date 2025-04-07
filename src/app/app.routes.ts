import { Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Task1Component } from './pages/task1/task1.component';
import { Task2Component } from './pages/task2/task2.component';
import { Task3Component } from './pages/task3/task3.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
];
