import react, { useState } from "react";
import "../Style/Arrays.css";


const Dec = 'Declaring the Array';
const Trav = 'User Input From the Array';
const decr = '<';
const incr = '>';
const statement = 'Enter the Data =';
const cls_brkt = '}';

const Arrays = () => {
    const [Size, setSize] = useState();
    const [Arr, setArr] = useState([]);
    const loop = `for(int i=0;i${decr}${Size};i++){`;
    const ArraySize = (e) => {
        e.preventDefault();
        if (Size === 'n' || Size === '') {
            alert('Enter the Number');
        }
        else if (Size > 10 && Size < 0) {
            alert("Enter the Number in 1 to 10 Range");
        }
        else {
            Array([]);
        }
    }

    const Array = () => {
        const arr = [];
        for (let index = 0; index < Size; index++) {
            let val = prompt(`Enter ${index + 1} Data`);
            arr[index] = val;
        }
        setArr(arr);
        for (let index = 0; index < Size; index++) {
            console.log(`Index=${index} Value= ${arr[index]}`);
        }
    }

    return (
        <react.Fragment>
            <div className="Array">
                <div className="ArrayComp">
                    <div className="Heading">
                        <h1>Arrays</h1>
                    </div>
                    <div className="Content">
                        <p><q>An array is a collection of items of same data type stored at contiguous memory locations.
                            This makes it easier to calculate the position of each element by simply adding an offset to
                            a base value, i.e., the memory location of the first element of the array
                            (generally denoted by the name of the array). The base value is index 0 and
                            the difference between the two indexes is the offset.</q></p>
                    </div>
                    <div className="Syntax">
                        <strong>Code:-</strong>
                        <div className="userInput">
                            <div className="inputArea">
                                <label>Enter The Size Of The Array</label>
                                <input type="number"
                                    placeholder="Between 1 to 10"
                                    onChange={(e) => { setSize(e.target.value) }}
                                    required
                                    value={Size}
                                />
                                <button onClick={ArraySize}>Submit</button>
                            </div>
                            <h1>Code Of An array</h1>
                            <div className="CodeArea">
                                
                                <div className="code">
                                    <strong>C Program</strong>
                                    <strong>{Dec}</strong>
                                    <p>int arr [{Size}];</p>
                                    <strong>{Trav}</strong>
                                    <p>{loop}<br />
                                        printf({decr}{decr}"{statement}");<br />
                                        scanf({incr}{incr}"%d", &arr[i]);
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="DisplayScreen">
                        <div className="heading"><h1>Display Screen</h1></div>
                        <div className="OP">
                            <p>Data:-</p>
                            {
                                Arr.map((data) => {
                                    return (
                                        <react.Fragment>
                                            <div className="box Common">
                                                <p>{data}</p><br />

                                            </div>
                                        </react.Fragment>
                                    );
                                })
                            }
                        </div>
                        <div className="OP">
                            <p>Index:-</p>
                            {
                                Arr.map((data, index) => {
                                    return (
                                        <react.Fragment>
                                            <div className="box Index Common">
                                                <p>{index}</p><br />

                                            </div>
                                        </react.Fragment>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </react.Fragment>
    );
}

export default Arrays;