
var clothing = [
    { id: 1, name:"shirts", prod: [
    {id:1,  price:"$112.00", title:"SPACE CAMO BIG APE HEAD TEE" , img:"https://cdn.shopify.com/s/files/1/0214/3706/products/001TEC201064_WHT_A_1024x1024.jpg?v=1463782795"},
    {id:2, price:"$65.00", title:"BILLIONAIRE BOYS CLUB BBC LOGO ", img:"https://s-media-cache-ak0.pinimg.com/originals/e1/14/63/e11463e6b70a82e7456ecd6351f5146b.jpg"},
    {id:3,  price:"$40.90", title:"Palace Tri-Ferg Glow Skate T-Shirt", img:"http://www.dhresource.com/0x0s/f2-albu-g4-M00-03-B3-rBVaEFfTfjuARHxuAAH9GsBXxuo982.jpg/wishcart-palace-t-shirt-men-hip-hop-fashion.jpg"}
    ]},
    {id:2, name:"pants" , prod:[
    {id:1,  price:123.99, title:"Represent Clothing Essential Demin - Navy Blue Men's Pants" , img:"https://www.lazarosoho.com/images/represent-clothing-essential-demin-navy-blue-mens-pants-LZR5035.jpg"},
    {id:2,  price:67.99, title:"REPRESENT DESTROYER JEAN"  , img:"https://i1.adis.ws/i/jpl/te_235220_b?qlt=60&unsharp=0,1,1,7&w=600&h=777&v=1"},
    {id:3,  price:343.99, title:"REPRESENT MEN'S REPAIRER DESTROYER JEAN SAND BLAST" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssXkbx9IE0K-2ZBQbTR5nH9Cx9wExLmfX2QCSPvW3llf8mzmb"}
    ]},
    {id:3, name:"shoes", prod:[
    {id:1, price:"$400.00", title:"Bred 1s"  ,img:"https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742962-air-jordan-1-retro-high-og-bred-black-varsity-red-white-011845_2.jpg"},
    {id:2,  price:"$800.00", title:"Yeezy VS Boost" ,img:"https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/8/0/800389_1.jpg"},
    {id:3,  price:"$250.00", title:"Asics"  ,img:"https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/a/s/asics-gel-ltye-3-bait-vanquish-camo-black-camo-991856_1.png"}
    ]}
];

class ProductService {
    constructor(){
        this.clothing = clothing;
    }
}