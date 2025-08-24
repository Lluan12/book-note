import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { UserAuthenticationService } from '../../services/userAuthentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	imports: [MenuModule, BadgeModule, RippleModule, AvatarModule],
})
export class MenuComponent implements OnInit {
	private authService = inject(UserAuthenticationService);
	private router = inject(Router);
	user = this.authService.getCurrentUser()
	items: MenuItem[] = [];

	ngOnInit() {
		this.items = [
			{
				separator: true,
			},
			{
				items: [
					{
						label: 'Inicio',
						icon: 'pi pi-home',
					},
					{
						label: 'Notas',
						icon: 'pi pi-pen-to-square',
					},
					{
						label: 'Libretas',
						icon: 'pi pi-book',
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

	async logout() {
		try {
			await this.authService.logout();
			this.router.navigate(['login']);
		} catch (error) {
			console.log(error);
		}
	}
}
