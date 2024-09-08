import React from 'react';

const PasswordAtom = ({ className }) => {
    return (
        <input 
            type="password" 
            placeholder="Enter password..." 
            className={className} 
        />
    );
};

export default PasswordAtom;