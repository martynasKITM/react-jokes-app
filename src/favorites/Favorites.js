import React from "react";
import Joke from "../joke/Joke";


class Favorites extends React.Component{
    constructor() {
        super();
        this.state = {
            savedList: []
        }
    }

    componentDidMount() {
        if (localStorage.length !== 0) {
            this.setState((state) => ({
                savedList: state.savedList.concat(JSON.parse(localStorage.getItem('favoritesJokes')))
            }));
        }
    }
    render(){
        if(this.state.savedList.length) {
            return (

                <div>
                    <h1>Išsaugotų sąrašas:</h1>
                    <div className="row">
                        {this.state.savedList.map((j)=><Joke key={j.id} id={j.id} title={j.joke}/>) }
                    </div>
                </div>

            )
        }else{
            return(
                <div className="saved">
                    <p className="alert-danger">Išsaugotų filmų nėra</p>
                </div>
            )
        }
    }
}

export default Favorites