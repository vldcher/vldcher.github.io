$(function() {

	const chart = c3.generate({
		data: {
				columns: [
						['data1', 300, 350, 300, 0, 0, 0],
						['data2', 130, 100, 140, 200, 150, 50]
				],
				types: {
						data1: 'area',
						data2: 'area-spline'
				},
				colors: {
						data1: '#2c97de',
						data2: '#cb3e4b'
					 
				},
				color: function (color, d) {
						// d will be 'id' when called for legends
						return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
				}

		},
		zoom: {
				enabled: true
		}
});
	//Tips
	
	// $('a[rel=tipsy]').tipsy({fade: true, gravity: 'n'});

	//Pie chart

// 	const chart = c3.generate({
//     data: {
//         // iris data from R
//         columns: [
//             ['data1', 30],
//             ['data2', 120],
//         ],
//         type : 'pie',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     }
// });

});
