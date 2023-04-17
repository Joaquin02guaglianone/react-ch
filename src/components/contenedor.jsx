export const Contenedor = () => {

    let producto = [
        {id:1, precio:5000, nombre:"remera Negra"},
        {id:2, precio:6000, nombre:"pantalon negro"},
        {id:3, precio:7000, nombre:"zapatilla blanca"},
        {id:4, precio:4000, nambre:"aritos de acero Q"}
    ]

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        prodFetch()
        .then(resp => setProductos(resp))
        .catch(err=> console.log(err))
        .finally(()=>console.log("siempre a lo ultimo"))
    })

    console.log(productos)

    return (  

     <div>
        {
            productos.length /= 0 ?

            productos.map( producto  =>  <div key={productos.id} className="card w-25">
                                                 <div className="card-body">
                                                    <label htmlFor="">"nombre:" {producto.nombre}</label>
                                                    <label htmlFor="">"id:" {producto.id}</label>
                                                    <label htmlFor="">"precio:" {producto.precio}</label>
                                                 </div>

                                                 <div className="card-footer">
                                                    <button className="">Detalle</button>
                                                 </div>
            
                                           <div/>  
           :
           <h2>cargando...</h2>
        }
     </div>
    )
}

