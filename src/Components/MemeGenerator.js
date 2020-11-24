import React, {useEffect, useState} from "react"
import MemeApp from "./MemeApp"

function MemeGenerator() {

    const [state, setState] = useState({
        loading: false,
        topText: "",
        bottomText: "",
        memeImg: "",
        memeAPI: []
    })

    useEffect(() => {
        setState({ loading: true })
        const API = "https://api.imgflip.com/get_memes"

        fetch(API)
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            setState({
                loading: false,
                memeImg: memes[Math.floor(Math.random() * memes.length)].url,
                memeAPI: memes
            })
        })

    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        const RAND_MEME = state.memeAPI[Math.floor(Math.random() * state.memeAPI.length)].url
        setState({
            ...state,
            memeImg: RAND_MEME
        })
        event.preventDefault()
    }

    return (
        <>{state.loading ?
            <h2>Loading...</h2> :
            <main>
                <MemeApp
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    state={state}
                />
            </main>
        }</>
    )

}

export default MemeGenerator