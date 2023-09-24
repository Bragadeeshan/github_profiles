import React from 'react'


const Repo = ({ users }) => {
    const acending = [...users].sort((a, b) => a.created_at < b.created_at ? 1 : -1,);
    const slicedAcending = acending.slice(0, 5)

    return <>
        {slicedAcending.map((user, idx) => (

            <div key={idx} className='dark:bg-gray-800 bg-gray-200 text-black dark:text-white p-3 leading-8'>
                <a href={user.html_url} target='_blank' rel="noreferrer" className='font-semibold hover:underline'>
                    {user.full_name}
                </a>
                <div className='flex gap-x-5 font-medium'>
                    <h1>
                        stars : {user.stargazers_count}
                    </h1>
                </div>
            </div>
        ))}

    </>
}


export default Repo