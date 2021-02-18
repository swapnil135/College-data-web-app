import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component {

    constructor(props) {
        super(props);
        const data = props.data
        console.log(props.data)
        this.state = {
            chartData: {
                labels: ['a', 'b', 'c'],
                datasets: [{
                    label: 'Count',
                    data: [4, 5, 6
                    ],
                }]
            }
        }
    }
    render() {
        return (
            <div ClassName='chart'>
                <Bar
                    data={this.state.chartData}
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
        )
    }
}

export default Chart;