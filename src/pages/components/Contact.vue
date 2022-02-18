<template>
    <Navbar />
    <div class="container">
        <div class="mt">
            <div class="row">
                <div v-if="trwindow" class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="msgSendBox">
                        <h4 class="mt-5 mb-2"></h4>
                        <label for="inpName" class="nm">Name:</label>
                        <input v-model="name" type="text" placeholder="Enter your name:">
                        <input v-model="surname" type="text" placeholder="Enter your surname">
                        <input v-model="email" type="email" id="inpEmail" placeholder="Enter email">
                        <label for="inpNumber" class="nm">Phone:</label>
                        <div class="d-flex">
                            <input type="text" id="inpNumber" placeholder="Enter phone number...">
                            <div class="select-items">
                                <select v-model="select" id="inpSelect">
                                    <option selected disabled>Select</option>
                                    <option>I have a question for him</option>
                                    <option>I have an offer for him</option>
                                    <option>I want to connect with him</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="btn-cont">
                            <button @click="sendReq">Send request</button>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="myInform">
                        <div class="myName">
                            <h2>Contact me</h2>
                        </div>
                        <div class="d-flex mt-5">
                            <h6 class="ccontent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-x" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    <path fill-rule="evenodd" d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                Phone:
                                </h6>
                            <p class="ttcontent">+(998) 94-108-09-16</p>
                        </div>
                        <div class="d-flex">
                            <h6 class="ccontent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                </svg>
                                Telegram:
                            </h6>
                            <p class="ttcontent">
                                <a class="ttcontent" href="https://t.me/AOrifjonov" target="__blank">AOrifjonov</a>
                            </p>
                        </div>
                        <div class="d-flex">
                            <h6 class="ccontent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                                </svg>
                                Email:
                            </h6>
                            <p class="ttcontent">
                                <a class="ttcontent" href="mailto:orifjonov0916@gmail.com" target="__blank">orifjonov0916@gmail.com</a>
                            </p>
                        </div>
                        <div class="d-flex">
                            <h6 class="ccontent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                GitHub:
                            </h6>
                            <p class="ttcontent">
                                <a class="ttcontent" href="https://github.com/AOrifjonov" target="__blank">github.com/AOrifjonov</a>
                            </p>
                        </div>
                        <div class="d-flex">
                            <h6 class="ccontent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                Adress:
                            </h6>
                            <p class="ttcontent">
                                Fergana, Beshariq
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>



<script>
import Navbar from '@/pages/components/Navbar.vue';
import Footer from '../Footer.vue';
export default {
    name: 'Contact',
    components: {
        Navbar,
        Footer,
    },

    data() {
        return {
            trwindow: false,
            name: '',
            surname: '',
            email: '',
            select: 'Select',
        }
    },

    methods: {
        sendReq() {

            let name = this.name,
                surname = this.surname,
                email = this.email,
                select = this.select,
                phone = document.getElementById('inpNumber').value;

            const msg = `*Siz bilan ${name} bog'lanmoqchi*:
                            *Familiyasi:* ${surname}              
                            *Email:* ${email}\n                        
                            *Maqsadi:* ${select}\n                     
                            *Telefon:* ${phone}\n                         
                    Afzalbek Orifjonov
                    `;
            const bot = '5211923462:AAHFQVlmGtxy67rr-cwS4tp4kr5ZBw8_hig';
            const url = `https://api.telegram.org/bot${bot}/sendMessage?chat_id=5014288330&text=${msg}&parse_mode=markdown`;
            if (name && surname && email && select && phone) {
                fetch(url)
                localStorage.setItem('contact', 'true');
                this.trwindow = false;
            }
        }
    },

    created() {
        
        if(localStorage.getItem('contact') === 'true') {
            this.trwindow = false;
        } else {
            this.trwindow = true;
        }
    }
}

</script>

<style scoped>
/* Send request */

.mt {
    margin-top: 8rem;
    background: #080d228c;
    margin-bottom: -3rem;
    color: rgb(209, 209, 209);
    font-weight: 600;
    padding: 25px;
    border-radius: 10px;
}

.nm {
    font-size: 20px;
}

.msgSendBox h4 {
    color: #fff;
}

label {
    display: block;
    margin-top: 15px;
}

input {
    width: 49%;
    padding: 14px;
    margin: 0 1px;
    display: inline-block;
    outline: none;
    background: none;
    border: 2px solid rgb(165, 165, 165);
    border-radius: 0 10px 0 10px;
    color: rgb(216, 211, 211);
    font-weight: 600;

}

input:focus {
    background: #061d53;
    border-radius: 10px 0 10px 0;
    color: rgb(214, 214, 214);
    font-weight: 400;
}

.select-items {
    display: inline-block;
}

#inpSelect {
    width: 100%;
    padding: 15px;
    padding-bottom: 17px;
    font-size: 20px;
    background: none;
    outline: none;
    background: none;
    border: 2px solid rgb(131, 131, 131);
    border-radius: 5px;
    color: white;
    background-color: none;
}
#inpSelect option {
    background-color: black;
    font-size: 23px;
}

#inpEmail {
    margin-top: 25px;
    width: 99%;
}

#inpNumber {
    border-top: none;
    border-right: none;
    border-bottom-right-radius: 0;
    border-bottom-width: 3px;
    font-size: 18px;
    width: 60%;
}

.btn-cont {
    margin-top: 40px;
    display: flex;
    width: 90%;
    justify-content: center;
}

.btn-cont button {
    background: none;
    border: 2px solid rgb(112, 109, 109);
    padding: 10px 28px;
    border-radius: 5px;
    font-size: 19px;
    font-weight: 620;
    color: rgb(180, 180, 180);
}

.btn-cont button:hover {
    background: rgb(116, 115, 115);
}

.btn-cont button:active{
    background: red;
}


/* My information */

.ptext img {
    width: 60px;
}

.myInform {
    height: 400px;
    margin-top: 35px;
    border: 2px solid rgb(173, 173, 173);
    border-radius: 5px;
    border-top: none;
    border-right: none;
    border-bottom-right-radius: 0;
    border-bottom-width: 4px;
    border-top-left-radius: 90px;
}

.myName {
    width: 50%;
    display: inline-block;
    margin-top: 1rem;    
    margin-left: 2rem;
    text-align: center;
}
.myName  h2 {
    font-size: 40px;
    font-weight: 530;
    color: rgb(187, 187, 187);
}


.ccontent {
    color: rgb(189, 189, 189);
    font-size: 25px;
    font-weight: 600;
    margin: 0 15px;
}

.ttcontent {
    color: rgb(170, 165, 165);
    font-size: 20px;
    font-weight: 550;
    font-style: italic;
}

@media (max-width: 461px) {
    .mt {
        background: none;
    }
    input {
        width: 99%;
    }
    #inpEmail {
        width: 99%;
    }
    #inpSelect {
        width: 99%;
    }
    .ccontent {
        font-size: 18px;
        margin-bottom: 5px;
    }
    .ccontent svg {
        display: none;
    }
    .ttcontent {
        font-size: 14px;
        margin-bottom: 5px;
    }
}

@media (max-width: 767px) {
    input {
        width: 100%;
    }
    #inpEmail {
        width: 100%;
    }
    #inpSelect {
        width: 100%;
    }
    .ccontent {
        font-size: 18px;
    }
    .ccontent svg {
        display: none;
    }
    .ttcontent {
        font-size: 17px;
    }
}
</style>