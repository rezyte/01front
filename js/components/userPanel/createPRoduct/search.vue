<template>
  <div id="search__search">
    <div id="searchBar__search">
      <div class="inputWrapper__search">
        <input @focus="fillShoulShow" @input="filter" ref="input"
               type="text"
               class="input__search"
               placeholder="انتخاب دسته بندی"
               :name="name"
        >
        <div class="svg__search">
          <arrow></arrow>
        </div>
      </div>

      <ul ref="ul">
        <li v-for="(item,i) in getShouldShow" @click="selectItem($event)" :key="i.id">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import arrow from "./arrow.vue"

export default {
  name: "search",
  props: ['items','level','redi','onchange','name'],
  data() {
    return {
      shouldShow: null,
      selectedItem:null
    }
  },
  components: {
    arrow
  },
  mounted() {
    this.shouldShow=this.items
    console.log('this.shouldShow',this.shouldShow)
    if(this.level==1){
      if(this.redi.motherCat!="None"){
        this.$refs.input.value=this.redi.motherCat
        this.selectedItem=this.redi.motherCat
        let id=this.shouldShow.findIndex(i=>{
          return i.title==this.selectedItem

        })
        id=this.shouldShow[id].id
        this.$emit('leveOneChanged',id)
      }
    }
    if(this.level==2){
      if(this.redi.mainCat!="None"){
        const inter=setInterval(()=>{
          this.shouldShow=this.items
          if(this.shouldShow.length>0){
            this.$refs.input.value=this.redi.mainCat
            this.selectedItem=this.redi.mainCat
            this.shouldShow=this.items
            let id=this.shouldShow.findIndex(i=>{
              return i.title==this.selectedItem
            })
            id=this.shouldShow[id].id
            this.$emit('leveTwoChanged',id)

            clearInterval(inter)
          }
        },100)

      }
    }
    if(this.level==3){
      if(this.redi.category!=="None")
      {
        const inter=setTimeout(()=>{
          this.shouldShow=this.items
          if(this.shouldShow.length>0){
            this.$refs.input.value=this.redi.category
            this.selectedItem=this.redi.category
            this.shouldShow=this.items
            let id=this.shouldShow.findIndex(i=>{
              return i.title==this.selectedItem
            })

            this.$emit('leveThreeChanged',this.shouldShow[id].id,this.shouldShow[id].title)

            // clearInterval(inter)
          }
        },100)
      }
    }
    this.$refs.input.addEventListener('focus', () => {
      this.$refs.ul.style.display = "flex"
    })

    window.addEventListener('click', e => {
      const target = e.target
      if (target !== this.$refs.input && target !== this.$refs.ul) {
        this.$refs.ul.style.display = 'none'
        // document.body.style.overflowY=""
      }
    })
  },
  computed: {
    getShouldShow() {
      return this.shouldShow
    }
  },
  methods: {
    filter() {
      let value = this.$refs.input.value
      this.shouldShow=[...this.items]
      this.shouldShow=this.shouldShow.filter(s=>{
        return s.title.includes(value)
      })

    },
    async selectItem(e) {
      this.deSelectItem()
      this.$refs.input.value = e.target.innerText
      this.selectedItem = e.target.innerText
      e.target.classList.add("check")
      let id=this.shouldShow.findIndex(i=>{
        return i.title==this.selectedItem
      })

      if(this.level==1){
        id=this.shouldShow[id].id
        this.$emit('leveOneChanged',id)
      }
      else if(this.level==2){
        id=this.shouldShow[id].id
        this.$emit('leveTwoChanged',id)

      }
      else if(this.level==3){
        console.log('this.shouldShow[id]',this.shouldShow,id)
        this.$emit('leveThreeChanged',this.shouldShow[id].id,this.shouldShow[id].title)
      }
      this.$emit('valueChanged',this.$refs.input.value)
    },
    fillShoulShow(){
      // document.body.style.overflowY="hidden"
      this.shouldShow=[...this.items]
    },
    deSelectItem(){
      const ul=this.$refs.ul
      const lis=ul.querySelectorAll('li')
      lis.forEach(li=>{
        li.classList.remove('check')
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#search__search {
  width: 100%;
}

ul {
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid rgba(60, 60, 60, 0.2);
  border-top: 0;
  line-height: 1.7rem;
  max-height: 300px;
  overflow: auto;
  position: absolute;
  z-index: 555;
  background: white;
  max-height: 250px;
}

li {

  text-align: right;
  list-style-type: none;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  padding-right: 10px;
}

li:hover {
  background: #5d9fc4;
  color: white;
}

li.check {
  background: #007ec6;
  color: white;
}

.input__search {
  border: 1px solid rgba(60,60,60,.26);
  padding: 5px;
  border-radius: 3px;
  direction: rtl;
  text-align: right;
  font-size: 16px;
  height: 50px;
  width: 100%;
}

.input__search:focus {
  outline: none;
}

.inputWrapper__search {
  position: relative;
  position: relative;
}

.inputWrapper__search > .svg__search {
  position: absolute;
  left: 5px;
  top: 50%;
  fill: #bbbbbb;
  transition: all 0.015s linear;
  transform-origin: top;
  transform: translateY(-50%);
  background: white;
  padding-left: 10px;
  display: flex;
  justify-content: center;
}
.svg__search{
  transition: all 0.2s linear;
}
.svg__search >>> svg{
  transition: all 0.2s linear;
}
.input__search:focus + .svg__search >>> svg {
  transform: rotate(180deg);
  top: 60%
}
.input__search:focus{
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
#searchBar__search{
  position: relative;
}
</style>