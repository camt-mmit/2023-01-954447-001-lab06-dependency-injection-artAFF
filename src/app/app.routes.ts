import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  {
    path: 'exmaple',
    loadChildren: () => import('./example/').then((m) => m.routes),
  },
];
