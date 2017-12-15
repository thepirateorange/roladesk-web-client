<template>
  <div>
    <div class="p-a-md b-b _600">Login Details</div>
      <div class="padding">
         <div class="row">
            <form role="form" class="p-a-md col-md-6">
                <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="editAuth.email">
                </div>
                <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="editAuth.username">
                </div>
                <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" placeholder="Leave field blank if you don't want to change it">
                </div>
                <div class="form-group">
                <label>Confirm Password</label>
                <input type="text" class="form-control" placeholder="Leave field blank if you don't want to change it">
                </div>
                <button type="button" class="btn btn-info m-t" @click="clckUpdateAuth">Update</button>
            </form>
        </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {

    data() {
        return {
            baseURL: this.$store.state.settings.app.server,
            config: { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") }},
            editAuth: {
                email: '',
                username: '',
                password: '',
                confirm_password: '',
            }
        }
    },
    mounted: function(){
        this.editAuth.email = this.$store.state.user.email
        this.editAuth.username = this.$store.state.user.username
        if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' })       
    },
    methods: {
        
        // Update login details
        clckUpdateAuth: function(){
            // http PATCH request to update login details
            axios.patch( this.baseURL + '/me/details', this.editAuth, this.config)
            .then((response)=> {

                    // show toastr.js notification
                    this.$toastr('success', "Updated Successfully!")

                    // save updated changes to local storage
                    this.$store.state.user.email = response.data.email;
                    this.$store.state.user.username = response.data.username;
                    // localStorage.email = response.data.email;
                    // localStorage.username = response.data.username;
            })
            .catch((error) => { this.$toastr('error', error.response.data) })
        }
    }
}
</script>
