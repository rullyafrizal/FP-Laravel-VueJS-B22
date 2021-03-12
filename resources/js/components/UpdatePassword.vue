<template>
        <v-card class="rounded-lg">
            <v-toolbar dark color="indigo darken-4">
                <v-toolbar-title>Update Password</v-toolbar-title>
            </v-toolbar>

            <v-container fluid>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="email" :rules="emailRules"
                                  label="Email" required append-icon="mdi-email" solo-inverted>
                    </v-text-field>
                    <v-text-field v-model="password"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :rules="passwordRules" :type="showPassword ? 'text' : 'password'"
                                  label="Password" hint="At least 6 characters" counter
                                  @click:append="showPassword = !showPassword" solo-inverted>

                    </v-text-field>
                    <v-text-field v-model="passwordConfirm"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :rules="passwordRules" :type="showPassword ? 'text' : 'password'"
                                  label="Password Confirmation" hint="At least 6 characters" counter
                                  @click:append="showPassword = !showPassword" solo-inverted>

                    </v-text-field>

                    <div class="text-xs-center">
                        <v-btn @click="submit" color="indigo darken-4" :disabled="!valid" class="white--text">
                            Submit
                            <v-icon right dark>mdi-lock-open</v-icon>
                        </v-btn>
                    </div>
                </v-form>
            </v-container>
        </v-card>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "UpdatePassword",
    data(){
        return{
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'Email is Required',
                v => /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,})+/.test(v) || 'Email must be valid'
            ],
            showPassword: false,
            password: '',
            passwordRules: [
                v => !!v || 'Password Required',
                v => (v && v.length >= 6) || 'Min 6 Characters'
            ],
            passwordConfirm: '',
            passwordConfirmRules: [
                v => !!v || 'Password Required',
                v => (v && v.length >= 6) || 'Min 6 Characters',
            ],
        }
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
            setDialogStatus: 'dialog/setStatus',
            setDialogComponent: 'dialog/setComponent',
        }),
        close(){
            this.$emit('closed', false);
        },
        submit(){
            if(this.$refs.form.validate()){
                let formData = {
                    'email' : this.email,
                    'password' : this.password,
                    'password_confirmation' : this.passwordConfirm
                }
                let url = '/api/auth/update-password'
                axios.post(url, formData).then((response) => {
                    this.setAlert({
                        status: true,
                        color: 'primary',
                        text: response.data.response_message
                    });
                    this.close();
                    this.$router.push({name: 'home'});
                    setTimeout(() => this.setDialogComponent('Login'), 2000)
                }).catch((error) => {
                    let responses = error.response;
                    if(responses.status === 422){
                        this.setAlert({
                            status: true,
                            text: responses.data.errors.password[0],
                            color: 'error'
                        });
                    } else if(responses.status === 401){
                        this.setAlert({
                            status: true,
                            text: responses.data.response_message,
                            color: 'error'
                        });
                    }

                })
            }
        }
    }
}
</script>

<style scoped>

</style>
