$.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    method: 'GET',
    success: function(response, status) {
        console.log(response);
        console.log(status);
        renderData(response);
    },
    error: function(response, status) {
        console.log(status);
    }
});

function renderData(response) {
    const container = $('.container');
    for (var i=0; i < response.length; i++) {
        let countryRow = $(document.createElement('div'));
		countryRow.addClass('.country');
		countryRow.append(response[i].name);
		let countryLink = $(document.createElement('a'));
		countryLink.attr('href', 'country.html?code=' +  response[i].alpha3Code);
		countryLink.text('Читать дальше');
		countryRow.append(countryLink);
		container.append(countryRow);
    }
}

