import React, { useEffect, useRef, useState } from 'react'
import UsersContainer from '../components/UsersContainer';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const Users = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let BaseURL = "https://api.github.com/users";
  const user = useRef('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function AllUsers() {
    if (user.current.value === "") {
      setLoading(true)
      const res = await fetch(BaseURL);
      const data = await res.json();

      setUsers(data);
      setLoading(null)
    }

  }

  async function FindUser() {
    setLoading(true)
    if (user.current.value !== '') {
      setUsers("")
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json();
      setErrorMessage(null);
      if (data.message === "Not Found") {
        setErrorMessage(true);
      }
      setUsers(() => [data]);
      user.current.value = "";

    } else {
      AllUsers();
    }
    setLoading(null)
  }

  useEffect(() => {
    //AllUsers();
  }, [users]);

  return <div>
    <div className='flex justify-center item-center h-11 my-5'>
      <input type='text'
        placeholder='Search github username.'
        className='h-full md:w-1/3 text-gray-700 px-3 font-medium outline-none bg-gray-200 dark:bg-white'
        ref={user} />
      <button onClick={FindUser} className='bg-sky-500 font-medium px-5 h-full'>
        Search
      </button>
    </div>
    {loading ? <Loading /> : <UsersContainer users={users} />}
    <div>
      {!loading && errorMessage ? <ErrorMessage /> : <></>}
    </div>
  </div>

}

export default Users