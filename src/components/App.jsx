import React from 'react';

function App() {
    const [task, setTask] = React.useState("");
    const [final, setFinal] = React.useState([]);
    function handleChange(event) {
        setTask(event.target.value);
    }

    function handleClick() {
        setFinal((prevItems) => {
            return [...prevItems, task];
        });
    }
    function mwork(work) {
        return <li>{work}</li>;
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>{final.map(mwork)}</ul>
            </div>
        </div>
    );
}

export default App;
