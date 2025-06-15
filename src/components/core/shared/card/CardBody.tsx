import React, { ReactNode } from 'react'
import cls from 'clsx'


export type CardBodyProps = {
    className?: string
    children: ReactNode
}

export const CardBody: React.FC<CardBodyProps> = ({ className, children }) => {
    return(<div className={cls('card-body', className)}>{children}</div>)
}