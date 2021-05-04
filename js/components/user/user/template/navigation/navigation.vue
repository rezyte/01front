<template>
  <div id="navigation">
    <div class="naviagtionWrapper maxIs">
		<div class="hamIcon">
			<div class="sikhWrapper" @click="toggleNavigation($event)">
				<div @click="toggleNavigation($event)" class="sikh1 sikh"></div>
				<div @click="toggleNavigation($event)" class="sikh2 sikh"></div>
				<div @click="toggleNavigation($event)" class="sikh3 sikh"></div>
			</div>
				<ul v-if="showNavigation">
          <li v-if="user.is_logined" @click="showProf=true" class="profileList">
            <img  id="profImg" :src="user.picture" alt="">
            <div v-if="showProf" class="profile">
              <div class="profileWrapper">
                <div class="triangle-up"></div>
                <div class="contentWrapepper">
                  <div class="title">
                    <div class="titleWrapper">
                      <ul>
                        <li>
                            <p v-text="user.username"></p>
                          
                        </li>
                        <li><a href="/users/userpanel/">مشاهده پروفایل</a></li>
                        <hr>
                        <li>
                          <a href=''>محصول جدید</a>

                        </li>
                        <li>

                          <a href=''>محصولات من</a>
                        </li>
                        <hr>
                        <li><a href="">خروج</a></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li><a href="/users/entry/">ثبت نام / ورود</a></li>
					<li><a href="/">خانه</a></li>
					<li><a href="/about_us/">درباره ما</a></li>
					<li><a href="/blog/posts/">وبلاگ</a></li>
					<li class="myMenu" @click="toggleSubMenu()">

           <p> دسته بندیh محصولات</p>
            <ul class="ulWrapper bg-warning">
              <li class="firstLi"><flat-menu></flat-menu></li>
            </ul>
          </li>

				</ul>

		</div>


	</div>
    <!-- <transition name='toggleSubMenu' mode='out-in'> -->
    <side-menu v-if="isSubMenuOpen"></side-menu>
    <!-- </transition> -->
  </div>
</template>

<script>
import ham from "../hamIcon/ham.vue";
import flatMenu from "../flatMenu/flatMenu.vue";
import { mapGetters } from 'vuex'
import { mapActions } from "vuex";
import sideMenu from "../sideMenu/sideMenu.vue";

