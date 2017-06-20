$(function() {

	//graphic
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
	
	$('.info-tip').tipsy({fallback: "Информационный пост" });

	//Google chart

	// // Load Charts and the corechart and barchart packages.
	// google.charts.load('current', {'packages':['corechart']});

	// // Draw the pie chart and bar chart when Charts is loaded.
	// google.charts.setOnLoadCallback(drawChart);

	// function drawChart() {

		// 	var data = new google.visualization.DataTable();
		// 	data.addColumn('string', 'Topping');
		// 	data.addColumn('number', 'Slices');
		// 	data.addRows([
		// 		['Mushrooms', 3],
		// 		['Onions', 1],
		// 		['Olives', 1],
		// 		['Zucchini', 1],
		// 		['Pepperoni', 2]
		// 		]);

		// 	var piechart_options = {title:'',
		// 	width:80,
		// 	height:80,
		// 	legend: 'none'};
		// 	var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
		// 	piechart.draw(data, piechart_options);

		// 	var barchart_options = {title:'Barchart: How Much Pizza I Ate Last Night',
		// 	width:400,
		// 	height:300,
		// 	legend: 'none'};
		// 	var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
		// 	barchart.draw(data, barchart_options);
		// }

		//HIGHCHARTS
		//////////first pie
		Highcharts.chart('pie1', {
			chart: {
				plotBackgroundColor: '#262626',
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				width: 70,
				height: 70,
				borderWidth: 0,
				plotBorderWidth: 0,
				border: false

			},
			title: {
				text: ''
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					},
					borderColor: null
				}
			},
			series: [{
				name: '',
				colorByPoint: true,
				data: [{
					// name: 'Microsoft Internet Explorer',
					y: 56.33,
					color: '#aa1985'
				}, {
					// name: 'Chrome',
					y: 24.03,
					color: '#2986c7'
				}]
			}]
		});

		///////////Second Pie

		Highcharts.chart('pie2', {
			chart: {
				plotBackgroundColor: '#262626',
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				width: 70,
				height: 70,
				borderWidth: 0,
				plotBorderWidth: 0,
				border: false

			},
			title: {
				text: ''
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					},
					borderColor: null
				}
			},
			series: [{
				name: '',
				colorByPoint: true,
				data: [{
					// name: 'Microsoft Internet Explorer',
					y: 36.33,
					color: '#aa1985'
				}, {
					// name: 'Chrome',
					y: 63.03,
					color: '#2986c7'
				}]
			}]
		});

		///////////////////////Column with drilldown
		// Create the chart
		Highcharts.chart('barChart', {
			chart: {
				type: 'column',
				width: 100,
				height: 70,
			},
			title: {
				text: null
			},
			// subtitle: {
				// 	text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
				// },
				xAxis: {
					type: ''
				},
				yAxis: {
					title: {
						text: ''
					}

				},
				legend: {
					enabled: false
				},
				plotOptions: {
					series: {
						borderWidth: 0,
						// dataLabels: {
							// 	enabled: true,
							// 	format: '{point.y:.1f}%'
							// }
						}
					},

					tooltip: {
						headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
						pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
					},

					series: [{
						name: 'Brands',
						colorByPoint: true,
						data: [{
							name: 'Microsoft Internet Explorer',
							y: 46.33,
							drilldown: 'Microsoft Internet Explorer'
						}, {
							name: 'Chrome',
							y: 34.03,
							drilldown: 'Chrome',
							color: '#aa1985'
						}, {
							name: 'Firefox',
							y: 20.38,
							drilldown: 'Firefox'
						}, {
							name: 'Safari',
							y: 14.77,
							drilldown: 'Safari'
						}, {
							name: 'Opera',
							y: 10.91,
							drilldown: 'Opera'
						}]
					}],
					drilldown: {
						series: [{
							name: 'Microsoft Internet Explorer',
							id: 'Microsoft Internet Explorer',
							data: [
							[
							'v11.0',
							24.13
							],
							[
							'v8.0',
							17.2
							],
							[
							'v9.0',
							8.11
							],
							[
							'v10.0',
							5.33
							],
							[
							'v6.0',
							1.06
							],
							[
							'v7.0',
							0.5
							]
							]
						}, {
							name: 'Chrome',
							id: 'Chrome',
							data: [
							[
							'v40.0',
							5
							],
							[
							'v41.0',
							4.32
							],
							[
							'v42.0',
							3.68
							],
							[
							'v39.0',
							2.96
							],
							[
							'v36.0',
							2.53
							],
							[
							'v43.0',
							1.45
							],
							[
							'v31.0',
							1.24
							],
							[
							'v35.0',
							0.85
							],
							[
							'v38.0',
							0.6
							],
							[
							'v32.0',
							0.55
							],
							[
							'v37.0',
							0.38
							],
							[
							'v33.0',
							0.19
							],
							[
							'v34.0',
							0.14
							],
							[
							'v30.0',
							0.14
							]
							]
						}, {
							name: 'Firefox',
							id: 'Firefox',
							data: [
							[
							'v35',
							2.76
							],
							[
							'v36',
							2.32
							],
							[
							'v37',
							2.31
							],
							[
							'v34',
							1.27
							],
							[
							'v38',
							1.02
							],
							[
							'v31',
							0.33
							],
							[
							'v33',
							0.22
							],
							[
							'v32',
							0.15
							]
							]
						}, {
							name: 'Safari',
							id: 'Safari',
							data: [
							[
							'v8.0',
							2.56
							],
							[
							'v7.1',
							0.77
							],
							[
							'v5.1',
							0.42
							],
							[
							'v5.0',
							0.3
							],
							[
							'v6.1',
							0.29
							],
							[
							'v7.0',
							0.26
							],
							[
							'v6.2',
							0.17
							]
							]
						}, {
							name: 'Opera',
							id: 'Opera',
							data: [
							[
							'v12.x',
							0.34
							],
							[
							'v28',
							0.24
							],
							[
							'v27',
							0.17
							],
							[
							'v29',
							0.16
							]
							]
						}]
					}
				});

		//end

	});
