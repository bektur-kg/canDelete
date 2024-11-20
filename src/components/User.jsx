import { useState } from "react";
import styles from './User.module.css';

function User({name, company, phone, website, email}) {
    const [position, setPosition] = useState();

    return (
        <div className={styles.root}>
            <p>Name: {name}</p>
            <p>Company Name: {company.name}</p>
            <p>catchPhrase: {company.catchPhrase}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default User;