import React from 'react'
import { NavLink } from 'react-router-dom';

const Home=()=> {
return (
    <>
    <h2> Home Page </h2>
    <label>Functional Component</label>   :   
    <NavLink  to='/function'>Click Here </NavLink><br /><br /><br /><br />
    <label>Class Component</label>    :
    <NavLink  to='/class'>Click Here </NavLink>
    </>
)
}
export default Home;