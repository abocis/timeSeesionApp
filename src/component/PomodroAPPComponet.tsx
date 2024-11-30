import { useState } from "react"
import TimedseessionComponet from "./TimedseesionComponent"


const TOTAL_sESSION_IN_CYCLE = 4;

const SESSION_TYPE_LABEL = {
    
    focus: "Focus time",
    "short-brach": "short break",
    "long-break": "long break",
};

const PomodroAPPComponet = ()=> {
    return (
        <>
        <div style={{
            margin: "auto",
            maxWidth: "500px",
            textAlign: "center",
            fontSize: "1.5 rem",
        }}
        >
           <p>Session 1 of 4 </p>
        </div>
        <TimedseessionComponet/>
      </>
    )
}
export default PomodroAPPComponet