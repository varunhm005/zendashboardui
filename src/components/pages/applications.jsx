import React from 'react'
import withAuthCheck from '../Auth/withAuthCheck';

function applications() {
  return (
    <div className='applicationFirst' >Content available after completing Placement preparation
    </div>
  )
}

export default withAuthCheck(applications);

