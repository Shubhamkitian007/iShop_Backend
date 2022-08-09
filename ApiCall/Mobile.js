const get = (request , response) =>{
    response.send([
        {
            id: 1,
            name: "OnePlus 9",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
            price: "₹22000",
        },
        {
            id: 2,
            name: "OnePlus 10 Pro",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
            price: "₹19500",
        },
        {
            id: 3,
            name: "OnePlus 10 R",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_SS450_.jpg",
            price: "₹35000",
        },
        {
            id: 4,
            name: "OnePlus Nord 2T",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
            price: "₹16500",
        },
        {
            id: 5,
            name: "OnePlus Nord CE 2",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg",
            price: "₹23500",
        },
        {
            id: 6,
            name: "Redmi Note 9 Pro",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2.jpg",
            price: "₹12500",
        },
        {
            id: 7,
            name: "Redmi Note 10 Lite",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://i02.appmifile.com/644_operator_in/30/09/2021/71bceaa70d1b789429e32134dc332adb.jpg",
            price: "₹14500",
        },
        {
            id: 8,
            name: "Redmi Note 10 Prime",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg",
            price: "₹16000",
        },
        {
            id: 9,
            name: "Redmi Note 11 Pro",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/717DeSsnXpL._SL1500_.jpg",
            price: "₹17000",
        },
        {
            id: 10,
            name: "Redmi Note 11",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
            price: "₹23500",
        },
        {
            id: 11,
            name: "Samsung Galaxy A13 ",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
            price: "₹14500",
        },
        {
            id: 12,
            name: "Samsung Galaxy S20",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/812yohjGZ2L._SY550_.jpg",
            price: "₹20500",
        },
        {
            id: 13,
            name: "Asus Zenfone 8",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
            price: "₹15500",
        },
        {
            id: 14,
            name: "Asus Zenfone 7",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://dlcdnwebimgs.asus.com/gain/aefee30c-d71b-46ce-9c28-5cf6daf80a03/",
            price: "₹15999",
        },
        {
            id: 15,
            name: "Google Pixel 4 XL",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
            price: "₹16000",
        },
        {
            id: 16,
            name:   "Google Pixel 5",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
            price: "₹17000"
        },
        {
            id: 10,
            name: "Redmi Note 11",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
            price: "₹23500"
        }
    ])
}

module.exports.apiController = get;