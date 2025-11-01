// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 1000);
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const planId = urlParams.get("id");

// 🔹 All Plans Data
const plans = {
  // ---------------------- ZURICH ----------------------
  z1: { 
    title: "Zurich Car Comprehensive", 
    desc: "Full coverage for cars – accident, theft & liability.", 
    price: "PKR 20,000", 
    company: "Zurich Insurance", 
    vehicle: "Car",
    features: ["Accident Coverage", "Theft Protection", "Third-Party Liability", "24/7 Roadside Assistance"]
  },

  z2: { 
    title: "Zurich Car Premium Plus", 
    desc: "Includes roadside assistance & zero depreciation.", 
    price: "PKR 25,000", 
    company: "Zurich Insurance", 
    vehicle: "Car",
    features: ["Zero Depreciation", "Roadside Assistance", "Accident Coverage", "Theft Protection"]
  },

  z3: { 
    title: "Zurich Car Elite Coverage", 
    desc: "Comprehensive plan with personal accident benefits and extended warranty.", 
    price: "PKR 30,000", 
    company: "Zurich Insurance", 
    vehicle: "Car",
    features: ["Personal Accident Benefits", "Extended Warranty", "Zero Depreciation", "24/7 Support"]
  },

  z4: { 
    title: "Zurich Two Wheeler Plan", 
    desc: "Affordable bike insurance with accident coverage.", 
    price: "PKR 6,000", 
    company: "Zurich Insurance", 
    vehicle: "Bike",
    features: ["Accident Coverage", "Theft Protection", "Third-Party Liability", "Affordable Premium"]
  },

  z5: { 
    title: "Zurich Bike Advanced", 
    desc: "Covers theft, accidents, and fire damages.", 
    price: "PKR 8,000", 
    company: "Zurich Insurance", 
    vehicle: "Bike",
    features: ["Theft Coverage", "Fire Protection", "Accident Coverage", "Quick Claims"]
  },
  
  z6: { 
    title: "Zurich Bike Premium", 
    desc: "Full protection plan with accidental coverage and third-party liability.", 
    price: "PKR 10,000", 
    company: "Zurich Insurance", 
    vehicle: "Bike",
    features: ["Full Protection", "Third-Party Liability", "Accident Coverage", "Theft Protection"]
  },
  
  z7: { 
    title: "Zurich Commercial Vehicle", 
    desc: "Insurance for vans, trucks & pickups.", 
    price: "PKR 35,000", 
    company: "Zurich Insurance", 
    vehicle: "Commercial",
    features: ["Van Coverage", "Truck Protection", "Cargo Insurance", "Business Support"]
  },
  
  z8: { 
    title: "Zurich Business Fleet", 
    desc: "Ideal for commercial fleets & delivery vehicles.", 
    price: "PKR 40,000", 
    company: "Zurich Insurance", 
    vehicle: "Commercial",
    features: ["Fleet Coverage", "Delivery Vehicles", "Business Support", "Quick Claims"]
  },
  
  z9: { 
    title: "Zurich Commercial Elite", 
    desc: "Comprehensive coverage for logistics, transport, and heavy-duty vehicles.", 
    price: "PKR 45,000", 
    company: "Zurich Insurance", 
    vehicle: "Commercial",
    features: ["Logistics Coverage", "Heavy-Duty Vehicles", "Cargo Insurance", "24/7 Support"]
  },
  

  // ---------------------- JUBILEE ----------------------
  j1: { 
    title: "Jubilee Car Protection", 
    desc: "Car accident + theft protection with add-ons.", 
    price: "PKR 22,000", 
    company: "Jubilee Insurance", 
    vehicle: "Car",
    features: ["Accident Coverage", "Theft Protection", "Add-On Coverage", "Quick Claims"]
  },
  
  j2: { 
    title: "Jubilee Car Elite", 
    desc: "Enhanced protection with windscreen cover.", 
    price: "PKR 27,000", 
    company: "Jubilee Insurance", 
    vehicle: "Car",
    features: ["Windscreen Cover", "Enhanced Protection", "Accident Coverage", "Theft Protection"]
  },
  
  j3: { 
    title: "Jubilee Car Premium", 
    desc: "Covers natural disasters, theft, and third-party liability.", 
    price: "PKR 35,000", 
    company: "Jubilee Insurance", 
    vehicle: "Car",
    features: ["Natural Disasters", "Theft Protection", "Third-Party Liability", "Premium Coverage"]
  },
  
  j4: { 
    title: "Jubilee Bike Saver", 
    desc: "Low premium two-wheeler plan.", 
    price: "PKR 5,500", 
    company: "Jubilee Insurance", 
    vehicle: "Bike",
    features: ["Low Premium", "Two-Wheeler Plan", "Accident Coverage", "Theft Protection"]
  },
  
  j5: { 
    title: "Jubilee Bike Ultimate", 
    desc: "Comprehensive protection for two-wheelers.", 
    price: "PKR 7,000", 
    company: "Jubilee Insurance", 
    vehicle: "Bike",
    features: ["Comprehensive Protection", "Two-Wheeler Protection", "Accident Coverage", "Theft Protection"]
  },
  
  j6: { 
    title: "Jubilee Bike Shield", 
    desc: "Covers personal accident, theft, and third-party liability.", 
    price: "PKR 10,000", 
    company: "Jubilee Insurance", 
    vehicle: "Bike",
    features: ["Personal Accident", "Theft Protection", "Third-Party Liability", "Shield Coverage"]
  },
  
  j7: { 
    title: "Jubilee Commercial Plus", 
    desc: "Covers cargo vans, trucks & buses.", 
    price: "PKR 28,000", 
    company: "Jubilee Insurance", 
    vehicle: "Commercial",
    features: ["Cargo Vans", "Trucks & Buses", "Business Support", "Quick Claims"]
  },
  
  j8: { 
    title: "Jubilee Transport Guard", 
    desc: "Fleet protection with emergency services.", 
    price: "PKR 33,000", 
    company: "Jubilee Insurance", 
    vehicle: "Commercial",
    features: ["Fleet Protection", "Emergency Services", "Business Support", "Quick Claims"]
  },
  
  j9: { 
    title: "Jubilee Cargo Secure", 
    desc: "Comprehensive cover for cargo trucks, delivery vans, and business vehicles.", 
    price: "PKR 38,000", 
    company: "Jubilee Insurance", 
    vehicle: "Commercial",
    features: ["Cargo Trucks", "Delivery Vans", "Business Vehicles", "Secure Coverage"]
  },
  

  // ---------------------- AXA ----------------------
  a1: { 
    title: "Axa Car Secure", 
    desc: "Car insurance with accident & liability coverage.", 
    price: "PKR 18,500", 
    company: "Axa Insurance", 
    vehicle: "Car",
    features: ["Accident Coverage", "Liability Coverage", "Affordable Premium", "Quick Claims"]
  },
  
  a2: { 
    title: "Axa Car Max", 
    desc: "Full car protection with replacement car option.", 
    price: "PKR 23,000", 
    company: "Axa Insurance", 
    vehicle: "Car",
    features: ["Full Protection", "Replacement Car", "Accident Coverage", "Liability Coverage"]
  },
  
  a3: { 
    title: "Axa Car Elite", 
    desc: "Premium coverage including personal accident and windshield protection.", 
    price: "PKR 27,000", 
    company: "Axa Insurance", 
    vehicle: "Car",
    features: ["Personal Accident", "Windshield Protection", "Premium Coverage", "Quick Claims"]
  },
  
  a4: { 
    title: "Axa Bike Secure", 
    desc: "Accident & theft coverage for bikes.", 
    price: "PKR 4,500", 
    company: "Axa Insurance", 
    vehicle: "Bike",
    features: ["Accident Coverage", "Theft Coverage", "Affordable Premium", "Quick Claims"]
  },
  
  a5: { 
    title: "Axa Bike Shield", 
    desc: "Coverage for theft, accident & damage.", 
    price: "PKR 6,000", 
    company: "Axa Insurance", 
    vehicle: "Bike",
    features: ["Theft Coverage", "Accident Coverage", "Damage Protection", "Quick Claims"]
  },
  
  a6: { 
    title: "Axa Bike Pro", 
    desc: "Comprehensive plan covering rider, pillion, and bike accessories.", 
    price: "PKR 7,500", 
    company: "Axa Insurance", 
    vehicle: "Bike",
    features: ["Rider Coverage", "Pillion Coverage", "Accessories Protection", "Comprehensive Plan"]
  },
  
  a7: { 
    title: "Axa Commercial Protect", 
    desc: "Designed for trucks, pickups & taxis.", 
    price: "PKR 32,000", 
    company: "Axa Insurance", 
    vehicle: "Commercial",
    features: ["Trucks Coverage", "Pickups & Taxis", "Business Support", "Quick Claims"]
  },
  
  a8: { 
    title: "Axa Fleet Cover", 
    desc: "Ideal for company vehicles & heavy transport.", 
    price: "PKR 38,000", 
    company: "Axa Insurance", 
    vehicle: "Commercial",
    features: ["Company Vehicles", "Heavy Transport", "Business Support", "Quick Claims"]
  },
  
  a9: { 
    title: "Axa Commercial Elite", 
    desc: "Premium protection for logistics, cargo, and business fleets.", 
    price: "PKR 42,000", 
    company: "Axa Insurance", 
    vehicle: "Commercial",
    features: ["Logistics Coverage", "Cargo Protection", "Business Fleets", "Premium Protection"]
  },
  
};

