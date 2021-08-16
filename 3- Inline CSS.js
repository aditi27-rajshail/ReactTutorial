import react from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name = 'aditi'
const img1 = "https://source.unsplash.com/200x200/?nature,water"
const img2 = "https://source.unsplash.com/200x200/?city,water"
const img3 = "https://source.unsplash.com/200x200/?tree,water"

/* 
.heading{
  color:#fa9191;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  text-shadow: 0px 2px 4px #ffe9c5;
  margin: 20px 0px 50px 0px;
  font-family: 'Josefin Sans', sans-serif;
} */

//In React CSS---> Kebab case is converted into Camel Case
const heading = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  margin: ' 20px 0px 50px 0px',
  textShadow: '0px 2px 4px #ffe9c5',
  fontFamily: '"Josefin Sans", sans-serif'

}

ReactDOM.render(
  <>
    <h1 style={heading}>{`My name is ${name}`}</h1>
    <div className="img_div">
      <img src={img1} alt="Image" />
      <img src={img2} alt="Image" />
      <img src={img3} alt="Image" />
    </div>
  </>,
  document.getElementById('root')
);

//JSK atrribute <img /> self closing child with no children
//className for css styling because class is already reserved
//<h1 className="heading>{`My name is ${name}`}</h1>

