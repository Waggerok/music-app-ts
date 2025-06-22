import { Route, Routes } from "react-router-dom"


import { AdminPage, AuthPage, FeedbackPage, MainPage, NotFoundPage, ProfilePage, TrackPage, TracksPage } from "@/pages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='*' element={<MainPage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/profile/:id' element={<ProfilePage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/feedback' element={<FeedbackPage/>}/>
            <Route path='/tracks' element={<TracksPage/>}/>
            <Route path='/tracks/:id' element={<TrackPage/>}/>
            <Route path='/not-found' element={<NotFoundPage/>}/>
        </Routes>
    )
};

export default AppRouter;