 <template>
    <div class="container">
        <div class="row justify-content-center">
            <h1>User profile</h1>
        </div>
    </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next) { 
        if ( ! localStorage.getItem('jwt')) {
            return next('login')
        }

        next()
    }
}
</script>