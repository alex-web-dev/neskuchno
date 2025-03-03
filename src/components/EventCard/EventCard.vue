<script lang="ts" setup>
import type { IEventCardProps } from './types';
import favoritesIcon from '@/components/icons/favorites-icon.vue';
import { computed, ref } from 'vue';
import AppBadge from '@/components/AppBadge/AppBadge.vue';
import AppText from '@/components/AppText.vue';
import AppIcon from '@/components/AppIcon.vue';
import AppTitle from '../AppTitle.vue';
import { RouterLink } from 'vue-router';

const props = defineProps<IEventCardProps>();
const isInFavorites = ref<boolean>(false)

const favoritesIconColor = computed(() => isInFavorites.value ? 'var(--color-primary-700)' : 'white');
const handleClickFavorites = () => {
    isInFavorites.value = !isInFavorites.value;
}

const date = computed(() => {
    const datetime = props.event.from;
    return datetime ? datetime.split('T')[0] : null;
});

const time = computed(() => {
    const datetime = props.event.from;
    return datetime ? datetime.split('T')[1] : null;
});

const imageLoaded = ref(true);
const handleImageError = () => imageLoaded.value = false;
</script>

<template>
    <div class="event-card">
        <div class="event-card__content">
            <div class="event-card__meta">
                <AppText class="text--iflex text--sm text--bold text--gray-800 event-card__meta-item" v-if="date">
                    <template v-slot:leftIcon>
                        <AppIcon src="img/icons/calendar-gray-800.svg" />
                    </template>
                    <span>{{ date }}</span>
                </AppText>
                <AppText class="text--iflex text--sm text--medium text--gray-800 event-card__meta-item" v-if="time">
                    <template v-slot:leftIcon>
                        <AppIcon src="img/icons/clock-gray-800.svg" />
                    </template>
                    <span>{{ time }}</span>
                </AppText>
            </div>
            <AppText class="text--iflex text--sm text--medium text--gray-800 event-card__location" v-if="event.adress">
                <template v-slot:leftIcon>
                    <AppIcon src="img/icons/location-gray-800.svg" />
                </template>
                <span class="event-card__location-text">{{ event.adress }}</span>
            </AppText>
            <div class="event-card__description" v-if="event.description">
                <AppTitle class="title--2 title--clamp event-card__title">
                    <RouterLink :to="`/event/${event.id}`">{{ event.name }}</RouterLink>
                </AppTitle>
                <AppText class="text--sm text--clamp text--clamp-2 event-card__text">{{ event.description }}</AppText>
            </div>
        </div>
        <div class="event-card__poster">
            <RouterLink class="event-card__poster-link" :to="`/event/${event.id}`" v-if="imageLoaded">
                <img class="event-card__poster-img" :src="event.image" :alt="event.name" @error="handleImageError">
            </RouterLink>
            <favorites-icon class="event-card__poster-favorites" :inFavorites="isInFavorites"
                :color="favoritesIconColor" @click="handleClickFavorites" />
            <AppBadge v-if="event.top" color="top" class="event-card__poster-badge">Топ дня</AppBadge>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.event-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    background-color: var(--color-primary-100);
    border: 1px solid var(--color-secondary-500);
    border-radius: vw(15);

    &--primary-150 {
        background-color: var(--color-primary-150);
    }

    &--primary-200 {
        background-color: var(--color-primary-200);
    }

    &__meta {
        margin-left: vw(-35);
        margin-top: vw(-10);
    }

    &__meta-item {
        margin-left: vw(35);
        margin-top: vw(10);
    }

    &__description {
        display: flex;
        flex-direction: column;
    }

    &__content {
        flex: 1 1 auto;
        padding: vw(15) vw(0) vw(13) vw(15);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    &__location-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
    }

    &__title {
        margin-top: vw(10);
        font-weight: 700;
        font-size: vw(20);
        line-height: vw(30);
    }

    &__text {
        margin-top: vw(4);
    }

    &__poster {
        position: relative;
        flex: 0 0 auto;
        width: vw(158);
        user-select: none;

        &-link {
            width: 100%;
            height: 100%;
            display: block;
        }

        &-img {
            width: 100%;
            height: 100%;
            border-radius: vw(15);
            background-color: var(--primary-color-100);
            object-fit: cover;
        }

        &-favorites {
            position: absolute;
            top: vw(5);
            right: vw(5);
            cursor: pointer;
        }

        &-badge {
            position: absolute;
            top: vw(5);
            left: vw(5);
        }
    }

    @media (max-width: 991px) {
        border: vw(1, $mobile) solid var(--color-secondary-500);
        border-radius: vw(15, $mobile);

        &__meta {
            margin-left: vw(-35, $mobile);
            margin-top: vw(-10, $mobile);
        }

        &__meta-item {
            margin-left: vw(35, $mobile);
            margin-top: vw(10, $mobile);
        }

        &__content {
            padding: vw(15, $mobile) vw(0) vw(13, $mobile) vw(15, $mobile);
        }

        &__title {
            margin-top: vw(10, $mobile);
            font-size: vw(20, $mobile);
            line-height: vw(30, $mobile);
        }

        &__text {
            margin-top: vw(4, $mobile);
        }

        &__poster {
            &-link {
                width: vw(158, $mobile);
            }

            &-img {
                border-radius: vw(15, $mobile);
            }

            &-favorites {
                top: vw(5, $mobile);
                right: vw(5, $mobile);
            }

            &-badge {
                top: vw(5, $mobile);
                left: vw(5, $mobile);
            }
        }
    }
}
</style>