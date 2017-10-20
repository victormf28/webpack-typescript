export default (params)=>{
    let st = {},
    dom = {},
    defaults,
    catchDom,
    fn

    defaults = {
        parent: ".parent",
        ele: ".ele"
    }

    catchDom = () =>{
        dom.parent = $(st.parent)
        dom.ele = $(st.ele, dom.parent)
    }

    fn = {
        setup(){
            console.log("Loading List Versions ...")
        }
    }

    (() => {
        st = $.extend({}, defaults, params)
        catchDom()
        fn.setup()
    })()
}