import React from 'react'
//props.attritbute name
function Cards(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.cardimg} alt="source_img" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">
                            {props.carddes}
                        </span>
                        <h3 className="card_title">{props.cardtitle}</h3>
                        <a rel="noreferrer" href={props.cardlink} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Cards;