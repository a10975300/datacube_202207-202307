$(document).ready(function () {

/////////////Stay at the same page after Refresh ///////////
	$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('href'));
	});
	var activeTab = localStorage.getItem('activeTab');
	if(activeTab){
		$('#myTab a[href="' + activeTab + '"]').tab('show');
	}

  /////////////table///////////

    $('#product-table1').DataTable({
    deferRender: true,
    order: [[1, 'asc']],
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'Product'
            },
            'pageLength'
        ]
    });
    producttable1_init();


var NPItable1 =  $('#NPI-table1').DataTable({
    deferRender: true,
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'NPI Design issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-3',
            initCollapsed: true,
            cascadePanes: true,
            dtOpts:{
                select:{
                style: 'multi'
                }
            },
        },
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable1, {});
    NPItable1.searchPanes.container().prependTo("#NPI-filter-panel1");
    NPItable1.searchPanes.resizePanes();
    NPItable1_init();


var NPItable3 =  $('#NPI-table3').DataTable({
    deferRender: true,
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'Overall issue impact factory / factory+field'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-4',
            initCollapsed: true,
            cascadePanes: true,
            dtOpts:{
                select:{
                style: 'multi'
                }
            },
        },
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,3]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [4]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable3, {});
    NPItable3.searchPanes.container().prependTo("#NPI-filter-panel3");
    NPItable3.searchPanes.resizePanes();
    NPItable3_init();


var NPItable4 =  $('#NPI-table4').DataTable({
    deferRender: true,
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'Factory Issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-5',
            initCollapsed: true,
            cascadePanes: true,
            dtOpts:{
                select:{
                style: 'multi'
                }
            },
        },
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,3,4]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [5]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable4, {});
    NPItable4.searchPanes.container().prependTo("#NPI-filter-panel4");
    NPItable4.searchPanes.resizePanes();
    NPItable4_init();

var NPItable5 =  $('#NPI-table5').DataTable({
    deferRender: true,
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'Factory Issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-3',
            initCollapsed: true,
            cascadePanes: true,
            dtOpts:{
                select:{
                style: 'multi'
                }
            },
        },
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable5, {});
    NPItable5.searchPanes.container().prependTo("#NPI-filter-panel5");
    NPItable5.searchPanes.resizePanes();
    NPItable5_init();


var NPItable6 =  $('#NPI-table6').DataTable({
    deferRender: true,
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'Factory Issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-5',
            initCollapsed: true,
            cascadePanes: true,
            dtOpts:{
                select:{
                style: 'multi'
                }
            },
        },
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,3,4]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [5]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable6, {});
    NPItable6.searchPanes.container().prependTo("#NPI-filter-panel6");
    NPItable6.searchPanes.resizePanes();
    NPItable6_init();

var DFMtable1 =  $('#DFM-table1').DataTable({
    deferRender: true,
        dom: 'Bfrtip',
        lengthchartlabel: [
            [ 10, 20, 50, -1 ],
            [ '10 rows', '20 rows', '50 rows', 'Show all' ]
        ],
        buttons: [
            {
                extend: 'excel',
                title: 'NPI Design issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-5',
            initCollapsed: true,
            cascadePanes: true,
            dtOpts:{
                select:{
                style: 'multi'
                }
            },
        },
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,3,4,5,6,7,8,9,10]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [11]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFMtable1, {});
    DFMtable1.searchPanes.container().prependTo("#DFM-filter-panel1");
    DFMtable1.searchPanes.resizePanes();
    DFMtable1_init();


});

