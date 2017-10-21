import $ from "jquery"

export default {
    st: {},
    dom: {},
    defaults : {
        parent: ".parent",
        ele: ".ele"
    },
    catchDom(){
        this.dom.parent = $(this.st.parent)
        this.dom.ele = $(this.st.ele, this.dom.parent)
    },
    fn: {
        setup: () => {
            console.log("Loading Filter Concessionaire ...", this.st)
        }
    },
    init(params){
        console.log("this.st", this.st.parent)
        this.st = $.extend({}, this.defaults, params)
        this.catchDom()
        this.fn.setup()
    }
}