<template>
  <div>
    <div class="app-body-inner">
      <div class="row-col">
        <div class="col-xs-3 w-lg modal fade aside aside-sm" id="list">
          <div class="row-col success">
            <!-- header -->
            <div>
              <div class="p-a">
                <form>
                  <div class="input-group input-group-sm p-x-sm dker rounded">
                    <input type="text" v-model="searchbox" class="form-control no-bg no-border text-white" placeholder="Search" required="">
                    <span class="input-group-btn">
                      <button class="btn no-bg no-border no-shadow" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <div class="nav text-center p-b">
                <a href="#" class="nav-link m-x" data-toggle="tooltip" title="Add Contact">
                  <i class="ion-person-add"></i>
                </a>
                <a href="#" class="nav-link m-x" data-toggle="tooltip" title="Contacts">
                  <i class="ion-person-stalker"></i>
                </a>
                <a href="#" class="nav-link m-x" data-toggle="tooltip" title="Chat">
                  <i class="ion-chatbubble"></i>
                </a>
                <a href="#" class="nav-link m-x" data-toggle="tooltip" title="Location">
                  <i class="ion-location"></i>
                </a>
                <a href="#" class="nav-link m-x" data-toggle="tooltip" title="Plugins">
                  <i class="ion-grid"></i>
                </a>
              </div>
            </div>
            <!-- flex content -->
            <div class="row-row">
              <div class="row-body scrollable hover">
                <div class="row-inner">
                  <!-- left content -->
                  <div class="list inset" data-ui-list="active">
                    <div class="p-x text-dark m-t m-b-sm text-sm">Messages</div>
                    <div class="list-item" v-for="client in filteredclients">
                      <div class="list-left">
                        <span class="w-40 avatar circle indigo">
                          <i class="on b-white avatar-right"></i>
                          <img src="http://placehold.it/150x150" alt=".">
                        </span>
                      </div>
                      <div class="list-body">
                        <span class="pull-right text-xs label rounded lt">
                          N/A
                        </span>
                        <div class="item-title">
                          <a href="#" class="_500" v-on:click="select_client(client.id)">
                            <!-- Name Present -->
                            <div v-if="client.first_name + client.last_name != ''">
                              {{ client.first_name + " " + client.last_name }}
                            </div>
                            <!-- Else -->
                            <div v-else>
                              Name Unavailable
                            </div>
                          </a>
                        </div>
                        <small class="block text-muted text-ellipsis">
                          ( {{ client.email }} )
                        </small>
                      </div>
                    </div>
                    <div class="p-x text-dark m-t m-b-sm text-sm">Groups</div>
                    <div class="list-item">
                      <div class="list-left">
                        <span class="w-40 avatar circle">
                          <span class="w-40 avatar lter">WG</span>
                        </span>
                      </div>
                      <div class="list-body">
                        <a href="#" class="_500">Work group</a>
                        <small class="block text-muted text-ellipsis">
                          32 persons
                        </small>
                      </div>
                    </div>
                  </div>
                  <!-- / -->
                </div>
              </div>
            </div>
            <!-- / -->
            <!-- footer-->
            <div class="p-x-md p-y">
              <button class="pull-right btn btn-xs rounded dk" data-target="#createclient" data-toggle="modal">
                <i class="fa fa-plus"></i>
              </button>
              <span class="text-sm text-muted">Create Client</span>
            </div>
          </div>
        </div>
        <!-- Middle Column -->
        <div class="col-xs-6" id="detail">
          <div class="row-col dark-light">
            <!-- Header -->
            <div class="dark-white b-b">
              <div class="navbar">
                <!-- Navbar Right-->
                <ul class="nav navbar-nav pull-right m-l">
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tooltip" data-placement="bottom" title="Phone Call">
                      <span class="btn btn-sm btn-icon rounded success">
                        <i class="fa fa-phone"></i>
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tooltip" data-placement="bottom" title="Face Call">
                      <span class="btn btn-sm btn-icon rounded success">
                        <i class="fa fa-video-camera"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <!-- End Navbar Right -->
                <a data-toggle="modal" data-target="#profile" data-ui-modal class="m-r-0 m-l navbar-item pull-right hidden-lg-up">
                  <span class="btn btn-sm btn-icon rounded success">
                    <i class="ion-person"></i>
                  </span>
                </a>
                <a data-toggle="modal" data-target="#list" data-ui-modal class="navbar-item pull-left hidden-md-up">
                  <span class="btn btn-sm btn-icon success">
                    <i class="fa fa-list"></i>
                  </span>
                </a>
                <span class="navbar-item text-md text-ellipsis">
                  {{ client.first_name + " " + client.last_name }}
                </span>
              </div>
            </div>
            <!-- End Header -->
            <!-- Information -->
            <div class="row-row">
              <div class="row-body">
                <div class="row-inner">
                  <!-- Content -->
                  <div class="p-a-md">
                    <!-- Message -->
                    <div class="m-b" v-for="content in thread">
                      <!-- Client Message -->
                      <div v-if="content.sender == 'client'">
                        <a href="#" class="pull-left w-40 m-r-sm">
                          <img src="https://placehold.it/150x150/" class="w-full img-circle" />
                        </a>
                        <div class="clear">
                          <div class="p-a p-y-sm success inline rounded" :title="content.created_at">
                            {{ content.content }}
                          </div>
                        </div>
                      </div>
                      <!-- User Message -->
                      <div v-else>
                        <a href="#" class="pull-right w-40 m-l-sm">
                          <img src="https://placehold.it/150x150/" class="w-full img-circle">
                        </a>
                        <div class="clear text-right">
                          <div class="p-a p-y-sm dark-white inline rounded text-left" :title="content.created_at">
                            {{ content.content }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- / -->
                </div>
              </div>
            </div>
            <!-- / -->
            <div class="p-a b-t dark-white">
              <form id="messagePayload" v-on:submit="sendMessage">
                <!-- Hidden Fields -->
                <input type="hidden" name="recipient" v-model="client.email" />
                <div class="input-group">
                  <input type="text" class="form-control" name="message" placeholder="Say something" v-model="message" :disabled="sending">
                  <span class="input-group-btn">
                    <button class="btn white b-a no-shadow" type="button" :disabled="sending">
                      <i class="fa fa-send text-success"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xs-3 w-md modal fade aside aside-md aside-md-right" id="profile">
          <div class="row-col dark-white b-l">
            <!-- flex content -->
            <div class="row-row">
              <div class="row-body scrollable hover">
                <div class="row-inner">
                  <!-- content -->
                  <div class="p-a-lg text-center">
                    <img :src="client.picture" class="w-full circle" alt=".">
                    <span class="text-md m-t block">{{ client.first_name + " " + client.last_name }}</span>
                    <small class="text-muted">
                      <span>{{ client.email }}</span>
                    </small>
                    <!-- 										
			                                <div class="block clearfix m-t">
			                                    <a href="#" class="btn btn-icon btn-social rounded btn-sm">
								                <i class="fa fa-facebook"></i>
								                <i class="fa fa-facebook indigo"></i>
								              </a>
			                                    <a href="#" class="btn btn-icon btn-social rounded btn-sm">
								                <i class="fa fa-twitter"></i>
								                <i class="fa fa-twitter light-blue"></i>
								              </a>
			                                    <a href="#" class="btn btn-icon btn-social rounded btn-sm">
								                <i class="fa fa-google-plus"></i>
								                <i class="fa fa-google-plus red"></i>
								              </a>
			                                    <a href="#" class="btn btn-icon btn-social rounded btn-sm">
								                <i class="fa fa-linkedin"></i>
								                <i class="fa fa-linkedin cyan-600"></i>
								              </a>
			                                </div>
											 -->
                  </div>
                  <!-- v-for="(channel, index) in this.$store.state.channels" :key="index" -->
                  <div class="p-a-md">
                    <ul class="nav">
                      <span class="text-md m-t block text-center">Channels</span>
                      <li class="nav-item m-b-xs">
                        <a class="nav-link text-muted block">
                          <span class="pull-right text-sm">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                          </span>
                          <span>E-Mail</span>
                        </a>
                      </li>
                      <li class="nav-item m-b-xs">
                        <a class="nav-link text-muted block">
                          <span class="pull-right text-sm">
                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                          </span>
                          <span>Messenger</span>
                        </a>
                      </li>
                      <li class="nav-item m-b-xs">
                        <a class="nav-link text-muted block">
                          <span class="pull-right text-sm">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                          </span>
                          <span>WhatsApp</span>
                        </a>
                      </li>
                      <li class="nav-item m-b-xs">
                        <a class="nav-link text-muted block">
                          <span class="pull-right text-sm">
                            <i class="fa fa-circle-thin" aria-hidden="true"></i>
                          </span>
                          <span>Twilio</span>
                        </a>
                      </li>
                      <li class="nav-item m-b-xs">
                        <a class="nav-link text-muted block">
                          <span class="pull-right text-sm">
                            <i class="fa fa-weixin" aria-hidden="true"></i>
                          </span>
                          <span>WeChat</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- / -->
                </div>
              </div>
            </div>
            <!-- / -->
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div id="createclient" class="modal fade" data-backdrop="true" style="display: none;" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Client</h5>
          </div>
          <div class="modal-body text-center p-lg">
            <!-- <div class="col-sm-12 col-lg-12"> -->
              <form role="form">
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>Client</label>
                  <input type="text" class="form-control">
                </div>
              </form>
            <!-- </div> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn dark-white p-x-md" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn success p-x-md" data-dismiss="modal">Create</button>
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
    name: 'messaging',
    metaInfo: {
      title: 'Roladesk' + ' | Messaging',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    data: function () {
      return {
        "base_url": "http://server.roladesk.teamorange.tech/api/",
        "client": {
          "id": 1,
          "first_name": "N/A",
          "last_name": "N/A",
          "email": "N/A",
          "picture": "http://place-hold.it/150x150?text=Hello",
          "company_id": 1
        },
        "company": {
          "id": 1,
          "name": "Team Orange",
        },
        "message": "",
        "sending": false,
        "thread": [],
        "clients": [],
        'searchbox': ''
      }
    },
    sockets: {
      connect: function () {
        // Fired when the socket connects.
        this.$toastr('success', 'Socket Connected');
      },
      disconnect: function () {
        // Fired when the socket disconnects.
        this.$toastr('error', 'Socket Disconnected');
      },
      "email-channel:Vanguard\\Events\\Channels\\EmailReceived": function (data) {
        // TODO email-channel:COMPANY_ID:Vanguard\\Events\\Channels\\EmailReceived
        if (this.client.id == data.client_id) {
          console.log('MATCH!');
          this.thread.push({
            sender: 'client',
            content: data.message,
            created_at: data.created_at
          });
        }
        console.log(data);
        console.log('client id: ' + data.client_id);
      },
      test: function (data) {
        console.log("TEST SOCKET: " + data);
      },
      messageChannel: function (data) {
        //alert(data);
        // Fired when the server sends something on the "messageChannel" channel.
        console.log('data');
      }
    },
    computed: {
      conversation: function () {
        return _.orderBy(this.thread, 'created_at')
      },
      filteredclients: function() {
        var v_client = this.$store.state.clients
        if(this.searchbox != ''){
          return v_client.filter(client => client.email.toLowerCase().indexOf(this.searchbox.toLowerCase()) !== -1 )
        }else{
          return v_client
        }
      }
    },
    mounted: function () {
      this.retrieveMessages();
      this.retrieveClients();
      this.$store.state.pageTitle = 'Messaging'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    },
    methods: {
      select_client: function (id) {
        // Prepare
        var client = this.clients.filter(function (client) {
          return client.id == id;
        });
        client = client[0];
        if (client.first_name == "") client.first_name = "Name";
        if (client.last_name == "") client.last_name = "Unavailable";
        this.client = {
          "id": client.id,
          "first_name": client.first_name,
          "last_name": client.last_name,
          "email": client.email,
          "picture": "http://placehold.it/150x150?text=Hello",
          "company_id": client.company_id
        }
        console.log('SELECT ID: ' + client.id);
        this.retrieveMessages();
      },
      retrieveClients: function () {
        // Prepare Endpoint
        var endpoint = this.base_url + "companies/clients/list/" + this.company.id;
        // Proxy Instance
        var inst = this;
        // Make HTTP POST Request
        axios.get(endpoint)
          .then(function (response) {
            console.log(response.data)
            inst.clients = response.data.clients;
            inst.$store.state.clients = response.data.clients
            console.log(inst.clients);
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      retrieveMessages: function () {
        // Clear Data
        this.thread = [];
        // API Endpoint
        var point = "http://server.roladesk.teamorange.tech/api/channels/email/store/list/" + this.company.id + "/" +
          this.client.id;
        // Proxy Instance
        var inst = this;
        // Make HTTP POST Request
        axios.get(point)
          .then(function (response) {
            response.data.messages.forEach(function (entry) {
              inst.thread.push({
                sender: 'client',
                content: entry.message,
                created_at: entry.created_at
              });
            });
            response.data.omni_messages.forEach(function (entry) {
              inst.thread.push({
                sender: 'user',
                content: entry.message,
                created_at: entry.created_at
              });
            });
            inst.thread = inst.conversation;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      sendMessage: function (e) {
        // Prevent default
        e.preventDefault();
        // Console Log
        console.log('Sending Message ...');
        // Disable Form
        this.sending = true;
        // Proxy Instance
        var inst = this;
        // Make HTTP POST Request
        axios.post('http://server.roladesk.teamorange.tech/api/channels/email/send', {
            recipient: this.client.email,
            message: this.message,
            user_id: 1,
            client_id: inst.client.id
          })
          .then(function (response) {
            console.log(response);
            console.log("Message Sent");
            console.log(response.data.message);
            // Add Message To Vue
            inst.thread.push({
              sender: 'user',
              content: response.data.message
            });
            // Remove Message
            inst.message = "";
            // Enable Form
            inst.sending = false;
          })
          .catch(function (error) {
            if (typeof error.response == 'object') this.$toastr('error', error.response.data.error);
            else this.$toastr('error', error);
            // Enable Form
            inst.sending = false;
          });
      }
    }
  }

</script>

<style scoped>
  .app-body-inner {
    position: static;
    height: calc(100vh - 57px);
  }

</style>