//////////table select feature/////////////
    $('#product-table1 tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });
       // $('#NPI-table1 tbody').on('click', 'tr', function () {
       // $(this).toggleClass('selected');
    //});
       // $('#NPI-table3 tbody').on('click', 'tr', function () {
        //$(this).toggleClass('selected');
    //});
      //  $('#NPI-table4 tbody').on('click', 'tr', function () {
       // $(this).toggleClass('selected');
   // });
     //   $('#NPI-table5 tbody').on('click', 'tr', function () {
       // $(this).toggleClass('selected');
   // });
     //   $('#NPI-table6 tbody').on('click', 'tr', function () {
       // $(this).toggleClass('selected');
   // });

//////////NPI-filter-button/////////////

  $('#NPI-filter-button1').on('click', function(){

  var x = document.getElementById("NPI-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button3').on('click', function(){

     var x = document.getElementById("NPI-filter3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button4').on('click', function(){

     var x = document.getElementById("NPI-filter4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button5').on('click', function(){

     var x = document.getElementById("NPI-filter5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button6').on('click', function(){

     var x = document.getElementById("NPI-filter6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFM-filter-button1').on('click', function(){

  var x = document.getElementById("DFM-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

//////////////////////redraw///////////////////////////////////

  $('#NPI-redraw1').on('click', function(){
   NPItable1_init();
} );

  $('#NPI-redraw3').on('click', function(){
   NPItable3_init();
} );

  $('#NPI-redraw4').on('click', function(){
   NPItable4_init();
} );

  $('#NPI-redraw5').on('click', function(){
   NPItable5_init();
} );

  $('#NPI-redraw6').on('click', function(){
   NPItable6_init();
} );

  $('#DFM-redraw1').on('click', function(){
   DFMtable1_init();
} );

/////////////////////chart colors///////////////////////////////

var blue = '#c0d6eb'
var yellow= '#fce9ae'
var orange = '#ffac70'
var green = '#c6e8b0'
var purple = '#e1cef5'
var gray = '#cfd1cd'
var lightgreen = '#a2e0d6'
var pink = '#ffc4d6'
var brown = '#dbc8b4'

var product_pie1_colors = [yellow,orange,blue,purple,green,lightgreen,pink];
var NPI_pie1_colors = [lightgreen,yellow,orange,purple,green,blue,gray,pink,brown];
var NPI_bar1_colors = [orange,purple,blue,green,yellow,gray,lightgreen,pink,brown];
var NPI_pie3_colors = [green,blue,yellow,purple,brown,lightgreen];
var NPI_bar2_colors = [lightgreen,yellow,orange,purple,green,blue,gray,lightgreen];
var NPI_pie4_colors = [yellow,green,blue,yellow];
var NPI_bar3_colors = [green,blue,orange];
var NPI_pie5_colors = [orange,yellow,green,blue,purple,lightgreen];
var NPI_pie6_colors = [orange,purple,blue,green,yellow,lightgreen,gray,pink,brown];
var NPI_pie7_colors = [blue,yellow,orange,green,purple];
var NPI_bar4_colors = [orange, green,blue,yellow,purple];
var NPI_pie8_colors = [orange,purple,blue,green,gray,lightgreen,pink,brown]; //在check
var NPI_bar5_colors = [yellow,gray,purple,orange,green,blue,pink,brown];
var DFM_pie1_colors = [blue,yellow,green,orange,purple,lightgreen,gray,pink,brown];
var DFM_bar1_colors = [lightgreen,orange];
var DFM_bar2_colors = [lightgreen,yellow,orange,blue];
var DFM_radar1_colors = [lightgreen,yellow];

/////////////////////chart init function///////////////////////////////

var product_pie1_build = 0
var NPI_pie1_build = 0
var NPI_bar1_build = 0
var NPI_pie3_build = 0
var NPI_bar2_build = 0
var NPI_pie4_build = 0
var NPI_bar3_build = 0
var NPI_pie5_build = 0
var NPI_pie6_build = 0
var NPI_pie7_build = 0
var NPI_bar4_build = 0
var NPI_pie8_build = 0
var NPI_bar5_build = 0
var DFM_pie1_build = 0
var DFM_bar1_build = 0
var DFM_bar2_build = 0
var DFM_radar1_build =0


function producttable1_init(){

    var table_init = $('#product-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("product-table1");
    var tableLen = table.rows.length;
    var data = {col1: [], col2: []};

  for (var i = 1; i < tableLen; i++) {

    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext2 = table.rows[i].cells[2].innerText;

    if (data.col1.indexOf(coltext1) === -1) {
    data.col1.push(coltext1);
    data.col2.push(1);
    }
    else if (data.col1.indexOf(coltext1) !== -1) {

    var coltext2_old = Number(data.col2[data.col1.indexOf(coltext1)])
    data.col2[data.col1.indexOf(coltext1)] = coltext2_old+ 1

    }

  }

    table_init.page.len(10).draw();

//product-pie1
product_pie1_build=1
var ctx = document.getElementById( "product-pie1" );
 product_pie1 = new Chart( ctx, {
    type: 'pie',
      data: {
      labels: data.col1,
      datasets: [ {
        data: data.col2,
        hoverBorderWidth: 4,
        } ],
    },
  options: {
      maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
        labels: {
       fontColor: 'black',
      },
       colorschemes: {
        scheme: product_pie1_colors
      }
    }
  }
});

}

function NPItable1_init(){

    var table_init = $('#NPI-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table1");
    var tableLen = table.rows.length;
    var data = {col0: [], col2: [], col3_0: [],col3_2: [] };

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    coltext0_split = coltext0.split('-');
    coltext0 = coltext0_split[0];
    coltext0=coltext0.replace(/\s*/g,""); //去空白

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);


//Long-term Category
    if(coltext2.indexOf("Factory") === -1){
        coltext2_split = coltext2.split('-');
        coltext2 = coltext2_split[0];
        coltext2=coltext2.replace(/\s*/g,""); //去空白
    }

//pie
  if (data.col0.indexOf(coltext0) === -1 && coltext3!==0) {
  data.col0.push(coltext0);
  data.col3_0.push(coltext3);
}
else if(data.col0.indexOf(coltext0) !== -1 && coltext3!==0) {

var coltext3_0_old = Number(data.col3_0[data.col0.indexOf(coltext0)])
data.col3_0[data.col0.indexOf(coltext0)] = coltext3_0_old+ Number(coltext3)

}
//bar
  if (coltext0 === "Design" && data.col2.indexOf(coltext2) === -1 && coltext3!==0) {

  data.col2.push(coltext2);
  data.col3_2.push(coltext3);
}

 else if (coltext0 === "Design" && data.col2.indexOf(coltext2) !== -1 && coltext3!==0) {

var coltext3_2_old = Number(data.col3_2[data.col2.indexOf(coltext2)])
data.col3_2[data.col2.indexOf(coltext2)] = coltext3_2_old+ Number(coltext3)
}

}

    table_init.page.len(10).draw();

        if(NPI_pie1_build===1){
            NPI_pie1.destroy();
    }

// NPI-pie1
NPI_pie1_build=1
var canvasP = document.getElementById("NPI-pie1")
var ctxP2 = canvasP.getContext('2d')
 NPI_pie1 = new Chart(ctxP2, {
  type: 'pie',
  data: {
    labels: data.col0,
    datasets: [{
      data: data.col3_0,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
              title: {
            display: true,
            text: 'Overall Issue Distribution',
            position:'bottom'
        },
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie1_colors
      }
    }
  }
});

        if(NPI_bar1_build===1){
    NPI_bar1.destroy();
    }

// NPI-bar1
NPI_bar1_build=1
var ctx = document.getElementById("NPI-bar1");
 NPI_bar1 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 20;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col2,
    datasets:  [
        {
      data: data.col3_2,
      backgroundColor: NPI_bar1_colors,
      hoverBorderWidth: 4,
        },
    ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        legend: {
        display: false,
          labels: {
            fontColor: "black",
            fontSize: 10,
                }
        },
        plugins: {
        labels: {
        fontColor: 'black',
        render: 'value'
      },
    },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});
}

function NPItable3_init(){

    var table_init = $('#NPI-table3').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table3");
    var tableLen = table.rows.length;
    var data = {col0: [],col2: [], col3: [],col44: [],COMM:[],Commodity:[],Design:[],Diags:[],FactoryOperation:[],Material:[]};

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = table.rows[i].cells[3].innerText;
    coltext3_split = coltext3.split('-');
    coltext3 = coltext3_split[0];
    coltext3=coltext3.replace(/\s*/g,""); //去空白
    var coltext4 = Number(table.rows[i].cells[4].innerText);


//pie
  if (data.col2.indexOf(coltext2) === -1 && coltext4!==0) {
  data.col2.push(coltext2);
  data.col44.push(coltext4);
}
else if (data.col2.indexOf(coltext2) !== -1 && coltext4!==0) {
var coltext44_old = Number(data.col44[data.col2.indexOf(coltext2)])
data.col44[data.col2.indexOf(coltext2)] = coltext44_old+ Number(coltext4)

}


//bar
 if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "COMM") {
  data.col0.push(coltext0);
  data.COMM.push(coltext4);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(0);

}

 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Commodity") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(coltext4);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(0);

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Design") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(coltext4);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(0);

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Diags") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(coltext4);
  data.FactoryOperation.push(0);
  data.Material.push(0);

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "FactoryOperation") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(coltext4);
  data.Material.push(0);

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Material") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(coltext4);

}

 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "COMM") {
   var coltext4_old = Number(data.COMM[data.col0.indexOf(coltext0)])
   data.COMM[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)

}

 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Commodity") {
   var coltext4_old = Number(data.Commodity[data.col0.indexOf(coltext0)])
   data.Commodity[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Design") {
   var coltext4_old = Number(data.Design[data.col0.indexOf(coltext0)])
   data.Design[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Diags") {
   var coltext4_old = Number(data.Diags[data.col0.indexOf(coltext0)])
   data.Diags[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)

}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "FactoryOperation") {
   var coltext4_old = Number(data.FactoryOperation[data.col0.indexOf(coltext0)])
   data.FactoryOperation[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)


}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Material") {

  var coltext4_old = Number(data.Material[data.col0.indexOf(coltext0)])
  data.Material[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)


}




}
    table_init.page.len(10).draw();

        if(NPI_pie3_build===1){
          NPI_pie3.destroy();
    }


NPI_pie3_build=1
var canvasP = document.getElementById("NPI-pie3")
var ctxP = canvasP.getContext('2d')
 NPI_pie3 = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: data.col2,
    datasets: [{
      data: data.col44,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie3_colors
      }
    }
  }
});

    if(NPI_bar2_build === 1){
    NPI_bar2.destroy();
    }

