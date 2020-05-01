<template>
  <div class="container">
    <br><br>
    <div class="header center">
      <h3>Thank you for playing!</h3>
      <p>
        You scored
        <span>{{numCorrect}}/{{numTotal}}</span>
      </p>
      <div class="buttons">
        <router-link class="button" to="/">Play Again</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["numCorrect", "numTotal"])
  }
};
</script>


<style scoped>

.buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none !important;
  justify-content: center;
  align-items: center;
}

.buttons .button {
  margin-top: 10px;
  width: 100px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background: #e91e63;
  padding: 15px;
  font-size: 1em;
  border-radius: 20px;
}

.button:hover {
  background: #eb5b8b;
}

</style>