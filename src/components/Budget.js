import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    // Update local state when budget changes in context
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10); // Parse input value as integer
        setNewBudget(updatedBudget); // Update local state
    };

    const handleSaveBudget = () => {
        // Dispatch action to update budget in context
        if(newBudget > 20000) {
            alert('Budget max is 20,000');
            setNewBudget("");
            return;
        }
        if(newBudget < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            setNewBudget("");
            return;
        }   
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
            <button onClick={handleSaveBudget}>Save</button>
        </div>
    );
};

export default Budget;