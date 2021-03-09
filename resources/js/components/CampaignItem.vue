<template>
    <v-hover v-slot:default="{ hover }">
        <v-card :to="'/campaign/' + campaign.id" :elevation="hover ? 15 : 2" max-width="370" class="pa-3 mb-4 mr-5 rounded-lg" style="text-decoration: none;">
            <v-img :src="campaign.image" max-height="200px" class="rounded-lg">
                <template v-slot:placeholder>
                    <v-skeleton-loader type="image"></v-skeleton-loader>
                </template>
            </v-img>

            <v-card-title class="subtitle-1"><strong>{{titleLimit}}</strong></v-card-title>
            <v-progress-linear class="rounded-pill" color="indigo darken-4" height="15" :value="progress" striped><strong class="white--text">{{progress}}%</strong></v-progress-linear>
            <v-card-text>
                <v-icon>mdi-cash</v-icon> &nbsp;
                <b>Rp{{campaign.required.toLocaleString('id-ID')}}</b>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "campaign-item",
        props: ['campaign'],
        computed: {
            progress(){
                return Math.round(this.campaign.collected / this.campaign.required * 100)
            },
            titleLimit(){
                if(this.campaign.title.length > 33){
                    return this.campaign.title.substring(0,33) + '...'
                } else {
                    return this.campaign.title
                }
            }
        }

    }
</script>

<style scoped>

</style>
