import { useEffect, useState } from 'react';
import { requests } from './requests';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    requests.getUsers()
      .then(res => res.json())
      .then(res => setUsers(res))
  }, []);

  return (
    <>
     <ul>
      {
        users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            company={user.company}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))
      }
     </ul>
    </>
  )
}

export default App
