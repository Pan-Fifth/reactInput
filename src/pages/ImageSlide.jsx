import { useEffect, useState } from "react"
import Navigation from "../components/Navigation"
import { ArrowBigLeft ,ArrowBigRight} from "lucide-react";

const ImageSlide = () => {
    
    const [index,setIndex]=useState(0)
    useEffect(()=>{
    const timeout = setTimeout(() => {
      setIndex((index) => index==0 ? 4 :index-1);
    }, 3000);
    return () => clearTimeout(timeout);
    },[index])
    
    const imageList =[
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
   
    const hdlPrevious=()=>{
        index==0 ? setIndex(4) :setIndex(index-1)
    }
    const hdlNext =()=>{
        index==4 ? setIndex(0) :setIndex(index+1)
    }
    console.log(index)
  return (
    <div>
        <Navigation/>
        <div style={{display:'flex', justifyContent:"space-between",marginBottom:"15px",alignItems:"center"}}>
            <ArrowBigLeft onClick={hdlPrevious}>Previous</ArrowBigLeft>
            <img src={imageList[index]} width={"600px"} height={"450px"}/>
            <ArrowBigRight onClick={hdlNext} >Next</ArrowBigRight>
        </div>
        <div>
        </div>
    </div>
  )
}
export default ImageSlide