import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: parseFloat(amount)
        };

        addTransaction(newTransaction);
        setText('');
        setAmount('');
        navigate("/");
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const makeIncome = () => {
        setAmount(Math.abs(parseFloat(amount)).toString());
    }

    const makeExpense = () => {
        setAmount((-Math.abs(parseFloat(amount))).toString());
    }

    return (
        <div className="mt-8">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='my-4 p-5' style={{ justifyContent: 'right', display: 'flex' }}>
                    <h3 className="text-lg font-semibold mb-2" style={{ alignSelf: 'flex-end' }}>Add new transaction</h3>
                </div>
                <div className='my-4 p-5' style={{ justifyContent: 'right', display: 'flex' }}>
                    <Link to="/" relative="route" style={{ alignSelf: 'flex-end' }}>
                        <u style={{ color: 'blue' }}>Back</u>
                    </Link>
                </div>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col space-y-4" style={{ width: '300px' }}>
                <div>
                    <label htmlFor="text" className="block font-medium">Transaction Name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type A Name" className="mt-1 p-2 border rounded" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="amount" className="block font-medium">Amount</label>
                    <div className="flex items-center space-x-3">
                        <input type="text" value={amount} onChange={handleAmountChange} placeholder="Type An Amount" className="mt-1 p-2 border rounded" />
                        <button type="button" onClick={makeIncome} className="text-white bg-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Income</button>
                        <button type="button" onClick={makeExpense} className="text-white bg-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Expense</button>
                    </div>
                </div>
                <button type="submit" className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
