import $ from "jquery"

export default class FilterConcessionaire {
   constructor(params) {
      this.fn = {}
      this.dom = {}
      this.loadFn()

      this.defaults = {
         parent: ".parent",
         ele: ".ele"
      }

      this.st = $.extend({}, this.defaults, params)
      this.catchDom()
      this.fn.setup()
   }

   catchDom(){
      this.dom.parent = $(this.st.parent)
      this.dom.ele = $(this.st.ele, this.dom.parent)
   }
   //
   loadFn(){
      this.fn = {
         setup: () => {
            console.log("Loading Filter Concessionaire ...", this.st.parent)
         }
      }
   }
}
