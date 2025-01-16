import React, { Children } from 'react'

const NewDrawer = ({ children }) => {
    return <div className="bg-gray-100/20">{children}</div>
}

export const DrawerHead = ({ children }) => {
    return <div className="bg-red-100/20">{children}</div>
}

export const DrawerBody = ({ children }) => {
    return <div className="bg-blue-100/20">{children}</div>
}

export const DrawerFoot = ({ children }) => {
    return <div className="bg-orange-100/20">{children}</div>
}

export default NewDrawer
