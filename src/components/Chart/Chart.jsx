import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length
            ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#00bcd4',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#f44336',
                        backgroundColor: '#f44336b0',
                        fill: true
                    }],
                }}
            />) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels:['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                '#00bcd4',
                                '#00d66b',
                                '#f44336'
                            ],
                            data:[confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    
                    options={{
                        legend: { display: false },
                        title: {display:true, text:`Current state in ${country}`},
                    }}
                />
            ):null
    );


    return (
        <div className={styles.container}>
            {country ? barChart: lineChart}
        </div>
    )
}

export default Chart;