<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-nav class="m-2">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about-us">About us</b-nav-item>
          <b-nav-item to="/contact-us">Contact us</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="container"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  display: grid;
  grid-template-rows: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  margin-bottom: 40px;
}
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  border-radius: 3px;
  color: #fff !important;
  font-weight: bold;
  margin-right: 15px;
}
</style>
