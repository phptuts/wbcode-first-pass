import type { serverTimestamp } from 'firebase/firestore';
// https://firebase.google.com/docs/firestore/manage-data/add-data#custom_objects
// Implement Custom Objects
// Don't do sub collections because we don't need to query on them
// Keep things simple just having a bunch of sessions
enum ContentType {
	HTML,
	CSS,
	JS,
	Text
}

// This contains a list of text the teacher has share during her class.
export interface ContentBlock {
	type: ContentType;
	text: string;
}

export interface Page {
	title: string;
	textblocks: [number: ContentBlock];
}

// This turns into a class
export interface Lesson<T> {
	id: string;
	is_active: boolean;
	nickname: string;
	created_at: T;
	teacher_id: string;
	pageVersions: [number: Page];
}

// Idea this takes up the right side of the page in website
// that's expandable

// This turns into a class
// This represents a teacher
export interface Teacher<T> {
	id: string;
	uid: string;
	email: string;
	name?: string;
	picturePath?: string;
	created_at: T;
}
