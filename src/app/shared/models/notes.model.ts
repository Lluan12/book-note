export interface Notes {
	_id: string;
	title: string;
	autor: string;
	content: string;
	created?: string;
	updated?: string;
	book?: string;
}

export type NotesWithoutId = Omit<Notes, '_id'>;
