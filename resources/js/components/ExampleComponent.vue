<template>
        <v-col >
            <v-card
                class="mx-auto"
                max-width="344" 
            >
                <v-img
                    v-bind:src="`https://image.tmdb.org/t/p/w500${item.imageUrl}`"
                    height="400px"
                ></v-img>

                <v-card-title>
                    {{item.title}}
                </v-card-title>

                <v-card-subtitle>
                    Avarage Reating: {{item.rating}}
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn text>
                        Share
                    </v-btn>
                    <v-btn
                        color="purple"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon class="blur--text">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </v-col> 
</template>

<script>
    export default {
        data:()=>({
            show: false,
            // list:[],
            // tempList:[]
        }),
        props: {
            item: Object,
        }
        // created() {
        //     let vm = this;
        //     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e7fd9e644511491efdade2c455621de8&language=en-US&page=1')
        //     .then(response => response.json())
        //     .then(data =>{
        //         vm.tempList= data.results;
        //         vm.tempList.forEach(function(element){
        //             var obj = {
        //                 title:element.title,
        //                 rating:element.vote_average,
        //                 imageUrl:element.poster_path,
        //             };
        //             // if(obj.rating < 8.5)
        //             // {
        //             //     vm.list.push(obj)
        //             // }
        //             vm.list.push(obj)
        //         });
        //         console.log(vm.list);
        //     })
        // }
    }
</script>
