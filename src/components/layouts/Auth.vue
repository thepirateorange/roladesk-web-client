<template>
	<div class="app bg-custom" id="app">

		<!-- Header -->
		<div class="padding">
		    <div class="navbar">
		        <div class="pull-center">

		            <!-- Brand -->
					<router-link :to="{ name: 'Landing' }" class="navbar-brand">
						<img src="../../assets/logo.png" alt=".">
					</router-link>

		        </div>
		    </div>
		</div>

		<!-- Content -->
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>

	</div>
</template>

<style>
	.bg-custom {
		background-image: linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100vh;
	}

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .25s
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0
	}
</style>
