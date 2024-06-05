import React, { useRef, useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './accordion.css'
import { postData } from '../../../api/api'
const moment = require('moment-timezone');


function BasicExample({ content }) {

  moment.tz.setDefault('Asia/Kolkata');

  const { accordionContent, sessionDay, sessionName, taskSubmitted, urlDetails } = content;
  const [taskSubmittedData, settaskSubmittedData] = useState(taskSubmitted);


  const frontendSourceRef = useRef(null);
  const frontendDeployedRef = useRef(null);
  const backendSourceRef = useRef(null)
  const backendDeployedRef = useRef(null);
  const studentCommentRef = useRef(null)

  useEffect(() => {
    if ((accordionContent === 'frontend' || accordionContent === 'full') && taskSubmitted) {
      frontendSourceRef.current.value = urlDetails.frontendSourceCode;
      frontendDeployedRef.current.value = urlDetails.frontendDeployedUrl;
      studentCommentRef.current.value = urlDetails.studentComments;
    }
    if ((accordionContent === 'backend' || accordionContent === 'full') && taskSubmitted) {
      backendSourceRef.current.value = urlDetails.backendSourceCode;
      backendDeployedRef.current.value = urlDetails.backendDeployedUrl;
      studentCommentRef.current.value = urlDetails.studentComments;

    }
  })


  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const frontendSourceCode = frontendSourceRef?.current?.value ? frontendSourceRef.current.value : "";
    const frontendDeployedUrl = frontendDeployedRef?.current?.value ? frontendDeployedRef.current.value : "";
    const backendSourceCode = backendSourceRef?.current?.value ? backendSourceRef.current.value : "";
    const backendDeployedUrl = backendDeployedRef?.current?.value ? backendDeployedRef.current.value : "";
    const studentComments = studentCommentRef?.current?.value ? studentCommentRef.current.value : "";

    const validate = () => {
      const newErrors = {};

      if (accordionContent === 'frontend' || accordionContent === 'full') {
        if (!frontendSourceCode.trim()) {
          newErrors.frontendSource = 'Field cannot be empty';
        }

        if (!frontendDeployedUrl.trim()) {
          newErrors.frontendDeployedUrl = 'Field cannot be empty';
        }
      }

      if (accordionContent === 'backend' || accordionContent === 'full') {
        if (!backendSourceCode.trim()) {
          newErrors.backendSourceCode = 'Field cannot be empty';
        }

        if (!backendDeployedUrl.trim()) {
          newErrors.backendDeployedUrl = 'Field cannot be empty';
        }
      }
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

    let submittedDate = moment().format('DD/MM/YYYY')

    if (validate()) {

      let payload = {
        frontendSourceCode, frontendDeployedUrl, backendSourceCode, backendDeployedUrl, studentComments, sessionDay, submittedDate, taskName: sessionName
      }

      const response = await postData('/task', JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.code === 200) {
        alert(response.message)
        settaskSubmittedData(true)
      } else {
        alert('Failed while creating query');
      }

      if ((accordionContent === 'frontend' || accordionContent === 'full') && taskSubmitted) {
        frontendSourceRef.current.value = urlDetails.frontendSourceCode;
        frontendDeployedRef.current.value = urlDetails.frontendDeployedUrl;
        studentCommentRef.current.value = urlDetails.studentComments;
      }

      if ((accordionContent === 'backend' || accordionContent === 'full') && taskSubmitted) {
        backendSourceRef.current.value = urlDetails.backendSourceCode;
        backendDeployedRef.current.value = urlDetails.backendDeployedUrl;
        studentCommentRef.current.value = urlDetails.studentComments;
      }

    } else {
      console.log('Form has errors');
    }


  };

  const renderFrontendContent = () => {
    return <div>
      <div class="">
        <div class="form-group mt-2">
          <label for="649fdc131df1f800768e15d1_sourceCodeFrontEnd" class="label-style mb-0">Front-end Source code</label>
          <div>
            <input class="formInputs" name="649fdc131df1f800768e15d1_sourceCodeFrontEnd" placeholder="Enter Front-end Source code link" type="text" ref={frontendSourceRef}></input>
            {errors.frontendSource && <span className='alert-color' ><i class="fa fa-warning"></i>  {errors.frontendSource}</span>}
          </div>
        </div>
      </div>
      <div class="">
        <div class="form-group mt-2">
          <label for="649fdc131df1f800768e15d2_deployedUrlFrontEnd" class="label-style mb-0">Front-end Deployed URL</label>
          <div>
            <input class="formInputs" name="649fdc131df1f800768e15d2_deployedUrlFrontEnd" placeholder="Enter Front-end Deployed URL link" type="text" ref={frontendDeployedRef}></input>
            {errors.frontendDeployedUrl && <span className='alert-color' ><i class="fa fa-warning"></i>  {errors.frontendDeployedUrl}</span>}
          </div>
        </div>
      </div>
    </div>
  }

  const renderBackendContent = () => {
    return <div>
      <div class="">
        <div class="form-group mt-2">
          <label for="649fdc131df1f800768e15d1_sourceCodeFrontEnd" class="label-style mb-0">Back-end Source code</label>
          <div>
            <input class="formInputs" name="649fdc131df1f800768e15d1_sourceCodeFrontEnd" placeholder="Enter Front-end Source code link" type="text" ref={backendSourceRef}></input>
            {errors.backendSourceCode && <span className='alert-color' ><i class="fa fa-warning"></i>  {errors.backendSourceCode}</span>}
          </div>
        </div>
      </div>
      <div class="">
        <div class="form-group mt-2">
          <label for="649fdc131df1f800768e15d2_deployedUrlFrontEnd" class="label-style mb-0">Back-end Deployed URL</label>
          <div>
            <input class="formInputs" name="649fdc131df1f800768e15d2_deployedUrlFrontEnd" placeholder="Enter Front-end Deployed URL link" type="text" ref={backendDeployedRef} ></input>
            {errors.backendDeployedUrl && <span className='alert-color' ><i class="fa fa-warning"></i>  {errors.backendDeployedUrl}</span>}
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <section>
      <div class="activity ml-1 mt-3 mb-2">Activities</div>
      <Accordion>
        {/* <div class="activity ml-1 mt-3 mb-2">Activities</div> */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <div class="tagsList"><div class="tagTitle">Tags:</div><div class="tagItem">HTML &amp; CSS</div></div>
            <div class="p-0">
              <form autocomplete="off" onSubmit={handleSubmit} >
                <div class="task-area" style={{ 'padding': '16px' }}>
                  <div class="submission">
                    {accordionContent === "frontend" && renderFrontendContent()}
                    {accordionContent === "backend" && renderBackendContent()}
                    {accordionContent === "full" && [renderFrontendContent(), renderBackendContent()]}

                    <label for="comments" class="label-style mb-0">Comments</label>
                    <div>
                      <input class="formInputs" name="comments" placeholder="leave your comments here" ref={studentCommentRef}></input>
                    </div>
                    {taskSubmittedData == false ? <button class="btn btn-primary" type="submit" style={{ 'width': "10%" }} >Submit</button> : ''}
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default BasicExample;