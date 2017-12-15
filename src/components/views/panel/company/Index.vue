<template>
  <div>
    <div class="row-col">
      <div class="col-sm-3 col-lg-2 b-r">
        <div class="p-y">
          <div class="nav-active-border left b-primary">
            <ul class="nav nav-sm">
              <li class="nav-item">
                <a :class="[{ 'active':  this.$store.state.activetabs == 1 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-1">General Info</a>
              </li>
              <li class="nav-item">
                <a :class="[{ 'active':  this.$store.state.activetabs == 2 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-2">Employees</a>
              </li>
              <li class="nav-item">
                <a :class="[{ 'active':  this.$store.state.activetabs == 3 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-3">Teams</a>
              </li>
              <li class="nav-item">
                <a :class="[{ 'active':  this.$store.state.activetabs == 4 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-4">Roles</a>
              </li>
              <li class="nav-item">
                <a :class="[{ 'active':  this.$store.state.activetabs == 5 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-5">Permissions</a>
              </li>
              <li class="nav-item">
                <a :class="[{ 'active':  this.$store.state.activetabs == 6 }, 'nav-link block']" href="#" data-toggle="tab" data-target="#tab-6">Channels</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-9 col-lg-10 light bg">
        <div class="tab-content pos-rlt">
          <div :class="[{ 'active':  this.$store.state.activetabs == 1 }, 'tab-pane']" id="tab-1">
            <div class="col-md-4">
              <h5>Default Company</h5>
              <ul>
                <li v-for="(item, index) in this.$store.state.company">
                  [ {{ index }} ] {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div :class="[{ 'active':  this.$store.state.activetabs == 2 }, 'tab-pane']" id="tab-2">
            <Employee></Employee>
          </div>
          <div :class="[{ 'active':  this.$store.state.activetabs == 3 }, 'tab-pane']" id="tab-3">
            <Teams></Teams>
          </div>
          <div :class="[{ 'active':  this.$store.state.activetabs == 4 }, 'tab-pane']" id="tab-4">
            <Roles></Roles>
          </div>
          <div :class="[{ 'active':  this.$store.state.activetabs == 5 }, 'tab-pane']" id="tab-5">
            <Permissions></Permissions>
          </div>
          <div :class="[{ 'active':  this.$store.state.activetabs == 6 }, 'tab-pane']" id="tab-6">
            <channels></channels>
          </div>

          <!-- <hr /> -->
          <!-- <div class="tab-pane" id="tab-1">
          <h5>Companies Available</h5>
          <ul>
            <li v-for="company in this.$store.state.companies">
              [ {{ company.id }} ] {{ company.name }}
              <span v-if="company.is_default">(DEFAULT)</span>
            </li>
          </ul>
        </div> -->
        </div>
      </div>
    </div>

    <!-- Add Team modal -->
    <div id="addTeamModal" class="modal fade" tabindex="5" role="dialog" aria-labelledby="TeamModal" style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form role="form" id="modalForm">
              <div class="form-group">
                <label for="exampleInputEmail1">Add Team</label>
                <input type="text" class="form-control" v-model="newteam.name" placeholder="Enter New Team" @change="newteamentered">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="addTeam">Add Team</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->

    <!-- Add Member modal -->
    <div id="addMemberModal" class="modal fade" tabindex="5" role="dialog" aria-labelledby="MemberModal" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="MemberModal">Add Members</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <a class="list-group-item" v-for="(employee, index) in $store.state.employees" :key="employee.id">
              <button class="btn btn-sm rounded b-success text-success pull-right" @click="addmember(employee.id)">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button> &nbsp; {{employee.fname}} {{employee.lname}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->

    <!-- Add Employee modal     -->
    <div id="addEmployeeModal" class="modal fade" tabindex="5" role="dialog" aria-labelledby="EmployeeModal" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form role="form" id="employeeForm">
              <div class="row m-b">
                <div class="form-group col-sm-6">
                  <label for="exampleInputEmail1">First Name</label>
                  <input type="text" class="form-control" v-model="employee.fname" placeholder="Enter First Name" @change="newemployee">
                </div>
                <div class="form-group col-sm-6">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input type="text" class="form-control" v-model="employee.lname" placeholder="Enter Last Name">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="addEmployee">Add Employee</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end employee modal -->

    <!-- Add Role modal     -->
    <div id="addRoleModal" class="modal fade" tabindex="5" role="dialog" aria-labelledby="RoleModal" style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form role="form" id="roleForm">
              <div class="form-group">
                <label for="exampleInputEmail1">Role</label>
                <input type="text" class="form-control" v-model="role.label" placeholder="Enter First Name" @change="newrole">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea class="form-control" v-model="role.description" rows="6" data-minwords="6" required="" placeholder="Notes / Description"
                  data-parsley-id="25" data-gramm_editor="true" style="z-index: auto; position: relative; line-height: 20px; font-size: 16px; transition: none; background: transparent !important;">
                </textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="addRole">Add Role</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end role modal -->

    <!-- Add Permissions modal     -->
    <div id="addPermissionModal" class="modal fade" tabindex="5" role="dialog" aria-labelledby="PermissionModal" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form role="form" id="permissionForm">

              <div class="form-group">
                <label for="exampleInputEmail1">Permission</label>
                <input type="text" class="form-control" v-model="permission.label" placeholder="Enter First Name" @change="newpermission">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea class="form-control" v-model="permission.description" rows="6" data-minwords="6" required="" placeholder="Notes / Description"
                  data-parsley-id="25" data-gramm_editor="true" style="z-index: auto; position: relative; line-height: 20px; font-size: 16px; transition: none; background: transparent !important;">
                </textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="addPermission">Add Permission</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end permissions modal -->

    <!-- Update Employee modal     -->
    <div id="updateEmployeeModal" class="modal fade" tabindex="5" role="dialog" aria-labelledby="updateEmployeeModal" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form role="form" id="employeeForm">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" v-model="updateemployee.fname">
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" v-model="updateemployee.lname">
              </div>              
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>&nbsp;
            <button type="button" class="btn btn-success" @click="updateEmployee">Update</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end permissions modal -->

    <!-- view modal     -->
    <div id="viewModal" class="modal fade" tabindex="1" role="dialog" aria-labelledby="ViewModal" style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">View Details</h5>
            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> -->
          </a>
          </div>
          <div class="modal-body">
            <form role="form" id="employeeForm">
              <div class="row m-b">
                <div class="form-group col-sm-2" v-if="$store.state.fordynamicview.id">
                  <label>ID</label>
                  <input type="text" v-model="$store.state.fordynamicview.id" class="form-control" readonly>
                </div>
                <div class="form-group col-sm-10" v-if="$store.state.fordynamicview.name">
                  <label>Label</label>
                  <input type="text" v-model="$store.state.fordynamicview.name" class="form-control" readonly>
                </div>
                <div class="form-group col-sm-5" v-if="$store.state.fordynamicview.fname">
                  <label>First Name</label>
                  <input type="text" v-model="$store.state.fordynamicview.fname" class="form-control" readonly>
                </div>
                <div class="form-group col-sm-5" v-if="$store.state.fordynamicview.lname">
                  <label>Last Name</label>
                  <input type="text" v-model="$store.state.fordynamicview.lname" class="form-control" readonly>
                </div>
                <div class="form-group col-sm-10" v-if="$store.state.fordynamicview.label">
                  <label>Label</label>
                  <input type="text" v-model="$store.state.fordynamicview.label" class="form-control" readonly>
                </div>
                <div class="form-group col-sm-12" v-if="$store.state.fordynamicview.description">
                  <label>Description</label>
                  <textarea class="form-control" v-model="$store.state.fordynamicview.description" rows="3" readonly></textarea>
                </div>
                <!-- for team members -->
                <div class="form-group col-sm-2" v-if="$store.state.fordynamicview.member">
                  <label>ID</label>
                  <input class="form-control" v-show="$store.state.fordynamicview.member == employee.id" v-model="employee.id" v-for="employee in $store.state.employees" :key="employee.id" rows="1" readonly>
                </div>
                <div class="form-group col-sm-5" v-if="$store.state.fordynamicview.member">
                  <label>First Name</label>
                  <input class="form-control" v-show="$store.state.fordynamicview.member == employee.id" v-model="employee.fname" v-for="employee in $store.state.employees" :key="employee.id" rows="1" readonly>
                </div>
                <div class="form-group col-sm-5" v-if="$store.state.fordynamicview.member">
                  <label>Last Name</label>
                  <input class="form-control" v-show="$store.state.fordynamicview.member == employee.id" v-model="employee.lname" v-for="employee in $store.state.employees" :key="employee.id" rows="1" readonly>
                </div>                
                <!-- team memebers end -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end view modal -->

  </div>
</template>

<script>
  import Employee from './Employee.vue'
  import Teams from './Teams.vue'
  import Roles from './Roles.vue'
  import Permissions from './Permissions.vue'
  import Channels from './Channels.vue'
  import {mapGetters} from 'vuex';

  export default {
    // sets meta title
    name: 'company',
    metaInfo: {
      title: 'Roladesk' + ' | Company',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    components: {
      Employee,
      Teams,
      Channels,
      Roles,
      Permissions
    },
    data: function () {
      return {
        'newteam': {
          'id': 0,
          'name': ''
        },
        'employee': {
          'id': 0,
          'fname': '',
          'lname': ''
        },
        'role': {
          'id': 0,
          'label': '',
          'description': ''
        },
        'permission': {
          'id': 0,
          'label': '',
          'description': ''
        },
        'updateemployee': {
          'fname': '',
          'lname': ''
        }      
      }
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Company'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
      if (this.$store.state.activetabs == 0) {
        this.$store.state.activetabs = 1
      }
    },
    methods: {
      addTeam: function (e) {
        e.preventDefault()
        if (this.newteam.name != '') {
          this.$store.commit('addTeam', this.newteam)
          // this.$store.state.teams.push(this.newteam)
          this.$toastr('success', 'Added Successfully!');
          $("#addTeamModal").modal('hide');
        } else {
          this.$toastr('warning', 'The field is empty!')
        }
      },
      newteamentered: function () {
        this.newteam.id = Math.max.apply(Math, this.$store.state.teams.map(function (o) {
          return o.id
        })) + 1
      },
      resetnewteamid: function () {
        this.newteam.id = 0
      },
      addmember: function (id) {
        // long way - testing if ok
        var obj = {}
        obj["team"] = this.$store.state.passteamid
        obj["member"] = id
        this.$store.state.teammembers.push(obj)
        $("#addMemberModal").modal('hide');
        this.$store.state.forrefresh = Date.now()
        this.$toastr('success', 'Added Successfully!')
      },
      updateEmployee: function(){
        var employee = this.$store.state.employees
        var index = employee.map(x => x.id).indexOf(this.updateemployee.id)
        this.$store.state.employees.splice(index, 1, this.updateemployee )
        $("#updateEmployeeModal").modal('hide');
      },
      addEmployee: function () {
        this.$store.state.employees.push(this.employee)
        $("#addEmployeeModal").modal('hide');
        this.$toastr('success', 'Added Successfully!')
      },
      newemployee: function () {
        this.employee.id = Math.max.apply(Math, this.$store.state.employees.map(function (o) {
          return o.id
        })) + 1
      },
      addRole: function () {
        this.$store.state.roles.push(this.role)
        $("#addRoleModal").modal('hide');
        this.$toastr('success', 'Added Successfully!')
      },
      newrole: function () {
        if (this.$store.state.roles.length != 0) {
          this.role.id = Math.max.apply(Math, this.$store.state.roles.map(function (o) {
            return o.id
          })) + 1
        } else {
          this.role.id = 1
        }
      },
      addPermission: function () {
        this.$store.state.permissions.push(this.permission)
        $("#addPermissionModal").modal('hide');
        document.getElementById("permissionForm").reset();
        this.$toastr('success', 'Added Successfully!')
      },
      newpermission: function () {
        if (this.$store.state.permissions.length != 0) {
          this.permission.id = Math.max.apply(Math, this.$store.state.permissions.map(function (o) {
            return o.id
          })) + 1
        } else {
          this.permission.id = 1
        }
      }
    },
    computed: mapGetters({
      refresh: 'forRefresh'
    }),
    watch: {
      // watch if added then refresh
      refresh: {
        handler: function(val) {
          this.updateemployee = this.$store.state.forupdate
        },
        deep: true
      }
    }    
  }
</script>
