<template>
  <div class="accordion" role="tablist">
    <b-card v-bind:key="JSON.stringify(item)+index" no-body v-for="(item, index) in dataParsed">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="accordionID+index" variant="info">{{item.title}}</b-button>
      </b-card-header>
      <b-collapse :id="accordionID+index" :accordion="accordionID" role="tabpanel">
        <b-card-body>
          <span v-html="item.content"></span>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import {BCollapse, BButton, BCard, BCardHeader, BCardBody, VBToggle} from 'bootstrap-vue'
import {v4 as uuidv4} from 'uuid'
export default {
  name: "Accordeon",
  props: {
    data: {
      required: false,
      type: String
    }
  },
  components: {
    BCollapse, BButton, BCard, BCardHeader, BCardBody
  },
  directives: {
    'b-toggle': VBToggle
  },
  computed: {
    dataParsed() {
      return JSON.parse(this.data);
    },
    accordionID() {
      return uuidv4();
    }
  }
}
</script>

<style scoped>

</style>
