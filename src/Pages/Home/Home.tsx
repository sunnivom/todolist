
import { useEffect } from "react"
import  "./HomeStyle.css"
import moment from 'moment'


let time: Date
time = new Date()
const string1 = time.getHours

function count () {
    const ti = 10
    return ti
}

function greeting () {
    time = new Date()
    const message = "Good morning"
    console.log(time);
    console.log(time.getHours.toString)
}




function Home (){

    return(
        <div>
            <div className="grid">
                <div className = "left-side">
                    <h1>Your Tasks</h1>
                </div>

                <div className="right-side">
                    <h1>Tasks</h1>
                    <h1>Tasks</h1>
                </div>
            </div>
        </div>
    )
}


export default Home