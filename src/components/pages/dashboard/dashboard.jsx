import React, { useState, useEffect } from 'react'
import './dashboard.css'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./data";
// import PieChart from "../components/PieChart";
import { Bar } from "react-chartjs-2";
import withAuthCheck from '../../Auth/withAuthCheck';
const moment = require('moment-timezone');



function Dashboard() {

  moment.tz.setDefault('Asia/Kolkata');

  const [web, setWeb] = useState(0);
  const [code, setCode] = useState(0);
  const [weekInfoWeb, setweekInfoWeb] = useState({});
  const [weekInfoCode, setweekInfoCode] = useState({});

  function getWeekWebKata(week, type) {
    let firstDay;
    let lastDay;

    if (type == "next") {
      firstDay = moment().add(week, 'week').startOf('week');
      lastDay = moment().add(week, 'week').endOf('week');
    } else if (type == "previous") {
      firstDay = moment().subtract(week, 'week').startOf('week');
      lastDay = moment().subtract(week, 'week').endOf('week');
    }

    return { firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') };
  }


  function getWeekCodeKata(week, type, initial) {
    console.log("weeeek",week,type)
    let firstDay;
    let lastDay;

    if (type == "next") {
      firstDay = moment().add(week, 'week').startOf('week');
      lastDay = moment().add(week, 'week').endOf('week');
      if(!initial){
        setCode(week+1)
      }
    } else if (type == "previous") {
      firstDay = moment().subtract(week, 'week').startOf('week');
      lastDay = moment().subtract(week, 'week').endOf('week');
      if(!initial){
        setCode(week-1)
      }
    }

    setweekInfoCode({ firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') })
    return { firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') };
  }
  
  useEffect(() => { 
    setweekInfoWeb(getWeekWebKata(0,'next', 'initial'))
    setweekInfoCode(getWeekCodeKata(0, 'next', 'initial'))
  }, [])
  

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgb(255, 190, 190)"
        ],
        borderColor: "rgb(255, 190, 190)",
        borderWidth: 0,

      }
    ]
  });

  const options = {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      title: {
        display: false,
        text: "Users Gained between 2016-2020"
      },
      legend: {
        display: false
      }
    }
  };


  return (
    <section className='dashboard-container' >
      <div className='text-center' >
        <h5>Activities</h5>
      </div>
      <div className="row justify-content-around">
        <div className="col-xl-5 column-style">
          <div class="d-flex box-style">
            <div class="Dashboard_chart__topic__3JSqN">Codekata</div>
            <div className='d-flex score-style'>
              <div> <span className='score-style-span'  >Today : 0</span> <span> <span className='score-circle-first' ></span> Max Scores </span> </div>
              <div> <span className='score-style-span' >Total : 1310</span> <span> <span className='score-circle-second' ></span> Points Earned</span> </div>
            </div>
          </div>
          <Bar
            data={chartData}
            options={options}
          />

          <div class="Dashboard_space__between__a7GVw">
            <div class="" style={{ 'cursor': 'pointer' }}>
              <img class="p-2" src="/Icons/backwardArrow.svg" alt="add/plus" value={code} onClick={() => getWeekCodeKata(code, 'previous', null)}></img>
            </div>
            <div class="" id="web" >{weekInfoCode.firstDay} - {weekInfoCode.lastDay}</div>
            <div class="" style={{ 'cursor': 'pointer' }}>
              <img class="p-2" src="/Icons/forwardArrow.svg" alt="add/plus" onClick={() => getWeekCodeKata(code, 'next', null)} ></img>
            </div>
          </div>
        </div>
        <div className="col-xl-5 column-style">
          <div class="d-flex box-style">
            <div class="Dashboard_chart__topic__3JSqN">Codekata</div>
            <div className='d-flex score-style'>
              <div> <span className='score-style-span'  >Today : 0</span> <span> <span className='score-circle-first' ></span> Max Scores </span> </div>
              <div> <span className='score-style-span' >Total : 1310</span> <span> <span className='score-circle-second' ></span> Points Earned</span> </div>
            </div>
          </div>
          <Bar
            data={chartData}
            options={options}
          />

          <div class="Dashboard_space__between__a7GVw">
            <div class="" style={{ 'cursor': 'pointer' }}  >
              <img class="p-2" src="/Icons/backwardArrow.svg" alt="add/plus"></img>
            </div>
            <div class="" value={web} >{weekInfoWeb.firstDay} - {weekInfoWeb.lastDay}</div>
            <div class="" style={{ 'cursor': 'pointer' }} >
              <img class="p-2" src="/Icons/forwardArrow.svg" alt="add/plus"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withAuthCheck(Dashboard);
