import React from 'react'
import './placementboard.css'

export default function placementboard() {
    return (
        <section className='placement-board' >
            <div className='d-flex' >
                <div className="col-md-4">
                    <div class="card-header-top">
                        <div class="card-header"></div>
                        <div class="card-border">
                            <div class="p-4"><div class="media">
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Purushothaman Ravichandran</h5>
                                    <h6 class="mt-0 mb-1">B38 WD Tamil</h6>
                                    <h6 class="mt-0 mb-1">FSD-MERN</h6></div>
                                <img class="ml-3 rounded-circle shadow-4-strong" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Generic placeholder image" width="50" height="60"></img>
                            </div>
                                <hr></hr>
                                <div class="portfolioDetails">
                                    <div class="p-status mb-2">Company : <strong>Paripoorna</strong>
                                    </div>
                                    <div class="p-mentor mb-2">Current CTC : <strong>3 LPA</strong>
                                    </div><div class="p-comments mb-2">Placed Through : <strong>Guvi</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
