<template>
	<div>
		<!-- ############ PAGE START-->
		<div class="row-col">
		  <div class="col-sm-3 col-lg-2 b-r">
		    <div class="p-y">
		      <div class="nav-active-border left b-primary">
		        <ul class="nav nav-sm">
		          <li class="nav-item">
		            <a :class="[{ 'active':  this.$store.state.activetabs == 1 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-1">Profile</a>
		          </li>
		          <li class="nav-item">
		            <a :class="[{ 'active':  this.$store.state.activetabs == 2 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-2">Account Settings</a>
		          </li>
		          <!-- <li class="nav-item">
		            <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-3">Emails</a>
		          </li>
		          <li class="nav-item">
		            <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-4">Notifications</a>
		          </li>
		          <li class="nav-item">
		            <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-5">Security</a>
		          </li> -->
		        </ul>
		      </div>
		    </div>
		  </div>
		  <div class="col-sm-9 col-lg-10 light bg">
		    <div class="tab-content pos-rlt">
		    	
		    	<!--tab 1 - profile-->
		      <div :class="[{ 'active':  this.$store.state.activetabs == 1 }, 'tab-pane']" id="tab-1">
					<profile></profile>
					</div>
				<!--end of tab 1-->
				
				<!--tab 2 account settings-->
		      <div :class="[{ 'active':  this.$store.state.activetabs == 2 }, 'tab-pane']" id="tab-2">
					<account-settings></account-settings>
		      </div>
		      	<!--end of tab 2-->
		      
		      <div class="tab-pane" id="tab-3">
		        <div class="p-a-md b-b _600">Emails</div>
		        <form role="form" class="p-a-md col-md-6">
		          <p>E-mail me whenever</p>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone posts a comment
		            </label>
		          </div>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone follow me
		            </label>
		          </div>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone send me a message
		            </label>
		          </div>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone invite me to group
		            </label>
		          </div>
		          <button type="submit" class="btn btn-info m-t">Update</button>
		        </form>
		      </div>
		      <div class="tab-pane" id="tab-4">
		        <div class="p-a-md b-b _600">Notifications</div>
		        <form role="form" class="p-a-md col-md-6">
		          <p>Notice me whenever</p>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone seeing my profile page
		            </label>
		          </div>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone follow me
		            </label>
		          </div>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone send me a message
		            </label>
		          </div>
		          <div class="checkbox">
		            <label class="ui-check">
		              <input type="checkbox"><i class="dark-white"></i> Anyone invite me to group
		            </label>
		          </div>
		          <button type="submit" class="btn btn-info m-t">Update</button>
		        </form>
		      </div>
		      <div class="tab-pane" id="tab-5">
		        <div class="p-a-md b-b _600">Security</div>
		        <div class="p-a-md">
		          <div class="clearfix m-b-lg">
		            <form role="form" class="col-md-6 p-a-0">
		              <div class="form-group">
		                <label>Old Password</label>
		                <input type="password" class="form-control">
		              </div>
		              <div class="form-group">
		                <label>New Password</label>
		                <input type="password" class="form-control">
		              </div>
		              <div class="form-group">
		                <label>New Password Again</label>
		                <input type="password" class="form-control">
		              </div>
		              <button type="submit" class="btn btn-info m-t">Update</button>
		            </form>
		          </div>

		          <p><strong>Delete account?</strong></p>
		          <button type="submit" class="btn btn-danger m-t" data-toggle="modal" data-target="#modal">Delete Account</button>

		        </div>
		      </div>
		    </div>
		  </div>
		</div>

		<!-- .modal -->
		<div id="modal" class="modal fade animate black-overlay" data-backdrop="false">
		  <div class="row-col h-v">
		    <div class="row-cell v-m">
		      <div class="modal-dialog modal-sm">
		        <div class="modal-content flip-y">
		          <div class="modal-body text-center">
		            <p class="p-y m-t"><i class="fa fa-remove text-warning fa-3x"></i></p>
		            <p>Are you sure to delete your account?</p>
		          </div>
		          <div class="modal-footer">
		            <button type="button" class="btn white p-x-md" data-dismiss="modal">No</button>
		            <button type="button" class="btn btn-danger p-x-md" data-dismiss="modal">Yes</button>
		          </div>
		        </div><!-- /.modal-content -->
		      </div>
		    </div>
		  </div>
		</div>
		<!-- / .modal -->

		<!-- upload modal -->
		<div class="modal fade" id="ChangeImgModal" tabindex="1" role="dialog" aria-labelledby="ChangeImgModal" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<div class="row">
							<div class="col-md-4 avatar-source">
								<img src="/src/assets/images/profile.png" alt="..." class="img-circle" @click="clckNoPhoto" data-dismiss="modal">
								<h6>No Photo</h6>	
							</div>
							<div class="col-md-4 avatar-source">
								<div class="btn btn-default btn-upload">
									<i class="fa fa-upload"></i>
									<input type="file" name="avatar" id="inputFileToLoad" v-on:change="clckUploadPhoto">															
								</div>
								<h6>Upload Photo</h6>	
							</div> 																													 
							<div class="col-md-4 avatar-source ">
								<img :src="gravatarFullPath" class="img-circle" alt="..." @click="clckGravatar" data-dismiss="modal">
								<h6>Gravatar</h6>
							</div>                    
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- / end of upload modal -->
		<!-- ############ PAGE END-->
	</div>
