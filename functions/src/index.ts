import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const signup = functions.auth.user().onCreate(async (user) => {
	const db = admin.firestore();
	try {
		await db.collection('teachers').add({
			email: user.email,
			uid: user.uid,
			created_at: admin.firestore.FieldValue.serverTimestamp()
		});
	} catch (e) {
		console.log('tried to save teacher', e);
	}
});
