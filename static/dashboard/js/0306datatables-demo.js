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
        lengthMenu: [
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
        lengthMenu: [
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
        lengthMenu: [
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
        lengthMenu: [
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
        lengthMenu: [
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
        lengthMenu: [
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

var product_pie1_colors = ['#c0d6eb','#fce9ae', '#ffac70', '#c6e8b0','#e1cef5','#a2e0d6','#cfd1cd'];
var NPI_pie1_colors = ['#c0d6eb','#fce9ae', '#ffac70', '#c6e8b0','#e1cef5','#a2e0d6','#cfd1cd'];
var NPI_bar1_colors = ['#ffac70','#c6e8b0', '#c0d6eb', '#e1cef5','#fce9ae'];
var NPI_pie3_colors = ['#c6e8b0','#c0d6eb','#fce9ae'];
var NPI_bar2_colors = ['#c0d6eb','#fce9ae', '#ffac70', '#c6e8b0','#e1cef5','#a2e0d6','#cfd1cd'];
var NPI_pie4_colors = ['#c0d6eb','#ffac70'];
var NPI_bar3_colors = ['#c0d6eb','#ffac70', '#c6e8b0'];
var NPI_pie5_colors = ['#ffac70','#fce9ae', '#c6e8b0', '#c0d6eb','#e1cef5','#cfd1cd'];
var NPI_pie6_colors = ['#c6e8b0','#ffac70', '#c0d6eb', '#e1cef5','#fce9ae','#cfd1cd'];
//藍、黃、橘、綠、紫、灰 pie7
var NPI_pie7_colors = ['#c0d6eb','#fce9ae', '#ffac70', '#c6e8b0','#e1cef5','#cfd1cd'];
var NPI_bar4_colors = ['#ffac70','#c0d6eb', '#c6e8b0', '#fce9ae','#e1cef5'];
var NPI_pie8_colors = ['#ffac70','#e1cef5', '#c6e8b0'];
var NPI_bar5_colors = ['#fce9ae','#cfd1cd', '#e1cef5', '#ffac70','#c6e8b0','#c0d6eb'];



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
                    label: 'PV',
                    data: data.PV,
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'MV',
                    data: data.MV,
                    stack: 'Stack 1',
                    hoverBorderWidth: 4,
                },
                                  {
                    label: 'SI',
                    data: data.SI,
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