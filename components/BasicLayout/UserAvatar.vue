<template>
  <div class="flex items-center">
    <div v-if="loggedIn" class="leading-normal">
      <a-popover v-model="visible" trigger="click" placement="bottomRight">
        <span class="inline-flex items-center cursor-pointer gap-4">
          <a-avatar src="https://joeschmoe.io/api/v1/random"/>
        </span>
        <template slot="content">
          <div class="min-w-[144px] max-h-dropdown-header">
            <div
              class="p-4  border-gray-200 flex gap-3 items-center cursor-pointer hover:bg-[#dbdbdb] hover:rounded-t"
            >
              <a-avatar src="https://joeschmoe.io/api/v1/random"/>
              <span class="text-black">{{ userDisplayName }}</span>
            </div>
            <div
              class="p-4 border-b border-gray-200 flex gap-3 items-center cursor-pointer hover:bg-[#dbdbdb] hover:rounded-t"
            >
              <IconRequestActive/>
              <span class="text-black">Profile Management</span>
            </div>
            <div
              class="p-4 flex items-center gap-3 cursor-pointer hover:bg-[#dbdbdb] hover:rounded-b"
              @click="logout"
            >
              <IconLogout/>
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

export default {
  name: 'UserAvatar',
  components: {},
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    userDisplayName(){
      return this.$auth.user.username
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    async logout() {
      await this.$router.push('/login')
      await this.$auth.logout()
    },
  },
}

</script>

<style lang="scss" scoped>
.ant-avatar-image {
  @apply bg-white;
}
</style>
