import React, { useState } from 'react';
import ToolDivitionRow from '../tool-divition-row/tool-divition-row.comp';
import ToolRow from '../tool-row/tool-row.comp';


import './tool-table.style.css';

const ToolTable = (props) => {

     //console.log({props.toolsList});

     const [name, setName] = useState ();
     const [divition, setDivition] = useState ();
     const [process, setProcess] = useState ();
     const [turn, setTurn ]= useState ();

     const addTool = (event)=>{
         event.preventDefault();
         console.long('divition'+ divition);
         console.long('name'+ name);
         console.long('process'+ process);
         console.long('turn'+ turn);
     }
     
     return (
        <div className="tool-table-container">
         <div className="tools-form">
            <form>
                <table>
                    <tr>
                        <td>
                          Divition
                        </td>
                        
                    </tr>
                    <tr>
                     <td>   
                <select
                   value={divition}
                   onChange={(event)=>{
                       console.log(event.target.value);
                       setDivition(event.target.value);
                   }}
                   >
                    <option value="d1">Desing</option>
                    <option value="d2">Thermal-treatments</option>
                    <option value="d3">Sanding</option>
                    <option value="d4">Beveled</option>
                    <option value="d5">Packing</option>
                </select>
                </td>
                </tr>
                <tr>
                    <td>Name</td>
                 </tr>
                <tr>
                <td><input 
                      type="text"
                      value={name}
                      onChange={(event) => {
                          setName(event.target.value);
                          }}
                />
                </td>
                </tr>
                <tr>
                    <td>Process</td>
                 </tr>
                <tr>
                <td><input 
                type="text"
                value={process}
                   onChange={(event)=>{
                       setProcess(event.target.value);
                   }}
                />
                </td>
                </tr>
                <tr>
                    <td>Turn</td>
                 </tr>
                <tr>
                <td><input
                 type="text"
                 value={turn}
                   onChange={(event)=>{
                       setTurn(event.target.value);
                   }}
                 />
                 </td>
                </tr>
                <tr>
                    <td> 
                        <button
                           
                        >
                            Add tool</button>
                    </td>
                </tr>
                </table>
            </form>
        </div>

           {props.toolsList.map((divition, index)=>{
               return (
               <React.Fragment key={divition.id}>
                  <ToolDivitionRow divitionName={divition.name}/>
                  {divition.tools.map((tool, indexTool)=>{
                      return (
                        <ToolRow
                          key={tool.id}
                          tool={tool}
                          />
                      );
                  }) }
                 </React.Fragment> 
                 );

           })}
         </div>
     );
}

export default  ToolTable;