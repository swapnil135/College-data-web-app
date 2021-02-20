import { Bar, Line, Pie } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react'
export default function Temp(props) {

    const [chartdata, setchartData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {

        const data = props.data
        console.log(props.data)
        const graph = {
            labels: [],
            datasets: [{
                label: 'Count',
                data: [
                ],
                backgroundColor: [
                ]
            }]
        }
        for (var key in props.data) {
            graph.labels.push(key)
            graph.datasets[0].data.push(props.data[key])
            graph.datasets[0].backgroundColor.push('rgba(233,43,12,0.8)')
        }
        setLoaded(true)
        setchartData(graph)
        console.log(chartdata)
        // if (props.data.size == 0) setLoaded(1 - isLoaded)
        // console.log(props.data.size)
        // data.forEach(element => {
        //     this.state.chartData.labels.push(element)
        // });
    })
    return (
        <div>
            <div ClassName='chart'>
                <Bar
                    data={chartdata}
                    options={{
                        title: {
                            display: true,
                            text: 'Colleges by state ',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                    height={100}
                />
            </div>
        </div>
    )
}