<template>
    <button
        type="button"
        @click="openDialog"
        id="c-site-header__mobile-menu-trigger-button"
        class="c-site-header__mobile-menu-trigger-button"
        title="Toggle mobile menu display"
    >
    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.21436H16" stroke="black" stroke-linecap="round"></path><path d="M2.07153 5.5H14.9287" stroke="black" stroke-linecap="round"></path><path d="M4.21436 9.78564H12.7858" stroke="black" stroke-linecap="round"></path></svg>
    </button>

    <TransitionRoot as="template" :show="open" @close="open = false">
        <Dialog
            as="div"
            :class="[
                'c-site-header__mobile-menu-dialog',
            ]"
        >
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <DialogPanel class="c-site-header__mobile-menu-dialog__container">
                    <div class="c-site-header__mobile-menu-dialog__content">
                        <div class="c-site-header__mobile-menu-dialog__inner">
                            <div class="c-site-header__mobile-menu-dialog__inner-content">

                                <DialogTitle class="sr-only">Mobile Menu</DialogTitle>
                                <div class="c-site-header__mobile-menu-dialog-top-bar">

                                    <button
                                        type="button"
                                        @click="closeDialog"
                                        id="c-site-header__mobile-menu-header-close-button"
                                        class="c-site-header__mobile-menu-header-close-button"
                                    >
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1.53033" y1="1.46967" x2="22.5303" y2="22.4696" stroke="#FFFCF8" stroke-width="1.5"/>
                                            <line y1="-0.75" x2="29.6984" y2="-0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 23 2)" stroke="#FFFCF8" stroke-width="1.5"/>
                                        </svg>
                                    </button>

                                </div>
                                <div class="c-site-header__mobile-menu-navigation">
                                    <!-- Primary Mobile Navigation -->
                                    <div v-if="primaryNavigationItems.length" class="c-site-header__mobile-menu-primary-navigation-content">
                                        <nav id="c-site-header__mobile-menu-primary-navigation" aria-label="Primary navigation">
                                            <ul class="c-site-header__mobile-menu-primary-navigation-list">
                                                <li v-for="item in primaryNavigationItems"
                                                    :key="item.id"
                                                    class="c-site-header__mobile-menu-primary-navigation-list-item">
                                                    <a
                                                        :class="[
                                                            'c-site-header__mobile-menu-primary-navigation-link'
                                                        ]"
                                                        :href="item.url"
                                                    >
                                                        {{ item.title }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </TransitionChild>

        </Dialog>
    </TransitionRoot>
</template>

<script>
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";

export default {
    name: "MobileMenu",
    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
    },
    props: {
        primaryNavigationItems: Array,
    },
    computed: {},
    data() {
        return {
            open: false,
        };
    },
    methods: {
        /**
         * Modal methods
         */
        closeDialog() {
            this.open = false;
        },
        openDialog() {
            this.open = true;
        }
    },
};
</script>
