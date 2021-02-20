import React from 'react'
import { CardColumns } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'
export default function datatable({data}){

    const style = {
        color: 'black',
        textDecoration: 'none'
    }
    const columns = data[0] && Object.keys(data[0])
    console.log(columns)
    return <table className='paleBlueRows' cellPadding= {11} cellSpacing={11}>
        <thead>
            <tr>{data[0] &&
            
            columns.filter(heading => heading!=='_id' && heading!=='__v')
            .map((heading) => 
             <th>{heading}</th>
                )}</tr>
        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                    columns.filter(column => column!= '_id' && column != '__v')
                    .map(column =>
                          (<td><Link to='/student' style={style}>{row[column]}</Link></td>)
                     )
                }
            </tr> )}
        </tbody>
    </table>
}