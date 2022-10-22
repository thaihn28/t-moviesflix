<template>
  <div>
    <template v-if="error.statusCode === 404">
      <a-result
        status="404"
        title="404"
        :sub-title="'Sorry, the page you visited does not exist.'"
        class="title"
      >
        <template #extra>
          <a-button class="ant-btn primary-2" type="primary" danger @click="backHome">Back Home</a-button>
        </template>
      </a-result>
    </template>
    <h1 v-else></h1>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'ErrorPage',
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$store.commit("error/setError", this.error)
  },
  beforeDestroy() {
    this.$store.commit("error/setError", {})
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";

.ant-result-title{
  color: white;
}

.ant-result-subtitle {
  color: white !important;
}

</style>

