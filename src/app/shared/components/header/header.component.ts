import { Component, OnInit } from '@angular/core';
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
	checked: boolean = true;

	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-copy',
			},
			{
				label: 'Archivo',
				items: [
					{
						label: 'Nota nueva',
						icon: 'pi pi-bolt',
						shortcut: 'Ctrl+N',
					},
					{
						label: 'Nueva libreta',
						icon: 'pi pi-server',
						shortcut: 'Alt+Shift+N',
					},
				],
			},
			{
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
			},
		];
	}

	toggleDarkMode(): void {
		this.checked = !this.checked;
		const element = document.querySelector('html');
		element!.classList.toggle('my-app-dark');
	}
}
