<template>
  <div id="ticketsReps" class="maxIs">
    <div id="ticketsRepsWrapper">
      <div id="descriptions">
        <div id="descriptionsWrapper">
          <div class="singleDesc">
            <label for="">:وضعیت تیکت</label>
            <p class="descContent close">بسته</p>
          </div>
          <div class="singleDesc">
            <label for="">:موضوع</label>
            <p class="descContent">نرسیدن مرسوله</p>
          </div>
        </div>
      </div>
      <div id="messages">
        <div class="admin message">
          <div class="adminWrapper messageWrapper">
            <p class="name">ادمین</p>
            <div class="slice"></div>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos esse est id! A ad alias aliquid aspernatur atque autem corporis dicta dolore eligendi enim eum ex facilis, in itaque molestiae necessitatibus, nemo nihil nisi optio pariatur praesentium provident quisquam rem sequi tempore vel voluptate. Consequatur ipsum odio officia.</p>
          </div>
        </div>
        <div class="user message">
          <div class="userWrapper messageWrapper">
            <p class="name">کاربر</p>
            <div class="slice"></div>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur magnam magni quia repellendus, sed ullam. Iste itaque nihil tenetur.</p>
          </div>
        </div>
        <div class="admin message">
          <div class="adminWrapper messageWrapper">
            <p class="name">ادمین</p>
            <div class="slice"></div>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos esse est id! A ad alias aliquid aspernatur atque autem corporis dicta dolore eligendi enim eum ex facilis, in itaque molestiae necessitatibus, nemo nihil nisi optio pariatur praesentium provident quisquam rem sequi tempore vel voluptate. Consequatur ipsum odio officia.</p>
          </div>
        </div>
        <div class="user message">
          <div class="userWrapper messageWrapper">
            <p class="name">کاربر</p>
            <div class="slice"></div>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur magnam magni quia repellendus, sed ullam. Iste itaque nihil tenetur.</p>
          </div>
        </div>
        <div class="admin message">
          <div class="adminWrapper messageWrapper">
            <p class="name">ادمین</p>
            <div class="slice"></div>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos esse est id! A ad alias aliquid aspernatur atque autem corporis dicta dolore eligendi enim eum ex facilis, in itaque molestiae necessitatibus, nemo nihil nisi optio pariatur praesentium provident quisquam rem sequi tempore vel voluptate. Consequatur ipsum odio officia.</p>
          </div>
        </div>
        <div class="user message">
          <div class="userWrapper messageWrapper">
            <p class="name">کاربر</p>
            <div class="slice"></div>
            <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur magnam magni quia repellendus, sed ullam. Iste itaque nihil tenetur.</p>
          </div>
        </div>
      </div>
      <div id="reply">
        <div id="replyWrapper">
          <div class="singleReply">
            <label for="">:پاسخ</label>
            <textarea name="" id=""></textarea>
          </div>
          <button class="submit">ارسال پاسخ</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "ticketReps",
  mounted() {
    const r=document.querySelector('#messages')
    r.scrollTop=r.scrollHeight
  }
}
</script>

<style scoped>
  #ticketsRepsWrapper{

    padding: 20px;
  }
  #messages{
    max-height:500px;
    overflow: auto;
  }
  .messageWrapper{
    width:80%;
    background: white;
    padding: 5px;
    border:1px solid #637fca;
    border-radius: 15px;
  }
  .message{
    width: 100%;
  }
  .message:not(:first-child){
    margin-top: 20px;
  }
  .name{
    color: #ff2654;
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 10px;
    text-align: right;
  }
  .admin{
    display: flex;
    justify-content: flex-end;
  }
  #messages{
    display: flex;
    flex-direction: column;
    border:1px solid #b4b4b4
  }
  #descriptionsWrapper{
    display: flex;
    /*flex-direction: column;*/
    justify-content: flex-end;

    flex-wrap: wrap;
    align-items: flex-end;

  }
  .singleDesc{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 10px;
  }
  label{
    font-size: 20px;
    font-weight: bold;
  }
  .descContent{
    width: 200px;
    font-size: 18px;
    background: #ffffff;
    padding: 10px;
    border: 1px solid #b4b4b4;
  }
  #descriptions{
    margin-bottom: 20px;
  }
  .close{
    color: #f81a1a
  }
  .slice{
    width: 100%;
    height: 2px;
    background:#b4b4b4;
    margin-bottom: 5px;
  }

  .singleReply{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
  .singleReply textarea{
    width: 100%;
    resize: none;
    direction: rtl;
    text-align: right;
  }
  #replyWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  p{
    text-align: right;
  }
  .submit{
    margin-top: 10px;
  }
</style>