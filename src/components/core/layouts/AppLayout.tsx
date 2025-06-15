import React, { ReactNode, useTransition } from 'react'

export type AppLayoutProps  = {
    children: ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const t = useTransition();

    return (<div>{children}</div>)
}