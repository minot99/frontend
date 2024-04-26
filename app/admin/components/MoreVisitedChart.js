"use client"
import React from "react";
import Chart from "react-apexcharts";

const testValues = {
    options: {
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
    },
    series: [{
        data: [{
            x: 'Ing. Informatica',
            y: 10
        }, {
            x: 'Medicina',
            y: 18
        }, {
            x: 'Ing. Civil',
            y: 13
        }, {
            x: 'Contabilidad',
            y: 20
        }
        , {
            x: 'Administracion',
            y: 5
        }, {
            x: 'Ing. Civil',
            y: 13
        }
    ]
    }]
}

export default function MoreVisitedChart() {
    return (
        <Chart
            options={testValues.options}
            series={testValues.series}
            type="bar"
        />
    );
}