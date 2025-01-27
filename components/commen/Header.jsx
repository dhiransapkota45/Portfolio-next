import React from 'react'

const Header = ({ title }) => {
    return (
        <div className=' text-primary-dark dark:text-primary-light font-bold  text-3xl tracking-wider '>
            {title.toUpperCase()}
        </div>
    )
}

export default Header