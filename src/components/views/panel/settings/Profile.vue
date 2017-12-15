<template>
    <div>
        <div class="p-a-md b-b _600">User Profile</div>
        <div class="padding">
            <div class="row">
                <!--column 1-->
                <form role="form" class="p-a-md col-md-4">
		          <div class="form-group">
		            <label>First Name</label>
		            <input type="text" class="form-control" v-model="editProfile.first_name">
		          </div>
		          <div class="form-group">
		            <label>Last Name</label>
		            <input type="text" class="form-control" v-model="editProfile.last_name">
		          </div>
		          <div class="form-group">
		            <label>Phone</label>
		            <input type="text" class="form-control"  v-model="editProfile.phone">
		          </div>
                  <button type="button" class="btn btn-info m-t" @click="clkUpdateDetails">Update</button>                  
		        </form>
		        <!--end of column 1-->
		        
		        <!--column 2-->
                <form role="form" class="p-a-md col-md-4">
		          <div class="form-group">
		            <label>Date of Birth</label>
                    <div class="input-group date" data-ui-jp="datetimepicker" data-ui-options="{
                                format: 'YYYY-MM-DD',
                                icons: {
                                time: 'fa fa-clock-o',
                                date: 'fa fa-calendar',
                                up: 'fa fa-chevron-up',
                                down: 'fa fa-chevron-down',
                                previous: 'fa fa-chevron-left',
                                next: 'fa fa-chevron-right',
                                today: 'fa fa-screenshot',
                                clear: 'fa fa-trash',
                                close: 'fa fa-remove'
                                }
                            }">
		                <input type="text" class="form-control has-value" v-model="editProfile.birthday">
                        <div class="bootstrap-datetimepicker-widget"></div>
                        <span class="input-group-addon">
                            <span class="fa fa-calendar"></span>
                        </span>
                    </div>
		          </div>

		          <div class="form-group">
		            <label>Address</label>
		            <input type="text" class="form-control" v-model="editProfile.address">
		          </div>
		          <div class="form-group">
		            <label>Country</label>
		            <select type="text" class="form-control" v-model="editProfile.country_id">
                        <option v-for="country in countries" :key="country.id" :value="country.id">{{country.name}}</option>
                    </select>
		          </div>
		        </form>
		        <!--end of column 2-->
		        
		        <!--column 3 editing profile pciture-->
                <div class="p-a-md col-md-4">
                    <div class="panel panel-default avatar-wrapper">
                        <label v-show="$store.state.showCroppie == true">Profile Picture</label>
                        <div class="croppie-container" v-show="$store.state.showCroppie == false">
                            <label>Profile Picture</label>
                            <div id="holder">

                                <img class="avatar-preview img-circle avatar" :src="$store.state.user.avatar" @error="defaultAvatar">
                                <br>
                                <button class="btn btn-fw white" data-toggle="modal" data-target="#ChangeImgModal">
                                    <i class="fa fa-camera"></i>
                                    &nbsp; Upload Photo
                                </button>  
                            </div>                          
                        </div>
                        <div id="avatar" class="croppie-container" v-show="$store.state.showCroppie == true">
                            <div class="cr-boundary" style="width: 243.54px; height: 240px;">
                                <div id="croppie"></div>
                            </div>
                            <div class="row avatar-controls" style="display: block;">
                                <div class="col-md-6">
                                    <button class="btn btn-block btn-danger" @click="cancelCroppie"><i class="fa fa-times"></i>&nbsp;Cancel</button>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-success btn-block" v-if="!showSaveBtn" @click="saveCroppie"><i class="fa fa-check"></i>&nbsp;Save</button>
                                    <button class="btn btn-success btn-block" v-else><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;Saving</button>
                                </div>                                    
                            </div>
                        </div>
                    </div>
                </div>
                <!--end of column 3-->
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';
import md5 from 'md5';
import axios from 'axios';
import Croppie from 'croppie'

