export default {
   events: {},
   public(eventName, fn) {
     this.events[eventName] = this.events[eventName] || []
     this.events[eventName].push(fn)
   },
   run(eventName, ...data) {
      if (this.events[eventName]) {
       this.events[eventName].forEach((fn) => {
         fn(...data)
       })
      }
   },
}
