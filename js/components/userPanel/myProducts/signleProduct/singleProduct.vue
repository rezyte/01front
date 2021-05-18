<template>
  <div ref="singleProduct" class="singleProduct">
    <div class="singleProductWrapper">
      <div id="allDescs">
        <div class="status">
          <div v-if="status == 'true'" class="accept">
            <p class="accept">تایید شده</p>
          </div>
          <div v-else class="pending">
            <p class="pending">در انتظار تایید</p>
          </div>
          <!--        <p>دو روز پیش</p>-->
          <!-- <div class="dots" @click="openToolTip($event)">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="tooltip">
              <ul>
                <li>
                  <a :href="'/users/profile/my_products/' + id + '/edit'"
                    >ویرایش</a
                  >
                </li>
                <li @click="openNotf($event)">حذف</li>
              </ul>
            </div>
          </div> -->
        </div>
        <div class="descs">
          <a :href="'/products/product-detial/' + slug"
            ><p>{{ descs }}</p></a
          >
        </div>
        <div class="sees">
          <p>بازدید:{{ sees }}</p>
        </div>
        <div class="cat">
          <p>
            دسته بندی:<a :href="'/categories/' + cat">{{ cat }}</a>
          </p>
        </div>
      </div>
      <div id="productImage">
        <img :src="product_image" :alt="image_alt" />
      </div>
    </div>
    <notf
      @deleteProduct="deleteProduct"
      @closeNotf="showNotf = false"
      v-if="showNotf"
    ></notf>
    <div class="crud">
      <div>
        <form  @click="delete_item" name="delete-product" :action="'/userpanel/products/remove/' + id" method="post">
        <input type="hidden" name="_method" value="DELETE">
        <i
            class="fa fa-trash hover-active"
            style="font-size: 24px"
            title="حذف"
          ></i
        >
        </form>
      </div>
      <div>
        <a :href="'/userpanel/products/edit/' + id">
          <i
            class="fas fa-edit hover-active"
            style="font-size: 24px"
            title="ویرایش"
          >
          </i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import notf from "./notf.vue";
import axios from "axios";
export default {
  props: [
    "status",
    "ago",
    "descs",
    "sees",
    "cat",
    "id",
    "slug",
    "product_image",
    "image_alt",
  ],
  name: "singleProduct",
  components: {
    notf,
  },
  data() {
    return {
      showNotf: false,
    };
  },
  created() {
    window.addEventListener("click", (e) => {
      const el = e.target;
      if (!el.classList.contains("dots") && !el.classList.contains("dot")) {
        const tools = document.querySelectorAll(".tooltip");
        tools.forEach((tool) => {
          tool.style.display = "none";
        });
      }
    });
  },
  methods: {
    deleteProduct() {
      const single = this.$refs.singleProduct;
      const notif = single.querySelector(".notif");
      const buttons = notif.querySelector(".buttons");
      buttons.style.display = "none";
      const loading = notif.querySelector(".loadingWrapper");
      loading.style.display = "block";
      axios
        .get(
          `/products-api/product/${this.id}/delete?csrfmiddlewaretoken=${csrf}`
        )
        .then((res) => {
          const message = res.data.message;
          if (message == "محصول شما با موفقیت حذف شد") {
            this.showNotf = false;
            this.$emit("removeProduct", this.id);
          }
        });
    },
    openNotf(e) {
      this.showNotf = true;
    },
    openToolTip(e) {
      // this.closeTools();
      const parent = e.target.closest(".status");
      const tool = parent.querySelector(".tooltip");
      tool.style.display = "block";
    },
    closeTools() {
      const tools = document.querySelectorAll(".tooltip");
      tools.forEach((tool) => {
        tool.style.display = "none";
      });
    },
    delete_item(){
     document.forms['delete-product'].submit()
    }
  },
};
</script>

<style scoped>
.singleProduct {
  width: 250px;
  background: white;
  border-radius: 15px;
  /*position: relative;*/
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  margin: 5px;
}
.singleProductWrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: rgb(55, 86, 153);
}
p {
  text-align: right;
}
.accept {
  border-radius: 10px;
  background: rgb(19, 204, 87);
}
.pending {
  border-radius: 10px;
  background: rgb(221, 178, 83);
}
.accept p,
.pending p {
  padding: 5px;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
.dots {
  display: flex;
  cursor: pointer;
  padding: 5px;
  position: relative;
}
.dots .dot {
  width: 5px;
  border-radius: 50%;
  margin: 2px;
  height: 5px;
  background: gray;
}
.tooltip {
  position: absolute;
  border: 1px solid #b4b4b4;
  background: white;
  top: 12px;
  right: 26px;
  border-radius: 10px;
  display: none;
}
.tooltip ul {
  padding: 10px;
  cursor: default;
}
ul li {
  text-align: right;
  line-height: 2rem;
}
li a,
li {
  color: rgb(79, 80, 84);
  cursor: pointer;
}
#productImage {
  width: 230px;
  height: 150px;
}
#productImage img {
  width: 100%;
  height: 100%;
}
.descs p {
  direction: rtl;
}
.crud {
  width: 60px;
  margin-left: 5%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.crud a {
  color: var(--blue);
}
.hover-active{
  color: var(--blue)!important;
}
.hover-active:hover {
  color: red!important;
  cursor: pointer;
}
</style>