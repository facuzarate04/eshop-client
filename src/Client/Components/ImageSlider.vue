
<template>
    <div class="bg-transparent w-full">
        <Splide
        :options="mainOptions"
        ref="main"
        >
            <template  v-slot:controls>
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button class="splide__arrow splide__arrow--next">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </template>
            <SplideSlide v-for="slide in images" :key="slide">
                    <img loading="lazy"  :src="slide[url]">
            </SplideSlide>
        </Splide>

        <template v-if="thumb && images.length > 1">
            <Splide
            class="py-1"
            :options="thumbsOptions"
            ref="thumbs"
            >
                <SplideSlide v-for="slide in images" :key="slide">
                    <img class="" :src="slide[url]">
                </SplideSlide>
            </Splide>
        </template>
    </div>
    
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onMounted, ref } from 'vue';
import '@splidejs/vue-splide/css';

export default {
    props: {
        images: {
            default: {},
            images: Object
        },
        thumb: {
            default: false,
            thumb: Boolean
        },
        url: {
            default: 'url',
            url: String
        },
    },
    components:{
        Splide,
        SplideSlide,
    },

    setup() {
        const main   = ref();
        const thumbs = ref();
        const mainOptions = {
            rewind : false,
            type:'fade',
            width  : '100%',
            perMove: 1,
            perPage: 1,
            pagination: false,
            arrows: true,

        };
        const thumbsOptions = {
            rewind      : true,
            pagination  : false,
            fixedHeight : 60,
            fixedWidth : 60,
            cover      : true,
            arrows      : false,
            updateOnMove: true,
            focus       : 'center',
            slideFocus: false,
            isNavigation: true,
            perMove     : 1,
            perPage     : 5,
            gap       : 5,
        };

        onMounted( () => {
            const thumbsSplide = thumbs.value?.splide;
            if ( thumbsSplide ) {
                main.value?.sync( thumbsSplide );
            }
        } );
        
        return {
            main,
            thumbs,
            mainOptions,
            thumbsOptions,
        }
    },
}; 
</script>

<style scoped>
    .splide__arrow:disabled {
       display: none !important;
    }
    .splide--nav>.splide__track>.splide__list>.splide__slide.is-active {
        border-color: #656e6d;
    }

    .dark .splide--nav>.splide__track>.splide__list>.splide__slide.is-active {
        border-color: #6b7574;
    }

    .splide__slide {
        opacity: 0.5;
        border-radius: 0.5rem;
    }

    .splide__slide.is-active {
        opacity: 1;
    }
</style>