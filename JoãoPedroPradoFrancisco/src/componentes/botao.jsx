import { useState } from "react";
function Botao(){
    const [contador, setContador] = useState(0);



    function jogarConfete() {
        confetti({
            particleCount: 2000,
            spread: 200,
            origin: { y: 0.8 , x:0.5 }
        });
    }
    


function mais (){
    setContador(contador + 1);
    jogarConfete();
    console.log("😎")
}


function menos (){
    if(contador == 0 ){
        setContador(0);
        alert("você não pode diminuir mais")
    }
    else {
    setContador(contador - 1);
    console.log("🥸")
}
    }



    
return(<>

<div className="contador">

<p id="titulo">Contador</p>

<div className="subcontador">
<button onClick={mais}>+</button>
<p id="numero">{contador}</p>
<button onClick={menos}>-</button>
</div>

</div>


</>)}


export default Botao;


