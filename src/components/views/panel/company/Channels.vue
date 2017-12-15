<template>
  <div class="padding">
    <div class="row">
      <div class="col-sm-12 col-lg-12 light bg">
        <div class="p-a-md b-b _600">Email</div>
        <div class="row">
          <form role="form" class="p-a-md col-md-6 b-r">
            <div class="form-group">
              <label>Domain</label>
              <div class="input-group">
                <input type="text" v-model="dummy" class="form-control" placeholder="Optional">
                <div class="input-group-addon btn btn-outline b-info text-info" @click="verifyDomain(dummy)">Verify Domain</div>
              </div>
            </div>
            <button @click="saveDomain" class="btn btn-info m-t">Add Domain</button>
              <!-- domain list -->
            <br>
            <br>
            <div class="list-group m-b">
              <a href="#" class="list-group-item" v-for="(channel, index) in $store.state.channels.email.domain" :key="index">
                <!-- <span class="pull-right info">
                  Delete
                </span>                 -->
                {{channel}}
                <!-- {{$store.state.channels.email}} -->
              </a>
            </div>
          </form>
          <form role="form" class="p-a-md col-md-6">
            <div class="form-group">
              <label>Email</label>
              <div class="input-group">
                <div class="input-group-addon">@</div>
                <input type="email" v-model="email.emailAdd" class="form-control" placeholder="Local and Custom">
              </div>
            </div>
            <button @click="saveEmail" class="btn btn-info m-t">Add Email</button>
              <!-- email list -->
            <br>
            <br>
            <div class="list-group m-b">
              <a href="#" class="list-group-item" v-for="(channel, index) in $store.state.channels.email.emailadd" :key="index">
                {{channel}}
              </a>
            </div>            
          </form>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-12 light bg">
        <div class="p-a-md b-b _600">Messenger</div>
        <br>
        <form role="form">
          <div class="form-group">
            <label>API</label>
            <input type="text" class="form-control">
          </div>
        </form>
        <form role="form">
          <div class="form-group">
            <label>Key</label>
            <input type="text" class="form-control">
          </div>
          <button type="submit" class="btn btn-info m-t">Save</button>
        </form>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-12 light bg">
        <div class="p-a-md b-b _600">Twilio</div>
        <br>
        <form role="form">
          <div class="form-group">
            <label>API</label>
            <input type="text" class="form-control">
          </div>
        </form>
        <form role="form">
          <div class="form-group">
            <label>Key</label>
            <input type="text" class="form-control">
          </div>
          <button type="submit" class="btn btn-info m-t">Save</button>
        </form>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-12 light bg">
        <div class="p-a-md b-b _600">WeChat</div>
        <br>
        <form role="form">
          <div class="form-group">
            <label>API</label>
            <input type="text" class="form-control">
          </div>
        </form>
        <form role="form">
          <div class="form-group">
            <label>Key</label>
            <input type="text" class="form-control">
          </div>
          <button type="submit" class="btn btn-info m-t">Save</button>
        </form>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-12 light bg">
        <div class="p-a-md b-b _600">WhatsApp</div>
        <br>
        <form role="form">
          <div class="form-group">
            <label>API</label>
            <input type="text" class="form-control">
          </div>
        </form>
        <form role="form">
          <div class="form-group">
            <label>Key</label>
            <input type="text" class="form-control">
          </div>
          <button type="submit" class="btn btn-info m-t">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: function() {
      return {
        'baseURL': this.$store.state.settings.app.server,
        'config': {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
          }
        },
        'dummy': '',
        'comp_id': this.$store.state.company.id,
        'email': {
          'domain': '',
          'emailAdd': this.$store.state.channels.email.email
        }
      }
    },
    mounted: function() {
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    },
    methods: {
      // Email 
      saveEmail: function(e) {
        e.preventDefault();
        this.$store.state.channels.email.emailadd.push(this.email.emailAdd)
        this.email.emailAdd = ''
        // axios.post(this.baseURL + '/channels/email/'+ this.comp_id, this.email, this.config)
        //   .then((response) => {
        //     // show notif if succesfull
        //     this.$toastr('success', "Email info saved Successfully!")
        //     // saving updated avatar
        //     this.$store.state.channels.email = response.data
        //   })
        //   .catch((error) => {
        //     // show notif if error
        //     this.$toastr('error', error.response.data)
        //   })
      },
      // Email 
      saveDomain: function(e) {
        e.preventDefault();
        this.$store.state.channels.email.domain.push(this.email.domain)
        this.email.domain = ''
      },      
      verifyDomain: function(domain) {
        var reg = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
          if(domain.match(reg)){
            this.$toastr('success',' Congratulations. This is a valid Domain');
            this.email.domain = domain
          }else{
            this.$toastr('warning','Not a valid Domain!');
          }
      }
    }
  }
</script>
<style scoped>

</style>
