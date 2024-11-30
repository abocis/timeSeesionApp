

const TimedseessionComponet = () => {


    return(
        <div style={{border: "1px solid white"}}>
            <p style={{ fontSize: "2.5em ", color:"orange"}}>25:00</p>
            <div 
            style={{
                marginBottom:"2em",
                display:"flex",
                gap:"20px",
                justifyContent:"Center"
            }}
            >
            <button>Restart</button>
            <button>Start / Pause</button>
            <button> Skip </button>
            </div>
        </div>
    )
}
export default TimedseessionComponet