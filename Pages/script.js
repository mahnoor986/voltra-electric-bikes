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

// DISPLAY BIKES

const bikeTrack = document.getElementById("bikeTrack");

if (bikeTrack) {

    bikes.forEach((bike) => {

        bikeTrack.innerHTML += `
        
            <div class="p-4 flex-none w-1/3">

                <div class="h-full bg-black
                            border-2 border-black
                            rounded-lg overflow-hidden">

                    <img
                        class="lg:h-48 md:h-36 w-full
                               object-cover object-center"
                        src="${bike.image}"
                        alt="${bike.name}"
                    >

                    <div class="p-6">

                        <h2 class="tracking-widest text-xs
                                   font-medium text-gray-400 mb-1">
                            VOLTRA ELECTRIC
                        </h2>

                        <h1 class="text-lg font-medium
                                   text-gray-300 mb-3">
                            ${bike.name}
                        </h1>

                        <p class="leading-relaxed
                                  text-gray-300 mb-5">
                            ${bike.description}
                        </p>

                        <div class="flex items-center
                                    justify-between">

                            <span class="text-lime-300
                                         font-semibold">
                                ${bike.price}
                            </span>

                            <a
                                href="/contact"
                                class="text-lime-300
                                       inline-flex items-center
                                       hover:text-white"
                            >
                                Explore

                                <svg
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
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

            </div>

        `;
    });
}



// BIKE SLIDER

const prevBike = document.getElementById("prevBike");
const nextBike = document.getElementById("nextBike");

let currentSlide = 0;

if (bikeTrack && prevBike && nextBike) {

    nextBike.addEventListener("click", () => {

        if (currentSlide === 0) {

            currentSlide = 1;

            bikeTrack.style.transform = "translateX(-50%)";

        }

    });


    prevBike.addEventListener("click", () => {

        if (currentSlide === 1) {

            currentSlide = 0;

            bikeTrack.style.transform = "translateX(0%)";

        }

    });

}