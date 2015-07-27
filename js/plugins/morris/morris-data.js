// Morris.js Charts sample data for SB Admin template

$(function () {

    //Bar Chart
    Morris.Bar({
        element: 'morris-bar-workitemtype',
        data: [
          { y: 'Connect', a: 704, b: 1004, c: 2710, d: 1262 },
          { y: 'Connect-AL', a: 520, b: 2925, c: 1876, d: 1157 },
          { y: 'IDI', a: 758, b: 1136, c: 1277, d: 1338 },
          { y: 'Connect-AS', a: 871, b: 504, c: 578, d: 984 },
          { y: 'AccSer', a: 483, b: 736, c: 1, d: 1282 },
          { y: 'Renew', a: 288, b: 642, c: 61, d: 977 },
          { y: 'EOI', a: 154, b: 607, c: 313, d: 599 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd'],
        labels: ['Epic', 'Feature', 'PBI', 'Task'],
        barColors: ['#A300CC', '#337D33', '#0066CC', '#996633'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Bar Chart
    //Morris.Bar({
    //    element: 'morris-bar-workitemstate',
    //    data: [
    //      { y: 'Connect', a: 704, b: 1004, c: 2710, d: 1262 },
    //      { y: 'Connect-AL', a: 520, b: 2925, c: 1876, d: 1157 },
    //      { y: 'IDI', a: 758, b: 1136, c: 1277, d: 1338 },
    //      { y: 'Connect-AS', a: 871, b: 504, c: 578, d: 984 },
    //      { y: 'AccSer', a: 483, b: 736, c: 1, d: 1282 },
    //      { y: 'Renew', a: 288, b: 642, c: 61, d: 977 },
    //      { y: 'EOI', a: 154, b: 607, c: 313, d: 599 }
    //    ],
    //    xkey: 'y',
    //    ykeys: ['a', 'b', 'c', 'd'],
    //    labels: ['New', 'InProg', 'Design', 'Finished'],
    //    barColors: ['#357bb5', '#edab4e', '#d6564f', '#5cb85c'],
    //    pointSize: 2,
    //    hideHover: 'auto',
    //    resize: true
    //});



    // Donut Chart 1
    Morris.Donut({
        element: 'morris-donut-chart1',
        data: [{
            label: "New",
            value: 40
        }, {
            label: "In Progress",
            value: 22
        }, {
            label: "Design",
            value: 28
        }, {
            label: "Done",
            value: 35
        }],
        resize: true,
        colors: ['#A300CC', '#337D33', '#0066CC', '#996633']
    });

    // Donut Chart 2
    Morris.Donut({
        element: 'morris-donut-chart2',
        data: [{
            label: "New",
            value: 12
        }, {
            label: "In Progress",
            value: 30
        }, {
            label: "Design",
            value: 20
        }, {
            label: "Done",
            value: 12
        }],
        resize: true,
        colors: ['#A300CC', '#337D33', '#0066CC', '#996633']
    });

    // Donut Chart 3
    Morris.Donut({
        element: 'morris-donut-chart3',
        data: [{
            label: "New",
            value: 9
        }, {
            label: "In Progress",
            value: 40
        }, {
            label: "Design",
            value: 21
        }, {
            label: "Done",
            value: 50
        }],
        resize: true,
        colors: ['#A300CC', '#337D33', '#0066CC', '#996633']
    });
    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 802
        }, {
            d: '2012-10-02',
            visits: 783
        }, {
            d: '2012-10-03',
            visits: 820
        }, {
            d: '2012-10-04',
            visits: 839
        }, {
            d: '2012-10-05',
            visits: 792
        }, {
            d: '2012-10-06',
            visits: 859
        }, {
            d: '2012-10-07',
            visits: 790
        }, {
            d: '2012-10-08',
            visits: 1680
        }, {
            d: '2012-10-09',
            visits: 1592
        }, {
            d: '2012-10-10',
            visits: 1420
        }, {
            d: '2012-10-11',
            visits: 882
        }, {
            d: '2012-10-12',
            visits: 889
        }, {
            d: '2012-10-13',
            visits: 819
        }, {
            d: '2012-10-14',
            visits: 849
        }, {
            d: '2012-10-15',
            visits: 870
        }, {
            d: '2012-10-16',
            visits: 1063
        }, {
            d: '2012-10-17',
            visits: 1192
        }, {
            d: '2012-10-18',
            visits: 1224
        }, {
            d: '2012-10-19',
            visits: 1329
        }, {
            d: '2012-10-20',
            visits: 1329
        }, {
            d: '2012-10-21',
            visits: 1239
        }, {
            d: '2012-10-22',
            visits: 1190
        }, {
            d: '2012-10-23',
            visits: 1312
        }, {
            d: '2012-10-24',
            visits: 1293
        }, {
            d: '2012-10-25',
            visits: 1283
        }, {
            d: '2012-10-26',
            visits: 1248
        }, {
            d: '2012-10-27',
            visits: 1323
        }, {
            d: '2012-10-28',
            visits: 1390
        }, {
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });


});