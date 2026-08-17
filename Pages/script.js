// CONTACT FORM

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (form && successMessage) {

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                successMessage.classList.remove("hidden");
                form.reset();
            }

        } catch (error) {
            console.log("Error:", error);
        }

    });

}


// MOBILE NAVBAR

const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && closeMenuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.showModal();
    });

    closeMenuBtn.addEventListener("click", () => {
        mobileMenu.close();
    });

}




// BIKE DATA

const bikes = [
    {
        name: "EV S1 Air",
        image: "./media/images/bike01.webp",
        description: "Speed 65-70 KM/hr. Range 90-110KM. Battery Type: 76.8V32AH Phylion Lithium or 72V 38Ah Graphene Batteries. Electric Motor Power: 2200 Watts. 3 Modes: Eco, Normal and Sports.",
        price: "Rs. 319,900"
    },

    {
        name: "Crown Electric Firefly",
        image: "./media/images/bike02.webp",
        description: "Type Electric scooter. Motor 1200-1800 W brushless. Top speed up to 60-65 km/h. Range around 70-90 km in Eco mode. Battery 73.6V 30Ah LFP lithium.",
        price: "Contact for price"
    },

    {
        name: "YJ Future Aazadi Model 04 Electric Bike",
        image: "./media/images/bike03.png",
        description: "Motor: 1000W. Battery: 60V 23AH Graphene. Speed: 55 Km/h. Disc Brake. 50-60 KM per charging. One year warranty.",
        price: "Contact for price"
    },

    {
        name: "revoo A04",
        image: "./media/images/bike04.png",
        description: "Speed up to 30KM/H. Range up to 40KM. Graphene Battery 48V 12Ah. Charging Time 6-9 hours. Motor 350W.",
        price: "Contact for price"
    },

    {
        name: "Elektra Velocity 108",
        image: "./media/images/bike05.webp",
        description: "Motor 2000 Watt BLDC Motor. 2-year replacement warranty. Torque 120 Nm. Max Speed 85 km/h. Max Range 180 km. 3 Speed Modes and Reverse.",
        price: "Contact for price"
    },

    {
        name: "Elektra BOLT",
        image: "./media/images/bike06.webp",
        description: "Motor 72V 3000W BLDC Motor. 2-year replacement warranty. Torque 120 Nm. Max Speed 105 km/h. Economy, Sports and Reverse assistance.",
        price: "Contact for price"
    }
];


// ==============================
// DISPLAY BIKES
// ==============================

const bikeTrack = document.getElementById("bikeTrack");

if (bikeTrack) {

    for (let i = 0; i < bikes.length; i += 3) {

        // ONE SLIDE
        const slide = document.createElement("div");

        // VERY IMPORTANT
        // One slide occupies the complete visible area
        slide.style.width = "100%";
        slide.style.minWidth = "100%";
        slide.style.flex = "0 0 100%";

        // EXACTLY 3 COLUMNS
        slide.style.display = "grid";
        slide.style.gridTemplateColumns =
            "repeat(3, minmax(0, 1fr))";


        // Get 3 bikes
        const slideBikes = bikes.slice(i, i + 3);


        slideBikes.forEach((bike) => {

            const cardWrapper = document.createElement("div");

            // IMPORTANT
            cardWrapper.style.minWidth = "0";
            cardWrapper.style.padding = "16px";


            cardWrapper.innerHTML = `

                <div
                    class="h-full overflow-hidden
                    rounded-lg border-2 border-black
                    bg-black"
                >

                    <img
                        src="${bike.image}"
                        alt="${bike.name}"
                        class="h-48 w-full object-cover object-center"
                    >


                    <div class="p-6">

                        <h2
                            class="mb-1 text-xs font-medium
                            tracking-widest text-gray-400"
                        >
                            VOLTRA ELECTRIC
                        </h2>


                        <h1
                            class="mb-3 text-lg font-medium
                            text-white"
                        >
                            ${bike.name}
                        </h1>


                        <p
                            class="mb-6 leading-relaxed
                            text-gray-300"
                        >
                            ${bike.description}
                        </p>


                        <div
                            class="flex items-center
                            justify-between"
                        >

                            <span
                                class="font-semibold
                                text-lime-300"
                            >
                                ${bike.price}
                            </span>


                            <a
                                href="/contact"
                                class="inline-flex items-center
                                text-lime-300
                                hover:text-white"
                            >
                                Explore

                                <svg
                                    class="ml-2 h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>

                            </a>

                        </div>

                    </div>

                </div>

            `;


            slide.appendChild(cardWrapper);

        });


        bikeTrack.appendChild(slide);

    }

}


// ==============================
// BIKE SLIDER
// ==============================

const prevBike =
    document.getElementById("prevBike");

const nextBike =
    document.getElementById("nextBike");


let currentSlide = 0;


// NEXT

nextBike.addEventListener("click", function () {

    if (currentSlide === 0) {

        currentSlide = 1;

        bikeTrack.style.transform =
            "translateX(-100%)";

    }

});


// PREVIOUS

prevBike.addEventListener("click", function () {

    if (currentSlide === 1) {

        currentSlide = 0;

        bikeTrack.style.transform =
            "translateX(0%)";

    }

});