import React, { useState } from 'react'


export default function About(props) {
    /*const [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        }
    )*/
 let myStyle={
       color:props.mode==='dark'?'white':'black',
       backgroundColor:props.mode==='dark'?'grey':'white'

 }

    

    return (
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils Web Application gives a way to analyze your text quickly and efficiently.You can use it as text word counter or the character counter.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides you the instant character count and word count ststistics for a given  text . TextUtils reports the number of words and characters. Tis is suitable for writting text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This Word Counter Software works in any webBrowser As Like chrome, firefox, safari,opera etc. It suits to count charcters and words in facebook,books, blogs, pdf document ,essay etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
