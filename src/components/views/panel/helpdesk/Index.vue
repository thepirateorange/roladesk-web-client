<template>
  <div class="row no-gutter">
    <div class="padding">
      <div class="col-sm-9 col-lg-6 light bg">
        <div class="p-a-md b-b _600">
          <i class="fa fa-archive"></i>&nbsp;&nbsp;Support Tickets
        </div>
        <p v-show="$store.state.supportticket.support.id == ''" class="text-muted">You currently do not have any open support tickets.</p>
        <div class="list-group m-b">
          <a href="#" class="list-group-item" v-for="(ticket, index) in $store.state.supportticket.support" :key="ticket.id">
            <button class="btn btn-sm rounded b-danger text-danger pull-right" @click="removeticket(index, ticket)">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>&nbsp;
            <button class="btn btn-sm rounded b-info text-info pull-right" @click="updateticket(ticket)">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>&nbsp;
            <button class="btn btn-sm rounded b-success text-success pull-right" @click="viewticket(ticket)">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>&nbsp; {{ticket.tickettype}} - {{ticket.subject}}
          </a>
        </div>
        <router-link :to="{ name: 'SupportTicket'}">
          <button class="btn btn-success m-t">
            <i class="fa fa-plus"></i>&nbsp;&nbsp;Open New Ticket
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // sets meta title
    name: 'helpdesk',
    metaInfo: {
      title: 'Roladesk' + ' | Help Desk',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Help Desk'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
          name: 'Initialize'
        })
    },
    methods: {
      removeticket: function (index) {
        this.$store.state.supportticket.support.splice(index, 1)
      },
      viewticket: function (ticket) {
        this.$store.state.viewticket = ticket

        this.$router.push({
          name: 'ViewTicket'
        });
      },
      updateticket: function (data) {
        this.$store.state.viewticket = data

        this.$router.push({
          name: 'UpdateTicket'
        });
      }
    }
  }

</script>
