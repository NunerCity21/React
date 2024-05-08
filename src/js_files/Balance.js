import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return ( // Html & Css For Balance
        <div className={'my-4 p-5'}>
            <h4 className="text-lg font-semibold">Your Balance</h4>
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    );
};

export default Balance;