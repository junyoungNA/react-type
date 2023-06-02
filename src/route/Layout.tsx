import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


interface Props {
    children: React.ReactNode
}

export const Layout : React.FC<Props> = ({children} : Props) => {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}

export default Layout