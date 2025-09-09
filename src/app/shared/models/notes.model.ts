export interface Notes {
	id: number;
	title: string;
	content: string;
	created?: string;
	updated?: string;
	book?: string;
}

export type NotesWithoutId = Omit<Notes, 'id'>;
