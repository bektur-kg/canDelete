import { useState } from "react";
import styles from './User.module.css';

function User({name, company, phone, website, email}) {
    const [position, setPosition] = useState("junior");
    const [isMessageActive, setIsMessageActive] = useState(false);

    return (
        <div className={styles.root}>
            <p>Name: {name}</p>
            <p>Company Name: {company.name}</p>
            <p>catchPhrase: {company.catchPhrase}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <p>Position: {position}</p>
            <button onClick={() => setPosition(!isMessageActive)}>Promote</button>
        </div>
    );
}

export default User;