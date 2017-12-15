<template>
  <div class="col-sm-9 col-lg-10 light bg">
    <div class="padding">
      <h6 class="m-b _600">{{$store.state.viewticket.subject}}</h6> 
      <div class="p-y b-t">
        <span>{{$store.state.viewticket.tickettype}}</span>
      </div>
      <div>
        <p class="text-lt">{{$store.state.viewticket.message}}</p>
        <span class="text-xs text-muted">Date: {{$store.state.viewticket.datestamp}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // sets meta title
    name: 'viewticket',
    metaInfo: {
      title: 'Roladesk' + ' | View Ticket',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    data: function () {
      return {
          ticketdate: ''
      }
    },
    mounted: function () {
      this.$store.state.pageTitle = 'View Ticket'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    //   this.readabledate = this.ticketdate.toString()
    }
  }
</script>
