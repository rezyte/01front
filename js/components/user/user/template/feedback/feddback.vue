<template>
	<div v-if="should" id="feedBack">
		<div id="feedBackWrapper">
			<div class="singleFeedBackMessage">
				<ul>
				    <li>{{getMsg}}</li>
				</ul>				
			</div>
		</div>
	</div>
</template>

<style>
	
	#feedBack{
		width: 100%;
	    display: flex;
	    justify-content: center;
	    color: wheat;
	    background: #096fd3;
	}
	#feedBackWrapper{
		padding: 10px;
	}
	li{
		font-size: 20px
	}
</style>


<script> 
	export default{
		props:["msgs"],

		computed:{
			should(){
				if(this.msgs!=""){
					return true
				}
				return false
			},
			getMsg(){
				return JSON.parse(this.msgs).msg
			}
		}
	}
</script>