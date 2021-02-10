<template>
	<div id="footer" style="visibility: hidden">
        <profile-options v-if="isOptionsOpen"></profile-options>
		
		<div id="footerWrapper" class='maxIs'>
			<!--<div class="firstRow">
				<mega></mega>
			</div>-->
			<div class="secondRow">
				<mission></mission>
				<abouts></abouts>
				<!-- <sign-up></sign-up> -->
				<cont></cont>


				
			</div>
			<div id="slicer"></div>

			<div id="thirdRow">
				<p><a href="/rules_to_use">شرایط استفاده</a></p>
				<p><a href="/privacy_policy">حریم خصوصی</a></p>
<!--				<p><a href="#">نقشه سایت</a></p>-->
				
			</div>
			
			



		</div>
		<p class="copy">&#169;تمام حقوق این سایت متعلق به دمیرکو است </p>
	</div>

</template>


<style scoped>
#footer{
  width: 100%;
}
.firstRow{
	width:100%
}
#thirdRow a{
	font-size: 12px;
    font-weight: 800;
}
.copy{
	text-align:center
}
#thirdRow{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
}
#thirdRow p{
	font-size: 12px;
	margin: 15px;
}
.copy{
	margin:auto;
}
	#slicer{
		width: 90%;
    margin: auto;
    height: 3px;
    background-color: #9f9f9f;
	margin-top:50px
	}
	input{
		border:1px solid rgb(184, 184, 184);
		padding:5px;
		border-radius:10px;
		direction: ltr;
		color:black
	}
	#footerWrapper{
		display: flex;
		flex-direction: column;
		/* padding:10px; */
		width:100%;
		justify-content: space-evenly;
	}
	form input,form button
	{
		margin-top: 10px;
	}
	#footer{
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f4;
		border-top:1px solid #d9d8d8;
			padding-bottom:30px
	}
	#footer p,#footer a{
		color:black
	}
	a:hover{
		text-decoration:underline;
	}
	form{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.phoneNum p{
		text-align:center;
		color:black
	}
	p{
		color:black
	}
  .secondRow div{
    margin: 10px;
  }
  @media (max-width:800px) {
	  #footer{
			padding-bottom:130px
		}
	
  }
	@media (max-width: 1120px)
	{
		#footerWrapper{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		form p{
			text-align: center;
		}
		
		#footerWrapper > div{
			margin-top: 20px;
		}
	}
	.secondRow{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-evenly;

		margin-top:50px;
	}



</style>


<script>
import { mapGetters } from "vuex";
	import mega from "./menu.vue"
	import cont from "./contact/contact.vue"
	import signUp from "./signUp/signUp.vue"
	import mission from "./mission/mission.vue"
	import abouts from "./abouts/abouts.vue"
    import profileOptions from "../profileOptions/profileOptions.vue";
	
	export default{
		components:{
			mega,
			cont,
			signUp,
			abouts,
			mission,
            profileOptions
		},computed:{
            ...mapGetters(["isOptionsOpen"]),
        },
        mounted() {
		    window.addEventListener("resize",()=>{
		        if(window.innerWidth>799){
		            this.$store.state.showProfileOptions=false
                    this.$store.state.showisSubMenuOpen=false
                    document.body.style.overflow=''
                }
            })
        }
    }
</script>