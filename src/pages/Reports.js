import React  from 'react'
// import Excel from '../Excel/Excel'
// import './bootstrap/dist/css/bootstrap.min.css';
import '../css/Reports.css'
import { render } from '@testing-library/react'
import { Component } from "react";
import { excelData } from '../components/Data/Data';
import ReactHTMLTableTOExcel from 'react-html-table-to-excel';


export default  class Reports extends Component {
    render(){
        console.warn(excelData)
  return(
    <>
        {/* <h5 className="header" >Data Export Excel </h5> */}
    <section className="reportContainer">
            <div className="content">
                <table className="tableTXT" id='empTable'>
                    <thead>
                        <tr>
                            <td className='nameTD' >  NAME</td>
                            <td className='notiTD'>NOTIFICATION</td>
                            <td className='timeTD'>TIME </td>
                        </tr>
                    </thead>
                        <tbody>
                            {excelData.map((item, index) =>{
                                return(
                                 
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.noti}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                    
                                )
                            })}

                        </tbody>
                </table>
                    
                <ReactHTMLTableTOExcel
                className="exBtn"
                table="empTable"
                filename="emp excel file"
                sheet="Sheet"
                buttonText="Export to Excel"
                />
                           
            </div>
            
        </section>          
                                      
    </>
    
    )
  }
}



