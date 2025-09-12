import { inject, Injectable, signal } from '@angular/core';
import { Notes, NotesWithoutId } from '../models/notes.model';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root',
})
export class NotesService {
	private apiUrl = environment.apiUrl;
	private http = inject(HttpClient);
	recentNotes = signal<Notes[]>([]);

	getNotes(user: User) {
		const autor = user.uid;
		return this.http.get<Notes[]>(`${this.apiUrl}/notes/recent/${autor}`);
	}

	getAllNotes(user: User) {
		const autor = user.uid;
		return this.http.get<Notes[]>(`${this.apiUrl}/notes/${autor}`);
	}

	createNote(note: NotesWithoutId) {
		return this.http.post<Notes>(`${this.apiUrl}/notes`, note);
	}

	updateNote(note: Notes) {
		return this.http.put<Notes>(`${this.apiUrl}/notes/${note._id}`, note);
	}

	deleteNote(id: string) {
		return this.http.delete(`${this.apiUrl}/notes/${id}`);
	}

	createNoteDefault(user: User) {
		const autor = user.uid;
		return this.http.get<Notes>(`${this.apiUrl}/notes/${autor}`);
	}

	// Ordenar por título (alfabético)
	sortByTitle(ascending: boolean = true) {
		this.recentNotes.update((notes) => {
			const sorted = [...notes].sort((a, b) => {
				return ascending
					? a.title.localeCompare(b.title)
					: b.title.localeCompare(a.title);
			});
			return sorted;
		});
	}

	// Ordenar por fecha de creación
	sortByCreatedDate(ascending: boolean = true) {
		this.recentNotes.update((notes) => {
			const sorted = [...notes].sort((a, b) => {
				const dateA = new Date(a.created!).getTime();
				const dateB = new Date(b.updated!).getTime();
				return ascending ? dateA - dateB : dateB - dateA;
			});
			return sorted;
		});
	}

	// Ordenar por fecha de actualización
	sortByUpdatedDate(ascending: boolean = true) {
		this.recentNotes.update((notes) => {
			const sorted = [...notes].sort((a, b) => {
				const dateA = new Date(a.created!).getTime();
				const dateB = new Date(b.updated!).getTime();
				return ascending ? dateA - dateB : dateB - dateA;
			});
			return sorted;
		});
	}
}
