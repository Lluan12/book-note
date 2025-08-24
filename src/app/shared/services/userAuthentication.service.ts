import { inject, Injectable, signal } from '@angular/core';
import {
	Auth,
	browserLocalPersistence,
	getRedirectResult,
	GoogleAuthProvider,
	onAuthStateChanged,
	setPersistence,
	signInWithPopup,
	signInWithRedirect,
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
