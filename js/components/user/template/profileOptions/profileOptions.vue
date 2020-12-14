<template>
        <div ref="profileOptions" class="profileOptions" >
            <cross></cross>
            <div class="profileOptionsWrapper">
                <ul>
                    <li><a href="/users/profile/orders/">لیست مشتریان</a></li>
                    <li><a href="/users/profile/product/create/">محصول جدید</a></li>
                    <li><a href="/users/userpanel/">پروفایل</a></li>
                    <li><a href="/userpanel/create_prefactor/">ساخت پیش فاکتور</a></li>
                </ul>
            </div>
        </div>
</template>

<script>
import { mapGetters } from "vuex";
import cross from "./cross.vue"
import { toggleBodyOverFlow } from "../../mixIns/toggleBodyOverFlow.js";
import { adjustElFromTop } from "../../mixIns/adjustElFromTop.js";
export default {
    name: "profileOptions",
    mixins: [toggleBodyOverFlow, adjustElFromTop],
    components: {
        cross
    },
    computed:{
        ...mapGetters(["isOptionsOpen"]),
    },
    mounted() {
                const menuWrapper = this.$refs.profileOptions;
                console.log('menuWrapper',menuWrapper)
                this.adjustFromTop(menuWrapper, false);
                this.toggleBodyOverFlow("hidden");
    },
}
</script>

<style scoped>
.profileOptions {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 11;
    align-items: flex-end;
    padding: 10px;
    top:0
}

li {
    text-align: right;
    font-size: 18px;
    line-height: 2rem;
    width: 100%;
}

.profileOptionsWrapper {
    margin: 0 auto;

}

a {
    color: rgb(9, 111, 211);
}

a:hover {
    filter: brightness(0.2);
}

@media (min-width: 801px) {
    .profileOptions {
        display: none;
    }
}
</style>