//NPI-barline1
      //      tooltips: {
     // mode: 'index',
     // intersect: false
   // },

//NPI-barline1
NPI_bar2_build=1
var ctx = document.getElementById("NPI-bar2");
 NPI_bar2 = new Chart(ctx, {
  type: 'bar',
  data: {
            labels:data.col0,
            datasets: [

                {
                    label: 'COMM',
                    data: data.COMM,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'Commodity',
                    data: data.Commodity,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },
                                  {
                    label: 'Design',
                    data: data.Design,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },
                                  {
                    label: 'Diags',
                    data: data.Diags,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },
                                  {
                    label: 'FactoryOperation',
                    data: data.FactoryOperation,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },
                                  {
                    label: 'Material',
                    data: data.Material,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                }
            ]
        },
  options: {
    maintainAspectRatio: false,
    responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
               ticks: {
                  beginAtZero: true,
          }
            }]
        },

    tooltips: {
      mode: 'index',
      intersect: false
    },
              plugins: {
        labels: {
        fontColor: 'transparent',
        render: 'value'
      },
             colorschemes: {
        scheme: NPI_bar2_colors
      }
    }
  }
});

}

function NPItable4_init(){

    var table_init = $('#NPI-table4').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table4");
    var tableLen = table.rows.length;
    var data = {col0: [], col1: [], col2: [],col5: [], col55: [],PV:[],SI:[],MV:[] };

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext5 = Number(table.rows[i].cells[5].innerText);


//換字
  if (coltext1 !== "Factory Operation") {
  coltext1 = 'Other';
}
// 放else 放BAR的條件句仔{


//}

//pie
  if (data.col1.indexOf(coltext1) === -1 && coltext5!==0) {
  data.col1.push(coltext1);
  data.col55.push(coltext5);
}
else if(data.col1.indexOf(coltext1) !== -1 && coltext5!==0) {

var coltext55_old = Number(data.col55[data.col1.indexOf(coltext1)])
data.col55[data.col1.indexOf(coltext1)] = coltext55_old+ Number(coltext5)

}

//bar
  if (coltext1 === "Factory Operation" && data.col0.indexOf(coltext0) === -1 && coltext2.indexOf('PV') !== -1) {

  data.col0.push(coltext0);
  data.PV.push(coltext5);
  data.MV.push(0);
  data.SI.push(0);
}
  else if (coltext1 === "Factory Operation" && data.col0.indexOf(coltext0) === -1 && coltext2.indexOf('MV') !== -1) {
  data.col0.push(coltext0);
  data.PV.push(0);
  data.MV.push(coltext5);
  data.SI.push(0);
}
  else if (coltext1 === "Factory Operation" && data.col0.indexOf(coltext0) === -1 && coltext2.indexOf('SI') !== -1) {
  data.col0.push(coltext0);
  data.PV.push(0);
  data.MV.push(0);
  data.SI.push(coltext5);
}

  else if (coltext1 === "Factory Operation" && data.col0.indexOf(coltext0) !== -1 && coltext2.indexOf('PV') !== -1) {

  var coltext5_old = Number(data.PV[data.col0.indexOf(coltext0)])
  data.PV[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)

}
  else if (coltext1 === "Factory Operation" && data.col0.indexOf(coltext0) !== -1 && coltext2.indexOf('MV') !== -1) {
    var coltext5_old = Number(data.MV[data.col0.indexOf(coltext0)])
    data.MV[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)

}
  else if (coltext1 === "Factory Operation" && data.col0.indexOf(coltext0) !== -1 && coltext2.indexOf('SI') !== -1) {
    var coltext5_old = Number(data.SI[data.col0.indexOf(coltext0)])
    data.SI[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)

}

}


    table_init.page.len(10).draw();


        if(NPI_pie4_build===1){
          NPI_pie4.destroy();
    }


