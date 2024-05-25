import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { postData } from '../../../api/api'
import withAuthCheck from '../../Auth/withAuthCheck';

function Createquery() {

    const categoryRef = useRef(null);
    const languageRef = useRef(null);
    const descriptionRef = useRef(null)
    const titleRef = useRef(null);
    const starttimeRef = useRef(null);
    const endtimeRef = useRef(null);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const category = categoryRef.current.value;
        const prefferedLanguage = languageRef.current.value;
        const queryDescription = descriptionRef.current.value;
        const queryTitle = titleRef.current.value;
        const from = starttimeRef.current.value;
        const till = endtimeRef.current.value;
        // Handle form submission logic here, such as sending the data to a server

        let payload = {
            category, prefferedLanguage, queryDescription, queryTitle, from, till
        }

        const response = await postData('/query', JSON.stringify(payload), {
            headers: {
              'Content-Type': 'application/json',
            },
          });    
          if (response.code === 200) {
              alert(response.message)
          } else {
            // Handle login error
            alert('Failed while creating query');
          }

        // You can also reset the form fields here if needed
        categoryRef.current.value = '';
        languageRef.current.value = '';
        descriptionRef.current.value = '';
        titleRef.current.value = '';
        starttimeRef.current.value = '';
        endtimeRef.current.value = '';
    };

    return (
        <section className='createtestimonial-container' >
            <div class="testimonialSecond">
                <div class="testimonialThird">
                    <div class="testimonialFourth">
                        <Link to="/queries">
                            <button className='btn btn-primary' >Back</button>
                        </Link>
                    </div>
                </div>
                <div class="CreateQueryContaimer">
                    <div class="baseContainer">
                        <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off" onSubmit={handleSubmit}>
                            <div class="containerLabel">Topic</div>
                            <div class="inputContainer">
                                <label for="category" class="label-style mb-0">Category</label>
                                <div>
                                    <select class="formInputs" name="category" ref={categoryRef}>
                                        <option label="--- Select Category---"></option>
                                        <option value="Zen-Class Doubt" index="0" label="Zen-Class Doubt"></option>
                                        <option value="Placement Related" index="1" label="Placement Related"></option>
                                        <option value="Coordination Related" index="2" label="Coordination Related"></option>
                                        <option value="Pre-Bootcamp Related" index="3" label="Pre-Bootcamp Related"></option>
                                    </select>
                                </div>
                                <label for="language" class="label-style mb-0">Prefered Voice Communication Language</label>
                                <div>
                                    <select class="formInputs" name="language" ref={languageRef}>
                                        <option label="--- Select Language---"></option>
                                        <option value="English" index="0" label="English"></option>
                                        <option value="Hindi" index="1" label="Hindi"></option>
                                        <option value="Tamil" index="2" label="Tamil"></option>
                                    </select>
                                </div>
                            </div>
                            <div class="horizontal__rule">
                            </div>
                            <div class="containerLabel">Details</div>
                            <div class="inputContainer">
                                <label for="title" class="label-style mb-0">Query Title</label>
                                <div>
                                    <input class="formInputs" name="title" ref={titleRef} placeholder="Enter the query title" type="text" ></input>
                                </div>
                                <label for="description" class="label-style mb-0">Query Description</label>
                                <textarea class="formInputs" rows="5" name="description" ref={descriptionRef} type="text" placeholder="Enter the Description"></textarea>
                            </div>
                            <div class="horizontal__rule"></div>
                            <div class="containerLabel">Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</div>
                            <div class="inputContainer"><label for="startTime" class="label-style mb-0">From</label>
                                <div>
                                    <input class="formInputs" name="startTime" ref={starttimeRef} type="time" max="19:00" value="09:00"></input>
                                </div>
                                <label for="endTime" class="label-style mb-0">Till</label>
                                <div>
                                    <input class="formInputs" name="endTime" type="time" ref={endtimeRef} max="19:00" value="19:00"></input>
                                </div>
                            </div>
                            <div class="horizontal__rule"></div>
                            <div class="containerLabel">Attachments (Optional)</div>
                            <div class="d-flex">
                                <div class="attachments__body">
                                    <div type="file" class="add__attachment">
                                        <img src="/Icons/attachmentAdd.svg" alt="add attachments"></img>
                                    </div>
                                </div>
                            </div>
                            <div class="horizontal__rule">
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="reset" class="btn cancel-btn">Cancel</button>
                                <div class="lastBtns">
                                    <button type="submit" class="btn submit-btn" >Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default withAuthCheck(Createquery);
