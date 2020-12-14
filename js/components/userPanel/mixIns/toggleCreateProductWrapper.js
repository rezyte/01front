export const toggleWrapper={
    methods:{
        toggleWrapperMethod(e){
            const closest=e.target.closest(".creatProductTitle")
            const svg=closest.querySelector('svg')
            svg.style.transform='rotate(90deg)'
            const next=closest.nextElementSibling
            const display=closest.nextElementSibling.style.display
            if(display=='' || display=='none'){
                next.style.display='block'
                svg.style.transform='rotate(90deg)'
            }
            if(display=='block'){
                next.style.display="none"
                svg.style.transform='rotate(-90deg)'
            }
            console.log(display)

        }
    }

}