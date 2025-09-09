import { inject, Injectable, signal } from '@angular/core';
import { Notes } from '../models/notes.model';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})

export class NotesService {
	private notes = signal<Notes[]>([]);
	private apiUrl = environment.apiUrl;
	private http = inject(HttpClient)

	getNotes() {
		return this.http.get<Notes[]>(`${this.apiUrl}/notes/top10`);
	}
	
	createNote(id: string, note: Notes) {
		return this.http.post<Notes>(`${this.apiUrl}/books/${id}/notes`, note);
	}
	
	updateNote(note: Notes) {
		return this.http.put<Notes>(`${this.apiUrl}/notes/${note.id}`, note);
	}
	
	deleteNote(id: number) {
		return this.http.delete<Notes>(`${this.apiUrl}/notes/${id}`);
	}
	
}