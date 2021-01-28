import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";
import "firebase/storage";
import { config } from './firebase-config';

const FirebaseAuth = firebase.initializeApp(config);
const Firestore = FirebaseAuth.firestore();
const FirebaseStorage = FirebaseAuth.storage();

export { FirebaseAuth, Firestore, FirebaseStorage }