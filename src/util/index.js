export const sleep = time => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, time);
  });
};


// export class Sleep {
//   constructor(wait = 1000) {
//     this.reject = null
//     this.reslove = null
//     this.timer = null
//     this.wait = wait
//   }
//   promise() {
//     this.timer = setTimeout(() => {
//       clearTimeout(this.timer)
//       this.reslove()
//     }, this.wait)
//     return new Promise((resloveP, rejectP) => {
//       this.reslove = resloveP
//       this.reject = rejectP
//     })
//   }
//   cancle() {
//     clearTimeout(this.timer)
//     this.reject()
//   }
// }