NPI_pie4_build=1
var canvasP = document.getElementById("NPI-pie4")
var ctxP = canvasP.getContext('2d')
 NPI_pie4 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col1,
    datasets: [{
      data: data.col55,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
              title: {
            display: true,
            text: 'Overall Issue Distribution',
            position:'bottom'
        },
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie4_colors
      }
    }
  }
});



    if(NPI_bar3_build === 1){
    NPI_bar3.destroy();
    }


//NPI-barline2
NPI_bar3_build=1
var ctx = document.getElementById("NPI-bar3");
 NPI_bar3 = new Chart(ctx, {
 //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 20;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col0,
            datasets: [

                {
                    label: 'SI',
                    data: data.SI,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'PV',
                    data: data.PV,
                    stack: 'Stack 1',
                    hoverBorderWidth: 4,
                },
                                  {
                    label: 'MV',
                    data: data.MV,
                    stack: 'Stack 2',
                    hoverBorderWidth: 4,
                }
            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10,
                }
        },
        plugins: {
        labels: {
        fontColor: 'black',
        render: 'value'
      },

             colorschemes: {
        scheme: NPI_bar3_colors
      }
    },
        scales: {

            xAxes: [{
                stacked: true,

            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
}

function NPItable5_init(){

    var table_init = $('#NPI-table5').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table5");
    var tableLen = table.rows.length;
    var data = {col0: [], col2: [],col3: [], col33: []};

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    coltext0_split = coltext0.split('-');
    coltext0 = coltext0_split[0];
    coltext0=coltext0.replace(/\s*/g,""); //去空白
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);

//換字
  if (coltext0.indexOf("COMM") !== -1 || coltext0.indexOf("Commodity") !== -1) {
    coltext0 = 'Design';
}
 else if(coltext0.indexOf("TBD") !== -1 || coltext0 ==="Diags" ) {
    coltext0 = 'Others';
}
else if(coltext0.indexOf("FactoryOperation")!== -1) {
    coltext0 = 'Factory';
}

//Long-term Category
    if(coltext2.indexOf("Factory") === -1){
        coltext2_split = coltext2.split('-');
        coltext2 = coltext2_split[0];
        coltext2=coltext2.replace(/\s*/g,""); //去空白
    }


//pie1
  if (data.col0.indexOf(coltext0) === -1 && coltext3!==0) {
  data.col0.push(coltext0);
  data.col3.push(coltext3);
}
else if(data.col0.indexOf(coltext0) !== -1 && coltext3!==0) {

var coltext3_old = Number(data.col3[data.col0.indexOf(coltext0)])
data.col3[data.col0.indexOf(coltext0)] = coltext3_old+ Number(coltext3)

}

//pie2
  if (data.col2.indexOf(coltext2) === -1 && coltext3!==0) {
  data.col2.push(coltext2);
  data.col33.push(coltext3);
}
else if(data.col2.indexOf(coltext2) !== -1 && coltext3!==0) {

var coltext33_old = Number(data.col33[data.col2.indexOf(coltext2)])
data.col33[data.col2.indexOf(coltext2)] = coltext33_old+ Number(coltext3)

}
}

    table_init.page.len(10).draw();


        if(NPI_pie5_build===1){
          NPI_pie5.destroy();
    }


NPI_pie5_build=1
var canvasP = document.getElementById("NPI-pie5")
var ctxP = canvasP.getContext('2d')
 NPI_pie5 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col0,
    datasets: [{
      data: data.col3,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
                  labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie5_colors
      }
    }
  }
});

        if(NPI_pie6_build===1){
          NPI_pie6.destroy();
    }


NPI_pie6_build=1
var canvasP = document.getElementById("NPI-pie6")
var ctxP = canvasP.getContext('2d')
 NPI_pie6 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col2,
    datasets: [{
      data: data.col33,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie6_colors
      }
    }
  }
});
}

