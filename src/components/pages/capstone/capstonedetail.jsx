import React from 'react'

export default function Capstonedetail({hideDetailComponent}) {
    return (
        <section class="capstone-section-detail">
            <div class="container-fluid">
                <div class="row search-row">
                    <div class="col-xl-12 search-col-capstone">
                    <div className='pt-3' >
                        <button type="button" class="btn btn-outline-primary" onClick={() => hideDetailComponent()}>Back</button>
                    </div>
                        {/* <div class="search-input">
                            <span class="search-icon"><i class="fa-solid fa-search"></i></span>
                            <input type="text" name="searchBox" class="input_search" value="" ></input>
                        </div> */}
                    </div>

                </div>
                <div class="row">
                    <div class="col-xl-5 my-4 parent-column">
                        <div class="main-content-capstone align-items-start">
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

                    <div class="ml-4 mt-2 col-6 px-0 taskContainer">
                        <div class="flexCont my-2 mx-4" style={{'align-items': 'center'}}>
                            <div class="my-2 mx-2">
                                <div class="title weight-500">Varun Harikumar</div>
                                <div class="row d-flex align-items-center  mx-1 secondaryGreyTextColor">
                                    <div class="mx-1">(B50 WE2 Tamil - Capstone Project)</div>
                                    <div class="mx-1">Zen Class Student Dashboard</div>
                                </div>
                            </div>
                            <div>
                                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                                    <div class="secondaryGreyTextColor mx-1 px-1 rounded">Yet to be graded</div>
                                    <div class="tasktag px-2 rounded">capstone</div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex align-itmes-center justify-content-between mx-1 commentsstudent">
                            <div class="col-12">
                                <div class="mx-2 mt-3">Description :</div>
                                <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded descriptionStudents">
                                    <div class="smooth-scroll list-unstyled">
                                        <p>To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.</p>
                                        <p><strong>Task Title:  Zen class student dashboard</strong></p>
                                        <p><strong>Any specifications on the design?</strong></p>
                                        <ul>
                                            <li>Front-end: Reactjs</li>
                                            <li>Back-end: Nodejs</li>
                                            <li>Database: MongoDB</li>
                                            <li><strong>Requirements:</strong></li>
                                            <li>The project should achieve the CODE QUALITY</li>
                                            <li>Use fonts/icons if it’s required in the design.</li>
                                            <li>The use of various charts is required in the design.</li>
                                            <li>The use of bootstrap/ material CSS is required in the design</li>
                                        </ul>
                                        <p><strong>How do I submit my work?</strong></p>
                                        <ul>
                                            <li>Push all your work files to GitHub in two different repositories as given below</li>
                                            <li>Front-end repo name project-name-frontend.</li>
                                            <li>Back-end repo name project-name-backend.</li>
                                            <li>Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Render(https://render.com/).</li>
                                        </ul>
                                        <p><strong>Any basic hints/links/reference sites to solve?</strong></p>
                                        <p>https://getbootstrap.com/docs/4.4/getting-started/introduction/</p>
                                        <p>https://www.chartjs.org/</p>
                                        <p>https://jwt.io/introduction/</p>
                                        <p>https://react-bootstrap.github.io/</p>
                                        <p>https://materializecss.com/</p>
                                        <p>https://tailwindcss.com/</p>
                                        <p>https://expressjs.com/</p>
                                        <p><strong>Terms and Conditions?</strong></p>
                                        <ul>
                                            <li>You agree to not share this confidential document with anyone.&nbsp;</li>
                                            <li>You agree to open-source your code (it may even look good on your profile!). Do not mention our company’s name anywhere in the code.</li>
                                            <li>We will never use your source code under any circumstances for any commercial purposes; this is just a basic assessment task.</li>
                                            <li>For capstone, the use case has to be identified by the developer.</li>
                                        </ul>
                                        <p>NOTE: Any violation of Terms and conditions is strictly prohibited. You are bound to adhere to it.</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Submission</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="codeName">Front-end Source code</td>
                                    <td><input type="text" class="codeSubmission"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="codeName">Back-end Source code</td><td>
                                        <input type="text" class="codeSubmission"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="codeName">Front-end Deployed URL</td>
                                    <td><input type="text" class="codeSubmission"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="codeName">Back-end Deployed URL</td>
                                    <td><input type="text" class="codeSubmission"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6>Comments: </h6>
                                    </td>
                                    <td><input type="text" class="codeSubmission" placeholder="leave your comments here"></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="pl-2 my-0 align-self-end text-center">
                            <button class="btn reqbuttoncreate" type="submit">Submit</button>
                        </div>
                        <div class="d-none">
                            <div class="row d-flex align-itmes-center justify-content-between mx-1">
                                <div class="col-12">
                                    <div class="mx-2 mt-3">Comments:</div>
                                    <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent"></div>
                                </div>
                            </div>
                            <hr class="containerDivider mx-1"></hr>
                        </div>
                        <p style={{'padding': '8px','color': 'rgb(250, 185, 20)'}}><strong>Warning</strong>: 2 mark may be deducted automatically from your total score if your submission is beyond the deadline</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