export default {
  components: {
    flatMenu,
    sideMenu
  },
  computed: {
	  ...mapGetters([
		  'isSubMenu'
	  ]),
	  isSubMenuOpen(){
		  console.log('comp',this.isSubMenu)
		  return this.isSubMenu
	  }
  },
  data(){
	  return{
		  showNavigation:false,
      showProf:false,
      user:userInfo
	  }
  },
  mounted(){
	  window.addEventListener("resize",this.checkNavigation)
    window.addEventListener("click",e=>{
      console.log(e.target.id)
      if(!e.target.classList.contains('profileList') && e.target.id!=='profImg'){
        this.showProf=false
      }
    })
	  this.checkNavigation()
  },
  methods:{
	  checkNavigation(){

		if(window.innerWidth>510){
		  this.showNavigation=true
		}else{
			this.showNavigation=false
		}
		this.changeSikhStyles()
	},
	toggleSubMenu(){
	    if(window.innerWidth>=700){
	      return
      }
		this.$store.dispatch("toggleSubMenu")
		console.log(this.$store.state.catsWithSubs,"hey")
	},
	toggleNavigation(e){
    this.showProf=false
		e.stopPropagation()
	  	e.preventDefault()
		this.showNavigation=!this.showNavigation
		this.changeSikhStyles()
	},
	changeSikhStyles(){
		const sikh1=document.querySelector(".sikh1")
		const sikh2=document.querySelector(".sikh2")
		const sikh3=document.querySelector(".sikh3")
		const wrapper=document.querySelector(".sikhWrapper")
		if(this.showNavigation){
			sikh2.style.transform="rotate(135deg) translate(-6px, 7px)"
			sikh1.style.transform="rotate(-135deg) translate(-4px,-4px)"
			sikh2.style.webkitTransform ="rotate(135deg) translate(-6px, 7px)"
			sikh1.style.webkitTransform ="rotate(-135deg)translate(-4px,-5px)"
			sikh3.style.display="none"
			// wrapper.style.marginTop="5px"
		}else{
			wrapper.style.marginTop="0"
			sikh3.style.display="block"
			sikh2.style.transform="rotate(0) translate(0, 0)"
			sikh1.style.transform="rotate(0)"
			sikh2.style.webkitTransform ="rotate(0) translate(0, 0)"
			sikh1.style.webkitTransform ="rotate(0)"
		}
	}
  }
};
</script>
<style scoped>
.hamIcon{
  display: flex;
}
#navigation{
  border-bottom:1px solid #d9d9d8;
  border-top:1px solid #d9d9d8;
  display: flex;
  justify-content: center;
}
.naviagtionWrapper{
  width: 95%;
}
.hamIcon{
	position: relative;
	height:50px;

}
.sikhWrapper{
	display:none;

}
ul{
	background:#f6f6f4;
	display:flex;
	justify-content: flex-end;
  align-items: center;
	width:100%;
  position: relative;
}
li{
	margin:10px;
  display: flex;
  align-items: center;
}
li:last-child{
  margin-right: 0;
}
.sikh1{
	width:40px;
	height:4px;
	border-radius:5px;
	position:relative;
	transition:all 0.4s
}
.sikh2{
	width:40px;
	height:4px;
	border-radius:5px;
	transition:all 0.4s
}
.sikh3{
	width:40px;
	height:4px;
	border-radius:5px;
	position:relative;
}
.sikh{
	background:#096fd3;
}
.profileList{
  position: absolute;
  left: 100px;
  cursor: pointer;
}
.titleWrapper{
  display: flex;
  justify-content: center;
  position: relative;
  align-content: center;

}
.titleWrapper ul{
  position: absolute;
  background: white !important;
  padding: 1rem;
  box-shadow:  0 0px 0px rgba(0,0,0,.45), 0 0px 4px 1px rgba(0,0,0,.45);
  width: 250px !important;
  flex-direction: column;
  border-radius: 10px;
}
.titleWrapper ul *{
  font-size: 14px;
}
.titleWrapper li{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  line-height: 2rem;
}
.titleWrapper li a{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  font-weight: bold;
  line-height: 2rem;
}
.profileList img{
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 50%;
}

.profile{
  position: absolute;
  top: 55px;
  z-index: 55;
  left: 110px;
  transform: translateX(-50%);
}
.profileList a{
  color: #0972ce;
}
hr{
  height: 1px;
  width: 100%;
  margin: 0;
  border: 0;
  background: #d9d8d8;
}
.triangle-up {
  content: "";
  position: absolute;
  top: 0px;
  left: -91px;
  display: block;
  width: 14px;
  height: 14px;
  background: #fff;
  -ms-transform: rotate(45deg) translateX(-50%);
  transform: rotate(45deg) translateX(-50%);
  z-index: -1;
  box-shadow: -1px -1px 1px -1px rgba(0,0,0,.54);
}

@media (max-width:510px){
  .naviagtionWrapper{
    width: 100%;
  }
	.hamIcon{
		display:flex;
		flex-direction:column;
		align-items:center	;
		position:relative;
		justify-content: center;
	}
	ul{
		position:absolute;
		top:100%;
		display:flex;
		flex-direction:column;
		align-items:center;
		background:#251f1f;
		z-index:6;
	}
	li,li p{
		color:white;
	}
	a{
		color:white;
	}
	.sikhWrapper{
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height:40px;
	}
  .profileList{
    position: static;
  }
  .profile{
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
  .triangle-up{
    left: -4px;

  }
}
.myMenu{
  position: relative;
  cursor: pointer;
}
.myMenu ul{
   display: none;
  position: absolute;
  top: 70px;
  z-index: 13;
  background: white;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
  width: max-content;
  padding-top: 20px;
  top: 40px;
  right: -34px;
  padding: 10px;
  padding-left: 0;
  padding-right: 0;
}
@media (min-width: 700px) {
  .myMenu:hover ul{
    display: block;
    width: 250px;
  }
  .myMenu:hover{
    background: white;
  }
}
.myMenu ul li{
width: 220px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  padding-left: 0;
}
.myMenu li{
  margin: 0;
}
li,.myMenu{
  padding: 14px;
}
.firstLi{
  padding-right: 0;
}
.ulWrapper{
  padding-right: 0;
}
</style>
