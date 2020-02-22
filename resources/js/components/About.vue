<template>
        <!-- About -->
    <section class="page-section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image">
                                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>December 2012</h4>
                                    <h4 class="subheading">This shows the Writing on left because li is not inverted</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li v-if class="timeline-inverted" v-for="(obj, key) in aboutJSON" :key="key">
                            <div class="timeline-image">
                                <img class="rounded-circle img-fluid" v-bind:src="obj.img" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>{{ obj.date }}</h4>
                                    <h4 class="subheading">{{ obj.title }}</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted"> {{ obj.content }} </p>
                                </div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <h4>Continuously
                                    <br>Learning
                                    <br>More!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
        data: () => ({
        aboutJSON: [
            {
                img: '../../img/portfolio/01-thumbnail.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                date: '2015-2018',
                title: 'Texas State University'
            },
            {
                img: '../../img/portfolio/01-thumbnail.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                date: 'June 2018',
                title: 'Samsung Austin Semiconductor Engineer'
            },
            {
                img: '../../img/portfolio/01-thumbnail.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                date: 'April 2019',
                title: 'Learning Python'
            },
            {
                img: '../../img/portfolio/01-thumbnail.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                date: 'November 23, 2019',
                title: 'Marry the love of my life Amy'
            },
            {
                img: '../../img/portfolio/01-thumbnail.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                date: 'December 2019',
                title: 'Begin Working on Full stack Developement'
            },
        ]
    })
    
}
</script>

<style scoped>

</style>