<template>
  <div class="mt-32 mb-16 mx-16">
    <div class="flex flex-col ml-32 lg:items-start items-center">
      <span class="text-white font-semibold text-[45px] mb-4">
        Sign in with your account
        <span class="dot"></span>
      </span>
      <span class="text-[20px] text-subText">Not a member?
            <span class="text-secondary cursor-pointer ml-2 hover:underline transition-all"
                  @click="redirectToSignUp">Sign up</span>
      </span>
      <a-form
        :model="formLogin"
        class="relative mt-8 w-50% flex flex-col gap-y-[16px] md:w-[500px] z-40"
        name="basic"
        autocomplete="off"
        @submit.pr.prevent="login"
      >
        <a-form-item
          class="relative w-full text-white"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formLogin.username" :allow-clear="true" placeholder="Username or Email" show-count/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
            <icon-user/>
          </span>
        </a-form-item>
        <a-form-item
          class="relative w-full text-white"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input :type="isShowPass ? 'text' : 'password'" v-model:value="formLogin.password" :allow-clear="true"
                   placeholder="Password" show-count/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4" @click="showPass">
            <icon-hide-password v-if="isShowPass" class="cursor-pointer"/>
            <icon-password v-else class="cursor-pointer"/>
          </span>
        </a-form-item>
        <div class="w-full flex gap-x-5 justify-center">
          <a-button type="primary"
                    danger
                    class="ant-btn primary-2 mt-2 px-[36px] h-[44px] text-lg font-normal"
                    html-type="submit"
          >
            Sign in
          </a-button>
        </div>
      </a-form>
    </div>
    <div class="lg:block hidden fixed right-0 top-0 left-[50%] bottom-0  pointer-events-none h-full overflow-hidden">
      <div class="sign-up-background absolute inset-0 z-50"></div>
      <img class="w-full z-10 opacity-40"
           src="https://www.themoviedb.org/t/p/original/8gHc1cthgTOkmMiOREodCVZgJ7P.jpg"
           alt="">
    </div>
  </div>
</template>

<script>
import IconUser from "assets/images/icons/iconUser";
import IconPassword from "assets/images/icons/iconPassword";
import IconHidePassword from "assets/images/icons/iconHidePassword";

export default {
  name: "LoginPage",
  components: {IconPassword, IconUser, IconHidePassword},
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      isShowPass: false
    }
  },
  methods: {
    showPass() {
      this.isShowPass = !this.isShowPass
    },
    redirectToSignUp(){
      this.$router.push('/sign-up')
    },
    async login() {
      try {
        const payload = {
          username: this.formLogin.username,
          password: this.formLogin.password
        }
        const response = await this.$axios.post('/auth/login', payload)
        console.log(response)
        // await this.$auth.strategy.setToken()
      } catch (e) {
        this.$notification.error({
          message: e,
          placement: 'topRight',
          duration: 2
        })
      }

    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/AuthForm/style.scss";
</style>
