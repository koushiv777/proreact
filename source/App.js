/**
 * Created by Koushiv on 2/8/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard'

let cardsList = [
    {
        id:1,
        title:"Read the book",
        description:"I should read the **whole book**",
        color:"#bd8d31",
        status:"in-progress",
        tasks:[]
    },
    {
        id:2,
        title:"Write some code",
        description:"Code along the samples in the boook. The complete source can be found at [github](https://github.com/pro-react)",
        color:"#3a7e28",
        status:"todo",
        tasks:[
            {
                id:1,
                name:"Contact List Example",
                done:true
            },
            {
                id:2,
                name:"Kanban Example",
                done:false
            },
            {
                id:3,
                name:"My own experiments",
                done:false
            }
        ]
    },
    {
        id:3,
        title:"This is a new card with very very long title, thus having more than 80 characters",
        description:"I should read the **whole book**",
        color:"green",
        status:"done",
        tasks:[]
    }
];

ReactDOM.render(<KanbanBoard cards={cardsList} />,document.getElementById('root'));