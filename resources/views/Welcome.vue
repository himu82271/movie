<template>
        <v-container>
            <v-row>
                <v-col v-for="item in list" :key="item.id">
                    <example :item="item"/>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    import example from '../js/components/ExampleComponent'
    export default {
        components:{
            example
        },
        data:()=>({
            show: false,
            list:[],
            tempList:[]
        }),
        created() {
            let vm = this;
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e7fd9e644511491efdade2c455621de8&language=en-US&page=1')
            .then(response => response.json())
            .then(data =>{
                vm.tempList= data.results;
                vm.tempList.forEach(function(element){
                    var obj = {
                        title:element.title,
                        rating:element.vote_average,
                        imageUrl:element.poster_path,
                    };
                    // if(obj.rating < 8.5)
                    // {
                    //     vm.list.push(obj)
                    // }
                    vm.list.push(obj)
                });
                console.log(vm.list);
            })
        }
    }
</script>

<style scoped>
</style>