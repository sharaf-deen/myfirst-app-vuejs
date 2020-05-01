<template>
    <div class="signup container">
        <form @submit.prevent="signup" class="card-panel">
            <h3 class="center deep-purple-text">Create New Account</h3>
            <p class="center">Sign up to test your trivial knowledge with 10 questions.</p>
            <div class="field">
                <label for="name">Full Name:</label>
                <input type="text" name="name" v-model="name">
            </div>
            <div class="field">
                <label for="email">E-mail:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="username">Username:</label>
                <input type="text" name="username" v-model="username">
            </div>
            <p class="red-text center" v-if="feedback">{{ feedback }}</p>
            <div class="field center">
                <button class="btn deep-purple white-text">Signup</button>
            </div>
        </form>
        <div class="card">
            <div class="card-content center">
                Have an account? 
            <router-link to="/login"><span>Login</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'Signup',
    data() {
        return {
            email: null,
            password: null,
            username: null,
            name: null,
            feedback: null,
            picture: null
        }
    },
    methods: {
        signup() {
            if (this.username && this.email && this.password && this.name) {
                this.username = slugify(this.username, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                let ref = db.collection('users').doc(this.username)
                ref.get().then(doc => {
                    if(doc.exists) {
                        this.feedback = 'This username already exists'
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then(cred => {
                            ref.set({
                                username: this.username,
                                name: this.name,
                                user_id: cred.user.uid,
                                picture: this.picture
                            })
                        })
                        .then(() => {
                            let user = firebase.auth().currentUser
                            // console.log(user)
                            this.$alert(`Logged in as ${user.email}.`,
                                        "Welcome!",
                                        "success");
                            // console.log(cred.user)
                            this.$router.replace({ name : 'Home'})
                        })
                        .catch(err => {
                            console.log(err)
                            this.feedback = err.message
                        })
                        this.feedback = 'This username is free to use'
                    };
                    
                })
                console.log(this.slug);
            } else {
                this.feedback = "You must enter all fields"
            }
        }
    },
    created() {
        
    }
}
</script>

<style scoped>
.signup{
    max-width: 400px;
    margin-top: 60px;
}
.signup h3{
    font-size: 2em;
    margin-top: 16px;
}
.signup .field{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
}
.signup label{
    margin-top: 20px;
}
</style>