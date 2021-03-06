

export default {
    regularExpression: {
        regName: /^[ ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئوآژ]{3,25}$/,
        regLastName: /^[ ضصثقفغعهخحژجآچپشسیبلاتنمکگظطزرذدئو]{3,35}$/,
        regUsername: /^[a-zA_Zضصثقفغعهخحژجچپشسیآبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
        regPassword: /^[\u06F0-\u06F90-9a-zA-Z0-9ضصآثقفغعهخحجچپشسیبلاژتنمکگظطزرذدئو ]{4,20}$/g,
        regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        reg_phoneNumber: /^[0-9\u06F0-\u06F90-9]{11}$/gi,
        regNameCompany: /^[ًٌٍ،؛َُِّۀآـ«»,:"ةيژؤإأء<> -؟ضصثقفغعهژخحجچپشسیبلاتنمکگظطزرذدئو./a-zA-Z0-9\u06F0-\u06F90-9]{3,100}$/
    },
    // comments:null,
    // subComments:null,
    comments: [
        {
            id: 1,
            name: 'احمد',
            body: 'خهالذسمنیارسهاثلرنستیرذثبلتسرذسعل88888888888888888ا'
        },
        {
            id: 2,
            name: 'رضا',
            body: 'خهالذسمنیارسهاثلرنستیرذثبلتسرذسعلقسرذتسیبتممذریسمیذرمسبرذستنیرذسنتذا'
        }
    ],
    subComments: [
        {
            id: 1,
            comment_id: 1,
            name: 'mohamad',
            body: 'eihaslkdhfowgsd'
        },
        {
            id: 2,
            comment_id: 2,
            name: 'reza',
            body: 'srgssdghtrjyrdsf'
        },
        {
            id: 3,
            comment_id: 1,
            name: 'jafar',
            body: 'eihaslkljhlkgfdhfowgsd'
        }
    ],
    messages_response: {
        exist_user: {
            username: null,
            phoneNumber: null
        }
    },
    objects: '',
    exist_user: {
        username: '',
        phone_number: ''
    },
    transactions: []
    // data_paginations:{
    //     "transactions": [
    //         {
    //             "id": "1",
    //             "date": "26.10.2019",
    //             "amount": "100",
    //             "type": "success"
    //         },
    //         {
    //             "id": "2",
    //             "date": "26.10.2019",
    //             "amount": "200",
    //             "type": "error"
    //         },
    //         {
    //             "id": "3",
    //             "date": "26.10.2019",
    //             "amount": "200",
    //             "type": "error"
    //         },
    //         {
    //             "id": "4",
    //             "date": "26.10.2019",
    //             "amount": "200",
    //             "type": "error"
    //         },
    //         {
    //             "id": "5",
    //             "date": "26.10.2019",
    //             "amount": "200",
    //             "type": "error"
    //         },
    //         {
    //             "id": "6",
    //             "date": "26.10.2019",
    //             "amount": "300",
    //             "type": "processing"
    //         }
    //     ]
    // }
}
