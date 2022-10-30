<template>
  <a-loading :loading="true">
  <div class="mx-0 md:mx-16 mb-16 mt-32 flex flex-col items-center">
    <div class="w-full h-auto gap-3 md:gap-7 justify-center flex flex-row flex-wrap">
      <div v-for="item in cards" :key="item" class="md:w-[250px] w-[48%] flex-shrink-0">
        <div
          class="max-w-[200px] md:max-w-full h-auto rounded-xl overflow-hidden p-3 relative select-none md:hover:scale-110 transition-all cursor-pointer">
          <div class="z-50 relative w-full h-full flex flex-col gap-y-2 overflow-hidden">
            <div class="max-w-full h-[300px] rounded-xl">
              <img class="w-full h-full object-cover rounded-xl"
                   src="https://image.tmdb.org/t/p/w500//spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="">
            </div>
            <span class="truncate text-lg font-medium max-w-[80%] h-[30px] mt-2">Movie Name</span>
            <div class="flex flex-row justify-between text-sm absolute z-30 gap-1 top-0 left-0 w-full md:p-2">
              <span
                class="drop-shadow-lg bg-[#DB0000] p-2 rounded-lg md:px-4 md:py-2 font-normal text-white bg-opacity-70">
                2022
              </span>
            </div>
            <a-button class="ant-btn h-9 primary-2 text-lg font-medium" type="primary" danger>Watch Now</a-button>
          </div>
          <div class="absolute inset-0 p-3">
            <img class="w-full h-full object-cover rounded-xl"
                 src="https://image.tmdb.org/t/p/w500//spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="">
            <div class="layer absolute inset-0 backdrop-blur-md rounded-xl bg-[#000000] bg-opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 justify-center">
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper
                    :show-total="total => `Total ${total} items`">
      </a-pagination>
    </div>
  </div>
  </a-loading>
</template>

<script>
import {scrollToTop} from "@/utils/app_utils";

export default {
  name: "ExploreMovie",
  data() {
    return {
      cards: Array.from({length: 10}, (_, i) => (i)),
      pagination: {
        total: 500,
        currentPage: 1,
        pageSize: 20,
      }

    }
  },
  created() {
    scrollToTop()

  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>

<style lang="scss" scoped>
.ant-pagination.mini ::v-deep {
  .ant-pagination-total-text {
    @apply text-base font-semibold;
  }

  .ant-pagination-item:not(.ant-pagination-item-active) {
    a {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 14px;

      &:hover {
        scale: 1.5;
      }
    }
  }

  .ant-pagination-item-active {
    background-color: #DB0000;
    border-color: #DB0000;

    a {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .ant-select-selection-selected-value {
    color: #0f0f0f;
  }

  .anticon {
    svg:not(disabled) {
      margin: 0 16px 6px 8px;
      font-size: 16px;
      font-weight: 600;

      &:hover {
        scale: 1.5;
      }
    }
  }

  .anticon.anticon-down.ant-select-arrow-icon{
    display: none;
  }

  .ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active {
    border-color: transparent;
  }

  .ant-select-selection {
    .ant-select-selection__rendered{
      margin-right: 7px;
    }
    &:hover {
      border-color: transparent;
      opacity: 0.8;
    }
  }

  .ant-pagination-options-quick-jumper {
    @apply text-base font-semibold;

    input {
      height: 27px;
      color: #0f0f0f;
      border-color: #0f0f0f;

      &:hover {
        border-color: transparent;
        border-color: #0f0f0f;
      }
    }
  }

  .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled){
    background-color: #DB0000;
    color: #FFFFFF !important;
  }
  .ant-select-dropdown-menu-item-selected{
    background-color: #DB0000;
    color: #FFFFFF !important;
  }
  .ant-select-dropdown-menu-item{
    color: #0f0f0f;
  }

}
</style>
