import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyACkRcAQNevc1VyRPH8wkgYvozskP305xE',
	authDomain: 'wbcode-b6574.firebaseapp.com',
	projectId: 'wbcode-b6574',
	storageBucket: 'wbcode-b6574.appspot.com',
	messagingSenderId: '927503483018',
	appId: '1:927503483018:web:ad745eddc0d68d4a016d73',
	measurementId: 'G-S52N6RB64E'
};

export function initFirebase() {
	if (getApps().length === 0) {
		initializeApp(firebaseConfig);
	}

	return { auth: getAuth() };
}
