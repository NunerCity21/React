import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const text = transaction ? transaction.text : '??';
    const amount = transaction ? Math.abs(transaction.amount) : 0;
    const textColor = transaction && transaction.amount < 0 ? 'text-red-700' : 'text-green-700';

    const handleDelete = () => {
        if (transaction) {
            deleteTransaction(transaction.id);
        }
    };

    return (
        <li className={`flex justify-between items-center p-4 bg-gray-900 my-2 rounded shadow ${textColor}`}>
            <div style={{ width: '50%' }}>
                <span className={`text-black ${textColor}`}>{text}: </span><span>${amount}</span>
            </div>
            <hr className="border-r-2 h-6 border-gray-700 mx-4" />
            <button onClick={handleDelete} className="text-white font-bold py-1 px-2 rounded">Delete Transaction?</button>
        </li>
    );
};

const List = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <div className="transaction-history" style={{ width: '50%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='my-4 p-5' style={{ justifyContent: 'right' }}>
                        <h3 className="text-lg font-semibold mt-8 text-gray-700">Transaction's History</h3>
                    </div>
                    <div className='my-4 p-5' style={{ justifyContent: 'right', display: 'flex' }}>
                        <Link to="/" relative="route" style={{ alignSelf: 'flex-end' }}>
                            <u style={{ color: 'blue' }}>Back</u>
                        </Link>
                    </div>
                </div>
                <ul className="mt-4">
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
