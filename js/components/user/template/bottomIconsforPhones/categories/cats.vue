<template>
    <div class="bottomIconsWrapper">
        <cats-svg @toggleSubMenu="toggleSubMenu"></cats-svg>
        <p @click="toggleSubMenu">دسته بندی</p>
    </div>
</template>

<script>
import catsSvg from "./catsSvg.vue"
import {mapGetters} from "vuex";

export default {
    components: {
        catsSvg
    },
    methods: {
        toggleSubMenu() {
            if (window.innerWidth >= 799) {
                return
            }
            this.$store.dispatch("toggleSubMenu")
        }
    },
    computed: {
        ...mapGetters([
            'isSubMenu'
        ]),
        isSubMenuOpen() {
            return this.isSubMenu
        }
    },
}
</script>