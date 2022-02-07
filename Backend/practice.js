// let Dummy = [
//     { 
//       id:1,
//       image:"img/amanda-jones-V1LGk9cQMts-unsplash-removebg-preview.png",
//       text:"Red Tape" ,
//       price:37,
//     }, 
//     { 
//       id:2,
//       image:"img/adrian-hernandez-QKP-fXB615w-unsplash-removebg-preview.png",
//       text:"Roadster" ,
//       price:30,
//     } ]
// // let price = 234
// // Dummy = Dummy + price
// // console.log(Dummy)
// // let dummy = Dummy.map((c) => {
// //     c.price
// // })

// var a = []
// var found = Dummy.forEach(e => {
//       a = a + e.price
//  } )  
// //  === 'John');
// // Dummy = Object.keys(Dummy).map(k => Dummy[k])
// console.log(found)



let cart = [
    { 
      id:1,
      image:"img/amanda-jones-V1LGk9cQMts-unsplash-removebg-preview.png",
      text:"Red Tape" ,
      price:37,
    }, 
    { 
      id:2,
      image:"img/adrian-hernandez-QKP-fXB615w-unsplash-removebg-preview.png",
      text:"Roadster" ,
      price:30,
    }
]

let cartItems = [];
cart.forEach((item) => {
    cartItems += item.text+" ";
});

console.log(cartItems)