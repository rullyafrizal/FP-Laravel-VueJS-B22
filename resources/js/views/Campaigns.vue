<template>
    <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
        <v-subheader>
            All Campaigns
        </v-subheader>

        <v-layout wrap>
            <v-flex xs3 v-for="(campaign,index) in campaigns" :key="`campaign-` + campaign.id">
                <campaign-item :campaign="campaign"/>
            </v-flex>
        </v-layout>

        <v-pagination v-model="page" @input="go" :length="lengthPage" :total-visible="6"></v-pagination>

    </v-container>
</template>

<script>
import CampaignItem from "../components/CampaignItem";
export default {
    name: "Campaigns",
    components: {CampaignItem},
    data: () => ({
        campaigns: [],
        page: 0,
        lengthPage: 0
    }),
    created(){
        this.go()
    },
    methods: {
        go(){
            let url = 'api/campaign?page=' + this.page;
            axios.get(url).then((response) => {
                let{data} = response.data;
                this.campaigns = data.campaigns.data;
                this.page = data.campaigns.current_page;
                this.lengthPage = data.campaigns.last_page;
            }).catch((error) => {
                let{responses} = error;
                console.log(responses);
            })
        }
    },
    computed: {

    }
}
</script>

<style scoped>

</style>
