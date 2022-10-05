<script>
  let buses=[];

  let datosBuses={
    busId:"",
    empresa:"",
    destino:"",
    origen:"",
    horaSalida:""
  };
  let ciudad={
    destino:""
  };


let mostrarBuses=()=>{
 fetch('https://api-rest-mongo.vercel.app/api/buses')
  .then(respuesta=>respuesta.json())
  .then((datosRespuesta)=>{
    buses=datosRespuesta;
    datosBuses={
      busId:"",
      empresa:"",
      destino:"",
      origen:"",
      horaSalida:""
    }

    console.log(buses)
  }).catch(console.log)
}

let mostrarCiudad=()=>{
 fetch('https://api-rest-mongo.vercel.app/api/bus/destino/'+ciudad.destino)
  .then(respuesta=>respuesta.json())
  .then((datosRespuesta)=>{
    buses=datosRespuesta;
    datosBuses={
      busId:"",
      empresa:"",
      destino:"",
      origen:"",
      horaSalida:""
    }
  

    console.log(buses)
  }).catch(console.log)
}

mostrarBuses();


</script>

<div class="container">
    <div class="card card-body">
   <form action="">
    <div class="mb-3">
                
                  <label for="" class="form-label">Ciudad</label>
                  <input
                
                  bind:value={ciudad.destino}                    
                    type="text"
                    class="form-control"
                    name=""
                    id=""
               
                    placeholder=""
                  />
         

                <button type="button" class="btn btn-primary"
                on:click|preventDefault={mostrarCiudad}>Buscar</button>
                 <button type="button" class="btn btn-primary"
                on:click|preventDefault={mostrarBuses}>Mostrar todos</button>
           
              </form>
  </div>
      <div class="row">
        <div class="col-md-7">
          <table class="table ">
            <thead>
              <tr>
                <th>Bus ID</th>
                <th>Empresa</th>
                <th>Destino</th>
                <th>Origen</th>
                <th >Hora salida</th>

              </tr>
            </thead>
            <tbody>
              {#each buses as bus }
                
            
              <tr>
                <td>{bus.busId}</td>
                <td>{bus.empresa}</td>
                <td>{bus.destino}</td>
                <td>{bus.origen}</td>
                <td>{bus.horaSalida}</td>
               
              </tr>
                {/each}
            </tbody>
          </table>
        </div>
      </div>
</div>