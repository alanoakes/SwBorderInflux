var trace1 = {
	x: ["Big Bend", "Del Rio", "El Centro", "El Paso", "Laredo", "Rio Grande", "San Diego", "Tucson", "Yuma"],
	y: [845,3431,1047,8636,2045,20964,1888,7079,1707],
	name: 'Unaccompanied Children',
	type: 'bar'

};

var trace2 = {
	x: ["Big Bend", "Del Rio", "El Centro", "El Paso", "Laredo", "Rio Grande", "San Diego", "Tucson", "Yuma"],
	y: [453,11148,939,9477,1507,52139,3834,4628,8183],
	name: 'Family Unit',
	type: 'bar'

};

var trace3 = {
	x: ["Big Bend", "Del Rio", "El Centro", "El Paso", "Laredo", "Rio Grande", "San Diego", "Tucson", "Yuma"],
	y: [14091,53991,21759,53695,50109,86367,50358,68436,11654],
	name: 'Single Adult',
	type: 'bar'

};

var data = [trace1, trace2, trace3];

var layout = {
	barmode: 'stack',
	title: 'YTD Encounter Types Traced to Southwest Border Sectors'  

};

var config = {responsive: true};

Plotly.newPlot('divStackedBar', data, layout, config);

