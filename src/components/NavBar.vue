<template>
    <div class="navbar">
        <nav class="deep-purple">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo center text-white">Quizee</router-link>
                <ul class="right">
                    <li v-if="!user"><router-link to="/signup" class="white-text" >Signup</router-link></li>
                    <li v-if="!user"><router-link to="/login" class="white-text">Login</router-link></li>
                    <li v-if="user"><burger/></li>
                    <li v-if="user"><a @click="logout" title="Logout"><i class="material-icons">exit_to_app</i></a></li>
                </ul>
            </div>
        </nav>
        <sidebar>
            <div class="row">
                <div class="col s12 m12">
                    <h5 v-if="profile" class="deep-purple-text center">Your Profile</h5>
                    <br>
                    <div class="card grey lighten-5">
                        <div class="card-image">
                        <img v-if="profile" :src=profile.picture>
                        <a @click="editProfile" v-if="!profileSettings" class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">edit</i></a>
                        </div>
                        <div class="card-content center">
                        <p v-if="profile" class="pink-text center">{{ profile.name }}</p>
                        <p v-if="profile" class="pink-text center">{{ profile.username }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <form v-if="profileSettings" @submit.prevent="updateProfile" class="row">
                <div class="col s12 m12">
                    <div class="card-panel center">
                        <button class="btn-floating waves-effect waves-light pink material-icons delete" @click="closeEditProfile">close</button>
                        <p class="deep-purple-text">Update your Account</p>
                        <div>
                            <label for="name">Full Name:</label>
                            <input type="text" name="name" class="grey-text" v-model="profile.name">
                        </div>
                        <div>
                            <label for="username">Username:</label>
                            <input type="text" name="username" class="grey-text" v-model="profile.username">
                        </div>
                        <br>
                        <div>
                            <label for="picture"><a class="btn-floating"><i class="material-icons">photo_camera</i></a></label>
                            <input type="file" name="profile_picture" id="picture" accept="image/png, image/jpeg" style="display:none;" @change="uploadImage">
                            <br>
                            <span class="grey-text">Upload: {{ progressUpload }}%</span>
                        </div>
                        <br>
                        <div class="field center">
                            <button class="btn deep-purple white-text btn-small">Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="center">
                <button class="waves-effect waves-light btn" @click="resetPassword">Reset password</button>
            </div>        
        </sidebar>
    </div>
</template>

<script>
import Burger from '@/components/viewProfile/Burger';
import Sidebar from '@/components/viewProfile/Sidebar';

import slugify from 'slugify'

import firebase from 'firebase'
import db from '@/firebase/init'


export default {
    name: 'Navbar',
    components: {
        Burger,
        Sidebar,
    },

    data() {
        return {
            email: null,
            name: null,
            username: null,
            password: null,
            slug: null,         
            user: null,
            profile: null,
            profileSettings: false,
            picture: null,
            progressUpload: null
        }
    },

    methods: {
        watcher() {
            db.collection("users")
            .onSnapshot((querySnapshot) => {
            this.users = [];
            querySnapshot.forEach((doc) => {
                this.users.push(doc);
            });
            });
        },

        uploadImage(e) {
            let file = e.target.files[0];
            var storageRef = firebase.storage().ref('users/' + file.name);
            let uploadTask = storageRef.put(file);
            uploadTask.on('state_changed', (snapshot) => {
                this.progressUpload = parseInt(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log()
                    break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                    break;
                }
            }, (error) => {
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // console.log(this.profile)
                    this.profile.picture = downloadURL;
                    // console.log('File available at', downloadURL);
                });
            });
        },

        updateProfile() {
            db.collection('users').doc(this.profile.id).update(this.profile)
            .then(() => {
                // console.log('Success');
                this.$alert('Your profile has been successfully updated!',
                    "Congratulations",
                    "success");
                this.watcher();

            }).catch(err => {
                console.log(err)
            })
            this.profileSettings = false;
        },

        logout() {
            firebase.auth().signOut()
            .then(() => {
                this.$router.replace({
                   name: 'Login' 
                })
            })
            .catch((err) => {
                console.log(err);
            })
        },

        resetPassword() {
            const auth = firebase.auth();
            // console.log(auth.currentUser);
            auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
                this.$alert(`Email sent to ${auth.currentUser.email}.`);
            }).catch((error) => {
                console.log(error);
            });
        },

        editProfile() {
            this.profileSettings = true
        },

        closeEditProfile() {
            this.profileSettings = false
        }
    },
    created() {
        let user = firebase.auth().currentUser
        // console.log(user)
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.user = user
                db.collection('users').where('user_id', '==', user.uid).get()
                .then(snapshot => {
                snapshot.forEach((doc) => {
                this.profile = doc.data();
                this.profile.id = doc.id
                // console.log(this.profile)
                // console.log(this.profile.id)
            })
            })
            } else {
                this.user = null
            };
        });
    }
}
</script>

<style scoped>

</style>
