var destinations = [
  {
    name: "Marlboro Hills",
    location: "Basco, Batan Island",
    category: "mountain",
    img: "media/images/homepage/marlborohills.jpg",
    description: "Known officially as Racuh a Payaman, Marlboro Hills is a wide open pastureland on the northern coast of Batan Island. The rolling green hills look almost like a scene from a foreign country. It is best visited at sunrise when the mist is still covering the hills.",
    fee: "No entrance fee",
    bestTime: "March to June",
    tip: "Go early in the morning to catch the sunrise. Bring a jacket because it can get cold and windy."
  },
  {
    name: "Valugan Boulder Beach",
    location: "Basco, Batan Island",
    category: "beach",
    img: "media/images/homepage/boulderbeach.jpg",
    description: "Valugan Boulder Beach is covered with large smooth boulders instead of sand. These boulders were thrown here by Mt. Iraya during ancient volcanic eruptions. The sound of waves crashing on the rocks is very loud and unique.",
    fee: "Free",
    bestTime: "Any time of year",
    tip: "Do NOT swim here. The waves and undertow are very dangerous. Just enjoy the view and take photos."
  },
  {
    name: "Basco Lighthouse",
    location: "Naidi Hills, Basco",
    category: "heritage",
    img: "media/images/homepage/lighthouse.jpg",
    description: "The Basco Lighthouse sits on top of Naidi Hills and offers one of the best panoramic views in all of Batanes. From here you can see the whole town of Basco, the sea, and on a clear day even parts of Taiwan.",
    fee: "Around P20 to P50 per person",
    bestTime: "Late afternoon for sunset",
    tip: "Come around 30 minutes before sunset. The view of the sky turning orange over the hills is amazing."
  },
  {
    name: "Sabtang Island",
    location: "Sabtang Island",
    category: "island",
    img: "media/images/homepage/sabtang.jpg",
    description: "Sabtang Island is the most visited island destination in Batanes. It has three well-preserved stone villages — Chavayan, Savidug, and Nakabuang — where old Ivatan stone houses are still lived in by families today.",
    fee: "P200 environmental fee plus boat fare",
    bestTime: "March to June when the sea is calm",
    tip: "Book your boat trip in advance. Wear the traditional vakul hat for photos — you can rent one on the island."
  },
  {
    name: "Mt. Iraya",
    location: "Basco, Batan Island",
    category: "mountain",
    img: "media/images/homepage/mt-iraya.jpg",
    description: "Mt. Iraya is an active volcano and the highest point in Batanes at 1,009 meters. Climbing it gives you a full view of Batan Island and the sea. The trek takes about 4 to 6 hours depending on your pace.",
    fee: "Guide fee required, around P500 to P800",
    bestTime: "March to May",
    tip: "You must register at the DENR office in Basco and hire a guide before trekking. Bring enough water and food."
  },
  {
    name: "House of Dakay",
    location: "Chavayan, Sabtang Island",
    category: "heritage",
    img: "media/images/homepage/houseofdakay.jpg",
    description: "The House of Dakay is one of the oldest Ivatan stone houses in Batanes, estimated to be over 200 years old. It is still a family home and gives visitors a real look at how Ivatans have lived for centuries.",
    fee: "Small donation appreciated",
    bestTime: "During your Sabtang Island day trip",
    tip: "Always ask permission before taking photos inside the house. Leave a small donation for the family."
  },
  {
    name: "Vayang Rolling Hills",
    location: "Mahatao, Batan Island",
    category: "mountain",
    img: "media/images/homepage/rollinghills.jpg",
    description: "The Vayang Rolling Hills in Mahatao offer a beautiful view of the West Philippine Sea from the top of green coastal cliffs. It is less crowded than Marlboro Hills and is great for a quiet afternoon visit.",
    fee: "Free",
    bestTime: "Late afternoon",
    tip: "Be careful near the edge of the cliffs — winds can be very strong. This spot is great for landscape photography."
  },
  {
    name: "Itbayat Island",
    location: "Itbayat Island",
    category: "island",
    img: "media/images/homepage/itbayat.jpg",
    description: "Itbayat is the largest island in Batanes and the least visited. It has towering sea cliffs, old archaeological sites, and a very traditional way of Ivatan life. Getting there requires a boat or small plane.",
    fee: "No entrance fee, but transport is expensive",
    bestTime: "April to May",
    tip: "Add extra days to your trip because bad weather can delay boats back to Batan Island."
  },
  {
    name: "Ivana Church",
    location: "Ivana, Batan Island",
    category: "heritage",
    img: "media/images/homepage/ivana-church.jpg",
    description: "The Ivana Church is a Spanish-era stone church that is declared a National Cultural Treasure. Near it is the famous Honesty Coffee Shop where there is no cashier — you take what you want and leave your payment in a box.",
    fee: "Church is free; pay what you take at the coffee shop",
    bestTime: "Any time during the day",
    tip: "Please be honest at the coffee shop — pay the correct amount. It is one of the most unique experiences in the Philippines."
  }
];

