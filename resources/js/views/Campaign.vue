<template>
    <div>
        <v-card elevation="1" class="pa-2 mr-2 rounded-xl" tile outlined>
            <v-img :src="campaign.image" class="white--text rounded-xl" max-height="400px">
                <v-card-title class="fill-height align-end" v-text="campaign.title"></v-card-title>
                <template v-slot:placeholder>
                    <v-skeleton-loader type="image"></v-skeleton-loader>
                </template>
            </v-img>
            <v-card-text>
                Description: <br> {{campaign.description}}
            </v-card-text>
        </v-card>
        <v-card elevation="2" class="pa-2 mt-3 rounded-xl" tile-outlined>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th class="text-left"><h3>Detail</h3></th>
                            <th>  </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-home-city</v-icon> Alamat</td>
                            <td>{{campaign.address}}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-phone</v-icon> Telepon</td>
                            <td>{{campaign.phone}}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-hand-heart</v-icon> Terkumpul</td>
                            <td class="blue--text">Rp{{campaign.collected.toLocaleString('id-ID')}}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-cash</v-icon> Dibutuhkan</td>
                            <td class="orange--text">Rp{{campaign.required.toLocaleString('id-ID')}}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-progress-check</v-icon> Progress</td>
                            <td class="orange--text">
                                <v-progress-linear class="rounded-pill" color="indigo darken-4" height="15" :value="progress(campaign)" striped><strong class="white--text">{{progress(campaign)}}%</strong></v-progress-linear>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
            <v-card-actions>
                <v-btn block color="primary" class="rounded-pill" @click="donate" :disabled="campaign.collected >= campaign.required">
                    <v-icon>mdi-money</v-icon> &nbsp;
                    DONATE
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {

    name: "Campaign",
    data: () => ({
        campaign: {} //objek campaign
    }),
    created(){
        this.go()
    },
    methods: {
        go(){
            let{id} = this.$route.params
            let url = '/api/campaign/' + id
            axios.get(url).then((response) => {
                let{data} = response.data
                this.campaign = data.campaign
            }).catch((error) => {
                let{responses} = error
                console.log(responses)
            })
        },
        ...mapMutations({
            tambahTransaksi : 'transactions/insert'
        }),
        ...mapActions({
            setAlert: 'alert/set'
        }),
        donate(){
            this.tambahTransaksi();
            this.setAlert({
                status: true,
                color: 'success',
                text: 'Transaksi Ditambahkan'
            })
        },
        progress(campaign){
            return Math.round(campaign.collected / campaign.required * 100)
        }
    }
}
</script>

<style scoped>

</style>
