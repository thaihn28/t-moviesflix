<template>
  <div class="mt-32 mb-16 mx-16">
    <div class="flex flex-col ml-32 lg:items-start items-center">
      <span class="text-white font-semibold text-[45px] mb-4">
        Register new account
        <span class="dot"></span>
      </span>
      <span class="text-[20px] text-subText">Already a member?
            <span class="text-secondary cursor-pointer ml-2 hover:underline transition-all"
                  @click="redirectToLogin">Sign in</span>
      </span>
      <a-form
        class="relative mt-8 w-50% flex flex-col gap-y-[16px] md:w-[500px] z-40"
        name="basic"
        :form="form"
        autocomplete="off"
        @submit.prevent="signup"
      >
        <div class="flex flex-row justify-between gap-5">
          <a-form-item class="relative text-white md:w-[45%]"
                       name="firstName"
          >
            <a-input
              v-decorator="['firstName', { rules: [{ required: true, message: 'Please input your firstname!' }] }]"
              :allow-clear="true" placeholder="First name"
            />
            <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
              <icon-card-idetity/>
            </span>
          </a-form-item>
          <a-form-item class="relative text-white md:w-[45%]"
                       name="lastName"
          >
            <a-input
              v-decorator="['lastName', { rules: [{ required: true, message: 'Please input your lastname!' }] }]"
              :allow-clear="true" placeholder="Last name"/>
            <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
              <icon-card-idetity/>
            </span>
          </a-form-item>
        </div>
        <a-form-item class="relative w-full text-white"
                     name="email"
        >
          <a-input
            v-decorator="['email', { rules: [{ required: true, message: 'Please input your email!' }] }]"
            :allow-clear="true" placeholder="Email"/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
            <icon-email/>
          </span>
        </a-form-item>
        <a-form-item class="relative w-full text-white"
                     name="username"
        >
          <a-input
            v-decorator="['username', { rules: [{ required: true, message: 'Please input your username!' }] }]"
            :allow-clear="true" placeholder="Username" show-count/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4">
            <icon-user/>
          </span>
        </a-form-item>
        <a-form-item class="relative w-full text-white"
                     name="password"
        >
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your password!' }] }]"
            :type="isShowPass ? 'text' : 'password'" :allow-clear="true" show-count placeholder="Password"/>
          <span class="w-[20px] h-[20px] text-white absolute top-0 right-4" @click="showPass">
            <icon-hide-password v-if="isShowPass" class="cursor-pointer"/>
            <icon-password v-else class="cursor-pointer"/>
          </span>
        </a-form-item>
        <div class="w-full flex justify-center">
          <a-button type="primary"
                    html-type="submit"
                    danger
                    class="ant-btn primary-2 mt-2 px-[36px] h-[44px] text-lg font-normal"
          >
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
import IconUser from "assets/images/icons/iconUser";
import IconHidePassword from "assets/images/icons/iconHidePassword";

export default {
  name: "SignUpPage",
  components: {IconHidePassword, IconUser, IconEmail, IconCardIdetity, IconPassword},
  created() {
    scrollToTop()
  },
  data() {
    return {
      form: this.$form.createForm(this, {name: 'form_signup'}),
      isShowPass: false
    }
  },
  methods: {
    showPass() {
      this.isShowPass = !this.isShowPass

    },
    signup() {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          try {
            const payload = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              username: values.username,
              password: values.password
            }
            const response = await this.$axios.post('/auth/sign-up', payload)
            this.$notification.success({
              message: response.data,
              placement: 'topRight',
              duration: 8
            })
            await this.$router.push('/login')

          } catch (e) {
            this.$notification.error({
              message: 'Login failed! Please check your username/password again',
              placement: 'topRight',
              duration: 5
            })
          }
        }
      });
    },
    redirectToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/AuthForm/style.scss";
</style>
