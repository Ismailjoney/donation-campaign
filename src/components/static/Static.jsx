import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { checkLcCart } from '../utilites/utilites';
import ReactApexChart from 'react-apexcharts';


const Static = () => {
    const [lcdata, setLcdata] = useState([])
    const data = useLoaderData([])
    console.log(data)
    console.log(data.length)

    useEffect(() => {
        if (data.length) {
            const getLcData = checkLcCart()
            setLcdata(getLcData)
        }

    }, [data])

    const donations = parseFloat(data.length * lcdata.length / 100)
    console.log(donations)
    console.log(lcdata.length)



    const seriesData = [donations, data.length, lcdata.length];
    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['donations persentange', 'total', 'Your donation '],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };



    return (
        <div className='flex justify-center align-middle mt-14 mb-14'>
            <div id="chart">
                <ReactApexChart options={options} series={seriesData} type="pie" width={580} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Static;