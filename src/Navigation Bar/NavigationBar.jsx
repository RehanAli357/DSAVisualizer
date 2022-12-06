import react , { useState } from "react";
import {NavLink} from "react-router-dom";
import '../Style/navigatoinbar.css';
import { motion } from "framer-motion";
import Logo from '../Images/Logo.png';
const NavigationBar = () =>{
    const [Arrow,setArrow]=useState('🔽');
    const [Disp,setDisp]=useState('none');
    const ArrowUp = () =>{
        if(Arrow==='🔽' ){
            setArrow('🔼');
            setDisp('block');
        }
        else{  
            setArrow('🔽');
            setDisp('none');
        }
    }
    return(
        <react.Fragment>
            <motion.nav animate={{y:0}}initial={{y:-100}}>
                <div className="Logo">
                <NavLink exact to='/'><img src={Logo} alt="Logo" /></NavLink>
                </div>
                <div className="Home">
                <NavLink  exact to='/'><p>Home</p></NavLink>
                </div>
                <div className="Dsa">
                    <p onClick={ArrowUp}> DSA <span> {Arrow}</span></p>
                    <ul style={{display:Disp}}>   
                    <NavLink  exact to='/Array'><li onClick={ArrowUp}>Array</li></NavLink>
                        <NavLink  exact to='/Stack'><li onClick={ArrowUp}>Stack</li></NavLink>
                        <NavLink  exact to='/Queue'><li onClick={ArrowUp}>Queue</li></NavLink>
                        <NavLink  exact to='/Searching'><li onClick={ArrowUp}>Searching</li></NavLink>
                        <NavLink  exact to='/Sorting'><li onClick={ArrowUp}>Sorting</li></NavLink>
                        
                    </ul>
                </div>
                <div className="Developer">
                    <p> Developer</p>
                </div>
            </motion.nav>
        </react.Fragment>
    );
}

export default NavigationBar;