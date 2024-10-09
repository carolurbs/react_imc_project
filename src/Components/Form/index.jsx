import { useState } from "react"

const Form =()=>{
    const[weight, setWeight] =useState(0);
    const[height, setHeight] =useState(0);
    const[result,setResult] =useState(0);
    const[label,setLabel] =useState("");
    const Math =()=>{
        const imc=weight/(height*height)
        const formImc=imc.toFixed(1);
        return setResult(parseFloat(formImc));
    } 

    const Labeled =()=>{
        if(result<18.5) return setLabel("Você está abaixo do peso");
        else if((result>18.5)&&(result<25.0)) return setLabel("Seu peso está ideal");
        else if((result>25.0)&&(result<30.0))return setLabel("Você está com sobrepeso");
        else if((result>30.0)&&(result<35.0))return setLabel("Você está com obesidade grau I");
        else if((result>35.0)&&(result<40.0)) return setLabel("Você está com obesidade grau II");
        else if(result>40.0) return setLabel("Você está com obesidade grau III");
    }
    
    return(
        <form>
            <label htmlFor="peso">Digite seu peso (kg)</label>
            <input  id="peso" type="number" placeholder="Ex: 70.5" required onChange={(e)=>{
                setWeight(parseFloat(e.target.value))
            }}/>
            <label htmlFor="altura">Digite sua altura (m)</label>
            <input id="altura" type="number" placeholder="Ex: 1,80" required onChange={(e)=>{
                setHeight(parseFloat(e.target.value))
            }}/>
            <button onClick={(e) =>{
                e.preventDefault();
                Math();
                Labeled();
            }}>Calcular
            </button>
            <div>
                {result>0?
                    (
                        <>
                        <p>Seu IMC é {result}</p>
                        <p>{label}</p> 
                        </>
                    ):
                    (
                        <>
                        </>
                    )
                }
            </div>
        </form>
    )
}
export default Form;