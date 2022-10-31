import React from "react";
// import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";
import './assessTest.css'
import Questions from "./Questions";
import Pagination from "../PaginationFile/Pagination";
import Timer from "./Timer";
import useFetch from "../../Custom Hook/useFetch";
// import ReactPaginate from 'react-paginate'
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../../../Sidebar/Header";


const AssessmentTest = () => {

  // const url = `http://103.160.153.38:8020/limens/get_statements_LMS/`

  // const[questions,setQuestions] = useState(null);
  // const[loading,setLoading] = useState(false);

  let{data:questions, loading}  = useFetch("http://localhost:3004/questions")

  const[curentPage,setCurrentPage] = useState(1);
  const[questionPerPage] = useState(1);

  // useEffect(()=>{
  //   const fetchQuestions = async () =>{
  //     setLoading(true);
  //     const res = await axios.post(url,{
  //       "uUserID": "2",
  //       "sType": "TID00000003",
  //       "uExamID": "EXAMID00000116",
  //       "uSetNo": 3
  //     });
  //     setQuestions(res.data);
  //     setLoading(false);
  //   }
    
  //   fetchQuestions();
  // },[]);

  if(!questions) return <CircularProgress size="5rem" style={{ display:"flex", margin:"auto" }}/>

  //Get Current Question

  const indeOfLastQues = curentPage * questionPerPage ;
  const indeOfFirstQues = indeOfLastQues - questionPerPage ;
  const currentQueston = questions.slice(indeOfFirstQues,indeOfLastQues);

  //Change Page
  

  return (
    
   
    <div className=" assessment-test">
        <div className='header w-100'>
            <h1>Assesment Test</h1>
            <div className='pageNo-Timer'>
                <h3> Question {indeOfFirstQues+1} of {questions.length}</h3>
                <Timer/>
            </div>
        </div>
        <div className="questionWithOption" >
          <Questions questions={currentQueston} loading={loading} />

          <Pagination 
              questionPerPage={questionPerPage} 
              totalQuestions={questions.length} 
              setCurrentPage={setCurrentPage}
              currentPage = {curentPage}
          />

        </div>
    
    </div>
  )
}

export default AssessmentTest;



