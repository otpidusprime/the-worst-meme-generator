import React, { forwardRef } from "react"

const MemeApp = forwardRef((props, ref) => (
    <div className="memeApp">
        <div className="memeRender" ref={ref}>
            <img src={props.state.memeImg} alt="Meme"/>
            <h2 className="top">{props.state.topText}</h2>
            <h2 className="bottom">{props.state.bottomText}</h2>
        </div>
        <form onSubmit={props.handleSubmit}>
            <input type="text"
                name="topText"
                value={props.state.topText}
                onChange={props.handleChange}
                placeholder="TOP TEXT"
            />
            <input type="text"
                name="bottomText"
                value={props.state.bottomText}
                onChange={props.handleChange}
                placeholder="BOTTOM TEXT"
            />
            <button>New Meme</button>
        </form>
        <div className="downloadSection">
            <p>This is the worst meme ever!</p>
            <button onClick={props.handleDownload} className="downloadMeme">Download It</button>
        </div>
    </div>
))

export default MemeApp