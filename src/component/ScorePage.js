import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ResponseList from './ResponseList'
import Response from './Response'

const ScorePage = () => ( <
    Switch >
    <
    Route exact path = '/score'
    component = { ResponseList }
    /> <
    Route path = '/score/:number'
    component = { Response }
    /> < /
    Switch >
)


export default ScorePage