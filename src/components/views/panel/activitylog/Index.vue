<template>
    <div class="row no-gutter">
        <div class="padding">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">IP Address</th>
                    <th scope="col">Message</th>
                    <th scope="col">Log Time</th>
                    <th scope="col">More Info</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in userActivityLog" :key="data.created_at">
                    <td>{{ data.ip_address }}</td>
                    <td>{{ data.description }}</td>
                    <td>{{ data.created_at }}</td>
                    <td>
                    <a tabindex="0" class="btn btn-primary btn-circles" role="button" data-toggle="popover" data-trigger="focus" title="User Agent" v-bind:data-content="data.user_agent">
                        <i class="fa fa-info" ></i>
                    </a>
                    </td>   
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'activity-log',
    metaInfo: {
    title: 'Roladesk' + ' | Activity-Log',
    // override the parent template and just use the above title only
    titleTemplate: null
    },
    mounted: function(){
        this.$store.state.pageTitle = 'Activity Log'
        if(this.$store.state.dataRefreshed == true) this.$router.push({ name: 'Initialize' })        
        },
    data: function () {
        return {
            rawData: this.$store.state.activity_log_data,
            userActivityLog: '',
            disable: ''
        }
    },
    created: function() {
        if( this.rawData != '' ) this.userActivityLog = JSON.parse( this.rawData )
    }
}

</script>

<style scoped>

    /* body{margin:40px;} */

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

