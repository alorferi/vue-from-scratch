import Vue from 'vue';
import Accordion from './components/Accordion/Accordion'
import List from './components/List'

new Vue({
    el: "#app-5",
    components:{
        List
    },
    data: {

    }
})


new Vue({
    el: "#app",
    components:{
        Accordion
    },
    data: {
        items: [
            {id: 1, title: "Title 1", description: "This is description 1"},
            {id: 2, title: "Title 2", description: "This is description 2"},
            {id: 3, title: "Title 3", description: "This is description 3"},
            {id: 4, title: "Title 4", description: "This is description 4"},
            {id: 5, title: "Title 5", description: "This is description 5"}
        ]
    }
})