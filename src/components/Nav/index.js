import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    'Projects',
    'About',
    'Contact'
]

export default () => {
    const location = useLocation();

    return (
        <>
            <span className='site-title'>
                <Link to='/'>
                    <span>Mike</span>
                </Link>
                <Link to='/'>
                    <span>Mayo</span>
                </Link>
            </span>
            <nav className='nav'>
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
        </>
    )
}