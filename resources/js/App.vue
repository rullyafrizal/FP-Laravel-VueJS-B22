<template>
    <!-- App.vue -->
    <v-app>
    <!-- SnackBar -->
    <alert/>

<!--        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">-->
<!--            <Search @closed="closeDialog"/>-->
<!--        </v-dialog>-->

        <keep-alive>
            <v-dialog v-model="dialog" fullscreen hide-overlay persistent transition="dialog-bottom-transition">
                <component :is="currentComponent" @closed="setDialogStatus"></component>
            </v-dialog>
        </keep-alive>

        <!--Sidebar -->
        <v-navigation-drawer app v-model="drawer">
            <v-list>
                <v-list-item v-if="!guest">
                    <v-list-item-avatar>
                        <v-img :src="user.user.photo"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{user.user.name}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <div class="pa-2" v-if="guest">

                    <v-btn block color="primary" class="mb-1 rounded-pill" @click="setDialogComponent('Login')">
                        <v-icon left>mdi-lock</v-icon>
                        Login
                    </v-btn>
                    <v-btn block color="success" class="mb-1 rounded-pill">
                        <v-icon left>mdi-account</v-icon>
                        Register
                    </v-btn>
                </div>

                <v-divider></v-divider>

                <v-list-item v-for="(item, index) in menus" :key="`menu-` + index" :to="item.route">
                    <v-list-item-icon>
                        <v-icon left>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append v-if="!guest">
                    <div class="pa-2">
                        <v-btn block color="red" class="rounded-pill" @click="logout" dark>
                            <v-icon left>mdi-lock</v-icon>
                            Logout
                        </v-btn>
                    </div>
            </template>
        </v-navigation-drawer>

        <!--Header-->
        <v-app-bar app color="indigo darken-4" dark v-if="isHome">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title><strong>Equifund</strong></v-toolbar-title>

        <!--Pemisah Konten-->
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-badge :content="transactions" :value="transactions" color="red" overlap>
                    <v-icon>mdi-cash-multiple</v-icon>
                </v-badge>
            </v-btn>

            <v-text-field @click="setDialogComponent('Search')" class="mb-5 rounded-pill"
                          slot="extension" hide-details append-icon="mdi-microphone"
                          flat label="Pencarian" prepend-inner-icon="mdi-magnify"
                          solo-inverted>
            </v-text-field>
        </v-app-bar>

        <v-app-bar app color="indigo darken-4" dark v-else>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn icon @click.stop="$router.go(-1)">
                <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
            <v-toolbar-title><strong>Equifund</strong></v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-badge :content="transactions" :value="transactions" color="red" overlap>
                    <v-icon>mdi-cash-multiple</v-icon>
                </v-badge>
            </v-btn>
        </v-app-bar>

        <!--content -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <v-slide-y-transition>
                    <router-view></router-view>
                </v-slide-y-transition>
            </v-container>
        </v-main>

        <v-footer padless>
            <v-col class="text-center" cols="12">
                &copy;{{ new Date().getFullYear() }} — <strong>Equifund</strong> — by Rully Afrizal Alwin
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Alert from './components/Alert.vue'

export default {
    name: 'App',
    components: {
        Alert,
        Search : () => import('./components/Search.vue'),
        Login: () => import('./components/Login.vue')
    },
    data: () => ({
        drawer: false,
        menus: [
            {
                title: 'Home',
                icon: 'mdi-home',
                route: '/'
            },
            {
                title: 'Campaigns',
                icon: 'mdi-hand-heart',
                route: '/campaigns'
            },
        ],
    }),
    computed: {
        isHome(){
            return (this.$route.path === '/' || this.$route.path === '/home');
        },
        ...mapGetters({
            'transactions' : 'transactions/transactions',
            guest: 'auth/guest',
            user: 'auth/user',
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
            setDialogStatus: 'dialog/setStatus',
            setDialogComponent: 'dialog/setComponent',
            setAuth: 'auth/set',
            setAlert: 'alert/set'
        }),
        logout(){
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.user.token
                }
            }
            axios.post('/api/auth/logout', {}, config).then((response) => {
                this.setAuth({})
                this.setAlert({
                    status: true,
                    color: 'success',
                    text: 'Successfully Logout'
                })
            }).catch((error) => {
                let{data} = error.response
                this.setAlert({
                    status: true,
                    color: 'error',
                    text: data.message
                })
            })
        }
    }
}

</script>

<style scoped>

</style>
