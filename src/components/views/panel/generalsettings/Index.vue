<template>
      <div class="app-body">
        <div class="row-col">
          <div class="col-sm-3 col-lg-2 b-r">
            <div class="p-y">
              <div class="nav-active-border left b-primary">
                <ul class="nav nav-sm">
                  <li class="nav-item">
                    <a class="nav-link block active" href="#" data-toggle="tab" data-target="#tab-1">Settings 1</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-2">Settings 2</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-3">Settings 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-9 col-lg-10 light bg">
            <div class="tab-content pos-rlt">
              <div class="tab-pane active" id="tab-1">
                <div class="p-a-md b-b _600">Settings 1</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                    sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                    id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                    ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                  </p>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="p-a-md b-b _600">Settings 2</div>
                  <p>                  
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                    sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                    id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                    ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                  </p>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="p-a-md b-b _600">Settings 3</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.                
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    // sets meta title
    name: 'generalsettings',
    metaInfo: {
      title: 'Roladesk' + ' | Settings',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Settings'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    }
  }

</script>
