import React from 'react'
import './testimonial.css'
import { Link  } from 'react-router-dom';
import withAuthCheck from '../../Auth/withAuthCheck';

function testimonial() {
  return (
    <section className="testimonial-container">
            <div class="testimonialSecond">
                <div class="testimonialThird">
                    <div class="testimonialFourth"> 
                    <Link to="/createtestimonial">
                    <button className='btn btn-primary' >Add Testimonial</button>
                    </Link>
                    </div>
                </div><div class="testimonialFifth">
                    <div class="py-4"><div class="text-center p-4">
                        <h3>You have not submitted testimonial yet.</h3>
                    </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default withAuthCheck(testimonial);