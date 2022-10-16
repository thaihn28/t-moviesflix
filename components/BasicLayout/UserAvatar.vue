<template>
  <div class="flex items-center">
<!--    <div v-if="loggedIn || true" class="leading-normal">-->
    <div v-if="loggin" class="leading-normal">
      <a-popover v-model="visible" trigger="click" placement="bottomRight">
        <span class="inline-flex items-center cursor-pointer gap-4">
          <a-avatar src="https://joeschmoe.io/api/v1/random"/>
        </span>
        <template slot="content">
          <div class="min-w-[144px] max-h-dropdown-header">
            <div
              class="p-4  border-gray-200 flex gap-3 items-center cursor-pointer hover:bg-[#dbdbdb] hover:rounded-t"
            >
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
              <span>{{ userDisplayName }}</span>
            </div>
            <div
              class="p-4 border-b border-gray-200 flex gap-3 items-center cursor-pointer hover:bg-[#dbdbdb] hover:rounded-t"
              @click="goToProfile"
            >
              <IconRequestActive/>
              <span>Profile Management</span>
            </div>
            <div
              class="p-4 flex items-center gap-3 cursor-pointer hover:bg-[#dbdbdb] hover:rounded-b"
              @click="logout"
            >
              <IconLogout/>
              <span class="text-primary">Sign Out</span>
            </div>
          </div>
        </template>
      </a-popover>
    </div>
    <a-button class="ant-btn-primary" v-else @click="login">Sign in</a-button>
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  components: {
  },
  data() {
    return {
      visible: false,
      userDisplayName: 'Thai Hoang',
      loggin: false
    }
  },
  // computed: {
  //   loggedIn() {
  //     return this.$auth.loggedIn
  //   },
  // },
  // created() {
  //   if (this.loggedIn)
  //     this.getUserDisplayName()
  // },
  methods: {
    async getUserDisplayName() {
      const currentUser = await this.$repositories.currentUser.index({})
      if (currentUser) {
        this.userDisplayName = currentUser.display_name ? currentUser.display_name: ''
      } else {
        this.userDisplayName = ''
      }
    },
    login() {
      this.loggin = true
      // this.$auth.login()
    },
    async logout() {
      // await this.$router.push('/login')
      this.$store.commit('common/setCurrentProject', {})
      // this.$cookies.removeAll()
      this.$store.commit('common/setRecentlyServices', [])
      // await this.$auth.logout()
    },
    goToProfile() {
      this.visible = false
      this.$router.push(this.localeRoute('/user/profile'))
    },
  },
}

</script>

<style lang="scss" scoped>
.ant-avatar-image{
  @apply bg-white;
}
</style>
