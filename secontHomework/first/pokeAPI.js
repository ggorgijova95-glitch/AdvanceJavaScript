$(document).ready(function () {
  $("#loadData").click(async function () {
    try {
      let response = await $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET"
      });
      let pokemons = response.results;

      $("#list").empty();
      for (let i = 0; i < 10 && i < pokemons.length; i++) {
        $("#list").append(`<li>${pokemons[i].name}</li>`);
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  });

  $("#loadCities").click(async function () {
    try {
      let response = await $.ajax({
        url: "https://api.openaq.org/v1/cities",
        method: "GET"
      });
      let cities = response.results || [];


        $("#cityList").empty();
        for (let i = 0; i < 10 && i < cities.length; i++) {
          $("#cityList").append(`<li>${cities[i].city}</li>`);
        }
    } catch (error) {
        $("#cityMessage").text("Something went wrong while fetching cities!");
        
      }
    });
  });

