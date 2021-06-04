<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top justify-content-between" style="background-color: #FFFFFF;">
        <a class="navbar-brand" href="/">
            <img src="../assets/images/logo_navbar.png" alt="SIPEKAN">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        

        <div v-if="!isLoggedIn" class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
            <form class="form-inline my-2 my-lg-0" @submit.prevent="handleLogin">
                <input class="form-control my-1 mr-sm-2" v-model="user.username" type="username" placeholder="Username">
                <input class="form-control my-1 mr-sm-2" v-model="user.password" type="password" placeholder="Password">
                <button class="btn btn-primary my-1 my-sm-0 btn-login-biasa" type="submit" :disabled="loading">
                    <span v-show="loading" class="spinner-border spinner-border-lg"></span>
                    <span :hidden="loading">Login</span>
                </button>
            </form>
            <h5 class="atau">atau</h5>
            <a href="https://backend-sipekan.herokuapp.com/login-sso/" class="btn btn-warning">
                Login SSO UI
            </a>
        </div>
    </nav>
</template>

<script>
import User from '../models/user';

export default {
    name: 'Navbar',
    data(){
        return{
            user: new User('', ''),
            message:'',
            loading: false,
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (!this.loggedIn){
            window.addEventListener('message', this.receiveMessage);
        }
    },
    methods: {
        receiveMessage(event){
            if (['http://localhost:8000', "https://backend-sipekan.herokuapp.com"].includes(event.origin)){
                if (event.data != undefined){
                    localStorage.setItem('user', event.data);
                }
            }
        },

        handleLogin() {
            this.loading = true;
            if (this.user.username && this.user.password) {
                this.$store.dispatch('auth/login', this.user).then(
                    () => {
                        this.$router.push('/pengumuman');
                    },
                    error => {
                        this.loading = false;
                        this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    }
                );
            }
        }
    },

}
</script>

<style>

.btn-login-biasa{
    margin: 0px 10px 0px 0px;
}

.atau{
    margin: 0px 10px 0px 0px;

}
</style>