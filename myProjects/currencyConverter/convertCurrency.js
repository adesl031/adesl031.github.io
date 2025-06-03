function convertCurrency() {
  let foreignCurrency = document.getElementById("foreignCurrency").value;
  let foreignAmount = parseFloat(
    document.getElementById("foreignAmount").value
  );
  let cadAmount = parseFloat(
    document.getElementById("cadAmount").value
  );
  let conversionType = document.getElementById("conversionType").value;
  let date = document.getElementById("date").value;
  let exchangeRate;

  let apiUrl = `https://www.bankofcanada.ca/valet/observations/FX${foreignCurrency}CAD/json?start_date=${date}&end_date=${date}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      exchangeRate = parseFloat(data.observations[0].FXUSDCAD.v);
      console.log("Exchange Rate:", exchangeRate);
      if (conversionType === "toCAD") {
        document.getElementById("cadAmount").value =
          Math.round(foreignAmount / exchangeRate*100) / 100;
      } else if (conversionType === "fromCAD") {
        document.getElementById("foreignAmount").value =
          Math.round(cadAmount * exchangeRate*100) / 100;
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return null;
    });
}
