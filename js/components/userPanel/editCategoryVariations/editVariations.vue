<template>
  <div id="editVariation">
    <div class="edit">
        <form autocomplete="off" action="" method="post">
      <input type="hidden" name="csrfmiddlewaretoken" :value="csrf" />
      <div id="editVariationWrapper">
        <div class="item" id="chooseCategory">
          <div class="chooseCategoryWrapper">
            <div class="singleCategory">
              <label for="">دسته بندی را انتخاب کنید</label>
              <!--                          <input @change="levelOneChanged($event)" type="text" list="leveOneList">-->
              <!--                            <datalist  id="leveOneList"  name="">-->
              <!--                                <option value="">انتخاب دسته بندی</option>-->
              <!--                                <option v-for="cat in JSON.parse(cats)" :value="cat.title">{{ cat.title }}</option>-->
              <!--                            </datalist>-->
              <search
                :items="JSON.parse(cats)"
                @valueChanged="levelOneChanged"
                name="oldLevel1"
              ></search>
            </div>

            <div class="singleCategory" v-if="showLevelTwo">
              <label for="">دسته بندی را انتخاب کنید</label>
              <!--                          <input @change="levelTwoChanged($event)" type="text" list="leveTwoList">-->
              <!--                            <datalist id="leveTwoList">-->
              <!--                                <option value="">انتخاب دسته بندی</option>-->
              <!--                                <option v-for="cat in levelTwoData" :value="cat.title">{{ cat.title }}</option>-->
              <!--                            </datalist>-->
              <search
                :items="levelTwoData"
                @valueChanged="levelTwoChanged"
                name="oldLevel2"
              ></search>
              <input type="hidden" name="" />
            </div>

            <div class="singleCategory" v-if="showLevelThree">
              <label for="">دسته بندی را انتخاب کنید</label>
              <!--                          <input v-model="currnetLevelThreeValue" @change="levelThreeChanged($event)" type="text" list="leveThreeList">-->
              <!--                            <datalist  id="leveThreeList">-->
              <!--                                <option value="">انتخاب دسته بندی</option>-->
              <!--                                <option v-for="cat in levelThreeData" :value="cat.title">{{ cat.title }}</option>-->
              <!--                            </datalist>-->
              <search
                :items="levelThreeData"
                @valueChanged="levelThreeChanged"
                name="oldLevel3"
              ></search>
            </div>
          </div>
        </div>

        <div class="item" id="table" v-if="showTable">
          <table>
            <tr>
              <th>عملیات</th>
              <th>نام مشخصه</th>
              <th>حذف</th>
            </tr>

            <tr class="trs" v-for="vari in vars">
              <td>
                <select :name="'action' + vari.id" id="">
                  <option value="no_action">بدون تغییر</option>
                  <option value="del">حذف</option>
                  <option value="edit">ویرایش</option>
                </select>
              </td>
              <td>
                <input
                  @keyup="handleKey($event)"
                  type="text"
                  :name="vari.id"
                  :value="vari.name"
                />
              </td>
              <td style="display: none">
                <cross></cross>
              </td>
            </tr>
            <tr class="trs">
              <td>
                <select name="newVarAction0" id="">
                  <option value="create">اضافه کردن</option>
                </select>
              </td>
              <td>
                <input @keyup="handleKey($event)" type="text" name="newVar0" />
              </td>
              <td>
                <cross @deleteRow="deleteRow($event)"></cross>
              </td>
            </tr>
            <tr class="trs" v-for="(i, ind) in fields">
              <td>
                <select :name="'newVarAction' + (+ind + 1)" id="">
                  <option value="create">اضافه کردن</option>
                </select>
              </td>
              <td>
                <input
                  @keyup="handleKey($event)"
                  type="text"
                  :name="'newVar' + (ind + 1)"
                />
              </td>
              <td>
                <cross @deleteRow="deleteRow($event)"></cross>
              </td>
            </tr>
          </table>
          <plus @addRow="handleKey"></plus>
        </div>
      </div>
      <div class="selfCategories" v-if="showCats">
        <p>ویرایش نام دسته بندی ها</p>
        <div class="singleCategorie">
          <input type="text" name="newLevel3" :value="levelThreeText" />
          <input type="text" name="newLevel2" :value="levelTwoText" />
          <input type="text" name="newLevel1" :value="levelOneText" />
        </div>
      </div>
      <div class="seoPost" v-if="showCats">
        <p>متن دسته بندی را وارد کنید</p>
        <div class="textareaWrapper">
          <textarea name="seoPost" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button class="submit" style="margin-top: 80px">اعمال تغییرات</button>
    </form>
    <form ref="deleteIt" v-if="showCats" :action="getAction()" method="post">
      <div class="selfCategories deleteCat">
        <p>حذف دسته بندی {{ currnetLevelThreeValue }}</p>
        <input type="hidden" name="leveltwodelete" :value="currentLeveL2Id" />
        <button @click="confirmIt($event)" class="danger">حذف</button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cross from "./cross.vue";
import search from "./search.vue";
import plus from "../addCategory/plus.vue";

