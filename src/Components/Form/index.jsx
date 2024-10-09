import { useState } from "react"

const Form =()=>{
    const[weight, setWeight] =useState(0);
    const[height, setHeight] =useState(0);
    const[result,setResult] =useState(0);
    const [label, setlabel] =useState(0);

    return(
        <form>
            <label htmlFor="altura">Digite sua altura (m)</label>
            <br/>
            <input id="altura" type="number" placeholder="Ex: 1.80" required />
        </form>
    )
}
export default Form;