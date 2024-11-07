import React from 'react'

const MenuContainer = ({link, icon }) => {
  return (
    <li>
        <a href={link}/>
        <span className='icon'> {icon}</span>
    </li>
    
  )
}

export default MenuContainer;
