import React from 'react'
import cls from 'clsx'
import '@assets/css/components/card.css'

export type CardHeaderProps = {
    className?: string
    children: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
    return(<div className={cls('card-header', className)}>{children}</div>)
}