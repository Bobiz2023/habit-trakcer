import React, { useState } from "react";
import ReactDOM from "react-dom";

function HabitTracker() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState("");

    const addHabit = () => {
        if (newHabit.trim()) {
            setHabits([...habits, { name: newHabit, completed: false }]);
            setNewHabit("");
        }
    };

    const toggleHabit = (index) => {
        const updatedHabits = habits.map((habit, i) =>
            i === index ? { ...habit, completed: !habit.completed } : habit
        );
        setHabits(updatedHabits);
    };

    return (
        <div className="container">
            <h1>Habit Tracker</h1>
            <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Enter a new habit"
            />
            <button onClick={addHabit}>Add</button>
            <ul>
                {habits.map((habit, index) => (
                    <li key={index} onClick={() => toggleHabit(index)}>
                        {habit.completed ? <s>{habit.name}</s> : habit.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<HabitTracker />, document.getElementById("root"));
