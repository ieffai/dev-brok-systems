export default class Animation {
    constructor(animItems) {
        this.animItems = animItems;
        
    }

    _offset(el) {
		const rect = el.getBoundingClientRect();
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft 
		}
    }

    _animOnScroll(params) {
    
        for (let i=0; i < this.animItems.length; i++) {
            const animItem = this.animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = this._offset(animItem).top;
            console.log( animItemHeight, animItemOffset, window.innerHeight, pageYOffset)
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
                console.log('work animItemPoint');
                console.log(animItemPoint);

            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ) {
                console.log('pageYOffset ='+pageYOffset, 'animItemOffset ='+animItemOffset, 'animItemPoint='+animItemPoint);   
                
                
                animItem.classList.add('_active');


            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }

        }

    }

    animation() {
        if(this.animItems.length > 0) {
            setTimeout(() => {
                this._animOnScroll(); 
                console.log('work animation')
            }, 300);
        }
    }
}