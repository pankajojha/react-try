import React from 'react'
import ScoreAPI from '../test/api'
import { Link } from 'react-router-dom'

const ResponseList = () => ( <
    div >
    <
    ul > {
        ScoreAPI.all().map(p => ( <
            li key = { p.number } >
            <
            Link to = { `/score/${p.number}` } > { p.name } < /Link> < /
            li >
        ))
    } <
    /ul> < /
    div >
)

export default ResponseList;