import React from 'react'

const Footer = () => {
    let d = new Date();
    let year = d.getFullYear();

    return (
        <div className="mt-5 d-flex justify-content-center p-4 bg-light w-100"> 
            &copy; {year} Galih Anggoro Jati
        </div>
    )
}

export default Footer 