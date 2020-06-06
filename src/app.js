import Vue from 'vue';

window.axios = require('axios');

new Vue({
    el: "#app",
    components:{

    },
    mounted: function(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response=> this.posts = response.data)
            .catch(error=> this.posts = [{title:error.message}])
            .finally(()=>console.log("Data loading complete."))
    },
    data: {
        posts: null,
    }
})