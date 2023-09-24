import React from 'react'
import { Link } from 'react-router-dom';


const UsersContainer = ({ users }) => {
    return <div className='flex gap-5 flex-wrap justify-center py-5'>
        {users && users.map((user, idx) => (
            user?.login && (
                <div key={idx} className="flex w-[200px] border-gray-500 bg-gray-800 p-3 flex-col items-center">
                    <img src={user?.avatar_url} alt={user?.login} className='w-24 mb-4 border-4 border-sky-500 rounded-full' />
                    <h1 className='text-2xl'> {user?.login}</h1>
                    <Link to={`/${user?.login}`} >
                        <span className='text-gray-100 bg-sky-700 my-3 font-bold block py-1 px-4 tracking-wide'>
                            View
                        </span>
                    </Link>
                </div>)
        ))}
    </div>;

};



export default UsersContainer