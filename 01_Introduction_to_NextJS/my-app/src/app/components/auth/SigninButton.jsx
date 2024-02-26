'use client'

import {useSession, signIn, signOut, SessionProvider} from "next-auth/react";
import Image from "next/image";
import {FaUserCircle} from "react-icons/fa";

const SigninButton = () => {
  const {data: session} = useSession();


  if(session){
    return (
        <SessionProvider session={session}>
            <div className="relative h-12 w-12">
                {
                    session?.user?.image ? (
                        <Image src={session.user.image}
                            alt={session.user.name}
                            className="inline-block rounded-full"
                            fill
                        />
                    ) : (
                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full">
                            <FaUserCircle />
                        </span>
                    )
                }
            </div>
        </SessionProvider>
    )
  }
  

  return (
    <button
    className='text-sm font-medium tracking-wider uppercase text-white'
    onClick={() => signIn()}
    >
        Sign In
    </button>
  )
}

export default SigninButton
