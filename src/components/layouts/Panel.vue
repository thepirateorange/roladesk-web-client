<template>
  <div>
    <div class="app" id="app">
      <!-- Aside -->
      <div id="aside" class="app-aside fade nav-dropdown black">
        <!-- Fluid App Aside -->
        <div class="navside dk" data-layout="column">
          <div class="navbar no-radius">
            <!-- Brand -->
            <router-link :to="{ name: 'Dashboard'}" class="navbar-brand">
              <!-- <div data-ui-include="../../assets/logo/default.svg"></div> -->
              <!-- <img src="../../assets/logo.png" alt="." style="img-fluid; max-width: 100%; height: auto;"> -->
              <!-- <span class="hidden-folded inline">{{appName}}</span> -->
            </router-link>
            <!-- End Brand -->
          </div>
          <div data-flex class="hide-scroll">
            <nav class="scroll nav-stacked nav-stacked-rounded nav-color">
              <ul v-if="this.$store.state.company.id < 1" class="nav" data-ui-nav>
                <li class="nav-header hidden-folded">
                  <span class="text-xs">Main Navigation</span>
                </li>
                <li>
                  <router-link :to="{ name: 'CreateCompany' }" class="b-warning">
                    <span class="nav-icon text-white no-fade">
                      <i class="fa fa-plus"></i>
                    </span>
                    <span class="nav-text">Create Company</span>
                  </router-link>
                </li>
              </ul>
              <ul v-else class="nav" data-ui-nav>
                <li class="nav-header hidden-folded">
                  <span class="text-xs">Main Navigation</span>
                </li>
                <li>
                  <router-link :to="{ name: 'Dashboard' }" class="b-danger">
                    <span class="nav-icon text-white no-fade">
                      <i class="fa fa-dashboard"></i>
                    </span>
                    <span class="nav-text">Dashboard</span>
                  </router-link>
                </li>
                <li @click="clckCompany">
                  <router-link :to="{ name: 'Company' }" class="b-warning">
                    <span class="nav-icon text-white no-fade">
                      <i class="fa fa-university"></i>
                    </span>
                    <span class="nav-text">Company</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Clients' }" class="b-success">
                    <span class="nav-icon text-white no-fade">
                      <i class="fa fa-group"></i>
                    </span>
                    <span class="nav-text">Clients</span>
                  </router-link>
                </li>
                <!--
					<li>
						<router-link :to="{ name: 'Account' }" class="b-warning">
							<span class="nav-icon text-white no-fade">
								<i class="ion-person"></i>
							</span>
							<span class="nav-text">Account</span>
						</router-link>
					</li>
					-->
                <li>
                  <router-link :to="{ name: 'Messaging' }" class="b-info">
                    <span class="nav-icon text-white no-fade">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span class="nav-text">Messaging</span>
                  </router-link>
                </li>
                <!-- Teams -->
                <li class="nav-header hidden-folded">
                  <span class="text-xs">Teams</span>
                </li>

                <li v-if="$store.state.teams.length == 0">
                    <a @click="redirectCreateTeam('3')">
                      <span class="nav-icon">
                        <i class="fa fa-plus"></i>
                      </span>
                      <span class="nav-text">Add Team</span>
                    </a>
                </li>

                <li v-for="team in this.$store.state.teams" v-if="$store.state.teams.length != 0">
                  <a>
                    <span class="nav-caret">
                      <i class="fa fa-caret-down"></i>
                    </span>
                    <span class="nav-icon">
                      <i class="fa fa-cube"></i>
                    </span>
                    <span class="nav-text">{{ team.name }}</span>
                  </a>
                  <ul class="nav-sub nav-mega nav-mega-3">
                    <li>
                      <router-link :to="{ name: 'TeamDashboard'}">
                        <span class="nav-text">- Dashboard</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'TeamClients'}">
                        <span class="nav-text">- Clients</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'TeamMessaging'}">
                        <span class="nav-text">- Messaging</span>
                      </router-link>
                    </li>
                  </ul>
                </li>

                <!-- Application -->
                <li class="nav-header hidden-folded">
                  <span class="text-xs">Application</span>
                </li>
                <li>
	                <router-link :to="{ name: 'GeneralSettings' }">
	                    <span class="nav-icon text-white no-fade">
	                      <i class="fa fa-cogs"></i>
	                    </span>
	                	<span class="nav-text">
							Settings
	                    </span>
					</router-link>
                </li>

                <li>
	                <router-link :to="{ name: 'Documentation' }">
	                    <span class="nav-icon text-white no-fade">
	                      <i class="fa fa-book"></i>
	                    </span>
	                	<span class="nav-text">
							Documentation
	                    </span>
					</router-link>
                </li>

                <li>
	                <router-link :to="{ name: 'HelpDesk' }">
	                    <span class="nav-icon text-white no-fade">
	                      <i class="fa fa-support"></i>
	                    </span>
	                	<span class="nav-text">
							HelpDesk
	                    </span>
					</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div data-flex-no-shrink>
            <div class="nav-fold dropup">
              <a data-toggle="dropdown">
                <div class="pull-left">
                  <div v-if="this.$store.state.company.id < 1" class="inline">
                    <span class="avatar w-40 grey">N/A</span>
                  </div>
                  <div v-else class="inline">
                    <span class="avatar w-40 grey">{{ userInitials }}</span>
                  </div>
                  <!-- <img :src="avatar" @error="defaultAvatar" class="w-40 img-circle" v-show="showAvatar"> -->
                </div>
                <div class="clear hidden-folded p-x">
                  <span v-if="this.$store.state.company.id < 1" class="block _500 text-muted">No Company</span>
                  <span v-else class="block _500 text-muted">{{ this.$store.state.company.name }}</span>
                  <div class="progress-xxs m-y-sm lt progress">
                    <div class="progress-bar info" style="width: 15%;">
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu w dropdown-menu-scale">
                <div>
				<!-- Create New Company -->
				<!-- <router-link class="dropdown-item" :to="{ name: 'CreateCompany' }">
				<i class="fa fa-plus-circle"></i>
				New Company1
				</router-link> -->
                  <a class="dropdown-item" href="#" @click="clckRedirect">
                    <i class="fa fa-plus-circle"></i> New Company
                  </a>
                  <div class="dropdown-divider"></div>
                  <!-- List Companies -->
                  <a class="dropdown-item" href="#" v-for="company in this.$store.state.companies">
                    <i class="fa fa-cube"></i> {{ company.name }}
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    <i class="fa fa-info-circle"></i> Documentation
                  </a>
                </div>
                <div>
                  <a class="dropdown-item" href="#" v-on:click="signOut">
                    <i class="fa fa-sign-out"></i> Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Content -->
      <div id="content" class="app-content box-shadow-z2 bg pjax-container" role="main">
        <div class="app-header white bg b-b">
          <div class="navbar" data-pjax>
            <a data-toggle="modal" data-target="#aside" class="navbar-item pull-left hidden-lg-up p-r m-a-0">
              <i class="ion-navicon"></i>
            </a>
            <div class="navbar-item pull-left h5" id="pageTitle">
              {{ $store.state.pageTitle }}
            </div>
            <!-- breadcrumbs here-->
            <!-- nabar right -->
            <ul class="nav navbar-nav pull-right">
              <!-- search form here -->
              <li class="nav-item dropdown pos-stc-xs">
                <a class="nav-link clear" data-toggle="dropdown">
                  <i class="ion-android-notifications-none w-24"></i>
                  <span v-show="$store.state.notification != '' " class="label up p-a-0 danger"></span>
                </a>
                <!-- Dropdown -->
                <div class="dropdown-menu pull-right w-xl no-bg no-border no-shadow">
                  <div class="scrollable" style="max-height: 220px">
                    <ul class="list-group list-group-gap m-a-0">
                      <li class="list-group-item dark-white box-shadow-z0 b" v-for="notif in $store.state.notifications" :key="notif.id">
                        <small>{{notif.type}}</small>
                        <!-- <span class="pull-left m-r">
														<img src="images/a1.jpg" alt="..." class="w-40 img-circle">
													</span> -->
                        <span class="clear block">
                          {{notif.message}}
                          <router-link :to="{ name: 'Notifications' }" class="text-primary">&nbsp;&nbsp;{{notif.sender}}</router-link>
                          <br>
                          <small class="text-muted">
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- / dropdown -->
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link clear" data-toggle="dropdown">
                  <span class="avatar w-32">
                    <img :src="$store.state.user.avatar" class="w-full rounded" :alt="userInitials">
                  </span>
                </a>
                <div class="dropdown-menu w dropdown-menu-scale pull-right">
                  <router-link class="dropdown-item" :to="{ name: 'Account' }">
                    <span>
                      <i class="ion-ios-person-outline"></i>&nbsp;My Account</span>
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" @click="signOut">
                    <i class="ion-log-out"></i>&nbsp;Sign out</a>
                </div>
              </li>
            </ul>
            <!-- / navbar right -->
          </div>
        </div>
        <div class="app-body">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
	import axios from 'axios'
	import Popper from 'popper.js';
	window.Popper = Popper;
	export default {
		data: function() {
			return {
				baseURL: this.$store.state.settings.app.server,
				config: {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				},
				counter: 0,
				userName: '',
				userInitials: '',
				showAvatar: true
			}
		},
		mounted: function() {
			// sets all user info from local storage
			this.userName = this.$store.state.user.username
			this.userInitials = this.$store.state.user.first_name.charAt(0) || '' + this.$store.state.user.last_name.charAt(
				0) || '';
		},
		methods: {
			signOut: function() {
				// Make HTTP POST Request - Logout
				axios.post(this.baseURL + '/logout', {}, this.config)
					.then((response) => {
						// this.$toastr.js response
						this.$toastr('success', 'Successfully Logged Out!');
						// clear all data in local storage
						localStorage.clear();
						// Redirect
						Router.push({
							name: 'Login'
						});
					})
					.catch((error) => {
						// clear all data in local storage
						if (typeof error.response == 'object') this.$toastr('error', error.response.data.error);
						else this.$toastr('error', error.response.data);
					});
				// Force Logout
				localStorage.clear();
				this.$router.push({
					name: 'Login'
				});
			},
			defaultAvatar: function() {
				this.$store.state.user.avatar = '/src/assets/images/profile.png'
				this.showAvatar = false
			},
			clckRedirect: function() {
				this.$router.push({ name: 'CreateCompany'})
			},
			redirectCreateTeam: function(val){
        this.$store.state.activetabs = val
        this.$router.push({ name: 'Company'})
      },
      clckCompany: function(){
        this.$store.state.activetabs = 0
      }
		}
	}
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .15s
	}
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active below version 2.1.8 */
	{
		opacity: 0
	}
</style>
