import React from 'react'
import './capstone.css'

export default function capstone({ toggleComponent }) {
  return (
        <section class="capstone-section">
        <div class="container-fluid">
          <div class="row search-row">
            <div class="col-xl-12 search-col">
                <div class="search-input"> 
                    <span class="search-icon"><i class="fa-solid fa-search"></i></span>
                    <input type="text" name="searchBox" class="input_search" value="" ></input>
                </div>
            </div>
                
            </div>
            <div class="row">
                <div class="col-xl-12 my-4 parent-column">
                    <div class="main-content" onClick={() => toggleComponent()}>
                        <div class="left-content">
                            <h3>Varun Harikumar</h3>
                            <div>
                                <span class="batch-details">(B50 WE2 Tamil - Capstone Project)</span> <br />
                                <span class="class-details">Zen Class Student Dashboard</span>
                            </div>
                        </div>
                        <div class="right-content">
                            <span class="submission mb-2">Yet to be graded</span>
                            <div class="task-details">
                                <span class="task px-2">Capstone</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
