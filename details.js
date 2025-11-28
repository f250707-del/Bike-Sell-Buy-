// ============================================
// BIKE DATA OBJECT
// ============================================
const bikesData = {
    1: {
        name: "Thunder Sport 1000",
        price: "$18,999",
        image: "images/bike1.jpg", // Red sports bike (Ducati Panigale style)
        description: "The Thunder Sport 1000 is our flagship sports bike, engineered for riders who demand the ultimate in performance and precision. With its powerful 998cc engine and cutting-edge aerodynamics, this machine delivers an exhilarating riding experience that pushes the boundaries of what's possible on two wheels. The advanced suspension system and high-performance braking ensure maximum control at any speed, while the sleek design turns heads wherever you go.",
        specs: {
            "Engine": "998cc Liquid-Cooled V-Twin",
            "Power": "205 HP @ 13,000 RPM",
            "Torque": "102 Nm @ 10,500 RPM",
            "Transmission": "6-Speed Manual",
            "Top Speed": "186 mph (299 km/h)",
            "Weight": "195 kg (430 lbs)",
            "Fuel Capacity": "17 liters (4.5 gallons)",
            "Seat Height": "830 mm (32.7 in)"
        }
    },
    2: {
        name: "Urban Cruiser 850",
        price: "$14,499",
        image: "images/bike2.jpg", // Black cruiser bike (Harley Davidson style)
        description: "Experience the perfect blend of classic cruiser styling and modern comfort with the Urban Cruiser 850. This bike is designed for riders who appreciate the journey as much as the destination. Its comfortable seating position, smooth power delivery, and distinctive exhaust note make every ride memorable. Whether you're cruising through city streets or embarking on a weekend road trip, the Urban Cruiser 850 provides a refined and enjoyable riding experience.",
        specs: {
            "Engine": "850cc Air-Cooled V-Twin",
            "Power": "72 HP @ 6,500 RPM",
            "Torque": "85 Nm @ 4,200 RPM",
            "Transmission": "5-Speed Manual",
            "Top Speed": "115 mph (185 km/h)",
            "Weight": "248 kg (547 lbs)",
            "Fuel Capacity": "19 liters (5 gallons)",
            "Seat Height": "680 mm (26.8 in)"
        }
    },
    3: {
        name: "Adventure Tourer 1200",
        price: "$21,999",
        image: "images/bike3.jpg", // Adventure touring bike (BMW GS style)
        description: "Built for the adventurous spirit, the Adventure Tourer 1200 is your ticket to exploring the world on two wheels. This versatile machine excels on any terrain, from highway cruising to off-road trails. With its powerful engine, advanced electronics, and comfortable ergonomics, you can tackle long-distance journeys with confidence. The robust build quality and extensive luggage capacity make it the ideal companion for serious adventure riders.",
        specs: {
            "Engine": "1254cc Liquid-Cooled Boxer Twin",
            "Power": "136 HP @ 7,750 RPM",
            "Torque": "143 Nm @ 6,500 RPM",
            "Transmission": "6-Speed Manual",
            "Top Speed": "143 mph (230 km/h)",
            "Weight": "268 kg (591 lbs)",
            "Fuel Capacity": "30 liters (7.9 gallons)",
            "Seat Height": "850 mm (33.5 in)"
        }
    },
    4: {
        name: "Street Fighter 750",
        price: "$12,999",
        image: "images/bike4.jpg", // White/silver naked street bike (Yamaha MT style)
        description: "The Street Fighter 750 embodies aggressive styling and nimble handling, making it the perfect weapon for urban environments. Its naked design showcases the powerful engine and high-tech components, while the upright riding position provides excellent visibility and control. This bike is built for riders who want to dominate the streets with confidence and style. The responsive throttle and sharp handling make every ride an adrenaline rush.",
        specs: {
            "Engine": "749cc Liquid-Cooled Inline-3",
            "Power": "118 HP @ 12,000 RPM",
            "Torque": "87 Nm @ 9,000 RPM",
            "Transmission": "6-Speed Manual",
            "Top Speed": "140 mph (225 km/h)",
            "Weight": "189 kg (417 lbs)",
            "Fuel Capacity": "14 liters (3.7 gallons)",
            "Seat Height": "825 mm (32.5 in)"
        }
    },
    5: {
        name: "Velocity Racer 600",
        price: "$16,499",
        image: "images/bike5.jpg", // Green/blue supersport bike (Kawasaki Ninja style)
        description: "Track-inspired performance meets street-legal practicality in the Velocity Racer 600. This supersport bike delivers razor-sharp handling and explosive acceleration, making it ideal for riders who crave high-performance thrills. The lightweight chassis and advanced aerodynamics help you slice through corners with precision, while the powerful braking system provides confidence-inspiring stopping power. Perfect for both track days and spirited canyon carving.",
        specs: {
            "Engine": "636cc Liquid-Cooled Inline-4",
            "Power": "128 HP @ 13,500 RPM",
            "Torque": "70 Nm @ 11,000 RPM",
            "Transmission": "6-Speed Manual",
            "Top Speed": "165 mph (266 km/h)",
            "Weight": "196 kg (432 lbs)",
            "Fuel Capacity": "17 liters (4.5 gallons)",
            "Seat Height": "820 mm (32.3 in)"
        }
    },
    6: {
        name: "Classic Cafe 900",
        price: "$13,999",
        image: "images/bike6.jpg", // Cafe racer retro style bike (Triumph style)
        description: "The Classic Cafe 900 pays homage to the golden era of motorcycling while incorporating modern technology and reliability. This retro-styled beauty features classic lines, premium finishes, and a timeless appeal that never goes out of style. Beneath its vintage exterior lies a thoroughly modern machine with fuel injection, ABS brakes, and a smooth-revving engine. It's the perfect choice for riders who appreciate craftsmanship and style.",
        specs: {
            "Engine": "900cc Liquid-Cooled Parallel-Twin",
            "Power": "65 HP @ 7,500 RPM",
            "Torque": "80 Nm @ 3,800 RPM",
            "Transmission": "5-Speed Manual",
            "Top Speed": "125 mph (201 km/h)",
            "Weight": "205 kg (452 lbs)",
            "Fuel Capacity": "15 liters (4 gallons)",
            "Seat Height": "790 mm (31.1 in)"
        }
    }
};

