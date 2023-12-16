import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if (event.target.value > 20000) {
            window.alert(
                "Cannot exceed 20000!"
            );
            return;
        } else if (event.target.value < totalExpenses) {
            window.alert(
                "Cannot lower than spending!"
            );
            return;
        }
        setNewBudget(event.target.value);
        // dispatch({
        //     type: 'SET_BUDGET',
        //     payload: newBudget,
        // });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} max={20000} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;