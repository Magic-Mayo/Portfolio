import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    'Projects',
    'About',
    'Contact'
]

export default ({mobile}) => {
    const location = useLocation();

    return (
        <nav className='nav'>
            <span>Mike Mayo</span>
            <ul>
                {navItems.map((item, ind) => (
                    <Link
                    to={`/${item.toLowerCase()}`}
                    className={`${location.pathname === `/${item.toLowerCase()}` ? 'active' : ''}`}
                    key={ind}
                    >
                        {item}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}