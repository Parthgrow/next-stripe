import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise : Stripe | null ; 


const initializeStripe = async ()=>{
    if(!stripePromise){
        stripePromise = await loadStripe("pk_test_51KXrs3SCiWlzYPout9ImzpKMF4qeZzwmTV6GdVHZ8tDgRlOnXh8bmeqorles3qMsLHGqSi0k74pbcPGnt4Mkhjqx00zvx6iOjp") ; 

    }

    return stripePromise
}


export default initializeStripe