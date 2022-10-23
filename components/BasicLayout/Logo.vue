<template>
  <div class="inline-flex items-center">
    <div class="w-10 h-10">
      <IconLogo/>
    </div>
<!--    <img class="w-10 h-10" src="~/assets/images/icons8-film-64.png">-->
    <nuxt-link  to="/" class="text-2xl ml-2 font-bold">
      T-Movies
    </nuxt-link>
  </div>
</template>

<script>
import IconLogo from "assets/images/icons/Logo";
export default {
  name: "Logo",
  components: {
    IconLogo
  }
}
</script>

