export type CoverLayoutProps = {
    children: React.ReactNode
}

export const CoverLayout: React.FC<CoverLayoutProps> = ({ children }) => {
    return(<div className='container-fluid'>
                <div className='row'>
                    <div>{children}</div>
                </div>
            </div>)
}