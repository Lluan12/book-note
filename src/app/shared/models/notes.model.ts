export interface Notes {
	id: number;
	title: string;
	content: string;
	date: string;
	tags?: [string]
}

export type NotesWithoutId = Omit<Notes, 'id'>;
