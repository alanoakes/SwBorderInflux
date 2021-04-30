var data = {
	type: "sankey",
	orientation: "h",
	node: {
		pad: 15,
		thickness: 30,
		line: {
			color: "black",
			width: 0.5
		},
		label: ["Unaccompied Children", "Family Unit", "Single Adult", "Big Bend", "Del Rio", "El Centro", "El Paso", "Laredo", "Rio Grande", "San Diego", "Tucson", "Yuma"],
		color: ["blue","orange","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],
	},

	link: {
		source: [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2],
		target: [3,4,5,6,7,8,9,10,11,3,4,5,6,7,8,9,10,11,3,4,5,6,7,8,9,10,11],
		value: [845,3431,1047,8636,2045,20964,1888,7079,1707,453,11148,939,9477,1507,52139,3834,4628,8183,14091,53991,21759,53695,50109,86367,50358,68436,11654]
	}
};

var data = [data];

var layout = {
	title: "YTD Encounter Type Totals Per Southwest Border Sector",
	font: {
		size: 10
	}
}

var config = {responsive: true}

Plotly.react('divSankey', data, layout, config);

