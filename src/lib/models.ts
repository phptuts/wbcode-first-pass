import type { serverTimestamp } from 'firebase/firestore';

// This contains a list of text the teacher has share during her class.
export interface Text<T> {
	text: string;
	version: number;
	created_at: T;
}

// A sessions like a class
export interface Session<T> {
	id: string;
	is_active: boolean;
	nickname: string;
	created_at: T;
}

// This represents a teacher
export interface Teacher<T> {
	id: string;
	uid: string;
	email: string;
	name?: string;
	picturePath?: string;
	created_at: T;
}
