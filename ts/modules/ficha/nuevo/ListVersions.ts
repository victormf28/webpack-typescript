export default class ListVersions {
   private dom: any = {}
   private st: any = {}

   private defaults: any = {
      ele: '.eleVersion',
      parent: '.parent',
   }

   private catchDom() {
      this.dom.parent = $(this.st.parent)
      this.dom.ele = $(this.st.ele)
   }

   private fn: any = {
      setup: () => {
         log('Loading List Version ...', this.st.parent)

         setTimeout(() => {
            Sb.run('FilterConcessionaire:demo', 'probando pubsub', 'lala')
         }, 2000)
      },
   }

   constructor(params?) {
      this.st = Object.assign({}, this.defaults, params)
      this.catchDom()
      this.fn.setup()
   }
}
