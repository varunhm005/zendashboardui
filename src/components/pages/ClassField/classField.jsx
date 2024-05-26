import React, {useState, useEffect} from 'react'
import './classField.css';
import { fetchData } from '../../../api/api'
import withAuthCheck from '../../Auth/withAuthCheck';


function ClassField() {

  const [data, setData] = useState(null);
  const [additionalSession, setadditionalSession] = useState(null);

  const buttonStyle = data?.sessionVideoUrl ? { width: 'max-content' } : { display: 'none' };

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

  const getAdditionalSeesion = async () => {
    try {
      const result = await fetchData('/additionals');
      if(result.code === 200){
        setadditionalSession(result.data);
        }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    // Function to fetch data from the API

    // Call the fetch data function when the component mounts
    getAdditionalSeesion();


    // Clean-up function (optional)
    return () => {
      // You can do any clean-up here if necessary
    };
  }, []); 

  return (
    <section className="Dashboard-section">
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-8">
            <div className="join-class">
              <h2 className="p-4">{data?.sessionVideoUrl ? "Please watch the recording." : "Join the class on time!"}</h2>
              <div><button class="join-btn" style={buttonStyle}>Play Recording</button></div>

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
                    <div class="iconNumber RINotCompleted">
                      <h6>2</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>3</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>4</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>5</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>10</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>9</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>8</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>7</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>6</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>11</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>12</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>13</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>14</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>15</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>20</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>19</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>18</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>17</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>16</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>21</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>22</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>23</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>24</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>25</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>30</h6>
                      <div class="vertical-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>29</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>28</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>27</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>26</h6>
                      <div class="left-straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>31</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>32</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>33</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
                      <h6>34</h6>
                      <div class="straight-line" style={{ "pointer-events": 'none' }}></div>
                    </div>
                    <div class="iconNumber RINotCompleted">
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
                  { additionalSession ?(
                    additionalSession.map((item, index) => (
                    <div className="addSession">
                      <h5 style={{ "font-weight": '450' }}>{item.additionalsName}</h5>
                      <p style={{ "font-weight": '200', "margin": '0px' }}>{item.date} - {item.day} - {item.time}</p>
                    </div>

))
) :(
    <tr>Loading</tr>
)
}

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

export default withAuthCheck(ClassField);
