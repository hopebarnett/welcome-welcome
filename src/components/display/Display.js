import React from 'react'



function Display(props) {

    let element = "Loading"
    if (props.state.choice !== null) {
        let currentQuestion=props.state.data[props.state.choice]
        element = (
            <div>
                Question: {currentQuestion.question}
                <br/>
                Point Value: {currentQuestion.value}
                <br/>
                Catagory: {currentQuestion.category.title}
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="userAnswer">Answer</label>
                        <input
                            type="text"
                            name="userAnswer"
                            value={props.state.formData.userAnswer}
                            onChange={props.handleChange}
                        />
                    </div>



                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
    if (props.state.data.length > 0 && props.state.choice===null) {
        element = (
            <div>
               <button onClick={props.handleChoice} id="0"> Catagory 1: {props.state.data[0].category.title}</button>
                <br />
                 <button onClick={props.handleChoice} id="1">Catagory 2: {props.state.data[1].category.title}</button>
                <br />
                <button onClick={props.handleChoice} id="2">Catagory 3: {props.state.data[2].category.title}</button>

                
            </div>
        )
    }
    return (
        <div className="something">
            {element}
            score: {props.state.score}
            
            {/* <button
                id="0"
                onClick={(event) => props.handleCatagory(event.target.id)}
            >
                catagory: {props.state.catadata[0].title}
                reset
                </button> */}
        </div>
    );
}


export default Display
