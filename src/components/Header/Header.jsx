import React from 'react';

function Header({ title, subtitle }) {
    return (
        <div className='header-container'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    );
}

export default Header;
