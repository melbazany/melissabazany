<template>

    <div class="c-accordion">
        <ul class="c-accordion__list">
            <li class="c-accordion-item"
                v-for="item in accordionItems"
            >
                <div class="c-accordion-item__details">
                    <template v-if="item.title != null &&( item.listContent != null || item.introText != null)">
                        <Disclosure
                            as="div"
                            class="c-accordion__accordion-item"
                            v-slot="{ open }"
                        >
                            <DisclosureButton
                                :class="open ? 'c-accordion-item__button--is-open' : ''"
                                class="c-accordion-item__button"
                            >
                                <span class="c-accordion-item__button-title c-accordion-item__button-title">{{item.title}}</span>
                                <span class="c-accordion-item__state-indicator-icon">
                                    {{ open ? '-' : '+' }}
                                </span>
                            </DisclosureButton>
                                <DisclosurePanel
                                    class="c-accordion-item__panel"
                                >
                                <div v-if="item.introText != null" v-html="item.introText"></div>
                                <div v-if="item.listContent != null" v-html="convertToList(item.listContent)"></div>
                            </DisclosurePanel>
                        </Disclosure>
                    </template>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

export default {
    name: "Accordion",

    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    },

    data() {
        return {};
    },

    props: {
        accordionItems: Array,
    },

    mounted() {},

    methods: {
        convertToList(accordionItemContent) {
            if (!Array.isArray(accordionItemContent) || !accordionItemContent.length) return '';

            const listItems = accordionItemContent
                .map(item => `<li class="c-accordion-item__list-item">${item}</li>`)
                .join('');

            return `<ul class="c-accordion-item__list">${listItems}</ul>`;
        }
    },
};
</script>
