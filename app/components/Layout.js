import React from 'react'
import Navbar from 'components/Navbar'

export default function Layout({ children }) {
    let homeCheck = window.location.pathname === '/home'
    return (
        <div className="df jcsb">
            {!homeCheck && <div className="blueDiv"></div>}
            <main className={!homeCheck && 'w95 flr'}>
                <Navbar />
                <section>
                    {children}
                </section>
            </main>
        </div>
    )
}
