import { Notes } from './notes.model';

export interface Book {
	id?: number;
	title?: string;
	created?: Date;
	updated?: Date;
	autor?: String;
	//notes?: Notes[];
}
