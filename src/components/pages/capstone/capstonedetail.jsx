import React, { useState, useEffect } from 'react'
import { fetchData } from '../../../api/api'
import withAuthCheck from '../../Auth/withAuthCheck';

function Capstonedetail({ hideDetailComponent }) {

    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Function to fetch data from the API
        const getQuery = async () => {
            try {
                const result = await fetchData('/capstone');
                if (result.code === 200) {
                    setData(result.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetch data function when the component mounts
        getQuery();


        // Clean-up function (optional)
        return () => {
            // You can do any clean-up here if necessary
        };
    }, []);

    const handleButtonClick = (e) => {
        setIndex(e);
    };

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
                        {data ? (
                            data.map((item, index) => (
                                <div class="main-content-capstone align-items-start" onClick={() => handleButtonClick(index)}>
                                    <div class="left-content">
                                        <h3>Varun Harikumar</h3>
                                        <div>
                                            <span class="batch-details">(B50 WE2 Tamil - Capstone Project)</span> <br />
                                            <span class="class-details">{item.capstoneName}</span>
                                        </div>
                                    </div>
                                    <div class="right-content">
                                        <span class="submission mb-2">Yet to be graded</span>
                                        <div class="task-details">
                                            <span class="task px-2">Capstone</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>Loading</div>
                        )
                        }
                    </div>
                    {data ? data.length > 0 ?
                        <div class="ml-4 mt-2 col-6 px-0 taskContainer">
                            <div class="flexCont my-2 mx-4" style={{ 'align-items': 'center' }}>
                                <div class="my-2 mx-2">
                                    <div class="title weight-500">Varun Harikumar</div>
                                    <div class="row d-flex align-items-center  mx-1 secondaryGreyTextColor">
                                        <div class="mx-1">(B50 WE2 Tamil - Capstone Project)</div>
                                        <div class="mx-1">{data[index].capstoneName}</div>
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
                                            <p>{data[index].description}</p>
                                            <p><strong>Task Title:  {data[index].taskTitle}</strong></p>
                                            <p><strong>Any specifications on the design?</strong></p>
                                            <ul>
                                                {data[index].specifications.map((tech, index) => (
                                                    <li key={index}>{tech}</li>
                                                ))}

                                                <li><strong>Requirements:</strong></li>
                                                {data[index].requirements.map((tech, index) => (
                                                    <li key={index}>{tech}</li>
                                                ))}
                                            </ul>
                                            <p><strong>How do I submit my work?</strong></p>
                                            <ul>
                                                {data[index].submitDescription.map((tech, index) => (
                                                    <li key={index}>{tech}</li>
                                                ))}
                                            </ul>
                                            <p><strong>Any basic hints/links/reference sites to solve?</strong></p>
                                            {data[index].references.map((tech, index) => (
                                                <p key={index}>{tech}</p>
                                            ))}
                                            <p><strong>Terms and Conditions?</strong></p>
                                            <ul>
                                                {data[index].termsAndConditions.map((tech, index) => (
                                                    <li key={index}>{tech}</li>
                                                ))}
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
                                        <td class="codeName">Front-end Source code:</td>
                                        <td>{data[index].frontEndCode}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="codeName">Back-end Source code:</td><td>
                                            {data[index].backendCode}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="codeName">Front-end Deployed URL:</td>
                                        <td>{data[index].frontEndUrl}</td>
                                    </tr>
                                    <tr>
                                        <td class="codeName">Back-end Deployed URL:</td>
                                        <td>{data[index].backEndUrl}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Comments: </h6>
                                        </td>
                                        <td>{data[index].comments}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <div class="pl-2 my-0 align-self-end text-center">
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
                            </div> */}
                            <p style={{ 'padding': '8px', 'color': 'rgb(250, 185, 20)' }}><strong>Warning</strong>: 2 mark may be deducted automatically from your total score if your submission is beyond the deadline</p>
                        </div>
                        : <span></span> : <span></span>}
                </div>
            </div>
        </section>
    )
}

export default withAuthCheck(Capstonedetail);
