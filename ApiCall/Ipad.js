const get = (request, response) =>{
    response.send([
        {
            id: 17,
            name: "Ipad Air 5th Gen",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-starlight-202203?wid=1765&hei=2000&fmt=jpeg&qlt=95&.v=1645895139236",
            price: "₹54900",
        },
        {
            id: 18,
            name: "Ipad Air A14",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71kFzFbiINL._SX522_.jpg",
            price: "65500",
        },
        {
            id: 19,
            name: "Ipad Air 2",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://drop.ndtv.com/TECH/product_database/images/10172014123206AM_635_apple_ipad_air_2_wifi_apple.jpeg",
            price: "₹49900",
        },
        {
            id: 20,
            name: "Ipad Air 3rd Gen",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/61z85f1XsgL._SL1500_.jpg",
            price: "₹58900",
        },
        {
            id: 21,
            name: "Ipad 11 Pro",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.aptronixindia.com/media/catalog/product/1/1/11-inch128gbipadprowi-ficelluar-spacegrey.png",
            price: "₹60000",
        },
        {
            id: 22,
            name: "Ipad Pro 10",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71JWgeHx45L._AC_SY450_.jpg",
            price: "₹49900",
        },
        {
            id: 23,
            name: "Ipad Pro M1",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=png-alpha&.v=1617900312000",
            price: "₹75000",
        },
        {
            id: 24,
            name: "Ipad Pro 10.5 Inch.",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-10-5-in/ipad-pro-10-5-in-space-gray.jpg",
            price: "₹60000",
        },
    ])
}

module.exports.apiController = get;