</template>

<script>

import Profile from './Profile.vue'
import AccountSettings from './AccountSettings.vue'
import md5 from 'md5';
import axios from 'axios';

export default {
	// sets meta title
	name: 'account',
	metaInfo: {
	title: 'Roladesk' + ' | Account',
	// override the parent template and just use the above title only
	titleTemplate: null
	},
    data: function() {
		return {
			'gravatarFullPath': '',
			'uploaded': false,
			'baseURL': this.$store.state.settings.app.server ,
			'gratarBaseUrl':  'https://www.gravatar.com/avatar/',
			'noPhotoData': { url: 'https://demo.vanguardapp.io/assets/img/profile.png'},
			'config': { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") }}
        }
    },
	components: {
		Profile, AccountSettings
	},
	mounted: function () {
		this.$store.state.pageTitle = 'Account';
		this.gravatarFullPath = this.gratarBaseUrl + md5(this.$store.state.user.email.trim().toLowerCase()) + '?s=200';
		if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' });
		},
	methods: {

		// No Photo
		clckNoPhoto: function () {
			axios.put(this.baseURL + '/me/avatar/external', this.noPhotoData , this.config )
			.then((response)=> {

				// show notif if succesfull
				this.$toastr('success', "Updated Successfully!")

				// saving updated avatar
				this.$store.state.user.avatar = response.data.avatar

			})
			.catch((error) => {

				// show notif if error
				this.$toastr('error', error.response.data)
			})
		},

	    //Upload & Convert Image to base64
	    clckUploadPhoto: function () {
	
	        var self = this
	        
	        // get input fil to load
	        var filesSelected = document.getElementById("inputFileToLoad").files;
	        
	        // check if file selected
	        if (filesSelected.length > 0) {
	            var fileToLoad = filesSelected[0];
	            var fileReader = new FileReader();
	        		fileReader.onload = function(event) {
	
											//save base 64 result file
								self.$store.state.uploadedIMG = event.target.result;
				
								// hide modal
								$("#ChangeImgModal").modal('hide');
				
								// trigger croppie to show
								self.$store.state.showCroppie = true;
				
										};
	            
	            // this is important
	            fileReader.readAsDataURL(fileToLoad);
	        }
		},
			
		// Upload Gravatar
		clckGravatar: function () {
			axios.put(this.baseURL + '/me/avatar/external', { url: this.gravatarFullPath} , this.config )
			.then((response)=> {

				// saving updated avatar
				this.$store.state.user.avatar = response.data.avatar

				// show notif if succesfull
				this.$toastr('success', "Updated Successfully!");
	
			})
			.catch((error) => { this.$toastr('error', error.response.data) })
		} 
	}
}
</script>

<style scoped>
	.avatar-source {
			text-align: center;
	}
	.avatar-source img {
			width: 120px;
	}
	.avatar-source img:hover,
	.avatar-source div:hover {
			background-color: #fff;
			border: 2px solid #555;
			cursor: pointer;
	}
	.avatar-source p {
			margin: 5px 0 0 0;
			font-weight: bold;
	}
	.img-circle.avatar {
    border: 2px solid #ccc;
    padding: 2px;
	}
	.list-group-item img.img-circle {
			height: 30px;
	}
	.btn-upload {
			width: 120px;
			height: 120px;
			padding: 6px 0;
			border-radius: 50%;
			text-align: center;
			line-height: 1.428571429;
			font-size: 65px;
			color: #ccc;
	}
	.btn-upload {
			position: relative;
			overflow: hidden;
	}

	.btn-upload input[type=file] {
			position: absolute;
			top: 0;
			right: 0;
			min-width: 100%;
			min-height: 100%;
			font-size: 100px;
			text-align: right;
			filter: alpha(opacity=0);
			opacity: 0;
			outline: none;
			background: white;
			cursor: inherit;
			display: block;
	}
</style>
