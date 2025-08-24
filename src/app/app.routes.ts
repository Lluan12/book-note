import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		...canActivate(() => redirectUnauthorizedTo(['/login'])),
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
		],
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [{ path: 'login', component: LoginComponent }],
	},
	{ path: '**', redirectTo: 'login' },
];
