<script lang="ts" setup>

</script>

<template>
  <div class="article">
    <div class="article__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.article {
  font-size: vw(16);
  line-height: 1.5;
  color: #1f2937;

  ::v-deep(.article__content) {

    p,
    ul,
    ol {
      &:not(:first-child) {
        margin-top: vw(16);
      }
    }

    ul,
    ol {
      padding-bottom: vw(8);

      li {
        &:not(:first-child) {
          margin-top: vw(8);
        }
      }
    }

    ul {
      padding-left: vw(28);
      list-style-type: disc;
    }
  }

  @media (max-width: 991px) {
    font-size: vw(16, $mobile);


    ::v-deep(.article__content) {

      ul,
      ol {
        padding-bottom: vw(8, $mobile);

        li {
          &:not(:first-child) {
            margin-top: vw(8, $mobile);
          }
        }
      }

      ul {
        padding-left: vw(28, $mobile);
      }

      p,
      ul,
      ol {
        &:not(:first-child) {
          margin-top: vw(10, $mobile);
        }
      }
    }
  }
}
</style>