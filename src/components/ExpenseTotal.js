import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const { currency } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: { currency }{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
