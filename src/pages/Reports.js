import React  from 'react'
import { Button } from 'bootstrap';
import '../css/Reports.css'
import { render } from '@testing-library/react'
import { Component } from "react";
import { columns, excelData } from '../components/Data/Data';
import {pdfData} from '../components/Data/Data';
import ReactHTMLTableTOExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'



export default  class Reports extends Component {

    //generate to pdf
    pdfGenerate=()=>{
        var doc = new jsPDF()
        doc.text("REPORT",20,10)
        doc.autoTable({
            columns:columns.map(col=>({...col, dataKey:col.field})),
            body:excelData
        })

        doc.save('reports.pdf')  
    }
    render(){
        console.warn(excelData)
  return(
    <>

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
            </div>
                {/*excel button */}
                <ReactHTMLTableTOExcel
                    className="exBtn"
                    table="empTable"
                    filename="emp excel file"
                    sheet="Sheet"
                    buttonText="Export to Excel"
                    />   

                {/*pdf button */}
            <button  onClick={this.pdfGenerate} className='pdfBtn'> <br/>Export to PDF</button>
            
        </section>          
                                      
    </>
    
    )
  }
}



