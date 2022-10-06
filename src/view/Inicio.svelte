<script>
  let buses = [];
  let activado = true;
  let datosBuses = {
    busId: "",
    empresa: "",
    destino: "",
    origen: "",
    horaSalida: "",
  };
  let mostrarBuses = () => {
    fetch("https://api-rest-mongo.vercel.app/api/buses")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        buses = datosRespuesta;
        datosBuses = {
          busId: "",
          empresa: "",
          destino: "",
          origen: "",
          horaSalida: "",
        };
        activado = true;
        console.log(buses);
      })
      .catch(console.log);
  };

  let agregarBus = () => {
    const nuevoBus = {
      busId: datosBuses.busId,
      empresa: datosBuses.empresa,
      destino: datosBuses.destino,
      origen: datosBuses.origen,
      horaSalida: datosBuses.horaSalida,
    };

    fetch("https://api-rest-mongo.vercel.app/api/bus", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(nuevoBus),
    })
      .then((respuesta) => respuesta.json())

      .then((datosRespuesta) => {
        mostrarBuses();
        console.log(datosRespuesta);
      })
      .catch(console.log);
  };

  let borrarBus = (id) => {
    fetch("https://api-rest-mongo.vercel.app/api/busid/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        mostrarBuses();
      })
      .catch(console.log);
  };

  let escogerBus = (bus) => {
    activado = false;
    datosBuses = bus;
  };

  let actualizarBus = () => {
    const nuevoBus = {
      busId: datosBuses.busId,
      empresa: datosBuses.empresa,
      destino: datosBuses.destino,
      origen: datosBuses.origen,
      horaSalida: datosBuses.horaSalida,
    };

    fetch("https://api-rest-mongo.vercel.app/api/busid/" + datosBuses.busId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(datosBuses),
    })
      .then((respuesta) => respuesta.json())

      .then((datosRespuesta) => {
        mostrarBuses();
      })
      .catch(console.log);
  };
  mostrarBuses();
</script>

<div class="container">
  <div class="row">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">Buses</div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="" class="form-label">Bus Id</label>
              <input
                readonly
                bind:value={datosBuses.busId}
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Empresa</label>
              <input
                bind:value={datosBuses.empresa}
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Escoja una empresa"
                list="datalistOptions2"
              />
              <datalist id="datalistOptions2">
                <option value="Expreso Tulcán" />
                <option value="Turismo" /><option
                  value="Pullman Carchi"
                /><option value="Tax Gacela" /><option
                  value="San Cristobal"
                /><option value="Flota Imbabura" /><option value="Velotax" />
              </datalist>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Destino</label>
              <input
                bind:value={datosBuses.destino}
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Seleccione una ciudad"
                list="datalistOptions3"
              />
              <datalist id="datalistOptions3">
                <option value="Tulcán" />
                <option value="Ibarra" />
                <option value="Quito" />
              </datalist>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Origen</label>
              <input
                bind:value={datosBuses.origen}
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Seleccione una ciudad"
                list="datalistOptions"
              />
              <datalist id="datalistOptions">
                <option value="Tulcán" />
                <option value="Ibarra" />
                <option value="Quito" />
              </datalist>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Hora salida</label>
              <input
                bind:value={datosBuses.horaSalida}
                type="time"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
            </div>

            <button
              type="button"
              class="btn btn-primary"
              on:click|preventDefault={agregarBus}>Agregar bus</button
            >

            <button
              type="button"
              class="btn btn-success"
              on:click|preventDefault={actualizarBus}
              disabled={activado}>Actualizar bus</button
            >
            <button
              type="button"
              class="btn btn-danger"
              on:click|preventDefault={mostrarBuses}>Cancelar</button
            >
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-7">
      <table class="table ">
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Empresa</th>
            <th>Destino</th>
            <th>Origen</th>
            <th>Hora salida</th>
            <th>Acciones</th>
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
              <td>
                <button
                  type="button"
                  clase="btn btn-danger"
                  on:click={borrarBus(bus.busId)}
                >
                  Borrar
                </button>

                <button
                  type="button"
                  clase="btn btn-info"
                  on:click={escogerBus(bus)}
                >
                  Editar
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
