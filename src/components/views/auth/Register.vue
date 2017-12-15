<template>
	<div>
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
				<div class="box">
					<div class="box-body">
						<div class="p-a-md">
						    <div>
						        <a href="#" class="btn btn-block indigo text-white m-b-sm">
									<i class="fa fa-facebook pull-left"></i>
									Sign up with Facebook
								</a>
						        <a href="#" class="btn btn-block red text-white">
									<i class="fa fa-google-plus pull-left"></i>
									Sign up with Google+
								</a>
						    </div>

						    <div class="m-y text-sm text-center">
						        OR
						    </div>

						    <form name="form">

								<div class="form-group">
									<input type="email" class="form-control" placeholder="Email" v-model="registerDetails.email" required>								
								</div>

						        <div class="form-group">
						            <input type="text" class="form-control" placeholder="Username" v-model="registerDetails.username" required>
								</div>

						        <div class="form-group">
						            <input type="password" class="form-control" placeholder="Password" v-model="registerDetails.password" required>
								</div>

						        <div class="form-group">
						            <input type="password" class="form-control" placeholder="Confirm Password" v-model="registerDetails.password_confirmation" required>
								</div>

						        <div class="m-b-md text-sm text-center">
						            <span class="text-muted">By clicking Sign Up, I agree to the</span>
						            <a href="#">Terms of service</a>
						            <span class="text-muted">and</span>
						            <a href="#">Policy Privacy.</a>
						        </div>
								<div class="form-group text-center">
						        <button type="button" class="btn btn-lg black p-x-lg" @click="clckRegister"><i class="fa fa-check-circle"></i> Sign Up</button>
							</div>
						    </form>
						    <div class="m-y text-center">
						        <div>
									Already have an account?
									<router-link :to="{ name: 'Login' }" class="text-primary _600"><i class="fa fa-sign-in"></i> Sign In</router-link>
								</div>
						    </div>
						</div>
			        </div>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios';
export default {
    name: 'signup',
    metaInfo: {
    title: 'Roladesk' + ' | Sign Up',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    data() {
        return {
			baseURL: this.$store.state.settings.app.server ,
            registerDetails: { 
				username:'', 
				email:'', 
				password:'', 
				password_confirmation: '', 
				tos: true
			}
        }
     },
    methods: {
        clckRegister: function() {
                axios.post(this.baseURL + '/register', this.registerDetails )
                .then((response) => {

					// Show Success Notif	
					this.$toastr('success', "Registered Successfully!")
					
					// Redirect
					Router.push({ name: 'Login' });
                })
                .catch((error) => {

                    if(error.response.status === 422){
                        if(error.response.data){
                            if(error.response.data.email){

								// Show error Notif email
								this.$toastr('error', error.response.data.email[0])
                            }
                            if(error.response.data.username){

								// Show error Notif username

								this.$toastr('error', error.response.data.username[0])
                            }
                            if(error.response.data.password){

								// Show error Notif password

								this.$toastr('error', error.response.data.password[0])
                            }
                            if(error.response.data.tos){

								// Show error Notif terms of service

								this.$toastr('error', error.response.data.tos[0])
                            }
                        }
                    }
                });
            }
    }
}
</script>
