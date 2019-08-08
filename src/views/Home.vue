<template>
    <v-container grid-list-xs>
        <v-layout row wrap class="mb-2">
            <v-flex 2xs12 sm6 class="text-xs-center text-sm-center">
                <router-link to="/meetups"><v-btn color="success" large rout>Explore Meetups</v-btn></router-link>
            </v-flex>
            <v-flex 2xs12 sm6 class="text-xs-center text-sm-center">
                <router-link to="/meetup/new"><v-btn color="success" large rout>Organize Meetup</v-btn></router-link>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                    v-for="item in meetups"
                    :key="item.id"
                    :src="item.imageUrl"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="onloadMeetup(item.id)">
                        <div class="title">
                            {{item.title}}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex 2xs12 class="text-xs-center text-sm-center">
                <p>Join our Meetup</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        }
    },
    methods: {
        onloadMeetup(id) {
            this.$router.push('/meetups/'+id)
        }
    },
}
</script>

<style scoped>
    .title{
        position: absolute;
        bottom: 50px;
        background-color: rgb(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: 30px;
    }
</style>