function NPItable6_init(){

    var table_init = $('#NPI-table6').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table6");
    var tableLen = table.rows.length;
    var data = {col1: [], col1_2: [], col2: [], col4: [],col5: [], col5_2: [],col5_3: [],col5_4: []};

for (var i = 1; i < tableLen; i++) {

    var coltext1 = table.rows[i].cells[1].innerText;
    coltext1_split = coltext1.split('-');
    coltext1 = coltext1_split[0];
    coltext1=coltext1.replace(/\s*/g,""); //去空白
    var coltext2 = table.rows[i].cells[2].innerText;
    coltext2_split = coltext2.split('-');
    coltext2 = coltext2_split[0];
    coltext2=coltext2.replace(/\s*/g,""); //去空白
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = Number(table.rows[i].cells[5].innerText);


//換字
  if (coltext1.indexOf("COMM") !== -1 || coltext1.indexOf("Commodity") !== -1) {
    coltext1 = 'Design';
}
 else if(coltext1.indexOf("TBD") !== -1 || coltext1 ==="Diags" ) {
    coltext1 = 'Others';
}
else if(coltext1.indexOf("FactoryOperation")!== -1) {
    coltext1 = 'Factory';
}
else if(coltext1 ==="Design") {

    var coltext11 = coltext1_split[1];
    coltext11=coltext11.replace(/\s*/g,""); //去空白

}

//Long-term Category
    if(coltext4.indexOf("Factory") === -1){
        coltext4_split = coltext4.split('-');
        coltext4 = coltext4_split[0];
        coltext4=coltext4.replace(/\s*/g,""); //去空白
    }


//換字PRB
 if(coltext2 ==="PRB/TLD/PVR") {

   coltext2 = 'PRB/TLD';

}


//pie1
  if (data.col2.indexOf(coltext2) === -1 && coltext5!==0) {
  data.col2.push(coltext2);
  data.col5.push(coltext5);
}
else if(data.col2.indexOf(coltext2) !== -1 && coltext5!==0) {

var coltext5_old = Number(data.col5[data.col2.indexOf(coltext2)])
data.col5[data.col2.indexOf(coltext2)] = coltext5_old+ Number(coltext5)

}

//bar1
  if (coltext2 === "MV" && data.col1.indexOf(coltext1) === -1 && coltext5!==0) {

  data.col1.push(coltext1);
  data.col5_2.push(coltext5);
}

 else if (coltext2 === "MV" && data.col1.indexOf(coltext1) !== -1 && coltext5!==0) {

var coltext5_2_old = Number(data.col5_2[data.col1.indexOf(coltext1)])
data.col5_2[data.col1.indexOf(coltext1)] = coltext5_2_old+ Number(coltext5)
}



//pie2
  if (coltext2 === "MV" && data.col4.indexOf(coltext4) === -1 && coltext5!==0) {
  data.col4.push(coltext4);
  data.col5_3.push(coltext5);
}
else if(coltext2 === "MV" && data.col4.indexOf(coltext4) !== -1 && coltext5!==0) {

var coltext5_3_old = Number(data.col5_3[data.col4.indexOf(coltext4)])
data.col5_3[data.col4.indexOf(coltext4)] = coltext5_3_old+ Number(coltext5)

}

//bar2
  if (coltext2 === "MV" && coltext1 ==="Design" && data.col1_2.indexOf(coltext11) === -1 && coltext5!==0) {

  data.col1_2.push(coltext11);
  data.col5_4.push(coltext5);
}

 else if (coltext2 === "MV" && coltext1 ==="Design" && data.col1_2.indexOf(coltext11) !== -1 && coltext5!==0) {

var coltext5_4_old = Number(data.col5_4[data.col1_2.indexOf(coltext11)])
data.col5_4[data.col1_2.indexOf(coltext11)] = coltext5_4_old+ Number(coltext5)
}

}

    table_init.page.len(10).draw();


        if(NPI_pie7_build===1){
          NPI_pie7.destroy();
    }


NPI_pie7_build=1
var canvasP = document.getElementById("NPI-pie7")
var ctxP = canvasP.getContext('2d')
 NPI_pie7 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col2,
    datasets: [{
      data: data.col5,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie7_colors
      }
    }
  }
});



    if(NPI_bar4_build === 1){
    NPI_bar4.destroy();
    }

// NPI-bar4
NPI_bar4_build=1
var ctx = document.getElementById("NPI-bar4");
 NPI_bar4 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 20;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col1,
    datasets:  [
        {
      data: data.col5_2,
      backgroundColor: NPI_bar4_colors,
      hoverBorderWidth: 4,
        },
    ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        legend: {
           display: false,
          labels: {
            fontColor: "black",
            fontSize: 10,
                }
        },
        plugins: {
        labels: {
        fontColor: 'black',
        render: 'value'
      },
    },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


        if(NPI_pie8_build===1){
          NPI_pie8.destroy();
    }


NPI_pie8_build=1
var canvasP = document.getElementById("NPI-pie8")
var ctxP = canvasP.getContext('2d')
 NPI_pie8 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col4,
    datasets: [{
      data: data.col5_3,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: NPI_pie8_colors
      }
    }
  }
});


    if(NPI_bar5_build === 1){
    NPI_bar5.destroy();
    }

// NPI-bar5
NPI_bar5_build=1
var ctx = document.getElementById("NPI-bar5");
 NPI_bar5 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 20;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col1_2,
    datasets:  [
        {
      data: data.col5_4,
      backgroundColor: NPI_bar5_colors,
      hoverBorderWidth: 4,
        },
    ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        legend: {
          display: false,
          labels: {
            fontColor: "black",
            fontSize: 10,
                }
        },
        plugins: {
        labels: {
        fontColor: 'black',
        render: 'value'
      },
    },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


}

