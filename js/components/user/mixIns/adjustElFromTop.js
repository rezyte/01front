export const adjustElFromTop={
    methods:{
        adjustFromTop(el,changeElHeight=true,center=false){
        	if(changeElHeight){
        		el.style.height='100vh'	
            }
            let fromTop
            if(center){
                fromTop=window.scrollY+window.innerHeight/2
                el.style.transform="translate(-50%,-50%)"
            }else{
                fromTop=window.scrollY
                
            }
            
            el.style.top=`${fromTop}px`
            return fromTop
            
        }
    }
}