// FILTERED DESINATIONS FUNCTION
function showDestinations(filter, search) {
  var grid = document.getElementById("dest-grid");
  var noResults = document.getElementById("no-results");
  var searchText = search ? search.toLowerCase() : "";

  var filtered = destinations.filter(function(d) {
    var matchFilter = filter === "all" || d.category === filter;
    var matchSearch = !searchText || d.name.toLowerCase().includes(searchText) || d.location.toLowerCase().includes(searchText);
    return matchFilter && matchSearch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filtered.forEach(function(d) {
    var index = destinations.indexOf(d);
    var col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML =
      '<div class="card h-100">' +
        '<img src="' + d.img + '" class="card-img-top" alt="' + d.name + '">' +
        '<div class="card-body">' +
          '<span class="badge mb-2" style="background-color:var(--pink);">' + d.category + '</span>' +
          '<h5 class="card-title">' + d.name + '</h5>' +
          '<p class="card-text small text-muted">' + d.location + '</p>' +
          '<p class="card-text small">' + d.description.substring(0, 100) + '...</p>' +
        '</div>' +
        '<div class="card-footer bg-white border-0 pb-3">' +
          '<button class="btn btn-batanes btn-sm w-100" onclick="openModal(' + index + ')">View Details</button>' +
        '</div>' +
      '</div>';
    grid.appendChild(col);
  });
}

// DESTINATION DETAILS
function openModal(index) {
  var d = destinations[index];
  document.getElementById("modal-title").textContent = d.name;
  document.getElementById("modal-img").src = d.img;
  document.getElementById("modal-img").alt = d.name;
  document.getElementById("modal-desc").textContent = d.description;
  document.getElementById("modal-location").textContent = d.location;
  document.getElementById("modal-fee").textContent = d.fee;
  document.getElementById("modal-besttime").textContent = d.bestTime;
  document.getElementById("modal-tip").textContent = d.tip;

  var modal = new bootstrap.Modal(document.getElementById("destModal"));
  modal.show();
}

// FILTER
var filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    filterBtns.forEach(function(b) {
      b.classList.remove("active", "btn-batanes");
      b.classList.add("btn-outline-secondary");
    });
    btn.classList.add("active", "btn-batanes");
    btn.classList.remove("btn-outline-secondary");

    var search = document.getElementById("searchInput").value;
    showDestinations(btn.getAttribute("data-filter"), search);
  });
});

// SEARCH
document.getElementById("searchInput").addEventListener("input", function() {
  var activeFilter = document.querySelector(".filter-btn.active");
  var filter = activeFilter ? activeFilter.getAttribute("data-filter") : "all";
  showDestinations(filter, this.value);
});

// LOAD DESTINATIONS
showDestinations("all", "");
