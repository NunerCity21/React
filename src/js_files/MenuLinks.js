import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export const MenuLinks = () => {
    return (
        <div className={'my-4 p-5'}>
            <Link to="history" relative="route">
                <u style={{color:'blue'}}>History</u>
            </Link>
            <Link to="addtrans" relative="route">
                &nbsp;&nbsp;&nbsp;<u style={{color:'blue'}}>New Transaction</u>
            </Link>
        </div>
    );
};
export default MenuLinks;