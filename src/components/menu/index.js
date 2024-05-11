import React from 'react'
import { menu_list } from '../../mock/data'
import './style.css'

const Menu = ({ setCategory }) => {
    return (
        <div className='menu' id='menu'>
            <h1>اكتشف قائمة الطعام لدينا</h1>
            <div className='menu_list'>
                {menu_list.map((menu, index) => {
                    return (
                        <div className='menu_list_item' key={index} onClick={() => setCategory((prev) => prev === menu.menu_name ? "All" : menu.menu_name)}>
                            <img src={menu.menu_image} alt={menu.name} loading='lazy' />
                            <h3>{menu.menu_name}</h3>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Menu
