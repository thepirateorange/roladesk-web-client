<template>
    <div class="row no-gutter">
        <div class="padding">
            <h3 class="text-center">Notifications</h3>
            <div class="list-group m-b">
                <router-link :to="{ name: 'Notification'}" class="list-group-item">
                    <span class="pull-right text-muted m-l-xs">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                    </span>                
                    <span class="pull-right label info">12</span> Consectetur adipiscing elit.
                </router-link>
                <router-link :to="{ name: 'Notification'}" class="list-group-item">
                    <span class="pull-right text-muted m-l-xs">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                    </span>                
                    <span class="pull-right label success">5</span> Lorem ipsum dolor sit amet
                </router-link>
                <router-link :to="{ name: 'Notification'}" class="list-group-item">
                    <span class="pull-right text-muted m-l-xs">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                    </span>
                    <span class="pull-right label primary">4</span> Ullamcorper solli citudin venenatis ipsum
                </router-link>
                <router-link :to="{ name: 'Notification'}" class="list-group-item">
                    <span class="pull-right text-muted m-l-xs">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                    </span>                
                    <span class="pull-right label danger">9</span> Aliquam sodales nisi nec condimentum
                </router-link>
                <router-link :to="{ name: 'Notification'}" class="list-group-item">
                    <span class="pull-right text-muted m-l-xs">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                    </span>                
                    <span class="pull-right label warning">10</span> Mauris at pellentesque
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // sets meta title
    name: 'notification',
    metaInfo: {
        title: 'Roladesk' + ' | Notifications',
        // override the parent template and just use the above title only
        titleTemplate: null
    },
    mounted: function() {
        this.$store.state.pageTitle = 'Notifications'
        if (this.$store.state.dataRefreshed == true) this.$router.push({
            name: 'Initialize'
        })
    }  
}
</script>

