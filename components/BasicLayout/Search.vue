<template>
  <a-auto-complete
    class="search w-full lg:w-auto xl:w-[400px]"
    option-label-prop="value"
    size="large"
  >
    <template slot="dataSource">
    </template>
    <a-input
      :placeholder="'Movies, Actors, Directors...'"
      class="nav-search pt-0.5"
      :allow-clear="true"
    >
      <!--      <template #prefix>-->
      <!--        <IconSearch :color="isFocusSearch ? 'black' : 'white'"/>-->
      <!--        <span v-if="!isFocusSearch" style="padding-bottom: 2px; padding-left: 2px">{{ $t('search') }}</span>-->
      <!--        <span v-else style="color: black; padding-bottom: 2px; padding-left: 2px">{{ $t('search') }}</span>-->
      <!--      </template>-->
      <template #suffix>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.16675 16.6667C13.3089 16.6667 16.6667 13.3089 16.6667 9.16675C16.6667 5.02461 13.3089 1.66675 9.16675 1.66675C5.02461 1.66675 1.66675 5.02461 1.66675 9.16675C1.66675 13.3089 5.02461 16.6667 9.16675 16.6667Z" stroke="#6E7191" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3333 18.3333L15 15" stroke="#6E7191" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
    </a-input>
  </a-auto-complete>
</template>

<script>
export default {
  name: "BasicLayoutSearch"
}
</script>

