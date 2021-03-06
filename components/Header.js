import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        <p >
            Keep up to date with the latest web news
        </p>
    </div>
  )
}

export default Header