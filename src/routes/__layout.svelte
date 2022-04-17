<script>
	import Nav from '$lib/components/Nav.svelte';
	import { getAuth } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';
	import { onMount } from 'svelte';
	import authStore from '$lib/stores/auth';

	const { auth } = initFirebase();
	onMount(() => {
		auth.onAuthStateChanged((user) => {
			authStore.set({
				firebaseControlled: true,
				user,
				isLoggedIn: user !== undefined
			});
		});
	});
</script>

<Nav />

<slot />
