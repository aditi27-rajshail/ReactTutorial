import React from 'react';
function App() {
    let currDate = new Date(2021, 8, 8, 15);
    currDate = currDate.getHours();
    let msg = '';
    const cssstyle = {};
    if (currDate >= 1 && currDate < 12) {
        msg = 'Good Morning';
        cssstyle.color = "green";
    } else if (currDate >= 12 && currDate < 19) {
        msg = 'Good Afternoon';
        cssstyle.color = "orange";
    } else {
        msg = 'Good Night';
        cssstyle.color = "brown";
    }
    return (
        <>
            <div>
                <h1 > Hello, <span style={cssstyle}> {msg}!!</span></h1>
            </div>
        </>

    );
}
export default App;
