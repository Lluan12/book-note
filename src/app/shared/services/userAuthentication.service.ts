import { inject, Injectable } from '@angular/core';
import {
	Auth,
	GoogleAuthProvider,
	signInWithPopup,
	User,
	UserCredential,
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root',
})
export class UserAuthenticationService {
	private auth: Auth = inject(Auth);

	signInWithGoogle(): Promise<UserCredential> {
		return signInWithPopup(this.auth, new GoogleAuthProvider());
	}

	getCurrentUser(): User | null {
		return this.auth.currentUser;
	}

	logout(): Promise<void> {
		return this.auth.signOut();
	}
}
