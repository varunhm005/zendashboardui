import React, { useState } from 'react'
import './portfolio.css'
import withAuthCheck from '../../Auth/withAuthCheck';

function Portfolio() {

    const [formData, setFormData] = useState({
        gitHubUrl: '',
        portfolioUrl: '',
        resumeUrl: ''
    });

    const [errors, setErrors] = useState({});
    console.log("errors",errors)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const validate = () => {
        const newErrors = {};
    
        if (!formData.gitHubUrl.trim()) {
          newErrors.gitHubUrl = 'Url is required';
        }
    
        if (!formData.portfolioUrl.trim()) {
          newErrors.portfolioUrl = 'Url is required';
        }
    
        if (!formData.resumeUrl.trim()) {
          newErrors.resumeUrl = 'Url is required';
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validate()) {
          // Submit form data
          console.log('Form submitted successfully', formData);
        } else {
          console.log('Form has errors');
        }
      };
    

    return (
        <section className="portfolio-container">
            <div class="portfolioSecond">
                <div class="portfolioThird">
                    <div class="portfolioFourth">
                    </div>
                </div>

                <div class="row">
                    <div class="col-4 border-right">
                        <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off" onSubmit={handleSubmit} >
                            <div class="row">
                                <div class="col-12">
                                    <div class="widthfit mx-3 px-2">
                                        <div class="form-group mt-1">
                                            <label for="github" class="label-style mb-0">GitHub URL</label>
                                            <div>
                                                <input class="formInputs" name="github" type="text" value={formData.gitHubUrl} onChange={handleChange}></input>
                                                {errors.gitHubUrl && <span  className='alert-color' ><i class="fa fa-warning"></i>  {errors.gitHubUrl}</span>}
                                            </div>
                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="deployed" class="label-style mb-0">Portfolio URL</label>
                                            <div>
                                                <input class="formInputs" name="deployed" type="text" value={formData.portfolioUrl} onChange={handleChange}></input>
                                                {errors.portfolioUrl && <span  className='alert-color' ><i class="fa fa-warning"></i> {errors.portfolioUrl}</span>}
                                            </div>
                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="resume" class="label-style mb-0">Resume URL</label>
                                            <div>
                                                <input class="formInputs" name="resume" type="text" value={formData.resumeUrl} onChange={handleChange}></input>
                                                {errors.resumeUrl && <span className='alert-color' ><i class="fa fa-warning"></i> {errors.resumeUrl}</span>}
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
                            <span style={{ 'color': 'black', 'font-weight': 'bold' }}> Note </span>: You Wont be Able to Submit When the Portfolio is under <b> Review</b> or <b> Reviewed</b>.</p>
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

export default withAuthCheck(Portfolio);