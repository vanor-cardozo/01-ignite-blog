import React from 'react'

import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-blog-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite"/>
        </header>
    )
}