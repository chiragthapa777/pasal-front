export const product={
    "id": 1,
    "createdAt": "2022-09-02T14:57:44.203Z",
    "updatedAt": "2022-09-02T14:57:44.205Z",
    "name": "pant",
    "price": 1000,
    "desc": "This is jeans pant from zara",
    "groupId": null,
    "active": true,
    "quantity": 10,
    "vendorId": 2,
    "userId": 7,
    "unit": "piece",
    "productTags": [],
    "vendor": {
      "id": 2,
      "createdAt": "2022-09-02T11:59:49.893Z",
      "updatedAt": "2022-09-02T14:33:22.596Z",
      "email": "ramsupplier@gmail.com",
      "name": "Ram supplier",
      "pan": "2353442355142",
      "desc": "we sell only branded product",
      "active": true
    },
    "questions": [
      {
        "id": 1,
        "createdAt": "2022-09-10T07:57:27.678Z",
        "updatedAt": "2022-08-31T01:30:51.963Z",
        "question": "Is the product still available ?",
        "answered": true,
        "userId": 9,
        "productId": 1,
        "answers": [
          {
            "id": 1,
            "createdAt": "2022-09-10T08:00:28.752Z",
            "updatedAt": "2022-09-02T15:14:42.206Z",
            "answers": "Yes the product is still available",
            "userId": 7,
            "questionId": 1,
            "user": {
              "id": 7,
              "name": "chirag thapa",
              "email": "chirag@gmail.com"
            }
          }
        ],
        "user": {
          "id": 9,
          "name": "chirag thapa",
          "email": "chirag3@gmail.com"
        }
      },
      {
        "id": 2,
        "createdAt": "2022-09-10T07:57:27.678Z",
        "updatedAt": "2022-08-31T01:30:51.963Z",
        "question": "Can we get the product in red collor ?",
        "answered": false,
        "userId": 10,
        "productId": 1,
        "answers": [],
        "user": {
          "id": 10,
          "name": "chirag thapa",
          "email": "chirag5@gmail.com"
        }
      },
      {
        "id": 3,
        "createdAt": "2022-10-02T16:09:25.348Z",
        "updatedAt": "2022-10-02T16:09:25.445Z",
        "question": "is it avaible in big size?",
        "answered": false,
        "userId": 7,
        "productId": 1,
        "answers": [],
        "user": {
          "id": 7,
          "name": "chirag thapa",
          "email": "chirag@gmail.com"
        }
      }
    ],
    "images": [
      {
        "id": 1,
        "createdAt": "2022-09-10T08:09:42.697Z",
        "updatedAt": "2022-08-31T01:30:51.963Z",
        "url": "https://www.gyapu.com/public/780-1024/files/76DAF89904FD354-16035BEIGE%20(4).jpg",
        "public_url": "https://www.gyapu.com/public/780-1024/files/76DAF89904FD354-16035BEIGE%20(4).jpg",
        "productId": 1,
        "desc": "pant"
      },
      {
        "id": 2,
        "createdAt": "2022-09-10T08:09:42.697Z",
        "updatedAt": "2022-08-31T01:30:51.963Z",
        "url": "https://www.gyapu.com/public/780-1024/files/9799C7D4AB70AEA-16035BLACK%20(1).jpg",
        "public_url": "https://www.gyapu.com/public/780-1024/files/9799C7D4AB70AEA-16035BLACK%20(1).jpg",
        "productId": 1,
        "desc": "pant"
      },
      {
        "id": 3,
        "createdAt": "2022-09-10T08:09:42.697Z",
        "updatedAt": "2022-08-31T01:30:51.963Z",
        "url": "https://www.gyapu.com/public/780-1024/files/9799C7D4AB70AEA-16035BLACK%20(1).jpg",
        "public_url": "https://www.gyapu.com/public/780-1024/files/9799C7D4AB70AEA-16035BLACK%20(1).jpg",
        "productId": 1,
        "desc": "pant"
      }
    ],
    "reviews": [
      {
        "id": 3,
        "createdAt": "2022-09-10T07:55:13.556Z",
        "updatedAt": "2022-08-31T01:30:51.963Z",
        "rating": 4,
        "feedback": "This is a very nice product i love it",
        "userId": 13,
        "productId": 1,
        "user": {
          "id": 13,
          "name": "chirag thapa",
          "email": "chirag10@gmail.com"
        }
      },
      {
        "id": 5,
        "createdAt": "2022-10-01T09:46:06.843Z",
        "updatedAt": "2022-10-01T09:46:06.845Z",
        "rating": 1,
        "feedback": "i like the product",
        "userId": 7,
        "productId": 1,
        "user": {
          "id": 7,
          "name": "chirag thapa",
          "email": "chirag@gmail.com"
        }
      },
      {
        "id": 6,
        "createdAt": "2022-10-01T15:35:42.139Z",
        "updatedAt": "2022-10-01T15:35:42.229Z",
        "rating": 5,
        "feedback": "ohh wowo",
        "userId": 7,
        "productId": 1,
        "user": {
          "id": 7,
          "name": "chirag thapa",
          "email": "chirag@gmail.com"
        }
      }
    ],
    "_count": {
      "reviews": 3,
      "questions": 3
    },
    "averageRating": 4
  }


export const productList=[
    {
        "id": 1,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Pant for men",
        "price": 5000,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":"https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?cs=srgb&dl=pexels-mica-asato-1082528.jpg&fm=jpg"
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },
    {
        "id": 2,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Shirt",
        "price": 1000,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
              "url":"https://images.pexels.com/photos/7808603/pexels-photo-7808603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },
    {
        "id": 3,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Acoustic Guitar",
        "price": 20000,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":"https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?cs=srgb&dl=pexels-philip-boakye-3428498.jpg&fm=jpg"
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },
    {
        "id": 4,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Iphone 14 pro max",
        "price": 160000,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.medium.jpg"
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },
    {
        "id": 5,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Acer nitro 5",
        "price": 250000,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":"https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelmain.png"
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },
    {
        "id": 6,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Frozen Momo",
        "price": 500,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":"https://images.pexels.com/photos/1098545/pexels-photo-1098545.jpeg?cs=srgb&dl=pexels-cats-coming-1098545.jpg&fm=jpg"
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },{
        "id": 7,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "BasketBall",
        "price": 4000,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":"https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?cs=srgb&dl=pexels-bk-aguilar-945471.jpg&fm=jpg"
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },{
        "id": 8,
        "createdAt": "2022-09-02T14:57:44.203Z",
        "updatedAt": "2022-09-02T14:57:44.205Z",
        "name": "Random stuff",
        "price": 2300,
        "desc": "This is jeans pant from zara",
        "groupId": null,
        "active": true,
        "quantity": 10,
        "vendorId": 2,
        "userId": 7,
        "productTags": [],
        "vendor": {
            "id": 2,
            "createdAt": "2022-09-02T11:59:49.893Z",
            "updatedAt": "2022-09-02T14:33:22.596Z",
            "email": "ramsupplier@gmail.com",
            "name": "Ram supplier",
            "pan": "2353442355142",
            "desc": "we sell only branded product",
            "active": true
        },
        "questions": [],
        "images": [
            {
                "url":""
            }
        ],
        "reviews": [],
        "_count": {
            "reviews": 0,
            "questions": 0
        }
    },
]
