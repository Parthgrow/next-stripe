"use client"
import { auth, provider } from "@/firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {

  const router = useRouter()

  const handleLogin = async()=>{
    const result = await signInWithPopup(auth, provider) ; 
    const user = result.user 
    console.log(user.uid)
  }

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        router.push("/dashboard")

      }
      else
      {
        console.log("The user needs to sign up")

      }
    })
  },[])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <button onClick={handleLogin}>Login</button>

    </div>
  );
}
