<template>
  <div>
    <div class="row no-gutter">
      <div class="col-xs-6 col-sm-3 b-r b-b">
        <div class="padding">
          <div class="text-center">
            <h2 class="text-center _600"><i class="fa fa-user" aria-hidden="true"></i></h2>
            <br>
            <router-link :to="{ name: 'Account' }"><button class="btn btn-fw white" @click="activetab('1')">Update Profile</button></router-link>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 b-r b-b">
        <div class="padding">
          <div class="text-center">
            <h2 class="text-center _600"><i class="fa fa-cogs" aria-hidden="true"></i></h2>
            <br>
            <router-link :to="{ name: 'Account' }"><button class="btn btn-fw white" @click="activetab('2')">Account Settings</button></router-link>
          </div>
        </div>
      </div>      
      <div class="col-xs-6 col-sm-3 b-r b-b">
        <div class="padding">
          <div class="text-center">
            <h2 class="text-center _600"><i class="fa fa-list" aria-hidden="true"></i></h2>
            <br>
            <router-link :to="{ name: 'Sessions' }"><button class="btn btn-fw white">My Sessions</button></router-link>            
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 b-r b-b">
        <div class="padding">
          <div class="text-center">
            <h2 class="text-center _600"><i class="fa fa-list-alt" aria-hidden="true"></i></h2>
            <br>
            <router-link :to="{ name: 'Activity' }"><button class="btn btn-fw white">Activity Log</button></router-link>                        
          </div>
        </div>
      </div>
    </div>
    <!-- chart -->

    <!-- // Chart tha shows users stats -->
    <div class="padding">
      <div class="row">
        <div class="col-sm-12">
          <div class="box">
            <div class="box-header">
              <h3>Activity</h3>
            </div>
            <div class="box-body">
              <canvas id="myChart" height="50" width="300" style="display: block; width: 319px; height: 200px;"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- // Add chart that shows percentage of messages from different channels -->
  </div>
</template>

<script>

import Chart from 'chart.js';

export default {
  // sets meta title
	name: 'dashboard',
	metaInfo: {
		title: 'Roladesk' + ' | Dashboard',
		// override the parent template and just use the above title only
		titleTemplate: null
  },
  data() {
    return {
      rawData: '',
      statsData: '',
      labels: [],
      data: []
    }
  },
  mounted: function(){
    this.$store.state.pageTitle = 'Dashboard'
    this.rawData = this.$store.state.stats
    if(this.rawData != ''){this.statsData = JSON.parse(this.rawData)}
    if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' })

    // parse stats data and initialize chart.js
    for (var date in this.statsData.users_per_month) {
        if (this.statsData.users_per_month.hasOwnProperty(date)) 
          {this.labels.push(date)}
    }

    for (const [key, value] of Object.entries(this.statsData.users_per_month || '')) 
      { this.data.push(`${value}`)}

    var ctx = document.getElementById("myChart").getContext('2d');
      var myLineChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: "User's Activity",
                data: this.data,
                fill: true,
                lineTension: 0.4,
                backgroundColor: '',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                spanGaps: false
              }
            ]
          },
        options: {}
      });
   },
   methods: {
     activetab: function(val) {
       this.$store.state.activetabs = val
     }
   }
}
</script>
            