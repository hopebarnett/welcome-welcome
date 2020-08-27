import React from 'react'



function Display(props) {

    let element = "Loading"
    if (props.state.data.category !== undefined) {
        element = (
            <div>
                Question: {props.state.data.question}
                <br />
          Point Value: {props.state.data.value}
                <br />
          Title: {props.state.data.category.title}

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
    return (
        <div className="something">
            {element}
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
