import { Routes } from '@angular/router';
import { DiceRoller } from './components/dice-roller/dice-roller.component';
import { Login } from './components/profile/login/login.component';
import { Register } from './components/profile/register/register.component';
import { History } from './components/history/history.component';

export const routes: Routes = [
  { path: '', component: DiceRoller },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'history', component: History },
];
