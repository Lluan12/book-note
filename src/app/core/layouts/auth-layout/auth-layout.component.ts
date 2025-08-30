import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../../pages/login/login.component';
import { DarkModeService } from '../../../shared/services/darkMode.service';

@Component({
	selector: 'app-auth-layout',
	imports: [LoginComponent],
	templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {
	private darkModeService = inject(DarkModeService);
	isDark = this.darkModeService.getDarkMode();
}
