import { useEffect, useState } from "react";
import css from "./Timer.module.css";

export function Timer(): JSX.Element {

    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);

    useEffect( ()=>{
        const timer = setInterval( ()=>{
            setSeconds((prevSecond) => {

                if(prevSecond===59){

                    setMinutes( (prevMinute)=>{

                        if (prevMinute === 59){
                            setHours((prevHour)=>{
                                prevHour+=1;
                                return 0; //reset minutes to 0
                            } )
                        }
                        return prevMinute +=1;
                    })  
                    return 0; //reset seconds to 0
                }
                return prevSecond += 1;
            }) 
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className={css.HomeArea}>
            <p>
                {String(hours).padStart(2, "0")}: //pads the string with '0' until the length becomes 2
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </p>
        </div>
    );
}
