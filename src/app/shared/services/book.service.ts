import { Injectable, signal } from '@angular/core';
import { Book } from '../models/books.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	private books = signal<Book[]>([]);
	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getBooks() {
		return this.http.get<Book[]>(`${this.apiUrl}/books`);
	}

	createBook(book: Book) {
		return this.http.post<Book>(`${this.apiUrl}/books`, book);
	}

	updateBook(book: Book) {
		return this.http.put<Book>(`${this.apiUrl}/books/${book.id}`, book);
	}

	deleteBook(id: number) {
		return this.http.delete<Book>(`${this.apiUrl}/books/${id}`);
	}

	verifyFirstLibreta() {
		return this.http.get(`${this.apiUrl}/verify/FirstLibreta`);
	}

}
