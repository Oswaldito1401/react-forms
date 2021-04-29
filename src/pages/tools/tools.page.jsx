import React from 'react';
import FilterableToolTable from './components/filterable-tool-table/filterable-tool-table.comp';


const ToolsPage = () => {

  let toolsList = [
         {
            id:"d1",
            name:'Desing',
            tools: [   
              {
               id:"d1t1",
               name:"Carlos/",
               process:"Stamp/",
               turn:"6hours a 14hours",
              },
              { 
                id:"d1t2",
                name:"Freddy/",
                process:"Lamination/",
                turn:"14hours a 22hours",
            },
            {
              id:"d1t3",
              name:"Wilson/",
              process:"Die cut/",
              turn:"22hours a 6hours",
            }
            ]
         },
         {
             id:"d2",
             name:'Thermal-treatments',
             tools: [
               {
                id:"d2t1",
                name:"Oscar/",
                process:"Temper/",
                turn:"6hours a 14hours",
               },
               {
                id:"d2t2",
                name:"Alex/",
                process:"Tempered/",
                turn:"14hours a 22hours",
            },
            {
              id:"d2t3",
              name:"Albeiro/",
              process:"Temper/",
              turn:"22hours a 6hours",
          }
          ]
         },
         {
           id:"d3",
           name:'Sanding',
           tools: [
             {
              id:"d3t1",
              name:"Pablo/",
              process:"Sanding/",
              turn:"6hours a 14hours",
             },
             {
              id:"d3t2",
              name:"Sergio/",
              process:"Washed/",
              turn:"14hours a 22hours",
          },
          {
            id:"d3t3",
            name:"Javier/",
            process:"Sanding/",
            turn:"22hours a 6hours",
          }
           ]
         },
         {
           id:"d4",
           name:'Beveled',
           tools: [
             { 
               id:"d4t1",
               name:"Gonzalo/",
             process:"Straightened/",
             turn:"6hours a 14hours",
            },
            {
              id:"d4t2",
              name:"Jorge/",
              process:"Beveled/",
              turn:"14hours a 22hours",
          },
          { 
            id:"d4t3",
            name:"Mauricio/",
            process:"Beveled/",
            turn:"22hours a 6hours",
        }
           ]
         },
         {
           id:"d5",
           name:'Packing',
           tools: [
             {
              id:"d5t1",
              name:"Memo/",
              process:"Finished/",
              turn:"6hours a 14hours",
             },
             {
              id:"d5t2",
              name:"Ramon/",
              process:"Lacquered/",
              turn:"14hours a 22hours",
          },
          { 
            id:"d5t3",
            name:"Cesar/",
            process:"Riveted/",
            turn:"22hours a 6hours",
           }
           ]
         }
    ];
  
    return (
      <>
          <FilterableToolTable toolsList={toolsList}/>
          
          </>
        );
}

export default  ToolsPage;