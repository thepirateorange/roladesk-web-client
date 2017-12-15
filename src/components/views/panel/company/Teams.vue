<template>
  <div class="app-body">
    <div class="row no-gutter">
      <div v-if="hideteammembers" class="col-sm-9 col-lg-12 light bg b-r'">
        <div class="p-a-md b-b _600">
          <i class="fa fa-users"></i>&nbsp;&nbsp;Teams &nbsp;&nbsp;
          <button class="btn btn-sm info" @click="showteammembers">Manage Team Members</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Team</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(team, index) in $store.state.teams" :key="team.id">
              <td scope="row">{{team.id}}</td>
              <td>{{team.name}}</td>
              <td>
                <a tabindex="0" class="btn btn-success btn-circles" role="button" data-toggle="modal" data-target="#viewModal" @click="viewTeam(team)">
                  <i class="fa fa-eye"></i>
                </a>
                <td>
                  <a tabindex="0" class="btn btn-primary btn-circles">
                    <i class="fa fa-pencil-square-o"></i>
                  </a>
                </td>
                <td>
                  <a tabindex="0" class="btn btn-danger btn-circles" @click="removeteam(index, team)">
                    <i class="fa fa-trash-o"></i>
                  </a>
                </td>
            </tr>
          </tbody>
          <div class="padding">
            <button class="btn btn-success m-t" data-toggle="modal" data-target="#addTeamModal" @click="clearmodaldata">
              <i class="fa fa-plus"></i>&nbsp;&nbsp;Add Team
            </button>
          </div>
        </table>
      </div>
      <div v-if="!hideteammembers">
        <div class="col-sm-9 col-lg-12 light bg b-r">
          <div class="p-a-md b-b _600">
            <i class="fa fa-users"></i>&nbsp;&nbsp;{{teamname}} Teams
            <a tabindex="0" class="btn btn-default btn-circles pull-right" role="button" @click="hideteammember">
              <i class="fa fa-times"></i>
            </a>
          </div>
          <!-- teams -->
          <div class="col-sm-6 col-lg-3 light bg b-r">
            <div class="padding">
              <a class="list-group-item" v-for="(team, index) in $store.state.teams" :key="team.id" @click="updateid(team.id, team.name)">
                {{team.name}}
              </a>
            </div>
          </div>
          <!-- one to many employee per team -->
          <div class="col-sm-9 col-lg-9 light bg">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(teammember, index) in newteam" :key="teammember.team">
                  <td scope="row" v-show="teammember.member == employee.id" v-for="employee in $store.state.employees" :key="employee.id">{{employee.id}}</td>
                  <td v-if="teammember.member == employee.id" v-for="employee in $store.state.employees" :key="employee.id">{{employee.fname}}&nbsp;&nbsp;{{employee.lname}}</td>
                  <td>
                    <a tabindex="0" class="btn btn-success btn-circles" role="button" data-toggle="modal" data-target="#viewModal" @click="viewTeamMember(teammember)">
                      <i class="fa fa-eye"></i>
                    </a>
                    <td>
                      <a tabindex="0" class="btn btn-primary btn-circles">
                        <i class="fa fa-pencil-square-o"></i>
                      </a>
                    </td>
                    <td>
                      <a tabindex="0" class="btn btn-danger btn-circles" @click="removemember(index, teammember)">
                        <i class="fa fa-trash-o"></i>
                      </a>
                    </td>
                </tr>
              </tbody>
              <div class="padding">
                <button class="btn btn-success m-t" data-toggle="modal" data-target="#addMemberModal">
                  <i class="fa fa-plus"></i>&nbsp;&nbsp;Add Members
                </button>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex';
  export default {
    data: function() {
      return {
        newteam: '',
        teamname: '',
        hideteammembers: true
      }
    },
    mounted: function() {
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
      if (this.$store.state.teams.length != 0) {
        this.newteam = this.$store.state.teammembers.filter(members => {
          return members.team == this.$store.state.teams[0].id
        });
        this.teamname = this.$store.state.teams[0].name
        this.$store.state.passteamid = this.$store.state.teams[0].id
      }
    },
    methods: {
      removeteam: function(index) {
        this.$store.state.teams.splice(index, 1)
        this.$toastr('success', 'Removed Successfully!')
      },
      removemember: function(index) {
        this.$store.state.teammembers.splice(index, 1)
        this.updateid(this.$store.state.passteamid, this.teamname)
        this.$toastr('success', 'Removed Successfully!')
      },
      clearmodaldata: function() {
        document.getElementById("modalForm").reset();
      },
      updateid: function(id, name) {
        this.newteam = this.$store.state.teammembers.filter(members => {
          return members.team == id;
        });
        this.teamname = name
        this.$store.state.passteamid = id
      },
      viewTeam: function(data) {
        this.$store.state.fordynamicview = data
      },
      viewTeamMember: function(data){
        this.$store.state.fordynamicview = data
      },     
      showteammembers: function() {
        this.hideteammembers = false
      },
      hideteammember: function() {
        this.hideteammembers = true
      }
    },
    computed: mapGetters({
      refresh: 'forRefresh'
    }),
    watch: {
      // watch if added then refresh
      refresh: {
        handler: function(val) {
          this.updateid(this.$store.state.passteamid, this.teamname)
        },
        deep: true
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
