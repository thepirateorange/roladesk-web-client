<template>
	<div id="landing">
		<div class="logo">
			<img class="logo" src="../assets/logo.png" />
		</div>

		<div class="under text-center">
			<router-link :to="{ name: 'Login' }" class="btn btn-primary btn-sm">
				<i class="fa fa-sign-in"></i>
				Login
			</router-link>

			<router-link :to="{ name: 'Register' }" class="btn btn-primary btn-sm">
				<i class="fa fa-user-plus"></i>
				Register
			</router-link>
		</div>
	</div>
</template>

<style scoped>
	#landing {
		background-image: linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	#landing > * {
		-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
	}

	.logo img {
		width: 300px;
	}

	.under {
		margin: 20px;
	}
</style>
