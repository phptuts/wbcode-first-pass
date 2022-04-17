import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

const authStore = writable<{
	firebaseControlled: boolean;
	user?: User;
	isLoggedIn: boolean;
}>({ firebaseControlled: false, isLoggedIn: false });

export default {
	set: authStore.set,
	subscribe: authStore.subscribe
};
