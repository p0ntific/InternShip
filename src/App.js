import './App.scss';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import ErrorPage from "./ErrorPage/ErrorPage";
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import About from "./About/About";
import CandidateAccount from "./CandidateAccount/CandidateAccount";
import MyInfo from "./CandidateAccount/MyInfo/MyInfo";
import CareerSchool from "./CandidateAccount/CareerSchool/CareerSchool";
import Testing from "./CandidateAccount/Testing/Testing";
import Offers from "./CandidateAccount/Offers/Offers";
import Invites from "./CandidateAccount/Invites/Invites";
import InternAccount from "./InternAccount/InternAccount";
import Tasks from "./InternAccount/Tasks/Tasks";
import InternFeedback from "./InternAccount/InternFeedback/InternFeedback";
import Map from "./InternAccount/Map/Map";
import MentorAccount from "./MentorAccount/MentorAccount";
import Intern from "./MentorAccount/Intern/Intern";
import MentorFeedback from "./MentorAccount/MentorFeedback/MentorFeedback";
import InternTests from "./MentorAccount/InternTests/InternTests";

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: 'candidateAccount',
        element: <CandidateAccount/>,
        children: [
            {
                path: 'myInfo',
                element: <MyInfo/>
            },
            {
                path: 'careerSchool',
                element: <CareerSchool/>
            },
            {
                path: 'testing',
                element: <Testing/>
            },
            {
                path: 'requests',
                element: <Offers/>
            },
            {
                path: 'invites',
                element: <Invites/>
            },
        ]
    },
    {
        path: 'internAccount',
        element: <InternAccount/>,
        children: [
            {
                path: 'feedback',
                element: <InternFeedback/>
            },
            {
                path: 'map',
                element: <Map/>
            },
            {
                path: 'tasks',
                element: <Tasks/>
            },
            {
                path: 'invites',
                element: <Invites/>
            },
        ]
    },
    {
        path: 'mentorAccount',
        element: <MentorAccount/>,
        children: [
            {
                path: 'feedback',
                element: <MentorFeedback/>
            },
            {
                path: 'info',
                element: <Intern/>
            },
            {
                path:'tests',
                element:<InternTests/>
            }
        ]
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registration",
        element: <Registration/>,
    },
    {
        path: "*",
        element: <ErrorPage/>

    }
]);

function App(props) {
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <div className="container">
                    <RouterProvider
                        router={router}
                    />
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
