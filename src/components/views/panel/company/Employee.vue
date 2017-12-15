<template>
  <div class="app-body">
    <div class="row no-gutter">
      <div class="col-sm-9 col-lg-12 light bg b-r">
        <div class="p-a-md b-b _600">
          <i class="fa fa-user"></i>&nbsp;&nbsp;Employee
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in $store.state.employees" :key="employee.id">
              <td scope="row">{{employee.id}}</td>
              <td>{{employee.fname}}</td>
              <td>{{employee.lname}}</td>
              <td>                
              <a tabindex="0" class="btn btn-success btn-circles" role="button"data-toggle="modal" data-target="#viewModal" @click="viewemployee(employee)">
                <i class="fa fa-eye" ></i>
              </a>
              <td> 
              <a tabindex="0" class="btn btn-primary btn-circles" role="button"data-toggle="modal" data-target="#updateEmployeeModal"  @click="updateemployee(employee)">
                <i class="fa fa-pencil-square-o" ></i>
              </a>              
              </td>              
              <td>
              <a tabindex="0" class="btn btn-danger btn-circles" @click="removeemployee(index)">
                <i class="fa fa-trash-o" ></i>
              </a>
              </td>
              <!-- old desing -->
                <!-- <button class="btn btn-sm rounded b-danger text-danger pull-right" @click="removeemployee(index)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                <button class="btn btn-sm rounded b-success text-success pull-right" data-toggle="modal" data-target="#viewModal" @click="viewemployee(employee)">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button class="btn btn-sm rounded b-info text-info pull-right">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>                 -->
            </tr>
          </tbody>
          <div class="padding">
            <button class="btn btn-success m-t" data-toggle="modal" data-target="#addEmployeeModal" @click="resetform">
              <i class="fa fa-plus"></i>&nbsp;&nbsp;Add Employee
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
        removeemployee: function (index) {
            this.$store.state.employees.splice(index, 1)
            this.$toastr('success', 'Removed Successfully!')
            },
        resetform: function(){
            document.getElementById("employeeForm").reset();
            },
        viewemployee: function(data){
            this.$store.state.fordynamicview = data
            },
        updateemployee: function(data){
            this.$store.state.forupdate = data
            this.$store.state.forrefresh = Date.now()
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