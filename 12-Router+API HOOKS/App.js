import React from 'react'
import About from './About';
import Contact from './Contact';
import { Route, Switch } from 'react-router';
import Navbar from './Navbar';
import Services from './Services';
import User from './User';
import Search from './Search';
import Searchresult from './Searchresult';
/* but there is no performnce difference in component the element is called everytime(create.Element)
but in render the part is is rendered is only updated, when using props use--->render else component without any props*/
export const App = () => {
    const Name=()=>{
        return <h1>Name Page</h1>
    }
    const Error=()=>{
        return <h1>Opps This page not found</h1>
    };
    return ( 
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={()=><About name= "About"/>}/>
            <Route exact path='/contact' component={Contact}/>
            <Route path='/contact/name' component={Name}/>
            <Route  path='/services' render={()=><Services name= "Sevices"/>}/>
            <Route path='/user/:fname/:lname' component={User}/>
            <Route exact path='/search' component={Search}/>
            <Route component={Error}/>
            
            
        </Switch>
        
            
        </>
    )
}
export default App;
