<template>
    <div>
        <div class="row no-gutter">
            <div class="padding">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    // sets meta title
    name: 'viewnotif',
    metaInfo: {
      title: 'Roladesk' + ' | Notification',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Notification'
      if (this.$store.state.dataRefreshed == true) this.$router.push({name: 'Initialize'})
    }
  }

</script>
