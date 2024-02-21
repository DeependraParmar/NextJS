import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <header className="bg-black py-4 text-white">
            <nav className="center">
                <ul className="flex justify-center gap-8">
                    <li>
                        <Link href="/" className="text-sm font-medium uppercase">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" className="text-sm font-medium uppercase">
                            Users
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default header;
