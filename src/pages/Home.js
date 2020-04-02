import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Home.css'

// components
import Header from '../components/Header'
import Content from '../components/Content'
import Today from '../components/Today'
import Footer from '../components/Footer'

// store 
import { CoronaContext } from '../store/CoronaContext'

const Home = () => {

    const { total, dataPerProvince, getDataPerProvince, dataToday, getDataPerToday } = useContext(CoronaContext)

    useEffect(() => {
        getDataPerProvince()
        getDataPerToday()
    }, []) 
    
    return (
        <>
        <Container fluid>
            <Header total={total}/>
            <Today dataToday={dataToday}/>
            <Content dataPerProvince={dataPerProvince} />
        </Container>
        <Footer/>
        </>
    )
    
}

export default Home 