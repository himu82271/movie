<template>
    <div class="container">
        <div class="card" v-for="item in list" :key="item.id" >
            <div class="card-header"><img v-bind:src="`https://image.tmdb.org/t/p/w200${item.imageUrl}`"></div>

            <div class="card-body">
                {{item.title}}
            </div>
        </div>   
    </div>
</template>

<script>
    export default {
        data:()=>({
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
                    if(obj.rating < 8.5)
                    {
                        vm.list.push(obj)
                    }
                });
                console.log(vm.list);
            })
        }
    }
</script>
