<template>
  <div id="adminio_messages">
    <h3>Messages</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Новые сообщения" name="new">
        <div class="card">
          <div class="card-body">
            <div class="row my-1 border-bottom" v-for="(item, key) in newMessages" v-bind:key="item.id">
              <div class="col-lg-12 m-1">
                # {{item.id}} {{item.name}} {{item.email}}
                <button class="ml-1 py-1 px-2 btn btn-sm btn-danger" @click="changeStatus(key)">
                  <i class="fas fa-eye-slash fa-lg"></i>
                </button>
              </div>
              <div class="col-12 m-1">Тема: {{item.subject}}</div>
              <div class="col-12 m-1">{{item.message}}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Архив" name="old">
        <div class="card">
          <div class="card-body">
            <div class="row my-1 border-bottom" v-for="item in viewedMessages" v-bind:key="item.id">
              <div class="col-lg-12 m-1">
                # {{item.id}} {{item.name}} {{item.email}}
              </div>
              <div class="col-12 m-1">Тема: {{item.subject}}</div>
              <div class="col-12 m-1">{{item.message}}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data () {
    return {
      activeName: 'new',
      newMessages: [],
      viewedMessages: []
    }
  },
  created () {
    this.new()
  },
  methods: {
    changeStatus (index) {
      // console.log(this.newMessages[index])
      this.$store.dispatch('setStatusMessage', this.newMessages[index].id).then(response => {
        this.newMessages.splice(index, 1)
      }).catch(() => {})
    },
    handleClick (tab, event) {
      if (tab.name === 'new') {
        this.new()
      }
      if (tab.name === 'old') {
        this.viewed()
      }
    },
    new () {
      this.$store.dispatch('getNewMessages').then(response => {
        this.newMessages = response
      }).catch(() => {})
    },
    viewed () {
      this.$store.dispatch('getViewedMessages').then(response => {
        this.viewedMessages = response.data
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>
