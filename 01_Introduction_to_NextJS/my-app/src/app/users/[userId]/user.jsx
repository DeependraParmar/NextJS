import Image from 'next/image'
import React from 'react'

const User = ({user}) => {
  return (
    <section className="m-4 py-4 flex flex-col gap-2">
        <Image src={user.imageUrl} alt={user.first_name} width={200} height={200} />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-sm text-stone-400">{user.email}</p>
    </section>
  )
}

export default User
