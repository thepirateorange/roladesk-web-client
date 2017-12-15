<template>
  <div class="col-sm-9 col-lg-10 light bg">
    <div class="tab-content pos-rlt">
        <div class="p-a-md b-b _600">Messaging</div>

    </div>
  </div>
</template>

<script>
export default {
    // sets meta title
    name: 'teammessaging',
    metaInfo: {
      title: 'Roladesk' + ' | Team Messaging',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Team Messaging'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
          name: 'Initialize'
        })
    }
}
</script>