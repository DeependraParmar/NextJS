import Link from 'next/link'
import React from 'react'

const Users = async({users}) => {

  return (
    <section className="fixed h-full w-1/4 bg-black">
        <div className="center py-4">
            <h1 className="text-white text-xl mb-6 border-b-[1px] border-gray-500 pb-4">Users</h1>
            <h2 className="mb-4 text-xl font-meduim text-white">
                <ul className="flex flex-col text-sm text-white gap-1">
                    {
                        users?.map(user => (
                            <li className="text-sm" key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name} </Link>
                            </li>
                        ))
                    }
                </ul>
            </h2>
        </div>

    </section>
  )
}

export default Users
