<template>
  <div class="row no-gutter">
    <div class="padding">
       <div class="col-sm-9 col-lg-6 light bg">
           <p>Update Ticket details below</p>
          <div class="box-divider m-a-0"></div>
          <div class="box-body">              
            <form role="form">
              <div class="form-group row">
                <label class="col-sm-2 form-control-label">Ticket Type</label>
                <div class="col-sm-10">
                  <select id="tickettype" v-model="ticket.tickettype" class="form-control select2 select2-hidden-accessible" data-ui-jp="select2" data-ui-options="{theme: 'bootstrap'}"
                      tabindex="-1" aria-hidden="true">
                          <option value="Sale">Sale</option>
                          <option value="Support">Support</option>
                          <option value="Billing">Billing</option>
                  </select>
                </div>
              </div>                           
              <div class="form-group row">
                <label class="col-sm-2 form-control-label">Subject</label>
                <div class="col-sm-10">
                  <input v-model="ticket.subject" type="text" id="subject" class="form-control" placeholder="Subject">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 form-control-label">Message</label>
                <div class="col-sm-10">
                  <textarea v-model="ticket.message" id="message" class="form-control" rows="2"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 form-control-label">Sample File</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" id="inputFileToLoad" v-on:change="uploadFile">
                </div>
              </div>
              <div class="form-group row m-t-md">
                <div class="col-sm-offset-2 col-sm-10">
                  <button class="btn success" @click="clckUpdateTicket">Update</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // sets meta title
    name: 'updateticket',
    metaInfo: {
      title: 'Roladesk' + ' | Update Ticket',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    data: function() {
        return {
            ticket: {
                id: this.$store.state.viewticket.id,
                tickettype: this.$store.state.viewticket.tickettype,
                subject: this.$store.state.viewticket.subject,
                message: this.$store.state.viewticket.message,
                sampleFile: this.$store.state.viewticket.sampleFile,
                datestamp: this.$store.state.viewticket.datestamp
            }
        }
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Update Ticket'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    },
    methods: {
        clckUpdateTicket: function(e){
            e.preventDefault()
            this.$store.state.supportticket.support.map((item, index) => {
                    if(item.id == this.ticket.id){
                        this.$store.state.supportticket.support.splice(index, 1, this.ticket)
                    }
                });
            this.$toastr('success','Updated Successfully!');
            this.$router.push({ name: 'HelpDesk' });
            },
        uploadFile: function(){
            var self = this
            // get input fil to load
            var filesSelected = document.getElementById("inputFileToLoad").files;
            // check if file selected
            if (filesSelected.length > 0) {
                var fileToLoad = filesSelected[0];
                var fileReader = new FileReader();
                    fileReader.onload = function(event) {
                    //save base 64 result file
                    self.ticket.sampleFile = event.target.result;
                    };
                // this is important
                fileReader.readAsDataURL(fileToLoad);
            }   
        }
    }
  }
</script>
