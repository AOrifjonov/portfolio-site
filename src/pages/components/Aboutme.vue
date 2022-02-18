<template>
    <Navbar />
    <div class="container">
        <div class="about-me-custom">

            <div class="row">
                <div class="col">
                    <div class="myLife">
                        <div class="me mb-2">
                            <h4 class="text-center">Afzalbek Orifjonov</h4>
                            <p>
                                Hey, My name is Afzalbek. I am Front-end devoloper. My age is 17.
                                I am a school student and shall finish school next year. 
                                I've been learning programming for 2 years.
                            </p>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="col-12">
                    <div class="photoFlex">
                        <img class="photo2" src="@/assets/work.jpeg" alt="photo">
                    </div>
                    <div class="me me2">
                        <h4 class="text-center">Im middle Front-End devoloper</h4>
                        <p>
                            Without doubt,  I can say I am an intermediate programmer that I have studied the Front-End direction since many 
                            years and have gained a lot of experience. I have tried to study perfectly the technologies 
                            that fall into this field. I learned HTML, CSS, BOOTSTRAP, SASS, JAVASCRIPT technology and many other libraries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <Footer/>
</template>

<script>
import Navbar from '@/pages/components/Navbar.vue'
import Footer from '../Footer.vue'
export default {
    name: 'aboutme',
    components: {
        Navbar,
        Footer,
    },
}
</script>

<style scoped>



.about-me-custom {
    margin-top: 7rem;
    background: rgb(24, 24, 24);
    padding: 30px;
    margin-bottom: -5rem;
}



.me p {
    font-size: 18px;
    color: rgb(204, 202, 202);
}

.me h4 {
    margin-top: 2rem;
    font-weight: 550;
    color: rgb(231, 231, 231);
    font-style: oblique;
}

.photo2 {
    width: 90%;
    border-radius: 10px;
}


.photoFlex {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.me2 {
    margin-top: 6rem;
}


hr {
    width: 97%;
    height: 4px;
    color: white;
    margin: 2rem 0;
}

@media (max-width: 990px) {
    .me {
        margin: 2rem;
    }
}

@media (min-width: 990px) {
    .me2 p {
        margin: 0 4rem;
    }

    .me {
        margin: 2rem;
    }

    .myLife {
        margin: 3rem 7rem;
    }
}
</style>
