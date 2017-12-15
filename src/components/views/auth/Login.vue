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
									Sign in with Facebook
								</a>
								<a href="#" class="btn btn-block red text-white">
									<i class="fa fa-google-plus pull-left"></i>
									Sign in with Google+
					  	    	</a>
			                </div>

			                <div class="m-y text-sm text-center">
			                    OR
			                </div>
			                <form name="form" v-on:submit="login">
			                    <div class="form-group">
			                        <input type="text" class="form-control" placeholder="Email" v-model="username" required>
							    </div>

			                    <div class="form-group">
			                        <input type="password" class="form-control" placeholder="password" v-model="password" required>
			                    </div>

			                    <div class="m-b-md text-center">
			                        <label class="md-check">
					  	                <input type="checkbox"><i class="primary"></i> Keep me signed in
					  	              </label>
			                    </div>

								<div class="form-group text-center">
									<button type="submit" id="loginBtn" class="btn btn-lg black p-x-lg">
										<i class="fa fa-sign-in"></i>
										Sign in
									</button>
								</div>
			                </form>

			                <div class="m-y text-center">
			                    <a href="#" class="_600">Forgot password?</a>
			                </div>

			                <div class="text-center">
			                    Do not have an account?
								<router-link :to="{ name: 'Register' }" class="text-primary _600">Sign Up</router-link>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {

		// sets meta title
		name: 'login',
		metaInfo: {
		title: 'Roladesk' +' | Login',
		// override the parent template and just use the above title only
		titleTemplate: null
		},
		data() {
			return {
				title: 'This will be the title',
				baseURL: this.$store.state.settings.app.server,
				username: '',
				password: '',
				btnState: 'ready',
				btnOriginalText: '',
				btnLoadingText: '<i class="fa fa-circle-o-notch fa-spin"></i> Logging In ...'
			}
		},
		mounted() {

			// Grab btnOriginalText
			this.btnGetText();

		},
		methods: {
			login: function(e) {

				// Prevent Form Submission
				e.preventDefault();

				// Toggle Button
				this.btnToggle();

				// Make HTTP POST Request
				axios.post( this.baseURL +'/login', {
    				username: this.username,
					password: this.password
 				})
				.then((response) => {

					// Store API Token
					localStorage.setItem('token', response.data.token);

					// Toastr response
				    this.$toastr('success', 'Successfully Logged In!');

					// Redirect
					this.$router.push({ name: 'Initialize' });

					// Toggle Button
					this.btnToggle();

				})
				.catch((error) => {

					if(typeof error.response =='object') this.$toastr('error', error.response.data.error);
					else this.$toastr('error', error);

					this.btnToggle();

				});
			},
			btnGetText: function() {
				this.btnOriginalText = document.getElementById('loginBtn').innerHTML;
			},
			btnToggle: function() {

				// Toggle Ready State
				if(this.btnState == "ready") {
					document.getElementById('loginBtn').innerHTML = this.btnLoadingText;
					this.btnState = "active";
				}

				else {
					document.getElementById('loginBtn').innerHTML = this.btnOriginalText;
					this.btnState = "ready";
				}
			}
		}
	}
</script>
