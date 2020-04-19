<template>
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br><br>
        <h5 class="header center">Test your basic general knowledge !</h5>
        <br>
        <div class="header center">
          <router-link to="/question">
            <button class="btn waves-effect waves-teal pink white-text btn-large">Start a new quiz</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {

        }
    }
}
</script>

<style>
.btn:hover {
  background-color: whitesmoke;
}
</style>