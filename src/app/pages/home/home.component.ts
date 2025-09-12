import { Component, inject, OnInit, signal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';
import { Notes, NotesWithoutId } from '../../shared/models/notes.model';
import { Carousel } from 'primeng/carousel';
import { NotesService } from '../../shared/services/notes.service';
import { DatePipe, NgClass } from '@angular/common';
import { DarkModeService } from '../../shared/services/darkMode.service';
//import { BookService } from '../../shared/services/book.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
	templateUrl: './home.component.html',
	imports: [
		PanelModule,
		Carousel,
		DatePipe,
		NgClass,
		ProgressSpinnerModule,
		Button,
	],
})
export class HomeComponent implements OnInit {
	private authService = inject(UserAuthenticationService);
	//private booksService = inject(BookService);
	private notesService = inject(NotesService);
	private router = inject(Router);
	darkMode = inject(DarkModeService);
	user = this.authService.getCurrentUser()?.displayName;
	recentNotes = signal<Notes[]>([]);
	responsiveOptions: any[] | undefined;
	isData = false;

	ngOnInit(): void {
		/* this.booksService
			.verifyFirstLibreta(this.authService.getCurrentUser()!)
			.subscribe((res) => {
				console.log(res);
			}); */
		this.notesService
			.getNotes(this.authService.getCurrentUser()!)
			.subscribe((notes) => {
				this.recentNotes.set(notes);
				this.isData = true;
			});

		this.responsiveOptions = [
			{
				breakpoint: '1400px',
				numVisible: 5,
				numScroll: 1,
			},
			{
				breakpoint: '1199px',
				numVisible: 4,
				numScroll: 1,
			},
			{
				breakpoint: '767px',
				numVisible: 3,
				numScroll: 1,
			},
			{
				breakpoint: '575px',
				numVisible: 2,
				numScroll: 1,
			},
		];
	}

	addNote(): void {
		const note: NotesWithoutId = {
			content: '',
			title: '',
			autor: this.authService.getCurrentUser()?.uid!,
		};
		this.notesService.createNote(note).subscribe((note) => {
			this.router.navigate(['notes', note._id]);
		});
	}

	openNote(id: string): void {
		this.router.navigate(['notes', id]);
	}
}