export default {
    data() {
        return {
            baseURL: this.$store.state.settings.app.server,
            config: { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } },
            croppie: null,
            showSaveBtn: false,
            uploadedIMG: '',
            countries: '',
            editProfile: {
                first_name: '',
                last_name: '',
                phone: '',
                country_id: '',
                birthday: '',
                address: '',
            }
        }
    },
    mounted: function(){
        this.countries =  this.$store.state.countries_id
        this.editProfile = this.$store.state.user
        this.uploadedIMG = this.$store.state.uploadedIMG
        if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' })
    },
    methods: {
        // Update User Details
        clkUpdateDetails: function(){
            axios.patch(this.baseURL + '/me/details', this.editProfile, this.config )
            .then((response)=> {

                // show toastr.js notification
                this.$toastr( 'success', "Updated Successfully!")

                // save updated changes to local storage
                this.$store.state.user = response.data                   
            })
            .catch((error) => { this.$toastr('error', error.response.data) })
        },

        // set default image source if 404
        defaultAvatar: function(){
            this.$store.state.user.avatar = '/src/assets/images/profile.png'
        },

        // Call croppie after IMG uploaded & Converted
        setUpCroppie: function() {
            if(this.triggerCroppie == true){
                let el = document.getElementById('croppie')
                this.croppie = new Croppie(el, {
                    viewport: { width: 180, height: 180, type: 'circle' },
                    boundary: { width: 200, height: 200 },
                    showZoomer: true,
                    // enableOrientation: true
                });

                this.croppie.bind({
                    url: this.$store.state.uploadedIMG,
                    orientation: 1
                });
            }
        },

        // click cancel button in croppie
        cancelCroppie: function(){
            this.$store.state.showCroppie = false;
            this.uploadedIMG = '';
            this.croppie.destroy();
            this.showSaveBtn = false;
            
        },

        // click upload button in croppie
        saveCroppie: function(){
            var self = this
            this.showSaveBtn = true

            // get result from croppie
            this.croppie.result('blob','jpeg', false).then(function(res) {

                // send image to server
                axios.put(self.baseURL + '/me/avatar', res, 
                    { headers: {
                        'Content-Type': 'image/jpeg',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                        }
                    })
                    .then((response)=> {
                    
                        // show notif if updated successfully
                        self.$toastr('success','Updated Successfully')

                        // save new result to db
                        self.$store.state.user.avatar = response.data.avatar;

                        // destroy croppie dom instance
                        self.croppie.destroy()

                        // hide croppie and show updated profile image
                        self.$store.state.showCroppie = false;

                    })
                    .catch((error) => {

                        // show notif error response
                        self.$toastr('error',error.response.data)
                        self.showSaveBtn = false
                    })                
            });
        }       
    },
    computed: mapGetters({
      triggerCroppie: 'runCroppie'
      }),
    watch: {
        // watch if file uploaded and run croppie function
        triggerCroppie: {
            handler: function (val) {
                this.setUpCroppie()
            },
            deep:true
        }       
    }
}
</script>

<style scoped>
    /* @media(min-width:991px) {
        .avatar-wrapper .avatar-preview {
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }

    @media(max-width:991px) {
        .avatar-wrapper .avatar-preview {
            margin-bottom: 20px;
        }
    } */
    .avatar-preview {
        width: 140px;
        height: 140px;
    }
    .avatar-wrapper {
    text-align: center;
    }
    .img-circle.avatar {
    border: 2px solid #ccc;
    padding: 2px;
    }
    .boxborder {
    border: 1px solid rgba(0,0,0,.15);
    padding: 2px;
    }
    #avatar.croppie-container {
    padding: 35px 30px 30px;
    }
    .avatar-controls {
    display: none;
    }
    #holder
    {
		align-items: center;
		justify-content: center;
        padding: 8px;
    }
    #holder img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>