function DFMtable1_init(){

    var table_init = $('#DFM-table1').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("DFM-table1");
    var tableLen = table.rows.length;
    var data = {col10: [],col11: []};
    var dict_P1 = {CNC:0, SI:0, PV:0, MV:0};
    var dict_NUD = {CNC:0, SI:0, PV:0, MV:0};
    var dict_Close = {CNC:0, SI:0, PV:0, MV:0};
    var dict_Monitor = {CNC:0, SI:0, PV:0, MV:0};
    var dict_Open = {CNC:0, SI:0, PV:0, MV:0};
    var dict_New = {CNC:0, SI:0, PV:0, MV:0};
    var dict_Ronin = {co:0, ui:0, ca:0, fi:0,no:0};
    var dict_Warpath = {co:0, ui:0, ca:0, fi:0,no:0};

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = table.rows[i].cells[3].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = table.rows[i].cells[8].innerText;
    var coltext10 = table.rows[i].cells[10].innerText;
    var coltext11 = Number(table.rows[i].cells[11].innerText);

    //換字
  if (coltext3 === "Y") {
    coltext3 = 'Close';
}
 else if(coltext3 === "N") {
    coltext3 = 'Open';
}

  if (coltext4 === "Y") {
    coltext4 = 'Close';
}
 else if(coltext4 === "N") {
    coltext4 = 'Open';
}

  if (coltext5 === "Y") {
    coltext5 = 'Close';
}
 else if(coltext5 === "N") {
    coltext5 = 'Open';
}

  if (coltext6 === "Y") {
    coltext6 = 'Close';
}
 else if(coltext6 === "N") {
    coltext6 = 'Open';
}


//pie
  if (coltext2 === "1" && coltext7 !== "..." && coltext10 !== "None" && data.col10.indexOf(coltext10) === -1 && coltext11!==0) {
  data.col10.push(coltext10);
  data.col11.push(coltext11);
}
else if (coltext2 === "1" && coltext7 !== "..." && coltext10 !== "None" && data.col10.indexOf(coltext10) !== -1 && coltext11!==0) {
var coltext11_old = Number(data.col11[data.col10.indexOf(coltext10)])
data.col11[data.col10.indexOf(coltext10)] = coltext11_old+ Number(coltext11)

}

//bar1
 if (coltext2 === "1" && coltext3 !== "Close") { //CNC p1
    var coltextCNC_old = dict_P1.CNC
    dict_P1.CNC = coltextCNC_old + Number(coltext11);
}

if (coltext7 !== "..." && coltext3 !== "Close") {//CNC NUD
    var coltextCNC_old = dict_NUD.CNC
    dict_NUD.CNC = coltextCNC_old + Number(coltext11);

}
if (coltext2 === "1" && coltext4 !== "Close") { //SI p1
    var coltextSI_old = dict_P1.SI
    dict_P1.SI = coltextSI_old + Number(coltext11);
}

 if (coltext7 !== "..." && coltext4 !== "Close") {//SI NUD
    var coltextSI_old = dict_NUD.SI
    dict_NUD.SI = coltextSI_old + Number(coltext11);
}

if (coltext2 === "1" && coltext5 !== "Close") { //PV p1
    var coltextPV_old = dict_P1.PV
    dict_P1.PV = coltextPV_old + Number(coltext11);
}

 if (coltext7 !== "..." && coltext5 !== "Close") {//PV NUD
    var coltextPV_old = dict_NUD.PV
    dict_NUD.PV = coltextPV_old + Number(coltext11);
}

if (coltext2 === "1" && coltext6 !== "Close") { //MV p1
    var coltextMV_old = dict_P1.MV
    dict_P1.MV = coltextMV_old + Number(coltext11);
}

 if (coltext7 !== "..." && coltext6 !== "Close") {//MV NUD
    var coltextMV_old = dict_NUD.MV
    dict_NUD.MV = coltextMV_old + Number(coltext11);
}

//bar2
 if (coltext2 === "1" && coltext7 !== "..." && coltext3 === "Close") { //CNC Close
    var coltextCNC_old = dict_Close.CNC
    dict_Close.CNC = coltextCNC_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext3 === "Monitor") {//CNC Monitor
    var coltextCNC_old = dict_Monitor.CNC
    dict_Monitor.CNC = coltextCNC_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext3 === "Open") {//CNC Open
    var coltextCNC_old = dict_Open.CNC
    dict_Open.CNC = coltextCNC_old + Number(coltext11);
}

if (coltext2 === "1" && coltext7 !== "..." && coltext4 === "Close") { //SI Close
    var coltextSI_old = dict_Close.SI
    dict_Close.SI = coltextSI_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext4 === "Monitor") {//SI Monitor
    var coltextSI_old = dict_Monitor.SI
    dict_Monitor.SI = coltextSI_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext4 === "Open") {//SI Open
    var coltextSI_old = dict_Open.SI
    dict_Open.SI = coltextSI_old + Number(coltext11);
}

if (coltext2 === "1" && coltext7 !== "..." && coltext5 === "Close") { //PV Close
    var coltextPV_old = dict_Close.PV
    dict_Close.PV = coltextPV_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext5 === "Monitor") {//PV Monitor
    var coltextPV_old = dict_Monitor.PV
    dict_Monitor.PV = coltextPV_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext5 === "Open") {//PV Open
    var coltextPV_old = dict_Open.PV
    dict_Open.PV = coltextPV_old + Number(coltext11);
}

 if (coltext2 === "1" && coltext7 !== "..." && coltext6 === "Close") { //MV Close
    var coltextMV_old = dict_Close.MV
    dict_Close.MV = coltextMV_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext6 === "Monitor") {//MV Monitor
    var coltextMV_old = dict_Monitor.MV
    dict_Monitor.MV = coltextMV_old + Number(coltext11);
}
 else if (coltext2 === "1" && coltext7 !== "..." && coltext6 === "Open") {//MV Open
    var coltextMV_old = dict_Open.MV
    dict_Open.MV = coltextMV_old + Number(coltext11);
}

 if (coltext1 === "New finding" && coltext3 !== "...") { //CNC New finding
    var coltextCNC_old = dict_New.CNC
    dict_New.CNC = coltextCNC_old + Number(coltext11);
}
 if (coltext1 === "New finding" && coltext4 !== "...") { //SI New finding
    var coltextSI_old = dict_New.SI
    dict_New.SI = coltextSI_old + Number(coltext11);
}
 if (coltext1 === "New finding" && coltext5 !== "...") { //PV New finding
    var coltextPV_old = dict_New.PV
    dict_New.PV = coltextPV_old + Number(coltext11);
}
 if (coltext1 === "New finding" && coltext6 !== "...") { //MV New finding
    var coltextMV_old = dict_New.MV
    dict_New.MV = coltextMV_old + Number(coltext11);
}

//radar
 if (coltext0.indexOf("Ronin") !== -1 && coltext8.indexOf("Cosmetic") !== -1) {
    var coltextco_old = dict_Ronin.co
    dict_Ronin.co = coltextco_old + Number(coltext11);
}
else if(coltext0.indexOf("Ronin") !== -1 && coltext8.indexOf("User Interface") !== -1) {
    var coltextui_old = dict_Ronin.ui
    dict_Ronin.ui = coltextui_old + Number(coltext11);
}
else if(coltext0.indexOf("Ronin") !== -1 && coltext8.indexOf("Cables") !== -1) {
    var coltextca_old = dict_Ronin.ca
    dict_Ronin.ca = coltextca_old + Number(coltext11);
}
else if(coltext0.indexOf("Ronin") !== -1 && coltext8.indexOf("Fixture issue") !== -1) {
    var coltextfi_old = dict_Ronin.fi
    dict_Ronin.fi = coltextfi_old + Number(coltext11);
}
else if(coltext0.indexOf("Ronin") !== -1 && coltext8.indexOf("Noise come from physical operation") !== -1) {
    var coltextno_old = dict_Ronin.no
    dict_Ronin.no = coltextno_old + Number(coltext11);
}
 else if (coltext0.indexOf("Warpath") !== -1 && coltext8.indexOf("Cosmetic") !== -1) {
    var coltextco_old = dict_Warpath.co
    dict_Warpath.co = coltextco_old + Number(coltext11);
}
else if(coltext0.indexOf("Warpath") !== -1 && coltext8.indexOf("User Interface") !== -1) {
    var coltextui_old = dict_Warpath.ui
    dict_Warpath.ui = coltextui_old + Number(coltext11);
}
else if(coltext0.indexOf("Warpath") !== -1 && coltext8.indexOf("Cables") !== -1) {
    var coltextca_old = dict_Warpath.ca
    dict_Warpath.ca = coltextca_old + Number(coltext11);
}
else if(coltext0.indexOf("Warpath") !== -1 && coltext8.indexOf("Fixture issue") !== -1) {
    var coltextfi_old = dict_Warpath.fi
    dict_Warpath.fi = coltextfi_old + Number(coltext11);
}
else if(coltext0.indexOf("Warpath") !== -1 && coltext8.indexOf("Noise come from physical operation") !== -1) {
    var coltextno_old = dict_Warpath.no
    dict_Warpath.no = coltextno_old + Number(coltext11);
}

}
    table_init.page.len(10).draw();

        if(DFM_pie1_build===1){
          DFM_pie1.destroy();
    }


