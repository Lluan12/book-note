import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Notes } from '../../../../shared/models/notes.model';
import data from "../../../../../../public/data/data.json";

@Component({
	selector: 'app-carrusel-recent',
	imports: [CarouselModule, ButtonModule, TagModule],
	templateUrl: './carrusel-recent.component.html',
})
export class CarruselRecentComponen implements OnInit {
	recentNotes: Notes[] = data;

	responsiveOptions: any[] | undefined;


	ngOnInit() {

		this.responsiveOptions = [
			{
				breakpoint: '1400px',
				numVisible: 2,
				numScroll: 1,
			},
			{
				breakpoint: '1199px',
				numVisible: 3,
				numScroll: 1,
			},
			{
				breakpoint: '767px',
				numVisible: 2,
				numScroll: 1,
			},
			{
				breakpoint: '575px',
				numVisible: 1,
				numScroll: 1,
			},
		];
	}

}
