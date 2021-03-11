<template>
    <v-container>

        <v-card elevation="2" class="pa-2 rounded-lg" tile-outlined>
            <v-toolbar dark color="indigo darken-4">
                <v-btn icon @click.stop="$router.go(-1)">
                    <v-icon>mdi-arrow-left-circle</v-icon>
                </v-btn>
                <v-toolbar-title><strong>Profile</strong></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="setDialogComponent('UpdateProfile')">
                    <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="4" md="4">
                        <v-img :src="profile.photo" class="rounded-circle mx-auto" style="object-fit: cover;" max-width="225" max-height="225">
                            <template v-slot:placeholder>
                                <v-skeleton-loader type="image"></v-skeleton-loader>
                            </template>

                        </v-img>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                        <v-simple-table>
                            <tbody>
                            <tr>
                                <td><v-icon>mdi-account</v-icon> Nama</td>
                                <td>{{profile.name}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-email</v-icon> Email</td>
                                <td>{{profile.email}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-home</v-icon> Alamat</td>
                                <td>{{profile.address}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-briefcase</v-icon> Pekerjaan</td>
                                <td>{{profile.occupation}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-phone</v-icon> Telepon</td>
                                <td class="blue--text">{{profile.phone}}</td>
                            </tr>
                            </tbody>
                        </v-simple-table>
                    </v-col>
                </v-row>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Profile",
    components: {
        UpdateProfile : () => import('../components/UpdateProfile.vue')
    },
    data: () => ({
        profile: {} //objek profile
    }),
    created(){
        this.go()
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
        }),
        go(){
            if(this.currentUser.token.length > 0){
                let url = '/api/profile/get-profile'
                axios.get(url, {headers: {
                    'Authorization': `token ${this.currentUser.token}`
                }}).then((response) => {
                    let{data} = response.data;
                    this.profile = data.profile;
                }).catch((error) => {
                    let{responses} = error
                    console.log(responses)
                })
            }
        },
    },
}
</script>

<style scoped>

</style>
