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

});

//////////table select feature/////////////
    $('#product-table1 tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });
       // $('#NPI-table1 tbody').on('click', 'tr', function () {
       // $(this).toggleClass('selected');
    //});
       // $('#NPI-table2 tbody').on('click', 'tr', function () {
        //$(this).toggleClass('selected');
    //});
      //  $('#NPI-table3 tbody').on('click', 'tr', function () {
       // $(this).toggleClass('selected');
   // });
     //   $('#NPI-table4 tbody').on('click', 'tr', function () {
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

/////////////////////chart init function///////////////////////////////

var product_pie1_build = 0
var NPI_pie1_build = 0
var NPI_bar1_build = 0
var NPI_pie2_build = 0
var NPI_pie3_build = 0
var NPI_bar2_build = 0
var NPI_pie4_build = 0
var NPI_bar3_build = 0

var NPI_pie1_colors = ['#2c69b0', '#a0cbe8', '#FF2D2D','#59a14f','#f28e2b','#CA8EC2','#FFD306'];
var NPI_pie4_colors = ['#2c69b0', '#FF2D2D'];


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
       fontColor: 'white',
      },
       colorschemes: {
        scheme: 'tableau.Tableau20'
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
      data: data.col3_0
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
        fontColor: 'white',
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
    type: 'bar',
        data: {
        labels: data.col2,
    datasets:  [
        {
      data: data.col3_2
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

             colorschemes: {
        scheme: 'tableau.Tableau20'
      }
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
      data: data.col44
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
        fontColor: 'white',
      },
             colorschemes: {
        scheme: 'tableau.Tableau20'
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
                    stack: 'Stack 0'
                },

                  {
                    label: 'Commodity',
                    data: data.Commodity,
                    stack: 'Stack 0',
                },
                                  {
                    label: 'Design',
                    data: data.Design,
                    stack: 'Stack 0',
                },
                                  {
                    label: 'Diags',
                    data: data.Diags,
                    stack: 'Stack 0',
                },
                                  {
                    label: 'FactoryOperation',
                    data: data.FactoryOperation,
                    stack: 'Stack 0',
                },
                                  {
                    label: 'Material',
                    data: data.Material,
                    stack: 'Stack 0',
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
            beginAtZero: true
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
        scheme: 'tableau.Tableau20'
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
      data: data.col55
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
        fontColor: 'white',
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
    type: 'bar',
        data: {
        labels: data.col0,
            datasets: [

                {
                    label: 'PV',
                    data: data.PV,
                    stack: 'Stack 0'
                },

                  {
                    label: 'MV',
                    data: data.MV,
                    stack: 'Stack 1',
                },
                                  {
                    label: 'SI',
                    data: data.SI,
                    stack: 'Stack 2',
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
        scheme: 'tableau.Tableau20'
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


