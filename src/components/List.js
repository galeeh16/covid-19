import React from 'react'

const List = (props) => {
    return (
        <tr>
            <td className="text-center">{props.no}</td>
            <td>{props.provinsi == '' ? '-' : props.provinsi}</td>
            <td className="font-weight-bold text-center">{props.kasusPositive}</td>
            <td className="text-success font-weight-bold text-center">{props.kasusSembuh}</td>
            <td className="text-danger font-weight-bold text-center">{props.kasusMeninggal}</td>
        </tr>
    )
}

export default List 