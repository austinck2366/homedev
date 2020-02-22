<template>

</template>

<script>

    export default {
        data() {
            return {
                posts: [],
                post: {
                    id: '',
                    title: '',
                    body: ''
                },
                post_id: '',
                pagination: {},
                edit: false
            };
        },

        makeJsonObject(data) {
            if(typeof data == 'string') {
                return JSON.parse(data)
            }
            return data
        },

        created() {
            this.fetchPosts();
        },

        methods : {
            fetchPosts() {
                fetch('App/Post')
                    .then()
            }
        }

    }

</script>

<style scoped>
</style>
