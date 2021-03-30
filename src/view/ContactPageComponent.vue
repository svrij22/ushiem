<template>
    <div>

        <!--Head image-->
        <head-image :imgsrc="require('../assets/aanleg.jpg')">
            <head-text text="Us Hiem Hoveniers" size="0.5" max="65"/>
        </head-image>


        <div class="container mt-5">
            <div class="row">
                <div class="info-text col-lg-6">
                    <h1>Neem geheel vrijblijvend contact op</h1>
                    <h5 class="mb-4">
                        Heeft u plannen voor een nieuwe tuin?<br>
                        En wilt u weten wat wij voor u kunnen betekenen?<br>
                        Dan horen wij dat graag!
                    </h5>
                    <contact-card/>
                </div>
                <b-card class="col-lg-6">
                    <form id="contact-form" @submit="onSubmit">

                        <div class="controls">
                            <div class="form-group">
                                <label>Voornaam *</label>
                                <input id="form_name"
                                       v-model="form.voornaam"
                                       type="text"
                                       name="name"
                                       class="form-control"
                                       placeholder="Voornaam"
                                       required="required"
                                       data-error="Firstname is required.">
                            </div>
                            <div class="form-group">
                                <label>Achternaam *</label>
                                <input id="form_lastname" type="text"
                                       name="surname"
                                       v-model="form.achternaam"
                                       class="form-control"
                                       placeholder="Achternaam"
                                       required="required"
                                       data-error="Lastname is required.">
                                <div class="error"></div>
                            </div>
                            <div class="form-group">
                                <label>Email *</label>
                                <input id="form_email" type="email"
                                       v-model="form.email"
                                       name="email"
                                       class="form-control"
                                       placeholder="adres@mail.com"
                                       required="required"
                                       data-error="Valid email is required.">
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Uw plannen voor uw tuin</label>

                                        <textarea id="form_message"
                                                  name="message"
                                                  v-model="form.message"
                                                  class="form-control"
                                                  placeholder=""
                                                  rows="4"
                                                  required="required"
                                                  data-error="Please, leave us a message."></textarea>
                                    </div>
                                </div>
                                <input type="submit" class="ml-3 btn btn-success btn-send" value="Send message">
                            </div>
                        </div>
                    </form>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadImage from "@/components/HeadImage";
    import HeadText from "@/components/HeadText";
    import ContactCard from "@/components/ContactCard";
    import axios from 'axios';
    import * as querystring from "querystring";

    export default {
        name: "ContactPageComponent",
        components: {ContactCard, HeadText, HeadImage},
        data(){
            return {
                form: {}
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                axios.post("mail.php", querystring.stringify(this.form))
                    .then(res => {
                        this.sent = true;
                        console.log(res)
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-group{
        text-align: left;
    }
    label{
        padding-left: 4px;
    }

    .info-text{
        text-align: left;
        & h1{
             color: #4c0000!important;
         }
    }
</style>