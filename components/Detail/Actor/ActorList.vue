<template>
  <div class="actors">
    <div v-for="item in actorImages" :key="item.id">
      <div class="pt-[180px] bg-cover bg-center bg-no-repeat object-center object-cover mt-8 mb-2 rounded-lg" :style="`background-image: url(${item.image})`"></div>
      <p class="text-sm font-semibold">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActorListComponent",
  props: {
    actorImages: {
      type: Array,
      required: true,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
.actors{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  border-radius: 8px;
}
</style>
