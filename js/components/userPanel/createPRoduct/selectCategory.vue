<template>
    <div id="selectCategory">
        <div id="selectCategoryWrapper">
            <div class="headCategory cats" id="cats">
                <div class="select">
<!--                    <v-select-->
<!--                        placeholder="دسته بندی را انتخاب کنید"-->
<!--                        dir="rtl"-->
<!--                        @input="changeCategoryLevel1($event)"-->
<!--                        class="style-chooser"-->
<!--                        label="title"-->
<!--                        :options=""-->
<!--                    > <span slot="no-options">موردی یافت نشد</span></v-select>-->
                  <search
                    :redi="redi"
                    :items="cats"
                    level="1"
                    @leveOneChanged="changeCategoryLevel1($event)"
                  ></search>
                </div>

                <div class="select" v-if="levelTwo.show">
                    <wait v-if="levelTwo.waiting"></wait>
                  <search
                      v-if="levelTwo.showInput"
                    :redi="redi"
                      :items="levelTwoData"
                      level="2"
                      @leveTwoChanged="changeCategoryLevel2($event)"
                  ></search>
                </div>

                <div class="select" v-if="levelThree.show">
                    <wait v-if="levelThree.waiting"></wait>
<!--                    <v-select-->
<!--                        v-if="!levelThree.waiting"-->
<!--                        placeholder="دسته بندی را انتخاب کنید"-->
<!--                        dir="rtl"-->
<!--                        @input="changeCategoryLevel3($event)"-->
<!--                        class="style-chooser"-->
<!--                        label="title"-->
<!--                        :options="levelThreeData"-->
<!--                    > <span slot="no-options">موردی یافت نشد</span>-->
<!--                    </v-select>-->
                  <search
                      v-if="levelThree.showInput"
                    :redi="redi"
                    :items="levelThreeData"
                    level="3"
                    @leveThreeChanged="changeCategoryLevel3"
                  >
                  </search>
                    <input type="hidden" name="category" id="endCategory" :value="endcategory">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
label {
    text-align: center;
}
.cats {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 500px;
}
.style-chooser .vs__dropdown-toggle {
    direction: rtl !important;
}

input {
    color: black;
    direction: rtl;
    border: 1px solid rgb(210, 214, 222);
    padding: 10px;
}

#selectCategory {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
}
#selectCategoryWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
label {
    margin-bottom: 10px;
}
label:before {
    content: "* ";
    color: red;
    font-size: 20pt;
    font-weight: 900;
}
.select{
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 500px) {
    #selectCategoryWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #selectCategoryWrapper input,
    #selectCategoryWrapper datalist {
        width: 90%;
    }
}
@media (max-width: 320px) {
    #selectCategoryWrapper label {
        font-size: 15pt;
    }
}
@media (max-width: 500px) {
    #cats{
        width:98%;
    }

}
.vs__search {
    cursor: pointer;
}
.select{
    margin-top:20px;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
}
</style>

<script>
// import vSelect from 'vue-select'
import axios from "axios";
import vSelect from "vue-select";
import search from "./search.vue";
// import "vue-select/dist/vue-select.css";
import { mapActions } from "vuex";
import wait from "./wait.vue";

export default {
    props: ["cats",'redi'],
    components: {
        vSelect,
        wait,
      search
    },
    data() {
        return {
            level1Current:null,
            level2Current:null,
            levelTwoData: null,
            levelTwo: {show: false, waiting: true,showInput:false},
            levelThree: {show: false, waiting: true,showInput:false},
            levelThreeData:null,
            levelFour: {show: false, waiting: true},
            endcategory:null
        };
    },
    created() {
        console.log('cats', this.cats)
    },

    methods: {
        async changeCategoryLevel1(id) {
          this.levelTwo.show=true
          this.levelTwo.waiting=true
          this.levelThree.show=false
          this.levelThree.waiting=true
          this.levelTwo.showInput=false

            this.level1Current=id
            const {data} = await axios.get(`/categories-api/mother/${id}`);
            this.levelTwoData = data
            this.levelTwo.waiting = false
          this.levelTwo.show = true
          this.levelTwo.showInput=true

        },
        async changeCategoryLevel2(id) {
          this.levelThree.show=true
          this.levelThree.waiting=true
          this.levelThree.showInput=false


          this.level2Current=id
          const { data } = await axios.get(`/categories-api/mother/${this.level1Current}/main/${id}`);
          this.levelThreeData=data
          this.levelThree.waiting = false
          this.levelThree.show = true
          this.levelThree.showInput=true
        },
        async changeCategoryLevel3(id,title) {
            this.endcategory=title
            // this.level2Current=e.id
            const { data } = await axios.get(`/categories-api/mother/${this.level1Current}/main/${id}/cat/${id}`);
            this.fillCatsFromCreaeProduct(data)
        },
        ...mapActions(["fillCatsFromCreaeProduct"]),
    },


};
</script>