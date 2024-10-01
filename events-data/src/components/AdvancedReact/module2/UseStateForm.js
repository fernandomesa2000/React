import { useState } from "react";

function GoalForm(props) {
    const [formData, setFormData] = useState({goal: "", by: ""});

    function changeHlander(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    function SubmitHandler(xd) {
        xd.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""});
    };

    return (
        <>
        <h1>My Little Lemon Goals</h1>
        <form onSubmit={SubmitHandler}>
            <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHlander}/>
            <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHlander}/>
            <button type="submit">Add Goal</button>
        </form>
        </>
    )
}

function ListOfGoals(props) {
    return(
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    );
}

function UseStateForm() {
    const [allGoals,updateAllGoals] = useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    return (
        <div>
            <GoalForm onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals}/>
        </div>
    )
}

export default UseStateForm;