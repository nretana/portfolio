import React from 'react';
import cls from 'clsx';


export type CardFooterProps = {
    className?: string
    children: React.ReactNode
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => {
    return(<div className={cls('card-footer', className)}>{children}</div>)
}