import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [ newCurrency,setNewCurrency ] = useState(currency);

    useEffect(() => {
        setNewCurrency(currency);
    }, [currency]);

    const handleCurrencyChange = (event) => {
        const updatedCurrency = event.target.value;
        setNewCurrency(updatedCurrency);
        dispatch({type: 'CHG_CURRENCY', payload: updatedCurrency});
    }

    return (
        <div className='alert alert-success'>
            <span>Currency:</span>
            <select className='custom-select green-select' id='select-currency' onChange={handleCurrencyChange} style={{backgroundColor: '#d1e7dd'}}>
                <option defaultvalue value='£' name='Pound'>£ Pound</option>
                <option value='$' name='Dollar'>$ Dollar</option>
                <option value='€' name='Euro'>€ Euro</option>
                <option value='₹' name='Ruppee'>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;