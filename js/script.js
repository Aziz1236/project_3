new Vue({
    el: '.wrapper',
    data: {
        RowNum: 1,
    },
    methods: {
        forwardToRow(){
            if(this.RowNum < 4){
                this.RowNum ++;
                const Rows = document.querySelectorAll('.main__content-row');
                const Boxes = document.querySelectorAll('.main__section:nth-child(3) .main__title-column:nth-child(2) span');
                Rows[this.RowNum-1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'center'
                    })
                Boxes[0].style= "background-color: #fff";
                Boxes[1].style= "background-color: #fff";
                Boxes[2].style= "background-color: #fff";
                Boxes[3].style= "background-color: #fff";
                Boxes[this.RowNum-1].style= "background-color: #000";
            }
        },
        backToRow(){
            if(this.RowNum > 1){
                this.RowNum --;
                const Rows = document.querySelectorAll('.main__content-row');
                const Boxes = document.querySelectorAll('.main__section:nth-child(3) .main__title-column:nth-child(2) span');
                Rows[this.RowNum-1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'center'
                })
                Boxes[0].style= "background-color: #fff";
                Boxes[1].style= "background-color: #fff";
                Boxes[2].style= "background-color: #fff";
                Boxes[3].style= "background-color: #fff";
                Boxes[this.RowNum-1].style= "background-color: #000";
            }
        },
    },
});