const data = {
    about: {
        heading: "About Tru Dwellings",
        content: "Tru Windchimes Residences Bellandur is one unique boutique apartment consisting of 2 and 3 BHK. As we all know that traffic is increasing day by day and the cost of the apartment is soaring high. Tru windchimes residences Bellandur is one such apartment which is located very close to Doddanekundi. It's difficult for all looking to buy affordable apartments in Bellandur but here we are with an excellent option for you to buy. Tru windchimes residences apartment Bellandur Doddanekundi is being offered at the best price for one to choose from the various options available."
    },
    amenities: {
        amenities1: "Amphitheatre",
        amenities2: "Event Lawns",
        amenities3: "Gym",
        amenities4: "Kids Play Area",
        amenities5: "Infinity Pool",
        amenities6: "Yoga",
        amenities7: "Jogging Track",
        amenities8: "Cricket Pitch",
        amenities9: "Half Basketball Court",
        amenities10: "Volleyball Court"
    },
    sfp: {
        sfp1: {
            heading: "2 BHK",
            img_url: ""
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
        location__content: "Bangalore, also known as Bengaluru (Kannada) is the capital of the Indian State of Karnataka. Bangalore is nicknamed the Garden City and was once called a Pensioner's Paradise. Located on the Deccan Plateau in the south-eastern part of Karnataka, Bangalore is India's third most populous city. There are a number of expats from across the world living in the city, thanks to the growing presence of Multi-National Companies."
    }
}


let location__content = document.getElementById("location__content")
location__content.innerText = data.location.location__content

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