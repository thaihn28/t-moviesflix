<template>
  <div class="mt-32 mb-16 mx-16">
    <div class="flex flex-col ml-32 lg:items-start items-center">
      <span class="text-white font-semibold text-[45px] mb-4">
        Sign in with your account
        <span class="dot"></span>
      </span>
      <span class="text-[20px] text-subText">Not a member?
            <span class="text-secondary cursor-pointer ml-2 hover:underline transition-all"
                  @click="notify">Sign up</span>
      </span>
      <a-form
        class="relative mt-8 w-50% flex flex-col gap-y-[16px] md:w-[500px] z-40"
        name="basic"
        autocomplete="off"
      >
        <a-form-item class="relative w-full text-white" :rules="[{ required: true }]">
          <a-input :allow-clear="true" placeholder="Username or Email" show-count/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
            <icon-user/>
          </span>
        </a-form-item>
        <a-form-item class="relative w-full text-white" :rules="[{ required: true }]">
          <a-input type="password" :allow-clear="true" placeholder="Password" show-count/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
          <icon-password/>
          </span>
        </a-form-item>
        <div class="w-full flex gap-x-5 justify-center">
          <a-button type="primary"
                    danger
                    class="ant-btn primary-2 mt-2 px-[36px] h-[44px] text-lg font-normal">
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
export default {
  name: "LoginPage",
  components: {IconPassword, IconUser},
}
</script>

<style lang="scss" scoped>
@import "assets/css/AuthForm/style.scss";
</style>
