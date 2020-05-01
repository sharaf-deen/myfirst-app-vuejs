<template>
    <div class="login container">
        <form @submit.prevent="login" class="card-panel">
            <h3 class="center deep-purple-text">Login to your account</h3>
            <div class="field">
                <label for="email">E-mail:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="center">
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
            </div>
            <div class="field center">
                <button class="btn deep-purple white-text">Continue</button>
            </div>
            <div class=" field center">
                <a class="waves-effect waves-teal btn-flat pink-text" @click="forgotPassword">Forgot password?</a>
            </div>
        </form>
        <div class="center">
            Don't have an account? 
            <router-link to="/signup"><span>Signup</span></router-link>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name:"Login",
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login() {
            if(this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    let user = firebase.auth().currentUser
                    // console.log(user)
                    this.$alert(`Logged in as ${user.email}.`,
                    "Welcome!",
                    "success");
                    // console.log(cred.user)
                    this.$router.push({ name : 'Home'})

                })
                .catch(err => {
                    this.feedback = err.message
                })
                this.feedback = null
            } else {
                this.feedback = 'Please fill in both fields'
            }
        },
        forgotPassword() {
            this.$prompt("Input your email").then((text) => {   
                // console.log(text)
                firebase.auth().sendPasswordResetEmail(text).then(() => {
                this.$alert(`Email sent to ${text}.`);
                }).catch((error) => {
                console.log(error);
                });
                })
        },
    }
}
</script>

<style scoped>
.login{
    max-width: 400px;
    margin-top: 60px;
}
.login h3{
    font-size: 2em;
    margin-top: 16px;
}
.login .field{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
}
.login label{
    margin-top: 20px;
}
</style>