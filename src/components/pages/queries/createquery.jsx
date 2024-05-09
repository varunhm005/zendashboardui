import React from 'react'
import { Link } from 'react-router-dom';

export default function createquery() {
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
                        <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off">
                            <div class="containerLabel">Topic</div>
                            <div class="inputContainer">
                                <label for="category" class="label-style mb-0">Category</label>
                                <div>
                                    <select class="formInputs" name="category">
                                        <option label="--- Select Category---"></option>
                                        <option value="1" index="0" label="Zen-Class Doubt"></option>
                                        <option value="2" index="1" label="Placement Related"></option>
                                        <option value="3" index="2" label="Coordination Related"></option>
                                        <option value="4" index="3" label="Pre-Bootcamp Related"></option>
                                    </select>
                                </div>
                                <label for="language" class="label-style mb-0">Prefered Voice Communication Language</label>
                                <div>
                                    <select class="formInputs" name="language">
                                        <option label="--- Select Language---"></option>
                                        <option value="1" index="0" label="English"></option>
                                        <option value="2" index="1" label="Hindi"></option>
                                        <option value="3" index="2" label="Tamil"></option>
                                    </select>
                                </div>
                            </div>
                            <div class="horizontal__rule">
                            </div>
                            <div class="containerLabel">Details</div>
                            <div class="inputContainer">
                                <label for="title" class="label-style mb-0">Query Title</label>
                                <div>
                                    <input class="formInputs" name="title" placeholder="Enter the query title" type="text" value=""></input>
                                </div>
                                <label for="description" class="label-style mb-0">Query Description</label>
                                <textarea class="formInputs" rows="5" name="description" type="text" placeholder="Enter the Description"></textarea>
                            </div>
                            <div class="horizontal__rule"></div>
                            <div class="containerLabel">Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</div>
                            <div class="inputContainer"><label for="startTime" class="label-style mb-0">From</label>
                                <div>
                                    <input class="formInputs" name="startTime" type="time" max="19:00" value="09:00"></input>
                                </div>
                                <label for="endTime" class="label-style mb-0">Till</label>
                                <div>
                                    <input class="formInputs" name="endTime" type="time" max="19:00" value="19:00"></input>
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
