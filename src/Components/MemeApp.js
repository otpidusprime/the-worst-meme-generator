import React from "react"

function MemeApp(props) {
    return (
        <div className="memeApp">
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
            <div className="meme-render">
                <img src={props.state.memeImg} />
                <div class="toptext">{props.state.topText}</div>
                <div class="bottomtext">{props.state.bottomText}</div>
            </div>
        </div>
    )
}

export default MemeApp