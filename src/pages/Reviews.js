import { orange } from "@mui/material/colors";
import React from "react";
import {FaStar} from "react-icons/fa";
import { useState } from "react";

const colors ={ 
    orange: "#FFBA5A",
    grey:"a9a9a9",

}
const star = Array(5).fill(0); 

export default function Reviews(){

    const [ currentValue, setCurrentValue] = useState(0);
    const [ hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value =>{
        setCurrentValue(value)
    };
    
    const handleMouseHover = value =>{
        setHoverValue(value)
    };
    
    const handleMouseLeave = value =>{
        setHoverValue(undefined)
    };

    return(
        <div className="Reviews" style={styles.revConainer}>
            <h1>Reviews page</h1>

            <div className="star" style={styles.star}> 
                {star.map((_,index)=>{
                    return(
                        <FaStar 
                        key={index}
                        size={24}                           
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}    

                        color ={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        onClick={() => handleClick(index + 1)}  
                        onMouseOver={ () => handleMouseHover(index + 1)} 
                        onMouseLeave={handleMouseLeave}              
                         />
                    )
                })}
            </div>
            <textarea
                style={styles.textarea}
                placeholder="Give us your feedback"
            />
            <button style={styles.button}>SUBMIT</button>
        </div>
    )
}

const styles  = {
    revConainer:{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
    },
    textarea:{
        border:"1px solid a9a9a9",
        borderRadius:5,
        width:300,
        margin:"20px 0",
        minHeight:100,   
        padding:10,
    },
    button:{
        border:"1px solid a9a9a9",
        borderRadius:5,
        width:300,
        padding:10,
    }
   
}
