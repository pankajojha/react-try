import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => ( <
    header >
    <
    nav >
    <
    div >
    <
    li > < Link to = '/' > Home < /Link></li >
    <
    li > < Link to = '/score' > Score < /Link></li >
    <
    li > < Link to = '/schedule' > Schedule < /Link></li >
    <
    /div> < /
    nav > <
    /header>
)

export default Header