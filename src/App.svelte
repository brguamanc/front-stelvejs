<script>
  import{Router, Route,Link,link}from "svelte-routing";
  import Login from "./Login.svelte";
  import Inicio from "./Inicio.svelte";
</script>

<Router>
<div>
  <Route path="/" component={Login}></Route>
  <Route path="/inicio" component={Inicio}></Route>
  
</div>
    
</Router>