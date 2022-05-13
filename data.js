const data = {
    logoColor: "#fff",
    popup__img__logo__1:"https://ik.imagekit.io/q8qsfnr9wag/logo_NvwiEc4lb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652414823693",
    popup__img__logo__2:"https://ik.imagekit.io/q8qsfnr9wag/logo_NvwiEc4lb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652414823693",
    header__logo__img__sm: "https://ik.imagekit.io/q8qsfnr9wag/logo_NvwiEc4lb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652414823693",
    header__logo__img: "https://ik.imagekit.io/q8qsfnr9wag/logo_NvwiEc4lb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652414823693",
    background_images: {
        slider_img1: "https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058",
        slider_img2: "https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058",
        slider_img3: "https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058"
    },
    gallery__slider:{
        gallery__slider__img1:"https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058",
        gallery__slider__img2:"https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058",
        gallery__slider__img3:"https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058"
    },
    about: {
        heading: "About Tru Dwellings ABC",
        content: "Tru Windchimes Residences Bellandur is one unique boutique apartment consisting of 2 and 3 BHK. As we all know that traffic is increasing day by day and the cost of the apartment is soaring high. Tru windchimes residences Bellandur is one such apartment which is located very close to Doddanekundi. It's difficult for all looking to buy affordable apartments in Bellandur but here we are with an excellent option for you to buy. Tru windchimes residences apartment Bellandur Doddanekundi is being offered at the best price for one to choose from the various options available."
    },

    amenities: {
        amenities1: "Table Tennis",
        amenities2: "Event Lawns",
        amenities3: "Gym",
        amenities4: "Kids Play Area",
        amenities5: "Infinity Pool",
        amenities6: "Yoga",
        amenities7: "Jogging Track",
        amenities8: "Pool Table",
        amenities9: "Basketball Court",
        amenities10: "Volleyball Court",
    },
    sfp: {
        sfp1: {
            heading: "4 BHK",
            img_url: "https://ik.imagekit.io/q8qsfnr9wag/download__1__mwpTrUgtD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652289148058"
        },
        sfp2: {
            heading: "3 BHK",
            img_url: ""
        },
        sfp3: {
            heading: "Master Plan",
            img_url: ""
        }
    },
    priceSection: [
        {
            type: "2 BHK",
            rera_carpet: "1035 - 1150 Sq.ft",
            price: "Price Breakup"
        },
        {
            type: "3 BHK 2T",
            rera_carpet: "1425 Sq.ft",
            price: "Price Breakup"
        },
        {
            type: "3 BHK 3T",
            rera_carpet: "1650 Sq.ft",
            price: "Price Breakup"
        }
    ],
    newLaunch: {
        heading: "Tru Windchimes Residences",
        content: "2,2.5 & 3 BHK Apartment for sale Bellandur",
    },
    overview: {
        heading: "Tru Windchimes Residences",
        content: "Tru Windchimes Residences Bellandur is a unique apartment composed of 2, 2.5 & 3 BHK Bellandur. Windchimes is right backside of RMZ, Eco-world is nearest to one of the biggest tech park zone of Bangalore India. It is very difficult to find affordable apartments close to work places and Tech park zones. The Tru Windchimes residences Doddanekundi offers numerous options at the best price. One of the most awaited projects in Bangalore from one the most stable companies in Bangalore. It is one of the best upcoming properties in Bangalore for all looking to buy properties in a prime location."
    },
    location: {
        location__map:"",
        location__map__img:"",
        location__content: "Bangalore, also known as Bengaluru (Kannada) is the capital of the Indian State of Karnataka. Bangalore is nicknamed the Garden City and was once called a Pensioner's Paradise. Located on the Deccan Plateau in the south-eastern part of Karnataka, Bangalore is India's third most populous city. There are a number of expats from across the world living in the city, thanks to the growing presence of Multi-National Companies.",
        nearby: {
            nearby1: "Govt Primary School - 1.9 Km",
            nearby2: "Macaulay English High School - 2.3 Km",
            nearby3: "Spandana Hospital - 1.8 Km",
            nearby4: "Kshema Hospital - 6.8 Km",
            nearby5: "Sri Balaji Chithra Mandira - 2.6 Km",
            nearby6: "Daffodils - 1.6 Km",
        }
    }
}


let gallery__slider__img1 = document.getElementById("gallery__slider__img1")
gallery__slider__img1.src = data.gallery__slider.gallery__slider__img1

let gallery__slider__img2 = document.getElementById("gallery__slider__img2")
gallery__slider__img2.src = data.gallery__slider.gallery__slider__img2

let gallery__slider__img3 = document.getElementById("gallery__slider__img3")
gallery__slider__img3.src = data.gallery__slider.gallery__slider__img3

let popup__img__logo__1 = document.getElementById("popup__img__logo__1")
popup__img__logo__1.src = data.popup__img__logo__1

