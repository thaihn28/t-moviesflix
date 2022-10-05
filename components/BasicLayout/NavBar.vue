<template>
    <ul class="text-xl mt-2 h-10 items-center justify-end flex font-sans font-bold">
      <li>
        <nuxt-link to="/" class="ml-4">
          Series
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/actors" class="ml-4">
          TV Shows
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile" class="ml-4">
          Categories
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile" class="ml-4">
          Countries
        </nuxt-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: "BasicLayoutNavBar"
}
</script>

