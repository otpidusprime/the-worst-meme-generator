import React from "react"

function MemeApp(props) {
    return (
        <div className="memeApp">
            <div className="memeRender">
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
        </div>
    )
}

export default MemeApp