import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { Menubar } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { DarkModeService } from '../../services/darkMode.service';

@Component({
	selector: 'app-header',
	imports: [
		Menubar,
		BadgeModule,
		AvatarModule,
		InputTextModule,
		Ripple,
		CommonModule,
		ToggleSwitchModule,
		FormsModule,
		Button,
	],
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] = [];
	darkModeService = inject(DarkModeService);

	ngOnInit() {
		this.darkModeService.initTheme();
		this.items = [
			{
				label: 'Inicio',
				icon: 'pi pi-home',
			},
			{
				label: 'Archivo',
				items: [
					{
						label: 'Nota nueva',
						icon: 'pi pi-bolt',
						//shortcut: 'Ctrl+N',
					},
					{
						label: 'Nueva libreta',
						icon: 'pi pi-server',
						//shortcut: 'Alt+Shift+N',
					},
				],
			},
			/* {
				label: 'Editar',
				icon: 'pi pi-search',
				items: [
					{
						label: 'Deshacer',
						icon: 'pi pi-bolt',
						shortcut: 'Ctrl+Z',
					},
					{
						label: 'Rehacer',
						icon: 'pi pi-server',
						shortcut: 'Ctrl+Y',
					},
					{
						separator: true,
					},
					{
						label: 'Cortar',
						icon: 'pi pi-pencil',
						shortcut: 'Ctrl+X',
					},
					{
						label: 'Copiar',
						icon: 'pi pi-pencil',
						shortcut: 'Ctrl+C',
					},
					{
						label: 'Pegar',
						icon: 'pi pi-pencil',
						shortcut: 'Ctrl+V',
					},
					{
						separator: true,
					},
					{
						label: 'Seleccionar todo',
						shortcut: 'Ctrl+A',
					},
				],
			}, */
		];
	}
}
