
import React from 'react'
import './pagination.css'

const Pagination = ( {questionPerPage, totalQuestions, setCurrentPage, currentPage} ) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalQuestions/questionPerPage); i++) 
    {
        pageNumber.push(i);       
    }


  return (
        <div className='pagination'>
            
            { currentPage==pageNumber[0] ? null :
                <button id='previous-btn' onClick={( ()=>{ setCurrentPage(currentPage-1) })}  >
                    Previous
                </button>
            }
            {/* {
                pageNumber.map((number,index)=>(
                    <div>
                        <button key={index} onClick={()=> setCurrentPage(number)} className={ number == currentPage ? 'active' : ''} >
                            {number}
                        </button>
                    </div>
                    
                ))
            } */}
            { currentPage==pageNumber.length? null :
                <button id='next-btn' onClick={( ()=>{ setCurrentPage(currentPage+1) })} >
                    Next
                </button>
            }
        </div>
  )
}

export default Pagination
