<template>
    <v-card>
        <v-toolbar class="mb-5 mt-3" dark color="indigo darken-4">
            <v-btn class="mb-2" icon dark @click.native="close">
                <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
            <v-text-field class="mt-5 rounded-pill" append-icon="mdi-microphone"
                          flat label="Pencarian"
                          prepend-inner-icon="mdi-magnify"
                          v-model="keyword" @keyup="doSearch" solo-inverted>
            </v-text-field>
        </v-toolbar>
        <v-card-text>
            <v-subheader v-if="keyword.length > 0">
                Result Search "{{keyword}}"
            </v-subheader>


        <!--Menampilkan Hasil Pencarian-->
            <v-container class="ma-0 pa-0 mx-auto" grid list-sm>
                <v-layout wrap>
                    <div v-for="(campaign) in campaigns" :key="`campaign-` + campaign.id">
                        <campaign-item :campaign="campaign" @click.native="close" />
                    </div>
                    <v-alert v-if="campaigns.length === 0 && keyword.length > 0" color="warning" class="white--text">
                        Hasil pencarian tidak ditemukan
                    </v-alert>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "Search",
    components: {
        CampaignItem: () => import('./CampaignItem.vue')
    },
    data(){
        return {
            keyword: '',
            campaigns: []
        }
    },
    methods: {
        doSearch(){
            let keyword = this.keyword
            if(keyword.length > 0){
                let url = '/api/campaign/search/' + keyword;
                axios.get(url).then((response) => {
                    let{data} = response.data
                    this.campaigns = data.campaigns
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                this.campaigns = []
            }
        },
        close(){

            this.$emit('closed', false)
        }
    }
}
</script>

<style scoped>

</style>
