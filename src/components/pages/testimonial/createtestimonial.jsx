import React from 'react'
import { Link } from 'react-router-dom';

export default function createtestimonial() {
    return (
        <section className='createtestimonial-container' >
            <div class="testimonialSecond">
                <div class="testimonialThird">
                    <div class="testimonialFourth">
                        <Link to="/testimonial">
                            <button className='btn btn-primary' >Back</button>
                        </Link>
                    </div>
                </div>
                <div class="testimonialFifth">
                    <div class="baseContainer">
                        <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off">
                            <div class="inputContainer">
                                <label for="photo" class="label-style mb-0">Upload Photo</label>
                                <div>
                                    <input class="formInputs" name="photo" placeholder="Click to upload the photo" type="text" disabled="" value=""></input>
                                </div>
                            </div>
                            <div class="inputContainer">
                                <label for="video" class="label-style mb-0">Video</label>
                                <div>
                                    <input class="formInputs" name="video" placeholder="Video URL" type="text" value=""></input>
                                </div>
                            </div>
                            <div class="inputContainer">
                                <label for="description" class="label-style mb-0">Description</label>
                                <textarea class="formInputs" rows="5" name="description" type="text" placeholder="Enter the Description"></textarea>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="false"></input>
                                <label class="form-check-label">
                                    <strong>I agreed to the following <span style={{'color': 'blue','cursor': 'pointer'}}>T&amp;C</span>
                                    </strong>
                                </label>
                            </div>
                            <div class="horizontal__rule">
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="reset" class="btn cancel-btn">Cancel</button>
                                <div class="lastBtns"><button type="submit" class="btn submit-btn" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}
