import React, {useState} from 'react'
import { IoIosArrowForward, IoIosArrowBack,IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage, setPostsPerPage}) {
    let pages =[];
    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }
    
    const decrement =()=>{
     
      if(currentPage===1){
        setCurrentPage(currentPage);
      }
      else
      setCurrentPage(currentPage=currentPage-1);
    }
    const increment =()=>{
      setCurrentPage(currentPage=currentPage+1);
    }
    const [num, setNum] = useState(5)
    const five =()=>{
      setPostsPerPage(5);
      setNum(5)
    }
    const six =()=>{
      setPostsPerPage(6);
      setNum(6)
    }
    const seven =()=>{
      setPostsPerPage(7);
      setNum(7)    }
    const eight =()=>{
      setPostsPerPage(8);
      setNum(8)    }
    
  return (
    <div>
    {/* {
        pages.map((Page, index)=>{
            return <button key={index} onClick={()=>setCurrentPage(Page)} className={Page===currentPage?'active': ''}>{Page}</button>;
        })
    } */}
    
    <div className='pagination'>
    <p className='rpage'>Rows per page</p>
    <div class="dropup">
        <button class="dropbtn">{num} <IoIosArrowDown/></button>
        <div class="dropup-content">
           <a href="#" onClick={()=>five()}>5</a>
            <a href="#" onClick={()=>six()}>6</a>
            <a href="#" onClick={()=>seven()}>7</a>
            <a href="#" onClick={()=>eight()}>8</a>
        </div>
      </div>  
    <button  onClick={()=>decrement()}>
       {currentPage===1?<MdKeyboardArrowLeft/>:<IoIosArrowBack/>}
      </button>
      <div className='cpage'> 
        <p >{currentPage}</p>
          -
        <p>{Math.ceil(totalPosts/postsPerPage)}</p>
        </div>
    
   <button onClick={()=>increment()}>
   <IoIosArrowForward/>
      </button>
    </div>



   
    </div>
  )
}
