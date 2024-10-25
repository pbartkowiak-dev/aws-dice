import { Routes } from '@angular/router';
import { DiceRoller } from './components/dice-roller/dice-roller.component';
import { Login } from './components/profile/login/login.component';
import { Profile } from './components/profile/profile/profile.component';
import { Register } from './components/profile/register/register.component';
import { History } from './components/history/history.component';
import { ForgotPassword } from './components/profile/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: DiceRoller },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'history', component: History },
  { path: 'profile', component: Profile },
];
