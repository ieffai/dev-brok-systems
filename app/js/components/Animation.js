export default class Animation {
    constructor(animItems) {
        this.animItems = animItems;
        
    }

    _offset(el) {
		const rect = el.getBoundingClientRect();
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(rect.top + scrollTop);

        return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft 
		}
    }

    _animOnScroll(params) {
    
        for (let i=0; i < this.animItems.length; i++) {
            const animItem = this.animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = this._offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ) {         
                    animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }

    }

    _animWithOutScroll() {
        for (let i=0; i < this.animItems.length; i++) {
            const animItem = this.animItems[i];
            animItem.classList.add('_active');
        }
    }

    animation() {
        if(this.animItems.length > 0) {
            setTimeout(() => {
                this._animWithOutScroll(); 
            }, 300);
        }
    }
}