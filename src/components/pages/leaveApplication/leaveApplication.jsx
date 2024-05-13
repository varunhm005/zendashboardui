import React, { useState, useEffect, useRef } from 'react'
import './leaveApplication.css'
import { fetchData, postData } from '../../../api/api'

export default function LeaveApplication() {

    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const daysRef = useRef(null);
    const leaveRef = useRef(null);
    const reasonRef = useRef(null)

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        // Function to fetch data from the API


        // Call the fetch data function when the component mounts
        getQuery();


        // Clean-up function (optional)
        return () => {
            // You can do any clean-up here if necessary
        };
    }, []);

    const getQuery = async () => {
        try {
            const result = await fetchData('/leave');
            if (result.code === 200) {
                setData(result.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const days = daysRef.current.value;
        const leaveOn = leaveRef.current.value;
        const reason = reasonRef.current.value;

        // Handle form submission logic here, such as sending the data to a server

        let payload = {
            days, leaveOn, reason
        }

        const response = await postData('/leave', JSON.stringify(payload), {
            headers: {
              'Content-Type': 'application/json',
            },
          });    
          if (response.code === 200) {
              alert(response.message)
              getQuery()
              setShowModal(false);
          } else {
            // Handle login error
            alert('Failed while creating query');
          }

        // You can also reset the form fields here if needed
        daysRef.current.value = '';
        leaveRef.current.value = '';
        reasonRef.current.value = '';
    };

    return (
        <section className="leaveapplication-container">
            <div class="leaveappSecond">
                <div class="leaveappThird">
                    <div class="leaveappFourth">
                        <button className='btn btn-primary' onClick={openModal} >Add</button>
                    </div>
                </div>

                {showModal && (
                    <div className="modal">
                        {/* <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
          </div> */}
                        <div class="modal-content modal-height radius">
                            <div class="leave_modalContainer__2p7ii">
                                <div class="modal-heading-area px-4 py-2">
                                    <div class="d-flex justify-content-between">
                                        <span class="modal-heading">Add Leave</span>
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off" onSubmit={handleSubmit}>
                                        <div class="leave_select__1wE2t">
                                            <label for="days">Days</label>
                                            <select name="days" id="days" ref={daysRef} >
                                                <option value="1">1</option>
                                                <option value="more">More than one</option>
                                            </select></div><div class="form-group mt-1">
                                            <label for="on" class="label-style mb-0">On</label>
                                            <div>
                                                <input class="formInputs" name="on" ref={leaveRef}  placeholder="On" type="date" ></input>
                                            </div>
                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="reason">Reason</label>
                                            <textarea class="formInputs" rows="5" ref={reasonRef}  name="reason" type="text" placeholder="Enter Reason"></textarea>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="reset" class="btn cancel-btn" onClick={closeModal}>Cancel</button>
                                            <button type="submit" class="btn submit-btn">Create</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <div class="row leave-component">
                    <div class="col-xl-12 my-4 parent-column" style={{ 'flex-direction': 'column' }} >
                        {data ? (
                            data.map((item, index) => (
                                <div class="main-content" >
                                    <div class="left-content">
                                        <h3>Leave Application</h3>
                                        <div>
                                            <span class="batch-details">Reason</span>
                                            <span class="class-details"> - {item.reason}</span>
                                        </div>
                                    </div>
                                    <div class="right-content">
                                        <span class="task px-2">Approved</span>
                                        <div class="leave-details">
                                            <span class="mx-1 pl-0 pt-0 pb-3" style={{ 'padding-right': '10px' }}>No Of Days: </span>
                                            <span class="submission mb-2">{item.days}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>Loading</div>
                        )
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
