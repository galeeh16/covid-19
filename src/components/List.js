import React from 'react'

const number_format = (x = 0) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const List = (props) => {
    return (
        <tr>
            <td className="text-center">{props.no}</td>
            <td>{props.provinsi == '' ? '-' : props.provinsi}</td>
            <td className="font-weight-bold text-center text-dark">{number_format(props.kasusPositive)}</td>
            <td className="text-success font-weight-bold text-center">{number_format(props.kasusSembuh)}</td>
            <td className="text-danger font-weight-bold text-center">{number_format(props.kasusMeninggal)}</td>
        </tr>
    )
}

export default List 