<template>
        <v-card class="rounded-lg">
            <v-card-title>
                Regenerate OTP
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="email" :rules="emailRules"
                                  label="Email" required append-icon="mdi-email" solo-inverted>
                    </v-text-field>

                    <div class="text-xs-center">
                        <v-btn @click="regenerate" color="red darken-2" :disabled="!valid" class="white--text">
                            Regenerate
                        </v-btn>
                        <v-btn color="indigo darken-4" @click.native="close" class="white--text">
                            Close
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "RegenerateOTP",
    data(){
        return{
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'Email is Required',
                v => /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,})+/.test(v) || 'Email must be valid'
            ],
        }
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
        }),
        close(){
            this.$emit('closed', false);
        },
        regenerate(){
            if(this.$refs.form.validate()){
                let formData = {
                    'email' : this.email
                }
                let url = '/api/auth/regenerate-otp'
                axios.post(url, formData).then((response) => {
                    let codeResponse = response.data.response_code;
                    console.log(response.data)
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
                            text: response.data.response_message
                        });
                        this.close();
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
        }
    }
}
</script>

<style scoped>

</style>
