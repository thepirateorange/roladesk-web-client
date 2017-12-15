<template>
	<div class="app-body-inner">
		<div class="row-col">
			<div class="row-row">
				<div class="row-col">

					<!-- Left Column -->
					<div class="col-xs w modal fade aside aside-md b-r" id="subnav">
						<div class="row-col light bg">

					      	<!-- flex content -->
					      	<div class="row-row">
						      	<div class="row-body scrollable hover">
							      	<div class="row-inner">
								      	<!-- content -->
								      	<div class="navside m-t">
									      	<nav class="nav-border b-primary" data-ui-nav>
										        <ul class="nav">
												  	<li class="active">
													    <a href="#">
													      	<span class="nav-label">
										                    	<b class="label warn rounded">32</b>
										                  	</span>
													      	<span class="nav-text">All</span>
													    </a>
												  	</li>
												  	<li>
													    <a href="#">
													      	<span class="nav-label">
										                    	<b class="label primary rounded">4</b>
										                  	</span>
													      	<span class="nav-text">Company</span>
													    </a>
												  	</li>
												  	<li>
													    <a href="#">
													      	<span class="nav-label">
										                    	<b class="label rounded">10</b>
										                  	</span>
													      	<span class="nav-text">Personal</span>
													    </a>
												  	</li>
												  	<li>
													    <a href="#">
													      	<span class="nav-label">
										                    	<b class="label rounded">6</b>
										                  	</span>
													      	<span class="nav-text">Team</span>
													    </a>
												  	</li>
													<li class="nav-header hidden-folded m-t">
										                <span class="block p-t b-t text-sm text-muted _600">Teams</span>
										            </li>
												  	<li v-for="team in $store.state.teams" :key="team.id">
													    <a href="#">
													      	<span class="nav-label">
										                    	<b class="label label-xs primary">&nbsp;</b>
										                  	</span>
													      	<span class="nav-text">{{team.name}}</span>
													    </a>
												  	</li>
												</ul>
											</nav>
										</div>
								    </div>
						      	</div>
						    </div>
					      	<!-- / -->
					      	<!-- footer -->
						    <div class="p-a b-t">
						        <a href="#" class="btn btn-xs rounded primary"><i class="fa fa-plus m-r-xs"></i> New Group</a>
						    </div>
						    <!-- / -->
					    </div>
					</div>
					<!-- End Left Column -->

					<!-- Middle Column -->
					<div id="list" class="col-xs modal fade aside aside-sm b-r">
						<div class="row-col">
							<div class="row-row">
								<div class="row-col">

									<!-- Column -->
									<div class="col-xs w-40 white bg b-r">
										<div class="row-col">
											<div class="row-row">
										      	<div class="row-body scrollable hover">
											      	<div class="row-inner">
											      		<div class="text-center text-sm p-y-sm">
															<a href="#" class="block text-muted">A</a>
															<a href="#" class="block text-muted active text-primary _600">B</a>
															<a href="#" class="block text-muted">C</a>
															<a href="#" class="block text-muted">D</a>
															<a href="#" class="block text-muted">E</a>
															<a href="#" class="block text-muted">F</a>
															<a href="#" class="block text-muted">G</a>

															<a href="#" class="block text-muted">H</a>
															<a href="#" class="block text-muted">I</a>
															<a href="#" class="block text-muted">J</a>
															<a href="#" class="block text-muted">K</a>
															<a href="#" class="block text-muted">L</a>
															<a href="#" class="block text-muted">M</a>
															<a href="#" class="block text-muted">N</a>

															<a href="#" class="block text-muted">O</a>
															<a href="#" class="block text-muted">P</a>
															<a href="#" class="block text-muted">Q</a>
															<a href="#" class="block text-muted">R</a>
															<a href="#" class="block text-muted">S</a>
															<a href="#" class="block text-muted">T</a>

															<a href="#" class="block text-muted">U</a>
															<a href="#" class="block text-muted">V</a>
															<a href="#" class="block text-muted">W</a>
															<a href="#" class="block text-muted">X</a>
															<a href="#" class="block text-muted">Y</a>
															<a href="#" class="block text-muted">Z</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- End Column -->

									<!-- Column -->
									<div class="col-xs">
										<div class="row-col white bg">

									      	<!-- Flex Content -->
									      	<div class="row-row">
										      	<div class="row-body scrollable hover">
											      	<div class="row-inner">

											      		<!-- Left Content -->
											      		<div class="list" data-ui-list="b-r b-3x b-primary" data-ui-list-target="#detail" data-ui-list-target-class="show">
															<div class="list-item">
															    <div class="list-left">
															        <span class="w-40 avatar circle blue-grey">R</span>
															    </div>

															    <div class="list-body">
  										      			        	<div class="pull-right dropdown">
	  										      			            <a href="#" data-toggle="dropdown" class="text-muted">
																			<i class="fa fa-fw fa-ellipsis-v"></i>
																		</a>

	  										      			            <div class="dropdown-menu pull-right text-color" role="menu">
	  										      			            	<a class="dropdown-item">
	  										      			              		<i class="fa fa-tag"></i>
																				Tag Item
																			</a>

	  										      			            	<a class="dropdown-item">
																				<i class="fa fa-pencil"></i>
																				Edit Item
																			</a>

	  										      			              	<a class="dropdown-item">
																				<i class="fa fa-trash"></i>
																				Delete item
																			</a>

	  										      			              	<div class="dropdown-divider"></div>
																			
	  										      			              	<a class="dropdown-item">
	  										      			              		<i class="fa fa-ellipsis-h"></i>
	  										      			              		More action
	  										      			              	</a>
	  										      			            </div>
  										      			        	</div>
																	<div class="item-title">
																		<a href="#" class="_500">Radionomy</a>
																	</div>

																	<small class="block text-muted text-ellipsis">
																		radionomy@gmail.com
																	</small>
															    </div>
															</div>
														</div>
														<!-- End Left Content -->

													</div>
												</div>
											</div>
											<!-- End Flex Content -->

										</div>
									</div>
									<!-- End Column -->

								</div>
							</div>
						</div>
					</div>
					<!-- End Middle Column -->

					<!-- Right Column -->
					<div id="detail" class="col-xs hidden-lg-up">
						<div class="row-col white bg">

							<!-- Flex Content -->
							<div class="row-row">
								<div class="row-body scrollable hover">
									<div class="row-inner">

										<!-- Content -->
										<div class="p-a-lg text-center">
											<!-- <img src="" class="w circle animated rollIn" alt="" /> -->
											<div class="animated fadeInUp">
									      		<div>
										      		<span class="text-md m-t block">Judith Garcia</span>
										      		<small class="text-muted">Product Designer</small>
									      		</div>
									      		<div class="block clearfix m-t">
									              <a href="" class="btn btn-icon btn-social rounded indigo">
									                <i class="fa fa-facebook"></i>
									                <i class="fa fa-facebook"></i>
									              </a>
									              <a href="" class="btn btn-icon btn-social rounded light-blue">
									                <i class="fa fa-twitter"></i>
									                <i class="fa fa-twitter"></i>
									              </a>
									              <a href="" class="btn btn-icon btn-social rounded red">
									                <i class="fa fa-google-plus"></i>
									                <i class="fa fa-google-plus"></i>
									              </a>
									            </div>
											</div>
										</div>

									</div>
								</div>
							</div>
							<!-- End Flex Content -->

						</div>
					</div>
					<!-- End Right Column -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        // sets meta title
    name: 'clients',
    metaInfo: {
      title: 'Roladesk' + ' | Clients',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    data: function() {
      return {
        colorCache: {},
        color: '',
        'title': 'test'
      }
    },
    mounted: function () {
	  this.$store.state.pageTitle = 'Clients'
	  if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' })
		},
	methods: {

		}
	}
</script>
