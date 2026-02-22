$(document).ready(function() {
    $("#loadDogs").click(async function () {
  try {
    let response = await $.ajax({
      url: "https://dog.ceo/api/breed/hound/images",
      method: "GET"
    });
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
    } catch (error) {
      alert("Error loading dog images 😢");
    }
  });
});
$("#topBtn").click(function () {
  window.scrollTo(0, 0);
});

