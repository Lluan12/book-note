import { Component, OnInit } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { EditorComponent } from '../../shared/components/editor/editor.component';
import { Notes } from '../../shared/models/notes.model';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import data from '../../../../public/data/data.json';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';

@Component({
	selector: 'app-notes',
	imports: [
    SplitterModule,
    BreadcrumbModule,
    EditorComponent,
    CardModule,
    DividerModule,
    ScrollPanelModule,
    Menu,
    Button,
    TooltipModule,
    BadgeModule,
],
	templateUrl: './notes.component.html',
	styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
	breadcrumbItems: MenuItem[] | undefined;
	menuItems: MenuItem[] | undefined;
	sortItems: MenuItem[] | undefined;
	recentNotes: Notes[] = data;
	selected: number = 1;
	home: MenuItem | undefined;

	ngOnInit() {
		this.menuItems = [
			{ label: 'Guardar', icon: 'pi pi-save' },
			{ label: 'Mover', icon: 'pi pi-file-export' },
			{ label: 'Duplicar', icon: 'pi pi-copy' },
			{ label: 'Eliminar', icon: 'pi pi-trash' },
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

		this.breadcrumbItems = [
			{ label: 'Electronics', icon: 'pi pi-book' },
			{ label: 'Computer', icon: 'pi pi-pen-to-square' },
		];
	}
	changeSelection(id: number): void {
		this.selected = id;
	}
}