// ============================================
// GET BIKE ID FROM URL
// ============================================
function getBikeIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// ============================================
// LOAD BIKE DETAILS
// ============================================
function loadBikeDetails() {
    const bikeId = getBikeIdFromURL();
    
    // Check if bike ID exists
    if (!bikeId || !bikesData[bikeId]) {
        showError();
        return;
    }
    
    const bike = bikesData[bikeId];
    
    // Update page elements
    document.getElementById('bikeName').textContent = bike.name;
    document.getElementById('bikePrice').textContent = bike.price;
    document.getElementById('bikeImage').src = bike.image;
    document.getElementById('bikeImage').alt = bike.name;
    document.getElementById('bikeDescription').textContent = bike.description;
    
    // Update page title
    document.title = `${bike.name} - RideX Motors`;
    
    // Build specifications list
    const specsContainer = document.getElementById('bikeSpecs');
    specsContainer.innerHTML = '';
    
    for (const [key, value] of Object.entries(bike.specs)) {
        const specElement = document.createElement('p');
        specElement.innerHTML = `<strong>${key}:</strong> ${value}`;
        specsContainer.appendChild(specElement);
    }
}

// ============================================
// SHOW ERROR MESSAGE
// ============================================
function showError() {
    // Hide details container
    document.querySelector('.details-container').style.display = 'none';
    document.querySelector('.back-btn').style.display = 'none';
    
    // Show error message
    document.getElementById('errorMessage').style.display = 'block';
}

// ============================================
// INITIALIZE PAGE
// ============================================
document.addEventListener('DOMContentLoaded', loadBikeDetails);

// ============================================
// MOBILE MENU TOGGLE (Same as script.js)
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}