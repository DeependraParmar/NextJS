import { getUsers } from '@/lib/prisma/users'
import Link from 'next/link';
import React from 'react'

const users = async() => {
    const {users} = await getUsers();

  return (
    <section className = "fixed h-full w-1/4 bg-black">
        <div className="center p-4">
            <h1 className="text-white mb-8 text-2xl">Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="text-white">
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
      
    </section>
  )
}

export default users