DFM_pie1_build=1
var canvasP = document.getElementById("DFM-pie1")
var ctxP = canvasP.getContext('2d')
 DFM_pie1 = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: data.col10,
    datasets: [{
      data: data.col11,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
          labels: {
        fontColor: 'black',
      },
             colorschemes: {
        scheme: DFM_pie1_colors
      }
    }
  }
});

    if(DFM_bar1_build === 1){
    DFM_bar1.destroy();
    }


//DFM_bar1
DFM_bar1_build=1
var ctx = document.getElementById("DFM-bar1");
 DFM_bar1 = new Chart(ctx, {
  type: 'bar',
  data: {
            labels:["CNC","SI","PV","MV"],
            datasets: [

                {
                    label: '# of P1 issues',
                    data: [dict_P1.CNC,dict_P1.SI,dict_P1.PV,dict_P1.MV],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                {
                    label: '# of NUD',
                    data: [dict_NUD.CNC,dict_NUD.SI,dict_NUD.PV,dict_NUD.MV],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                }
            ]
        },
  options: {
    maintainAspectRatio: false,
    responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
               ticks: {
                  beginAtZero: true,
          }
            }]
        },

    tooltips: {
      mode: 'index',
      intersect: false
    },
     plugins: {
        labels: {
        fontColor: 'transparent',
        render: 'value'
      },
             colorschemes: {
        scheme: DFM_bar1_colors
      }
    }
  }
});
/*
chartlabel = ["CNC","SI","PV","MV"];
chartdata1 = [dict_P1.CNC,dict_P1.SI,dict_P1.PV,dict_P1.MV];
chartdata2 = [dict_NUD.CNC,dict_NUD.SI,dict_NUD.PV,dict_NUD.MV];

charttable = "<table border='1' width='100%' style='table-layout:fixed;font-size:12px;margin-top: 10px;'><thead><tr><th></th>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<th>" + chartlabel[i] + "</th>";
}
charttable += "</tr><thead>";

charttable += "<tbody><tr><td># of P1 issues</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata1[i] + "</td>";
}
charttable += "</tr>";

charttable += "<tr><td># of NUD</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata2[i] + "</td>";
}
charttable += "</tr><tbody></table>";

document.getElementById("DFM-bar1-table").innerHTML = charttable;
*/


    if(DFM_bar2_build === 1){
    DFM_bar2.destroy();
    }

