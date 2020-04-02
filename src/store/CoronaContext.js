import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CoronaContext = createContext()

const CoronaProvider = (props) => {
    const [dataPerProvince, setDataPerProvince] = useState([])
    const [dataToday, setDataToday] = useState({})

    const getDataPerProvince = async () => {
        await axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
                    .then(
                        (response) => {
                            setDataPerProvince(response.data.data)
                        },
                        (error) => {
                            console.log(error);
                        }
                    )
                    .catch(err => {
                        console.log(err)
                    })
    }

    const getDataPerToday = async () => {
        await axios.get('https://indonesia-covid-19.mathdro.id/api')
        .then(
            (response) => {
                let data = {
                    meninggal: response.data.meninggal,
                    sembuh: response.data.sembuh,
                    perawatan: response.data.perawatan,
                    jumlahKasus: response.data.jumlahKasus
                }
                setDataToday(data)
            },
            (error) => {
                console.log(error)
            }
        )
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <CoronaContext.Provider value={{ 
            dataPerProvince, 
            getDataPerProvince,
            getDataPerToday,
            dataToday
        }}>
            { props.children }
        </CoronaContext.Provider>
    )
}

export default CoronaProvider