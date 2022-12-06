import react, { useState } from "react";
import SortingDataBase from "../DataBase/Sorting DataBase/SortingDataBase";
import "../Style/Sorting.css";
const Sorting = () => {
    const [temp, settemp] = useState('');
    const [size, setsize] = useState();
    const [Arr, setArr] = useState([]);
    const [Time, setTime] = useState(-1);
    const [fnName, setfnName] = useState();
    const [count,setcount]=useState();
    let arr = [];
    const ArraySize = (e) => {
        settemp(e.target.value);
    }

    const SubmitData = (e) => {
        if (!temp) {
            alert('Enter the Data');
        }
        else {
            e.preventDefault();
            setsize(temp);
            settemp('');
            setArr(arr);
            setTime(-1);
        }
    }
    const Generate = () => {
        for (let index = 0; index < size; index++) {
            let element = Math.floor(Math.random() * 20) + 2;
            arr[index] = element;
        }
        setArr(arr);
    }
    let temparr = Arr;
    const GreenArray = async (delay = 20) => {
        for (let index = 0; index < size; index++) {
            let bar = document.getElementById(`bar${index}`);
            bar.style.backgroundColor = "lime";
            await new Promise((resolve) => setTimeout(() => {
                resolve();
            }, delay))
        }
    }
    let start, end;
    const SelectioSort = async (delay = 600) => {
        if (size >= 0) {
            start = Date.now();
            for (let x = 1; x < size; x++) {
                let xArr = document.getElementById(`bar${x}`);

                xArr.style.backgroundColor = "blue";
                xArr.style.height = `${temparr[x]}00em`;
                await new Promise((resolve) => setTimeout(() => {
                    resolve();
                }, delay))
                for (let y = 0; y <= x; y++) {
                    let yArr = document.getElementById(`bar${y}`);

                    yArr.style.backgroundColor = "yellow";
                    yArr.style.height = `${temparr[y]}00em`;

                    if (temparr[y] > temparr[x]) {
                        yArr.style.backgroundColor = "orangered";
                        temparr[x] = temparr[x] + temparr[y];
                        temparr[y] = temparr[x] - temparr[y];
                        temparr[x] = temparr[x] - temparr[y];
                    }
                    await new Promise((resolve) => setTimeout(() => {
                        resolve();
                    }, delay))
                }
            }
            end = Date.now();
            let sec = (end - start) / 1000;
            setTime(sec);
            setArr(temparr);
            GreenArray();
            setfnName("Selection Sort");
            setcount(1);
        }
        else {
            alert('Enter Size');
        }
    }


    const InsertionSort = async (delay = 25) => {
        if (size >= 0) {
            let key, j;
            start = Date.now();
            for (let i = 0; i < size; i++) {
                let iArr = document.getElementById(`bar${i}`);
                iArr.style.backgroundColor = "yellow";
                iArr.style.height = `${temparr[i]}00em`;
                j = i - 1;
                key = temparr[i];
                setArr(temparr);
                await new Promise((resolve) => setTimeout(() => {
                    resolve();
                }, delay))
                while (j >= 0 && temparr[j] > key) {
                    let jArr = document.getElementById(`bar${j}`);
                    jArr.style.backgroundColor = "blue";
                    jArr.style.height = `${temparr[j]}00em`;
                    temparr[j + 1] = temparr[j];
                    j = j - 1;
                    temparr[j + 1] = key;
                    await new Promise((resolve) => setTimeout(() => {
                        resolve();
                    }, delay))
                }
            }

            for (let i = 0; i < size; i++) {
                let iArr = document.getElementById(`bar${i}`);
                iArr.style.backgroundColor = "yellow";
                iArr.style.height = `${temparr[i]}00em`;
                j = i - 1;
                key = temparr[i];
                setArr(temparr);
                while (j >= 0 && temparr[j] > key) {
                    let jArr = document.getElementById(`bar${j}`);
                    jArr.style.backgroundColor = "blue";
                    jArr.style.height = `${temparr[j]}00em`;
                    temparr[j + 1] = temparr[j];
                    j = j - 1;
                    temparr[j + 1] = key;
                }
            }
            end = Date.now();
            let sec = (end - start) / 1000;
            setTime(sec);
            setArr(temparr);
            GreenArray();
            setfnName("Insertion Sort");
            setcount(2);
        }
        else {
            alert('Enter Size');
        }
    }

    const BubbleSort = async (delay = 250) => {
        start = Date.now();
        if (size >= 0) {
            for (let i = 0; i < size; i++) {
                let iArr = document.getElementById(`bar${i}`);
                iArr.style.backgroundColor = "blue";
                for (let j = 0; j < size - i - 1; j++) {
                    let jArr = document.getElementById(`bar${j}`);
                    let j2Arr = document.getElementById(`bar${j + 1}`);
                    if (temparr[j] > temparr[j + 1]) {
                        temparr[j] = temparr[j] + temparr[j + 1];
                        temparr[j + 1] = temparr[j] - temparr[j + 1];
                        j2Arr.style.backgroundColor = "yellow";
                        temparr[j] = temparr[j] - temparr[j + 1];
                        jArr.style.backgroundColor = "red";
                    }
                    jArr = j2Arr.style.backgroundColor = "orange";
                    await new Promise((resolve) => setTimeout(() => {
                        resolve();
                    }, delay))
                }
            }
            end = Date.now();
            let sec = (end - start) / 1000;
            setTime(sec);
            setArr(temparr);
            GreenArray();
            setfnName("Bubble Sort");
            setcount(3);
        } else {
            alert("Enter the Size");
        }
    }
    const Reset = () => {
        for (let index = 0; index < size; index++) {
            let bar = document.getElementById(`bar${index}`);
            bar.style.backgroundColor = "crimson";
        }
        Generate();
    }
    return (
        <react.Fragment>
            <div className="Array">
                <div className="ArrayComp">
                    <div className="Heading">
                        <h1>Sorting Algorithms</h1>
                    </div>
                    <div className="Syntax Common">
                        <div className="input">
                            <label>Enter the Size</label>
                            <input type="number"
                                placeholder="Enter the range between 5 to 10"
                                value={temp}
                                onChange={ArraySize}
                            />
                            <button onClick={SubmitData}>Submit</button>
                            <button onClick={Generate}>Generate Array</button>
                        </div>
                    </div>
                    <div className="Discription dis">
                        <p>Size = {size}</p>
                    </div>
                    <div className="function Common com">
                        <button onClick={SelectioSort}>Selection Sort</button>
                        <button onClick={InsertionSort}>Insertion Sort</button>
                        <button onClick={BubbleSort}>Bubble Sort</button>
                    </div>
                    <div className="DisplayScreen Common">
                        <div className="heading"><h1>Display Screen</h1></div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '90%' }}>
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse', border: '10em solid black',
                                borderRadius: '20em', transform: 'rotate(180deg)', width: '100%'
                            }}>
                                {
                                    Arr.map((data, index) => {
                                        return (
                                            <react.Fragment>
                                                <div style={{ width: '150em', height: `${data}00em`, backgroundColor: 'crimson', marginLeft: '5em', transform: 'rotate(180deg)' }} className="graph" id={`bar${index}`}>
                                                </div>

                                            </react.Fragment>
                                        );
                                    })
                                }

                            </div>
                        </div>
                        <p style={{ margin: '1em 0em' }}>Total Time Taken By {fnName} To Sort The Array = {Time} seconds</p>
                    </div>
                    <div className="Common">
                        <button style={{ margin: "2% 0" }} onClick={Reset}>Reset Array</button>
                    </div>
                    <div className="Content" style={{marginBottom:'2%'}}>
                        {
                            count===1 ? <>
                            <p><q>{SortingDataBase.defi1}</q></p>
                            </>: count===2 ?<>
                            <p><q>{SortingDataBase.defi2}</q></p>
                            </> : count===3 ? <>
                            <p><q>{SortingDataBase.defi3}</q></p>
                            </>:<></>
                            
                        }
                    </div>
                </div>
            </div>
        </react.Fragment>

    );
}

export default Sorting;