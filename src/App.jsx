import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import ReactSwitch from "react-switch";

import './App.css';
import Logo from "./components/Logo";
import UserInfo from "./routes/UserInfo";
import Users from "./routes/Users";

const App = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
    }, [theme]);
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    };

    return < div className='min-h-screen bg-white dark:bg-black'>
        <div className="container dark:text-gray-200 text-gray-900 py-3">

            <div className="flex justify p-2 items-center text-xl">
                <label className="px-2 font-semibold py-3 ">
                    {theme === "light" ? "Light Mode" : "Dark Mode"}
                </label>
                <ReactSwitch onChange={handleThemeSwitch} checked={theme === "dark"} />
            </div>





            <Logo />
            <Routes>
                <Route path="/" element={<Users />}></Route>
                <Route path="/:name" element={<UserInfo />}></Route>
            </Routes>
        </div>
    </div>


};
export default App;