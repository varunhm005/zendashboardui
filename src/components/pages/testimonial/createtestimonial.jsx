import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import withAuthCheck from '../../Auth/withAuthCheck';

function Createtestimonial() {

    const [formData, setFormData] = useState({
        uploadPhoto: '',
        videoUrl: '',
        description: ''
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
    
        // if (!formData.uploadPhoto.trim()) {
        //   newErrors.uploadPhoto = 'Url is required';
        // }
    
        if (!formData.videoUrl.trim()) {
          newErrors.videoUrl = 'Url is required';
        }
    
        if (!formData.description.trim()) {
          newErrors.description = 'Description is required';
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
                        <form class="d-flex justify-content-center flex-column mt-2" autocomplete="off" onSubmit={handleSubmit} >
                            <div class="inputContainer">
                                <label for="photo" class="label-style mb-0">Upload Photo</label>
                                <div>
                                    <input class="formInputs" name="photo" placeholder="Click to upload the photo" type="text" disabled="" value={formData.uploadPhoto} onChange={handleChange}></input>
                                    {/* {errors.uploadPhoto && <span  style={{'color':'Red'}} ><i class="fa fa-warning"></i>  {errors.uploadPhoto}</span>} */}
                                </div>
                            </div>
                            <div class="inputContainer">
                                <label for="video" class="label-style mb-0">Video</label>
                                <div>
                                    <input class="formInputs" name="video" placeholder="Video URL" type="text" value={formData.videoUrl} onChange={handleChange}></input>
                                    {errors.videoUrl && <span  style={{'color':'Red'}} ><i class="fa fa-warning"></i>  {errors.videoUrl}</span>}
                                </div>
                            </div>
                            <div class="inputContainer">
                                <label for="description" class="label-style mb-0">Description</label>
                                <textarea class="formInputs" rows="5" name="description" type="text" placeholder="Enter the Description" value={formData.description} onChange={handleChange}></textarea>
                                {errors.description && <span  style={{'color':'Red'}} ><i class="fa fa-warning"></i>  {errors.description}</span>}
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

export default withAuthCheck(Createtestimonial);
