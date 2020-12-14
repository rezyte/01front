<template>
  <div class="searchBar">
    <div class="searchBarWrapper">
      <form action="/search" method="get">
        <input type="" placeholder="جست و جو ..." name="q">
        <button class='magnifier'>
          <img src="/static/public/images/mag.png" alt="">
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBar"
}
</script>

<style scoped>
.searchBarWrapper{
  padding:5px;
  display: flex;
}
.magnifier img{
  height: 20px;
  width: 20px;
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
form{
  display: flex;
  align-items: center;
  border:2px solid rgb(9,111,211);
  border-radius:28px;

}
</style>