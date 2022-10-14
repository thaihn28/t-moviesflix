<template>
  <a-tabs :size="'large'">
    <a-tab-pane key="1" tab="Series"></a-tab-pane>
    <a-tab-pane key="2" tab="TV Shows" force-render></a-tab-pane>
    <a-tab-pane key="3" tab="Categories"></a-tab-pane>
    <a-tab-pane key="4" tab="Countries"></a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  name: "BasicLayoutNavBar"
}
</script>

