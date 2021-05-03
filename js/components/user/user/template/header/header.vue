<template>
	<div id="header" >
		<div id="headerWrapper" class="maxIs">
			<div class="logo">
				<img src="/static/public/images/logo.png" alt="">
			</div>
			<div class="searchBar">
				<div id="searchBarWrapper">
						<form action="/search" method="get">
							<input type="" placeholder="جست و جو ..." name="q">
							<button class='magnifier'>
								<img src="/static/public/images/mag.png" alt="">
							</button>
						</form>
				</div>
			</div>
			<div class="phone">
				<p>تلفن :3579514862-021</p>
			</div>

		</div>
	</div>
</template>

<style scoped>
	#header{
		width: 100%;
		background:#f6f6f4;
		display: flex;
		justify-content: center;
	}
	p{
		color:black
	}
	#headerWrapper{
		width: 95%;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
		align-items: center;
	}

	#searchBarWrapper{
		padding:5px;
		display: flex;
	}

	.magnifier img{
		height: 20px;
		width: 20px;
	}
	form{
		display: flex;
		align-items: center;
		border:2px solid rgb(9,111,211);
		border-radius:28px;

	}
	input{

		border: 0;
		min-width: 0;
		flex: 1;
		color: black;
		padding: .5rem 1rem;
		border-top-left-radius: 27px;
		border-bottom-left-radius: 27px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		height:100%;
	}
	::placeholder {
  		color: black;
  		opacity: 1;
	}
	.magnifier{
		border: 0;
		border-top-right-radius: 27px;
		border-bottom-right-radius: 27px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		background-color:#ffffff;
		padding: 0 22px 0 18px;
		padding:10px;
		display: flex;
		justify-content: center;
    align-items: center;
    border-left: 1px solid #b4b4b4;
		height: 100%;
	}
	.logo{
		max-width:220px;

	}
	.logo img{
		width:100%
	}
  @media (max-width: 735px) {

    #headerWrapper{
      justify-content: space-around;
    }
  }

</style>

<script>
	import axios from "axios"
	export default{
		created(){
			alert("mehran")
			console.log("mehran")
			// axios.get("/categories-api")
			// .then(res=>{
			// 	console.log("reeeeeeees",res.data)
			// 	this.$store.commit("fillCatsWithSubs",res.data)
				
			// }).catch(error =>{
			// 	console.log('error:',error)
			// })
		}
	}
</script>
