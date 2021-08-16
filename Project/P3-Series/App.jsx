
import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const App = () => {
    return (
        <>
            <h1 className="title_name">Top Netflix Series</h1>
            {Sdata.map((val) => {
                return (
                    <Cards           //maps is used
                        key={val.id} //helps react to idetify which item has been changed (added,removed,reordered)and hence its not represented a props
                        cardimg={val.cardimg}
                        carddes={val.carddes}
                        cardtitle={val.cardtitle}
                        cardlink={val.cardlink}
                    />
                );
            })}
        </>
    );
}
export default App;
/* ----Method 3------
using map
arrayname.map(function name)
function <function name>(val){
    object name= {val.array value}
}

function acard(val) {
    return (
        <Cards
            cardimg={val.cardimg}
            carddes={val.carddes}
            cardtitle={val.cardtitle}
            cardlink={val.cardlink}
        />
    );

}
ReactDOM.render(
    <>
        <h1 class="title_name">Top Netflix Series</h1>
        {Sdata.map(acard)}
    </>,
    document.getElementById('root')
);*/

/*-------Method 2-----------
 Create A array of data -Sdata
 import/export Sdata
 call the  {Sdata[index].value}
 store it in a object <name>
 call that object in props.<name>

ReactDOM.render(
    <>
        <h1 class="title_name">Top Netflix Series</h1>
        <Cards
            cardimg={Sdata[0].cardimg}
            carddes={Sdata[0].carddes}
            cardtitle={Sdata[0].cardtitle}
            cardlink={Sdata[0].cardlink}
        />
        <Cards
            cardimg={Sdata[1].cardimg}
            carddes={Sdata[1].carddes}
            cardtitle={Sdata[1].cardtitle}
            cardlink={Sdata[1].cardlink}

        />
        <Cards
            cardimg={Sdata[2].cardimg}
            carddes={Sdata[2].carddes}
            cardtitle={Sdata[2].cardtitle}
            cardlink={Sdata[2].cardlink}
        />
    </>,
    document.getElementById('root')
);
*/


/* ------------Method 1---------
React prop -Properties
function arguments in JS or attributes in HTML*/

/* ReactDOM.render(
   <>
   <Cards
   cardimg="https://tfipost.com/wp-content/uploads/2020/07/picturemessage_1dkobggl.xyh_-750x375.jpg"
   carddes="A Netflix Original Series"
   cardtitle="DARK"
   cardlink="https://www.netflix.com/in/title/80100172"

   />
   <Cards
   cardimg="https://english.cdn.zeenews.com/sites/default/files/2021/05/25/938590-money-heist.png"
   carddes="A Netflix Original Series"
   cardtitle="Money Heist"
   cardlink="https://www.netflix.com/in/title/80192098"

   />
   <Cards
   cardimg="https://i.pinimg.com/originals/53/2c/67/532c67e4b3c4ac827b663901068b6341.jpg"
   carddes="A Netflix Original Series"
   cardtitle="Lucifer"
   cardlink="https://www.netflix.com/in/title/80057918"
   />
   </>,
    document.getElementById('root')
    )*/