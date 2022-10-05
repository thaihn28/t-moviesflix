<template>
  <div>
    <template v-if="error.statusCode === 404">
      <a-result
        status="404"
        title="404"
        :sub-title="'Not Found'"
      >
        <template #extra>
          <a-button type="primary" @click="backHome">Back Home</a-button>
        </template>
      </a-result>
    </template>
    <h1 v-else></h1>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
  },
}
</script>
