export let producto = [
        {id:1, precio:5000, nombre:"remera Negra"},
        {id:2, precio:6000, nombre:"pantalon negro"},
        {id:3, precio:7000, nombre:"zapatilla blanca"},
        {id:4, precio:4000, nambre:"aritos de acero Q"}
    ]


export let prodFetch = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(producto)
        }, 1000)
    })
}
