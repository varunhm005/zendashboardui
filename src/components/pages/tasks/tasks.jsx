import React from 'react'
import './tasks.css'

export default function tasks({ toggleComponent }) {
  return (
    <section class="tasks-section">
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
                            <span class="batch-details">(B50 WE2 Tamil)</span>
                            <span class="class-details"> -HTML & CSS- Day-5: Bootstrap</span>
                        </div>
                    </div>
                    <div class="right-content">
                        <span class="submission mb-2">submitted on 10/04/2024</span>
                        <div class="task-details">
                            <span class="count mx-1 px-3">8</span>
                            <span class="task px-2">Task</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
