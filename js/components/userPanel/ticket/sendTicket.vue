<template>
  <div id="sendTicket">
    <div id="sendTicketWrapper">
      <form action="" method="post">
        <div class="row">
          <label for="">موضوع تیکت:</label>
          <input type="text" placeholder="موضوع تیکت">

        </div>
        <div class="row">
          <label for="">اولویت:</label>
          <select name="" id="">

            <option value="بالا">بالا</option>
            <option value="متوسط">متوسط</option>
            <option value="پایین">پایین</option>
          </select>

        </div>
        <div class="row">
          <label>متن درخواست:</label>
          <textarea placeholder="متن درخواست..." name="" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "sendTicket"
}
</script>

<style scoped>
label{
  font-size: 16px;
  font-weight: bold;
}
input,select{
  width: 200px;
  border: 1px solid #b4b4b4;
  padding: 10px;
}
textarea{
  width: 100%;
  direction: rtl;
  text-align: right;
  font-size: 16px;
  resize: none;
  border: 1px solid #b4b4b4;
}
#sendTicketWrapper{
  padding: 10px;
}
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

option,select{
  font-size: 15px;
  direction: rtl;
  font-weight: bold;
}
</style>