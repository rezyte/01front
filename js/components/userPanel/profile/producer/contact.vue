<template>
  <div id="contact">
    <div class="title"><p>راه های ارتباطی</p></div>
    <div id="contactWrapper">
      <div class="row2">

        <div class="city order1">
          <input :value="profile.fax_number" type="text" name="fax_number" placeholder="شماره فکس">
          <label for="">:شماره فکس</label>
        </div>
        <div class="state order2">
          <input :value="profile.postal_code" type="text" name="postal_code" placeholder="کد پستی">
          <label for="">:کد پستی</label>
        </div>
      </div>

      <div class="row">
        <label for="">:شماره ثابت</label>
        <input :value="profile.phone_number" name="phone_number" type="text" placeholder="شماره ثابت">
      </div>



    </div>
  </div>
</template>

<script>
export default {
name: "contact",
    props:['profile'],
}
</script>

<style scoped>
#contact{
    grid-area: contact;
}
.title{
    font-weight: bold;
    text-align: right;
    color: rgb(60,79,94);
}
input,select,textarea{
    border:1px solid #b4b4b4c7;
    border-radius: 10px; width: 200px;
    resize: none;
    margin-right: 10px;

}
label,p,input,textarea{
    text-align:right;
}
textarea{
    height: 150px;
}
label{
    min-width: 100px;
    width: max-content;
    font-size: 18px !important;
    color: rgb(60,79,94);
}
.row{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
.row label{
    order: 2;
}
.row input{
    order: 1;
}
.row2{
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
}
.order2,.order1{
    display: flex;
    align-items: center;
    justify-content: center;
}
.order1{
    margin-right: 10px;
}
@media (max-width: 500px) {
    .row2{
        flex-direction: column;
    }
    .order1{
        order: 2;
        margin-top: 10px;
    }
    .order2{
        order: 1;
    }
    .city{
        margin-right: 0;
    }
}
label{
    min-width: 120px;
    display: inline-block;
}
@media (max-width: 700px) {
    .row{
        flex-direction: column;
        align-items: flex-end;
    }
    .row label{
        order: 1;
    }
    .row input,.row textarea,.row select{
        order: 2;
    }

    .order2,.order1{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .order1 label,.order2 label{
        order:1
    }
    .order1 input,.order1 select,.order1 textarea,.order2 input,.order2 select,.order2 textarea{
        order:2
    }

}
</style>