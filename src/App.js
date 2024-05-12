import './App.css';
import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from './components/pages/login';
import Sidebar from './components/pages/sideBar/sidebar';
import DashboardComponent from './components/pages/dashboard/dashboard';
import TopNavBar from './components/pages/sideBar/topBar';
import Certificate from './components/pages/certificate';
import InterviewTask from './components/pages/interviewtasks'
import Applications from './components/pages/applications'
import ClassComponent from './components/pages/ClassField/classField'
import Webcode from './components/pages/webcode'
import PlacementComponent from './components/pages/Placement/placementsessions'
import PlacementBoardComponent from'./components/pages/placementBoard/placementboard'
import Syllabus from'./components/pages/syllabus'
import MockInterviewCOmponent from './components/pages/mockInterview'
import TasksComponent from './components/pages/tasks/mainTask'
import CapstoneComponent from './components/pages/capstone/maincapstone'
import RequirementComponent from './components/pages/requirements/requirements'
import LeaderboardComponent from './components/pages/leaderboard/leaderboard'
import TestimonialComponent from './components/pages/testimonial/testimonial'
import CreateTestimonialComponent from './components/pages/testimonial/createtestimonial'
import LeaveappComponent from './components/pages/leaveApplication/leaveApplication'
import PortfolioComponent from './components/pages/portfolio/portfolio'
import QueryComponent from './components/pages/queries/queries'
import CreateQueryComponent from './components/pages/queries/createquery'





function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  console.log("loggedIn", loggedIn, setLoggedIn)


  return (
    <Router>
      <div className="App" style={{display: 'grid', gridTemplateColumns: '100px auto'}}>
        <Sidebar></Sidebar>
        <TopNavBar></TopNavBar>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/class" element={<ClassComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/placement" element={<PlacementComponent />} />
          <Route path="/tasks" element={<TasksComponent />} />
          <Route path="/capstone" element={<CapstoneComponent />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/interviewTasks" element={<InterviewTask />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/requirements" element={<RequirementComponent />} />
          <Route path="/webcode" element={<Webcode />} />
          <Route path="/placementboard" element={<PlacementBoardComponent />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/leaderboard" element={<LeaderboardComponent />} />
          <Route path="/mockInterview" element={<MockInterviewCOmponent />} />
          <Route path="/testimonial" element={<TestimonialComponent />} />
          <Route path="/createtestimonial" element={<CreateTestimonialComponent />} />
          <Route path="/leaveapplication" element={<LeaveappComponent />} />
          <Route path="/portfolio" element={<PortfolioComponent />} />
          <Route path="/queries" element={<QueryComponent />} />
          <Route path="/createquery" element={<CreateQueryComponent />} />
          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
