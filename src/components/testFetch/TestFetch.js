import React from 'react'

class TestFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCharacter: {},
            currentNumber: 1
        }
    }
    componentDidMount() {
        this.myTestFetch()
    }
    myTestFetch() {
        fetch("https://swapi.dev/api/people/"+ this.state.currentNumber)
            .then(res => res.json())
            .then(characterJSON => {
                console.log(characterJSON)
                this.setState({ currentCharacter: characterJSON })
            })
    }

    clickHandler = () => {
        this.setState((prevState, props) => {
            return {currentNumber: prevState.currentNumber + 1}
        }, this.myTestFetch)
    }
    render() {
        return (
            <div className="TestFetch">
                Name: {this.state.currentCharacter.name}
                <br/> 
                Height: {this.state.currentCharacter.height}
                <br/>
                Mass: {this.state.currentCharacter.mass}
                <br/>
                Hair_Color: {this.state.currentCharacter.hair_color}
                <br/>
                Gender: {this.state.currentCharacter.gender}
                <button onClick={this.clickHandler}>Next Character</button>
            </div>
        )
    }
}
export default TestFetch;