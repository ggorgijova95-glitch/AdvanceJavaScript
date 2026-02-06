$(document).ready(function() {
    $("#loadDogs").click(function () {
  $.ajax({
    url: "https://dog.ceo/api/breed/hound/images",
    method: "GET",
    success: function (response) {
      $("#dogContainer").empty();

      response.message.forEach(function (imageUrl, index) {
        let card = $(`
          <div class="dog-card">
            <img src="${imageUrl}">
            <p>Hound #${index + 1}</p>
          </div>
        `);

        $("#dogContainer").append(card);
      });
    },
    error: function () {
      alert("Error loading dog images 😢");
    }
  });
});
$("#topBtn").click(function () {
  window.scrollTo(0, 0);
});

});