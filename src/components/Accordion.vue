<template>
    <ul class="c-faqs__accordion-list">
        <li class="c-faq-item"
            v-for="item in accordionItems"
        >
            <div class="c-faq-item__details">

                <template v-if="item.title != null && item.content != null">
                    <Disclosure
                        as="div"
                        class="c-faq__accordion-item"
                        v-slot="{ open }"
                    >
                        <DisclosureButton
                            :class="open ? 'c-faq-item__button--is-open' : ''"
                            class="c-faq-item__button"
                        >
                            <span class="c-faq-item__button-title c-faq-item__button-title--is-mobile">{{item.title}}</span>
                            <span class="c-faq-item__state-indicator-icon--is-mobile">
                                {{ open ? '-' : '+' }}
                            </span>
                        </DisclosureButton>
                            <DisclosurePanel
                                class="c-faq-item__panel"
                                v-html="convertToList(item.content)"
                            ></DisclosurePanel>
                    </Disclosure>
                </template>

            </div>
        </li>
    </ul>
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
                .map(item => `<li class="c-faq-item__list-item">${item}</li>`)
                .join('');

            return `<ul class="c-faq-item__list">${listItems}</ul>`;
        }
    },
};
</script>
