import React, {useState} from 'react'
import './classField.css';
import { fetchData } from '../../../api/api'

export default function ClassField() {

  const [data, setData] = useState(null);

  const handleClick = async (e) => {
    try {
       let sessionDay = e.target.textContent
      const result = await fetchData(`/dashboard/${sessionDay}`);
      if(result.code == 200){
        setData(result.data);
      }

    } catch (error) {
      // Handle error if needed
    }
  };

  return (
    <section className="Dashboard-section">
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-8">
            <div className="join-class">
              <h2 className="p-4">{data?.sessionVideoUrl ? "Please watch the recording." : "Join the class on time!"}</h2>
            </div>
            <div className="session-content p-4">
              <h2 className="sub-header">{data?.sessionName || "No session title available"}</h2>
              <span>{data?.sessionDescription || "Class Schedule is not updated"}</span>
              <hr></hr>
              <div className="content mb-4">
                <p className="second-sub-header">Contents:</p>
                <span className="second-sub-content" dangerouslySetInnerHTML={{ __html: data?.sessionContents || "No content available" }}></span>
              </div>
              <div className="pre-read">
                <p className="second-sub-header">Pre-read:</p>
                <span className="second-sub-content">No preread availabe</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="roadmap mb-4">
              <div className="card">
                <div className="card-header common-card-header">
                  Sessions Roadmap
                </div>
                <div className="card-body">
                  <div class="sessionsElements">
                    <div class="iconNumber RICompleted">
                      <h6 onClick={handleClick} >1</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>2</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>3</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>4</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>5</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>10</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>9</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>8</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>7</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>6</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>11</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>12</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>13</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>14</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>15</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>20</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>19</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>18</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>17</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>16</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>21</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>22</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>23</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>24</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>25</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>30</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>29</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>28</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>27</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>26</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>31</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>32</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>33</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>34</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RICompleted">
                      <h6>35</h6>
                      {/* <div class="straight-line" style={{"pointer-events": 'none'}}></div> */}
                    </div>
                  </div>
                  {/* <span>Batch is not assigned yet!
                  Hold tight until a batch is assigned to you</span> */}
                </div>
              </div>
            </div>
            <div className="roadmap">
              <div className="card">
                <div className="card-header common-card-header">
                  Additional Sessions
                </div>
                <div className="card-body">
                  <div className="addSession-Head">
                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>System Design Day 2 - 10/03/2024 @ 11:00 AM</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>10/03/2024 - Sunday - 11:00 AM</p>
                    </div>

                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>System Design Day 2 - 10/03/2024 @ 11:00 AM</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>10/03/2024 - Sunday - 11:00 AM</p>
                    </div>
                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>System Design Day 2 - 10/03/2024 @ 11:00 AM</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>10/03/2024 - Sunday - 11:00 AM</p>
                    </div>
                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>System Design Day 2 - 10/03/2024 @ 11:00 AM</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>10/03/2024 - Sunday - 11:00 AM</p>
                    </div>
                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>System Design Day 2 - 10/03/2024 @ 11:00 AM</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>10/03/2024 - Sunday - 11:00 AM</p>
                    </div>
                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>System Design Day 2 - 10/03/2024 @ 11:00 AM</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>10/03/2024 - Sunday - 11:00 AM</p>
                    </div>

                  </div>

                  {/* <span> No Additional Sessions</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