export default {
  name: "editVariations",
  components: {
    cross,
    search,
    plus,
  },
  data() {
    return {
      currnetLevelThreeValue: "",
      currentLeveL1Id: null,
      levelTwoData: null,
      showLevelTwo: false,
      currentLeveL2Id: null,
      levelThreeData: null,
      showLevelThree: false,
      currentLeveL3Id: null,
      vars: null,
      showTable: false,
      levelOneText: null,
      levelTwoText: null,
      levelThreeText: null,
      showCats: false,
      fields: 0,
    };
  },
  props: ["cats"],
  created() {
    // this.cats=[]
    console.log("allCatsBitch", this.cats);
  },
  methods: {
    confirmIt(e) {
      const val = confirm("با حذف دسته بندی تمام محصولات دسته بندی حذف میشود");
      if (val) {
        const deleteForm = this.$refs.deleteIt;
        deleteForm.submit();
      } else {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    getAction() {
      return `/users/cat/${this.currentLeveL3Id}/delete/`;
    },
    async levelOneChanged(e) {
      console.log("chanages");
      this.showLevelTwo = false;
      this.showLevelThree = false;
      this.showTable = false;
      this.showCats = false;

      const catName = e;
      this.levelOneText = catName;
      this.currentLeveL1Id = JSON.parse(this.cats).findIndex((cat) => {
        return cat.title == catName;
      });
      this.currentLeveL1Id = JSON.parse(this.cats)[this.currentLeveL1Id].id;
      const { data } = await axios.get(
        `/categories-api/mother/${this.currentLeveL1Id}`
      );
      this.levelTwoData = data;
      this.showLevelTwo = true;
    },
    async levelTwoChanged(e) {
      this.currnetLevelThreeValue = "";
      this.showLevelThree = false;
      this.showTable = false;
      this.showCats = false;
      const catName = e;
      this.levelTwoText = catName;
      this.currentLeveL2Id = this.levelTwoData.findIndex((cat) => {
        return cat.title == catName;
      });
      this.currentLeveL2Id = this.levelTwoData[this.currentLeveL2Id].id;
      const { data } = await axios.get(
        `/categories-api/mother/${this.currentLeveL1Id}/main/${this.currentLeveL2Id}`
      );
      this.levelThreeData = data;
      this.showLevelThree = true;
    },
    async levelThreeChanged(e) {
      const catName = e;
      this.levelThreeText = catName;
      this.currentLeveL3Id = this.levelThreeData.findIndex((cat) => {
        return cat.title == catName;
      });
      this.currentLeveL3Id = this.levelThreeData[this.currentLeveL3Id].id;
      const { data } = await axios.get(
        `/categories-api/mother/${this.currentLeveL1Id}/main/${this.currentLeveL2Id}/cat/${this.currentLeveL3Id}`
      );
      this.vars = data;
      console.log("vars", this.vars);
      this.showTable = true;
      this.showCats = true;
      this.currnetLevelThreeValue = e;
    },
    chooseAll(e) {
      const status = e.target.checked;
      const allOnes = document.querySelectorAll(".one");
      if (!status) {
        allOnes.forEach((one) => {
          one.checked = false;
        });
        return;
      }
      allOnes.forEach((one) => {
        one.checked = true;
      });
    },
    one(e) {
      const allOnes = document.querySelectorAll(".one");
      const all = document.querySelector("#all");
      let check = true;
      for (let i = 0; i < allOnes.length; i++) {
        const item = allOnes[i];
        if (!item.checked) {
          check = false;
          break;
        }
      }
      if (check) {
        all.checked = true;
        return;
      }
      all.checked = false;
    },
    handleKey(e) {
      console.log("clickde");
      if (e.keyCode === 40 || e.type == "click") {
        this.fields++;
        setTimeout(() => {
          let next = document.querySelectorAll(".trs");
          next = next[next.length - 1];

          console.log(next);
          const input = next.querySelector("input");
          input.focus();
        }, 10);
      }
    },
    deleteRow(e) {
      const parent = e.target.closest("tr");
      parent.remove();
    },
  },
};
</script>

<style scoped>
.deleteCat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.deleteCat {
  width: 100%;
}

.deleteCat p {
  width: 100%;
  text-align: right;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

#editVariationWrapper {
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;
}

th {
  font-size: 13pt;
  font-weight: bold;
}

tr,
th {
  text-align: right;
  border-top: 10px;
}

tr:not(:first-child) {
  border-top: 1px solid #b4b4b4;
}

td,
th {
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
}

td svg {
  width: 25px;
  height: 25px;
}

#table,
table {
  width: 100%;
}

#chooseOp {
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

select {
  min-width: 100px;
  direction: rtl;
  text-align: right;
}

label {
  font-size: 18px;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.singleCategory {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.selfCategories {
  margin-top: 50px;
}

.selfCategories p,
.seoPost p {
  font-size: 18px;
  font-weight: bold;
}

#chooseCategory,
.chooseCategoryWrapper {
  width: 100%;
}

label {
  width: 100%;
  text-align: center;
}

#editVariation {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.seoPost,
.selfCategories {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.seoPost {
  margin-top: 50px;
}
.seoPost textarea {
  width: 90%;
  direction: rtl;
  text-align: right;
}
.textareaWrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.edit{
  width: 83%;
}
</style>