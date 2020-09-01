import React from 'react';
//import our service
import JeopardyService from '../../jeopardyService/JeopardyService'
import Display from '../display/Display';

class Jeopardy extends React.Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: [],
            score: 0,
            formData: { userAnswer: '' },
            catagorydata: 0,
            choice: null
        }
    }

    handleChoice=(event) => {
        
        this.setState({
            choice: event.target.id

        }) 

    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            console.log(result)
            this.setState({
                data: result.data
            })
        })
    }
    //when the component mounts, get the first question
    componentDidMount() {
        this.getNewQuestion();
    }

    // handleCatagory = (buttonId) => {
    
    //     buttonId.preventDefault()
    //     this.setState((prevState)=> {
    //         return {currentCatagory: prevState.catagorydata[buttonId]}

    //     })


    // }

    handleChange = (event) => {
        const formData = { ...this.state.formData };
        formData[event.target.name] = event.target.value;

        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.data[this.state.choice].answer === this.state.formData.userAnswer) {

            this.setState((prevState) => {
                return { score: prevState.score + prevState.data[prevState.choice].value };


            })

            // If the answer is correct then add  this.state.data.value
            // of the question to the this.state.score
        }
        else {
            this.setState((prevState) => {
                return { score: prevState.score - prevState.data[prevState.choice].value };


            })

        }
        this.setState({
            formData: {userAnswer: ''},
            choice: null
        })
        this.getNewQuestion();
    }


    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                userAnswer: '',

            }
        });
    }

    //display the results on the screen
    render() {
        return (
            <Display
                state={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleChoice={this.handleChoice}
            />)
    }
}
export default Jeopardy;