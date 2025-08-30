import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DarkModeService {
	private optionStorage = 'dark-mode';
	private element = document.querySelector('html');
	private isDarkMode = signal<boolean>(
		localStorage.getItem(this.optionStorage) === 'true'
	);

	initTheme() {
		if (this.isDarkMode()) {
			this.element!.classList.add('my-app-dark');
		}
	}

	toggleToDarkMode() {
		this.isDarkMode.update((value) => !value);
		this.element!.classList.toggle('my-app-dark');
		localStorage.setItem(this.optionStorage, String(this.isDarkMode()));
	}

	getDarkMode(): boolean {
		return this.isDarkMode();
	}
}
