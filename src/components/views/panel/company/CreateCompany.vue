<template>
  <div>
    <div class="col-sm-9 col-lg-10 light bg">
        <form role="form" class="p-a-md col-md-6">
          <div class="form-group">
            <label>Create New Company</label>
          </div>
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" class="form-control" v-model="form.name">
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="form.desc">
          </div>
          <div class="form-group">
            <label>User</label>
            <input type="text" class="form-control" v-model="$store.state.user.username" disabled>
          </div>
          <div class="form-group" v-if="this.$store.state.company.id < 1">
          <div class="checkbox inline m-x">
            <label class="ui-check">
              <input type="checkbox" class="has-value" v-model="form.is_default">
              <i></i>&nbsp;Default Company?</label>
          </div>
          </div>
          <button class="btn btn-info m-t" @click="createCompany">Create</button>
        </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
  export default {
    // sets meta title
    name: 'createcompany',
    metaInfo: {
    title: 'Roladesk' + ' | Create Company',
    // override the parent template and just use the above title only
    titleTemplate: null
    },
    data: function(){
      return {
        baseURL: this.$store.state.settings.app.server,
        config: { headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}},
        form: {
          name: '',
          desc: '',
          user_id: this.$store.state.user.id,
          is_default: false
        }
      }
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Create Company'
      if(this.$store.state.company.id < 1){ this.form.is_default = true }
      if (this.$store.state.dataRefreshed == true) this.$router.push({name: 'Initialize'})
    },
    methods: {
      createCompany: function(e){
        e.preventDefault();
				axios.post(this.baseURL + '/me/companies/create', this.form , this.config)
				.then((response)=> { 
          this.$toastr('success', 'Created Successfully!')
          // Redirect
					this.$router.push({ name: 'Initialize' });
          })
        .catch((error) => { this.$toastr('error', error.response.data )})
      }
    }
  }

</script>
