import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-books',
	imports: [
		PanelModule,
		ToolbarModule,
		ButtonModule,
		IconFieldModule,
		InputIconModule,
		MenuModule,
	],
	templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
	sortItems: MenuItem[] | undefined;

	ngOnInit() {
		this.sortItems = [
			{
				label: 'Ordenar por',
				items: [
					{ label: 'Titulo' },
					{ label: 'Fecha de actualizacion' },
					{ label: 'Fecha de creacion' },
				],
			},
		];
	}
}
