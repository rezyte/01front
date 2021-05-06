<template>
    <div class="bottomIconsWrapper" @click="toggleSubMenu">
        <cats-svg ></cats-svg>
        <p>دسته بندی</p>
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

<style>
.bottomIconsWrapper{
    cursor: pointer;
}
</style>