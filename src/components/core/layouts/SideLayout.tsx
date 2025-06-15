import React from 'react'

export type SideLayoutProps = {
    children: React.ReactNode,
    img?: string | undefined
}

export const SideLayout: React.FC<SideLayoutProps> = ({ children, img }) => {
    return(<div className='container'>
            <div className='row'>
            <div className='col-6'>
                {children}
            </div>
            <div className='col-6'>
                {img && <img src={img} alt='' />}
            </div>
        </div>
    </div>)
}