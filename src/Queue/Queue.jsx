import react, { useState } from "react";

const Queue = () => {
    const [temp, settemp] = useState('');
    const [temp2, settemp2] = useState(-1);
    const [size, setsize] = useState();
    const [top, settop] = useState(-1);
    const [tail, settail] = useState(-1);
    const [queue, setqueue] = useState([]);
    const [code, setcode] = useState();
    const [fnName, setfnName] = useState();
    const inputData = (e) => {
        settemp(e.target.value);
    }
    const Submit = (e) => {
        if (!temp) {
            alert('Enter the Value');
        } else {
            e.preventDefault();
            setsize(temp);
            settemp('');
            setfnName('Declartion Function');
            setcode(1);
            settail(-1);
            settop(-1);
            setqueue([]);
        }
    }
    const Add = () => {
        if (!size) {
            alert('Enter the value');
        }
        else {
            if (tail <= parseInt(size) - 2) {
                settail(tail + 1);
                settop(0);
                settemp2(0)
                let val = prompt(`Enter the ${tail + 1} value`);
                setqueue([...queue, val]);
                setfnName('Enqueue Function');
                setcode(2)
            } else {
                alert('Queue Full');
            }
        }
    }
    const Remove = () => {
        if (!size || top === size) {
            alert('Enter the value');
        }
        else {
            let temp = queue[top];
            let tempArr = queue.filter((elem) => {
                return elem !== temp;
            })
            setqueue(tempArr);
            if (temp2 < size) {
                settemp2(temp2 + 1);
                setfnName('Dequeue Function');
                setcode(3);
            }
            else {
                alert('Queue Is Empty');
            }
        }
    }
    const inc = ">";
    const open = "{";;
    const close = "}";
    return (
        <react.Fragment>
            <div className="Array">
                <div className="ArrayComp">
                    <div className="Heading">
                        <h1>Queue</h1>
                    </div>
                    <div className="Content">
                        <p><q>Queue is a data structure that is analogous to a real-world queue.
                            A queue is a data structure that follows the FIFO (First-In-First-Out) policy,
                            in which whatever comes first goes out first. A queue can alternatively be
                            defined as a list or collection in which items are added from one end,
                            referred to as the back end or tail of the queue, and deleted from the other
                            end, referred to as the front end or head of the queue.</q></p>
                    </div>
                    <div className="Syntax Common">
                        <div className="input">
                            <label>Enter Queue Size</label>
                            <input type="number"
                                placeholder="from 1 to 10"
                                onChange={inputData}
                                value={temp}
                            />
                            <button onClick={Submit}>Submit</button>
                        </div>
                        <div className="function Common">
                            <button onClick={Add}>EnQueue</button>
                            <button onClick={Remove}>Dequeue</button>
                        </div>
                        <div className="Discription">
                            <p>Size={size} Top={temp2} Tail={tail}</p>
                        </div>
                        <div className="CodeArea">
                            <h1>Code Of An Queue</h1>
                            <div className="CodeArea">
                                <div className="code">
                                    <strong>C Program</strong>
                                    <span style={{ width: '100%', textAlign: 'center' }}>{fnName}</span>
                                    {
                                        code === 1 ? <p>
                                            int MAXSIZE = {size};<br />
                                            int stack[{size}];<br />
                                            int top = -1;<br />
                                            int tail = -1<br />
                                        </p> : code === 2 ? <p>
                                            if(tail== MAXSIZE -1){open}<br />
                                            printf("Queue is Full!!");<br />
                                            {close}<br />
                                            else{open}<br />
                                            if (top == -1)<br />
                                            top = 0;<br />
                                            tail++;<br />
                                            queue[tail]=value;<br />
                                            {close}
                                        </p> : code === 3 ? <p>
                                            if (top == -1)<br/>
                                            printf("Queue is Empty!!");<br/>
                                            else {open}<br/>
                                            printf("Item Deleted");<br/>
                                            top++;<br/>
                                            if (top{inc}tail){open}<br/>
                                            top = tail = -1;<br/>
                                            {close}
                                        </p> : <p></p>
                                    }
                                </div>
                                <div className="code">
                                    {
                                        code === 1 ? <>
                                            <strong>{fnName}</strong>
                                            <p>
                                                Declare the variable as MAXSIZE with the size of Queue<br />
                                                create a array as queue and initialize its size with[MAXSIZE]<br />
                                                create another two variables as top , tail  and initialize both with -1
                                            </p>
                                        </> : code === 2 ? <>
                                            <strong>{fnName}</strong>
                                            <p>
                                                Check weather the tail is equal to MAXSIZE-1 or not<br />
                                                if condition is true then print Queue is full<br />
                                                else if top is equals to -1 then make top to 0 and increment the tail by 1<br />
                                                and initialize the queue[tail] value
                                            </p>
                                        </> : code === 3 ? <>
                                        <strong>{fnName}</strong>
                                            <p>
                                                Checks weather the top is equal to -1<br/>
                                                if condition is true print Queue is empty<br/>
                                                else print Item Deleted and increment the top by one <br/>
                                                but if top is greater then tail so initialize top and tail by -1<br/> 
                                            </p>
                                        </> : <p></p>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DisplayScreen Common">
                        <div className="heading"><h1>Display Screen</h1></div>
                        <div className="queueData" style={{ display: 'flex', backgroundColor: 'rebeccapurple', marginBottom: '3%' }}>
                            {
                                queue.map((data) => {
                                    return (
                                        <react.Fragment>
                                            <p style={{ padding: '0.2em', color: 'wheat', border: '0.1em solid black' }}>Data={data}</p>
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

export default Queue;