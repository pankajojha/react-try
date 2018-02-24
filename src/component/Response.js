import React from 'react'
import ResponseAPI from '../test/api'
import { Link } from 'react-router-dom'

const Response = (props) => {
    const response = ResponseAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!response) {
        return <div > Sorry, but the Response was not found < /div>
    }
    return ( <
        div >
        <
        h1 > { response.name }(#{ response.number }) < /h1> <
        h2 > Rubric: { response.sg } < /h2> 


        <
        div class = "section1" >
        <
        p > { response.content } <
        /p>  < /
        div >

        <
        Link to = '/score' > Back < /Link> < /
        div >
    )
}

export default Response