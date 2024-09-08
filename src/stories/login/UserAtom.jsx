import React from 'react';

const UserAtom = ({ className }) => {
    return (
        <input 
            type="text" 
            placeholder="Enter username..." 
            className={className} 
        />
    );
};

export default UserAtom;