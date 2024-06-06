import React from 'react'
import style from './header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <>
        <div className={style['header-container']}>
            <Link href='/'className={style['header-link-left']}>Solomon Obúre</Link>
            <div>
                <Link href='/resume' className={style['header-link-resume']}>Resume</Link>
                <Link href='/contact'className={style['header-link-contact']}>Contact</Link>
            </div>
        </div>
        </>
    );
};

export default Header ;