//DFM_bar2
DFM_bar2_build=1
var ctx = document.getElementById("DFM-bar2");
 DFM_bar2 = new Chart(ctx, {
  type: 'bar',
  data: {
            labels:["CNC","SI","PV","MV"],
            datasets: [

              {
                    label: 'Close',
                    data: [dict_Close.CNC,dict_Close.SI,dict_Close.PV,dict_Close.MV],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },
                {
                    label: 'Monitor',
                    data: [dict_Monitor.CNC,dict_Monitor.SI,dict_Monitor.PV,dict_Monitor.MV],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'Open',
                    data: [dict_Open.CNC,dict_Open.SI,dict_Open.PV,dict_Open.MV],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },
                  {
                    label: 'New Finding',
                    data: [dict_New.CNC,dict_New.SI,dict_New.PV,dict_New.MV],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                }
            ]
        },
  options: {
    maintainAspectRatio: false,
    responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true,
               ticks: {
                  beginAtZero: true,
          }
            }]
        },
    tooltips: {
      mode: 'index',
      intersect: false
    },
        plugins: {
        labels: {
        fontColor: 'transparent',
        render: 'value'
      },
        colorschemes: {
        scheme: DFM_bar2_colors
      }
    }
  }
});
/*

Total_CNC = dict_Close.CNC+dict_Monitor.CNC+dict_Open.CNC+dict_New.CNC
Total_SI = dict_Close.SI+dict_Monitor.SI+dict_Open.SI+dict_New.SI
Total_PV = dict_Close.PV+dict_Monitor.PV+dict_Open.PV+dict_New.PV
Total_MV = dict_Close.MV+dict_Monitor.MV+dict_Open.MV+dict_New.MV
chartlabel = ["CNC","SI","PV","MV"];
chartdata1 = [dict_Close.CNC,dict_Close.SI,dict_Close.PV,dict_Close.MV];
chartdata2 = [dict_Monitor.CNC,dict_Monitor.SI,dict_Monitor.PV,dict_Monitor.MV];
chartdata3 = [dict_Open.CNC,dict_Open.SI,dict_Open.PV,dict_Open.MV];
chartdata4 = [dict_New.CNC,dict_New.SI,dict_New.PV,dict_New.MV];
chartdata5 = [Total_CNC,Total_SI,Total_PV,Total_MV];

charttable = "<table border='1' width='100%' style='table-layout:fixed;font-size:12px;'><thead><tr><th></th>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<th>" + chartlabel[i] + "</th>";
}
charttable += "</tr><thead>";

charttable += "<tbody><tr><td>Close</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata1[i] + "</td>";
}
charttable += "</tr>";

charttable += "<tr><td>Monitor</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata2[i] + "</td>";
}
charttable += "</tr>";

charttable += "<tr><td>Open</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata3[i] + "</td>";
}
charttable += "</tr>";

charttable += "<tr><td>New Finding</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata4[i] + "</td>";
}
charttable += "</tr>";

charttable += "<tr><td>Total</td>";
for (i = 0; i < chartlabel.length; i++) {
  charttable += "<td>" + chartdata5[i] + "</td>";
}
charttable += "</tr><tbody></table>";

document.getElementById("DFM-bar2-table").innerHTML = charttable;*/

    if(DFM_radar1_build === 1){
    DFM_radar1.destroy();
    }


//NPI-barline1
DFM_radar1_build=1
var ctx = document.getElementById("DFM-radar1");
 DFM_radar1 = new Chart(ctx, {
  type: 'radar',
    data: {
        labels: ["Cosmetic","User Interface","Cables","Fixture issue","Noise come from physical operation"],
    datasets:  [
                {
                    label: 'Ronin',
                    data: [dict_Ronin.co,dict_Ronin.ui,dict_Ronin.ca,dict_Ronin.fi,dict_Ronin.no],
                    hoverBorderWidth: 4,
                },
                {
                    label: 'Warpath',
                    data: [dict_Warpath.co,dict_Warpath.ui,dict_Warpath.ca,dict_Warpath.fi,dict_Warpath.no],
                    hoverBorderWidth: 4,
                },
        ]
    },
  options: {
    maintainAspectRatio: false,
    responsive: true,
        legend: {
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        scales: {
        display: false
        },
            tooltips: {
      mode: 'index',
      intersect: false
    },
     plugins: {
        labels: {
        fontColor: 'transparent',
        render: 'value'
      },
             colorschemes: {
        scheme: DFM_radar1_colors
      }
    }
  }
});

}


