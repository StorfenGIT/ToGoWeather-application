import React from 'react';


const SubmitAtom = ({ className }) => {
    return (
        <button
    type="button"  // Use "button" instead of "login" for standard button behavior
    className={className} // Ensure className is applied if you're using CSS modules or regular CSS
>
    Login
</button>

    );
};

export default SubmitAtom;


