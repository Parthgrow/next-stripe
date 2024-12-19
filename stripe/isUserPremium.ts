
import firebase from "firebase/compat/app";

export default async function isUserPremium(): Promise<boolean> { 
    await firebase.auth().currentUser?.getIdToken(true) ; 
    const decodeToken = await firebase.auth().currentUser?.getIdTokenResult(); 
    return decodeToken?.claims?.stripeRole ? true : false ; 
}