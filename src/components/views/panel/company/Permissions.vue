<template>
  <div class="app-body">
    <div class="row no-gutter">
      <div class="col-sm-9 col-lg-12 light bg b-r">
        <div class="p-a-md b-b _600">
          <i class="fa fa-unlock-alt"></i>&nbsp;&nbsp;Permissions
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Permissions</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(permission, index) in $store.state.permissions" :key="permission.id">
              <td scope="row">{{permission.id}}</td>
              <td>{{permission.label}}</td>
              <td>{{permission.description}}</td>
              <td>                
              <a tabindex="0" class="btn btn-success btn-circles" role="button" data-toggle="modal" data-target="#viewModal" @click="viewPermission(permission)">
                <i class="fa fa-eye" ></i>
              </a>
              <td> 
              <a tabindex="0" class="btn btn-primary btn-circles">
                <i class="fa fa-pencil-square-o" ></i>
              </a>              
              </td>              
              <td>
              <a tabindex="0" class="btn btn-danger btn-circles" @click="removepermissions(index)">
                <i class="fa fa-trash-o" ></i>
              </a>
              </td>                
            </tr>
          </tbody>
          <div class="padding">
            <button class="btn btn-success m-t" data-toggle="modal" data-target="#addPermissionModal" @click="resetform">
              <i class="fa fa-plus"></i>&nbsp;&nbsp;Add Permissions
            </button>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    },
    methods: { 
        removepermissions: function (index) {
            this.$store.state.permissions.splice(index, 1)
            this.$toastr('success', 'Removed Successfully!')
            },
        resetform: function(){
            document.getElementById("permissionForm").reset();
            },
        viewPermission: function(data){
            this.$store.state.fordynamicview = data
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