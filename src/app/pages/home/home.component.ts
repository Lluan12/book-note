import { Component, inject } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CarruselRecentComponen } from './components/carrusel-recent/carrusel-recent.component';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';

@Component({
	templateUrl: './home.component.html',
	imports: [PanelModule, CarruselRecentComponen],
})
export class HomeComponent {
	private authService = inject(UserAuthenticationService);
	user = this.authService.getCurrentUser()?.displayName;
}
