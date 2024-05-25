import React, {useState, useEffect} from 'react'
import './requirements.css'
import { fetchData } from '../../../api/api'
import withAuthCheck from '../../Auth/withAuthCheck';

function Requirements() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to fetch data from the API
        const getRequirement = async () => {
          try {
            const result = await fetchData('/requirement');
            if(result.code === 200){
                setData(result.data);
              }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Call the fetch data function when the component mounts
        getRequirement();

    
        // Clean-up function (optional)
        return () => {
          // You can do any clean-up here if necessary
        };
      }, []); 

  return (
<section class="requirements-section">
    <div class="container-fluid">
      <div class="row search-row">
        <div class="col-xl-12 search-col">
            <div class="search-input"> 
                <span class="search-icon"><i class="fa fa-search"></i></span>
                <input type="text" name="searchBox" class="input_search" value="" ></input>
            </div>
        </div>
            
        </div>
        <div class="row">
        { data ?(
                    data.map((item, index) => (
            <div class="col-xl-12 my-4">
                <div class="main-content-requirements">
                   <div class="company-detail">
                        <div class="company-logo"></div>
                        <div class="company-name mx-3">
                            <h3>{item.companyName}</h3>
                            <div> <i className="fa fa-link"></i>{item.companyUrl}</div>
                        </div>
                   </div>
                   <div class="requirement-detail">
                        <div class="require-content-detail">
                            <div class="details-head">Role:</div>
                            <div class="detail-ocntent">{item.role}</div>
                        </div>
                        <div class="require-content-detail">
                            <div class="details-head">Nature of Job:</div>
                            <div class="detail-ocntent">{item.natureOfJob}</div>
                        </div>
                   </div>
                  
                   <div class="requirement-detail">
                        <div class="require-content-detail">
                            <div class="details-head">Deadline:</div>
                            <div class="detail-ocntent">{item.deadline}</div>
                        </div>
                        <div class="require-content-detail">
                            <div class="details-head">CTC</div>
                            <div class="detail-ocntent">{item.ctc}</div>
                        </div>
                    </div>

                    <div class="requirement-detail">
                        <div class="require-content-detail">
                            <div class="details-head">Openings:</div>
                            <div class="detail-ocntent">{item.openings}</div>
                        </div>
                        <div class="require-content-detail">
                            <div class="details-head">Program:</div>
                            <div class="detail-ocntent">{item.program}</div>
                        </div>
                    </div>
                   
                </div>
            </div>
                              ))
                            ) :(
                                <div>Loading</div>
                            )
            }
        </div>


    </div>
</section>  )
}

export default withAuthCheck(Requirements);
