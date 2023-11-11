import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD0V1g28-lLFHqIjoPcrxnM8f1EYmpOU_E',
  authDomain: 'disney-clone-1a30c.firebaseapp.com',
  projectId: 'disney-clone-1a30c',
  storageBucket: 'disney-clone-1a30c.appspot.com',
  messagingSenderId: '633806328680',
  appId: '1:633806328680:web:4feb76dbebe24369cd3cdd',
  measurementId: 'G-54DZ5XWY4P',
}

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
