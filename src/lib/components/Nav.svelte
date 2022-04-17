<script>
	import { initFirebase } from '$lib/firebase';

	import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

	const provider = new GoogleAuthProvider();

	async function loginGoogle() {
		const { auth } = initFirebase();
		const user = await signInWithPopup(auth, provider);
	}
</script>

<nav>
	<h1>Nav Bar</h1>
	<button on:click={loginGoogle}>Login to google</button>
</nav>

<style>
	nav {
		background-color: red;
	}
</style>
