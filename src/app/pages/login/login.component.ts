import { Component, inject, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../shared/services/userAuthentication.service';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { DarkModeService } from '../../shared/services/darkMode.service';
import { NgClass } from '@angular/common';

@Component({
	templateUrl: './login.component.html',
	selector: 'app-login',
	providers: [],
	imports: [Button, NgClass],
})
export class LoginComponent implements OnInit {
	darkModeService = inject(DarkModeService);

	size = {
		width: 20,
		height: 20,
	};
	private authService = inject(UserAuthenticationService);
	private router = inject(Router);
	user = this.authService.getCurrentUser()?.displayName

	ngOnInit() {
		if(this.user) this.router.navigate(["/home"])
		this.darkModeService.initTheme();
	}

	async loginWithGoogle() {
		try {
			await this.authService.signInWithGoogle();
			this.router.navigate(['home']);
		} catch (error) {
			console.log(error);
		}
	}
}
