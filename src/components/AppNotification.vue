<template>
    <div v-if="!isClosed" class="notification">
        <div class="notification__content">
            <AppText class="text--sm">Мы используем куки для улучшения вашего опыта на сайте.</AppText>
            <AppBtn @click="isClosed = true">Принять</AppBtn>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AppBtn from './AppBtn.vue';
import AppText from './AppText.vue';

const isClosed = ref<boolean>(false)

</script>

<style lang="scss" scoped>
.notification {
    box-shadow: 0px 0px vw(10) 0px rgba(0, 0, 0, 0.11);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    max-width: 100%;
    background: var(--color-white);

    &__content {
        padding: vw(10) 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: vw(1160);
    }

    @media (max-width: 991px) {
        box-shadow: 0px 0px vw(10, $mobile) 0px rgba(0, 0, 0, 0.11);

        &__content {
            padding: vw(10, $mobile) 0;
            max-width: vw(1160, $mobile);
        }
    }
}
</style>
