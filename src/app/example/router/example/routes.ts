import { Routes } from '@angular/router';
import { ExampleInputComponent } from './router/exmaple-input/example-input.component';
import { ExampleComponent } from './router/example.example.Component';

export const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: ExampleInputComponent },
    ],
  },
];
