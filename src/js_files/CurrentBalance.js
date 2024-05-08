import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const CurrentBalance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expenses = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div className="flex justify-between p-4 mt-6 bg-gray-900 rounded" style={{ margin: '0 20px' }}>
            <div className="text-center">
                <h4 className="font-semibold text-white">Income:</h4>
                <p className="text-lg font-bold text-green-600">${income}</p>
            </div>
            <div className="border-l-2 border-gray-400"></div>
            <div className="text-center">
                <h4 className="font-semibold text-white">Expenses:</h4>
                <p className="text-lg font-bold text-red-600">${expenses}</p>
            </div>
        </div>
    );
};

export default CurrentBalance;
