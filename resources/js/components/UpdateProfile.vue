<template>
    <v-card>
        <v-card-title>
            <v-btn icon @click.native="close">
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
            Update Profile
        </v-card-title>
        <v-card-text>
            <v-form ref="form" @submit="update" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :rules="nameRules"
                              label="Name" required append-icon="mdi-account" solo-inverted>
                </v-text-field>
                <v-text-field v-model="address" :rules="addressRules"
                              label="Alamat" required append-icon="mdi-home" solo-inverted>
                </v-text-field>
                <v-text-field v-model="occupation" :rules="occupationRules"
                              label="Pekerjaan" required append-icon="mdi-briefcase" solo-inverted>
                </v-text-field>
                <v-text-field v-model="phone" :rules="phoneRules"
                              label="Nomor Telepon" required append-icon="mdi-phone" solo-inverted>
                </v-text-field>
                <label for="inputFileUpload">Photo Profile : </label>
                <input type="file" name="filename" :rules="photoRules" accept="image/*, application/json"
                       id="inputFileUpload" v-on:change="onChange">
                <div class="text-xs-center">
                    <v-btn type="submit" color="red darken-2" :disabled="!valid" class="white--text mt-3">
                        Save
                    </v-btn>
                </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "UpdateProfile",
    data() {
        return {
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name Required',
                v => (v && v.length >= 4) || 'Min 4 Characters'
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'Phone Required',
                v => /([0-9])+/.test(v) || 'Phone must be numeric',
                v => (v && v.length <= 12) || 'Max 12 Characters'
            ],
            address: '',
            addressRules: [
                v => !!v || 'Address Required',
            ],
            occupation: '',
            occupationRules: [
                v => !!v || 'Occupation Required',
            ],
            photo: '',
            photoRules: [
                v => !v || !v.some(file => file.size > 2e6) || 'Avatar size should be less than 2 MB!'
            ],

        }
    },
    computed: {
        ...mapGetters({
            currentUser: 'auth/user',
        }),
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
        }),
        close() {
            this.$emit('closed', false);
        },
        onChange(e) {
            this.photo = e.target.files[0];
            console.log(e.target.files[0]);
        },
        update(e) {
            e.preventDefault();
            if (this.$refs.form.validate()) {

                let formData = new FormData();
                formData.append("name", this.name);
                formData.append("address", this.address);
                formData.append("occupation", this.occupation);
                formData.append("phone", this.phone);
                formData.append("photo", this.photo);


                let url = '/api/profile/update-profile';
                axios.post(url, formData, {
                    headers: {
                        'Authorization': `Bearer ${this.currentUser.token}`,
                    }
                }).then((response) => {
                    let codeResponse = response.data.response_code;
                    if (codeResponse === "00") {
                        this.setAlert({
                            status: true,
                            color: 'primary',
                            text: response.data.response_message
                        });
                        this.close();
                        window.location.reload();
                    }
                }).catch((error) => {
                    let responses = error.response;
                    this.setAlert({
                        status: true,
                        text: responses.data.message,
                        color: 'error'
                    });
                    console.log(responses.data)
                })
            }
        }
    },
    created(){
        this.name = this.currentUser.user.name
        this.address = this.currentUser.user.address
        this.occupation = this.currentUser.user.occupation
        this.phone = this.currentUser.user.phone
        this.photo = this.currentUser.user.photo
    }
}
</script>

<style scoped>

</style>
