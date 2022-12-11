<template>
  <div class="flex items-center">
    <div v-if="loggedIn" class="flex">
      <a-popover trigger="click" placement="bottomRight">
        <span class="inline-flex items-center cursor-pointer gap-4">
          <a-avatar src="https://robohash.org/stefan-three"/>
        </span>
        <template slot="content">
          <div class="min-w-[144px] max-h-dropdown-header">
            <div
              class="p-4  border-gray-200 flex gap-3 items-center cursor-pointer hover:bg-[#dbdbdb] hover:rounded-t"
            >
              <a-avatar src="https://robohash.org/stefan-three"/>
              <span class="text-black">{{ userDisplayName }}</span>
            </div>
            <div
              class="p-4 border-b border-gray-200 flex gap-3 items-center cursor-pointer hover:bg-[#dbdbdb] hover:rounded-t"
            >
              <span class="text-black">Profile Management</span>
            </div>
            <div
              class="p-4 flex items-center gap-3 cursor-pointer hover:bg-[#dbdbdb] hover:rounded-b"
              @click="logout"
            >
              <icon-logout/>
              <span class="text-black">Sign Out</span>
            </div>
          </div>
        </template>
      </a-popover>
    </div>
    <a-button v-else type="primary" class="ant-btn font-medium primary-2" danger @click="login">Sign in</a-button>
  </div>
</template>

<script>
import iconLogout from "assets/images/icons/iconLogout";

export default {
  name: 'UserAvatar',
  components: {
    iconLogout
  },
  computed: {
    loggedIn() {
      const user = this.$store.getters["user/getUser"]
      return Object.keys(user).length !== 0
    },
    userDisplayName(){
      const username = this.$store.getters["user/getUser"].username
      return username
    }
  },
  created() {
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    async logout() {
      // await this.$auth.$storage.removeUniversal('auth_loggedIn')
      await this.$store.commit('user/removeUser', {})
      await this.$auth.logout()
      await this.$router.push('/login')
    },
  },
}

</script>

<style lang="scss" scoped>
.ant-avatar-image {
  @apply bg-white;
}
</style>
