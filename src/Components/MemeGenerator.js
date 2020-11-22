import React, {Component} from "react"
import MemeApp from "./MemeApp"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            topText: "",
            bottomText: "",
            memeImg: "",
            memeAPI: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        const API = "https://api.imgflip.com/get_memes"
        fetch(API)
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                loading: false,
                memeAPI: memes,
                memeImg: memes[Math.floor(Math.random() * memes.length)].url
            })
        })
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        const RAND_MEME = this.state.memeAPI[Math.floor(Math.random() * this.state.memeAPI.length)].url
        this.setState({
            memeImg: RAND_MEME
        })
        event.preventDefault()
    }

    render() {
        return (
            <>{this.state.loading ?
                <h2>Loading...</h2> :
                <main>
                    <MemeApp
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        state={this.state}
                    />
                </main>
            }</>
        )
    }
}

export default MemeGenerator