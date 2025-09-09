import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { UserAuthenticationService } from '../../services/userAuthentication.service';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { DarkModeService } from '../../services/darkMode.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, Button],
})
export class MenuComponent implements OnInit {
	private authService = inject(UserAuthenticationService);
	private router = inject(Router);
	darkModeService = inject(DarkModeService);
	user = this.authService.getCurrentUser();
	items: MenuItem[] = [];

	ngOnInit() {
		this.darkModeService.initTheme();
		this.items = [
			{
				separator: true,
			},
			{
				items: [
					{
						label: 'Inicio',
						icon: 'pi pi-home',
						routerLinkActiveOptions: 'bg-surface-800',
						command: () => {
							this.router.navigate(['/home']);
						},
					},
					{
						label: 'Notas',
						icon: 'pi pi-pen-to-square',
						command: () => {
							this.router.navigate(['/notes']);
						},
					},
					{
						label: 'Libretas',
						icon: 'pi pi-book',
						command: () => {
							this.router.navigate(["/books"])
						}
					},
				],
			},
			{
				separator: true,
			},
			{
				label: 'Perfil',
				items: [
					{
						label: 'Cerrar sesion',
						icon: 'pi pi-sign-out',
						command: () => {
							this.logout();
						},
					},
				],
			},
		];
	}
	openNew() {

		this.router.navigate(['/notes']);
	}

	async logout() {
		try {
			await this.authService.logout();
			this.router.navigate(['login']);
		} catch (error) {
			console.log(error);
		}
	}
}
