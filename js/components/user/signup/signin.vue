<template>
    <div id="signup" class='shouldCollapse'>
        <div id="signupWrapper">
            <div class="title">
                <p>ورود</p>
            </div>
            <div id="signupForm">
                <form action="">
                    <div id="email" class="inputs">
                        <div class='formInputsWrapper'>
                                                       
                                <input @blur='focusOut($event)' class='inputWithLabelThatShouldStay signupFormInputs' id='userEmail' type="text">
                                <label class='comeUpLabel' for="userEmail">ایمیل یا نام کاربری</label>

                        </div>
                    </div>
                    <div id="password" class="inputs">
                        <div class='formInputsWrapper'>
                                
                                <input @blur='focusOut($event)' class='inputWithLabelThatShouldStay signupFormInputs' id='userPassword' type="text">
                                <label class='comeUpLabel' for="userPassword">رمز</label>
                        </div>
                    </div>
                    <div id="submit" class='inputs'>
                        <button class="submit">
                            ورود
                        </button>
                    </div>
                </form>
            </div>
        </div>




    </div>

</template>

<style scoped>
    #signup{
        background: white;
        margin-top:20px;
        border-radius: 5px;
    }
    label,p{
        color:rgb(41,41,41)
    }
    #signupWrapper{
        display:flex;
        flex-direction:column;
        justify-content: center;
        padding:10px        
    }
    form{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        margin-top:20px;
    }
    
    form div div{
        display:flex;
        justify-content: space-around;
    }
    input + label{
      display:block;
        cursor:text;
        color:#777;
        transition:.15s ease-out all;
        position:absolute;
        right:1em;
    }
    .title{
        display:flex;
        justify-content: center;
    }
    .title p{
      font-size:20pt
    }
    input{
        border:1px solid rgb(202, 202, 202);
        border-radius:5px;
        padding:1em 1em .8em 1em;
        color:black;
        direction:ltr
    }
    
    .inputError{
        text-align:justify ;
    }
    .inputError span{
        color:black !important
    }

</style>


<script>
    import {validationRules} from "../mixIns/validationMixIn.js"
    import {keepStay} from "../mixIns/keepStay.js"
    export default{
        mixins:[validationRules,keepStay],
        mounted(){
            const inputs=document.querySelectorAll(".formInputsWrapper input")
            inputs.forEach(inp=>{
                inp.addEventListener("focus",input=>{
                
            })
            })
        },
        data(){
            return{
                pass:''
            }
        },
        methods:{
            startValidation(type,e){
                const el=e.target
                const parentNode=e.target.parentElement
            
                const error=parentNode.nextElementSibling
                if(el.id=="userPassword" && el.value.length<8)
                {
                     error.style.visibility="visible"
                     el.classList.remove("correct")
                     el.classList.add("wrong")
                     return
                }
                const res=this.validateUserInput(type,e)
                
                
                if(res){
                    error.style.display="none"
                    return
                }
                error.style.display="block"
            }
        }
    }
</script>