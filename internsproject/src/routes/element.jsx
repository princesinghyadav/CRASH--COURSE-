import {Routes, Route} from "react-router-dom"
import { Feedback } from "../pages/feedback"
import { Welcome } from "../pages/Home"
import { WelcomePage } from "../component/welcome"


export function Element(){

    return (
        <>
        <Routes>

            <Route path="/" element={<Welcome/>} />
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/feedback/welcome" element={ <WelcomePage/> } />
        </Routes>
        </>
    )
}