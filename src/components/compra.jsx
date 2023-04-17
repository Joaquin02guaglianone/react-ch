import { useEffect } from 'react';
import { useState } from 'react'
import { prodFetch } from './producto';


export function ItemCount() {

const [Contador, setContador] = useState(0)

const handleAcontador = () => {
setContador(Contador + 1)
};

const handleQcontador = () => {
setContador(Contador - 1)
    };

    return (

<div>
    <h3>Contador:{Contador}</h3>
    <button onClick={handleAcontador}>+</button>
    <button onClick={handleQcontador}>-</button>
</div>

    )

};


