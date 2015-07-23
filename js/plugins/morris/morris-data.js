// Morris.js Charts sample data for SB Admin template

$(function () {

    //Morris.Bar({
    //    element: 'morris-bar-workitems',
    //    data: [
    //        { y: 'Person A', a: 10 },
    //        { y: 'Person B', a: 15 },
    //        { y: 'Person C', a: 12 },
    //        { y: 'Person D', a: 20 }],
    //    xkey: 'y',
    //    ykeys: ['a'],
    //    labels: ['Calls'],
    //    hideHover: 'always',
    //    barColors: function (row, series, type) {
    //        console.log("--> " + row.label, series, type);
    //        if (row.label == "Person A") return "#AD1D28";
    //        else if (row.label == "Person B") return "#DEBB27";
    //        else if (row.label == "Person C") return "#fec04c";
    //        else if (row.label == "Person D") return "#1AB244";
    //    }
    //});


    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-workitems',
        data: [
          { y: 'UC', a: 7991, b: 2222, c: 3333, d: 1654 },
          { y: 'UC-AL', a: 7672, b: 3333, c: 1234, d: 4444 },
          { y: 'IDI', a: 6676, b: 2222, c: 4232, d: 7855 },
          { y: 'UC-AS', a: 4716, b: 3333, c: 1765, d: 1577 },
          { y: 'AccSer', a: 4095, b: 2222, c: 3900, d: 6658 },
          { y: 'Renew', a: 3320, b: 1876, c: 3333, d: 1244 },
          { y: 'EOI', a: 2832, b: 4521, c: 6000, d: 3325 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd'],
        labels: ['New', 'InProg', 'Bugs', 'Finished'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
        //barColors: function (row, series, type) {
        //    console.log("--> " + row.labels, series, type);
        //    if (row.labels == "New") return "#AD1D28";
        //    else if (row.labels == "InProg") return "#DEBB27";
        //    else if (row.labels == "Bugs") return "#fec04c";
        //    else if (row.labels == "Finished") return "#1AB244";
        //}
    });

    //// Area Chart
    //Morris.Area({
    //    element: 'morris-area-chart',
    //    data: [{
    //        period: '2010 Q1',
    //        iphone: 2666,
    //        ipad: null,
    //        itouch: 2647
    //    }, {
    //        period: '2010 Q2',
    //        iphone: 2778,
    //        ipad: 2294,
    //        itouch: 2441
    //    }, {
    //        period: '2010 Q3',
    //        iphone: 4912,
    //        ipad: 1969,
    //        itouch: 2501
    //    }, {
    //        period: '2010 Q4',
    //        iphone: 3767,
    //        ipad: 3597,
    //        itouch: 5689
    //    }, {
    //        period: '2011 Q1',
    //        iphone: 6810,
    //        ipad: 1914,
    //        itouch: 2293
    //    }, {
    //        period: '2011 Q2',
    //        iphone: 5670,
    //        ipad: 4293,
    //        itouch: 1881
    //    }, {
    //        period: '2011 Q3',
    //        iphone: 4820,
    //        ipad: 3795,
    //        itouch: 1588
    //    }, {
    //        period: '2011 Q4',
    //        iphone: 15073,
    //        ipad: 5967,
    //        itouch: 5175
    //    }, {
    //        period: '2012 Q1',
    //        iphone: 10687,
    //        ipad: 4460,
    //        itouch: 2028
    //    }, {
    //        period: '2012 Q2',
    //        iphone: 8432,
    //        ipad: 5713,
    //        itouch: 1791
    //    }],
    //    xkey: 'period',
    //    ykeys: ['iphone', 'ipad', 'itouch'],
    //    labels: ['iPhone', 'iPad', 'iPod Touch'],
    //    pointSize: 2,
    //    hideHover: 'auto',
    //    resize: true
    //});

    // Donut Chart 1
    Morris.Donut({
        element: 'morris-donut-chart1',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 22
        }, {
            label: "Mail-Order Sales",
            value: 28
        }],
        resize: true
    });

    // Donut Chart 2
    Morris.Donut({
        element: 'morris-donut-chart2',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    // Donut Chart 3
    Morris.Donut({
        element: 'morris-donut-chart3',
        data: [{
            label: "Download Sales",
            value: 9
        }, {
            label: "In-Store Sales",
            value: 40
        }, {
            label: "Mail-Order Sales",
            value: 21
        }],
        resize: true
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