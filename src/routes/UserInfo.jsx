import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Repo from '../components/Repo';
import Tabs from '../components/Tabs';



const UserInfo = () => {

    const [user, SetUser] = useState([]);
    const [type, setType] = useState("repos");
    const [info, setInfo] = useState([]);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    let BaseURL = "https://api.github.com/users";
    //getting the user details
    async function GetUserInfo() {
        const res = await fetch(BaseURL + pathname)
        const data = await res.json()
        SetUser(() => [data])
    }
    //getting the repo url 
    async function GetUrls() {

        const res = await fetch(BaseURL + pathname + `/${type}`)
        const data = await res.json()
        setInfo(data)
        //console.log(info)

    }
    useEffect(() => {
        GetUserInfo();
        GetUrls();



    }, [pathname, type])

    return <div>
        <button onClick={() => navigate('/')} className='px-7 py-2 font-semibold mx-1 my-4 dark: bg-sky-500' >

            BACK
        </button>
        {
            user && user?.map((uinfo, i) => (
                <div key={i} className='flex justify-center md:flex-row  md:px-0 flex-col gap-10'>
                    <img src={uinfo.avatar_url} alt={uinfo.login} className='w-[380px] border-4 border-sky-600 ' />
                    <div className='text-lg px-3 leading-10'>
                        <h1 className='text-4xl pb-4'>{uinfo?.name}</h1>
                        <h1>
                            <span className='px-4'>Login_name</span> : {uinfo?.login}
                        </h1>
                        <h1>
                            <span className='px-4'>Followers </span> : {uinfo?.followers}
                        </h1>
                        <h1>
                            <span className='px-4'>Following </span> : {uinfo?.following}
                        </h1>
                        <h1>
                            <span className='px-4'>Public_Repositories </span> : {uinfo?.public_repos}
                        </h1>

                        <a href={uinfo?.html_url} target="_blank" className='dark:text-sky-600 text-m 
                    font-semibold  border-2 px-5 py-1 my-3 rounded border-b-transparent
                    bg-sky-600 dark:bg-slate-100' rel="noreferrer">
                            Go to Profile
                        </a>
                    </div>
                </div>

            ))
        }
        <div className='flex border-b pb-4 gap-6 mt-[10%] mb-6
        justyfy-center md:text-2xl font-semibold'>
            <Tabs type={type} setType={setType} />
        </div>
        {type === "repos" && (
            <div>
                {info && <Repo users={info} />}
            </div>
        )}

    </div>

}

export default UserInfo