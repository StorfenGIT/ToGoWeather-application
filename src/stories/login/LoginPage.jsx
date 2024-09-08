import React from 'react';
import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";
import SubmitAtom from "./SubmitAtom";
import styles from './LoginPage.module.css';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
            👤Username:
                <UserAtom className={styles.input} />
            </label>
            <label className={styles.label}>
            🔒Password:
                <PasswordAtom className={styles.input} />
            </label>
            <SubmitAtom className={styles.button} />
        </div>
    );
};

export default LoginPage;