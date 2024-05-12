import React, { useState, useEffect } from 'react'
import { fetchData } from '../../../api/api'

export default function Taskdetail({ hideDetailComponent }) {

    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Function to fetch data from the API
        const getQuery = async () => {
            try {
                const result = await fetchData('/task');
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
        <section class="tasks-section">
            <div class="container-fluid">
                <div class="row search-row">
                    <div class="col-xl-12 search-col-task">
                        <div className='pt-3' >
                            <button type="button" class="btn btn-outline-primary" onClick={() => hideDetailComponent()}>Back</button>
                        </div>
                        <div class="search-input">
                            <span class="search-icon"><i class="fa-solid fa-search"></i></span>
                            <input type="text" name="searchBox" class="input_search" value="" ></input>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-xl-5 my-4 parent-column-detail" style={{'flex-direction': 'column'}} >
                        {data ? (
                            data.map((item, index) => (
                                <div class="main-content-detail" onClick={() => handleButtonClick(index)}>
                                    <div class="left-content">
                                        <h3>Varun Harikumar</h3>
                                        <div>
                                            <span class="batch-details">(B50 WE2 Tamil)</span>
                                            <span class="class-details"> -{item.taskName}</span>
                                        </div>
                                    </div>
                                    <div class="right-content">
                                        <span class="submission mb-2">submitted on {item.submittedDate}</span>
                                        <div class="task-details">
                                            <span class="count mx-1 px-3">{item.taskMark}</span>
                                            <span class="task px-2">Task</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>Loading</div>
                        )
                        }
                    </div>
                    { data ? data.length > 0 ?
                    <div class="ml-4 mt-2 col-6 px-0 taskContainer">
                        <div class="flexCont my-2 mx-4" style={{ alignItems: 'center' }}>
                            <div class="my-2 mx-2">
                                <div class="title weight-500">Varun Harikumar</div>
                                <div class="row d-flex align-items-center  mx-1 secondaryGreyTextColor">
                                    <div class="mx-1">(B50 WE2 Tamil)</div>
                                    <div class="mx-1"></div>
                                    <div class="ml-0 mr-1">- {data[index].taskName}</div>
                                </div>
                            </div>
                            <div>
                                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                                    <div class="marktag mx-1 px-3 rounded">{data[index].taskMark}</div>
                                    <div class="tasktag px-2 rounded">Task</div>
                                </div>
                                <div class="mx-1 secondaryGreyTextColor">submitted on {data[index].submittedDate}</div></div></div>
                        <hr class="containerDivider mx-1"></hr>
                        <div class="flexCont my-2 mx-2"></div>
                        <h6 class="mx-2">Student Comments :</h6>
                        <div class="mx-2">
                            <p>{data[index].studentComments}</p>
                        </div><div class="mx-2">Answers</div>
                        <div class="mx-2 mt-0 mb-3 py-3 answerBorder">
                            <div class="mx-2">Front-end Source code : <a href={data[index].frontendSourceCode} class="" target="_blank" rel="noreferrer">{data[index].frontendSourceCode}</a>
                            </div>
                            <div class="mx-2">Front-end Deployed URL : <a href={data[index].frontendDeployedUrl} class="" target="_blank" rel="noreferrer">{data[index].frontendDeployedUrl}</a>
                            </div>
                        </div>
                        <div class="col-12 marksContainer">
                            <div class="row d-flex align-itmes-center justify-content-between mx-1">
                                <div class="col-12"><div class="mx-2 mt-3">Comments:</div>
                                    <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent">Good work
                                        the Restaurant  Landing page is same as needed</div>
                                </div>
                            </div>
                        </div>
                    </div>
: <span></span> : <span></span>}
                </div>
            </div>
        </section>
    )
}
