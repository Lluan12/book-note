import { Component, inject, OnInit } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { Notes } from '../../shared/models/notes.model';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DarkModeService } from '../../shared/services/darkMode.service';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import data from '../../../../public/data/data.json';

@Component({
	selector: 'app-notes',
	imports: [
		SplitterModule,
		BreadcrumbModule,
		CardModule,
		DividerModule,
		ScrollPanelModule,
		Menu,
		Button,
		TooltipModule,
		BadgeModule,
		FloatLabel,
		FormsModule,
		NgClass,
		EditorModule,
		InputTextModule,
	],
	templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
	breadcrumbItems: MenuItem[] | undefined;
	menuItems: MenuItem[] | undefined;
	sortItems: MenuItem[] | undefined;
	recentNotes: Notes[] = data;
	selectedNote: Notes = data[0];
	selected: number = data[0].id;
	home: MenuItem | undefined;
	title = '';
	content = '';
	darkMode = inject(DarkModeService);

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

		this.changeBreadCrumbItems();
	}
	changeSelection(id: number): void {
		this.selected = id;
		const newNote = data.find((note) => note.id == id);
		if (newNote) {
			this.selectedNote = newNote;
			this.initializateField();
			this.changeBreadCrumbItems();
		}
	}

	initializateField(): void {
		this.title = this.selectedNote.title;
		this.content = this.selectedNote.content;
	}

	changeBreadCrumbItems() {
		this.breadcrumbItems = [
			{
				label: this.selectedNote.book
					? this.selectedNote.book
					: 'Primera Libreta',
				icon: 'pi pi-book',
			},
			{ label: this.selectedNote.title, icon: 'pi pi-pen-to-square' },
		];
	}

	saveNote() {

	}

	moveNote() {

	}

	duplicateNote() {

	}

	deleteNote() {
		
	}

}
