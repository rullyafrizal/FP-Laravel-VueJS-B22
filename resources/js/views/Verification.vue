<template>
    <v-container>
        <v-card>
            <v-toolbar dark color="indigo darken-4">
                <v-toolbar-title>OTP Verification</v-toolbar-title>
            </v-toolbar>

            <v-container fluid>

                <keep-alive>
                    <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
                        <component :is="currentComponent" @closed="setDialogStatus"></component>
                    </v-dialog>
                </keep-alive>

                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="otp" :rules="otpRules"
                                  label="OTP" required append-icon="mdi-key"
                                  solo-inverted class="rounded-md">
                    </v-text-field>

                    <div class="text-xs-center">
                        <v-btn @click="submit" color="indigo darken-4" :disabled="!valid" class="white--text">
                            Submit
                            <v-icon right dark>mdi-lock-open</v-icon>
                        </v-btn>
                        <v-btn color="red darken-2" class="white--text" @click="setDialogComponent('RegenerateOTP')">
                            Regenerate OTP
                        </v-btn>
                    </div>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Verification",
    components: {
        RegenerateOTP : () => import('../components/RegenerateOTP.vue'),
        UpdatePassword: () => import('../components/UpdatePassword.vue'),
    },
    data(){
        return{
            valid: true,
            otp: null,
            otpRules: [
                v => /([0-9])+/.test(v) || 'OTP Code must be numeric',
                v => (v && v.length >= 6 && v.length < 7) || 'Min & Max 6 Characters'
            ]
        }
    },
    computed: {
        ...mapGetters({
            currentUser: 'auth/user',
            dialogStatus: 'dialog/status',
            currentComponent: 'dialog/component'
        }),
        dialog: {
            get(){
                return this.dialogStatus
            },
            set(value){
                this.setDialogStatus(value)
            }
        }
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
            setDialogStatus: 'dialog/setStatus',
            setDialogComponent: 'dialog/setComponent',
            setAuth: 'auth/set',
        }),
        submit(){
            if(this.$refs.form.validate()){
                let formData = {
                    'otp' : this.otp
                }
                let url = '/api/auth/verification'
                axios.post(url, formData).then((response) => {
                    let codeResponse = response.data.response_code;
                    if(codeResponse == "01"){
                        this.setAlert({
                            status: true,
                            color: 'error',
                            text: response.data.response_message
                        })
                    } else if (codeResponse == "00") {
                        this.setAlert({
                            status: true,
                            color: 'primary',
                            text: 'Verifikasi Berhasil, silahkan update password anda'
                        });
                        this.setDialogComponent('UpdatePassword')
                        window.location.reload();
                    }

                }).catch((error) => {
                    let responses = error.response;
                    this.setAlert({
                        status: true,
                        text: responses.data.message,
                        color: 'error'
                    });
                })
            }
        },

    }
}
</script>

<style scoped>

</style>
