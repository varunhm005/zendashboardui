import React, { useState } from 'react'
import './leaveApplication.css'

export default function LeaveApplication() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    console.log("showModal", showModal)

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
                                    <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off">
                                        <div class="leave_select__1wE2t">
                                            <label for="days">Days</label>
                                            <select name="days" id="days">
                                                <option value="1">1</option>
                                                <option value="more">More than one</option>
                                            </select></div><div class="form-group mt-1">
                                            <label for="on" class="label-style mb-0">On</label>
                                            <div>
                                                <input class="formInputs" name="on" placeholder="On" type="date" value=""></input>
                                            </div>
                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="reason">Reason</label>
                                            <textarea class="formInputs" rows="5" name="reason" type="text" placeholder="Enter Reason"></textarea>
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
            </div>
        </section>
    )
}
