import { Component, inject, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';
import { Notes } from '../../shared/models/notes.model';
import { Carousel } from 'primeng/carousel';
import { NotesService } from '../../shared/services/notes.service';
import { DatePipe, NgClass } from '@angular/common';
import { DarkModeService } from '../../shared/services/darkMode.service';
import { BookService } from '../../shared/services/book.service';
@Component({
	templateUrl: './home.component.html',
	imports: [PanelModule, Carousel, DatePipe, NgClass],
})
export class HomeComponent implements OnInit {
	private authService = inject(UserAuthenticationService);
	private booksService = inject(BookService);
	private notesService = inject(NotesService);
	darkMode = inject(DarkModeService);
	user = this.authService.getCurrentUser()?.displayName;
	recentNotes!: Notes[];
	responsiveOptions: any[] | undefined;

	ngOnInit(): void {
		this.booksService.verifyFirstLibreta().subscribe()
		this.notesService.getNotes().subscribe((notes) => {
			this.recentNotes = notes;
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
}
