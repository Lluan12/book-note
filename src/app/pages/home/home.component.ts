import { Component, inject, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';
import { Notes } from '../../shared/models/notes.model';
import data from '../../../../public/data/data.json';
import { Carousel } from "primeng/carousel";

@Component({
	templateUrl: './home.component.html',
	imports: [PanelModule, Carousel],
})
export class HomeComponent implements OnInit {
	private authService = inject(UserAuthenticationService);
	user = this.authService.getCurrentUser()?.displayName;
	recentNotes: Notes[] = data;
	responsiveOptions: any[] | undefined;

	ngOnInit(): void {
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
