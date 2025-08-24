import { Component, inject, OnInit } from '@angular/core';
import { GoogleComponent } from './components/google.component';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';
import { Router } from '@angular/router';

@Component({
	templateUrl: './login.component.html',
	selector: 'app-login',
	providers: [],
	imports: [GoogleComponent],
})
export class LoginComponent implements OnInit {
	size = {
		width: 20,
		height: 20,
	};
	private authService = inject(UserAuthenticationService);
	private router = inject(Router);

	async ngOnInit(): Promise<void> {}

	async loginWithGoogle() {
		try {
			await this.authService.signInWithGoogle();
			this.router.navigate(['home']);
		} catch (error) {
			console.log(error);
		}
	}
}
