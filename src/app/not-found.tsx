import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, that page couldn't be found.</p>
            <Link href='/'>Return to home</Link>
        </div>
    )
}

export default NotFound
