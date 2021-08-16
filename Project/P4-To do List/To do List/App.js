import react, { useState } from 'react';
import TodoList from './TodoList';

/*
 list =value obtained from the user
 setlist=updates list by evemt.target.value
addItemstoList()= function executes the above
 
 items=arrays of list intems added by user
 setitems= updates items with olditems and list
 ListofItems()=on clicking the button executes the above

 items.map((itemval)=>{
return <li> {itemval}</li>

map function return each elements of the items


 */

const App =()=>{

    const [list, setlist]=useState();
    const [items, setitems]=useState([]);
    const addItemstoList=(event)=>{
        setlist(event.target.value);

    }
    const deleteItems=(id)=>{
        setitems((olditems)=>{
            return olditems.filter((arrElem,index)=>{  //filter out the element that matched the id
              return index !== id;
            });
        });

    };
 
    const ListofItems=()=>{
        setitems((olditems)=>{  //oldelements= data present in item +list
            return [...olditems, list];
        })
        setlist("");
    }
    return(
    <>
    <div className="main_div">
        <div className="center_div">
            <br></br>
                <h1>To Do List</h1>
            <input 
            type ="text"
            placeholder="add items"
            onChange={addItemstoList}
            name="list"
            value={list}

             />
            <button onClick ={ListofItems}>+</button>
            <ol>
                {
                items.map((itemval, index)=>{
                    return(
                        <TodoList
                            key ={index}
                            id= {index}
                            text = {itemval}
                            onSelect ={deleteItems}
                        />
                    );
                })
                }
            </ol>
        </div>
    </div>
    </>
)
}
export default App;