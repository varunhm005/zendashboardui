import React, { useState, useEffect } from 'react'
import { fetchData } from '../../../api/api'
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
  const [webToday, setWebToday] = useState(0);
  const [webTotal, setWebTotal] = useState(0);
  const [codeToday, setCodeToday] = useState(0);
  const [codeTotal, setCodeTotal] = useState(0);

  const [codeChartData, setCodeChartData] = useState({
    labels: [],
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

  const [webChartData, setWebChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Points",
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

  useEffect(() => {
    getWeekWebKata(0, 'next', 'initial')
    getWeekCodeKata(0, 'next', 'initial')
  }, [])

  async function getWeekWebKata(week, type, initial) {
    let firstDay;
    let lastDay;

    if (type === "next") {
      if (!initial) {
        week = week + 1
        setWeb(week)
      }
      firstDay = moment().add(week, 'week').startOf('week');
      lastDay = moment().add(week, 'week').endOf('week');
    } else if (type === "previous") {
      if (!initial) {
        week = week - 1
        setWeb(week)
      }
      if (week < 0) {
        week = Math.abs(week);
      }
      firstDay = moment().subtract(week, 'week').startOf('week');
      lastDay = moment().subtract(week, 'week').endOf('week');
    }

    setweekInfoWeb({ firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') })

    let from = firstDay.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    let to = lastDay.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')

    await fetchData(`webkata?from=${from}&to=${to}`)
      .then(response => {
        const data = response.data;

        const labels = data.pointDetails[0].data.map((item) => item.day);
        const userData = data.pointDetails[0].data.map((item) => item.points);
        setWebToday(data?.pointDetails[0]?.totalPoints ? data.pointDetails[0].totalPoints : 0)
        setWebTotal(data?.overallPoints ? data.overallPoints : 0)

        setWebChartData({
          labels: labels,
          datasets: [
            {
              label: "Points",
              data: userData,
              backgroundColor: "rgb(255, 190, 190)",
              borderColor: "rgb(255, 190, 190)",
              borderWidth: 0,
            }
          ]
        });
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });


    return { firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') };
  }


  async function getWeekCodeKata(week, type, initial) {
    let firstDay;
    let lastDay;

    if (type === "next") {
      if (!initial) {
        week = week + 1
        setCode(week)
      }
      firstDay = moment().add(week, 'week').startOf('week');
      lastDay = moment().add(week, 'week').endOf('week');
    } else if (type === "previous") {
      if (!initial) {
        week = week - 1
        setCode(week)
      }
      if (week < 0) {
        week = Math.abs(week);
      }
      firstDay = moment().subtract(week, 'week').startOf('week');
      lastDay = moment().subtract(week, 'week').endOf('week');
    }

    setweekInfoCode({ firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') })

    let from = firstDay.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    let to = lastDay.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')

    await fetchData(`codekata?from=${from}&to=${to}`)
      .then(response => {
        const data = response.data;

        const labels = data.pointDetails[0].data.map((item) => item.day);
        const userData = data.pointDetails[0].data.map((item) => item.points);
        setCodeToday(data?.pointDetails[0]?.totalPoints ? data.pointDetails[0].totalPoints : 0)
        setCodeTotal(data?.overallPoints ? data.overallPoints : 0)

        setCodeChartData({
          labels: labels,
          datasets: [
            {
              label: "Points",
              data: userData,
              backgroundColor: "rgb(255, 190, 190)",
              borderColor: "rgb(255, 190, 190)",
              borderWidth: 0,
            }
          ]
        });
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });


    return { firstDay: firstDay.format('DD/MM/YYYY'), lastDay: lastDay.format('DD/MM/YYYY') };
  }


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
              <div> <span className='score-style-span'  >Today : {codeToday}</span> <span> <span className='score-circle-first' ></span> Max Scores </span> </div>
              <div> <span className='score-style-span' >Total : {codeTotal}</span> <span> <span className='score-circle-second' ></span> Points Earned</span> </div>
            </div>
          </div>
          <Bar
            data={codeChartData}
            options={options}
          />

          <div class="Dashboard_space__between__a7GVw">
            <div class="" style={{ 'cursor': 'pointer' }}>
              <img class="p-2" src="/Icons/backwardArrow.svg" alt="add/plus" onClick={() => getWeekCodeKata(code, 'previous', null)}></img>
            </div>
            <div class="" id="web" value={code} >{weekInfoCode.firstDay} - {weekInfoCode.lastDay}</div>
            <div class="" style={{ 'cursor': 'pointer' }}>
              <img class="p-2" src="/Icons/forwardArrow.svg" alt="add/plus" onClick={() => getWeekCodeKata(code, 'next', null)} ></img>
            </div>
          </div>
        </div>
        <div className="col-xl-5 column-style">
          <div class="d-flex box-style">
            <div class="Dashboard_chart__topic__3JSqN">Webkata</div>
            <div className='d-flex score-style'>
              <div> <span className='score-style-span'  >Today : {webToday}</span> <span> <span className='score-circle-first' ></span> Max Scores </span> </div>
              <div> <span className='score-style-span' >Total : {webTotal}</span> <span> <span className='score-circle-second' ></span> Points Earned</span> </div>
            </div>
          </div>
          <Bar
            data={webChartData}
            options={options}
          />

          <div class="Dashboard_space__between__a7GVw">
            <div class="" style={{ 'cursor': 'pointer' }}  >
              <img class="p-2" src="/Icons/backwardArrow.svg" alt="add/plus" onClick={() => getWeekWebKata(web, 'previous', null)} ></img>
            </div>
            <div class="" value={web} >{weekInfoWeb.firstDay} - {weekInfoWeb.lastDay}</div>
            <div class="" style={{ 'cursor': 'pointer' }} >
              <img class="p-2" src="/Icons/forwardArrow.svg" alt="add/plus" onClick={() => getWeekWebKata(web, 'next', null)} ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withAuthCheck(Dashboard);
