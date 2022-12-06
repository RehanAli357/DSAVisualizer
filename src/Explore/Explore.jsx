import react, { useState } from "react";
import "../Style/Explore.css";
const Explore = () => {
    const [down, setdown] = useState('➕')
    const [disp, setdisp] = useState('none');

    const Toggle = () => {
        if (down === '➕') {
            setdown('🔺')
            setdisp('block');
        }
        else {
            setdown('➕');
            setdisp('none');
        }
    }
    return (
        <react.Fragment>
            <div className="Array">
                <h1 className="exploreHeading">All DSA TOPICS</h1>
                <div className="topic">
                    <div className="subTopic">
                        <div className="heading"><strong>Arrays </strong></div>
                        <div className="btn"><button onClick={Toggle}>{down}</button></div>
                        <div className="data"><p style={{ display: disp }}>Array</p></div>
                    </div>
                    <div className="subTopic">
                        <div className="heading"><strong>Stack </strong></div>
                        <div className="btn"><button onClick={Toggle}>{down}</button></div>
                        <div className="data"><p style={{ display: disp }}>Stack</p></div>
                    </div>
                    <div className="subTopic">
                        <div className="heading"><strong>Queue </strong></div>
                        <div className="btn"><button onClick={Toggle}>{down}</button></div>
                        <div className="data"><p style={{ display: disp }}>Queue</p></div>
                        <div className="data"><p style={{ display: disp }}>Circular Queue</p></div>
                    </div>
                    <div className="subTopic">
                        <div className="heading"><strong>Searching </strong></div>
                        <div className="btn"><button onClick={Toggle}>{down}</button></div>
                        <div className="data">
                            <p style={{ display: disp }}>Linear Search</p>
                            <p style={{ display: disp }}>Binary Search</p>
                        </div>

                    </div>
                    <div className="subTopic">
                        <div className="heading"><strong>Sorting </strong></div>
                        <div className="btn"><button onClick={Toggle}>{down}</button></div>
                        <div className="data">
                            <p style={{ display: disp }}>Selection Sort</p>
                            <p style={{ display: disp }}>Insertion Sort</p>
                            <p style={{ display: disp }}>Bubble Sort</p>
                        </div>
                    </div>
                    <div className="subTopic">
                        <div className="heading"><strong>Link List</strong></div>
                        <div className="btn"><button onClick={Toggle}>{down}</button></div>
                        <div className="data">
                            <p style={{ display: disp }}>Singly Link List  </p>
                        </div>
                    </div>
                </div>
            </div>
        </react.Fragment>
    );
}

export default Explore;