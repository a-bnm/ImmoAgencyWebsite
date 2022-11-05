import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className='text-decoration-none fw-bold text-white'
        >
            {children}
        </Link>
    );
}
