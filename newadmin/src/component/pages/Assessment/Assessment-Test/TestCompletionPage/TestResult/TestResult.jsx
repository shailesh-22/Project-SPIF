import React from 'react'
import './testResult.css'
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const TestResult = () => {
  return (
    <div className='test-result'>
      <div className="card test-card" >
        <div className="card-body">
            <h2 className="card-title"> Test Has Been Completed Successfully </h2>
            <hr />
          <div className='card-result'>
            <p className="card-text"> Correct Anwsers : 12 </p>
            <p className="card-text"> Wrong Anwsers : 4 </p>
            <p className="card-text"> Points : 15/20 </p>
            <p className="card-text"> Percentage : 70% </p>
          </div>
          <hr />
          <div className='card-feedback'>
            <h4>Feedback</h4>
            <p>You've eperienced how clean and professional your tests will look with SPIF </p>
          </div>
          <hr />

          <Tooltip title="To Collect Your Certificate" placement='right'>
            <a>
              <Link to='/certification-page'>
                <Button variant='contained' color='primary' className="card-link">Click here...</Button>
              </Link>
            </a>         
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default TestResult
