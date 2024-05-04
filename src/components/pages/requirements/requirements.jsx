import React from 'react'
import './requirements.css'


export default function requirements() {
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
            <div class="col-xl-12 my-4">
                <div class="main-content-requirements">
                   <div class="company-detail">
                        <div class="company-logo"></div>
                        <div class="company-name mx-3">
                            <h3>Mind Tree</h3>
                            <div> <i className="fa fa-link"></i> www.mindtree.com</div>
                        </div>
                   </div>
                   <div class="requirement-detail">
                        <div class="require-content-detail">
                            <div class="details-head">Role:</div>
                            <div class="detail-ocntent">React js developer</div>
                        </div>
                        <div class="require-content-detail">
                            <div class="details-head">Nature of Job:</div>
                            <div class="detail-ocntent">Full-time</div>
                        </div>
                   </div>
                  
                   <div class="requirement-detail">
                        <div class="require-content-detail">
                            <div class="details-head">Deadline:</div>
                            <div class="detail-ocntent">No Deadline</div>
                        </div>
                        <div class="require-content-detail">
                            <div class="details-head">CTC</div>
                            <div class="detail-ocntent">150000</div>
                        </div>
                    </div>

                    <div class="requirement-detail">
                        <div class="require-content-detail">
                            <div class="details-head">Openings:</div>
                            <div class="detail-ocntent">1</div>
                        </div>
                        <div class="require-content-detail">
                            <div class="details-head">Program:</div>
                            <div class="detail-ocntent">Full Stack Development</div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>


    </div>
</section>  )
}
