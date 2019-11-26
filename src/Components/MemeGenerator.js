import React from "react"



class MemeGenerator extends React.Component {


    constructor(){
        super()
        this.state = {
            topText: " ",
            bottomText: " ",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: [],
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

        let url = "https://api.imgflip.com/get_memes"
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data 
                this.setState({
                    allMemeImg: memes
                })
            })

    }

    handleChange(event){

        this.setState({
            [event.target.name]: event.target.value
        })



    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randMemeImg = this.state.allMemeImg[randNum].url
        this.setState({ randomImage: randMemeImg })

    }




    render(){
        return(
            <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
                {
                    /**
                     * Create 2 input fields, one for the topText and one for the bottomText
                     * Remember that these will be "controlled forms", so make sure to add
                     * all the attributes you'll need for that to work
                     */

                }    
                <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} />
                <br />
                <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} />
                <button>Gen</button>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </form>

            
        </div>
        )
    }



}



export default MemeGenerator