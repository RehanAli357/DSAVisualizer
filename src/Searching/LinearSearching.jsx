import react, { useState } from "react";
import LinearBinarySearch from "../DataBase/Searching DataBase/LinearBinarySearch";
import "../Style/LinearSearch.css";
const LinearSearching = () => {
    const [temp, settemp] = useState();//for array
    const [temp2, settemp2] = useState();// for flag
    const [size, setsize] = useState();//for actual array 
    const [flag, setflag] = useState();//for actual flag
    const [index_pos, setIndex_pos] = useState(-1);
    const [disp, setdisp] = useState({
        display: 'none',
        bgcolor: 'aliceblue',
        color: 'black'
    });
    const [Arr, setArr] = useState([]);
    let arr = [];
    const Size = (e) => {
        e.preventDefault();
        if (temp === '') {
            alert('enter the value');
        } else {
            setsize(temp);
            settemp('');
            setArr(arr);
        }
    }
    const Generate = () => {
        for (let index = 0; index < size; index++) {
            let element = Math.floor(Math.random(100) * 20);
            arr[index] = element;
        }
        setArr(arr);
    }

    const Flag = (e) => {
        e.preventDefault();
        if (temp2 === '') {
            alert('enter the value');
        }
        else {
            setflag(temp2);
            settemp2('');
            setdisp({ display: 'block' });
        }
    }
    const LinearSearch = async (delay = 300) => {
        setdisp({
            bgcolor: 'black',
            color: 'aliceblue'
        })
        for (let index = 0; index < size; index++) {
            let ids = document.getElementById(`key${index}`);
            if (parseInt(flag) === Arr[index]) {
                ids.style.backgroundColor = "rgb(89, 255, 0)";
                setIndex_pos(index);
                break;
            } else {
                ids.style.backgroundColor = "red";
            }
            await new Promise((resolve) => setTimeout(() => {
                resolve();
            }, 300))
        }
    }
    const Reset = () => {
        setIndex_pos(-1);
        for (let index = 0; index < size; index++) {
            let ids = document.getElementById(`key${index}`);
            ids.style.backgroundColor = "transparent";
        }

    }
    const open = "{";
    const close = "}";
    const inc = "<";
  
    return (
        <react.Fragment>
            <div className="Array">
                <div className="ArrayComp">
                    <div className="Heading">
                        <h1>{LinearBinarySearch.heading1} Search</h1>
                    </div>
                    <div className="Content">
                        <p><q>{LinearBinarySearch.content}</q></p>
                    </div>
                    <div className="Syntax Common">
                        <div className="input">
                            <label>Enter Size</label>
                            <input type="number"
                                placeholder="0 to 10"
                                onChange={(e) => { settemp(e.target.value) }}
                                value={temp}
                            />
                            <button onClick={Size}>Submit</button>
                        </div>
                        <div className="function Common">
                            <button onClick={Generate}>Generate Array</button>
                        </div>
                        <div className="Input2 Common">
                            <div className="input">
                                <label>Enter the Key To Find</label>
                                <input type="number"
                                    placeholder="0 to 10"
                                    onChange={(e) => { settemp2(e.target.value) }}
                                    value={temp2}
                                />
                                <button onClick={Flag}>Submit</button>
                            </div>
                        </div>
                        <div className="CodeArea">
                            <h1>Code Of An Linear Search</h1>
                            <div className="CodeArea">
                                <div className="code">
                                    <strong>C Program</strong>
                                    <p>
                                        int arr[100],flag,size;<br />
                                        printf("Enter the size of array=");<br />
                                        scanf("%d",size);<br />
                                        printf("Enter the value in array\n");<br />
                                        for (int i=0;i{inc}size;i++){open}<br />
                                        scanf("%d",arr[i]);<br />
                                        {close}<br />
                                        printf("Enter the value to be find=");<br />
                                        scanf("%d",flag);<br />
                                        for (int i=0;i{inc}size;i++){open}<br />
                                        if(arr[i]==flag){open}<br />
                                        printf("Data Found");<br />
                                        break;<br />
                                        {close}<br />
                                        {close}<br />
                                    </p>
                                </div>
                                <div className="code">
                                    <strong>Discription</strong>
                                    <p>
                                        declare three variable as flag , size and array as arr of size 100<br />
                                        Take the size from the user<br />
                                        And Take The value of the array from the user by for loop<br />
                                        Take the flag value to be find<br />
                                        Run a for loop and check weather the arr of ith index is equal to flag or not<br />
                                        If condtion is true then print Data Found and break the loop<br />
                                        Else do nothing<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="dis">
                            <p>Size Of Array Is={size}</p> <p> And Value to Find Is={flag}</p>
                        </div>
                    </div>

                    <div className="DisplayScreen">
                        <div className="heading"><h1>Display Screen</h1></div>
                        <div className="hiddenButton">
                            <button style={{ display: disp.display, backgroundColor: disp.bgcolor, color: disp.color }}
                                onClick={LinearSearch}>Find</button>
                            <button style={{ display: disp.display }} onClick={Reset}>Reset</button>
                        </div>
                        <div className="SearchScreeen">
                            {
                                Arr.map((data, index) => {
                                    return (
                                        <react.Fragment>
                                            <div className="box" key={index}>
                                                <p id={`key${index}`} key={index}>{data}</p>
                                            </div>
                                        </react.Fragment>
                                    );
                                })
                            }
                        </div>
                        <p style={{ display: disp.display, textAlign: 'center', marginTop: '1em' }}>Data Found At INDEX {index_pos}</p>
                    </div>
                </div>
            </div>
        </react.Fragment>
    );
}

export default LinearSearching;