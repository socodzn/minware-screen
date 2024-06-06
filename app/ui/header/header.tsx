import React from 'react'
import style from './header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <>
        <div className={style['header-container']}>
            <Link href='/'className={style['header-link-left']}>Solomon Obúre</Link>
        </div>
        </>
    );
};

export default Header ;
