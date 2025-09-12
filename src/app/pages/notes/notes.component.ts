import { Component, inject, OnInit, signal } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { Notes, NotesWithoutId } from '../../shared/models/notes.model';
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
import { BookService } from '../../shared/services/book.service';
import { Book } from '../../shared/models/books.model';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';
import { NotesService } from '../../shared/services/notes.service';
import { DatePipe } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
		DatePipe,
		ToastModule,
		ConfirmPopupModule,
	],
	templateUrl: './notes.component.html',
	providers: [MessageService, ConfirmationService],
})
export class NotesComponent implements OnInit {
	darkMode = inject(DarkModeService);
	private bookService = inject(BookService);
	notesService = inject(NotesService);
	private userService = inject(UserAuthenticationService);
	private messageService = inject(MessageService);
	private confirmationService = inject(ConfirmationService);
	private route = inject(ActivatedRoute);
	private router = inject(Router);
	breadcrumbItems: MenuItem[] | undefined;
	menuItems: MenuItem[] | undefined;
	sortItems: MenuItem[] | undefined;
	books: Book[] = [];
	selectedNote!: Notes;
	selected = signal<string>('');
	home: MenuItem | undefined;
	title = '';
	content = '';
	id: string = '';

	constructor() {
		this.route.params.subscribe((data) => {
			this.id = data['id'];
		});
	}

	ngOnInit() {
		this.notesService
			.getAllNotes(this.userService.getCurrentUser()!)
			.subscribe((notes) => {
				if (this.id) {
					const note = notes.find((item) => item._id == this.id);
					this.selectedNote = note!;
					this.title = this.selectedNote.title;
					this.content = this.selectedNote.content;
					this.selected.set(this.selectedNote._id);
					this.notesService.recentNotes.set(notes);
				} else {
					if (notes.length > 0) {
						this.selectedNote = notes[0];
						this.notesService.recentNotes.set(notes);
						this.title = this.selectedNote.title;
						this.content = this.selectedNote.content;
						this.selected.set(this.selectedNote._id);
						this.id = this.selectedNote._id;
					} else {
						this.agregarNota();
					}
				}
			});
		//Version para books
		/* this.bookService
			.getBooks(this.userService.getCurrentUser()!)
			.subscribe((books) => {
				this.books = books;
				const notes = books.map((item) => item.notes);
				console.log(notes);
				if (!notes) this.recentNotes = notes;
				}); */

		this.menuItems = [
			{
				label: 'Guardar',
				icon: 'pi pi-save',
				command: () => {
					this.saveNote();
				},
			},
			/* { label: 'Mover', icon: 'pi pi-file-export' }, */
			{
				label: 'Eliminar',
				icon: 'pi pi-trash',
				command: (event) => {
					this.confirm1(event.originalEvent!);
				},
			},
		];

		this.sortItems = [
			{
				label: 'Ordenar por',
				items: [
					{
						label: 'Titulo',
						command: () => {
							this.notesService.sortByTitle();
						},
					},
					{
						label: 'Fecha de actualizacion',
						command: () => {
							this.notesService.sortByUpdatedDate();
						},
					},
					{
						label: 'Fecha de creacion',
						command: () => {
							this.notesService.sortByCreatedDate;
						},
					},
				],
			},
		];
	}

	confirm1(event: Event) {
		this.confirmationService.confirm({
			target: event.target as EventTarget,
			message: 'Estas seguro de eliminar la nota?',
			header: 'Confirmacion',
			closable: true,
			closeOnEscape: true,
			icon: 'pi pi-exclamation-triangle',
			rejectButtonProps: {
				label: 'Cancelar',
				severity: 'secondary',
				outlined: true,
			},
			acceptButtonProps: {
				label: 'Aceptar',
			},
			accept: () => {
				this.deleteNote(this.id);
				this.messageService.add({
					severity: 'info',
					summary: 'Confirmed',
					detail: 'Haz eliminado la nota correctamente',
				});
			},
			reject: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Cancelado',
					detail: 'Haz cancelado la operacion',
					life: 3000,
				});
			},
		});
	}

	changeSelection(id: string): void {
		this.selected.set(id);
		this.id = id;
		this.router.navigate(['notes', id]);
		const newNote = this.notesService
			.recentNotes()
			.find((note) => note._id == id);
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
			/* {
				label: this.selectedNote.book
				? this.selectedNote.book
				: 'Primera Libreta',
				icon: 'pi pi-book',
				}, */
			{
				label: this.selectedNote.title,
				icon: 'pi pi-pen-to-square',
			},
		];
	}

	agregarNota() {
		/* this.notesService
			.createNoteDefault(this.userService.getCurrentUser()!)
			.subscribe((note) => {
				note.book = 'Primera Libreta';
				this.recentNotes.push(note);
				this.selected = note.id;
				}); */
		const note: NotesWithoutId = {
			content: '',
			title: '',
			autor: this.userService.getCurrentUser()?.uid!,
		};
		this.notesService.createNote(note).subscribe((note) => {
			this.notesService.recentNotes.update((value) => [...value, note]);
			this.selected.set(note._id);
			this.changeBreadCrumbItems();
		});
	}

	saveNote() {
		this.selectedNote.content = this.content;
		this.selectedNote.title = this.title;
		this.notesService.updateNote(this.selectedNote).subscribe((res) => {
			this.notesService.recentNotes.update((notes) => {
				const index = notes.findIndex((item) => item._id === res._id);
				if (index !== -1) {
					const newNotes = [...notes]; // copia inmutable
					newNotes[index] = res; // sustituye el anterior
					return newNotes; // devuelve nuevo array
				}
				return notes;
			});
		});
	}

	moveNote() {}

	duplicateNote() {}

	deleteNote(id: string) {
		this.notesService.deleteNote(id).subscribe((res) => {
			const newNotes = this.notesService
				.recentNotes()
				.filter((item) => item._id !== id);
			if (newNotes.length > 0) {
				this.selectedNote = newNotes[0];
				this.selected.set(this.selectedNote._id);
				this.notesService.recentNotes.set(newNotes);
				this.id = this.selectedNote._id;
				this.title = this.selectedNote.title;
				this.content = this.selectedNote.content;
			} else {
				this.id = '';
				this.notesService.recentNotes.set([]);
				this.title = '';
				this.content = '';
			}
		});
	}
}
