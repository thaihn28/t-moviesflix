<template>
  <div class="mt-32 mb-16 mx-16">
    <div class="flex flex-col ml-32 lg:items-start items-center">
      <span class="text-white font-semibold text-[45px] mb-4">
        Register new account
        <span class="dot"></span>
      </span>
      <span class="text-[20px] text-subText">Already a member?
            <span class="text-secondary ml-2 hover:underline transition-all" @click="notify">Log in</span>
      </span>
      <a-form
        class="relative mt-8 w-50% flex flex-col gap-y-[16px] md:w-[500px] z-40"
        name="basic"
        autocomplete="off"
      >
        <div class="flex flex-row justify-between gap-5">
          <a-form-item class="relative text-white md:w-[45%]" :rules="[{ required: true }]">
            <a-input placeholder="First name"/>
            <span class="w-[20px] h-[20px] text-white absolute top-[8px] right-4">
              <icon-card-idetity/>
            </span>
          </a-form-item>
          <a-form-item class="relative text-white md:w-[45%]" :rules="[{ required: true }]">
            <a-input placeholder="Last name"/>
            <span class="w-[20px] h-[20px] text-white absolute top-[8px] right-4">
              <icon-card-idetity/>
            </span>
          </a-form-item>
        </div>
        <a-form-item class="relative w-full text-white" :rules="[{ required: true }]">
          <a-input placeholder="Email"/>
          <span class="w-[20px] h-[20px] text-white absolute top-[8px] right-4">
            <icon-email/>
          </span>
        </a-form-item>
        <a-form-item class="relative w-full text-white" :rules="[{ required: true }]">
          <a-input type="password" placeholder="Password"/>
          <span class="w-[20px] h-[20px] text-white absolute top-[8px] right-4">
          <icon-password/>
          </span>
        </a-form-item>
        <div class="w-full flex justify-center">
          <a-button type="primary"
                    danger
                    class="ant-btn primary-2 mt-2 px-[36px] h-[44px] text-xl font-semibold">
            Create account
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
import {scrollToTop} from "@/utils/app_utils";
import IconPassword from "assets/images/icons/iconPassword";
import IconCardIdetity from "assets/images/icons/iconCardIdetity";
import IconEmail from "assets/images/icons/iconEmail";

export default {
  name: "SignupForm",
  components: {IconEmail, IconCardIdetity, IconPassword},
  created() {
    scrollToTop()
  },
  methods: {
    notify() {
      this.$notification.error({
        message: 'Test',
        placement: 'topRight',
        duration: 2
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-secondary {
  --tw-text-opacity: 1;
  color: rgb(221 0 0/var(--tw-text-opacity));
}

.dot {
  height: 8px;
  width: 8px;
  background-color: #DB0000;
  border-radius: 50%;
  display: inline-block;
}

.text-subText {
  --tw-text-opacity: 1;
  color: rgb(117 119 129/var(--tw-text-opacity));
}


::v-deep .ant-input {
  @apply h-[44px] bg-slate-700 rounded-lg border-none text-white;

  &:focus {
    box-shadow: 0 0 0 2px rgba(164, 182, 197, 0.5);
  }
}
.sign-up-background {
  background: linear-gradient(90deg, #0f0f0f 11.2%,transparent 80%);
  display: block;
}
</style>
