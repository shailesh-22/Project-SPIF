import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@material-ui/core';
import {saveAs} from 'file-saver'
import { useHistory } from 'react-router-dom';

const CertificationPage = () => {

    
    const history = useHistory();

//    To Download image ----Have to install package
//           npm install file-saver --save
//    Then have to import "saveAs" funtion from file-saver

    const downloadImage = () => {
        saveAs('image_url', 'Creative Photography Participation Certificate Template-1.jpeg'); // Put your image url here.
        history.push('/dashboard')
    }
    

  return (
    <div className='container certification'>
        <div className='d-flex flex-column align-items-center justify-content-center '>
            <div className='certificate'>
                <figure>
                    <img id='certificate' width='1000px' height="700px" src="Creative Photography Participation Certificate Template-1.jpeg" alt="avatar" />
                </figure>
            </div>
            <div className='certificate-btn'>
                <Tooltip title="To Download Certificate" placement='right'>
                    <Button onClick={downloadImage} variant='contained' color='primary' className="card-link">Download!</Button>            
                </Tooltip>
            </div>
        </div>
       
    </div>
  )
}

export default CertificationPage
 