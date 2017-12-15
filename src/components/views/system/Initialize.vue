<template>
	<div id="cont">
		<h1 class="text-center">
			<i class="fa fa-gear fa-times-circle" v-if="load_failed"></i>
			<i class="fa fa-gear fa-spin" v-else></i>
		</h1>
		<h5>
			<strong>
			{{ message }}
			</strong>
		</h5>
		<strong>({{ sub_message }})</strong>
	</div>
</template>

<script>
	import axios from 'axios';
	import Funnies from 'funnies';
	let funnies = new Funnies();
	export default {
		// sets meta title
		name: 'initialize',
		metaInfo: {
			title: 'Roladesk | ' + 'Initialize',
			// override the parent template and just use the above title only
			titleTemplate: null
		},
		data() {
			return {
				"message": funnies.message(),
				"sub_message": 'Loading',
				"load_failed": false,
				"baseURL": this.$store.state.settings.app.server,
				"config": {headers: { Authorization: 'Bearer ' + localStorage.getItem("token")}}
			}
		},
		computed: {
			// get_default_company() {
			// 	// Filter default company
			// 	return this.$store.state.companies.filter(function (company) {
			// 		return company.is_default == true;
			// 	});
			// }
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				// Get User Information [OK]
				// Get User Companies /me/companies [OK]
				// Get Default Company [OK]
				// Get Default Company Information [OK]
				// Get Default Company Channel Information
				// [Emails]
				// - Registered Company Domains
				// - Registered Company Emails
				// Get Default Company Teams
				// Get Default Company Clients
				// Redirect To Dashboard [OK]
				// Define API Endpoint
				var link = this.baseURL + '/me/init';
				// Send HTTP GET Requests
				axios.get(link, this.config)
					.then(response => {
						// Store Data In vuex
						this.$store.state.user = response.data.user;
						this.$store.state.company = response.data.company;
						this.$store.state.companies = response.data.companies;
						this.$store.state.clients = response.data.clients;
						this.$store.state.teams = response.data.teams;
						// Call Companies
						// this.get_companies()
						if (this.$store.state.company.id < 1) {

							setTimeout((() => {
								// Toastr Response
								this.$toastr('info', 'Welcome!', 'Begin by creating a new company!');
								// Redirect to Create Company
								this.$router.push({name: 'CreateCompany'});
							}), 3000);
						} else {
							setTimeout((() => {
								// Toastr Response
								this.$toastr('success', 'Loading Complete!');
								// Redirect To Dashboard, 3 Second Delay
								this.$router.push({name: 'Dashboard'});
								this.$store.state.dataRefreshed = false
							}), 3000);
						}
					})
					.catch(e => {
						// Change Loading Message
						this.message = 'Houston, We Have a Problem!';
						// Change Sub Message
						this.sub_message = e.response;
						// Set Loading To Failed
						this.load_failed = true;
						// Toastr Response
						this.$toastr('error', 'Uh-oh! Something went wrong while loading. You will be redirected back to the login page in 7 seconds.');
						console.log(e);
						// Redirect To Login, 7 Second Delay
						setTimeout((() => {
							this.$router.push({
								name: 'Login'
							});
							localStorage.removeItem('token');
						}), 7000);
					});
			},
			// get_companies() {
			// 	axios.get(this.baseURL + '/me/companies?user_id=' + this.$store.state.user.id, this.config )
			// 	.then(response => {
			// 		// Get Companies
			// 		this.$store.state.companies = response.data;
			// 		// Get Default Company
			// 		// Get Selected Company ID
			// 		// Compare Selected ID and Default ID
			// 		// If Match, Load Default Company
			// 		// Else, Load Selected Company Information
			// 		this.$store.state.company = this.get_default_company[0];
			// 		if(this.$store.state.company.id > 0) {
			// 			// Get Teams
			// 			this.get_teams();
			// 			// Get Clients
			// 			this.get_clients();
			// 			// Get Users Activity Log
			// 			this.get_activity_log();			
			// 			// Get Users Sessions
			// 			this.get_sessions();
			// 			// Get Users Stats
			// 			this.get_stats();
			// 		}
			// 	})
			// 	.catch(error => { console.log(error) });
			// },
			// get_clients() {
			// 	axios.get(this.baseURL + '/me/companies/clients/list/' + this.$store.state.company.id, this.config )
			// 	.then(response => {this.$store.state.clients = response.data})
			// 	.catch(error => { console.log(error) });
			// },
			// get_teams() {
			// 	axios.get(this.baseURL + '/me/companies/teams?company_id=' + this.$store.state.company.id, this.config )
			// 	.then(response => {
			// 		// this.$store.state.teams = response.data;
			// 		})
			// 	.catch(error => { console.log(error) });
			// },
			get_activity_log() {
				axios.get(this.baseURL + '/activity', this.config)
					.then((response) => {
						this.$store.state.activity_log_data = JSON.stringify(response.data.data)
						this.$store.state.activity_log_meta = JSON.stringify(response.data.meta)
					})
					.catch((error) => {
						console.log(error)
					})
			},
			get_sessions() {
				axios.get(this.baseURL + '/me/sessions', this.config)
					.then((response) => {
						this.$store.state.sessions = JSON.stringify(response.data)
					})
					.catch((error) => {
						console.log(error)
					})
			},
			get_stats() {
				axios.get(this.baseURL + '/stats', this.config)
					.then((response) => {
						this.$store.state.stats = JSON.stringify(response.data)
					})
					.catch((error) => {
						console.log(error)
					});
			},
			get_countries() {
				axios.get(this.baseURL + '/countries', this.config)
					.then((response) => {
						this.$store.state.countries_id = JSON.stringify(response.data)
					})
					.catch((error) => {
						console.log(error)
					});
			}
		}
	}
</script>

<style scoped>
	h1 {
		font-size: 80px;
	}
	#cont {
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
