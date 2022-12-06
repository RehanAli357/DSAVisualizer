import react from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";
import "../Style/home.css";
import HomeImg from "../Images/Logo.png";
import HomeTwo from "../Images/hometwo.png";
import OtherPerson from "../DataBase/Other Person DataBase/OtherPerson";

const Home = () => {
    return (
        <react.Fragment>
            <div className="HomeComp">
                <motion.div className="HomeOne" animate={{ x: 0 }} initial={{ x: -700 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                >
                    <h1>DSA Visualizer</h1>
                    <strong><q>Visualise , Understand , Learn</q></strong>
                    <img src={HomeImg} alt="home2" />
                    <p>Do You Need Help with Data Structure And Algorithms ?</p>
                    <span>A data structure is a named location that can be used to store and organize data. And , an Algorithm is a collaction
                        of steps to solve a particular problem. Learning data structure and algorithm allows us to write efficient and
                        optimized computer programs.
                    </span>
                    <p>Click To Explore  <b>👇</b></p>
                    <div className="ExploreBtn">
                    <NavLink exact to='/Explore'><button>Lets Explore</button></NavLink>    
                    </div>
                </motion.div>


                <div className="HomeTwo Common">
                    <div className="Heading">
                        <h1>About Our Site</h1>
                    </div>
                    <div className="HomeTwo-One">
                        <p>
                            Our Website uses an interactive methodology of teaching data structure and algorithm
                            with latest web technology , your learning experience with us is guranteed to be intuitive
                            and fun. You will have fun while learning.
                        </p>
                    </div>
                    <div className="HomeTwo-Two">
                        <img src={HomeTwo} alt="Home Two" />
                    </div>
                </div>

                <div className="HomeThree Common">
                    <div className="Heading">
                        <h1>Share Your Thoughts</h1>
                    </div>
                </div>
                
                <div className="form Common">
                        <div className="Input">
                            <h1>Your Thoughts</h1>
                            <label>Name</label>
                            <input type="text" required placeholder="Name"/><br/>
                            <label>Email</label>
                            <input type="email" required placeholder="email"/><br/>
                            <textarea cols="30" rows="10" required placeholder="Your thoughts..." /><br/>
                            <button>Submit</button>
                        </div>
                </div>
            </div>
            <Footer />
        </react.Fragment>
    );
}

export default Home;