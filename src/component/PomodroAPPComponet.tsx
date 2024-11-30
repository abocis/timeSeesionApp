import { useState } from "react"
import TimedseessionComponet from "./TimedseesionComponent"


const TOTAL_sESSION_IN_CYCLE = 4;

const SESSION_TYPE_LABEL  = {
    focus: "Focus time",
    "short-break": "short break",
    "long-break": "long break",
};
const SESSION_DURATION_IN_MINUTES = {
    focus:25,
    "short-break":5,
    "long-break": 20,
};


const PomodroAPPComponet = ()=> {
    
    const [currentSession, setCurrentSession] = useState(1);
    const [currentSessionType, setCurrentSessionType] = useState("focus")

    return (
        <>
        <div style={{
            margin: "auto",
            maxWidth: "500px",
            textAlign: "center",
            fontSize: "1.5 rem",
        }}
        >
           <p>Session {currentSession} of {TOTAL_sESSION_IN_CYCLE}(
            {SESSION_TYPE_LABEL[currentSessionType] })
            </p>

            <TimedseessionComponet
            initialDuration={SESSION_DURATION_IN_MINUTES[currentSessionType]}
            />

        </div>
        
      </>
    )
}
export default PomodroAPPComponet