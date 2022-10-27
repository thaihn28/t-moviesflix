<template>
  <div class="relative w-full">
    <p class="actors-title">Actors</p>
    <div class="actors">
      <div class="actors__item" v-for="item in actorImages" :key="item.id">
        <div class="h-[240px] w-[180px] bg-cover bg-center bg-no-repeat object-center object-cover rounded-lg"
             :style="`background-image: url(${item.image})`"></div>
        <p class="actors__item__name">{{ item.name }}</p>
      </div>
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
.actors-title {
  @apply text-3xl font-bold relative left-2/4 -translate-x-2/4 md:w-[1080px];
  margin-bottom: 16px;
}

.actors {
  @apply relative flex items-center justify-center w-full  gap-x-11;

  &__item {
    &__name {
      @apply mt-2 text-lg font-semibold;
    }
  }
}
</style>
