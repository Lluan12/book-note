import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {
	TableModule,
	Table,
	TableRowCollapseEvent,
	TableRowExpandEvent,
} from 'primeng/table';

@Component({
	selector: 'app-books',
	imports: [
		PanelModule,
		ToolbarModule,
		ButtonModule,
		IconFieldModule,
		InputIconModule,
		MenuModule,
		FloatLabelModule,
		FormsModule,
		TableModule,
		InputTextModule
	],
	templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
	sortItems: MenuItem[] | undefined;
	value2 = '';
	menuItems: MenuItem[] | undefined;
	products: any = [];
	expandedRows = {};

	ngOnInit() {
		this.menuItems = [
			{ label: 'Renombrar libreta', icon: 'pi pi-pencil' },
			{ label: 'Eliminar libreta', icon: 'pi pi-trash' },
		];

		this.products = [
			{
				code: 1,
				name: 'Juan',
				category: 'planchar',
				quantity: 3,
			},
		];

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
	onRowExpand(event: TableRowExpandEvent) {}

	onRowCollapse(event: TableRowCollapseEvent) {}
}
