<template>
  <div id="productComments">
    <div class="" id="productCommentsWrapper">
      <div class="sectionT">
        <div class="title"></div>
      </div>
      <div id="createNewComment">
        <div id="createNewCommentWrapper">
          <form action="" method="post">
            <div id="email" class="inputs">
              <div class="formInputsWrapper">
                <input
                  style="direction: rtl"
                  autocomplete="off"
                  name="username"
                  @blur="focusOut($event)"
                  class="inputWithLabelThatShouldStay signupFormInputs"
                  id="userEmail"
                  type="text"
                />
                <label class="comeUpLabel" for="userEmail">نام</label>
              </div>
              <p class="inputError">فرمت ایمیل اشتباه است</p>
            </div>

            <textarea
              name="content"
              placeholder="نظر خود را بنویسید"
            ></textarea>
            <button type="submit" class="submit">ثبت نظر</button>
          </form>
        </div>
      </div>
      <div id="allComments">
        <div id="allComentsWrapper">
          <div class="singleComment" v-for="(c, i) in comments" :key="i">
            <div class="singleCommentWrap">
              <div class="writerDetail">
<!--                <div class="date">-->
<!--                  <p>تاریخ:16/6/1399</p>-->
<!--                </div>-->
                <div class="name">
                  <p rel="nofollow">{{ c.username }}</p>
                </div>
              </div>
              <div class="comment">
                <p rel="nofollow" class="comment">{{ c.content }}</p>
              </div>
            </div>
            <!--            <div class="commentSlicer">-->
            <!--              <div></div>-->
            <!--            </div>-->
          </div>
        </div>
        <!-- <button class="submit">مشاهده کامنت بیشتر</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { keepStay } from "../mixIns/keepStay.js";
export default {
  props: ["comments"],
  mixins: [keepStay],
};
</script>

<style scoped>
.inputs {
  margin-bottom: 15px;
}
#allComments {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.commentSlicer div {
  width: 75%;
  height: 2px;
  background: rgb(172, 172, 172);
}
.commentSlicer {
  display: flex;
  justify-content: flex-end;
}
#productComments {
  margin-top: 50px;
}
#createNewCommentWrapper {
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
form button {
  margin-top: 10px;
}
.comment{
  margin-right: 20px;
}
textarea {
  width: 80%;
  height: 150px;
  direction: rtl;
  text-align: right;
  resize: none;
  font-size: 15pt;
  padding: 5px;
}
.singleCommentWrap {
  padding: 20px;
  padding-right: 0;
}
.writerDetail {
  display: flex;
  justify-content: flex-end;
}
#allComentsWrapper .singleComment:not(first-child) {
  margin-top: 30px;
  border-top: 1px solid black;
}
#allComentsWrapper {
  display: flex;
  flex-direction: column;
  width: 95%;
}
.comment p {
  max-width: 400px;
  /* word-break: break-all; */
  word-wrap: break-word;
  text-align: justify;
}
.comment {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.name p {
  color: #ff2654;
}
@media (max-width: 362px) {
  .name p,
  .date p {
    font-size: 13pt;
  }
  .singleCommentWrap {
    padding: 0;
  }
  .comment p {
    max-width: 95%;
  }
  .commentSlicer {
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;
  }
  #allComentsWrapper .singleComment:not(first-child) {
    padding-bottom: 10px;
  }
}
</style>
