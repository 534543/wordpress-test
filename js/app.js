function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
document.querySelector('.header_burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.menu_mobile').classList.toggle('active');
})





const searchLink = document.querySelector('.search-link');
const searchBlock = document.querySelector('.header-search');
const searchClose = document.querySelector('.header-search__close');
searchLink.addEventListener('click',() =>{
    searchBlock.style.display = 'block';

})

searchClose.addEventListener('click',() =>{
    searchBlock.style.display = 'none';

})
/*let wrapper = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page',{
  
    wrapperClass: 'page__wrapper',
    slideClass: 'page_screen',

    direction: 'vertical',

    slidesPerView:1,

    parallax:true,

    keyboard:{
        enabled:true,

        onlyInViewport:true,

        pageUpDown:true,
    },

    mousewheel:{
        sensitivity:1,
        releaseOnEdges: false,
    },

    watchOverflow:true,

    speed:800,
    observer:true,

    observerParents:true,
    observeSlideChildren:true,
    pagination:{
        el:'.page__pagination',
        type:'bullets',
        bulletClass:"page__bullet",
        bulletActiveClass:"page__bullet_active",
        clickable: true,
    },
    scrollbar:{
        el:'.page__scroll',
        dragClass:"page__drag-scroll",
        draggable:true
    },
    init:false,
    
    on:{
        init:function(){
            wrapper.classList.add('_loaded');
            setScrollType();
            
        },
        resize:function(){
            setScrollType();
        }
    },
    
});


function setScrollType(){
    if(wrapper.classList.contains('_free')){
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
        pageSlider.params.parallax = true;
       

    }

    let widthWindow = window.innerWidth;
   
    
    if(widthWindow < 770){
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        
        pageSlider.params.parallax = false;
    }
    /*for(let index = 0; index < pageSlider.slider.length; index ++){
        const pageSlide = pageSlider.slider[index];
        const pageSlideContent = pageSlide.querySelector('.screen_content');
        if(pageSlideContent){
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if(pageSlideContentHeight < window.innerHeight){
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;

                break;
            }
        }
    }*/
//}
//pageSlider.init();