let popup__img__logo__2 = document.getElementById("popup__img__logo__2")
popup__img__logo__2.src = data.popup__img__logo__2

let location__map = document.getElementById("location__map")
location__map.src = data.location.location__map

let location__map__img = document.getElementById("location__map__img")
location__map__img.src = data.location.location__map__img

let header__logo__img = document.getElementById("header__logo__img")
header__logo__img.src = data.header__logo__img__sm

let header__logo__img__sm = document.getElementById("header__logo__img__sm")
header__logo__img__sm.src = data.header__logo__img__sm

let slider_img1 = document.getElementById("slider_img1")
slider_img1.src = data.background_images.slider_img1

let slider_img2 = document.getElementById("slider_img2")
slider_img2.src = data.background_images.slider_img2

let slider_img3 = document.getElementById("slider_img3")
slider_img3.src = data.background_images.slider_img3


let sfp1__heading = document.getElementById("sfp1__heading")
sfp1__heading.innerText = data.sfp.sfp1.heading

let sfp1__img = document.getElementById("sfp1__img")
sfp1__img.src = data.sfp.sfp1.img_url

let sfp2__heading = document.getElementById("sfp2__heading")
sfp2__heading.innerText = data.sfp.sfp2.heading

let sfp2__img = document.getElementById("sfp2__img")
sfp2__img.src = data.sfp.sfp2.img_url

let sfp3__heading = document.getElementById("sfp3__heading")
sfp3__heading.innerText = data.sfp.sfp3.heading

let sfp3__img = document.getElementById("sfp3__img")
sfp3__img.src = data.sfp.sfp3.img_url

let location__content = document.getElementById("location__content")
location__content.innerText = data.location.location__content


let location__nearby1 = document.getElementById("location__nearby1")
location__nearby1.innerText = data.location.nearby.nearby1


let location__nearby2 = document.getElementById("location__nearby2")
location__nearby2.innerText = data.location.nearby.nearby2

let location__nearby3 = document.getElementById("location__nearby3")
location__nearby3.innerText = data.location.nearby.nearby3

let location__nearby4 = document.getElementById("location__nearby4")
location__nearby4.innerText = data.location.nearby.nearby4

let location__nearby5 = document.getElementById("location__nearby5")
location__nearby5.innerText = data.location.nearby.nearby5

let location__nearby6 = document.getElementById("location__nearby6")
location__nearby6.innerText = data.location.nearby.nearby6

let overview__heading = document.getElementById("overview__heading")
overview__heading.innerText = data.overview.heading


let overview__content = document.getElementById("overview__content")
overview__content.innerText = data.overview.content


let ps__type1 = document.getElementById("ps__type1")
ps__type1.innerText = data.priceSection[0].type

let ps__rc1 = document.getElementById("ps__rc1")
ps__rc1.innerText = data.priceSection[0].rera_carpet

let ps__type2 = document.getElementById("ps__type2")
ps__type2.innerText = data.priceSection[1].type

let ps__rc2 = document.getElementById("ps__rc2")
ps__rc2.innerText = data.priceSection[1].rera_carpet

let ps__type3 = document.getElementById("ps__type3")
ps__type3.innerText = data.priceSection[2].type

let ps__rc3 = document.getElementById("ps__rc3")
ps__rc3.innerText = data.priceSection[2].rera_carpet


let newLaunch__heading = document.getElementById("newLaunch__heading")
newLaunch__heading.innerText = data.newLaunch.heading

let newLaunch__content = document.getElementById("newLaunch__content")
newLaunch__content.innerText = data.newLaunch.content

let about__heading = document.getElementById("about__heading")
about__heading.innerText = data.about.heading

let about__content = document.getElementById("about__content")
about__content.innerText = data.about.content

let amenities1 = document.getElementById("amenities1")
amenities1.innerText = data.amenities.amenities1

let amenities2 = document.getElementById("amenities2")
amenities2.innerText = data.amenities.amenities2

let amenities3 = document.getElementById("amenities3")
amenities3.innerText = data.amenities.amenities3

let amenities4 = document.getElementById("amenities4")
amenities4.innerText = data.amenities.amenities4

let amenities5 = document.getElementById("amenities5")
amenities5.innerText = data.amenities.amenities5

let amenities6 = document.getElementById("amenities6")
amenities6.innerText = data.amenities.amenities6

let amenities7 = document.getElementById("amenities7")
amenities7.innerText = data.amenities.amenities7

let amenities8 = document.getElementById("amenities8")
amenities8.innerText = data.amenities.amenities8

let amenities9 = document.getElementById("amenities9")
amenities9.innerText = data.amenities.amenities9

let amenities10 = document.getElementById("amenities10")
amenities10.innerText = data.amenities.amenities10
