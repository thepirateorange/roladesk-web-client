<template>
  <div class="row no-gutter">
    <div class="padding">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">IP Address</th>
            <th scope="col">User Agent</th>
            <th scope="col">Last Activity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in activeSessionData" :key="data.created_at">
            <td>{{ data.ip_address }}</td>
            <td>{{ data.user_agent }}</td>
            <td>{{ data.last_activity }}</td>
            <td>
              <a tabindex="0" class="btn btn-danger btn-circles" role="button" data-toggle="modal" data-target="#invalidateSessionModal">
                <i class="fa fa-times" ></i>
              </a>
            </td>  
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="invalidateSessionModal" tabindex="-1" role="dialog" aria-labelledby="invalidateSessionModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h1 class="text-center">Please Confirm</h1>
              <p class="lead text-center">Are you sure that you want to invalidate this session?</p>
            </div>
            <div class="modal-footer mx-auto" v-for="data in activeSessionData" :key="data.id">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="clckInvalidateSession(data, activeSessionData)">Yes, Proceed!</button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>

export default {
    
      name: 'active-sessions',
      metaInfo: {
      title: 'Roladesk' + ' | Active Sessions',
      // override the parent template and just use the above title only
      titleTemplate: null
      },
      data: function(){
        return {
          baseURL: this.$store.state.settings.app.server,
          config: { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") }},
          activeSessionData: ''
        }
      },
      mounted: function(){
          this.$store.state.pageTitle = 'My Sessions'
          if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' })
      },
      created: function(){
          this.userActivityLog = JSON.parse(this.$store.state.sessions)
      },      
      methods: { 

        clckInvalidateSession(data, activeSessionData) {
          axios.delete( this.baseURL + '/sessions/' + data.id, this.config )
          .then((response)=> {
                
            // Show notif if succesful    
              this.$toastr('success',"Invalidated Successfully!")
              
              // delete local active session
              delete this.activeSessionData[Object.keys(activeSessionData)]
              
             // if active session matched your session .then do bellow (not yet finished)
            //   localStorage.profSessionData = this.activeSessionData
            //   localStorage.clear();
            //   this.$router.push({ name: 'login' }); 
            })
          .catch((error) => { this.$toastr('error', error.response.data) })          
          }
      }    
}

</script>

<style scope>

.btn-circles {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.btn-circles.btn-lg {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}
.btn-circles.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}  
</style>