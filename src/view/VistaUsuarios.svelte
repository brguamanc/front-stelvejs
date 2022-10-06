<script>
  let buses = [];

  let ciudad = {
    destino: "",
    origen: "",
  };

  let mostrarCiudad = () => {
    const nuevaBusqueda = {
      destino: ciudad.destino,
      origen: ciudad.origen,
    };
    if (nuevaBusqueda.destino != "" && nuevaBusqueda.origen != "") {
      fetch("https://api-rest-mongo.vercel.app/api/bus/busqueda", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(nuevaBusqueda),
      })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          buses = datosRespuesta;
          if (buses.length == 0) {
            alert("No hay resultados");
          }
        })
        .catch(console.log);
    } else {
      alert("Ingrese una ciudad para buscar");
    }
  };

  //mostrarBuses();
</script>

<div class="container">
  <div class="card card-body">
    <form>
      <div class="mb-3">
        <label for="" class="form-label">Ciudad destino</label>
        <input bind:value={ciudad.destino} type="text" class="form-control" />

        <div class="mb-3" />
        <label for="" class="form-label">Ciudad origen</label>
        <input bind:value={ciudad.origen} type="text" class="form-control" />
      </div>
      <button
        type="button"
        class="btn btn-primary"
        on:click|preventDefault={mostrarCiudad}>Buscar</button
      >
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
            <th>Hora salida</th>
          </tr>
        </thead>
        <tbody>
          {#each buses as bus}
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
