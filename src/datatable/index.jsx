import React from 'react'
import { CardColumns } from 'react-bootstrap'
import '../App.css'
export default function datatable({data}){

    const columns = data[0] && Object.keys(data[0])
    return <table className='paleBlueRows' cellPadding= {11} cellSpacing={11}>
        <thead>
            <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
            </tr>)}
        </tbody>
    </table>
}