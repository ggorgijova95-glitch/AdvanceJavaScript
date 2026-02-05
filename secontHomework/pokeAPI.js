$(document).ready(function () {
$("#loadData").click(function () {

  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon",
    method: "GET",
    success: function (response) {
      let pokemons = response.results;

      $("#list").empty(); // clear list before adding

      for (let i = 0; i < 10; i++) {
        $("#list").append(
          `<li>${pokemons[i].name}</li>`
        );
        console.log(pokemons[i].name);
      }
    },
    error: function () {
      alert("Something went wrong!");
    }
  });

});


$("#loadCities").click(function () {
  $.ajax({
  url: "https://api.openaq.org/v1/cities",
  method: "GET",
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  success: function (response) {
    let cities = response.results;

    $("#cityList").empty(); // clear list before adding
    for (let i = 0; i < 10; i++) {
      $("#cityList").append(
        `<li>${cities[i].city}</li>`
      );
    }
  },
  error: function () {
    $("#cityMessage").text("Something went wrong while fetching cities!");
    alert("Something went wrong while fetching cities!");
  }
});
});
});

