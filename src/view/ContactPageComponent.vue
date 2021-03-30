<template>
    <div class="container">
        <b-card>
            <form id="contact-form" method="post" action="contact.php" role="form">

                <div class="messages"></div>

                <div class="controls">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Voornaam *</label>
                                <input id="form_name"
                                       type="text"
                                       name="name"
                                       class="form-control"
                                       placeholder="Voornaam"
                                       required="required"
                                       data-error="Firstname is required.">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Achternaam *</label>
                                <input id="form_lastname" type="text"
                                       name="surname"
                                       class="form-control"
                                       placeholder="Achternaam"
                                       required="required"
                                       data-error="Lastname is required.">
                                <div class="error"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email *</label>
                                <input id="form_email" type="email"
                                       name="email"
                                       class="form-control"
                                       placeholder="adres@mail.com"
                                       required="required"
                                       data-error="Valid email is required.">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea id="form_message"
                                          name="message"
                                          class="form-control"
                                          placeholder="Message for me *"
                                          rows="4"
                                          required="required"
                                          data-error="Please, leave us a message."></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" class="btn btn-success btn-send" value="Send message">
                        </div>
                    </div>
                </div>
            </form>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "ContactPageComponent"
    }
</script>

<style scoped>
    .form-group{
        text-align: left;
    }
    label{
        padding-left: 4px;
    }
</style>