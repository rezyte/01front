

export default{
    regularExpression: {
        regName: /^[ ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,20}$/,
        regUsername: /^[a-zA_Zضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
        regPassword: /^[a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g,
        reg_phoneNumber: /^09+[0-9]{9}$/gi,
    },
    // comments:null,
    // subComments:null,
    comments:[
        {
            id:1,
            name:'احمد',
            body:'خهالذسمنیارسهاثلرنستیرذثبلتسرذسعل88888888888888888ا'
        },
        {
            id:2,
            name:'رضا',
            body:'خهالذسمنیارسهاثلرنستیرذثبلتسرذسعلقسرذتسیبتممذریسمیذرمسبرذستنیرذسنتذا'
        }
    ],
    subComments:[
        {
            id:1,
            comment_id:1,
            name:'mohamad',
            body:'eihaslkdhfowgsd'
        },
        {
            id:2,
            comment_id:2,
            name:'reza',
            body:'srgssdghtrjyrdsf'
        },
        {
            id:3,
            comment_id:1,
            name:'jafar',
            body:'eihaslkljhlkgfdhfowgsd'
        }
    ],
    messages_response: {
        exist_user: {
            username: null,
            phoneNumber: null
        }
    },
    objects:'',
    exist_user:{
        username:'',
        phone_number:''
    }
}
