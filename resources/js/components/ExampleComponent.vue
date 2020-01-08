<template>
    <div class="container">
        <div class="card" v-for="item in list" :key="item.id" >
            <div class="card-header">{{item.name}}</div>

            <div class="card-body">
                {{item.email}}
            </div>
        </div>   
    </div>
</template>

<script>
    export default {
        data:()=>({
            list:[]
        }),
        created() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>{
                this.list= data;
            })
        }
    }
</script>
