import React from 'react';
import Header from './js_files/Header';
import AddTransaction from './js_files/AddTransaction';
import Balance from './js_files/Balance';
import CurrentBalance from './js_files/CurrentBalance';
import List from './js_files/List';
import MenuLinks from './js_files/MenuLinks';
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{width: '50%', display:'flex', justifyContent: 'space-between'}}> 
                <Balance  style={{justifyContent: 'left'}}/>
                <MenuLinks  style={{justifyContent: 'right'}}/>
            </div>
            
            <CurrentBalance />
            {/* <List /> */}
            {/* <AddTransaction /> */}
            {children}
        </>
    );
};
export default Layout;