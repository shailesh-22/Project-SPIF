import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, Popper, Typography } from '@material-ui/core'


const Questions = ({ questions, loading }) => {

  const [answers, setAnswers] = useState("");

  const [open, setOpen] = useState(false);
  // const [score, setScore] = useState(0);
  useEffect(()=>{
    if(localStorage.getItem("item")==null)  //if wish array is not presnt before 
    {
        localStorage.setItem("item","[]")   //then add the wish
    }
  },[]) 

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log('hi');
  // }

  const [anchor, setAnchor] =  useState(null);
 

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    // <div className='row px-3 '>
    <form className='px-3 question-form ' >
      {
        questions.map((question, i) => {
          return (
            <div key={question.sStatementID} className='col-md-6 col-sm-12 col-md-12 question'>
              <div className='body px-3 w-100' >
                <h3 className='w-100'> <span>{question.order}---</span>{question.sDescription}</h3>
                {
                  question.order === null &&
                  <div className='multi-q-details'>
                    <h3 className='w-100'>{question.sDescription1}</h3>
                    <p>{question.sText}</p>
                    <h3>{question.sPointsDesc}</h3>
                    <h3>{question.sPointsBrief}</h3>
                  </div>

                }
                {
                  question.options.map((option) => { 
                    
                    question.options.forEach( (x)=>{
                      if( x.id != option.id ) x.selected = false;
                    } )
                    
                    const openPopover = (event) =>{
                      if (option.isAnswer === false) {
                        setAnchor(event.currentTarget)
                      }
                      else{
                        setAnchor(null)
                      }
                        
                    }

                    const handleClose = () => {
                      setAnchor(null);
                    };

                    const open = Boolean(anchor);

                    // const onSelect = ( ) =>{

                    //   let LinalArray = [] ;  let arrayUniqueByKey = [];

                    //   LinalArray = LinalArray.push( { 'stid': question.sStatementID, 'answers': option.text } );

                    //   let Key = 'stid';

                    //   arrayUniqueByKey = [ ...new Map( LinalArray.map( item=> [item[Key],item])).values() ]

                    //   localStorage.setItem("item", JSON.stringify(arrayUniqueByKey));

                    //   localStorage.getItem("item");

                    // }

                    return (
                      <div className="question-options">
                        
                        <input type="radio"
                          name={question.sStatementID}
                          value={option.text}
                          onChange={ (e)=>{ setAnswers(e.target.value) } }
                          onClick={openPopover}
                          onClose={handleClose}
                        />
                        <label className='px-1 question-label' > {option.text} </label>
                        

                        {/* When user click the wrong Answer(input)-->The Prompt will display */}

                        <Popper
                          style={{ 
                            backgroundColor:"white",
                            borderRadius:"20px",
                            width:"600px",
                            color:"black",
                            fontWeight:"bolder",
                            marginLeft:"250px",
                            marginTop:"2px",
                            boxShadow:"4px 2px 1px 2px rgba(0,0,0,0.25), -4px 2px 1px 2px rgba(0,0,0,0.25)",
                            padding:"10px"
                          }} 
                          open={open}
                          anchorEl={anchor} 
                        >
                          <div className='option-popper-title'>    
                            <Typography variant='h5'  >  The Reason for wrong answer </Typography>
                          </div>
                          <hr />
                          <Typography variant='h6' className='option-popper' >  {option.isPrompt} </Typography>
                          <div className='popper-btn'>
                            
                            <Button onClick={handleClose} variant="contained" color='primary' >OK</Button>
                          
                          </div>
                        </Popper>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      <Link to='/test-result'>
        <button type="submit" class="btn btn-primary">Submit Test</button>
      </Link>
    </form>
    // </div>
  )
}

export default Questions
