<template>
    <div>
        <h1>{{item.title + "test"}}</h1>
        <p @click="toggle = ! toggle">Details</p>
        <p v-if="toggle">
            {{item.description}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Accordion",
        props: ["item"],
        data: function () {
            return {
                toggle: false
            }
        }
    };
</script>
