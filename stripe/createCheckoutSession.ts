import getStripe from "./initializeStripe"
import { firestore } from "../firebase";
import { onSnapshot } from "firebase/firestore";

import { collection, doc, addDoc } from "firebase/firestore";

export async function createCheckoutSession(uid : string, priceId : string)
{
   

    // creating a checkout session and adding certain values in the database 
    const checkoutSessionRef = await addDoc(collection(doc(collection(firestore,"customers"),uid), "checkout_sessions"),{
        price : priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,

    }) 

    // wait for the checkout session to get attached by the extension 

    onSnapshot(checkoutSessionRef, async(snap : any)=>{
        // const {sessionId} = snap.data()
        const {sessionId} = snap.data()
        console.log("session id : ", sessionId)
        console.log("This is snap.data() ", snap.data())
        // we have a session, let's redirect to checkout 
        // Init stripe 
        const stripe = await getStripe()
        stripe?.redirectToCheckout({sessionId})
    })
}