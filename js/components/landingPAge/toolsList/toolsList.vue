<template>
    <div id="tootlsList">
        <div class="title">
            <h2>خدمات دمیرکو برای شما</h2>
        </div>
        <div id="toolsListWrapper">
            <sell></sell>
            <services></services>
            <tools></tools>
        </div>
    </div>
</template>

<script>
import sell from "./sell/sell.vue";
import services from "./services/services.vue";
import tools from "./tools/tools.vue"
export default {
name: "toolsList",
    components:{
        sell,
        services,
        tools
    }
}
</script>

<style scoped>
#tootlsList{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    align-items: center;
  background-color: whitesmoke;
}
#toolsListWrapper{

    display: flex;
    padding: 5px;
    margin-top: 50px;
    max-width: 1000px;
    width: 100%;
    justify-content: space-between;
}
#toolsListWrapper >>> .singleToolsWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
#toolsListWrapper >>> ul{
    direction: rtl;
    text-align: right;
    list-style-type: none;
 }
#toolsListWrapper >>> li{
    display: flex;
    align-items: center;
}
#toolsListWrapper >>> .indicator{
    margin-left: 5px;
}
#toolsListWrapper >>> .title p{
    font-size: 18px;
    color: var(--logoBlue);
    font-weight: bold;
}
#toolsListWrapper >>> .singleTools{
    max-width: 300px;
    width: 100%;
}
.title{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title h2{
  text-align: center;
  /*font-size: 29px;*/
  font-weight: 700;
  color: var(--blue);
}
.title p:nth-child(2){
    text-align: center;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
    color: var(--fontColor)
}
@media (max-width: 830px) {
        #toolsListWrapper{
            flex-direction: column;
            align-items: center;
        }
    #toolsListWrapper >>> .singleTools:not(:first-child){
        margin-top: 40px;
    }
}
</style>
