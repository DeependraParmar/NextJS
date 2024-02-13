import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
            <header className="bg-black py-4">
                <nav className="text-center">
                    <ul className="flex justify-center gap-8">
                        <li>
                            <Link href="/" className="text-sm font-medium uppercase">Home</Link>
                        </li>
                        <li>
                        <Link href="/about" className="text-sm font-medium uppercase">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default header
