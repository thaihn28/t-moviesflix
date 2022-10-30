<template>
  <a-pagination size="small" :total="50" show-size-changer show-quick-jumper
                :show-total="total => `Total ${total} items`">
  </a-pagination>
</template>

<script>
export default {
  name: "PaginationComponent",
  data(){
    return {
      pagination: {
        total: 500,
        currentPage: 1,
        pageSize: 20,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ant-pagination{
  color: #FFFFFF;
}
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
  a {
    color: #FFFFFF;
  }

}
</style>
