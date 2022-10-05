<script>
  let buses=[];

  let datosBuses={
    busId:"",
    empresa:"",
    destino:"",
    origen:"",
    horaSalida:""
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


mostrarBuses();

</script>

<div class="container">
      <div class="row">
        <div class="col-md-7">
          <table class="table ">
            <thead>
              <tr>
                <th>Bus ID</th>
                <th>Empresa</th>
                <th>Destino</th>
                <th>Origen</th>
                <th>Hora salida</th>

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