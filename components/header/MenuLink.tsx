import React from 'react'

const MenuLink = ({id, isActive, children}: { id: string, isActive: boolean, children: React.ReactNode }) => {
    return (
        <a href={"#" + id}
           className={'button my-[-2px] ' + (isActive ? 'black-button' : '')}>
            {children}
        </a>
    )
}
export default MenuLink
