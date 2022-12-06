import react, { useEffect, useState } from "react";
import "../Style/Stack.css";
const Stack = () => {
    const [temp, settemp] = useState();
    const [temp2, settemp2] = useState();
    const [size, setsize] = useState();
    const [top, settop] = useState(-1);
    const [stack, setstack] = useState([]);
    const [fnName, setfnName] = useState('');
    const [code, setcode] = useState();
    const Size = () => {
        if (!temp) {
            alert('Enter the value');
        } else {
            setsize(temp);
            settemp('');
            setfnName('Declartion Function');
            setcode(1);
        }
    }
    const Push = () => {
        if (!size) {
            alert('Enter the value');
        }
        else {
            if (top <= parseInt(size) - 2) {
                settop(top + 1);
                let val = prompt(`Enter the ${top + 1} value`);
                setstack([...stack, val]);
                setfnName('Push Function');
                setcode(2)
            } else {
                alert('Stack Full');
            }
        }

    }

    const Pop = () => {
        if (top === -1) {
            alert('stack empty');
        }
        else {
            let temp = stack[top];
            console.log(temp);
            let tempArr = stack.filter((elem) => {
                return elem !== temp;
            })
            setstack(tempArr);
            settop(top - 1);
            setfnName('Pop Function');
            setcode(3);
        }
    }

    const Peek = () => {
        if (top === -1) {
            alert("stack is empty");
        } else {
            alert(`Your Top Value Is ${stack[top]}`);
            setfnName('Peek Function');
            setcode(4);
        }
    }
    useEffect(() => {
        settemp2(stack[top]);
    }, [Pop]);
    const dec = "<";
    const open = "{";
    const close = "}";
    const sen1 = "Checks wheather the top is less then equal to -1 ";
    return (
        <react.Fragment>
            <div className="Array">
                <div className="ArrayComp">
                    <div className="Heading">
                        <h1>Stack</h1>
                    </div>
                    <div className="Content">
                        <p><q>A stack is an  array or list structure of function calls and parameters used in modern
                            computer and CPU architecture. Similar to a stack of plates at buffet resturent or cafeteria, element
                            in a stack are added or removed from the top of the stack,in a "last in first , first out" or LIFO order</q></p>
                    </div>
                    <div className="Syntax Common">
                        <div className="input">
                            <label>Enter Stack Value</label>
                            <input type="number"
                                placeholder="Size Between 1 to 10"
                                onChange={(e) => { settemp(e.target.value); }}
                                value={temp || ''}
                            />
                            <button onClick={Size}>submit</button>
                        </div>

                        <div className="function Common">
                            <button onClick={Push}>Push</button>
                            <button onClick={Pop}>POP</button>
                            <button onClick={Peek}>Peek</button>
                        </div>
                        <div className="Discription">
                            <p>Size={size} Top={top}</p>
                        </div>
                        <div className="CodeArea">
                            <h1>Code Of An Stack</h1>
                            <div className="CodeArea">

                                <div className="code">
                                    <strong>C Program</strong>
                                    <span style={{ width: '100%', textAlign: 'center' }}>{fnName}</span>
                                    {
                                        code === 1 ? <p>
                                            int MAXSIZE = {size};<br />
                                            int stack[{size}];<br />
                                            int top = -1;<br />
                                        </p> : code === 2 ? <p>
                                            if(top{dec}=-1){open}<br />
                                            printf("Enter the Value");<br />
                                            {close}<br />
                                            else{open}<br />
                                            top=top+1;<br />
                                            stack[top]=value;<br />{close}
                                        </p> : code === 3 ? <p>
                                            if(top{dec}=-1){open}<br />
                                            printf("No Data To Delete");<br />
                                            {close}<br />
                                            else{open}<br />
                                            top=top-1;<br />{close}
                                        </p> : code === 4 ? <p>
                                            if(top{dec}=-1){open}<br />
                                            printf("No Data To Print");<br />
                                            {close}<br />
                                            else{open}<br />
                                            printf(stack[top]);<br />{close}
                                        </p> : <p></p>
                                    }
                                </div>
                                <div className="code">
                                    {
                                        code === 1 ? <>
                                            <strong>{fnName}</strong>
                                            <p> Declare the variable as MAXSIZE with the size of Stack<br />
                                                create a array as stack and initialize its size with[MAXSIZE]<br />
                                                create another variable as top and initialize with -1 as it will point the top
                                            </p>
                                        </> : code === 3 ? <>
                                            <strong>{fnName}</strong>
                                            <p>{sen1} and less then MAXSIZE<br />
                                                if condition is true then decrement the top by 1 <br />
                                                else show no data  present</p>
                                        </> : code == 2 ? <>
                                            <strong>{fnName}</strong>
                                            <p>
                                                {sen1}<br />
                                                if condition is true then increment the top by 1<br />
                                                else show stack is full
                                            </p>
                                        </> : code === 4 ? <>
                                            <strong>{fnName}</strong>
                                            <p>
                                                {sen1}<br />
                                                if condition is true then show no data found<br />
                                                else print the stack[top]value.
                                            </p>
                                        </> : <p></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DisplayScreen Common">
                        <div className="heading"><h1>Display Screen</h1></div>
                        <div style={{
                            backgroundColor: 'wheat', borderBottom: '10em solid black', borderLeft: '10em solid black', borderRight: '10em solid black',
                            padding: '10em 10em 0em 10em', marginBottom: "3%",display:'flex',justifyContent:'center',alignItems:'center',
                            flexDirection:'column-reverse'
                        }}>
                            {
                                stack.map((data) => {
                                    return (
                                        <react.Fragment>

                                            <p>Data={data}</p>

                                        </react.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </react.Fragment>
    );
}

export default Stack;