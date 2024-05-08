import React from 'react'
import './portfolio.css'

export default function portfolio() {
    return (
        <section className="portfolio-container">
            <div class="portfolioSecond">
                <div class="portfolioThird">
                    <div class="portfolioFourth">
                    </div>
                </div>

                <div class="row">
                    <div class="col-4 border-right">
                        <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off">
                            <div class="row">
                                <div class="col-12">
                                    <div class="widthfit mx-3 px-2">
                                        <div class="form-group mt-1">
                                            <label for="github" class="label-style mb-0">GitHub URL</label>
                                            <div>
                                                <input class="formInputs" name="github" type="text" value=""></input>
                                            </div>
                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="deployed" class="label-style mb-0">Portfolio URL</label>
                                            <div>
                                                <input class="formInputs" name="deployed" type="text" value=""></input>
                                            </div>
                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="resume" class="label-style mb-0">Resume URL</label>
                                            <div>
                                                <input class="formInputs" name="resume" type="text" value=""></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex px-4">
                                <button class="btn reqbuttoncreate" type="submit">Submit</button>
                            </div>
                        </form>
                        <p class="p-note">
                            <span style={{'color': 'black','font-weight': 'bold'}}> Note </span>: You Wont be Able to Submit When the Portfolio is under <b> Review</b> or <b> Reviewed</b>.</p>
                    </div>
                    <div class="col-8">
                        <div class="container">
                            <div class="header border-bottom p-4 text-center w-75">
                                <h3>Portfolio Review</h3>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="port_item my-4">
                                        <span class="port_grey">Status:</span>
                                        <span>Not Submitted</span>
                                    </div>
                                    <div class="port_item my-4">
                                        <span class="port_grey">Comment:</span>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="port_item my-4">
                                        <span class="port_grey">Batch:</span>
                                        <span>Not Submitted</span>
                                    </div>
                                    <div class="port_item my-4">
                                        <span class="port_grey">Reviewed By:</span>
                                        <span>Not Submitted</span>
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