// 🔹 Inject data into DOM
const container = document.getElementById("plan-details");
const relatedPlansContainer = document.getElementById("related-plans");
const plan = plans[planId];

if (plan) {
  // Create features list HTML
  const featuresList = plan.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('');
  
  container.innerHTML = `
    <div class="col-md-10 mx-auto" data-aos="fade-up">
      <div class="plan-card">
        <div class="plan-header" data-aos="zoom-in" data-aos-delay="100">
          <h2>${plan.title}</h2>
          <div class="company-badge">${plan.company}</div>
          <div class="vehicle-badge">${plan.vehicle}</div>
        </div>
        <div class="plan-body">
          <p class="lead">${plan.desc}</p>
          
          <ul class="plan-details-list">
            ${featuresList}
          </ul>
          
          <div class="plan-price" data-aos="fade-up" data-aos-delay="200">
            <h3>${plan.price}</h3>
            <p>Starting price per year</p>
          </div>
          
          <div class="plan-actions" data-aos="fade-up" data-aos-delay="300">
            <a href="plans.html" class="btn-back">
              <i class="fas fa-arrow-left me-2"></i> Back to Plans
            </a>
            <a href="contact.html?plan=${planId}" class="btn-buy">
              <i class="fas fa-shopping-cart me-2"></i> Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Generate related plans
  generateRelatedPlans(plan.company, plan.vehicle, planId);
} else {
  container.innerHTML = `
    <div class="col-md-8 mx-auto" data-aos="fade-up">
      <div class="alert alert-danger text-center">
        <i class="fas fa-exclamation-triangle me-2"></i> Plan not found!
      </div>
      <div class="text-center mt-3">
        <a href="plans.html" class="btn btn-primary">
          <i class="fas fa-arrow-left me-2"></i> Back to Plans
        </a>
      </div>
    </div>
  `;
}

// Function to generate related plans
function generateRelatedPlans(currentCompany, currentVehicle, currentPlanId) {
  const relatedPlans = [];
  
  // Get plans with same company but different ID
  Object.keys(plans).forEach(id => {
    if (id !== currentPlanId && plans[id].company === currentCompany) {
      relatedPlans.push({...plans[id], id});
    }
  });
  
  // If less than 3 plans with same company, add plans with same vehicle type
  if (relatedPlans.length < 3) {
    Object.keys(plans).forEach(id => {
      if (id !== currentPlanId && plans[id].vehicle === currentVehicle && !relatedPlans.find(p => p.id === id)) {
        relatedPlans.push({...plans[id], id});
      }
    });
  }
  
  // If still less than 3, add any other plans
  if (relatedPlans.length < 3) {
    Object.keys(plans).forEach(id => {
      if (id !== currentPlanId && !relatedPlans.find(p => p.id === id)) {
        relatedPlans.push({...plans[id], id});
      }
    });
  }
  
  // Limit to 3 plans
  const limitedPlans = relatedPlans.slice(0, 3);
  
  // Generate HTML for related plans
  const relatedPlansHTML = limitedPlans.map((plan, index) => `
    <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
      <div class="related-plan-card">
        <div class="card-body">
          <h5 class="card-title">${plan.title}</h5>
          <p class="card-text">${plan.desc}</p>
          <div class="price-tag">${plan.price}</div>
          <a href="plan-details.html?id=${plan.id}" class="btn btn-outline-primary btn-sm mt-2">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
  
  relatedPlansContainer.innerHTML = relatedPlansHTML;
}
console.log('Script loaded successfully!');