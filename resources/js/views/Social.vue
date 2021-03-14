<template>
    <div class="container mx-auto">
        <h2>Please Wait.....</h2>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Social",
    data(){
        return {
            code: '',
            provider: ''
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
            setAuth: 'auth/set',
            setDialogStatus: 'dialog/setStatus'
        }),
        go(provider, code){
            let url = '/api/auth/social/' + provider + '/callback?code=' + code
            axios.get(url).then((response) => {
                let {data} = response.data;
                this.setAuth(data);
                if(this.user.user.id.length > 0){
                    this.setAlert({
                        status: true,
                        color: 'primary',
                        text: 'Login Success'
                    });
                    this.setDialogStatus(false);
                    this.$router.push({name: 'home'});
                } else {
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: 'Login Failed'
                    });
                }
            }).catch((error) => {
                let responses = error.response;
                console.log(responses);
                this.setAlert({
                    status: true,
                    color: 'error',
                    text: 'Login Failed'
                });
            })
        }
    },
    mounted(){
        this.code = this.$route.query.code;
        this.provider = this.$route.path.split('/')[3];

        this.go(this.provider, this.code)
    }
}
</script>

<style scoped>

</style>
