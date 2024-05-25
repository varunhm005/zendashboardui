import React from 'react'
import withAuthCheck from '../Auth/withAuthCheck';

function interviewtasks() {
  return (
    <div className='interviewFirst' >Content available after completing Placement preparation
    </div>
  )
}

export default withAuthCheck(interviewtasks);