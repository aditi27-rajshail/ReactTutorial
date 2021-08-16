import react from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
/*
Steps
1)create functional component with Capital filename.jsx(/js but jsx is better to understand)
2)import only react (react dom is not required)
3) function <component name>(){
  return(
    ;
  )
}
4)export default <component name>
5)import <component name> from './<component name>'
6) Use <omponent name /> in render()
  
*/

