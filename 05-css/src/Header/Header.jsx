import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>     
        <h2>This is a Header</h2>
        <button>Wish</button>
    </div>
  )
}

export default Header