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

var Producttable1 =  $('#product-table1').DataTable({
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
                targets: [0,1,2,4,5]
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

var NPItable2 =  $('#NPI-table2').DataTable({
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
            layout: 'columns-6',
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
                targets: [0,1,2,3,5,6]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [4]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable2, {});
    NPItable2.searchPanes.container().prependTo("#NPI-filter-panel2");
    NPItable2.searchPanes.resizePanes();
    NPItable2_init();

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
                title: 'Factory Issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-7',
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
                targets: [0,1,2,3,4,6,7]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [5]
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
                targets: [0,1,2,4,5]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3]
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
            layout: 'columns-7',
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
                targets: [0,1,2,3,4,6,7]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [5]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable5, {});
    NPItable5.searchPanes.container().prependTo("#NPI-filter-panel5");
    NPItable5.searchPanes.resizePanes();
    NPItable5_init();

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
                title: 'DFM Issue'
            },
            'pageLength'
        ],
        searchPanes: {
            layout: 'columns-6',
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
                targets: [0,1,2,3,4,5,6,7,8,9,10,12,13]
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

var DFMtable2 =  $('#DFM-table2').DataTable({
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
            layout: 'columns-1',
            initCollapsed: true,
            cascadePanes: true,
            collapse: false,
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
                targets: [0]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [1,2]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFMtable2, {});
    DFMtable2.searchPanes.container().prependTo("#DFM-filter-panel2");
    DFMtable2.searchPanes.resizePanes();

var DFMtable2_2 =  $('#DFM-table2-2').DataTable({
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
            layout: 'columns-1',
            initCollapsed: true,
            cascadePanes: true,
            collapse: false,
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
                targets: [0]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [1,2]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFMtable2_2, {});
    DFMtable2_2.searchPanes.container().prependTo("#DFM-filter-panel2-2");
    DFMtable2_2.searchPanes.resizePanes();
    DFMtable2_init();

var EStable1 =  $('#ES-table1').DataTable({
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
                targets: [0,7,8]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [1,2,3,4,5,6]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(EStable1, {});
    EStable1.searchPanes.container().prependTo("#ES-filter-panel1");
    EStable1.searchPanes.resizePanes();
    EStable4_init();
    EStable2_init();
    EStable5_init();

var DFAtable1 =  $('#DFA-table1').DataTable({
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
                targets: [0,1,2,9,10]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable1, {});
    DFAtable1.searchPanes.container().prependTo("#DFA-filter-panel1");
    DFAtable1.searchPanes.resizePanes();
    DFAtable1_init();

var DFAtable2 =  $('#DFA-table2').DataTable({
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
                targets: [0,1,2,9,10]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable2, {});
    DFAtable2.searchPanes.container().prependTo("#DFA-filter-panel2");
    DFAtable2.searchPanes.resizePanes();
    DFAtable2_init();

var DFAtable7 =  $('#DFA-table7').DataTable({
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
                targets: [0,1,2,9,10]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable7, {});
    DFAtable7.searchPanes.container().prependTo("#DFA-filter-panel7");
    DFAtable7.searchPanes.resizePanes();
    DFAtable7_init();

var DFAtable8 =  $('#DFA-table8').DataTable({
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
            layout: 'columns-1',
            initCollapsed: true,
            cascadePanes: true,
            collapse: false,
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
                targets: [0]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [1,2,3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable8, {});
    DFAtable8.searchPanes.container().prependTo("#DFA-filter-panel8");
    DFAtable8.searchPanes.resizePanes();

var DFAtable8_2 =  $('#DFA-table8-2').DataTable({
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
            layout: 'columns-1',
            initCollapsed: true,
            cascadePanes: true,
            collapse: false,
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
                targets: [0]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [1,2,3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable8_2, {});
    DFAtable8_2.searchPanes.container().prependTo("#DFA-filter-panel8-2");
    DFAtable8_2.searchPanes.resizePanes();
    DFAtable8_init();

var DFAtable9 =  $('#DFA-table9').DataTable({
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
            layout: 'columns-1',
            initCollapsed: true,
            cascadePanes: true,
            collapse: false,
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
                targets: [1]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [0,2,3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable9, {});
    DFAtable9.searchPanes.container().prependTo("#DFA-filter-panel9");
    DFAtable9.searchPanes.resizePanes();

var DFAtable9_2 =  $('#DFA-table9-2').DataTable({
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
            layout: 'columns-1',
            initCollapsed: true,
            cascadePanes: true,
            collapse: false,
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
                targets: [1]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [0,2,3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable9_2, {});
    DFAtable9_2.searchPanes.container().prependTo("#DFA-filter-panel9-2");
    DFAtable9_2.searchPanes.resizePanes();
    DFAtable9_init();

var DFAtable10 =  $('#DFA-table10').DataTable({
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
            layout: 'columns-2',
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
                targets: [9,10]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [0,1,2,3,4,5,6,7,8,11]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable10, {});
    DFAtable10.searchPanes.container().prependTo("#DFA-filter-panel10");
    DFAtable10.searchPanes.resizePanes();
    DFAtable10_init();

var DFAtable11 =  $('#DFA-table11').DataTable({
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
            layout: 'columns-2',
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
                targets: [9,10]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [0,1,2,3,4,5,6,7,8,11]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable10, {});
    DFAtable11.searchPanes.container().prependTo("#DFA-filter-panel11");
    DFAtable11.searchPanes.resizePanes()
    DFAtable11_init();

/*目前不用的 DFA 其他議題
var DFAtable3 =  $('#DFA-table3').DataTable({
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
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable3, {});
    DFAtable3.searchPanes.container().prependTo("#DFA-filter-panel3");
    DFAtable3.searchPanes.resizePanes();
    DFAtable3_init();

var DFAtable4 =  $('#DFA-table4').DataTable({
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
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable4, {});
    DFAtable4.searchPanes.container().prependTo("#DFA-filter-panel4");
    DFAtable4.searchPanes.resizePanes();
    DFAtable4_init();

var DFAtable5 =  $('#DFA-table5').DataTable({
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
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable5, {});
    DFAtable5.searchPanes.container().prependTo("#DFA-filter-panel5");
    DFAtable5.searchPanes.resizePanes();
    DFAtable5_init();

var DFAtable6 =  $('#DFA-table6').DataTable({
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
                targets: [3,4,5,6,7,8]
            }
        ]
    });
    new $.fn.dataTable.SearchPanes(DFAtable6, {});
    DFAtable6.searchPanes.container().prependTo("#DFA-filter-panel6");
    DFAtable6.searchPanes.resizePanes();
    DFAtable6_init();*/

//////////////////////ready///////////////
});


//////////table select feature/////////////
    $('#product-table1 tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

//////////NPI-filter-button/////////////

  $('#NPI-filter-button1').on('click', function(){
  var x = document.getElementById("NPI-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

 $('#NPI-filter-button2').on('click', function(){
 var x = document.getElementById("NPI-filter2");
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

  $('#DFM-filter-button1').on('click', function(){
  var x = document.getElementById("DFM-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFM-filter-button2').on('click', function(){

  var x = document.getElementById("DFM-filter2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#ES-filter-button1').on('click', function(){
  var x = document.getElementById("ES-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button1').on('click', function(){
  var x = document.getElementById("DFA-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button2').on('click', function(){

  var x = document.getElementById("DFA-filter2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button3').on('click', function(){

  var x = document.getElementById("DFA-filter3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button4').on('click', function(){

  var x = document.getElementById("DFA-filter4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button5').on('click', function(){

  var x = document.getElementById("DFA-filter5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button6').on('click', function(){

  var x = document.getElementById("DFA-filter6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button7').on('click', function(){

  var x = document.getElementById("DFA-filter7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button8').on('click', function(){
  var x = document.getElementById("DFA-filter8");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button9').on('click', function(){
  var x = document.getElementById("DFA-filter9");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button10').on('click', function(){
  var x = document.getElementById("DFA-filter10");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#DFA-filter-button11').on('click', function(){
  var x = document.getElementById("DFA-filter11");
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

  $('#NPI-redraw2').on('click', function(){
   NPItable2_init();
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

  $('#DFM-redraw1').on('click', function(){
   DFMtable1_init();
} );

  $('#DFM-redraw2').on('click', function(){
   DFMtable2_init();
} );

  $('#ES-redraw1').on('click', function(){
   EStable1_init();
} );

  $('#DFA-redraw1').on('click', function(){
   DFAtable1_init();
} );

  $('#DFA-redraw2').on('click', function(){
   DFAtable2_init();
} );

  $('#DFA-redraw3').on('click', function(){
   DFAtable3_init();
} );

  $('#DFA-redraw4').on('click', function(){
   DFAtable4_init();
} );

  $('#DFA-redraw5').on('click', function(){
   DFAtable5_init();
} );

  $('#DFA-redraw6').on('click', function(){
   DFAtable6_init();
} );

  $('#DFA-redraw7').on('click', function(){
   DFAtable7_init();
} );

  $('#DFA-redraw8').on('click', function(){
   DFAtable8_init();
} );

  $('#DFA-redraw9').on('click', function(){
   DFAtable9_init();
} );

  $('#DFA-redraw10').on('click', function(){
   DFAtable10_init();
} );

  $('#DFA-redraw11').on('click', function(){
   DFAtable11_init();
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
var NPI_pie2_colors = [green,blue,yellow,purple,brown,lightgreen];
var NPI_bar2_colors = [lightgreen,yellow,orange,purple,green,blue,gray,lightgreen];
var NPI_pie3_colors = [yellow,green,blue,yellow];
var NPI_bar3_colors = [green,blue,orange];
var NPI_pie4_colors = [orange,yellow,green,blue,purple,lightgreen];
var NPI_pie4_2_colors = [orange,purple,blue,green,yellow,lightgreen,gray,pink,brown];
var NPI_pie5_colors = [blue,yellow,orange,green,purple];
var NPI_bar5_colors = [orange, green,blue,yellow,purple];
var NPI_pie5_2_colors = [orange,purple,blue,green,gray,lightgreen,pink,brown]; //在check
var NPI_bar5_2_colors = [yellow,gray,purple,orange,green,blue,pink,brown];

var DFM_pie1_colors = [blue,yellow,green,orange,purple,lightgreen,gray,pink,brown];
var DFM_bar1_colors = [lightgreen,orange];
var DFM_bar1_2_colors = [lightgreen,yellow,orange,blue];
var DFM_radar1_colors = [lightgreen,yellow];

var DFA_bar7_colors = [blue,orange]
var DFA_radar8_colors = [lightgreen,yellow];
var DFA_line10_colors = [blue];

/////////////////////chart init function///////////////////////////////

var product_pie1_build = 0
var NPI_pie1_build = 0
var NPI_bar1_build = 0
var NPI_pie2_build = 0
var NPI_bar2_build = 0
var NPI_pie3_build = 0
var NPI_bar3_build = 0
var NPI_pie4_build = 0
var NPI_pie4_2_build = 0
var NPI_pie5_build = 0
var NPI_bar5_build = 0
var NPI_pie5_2_build = 0
var NPI_bar5_2_build = 0

var DFM_pie1_build = 0
var DFM_bar1_build = 0
var DFM_bar1_2_build = 0
var DFM_radar1_build =0

var ES_i2_pie1_build = 0
var ES_i2_bar1_build = 0
var ES_i4_pie1_build = 0
var ES_i4_pie2_build = 0
var ES_i5_bar1_build = 0
var ES_i5_pie1_build = 0
var ES_i5_bar2_build = 0

var DFA_card_build = 0
var DFA_bar7_build = 0
var DFA_bar7_2_build = 0
var DFA_bar7_3_build = 0
var DFA_bar7_4_build = 0
var DFA_radar8_build = 0
var DFA_radar9_build = 0
var DFA_line10_build = 0
var DFA_line10_2_build = 0
var DFA_line11_build = 0
var DFA_line11_2_build = 0

function producttable1_init(){

    var table_init = $('#product-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("product-table1");
    var tableLen = table.rows.length;
    var data = {col1: [], col2: []};

  for (var i = 1; i < tableLen; i++) {

    var coltext1 = table.rows[i].cells[1].innerText;

    if (data.col1.indexOf(coltext1) === -1) {
        data.col1.push(coltext1);
        data.col2.push(1);
    }
    else if (data.col1.indexOf(coltext1) !== -1) {
        var coltext2_old = Number(data.col2[data.col1.indexOf(coltext1)])
        data.col2[data.col1.indexOf(coltext1)] = coltext2_old+ 1
    }

  }

//pie
    table_init.page.len(10).draw();

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
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
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

// pie1
    table_init.page.len(10).draw();

        if(NPI_pie1_build===1){
            NPI_pie1.destroy();
    }

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
            position:'top',
            fontColor: "black",
            fontSize: 14,
        },
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie1_colors
      }
    }
  }
});
// bar1

     if(NPI_bar1_build===1){
    NPI_bar1.destroy();
    }

NPI_bar1_build=1
var ctx = document.getElementById("NPI-bar1");
 NPI_bar1 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
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
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
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

function NPItable2_init(){

    var table_init = $('#NPI-table2').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table2");
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
  //pie

        if(NPI_pie2_build===1){
          NPI_pie2.destroy();
    }

NPI_pie2_build=1
var canvasP = document.getElementById("NPI-pie2")
var ctxP = canvasP.getContext('2d')
 NPI_pie2 = new Chart(ctxP, {
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
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie2_colors
      }
    }
  }
});

//bar
    if(NPI_bar2_build === 1){
    NPI_bar2.destroy();
    }

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
           datalabels: {
               color: 'transparent',
            },
             colorschemes: {
        scheme: NPI_bar2_colors
      }
    }
  }
});

}

function NPItable3_init(){

    var table_init = $('#NPI-table3').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table3");
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

//pie
        if(NPI_pie3_build===1){
          NPI_pie3.destroy();
    }

NPI_pie3_build=1
var canvasP = document.getElementById("NPI-pie3")
var ctxP = canvasP.getContext('2d')
 NPI_pie3 = new Chart(ctxP, {
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
            position:'top',
           fontColor: "black",
         fontSize: 14,
        },
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie3_colors
      }
    }
  }
});

//bar
    if(NPI_bar3_build === 1){
    NPI_bar3.destroy();
    }

NPI_bar3_build=1
var ctx = document.getElementById("NPI-bar3");
 NPI_bar3 = new Chart(ctx, {
 //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
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
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
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
                    //stepSize: 1
                }
            }]
        }
    }
});
}

function NPItable4_init(){

    var table_init = $('#NPI-table4').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table4");
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

//pie1
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
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie4_colors
      }
    }
  }
});

//pie2
        if(NPI_pie4_2_build===1){
          NPI_pie4_2.destroy();
    }

NPI_pie4_2_build=1
var canvasP = document.getElementById("NPI-pie4-2")
var ctxP = canvasP.getContext('2d')
 NPI_pie4_2 = new Chart(ctxP, {
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
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie4_2_colors
      }
    }
  }
});
}

function NPItable5_init(){

    var table_init = $('#NPI-table5').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table5");
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
else if(coltext1 ==="Design") { //取得Root Cause Category的小項，例如：Design-EE，取得EE

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

//pie1
        if(NPI_pie5_build===1){
          NPI_pie5.destroy();
    }

NPI_pie5_build=1
var canvasP = document.getElementById("NPI-pie5")
var ctxP = canvasP.getContext('2d')
 NPI_pie5 = new Chart(ctxP, {
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
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie5_colors
      }
    }
  }
});


//bar1
    if(NPI_bar5_build === 1){
    NPI_bar5.destroy();
    }

NPI_bar5_build=1
var ctx = document.getElementById("NPI-bar5");
 NPI_bar5 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col1,
    datasets:  [
        {
      data: data.col5_2,
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
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
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

//pie2
        if(NPI_pie5_2_build===1){
          NPI_pie5_2.destroy();
    }

NPI_pie5_2_build=1
var canvasP = document.getElementById("NPI-pie5-2")
var ctxP = canvasP.getContext('2d')
 NPI_pie5_2 = new Chart(ctxP, {
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
        position: "bottom",
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
        scheme: NPI_pie5_2_colors
      }
    }
  }
});

//bar2
    if(NPI_bar5_2_build === 1){
    NPI_bar5_2.destroy();
    }

NPI_bar5_2_build=1
var ctx = document.getElementById("NPI-bar5-2");
 NPI_bar5_2 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col1_2,
    datasets:  [
        {
      data: data.col5_4,
      backgroundColor: NPI_bar5_2_colors,
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
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
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

for (var i = 1; i < tableLen; i++) {

    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = table.rows[i].cells[3].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
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

}
    table_init.page.len(10).draw();

//pie
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
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: DFM_pie1_colors
      }
    }
  }
});

//bar1
    if(DFM_bar1_build === 1){
    DFM_bar1.destroy();
    }

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
           datalabels: {
               color: 'transparent',
            },
             colorschemes: {
        scheme: DFM_bar1_colors
      }
    }
  }
});
/* 之前放在圖表底下的計算表格，現在不用了
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

//bar2
    if(DFM_bar1_2_build === 1){
    DFM_bar1_2.destroy();
    }

DFM_bar1_2_build=1
var ctx = document.getElementById("DFM-bar1-2");
 DFM_bar1_2 = new Chart(ctx, {
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
           datalabels: {
               color: 'transparent',
            },
        colorschemes: {
        scheme: DFM_bar1_2_colors
      }
    }
  }
});

/* 之前放在圖表底下的計算表格，現在不用了
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

document.getElementById("DFM-bar1-2-table").innerHTML = charttable;*/
}

function DFMtable2_init(){
//radar dataset 1
    var table_init = $('#DFM-table2').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFM-table2");
    var tableLen = table.rows.length;
    var dict_D1 = {co:0, ui:0, ca:0, fi:0,no:0};

for (var i = 1; i < tableLen; i++) {
    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext2 = Number(table.rows[i].cells[2].innerText);

 if (coltext1.indexOf("Cosmetic") !== -1) {
    var coltextco_old = dict_D1.co
    dict_D1.co = coltextco_old + Number(coltext2);
}
else if(coltext1.indexOf("User Interface") !== -1) {
    var coltextui_old = dict_D1.ui
    dict_D1.ui = coltextui_old + Number(coltext2);
}
else if(coltext1.indexOf("Cables") !== -1) {
    var coltextca_old = dict_D1.ca
    dict_D1.ca = coltextca_old + Number(coltext2);
}
else if(coltext1.indexOf("Fixture issue") !== -1) {
    var coltextfi_old = dict_D1.fi
    dict_D1.fi = coltextfi_old + Number(coltext2);
}
else if(coltext1.indexOf("Noise come from physical operation") !== -1) {
    var coltextno_old = dict_D1.no
    dict_D1.no = coltextno_old + Number(coltext2);
}

}

//radar dataset 2
    var table_init2 = $('#DFM-table2-2').DataTable();
    table_init2.page.len(-1).draw();

    var table2 = document.getElementById("DFM-table2-2");
    var tableLen2 = table2.rows.length;
    var dict_D2 = {co:0, ui:0, ca:0, fi:0,no:0};

for (var i = 1; i < tableLen2; i++) {

    var coltext0 = table2.rows[i].cells[0].innerText;
    var coltext1 = table2.rows[i].cells[1].innerText;
    var coltext2 = Number(table2.rows[i].cells[2].innerText);

if (coltext1.indexOf("Cosmetic") !== -1) {
    var coltextco_old = dict_D2.co
    dict_D2.co = coltextco_old + Number(coltext2);
}
else if(coltext1.indexOf("User Interface") !== -1) {
    var coltextui_old = dict_D2.ui
    dict_D2.ui = coltextui_old + Number(coltext2);
}
else if(coltext1.indexOf("Cables") !== -1) {
    var coltextca_old = dict_D2.ca
    dict_D2.ca = coltextca_old + Number(coltext2);
}
else if(coltext1.indexOf("Fixture issue") !== -1) {
    var coltextfi_old = dict_D2.fi
    dict_D2.fi = coltextfi_old + Number(coltext2);
}
else if(coltext1.indexOf("Noise come from physical operation") !== -1) {
    var coltextno_old = dict_D2.no
    dict_D2.no = coltextno_old + Number(coltext2);
}
}

//DFM radar
    if(DFM_radar1_build === 1){
    DFM_radar1.destroy();
    }

DFM_radar1_build=1
var ctx = document.getElementById("DFM-radar1");
 DFM_radar1 = new Chart(ctx, {
   //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
  type: 'radar',
    data: {
        labels: ['Cosmetic','User Interface','Cables','Fixture issue','Noise come from physical operation'],
    datasets: [
                {
                    label: 'Dataset1',
                    data: [dict_D1.co,dict_D1.ui,dict_D1.ca,dict_D1.fi,dict_D1.no],
                    hoverBorderWidth: 4,
                },
                {
                    label: 'Dataset2',
                    data: [dict_D2.co,dict_D2.ui,dict_D2.ca,dict_D2.fi,dict_D2.no],
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
           datalabels: {
               color: 'transparent',
            },
             colorschemes: {
        scheme: DFM_radar1_colors
      }
    }
  }
});

}

function EStable4_init(){

    var table_init = $('#ES-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("ES-table1");
    var tableLen = table.rows.length;
    var data = {col3: [], col1: [],col6: [], col5: [], col55: []};

for (var i = 1; i < tableLen; i++) {
    var coltext3 = table.rows[i].cells[3].innerText;
    coltext3_split = coltext3.split('-');
    coltext3 = coltext3_split[0];
    coltext3=coltext3.replace(/\s*/g,""); //去空白
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext5 = Number(table.rows[i].cells[5].innerText);
    var coltext6 = table.rows[i].cells[6].innerText;

//換字
  if (coltext3.indexOf("COMM") !== -1 || coltext3.indexOf("Commodity") !== -1) {
    coltext3 = 'Design';
}
 else if(coltext3.indexOf("TBD") !== -1 || coltext3 ==="Diags" ) {
    coltext3 = 'Others';
}
else if(coltext3.indexOf("FactoryOperation")!== -1) {
    coltext3 = 'Factory';
}

//Long-term Category
    if(coltext1.indexOf("Factory") === -1){
        coltext1_split = coltext1.split('-');
        coltext1 = coltext1_split[0];
        coltext1=coltext1.replace(/\s*/g,""); //去空白
    }

//pie1
  if (data.col3.indexOf(coltext3) === -1 && coltext5!==0) {
  data.col3.push(coltext3);
  data.col5.push(coltext5);
}
else if(data.col3.indexOf(coltext3) !== -1 && coltext5!==0) {
    var coltext5_old = Number(data.col5[data.col3.indexOf(coltext3)])
    data.col5[data.col3.indexOf(coltext3)] = coltext5_old+ Number(coltext5)
}

//pie2
  if (data.col1.indexOf(coltext1) === -1 && coltext5!==0) {
  data.col1.push(coltext1);
  data.col55.push(coltext5);
}
else if(data.col1.indexOf(coltext1) !== -1 && coltext5!==0) {
    var coltext55_old = Number(data.col55[data.col1.indexOf(coltext1)])
    data.col55[data.col1.indexOf(coltext1)] = coltext55_old+ Number(coltext5)
}

}

    table_init.page.len(10).draw();
    //pie1
        if(ES_i4_pie1_build===1){
          ES_i4_pie1.destroy();
    }

ES_i4_pie1_build=1
var canvasP = document.getElementById("ES-i4-pie1")
var ctxP = canvasP.getContext('2d')
 ES_i4_pie1 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col3,
    datasets: [{
      data: data.col5,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie4_colors
      }
    }
  }
});

// 計算pie1圖旁邊，描述的字的數字
let sum = 0;
for(let n of data.col5) {
  sum += n;
}

var ES_i4_text5 = Number(data.col5[data.col3.indexOf("Design")])
var ES_i4_text6 = Number(data.col5[data.col3.indexOf("Factory")])

if(isNaN(ES_i4_text5)){
    ES_i4_text5 = 0+"%"
}
else{
    ES_i4_text5 = Math.round(ES_i4_text5/sum*100)+"%"
}

if(isNaN(ES_i4_text6)){
    ES_i4_text6 = 0+"%"
}
else{
    ES_i4_text6 = Math.round(ES_i4_text6/sum*100)+"%"
}

//最後寫回Html
document.getElementById("ES-i4-text5").innerHTML = ES_i4_text5;
document.getElementById("ES-i4-text6").innerHTML = ES_i4_text6;


        //pie2
        if(ES_i4_pie2_build===1){
          ES_i4_pie2.destroy();
    }

ES_i4_pie2_build=1
var canvasP = document.getElementById("ES-i4-pie2")
var ctxP = canvasP.getContext('2d')
 ES_i4_pie2 = new Chart(ctxP, {
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
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie4_2_colors
      }
    }
  }
});

// 計算pie2圖旁邊，描述的字的數字
var ES_i4_text7_FF = 0
var ES_i4_text7_FP = 0

if(data.col1.indexOf("Factory - Fixture") !== -1 ){
    ES_i4_text7_FF = Number(data.col55[data.col1.indexOf("Factory - Fixture")])
}
if(data.col1.indexOf("Factory - Process") !== -1 ){
    ES_i4_text7_FP = Number(data.col55[data.col1.indexOf("Factory - Process")])
}

var ES_i4_text7 = ES_i4_text7_FF +ES_i4_text7_FP
var ES_i4_text8 = Number(data.col55[data.col1.indexOf("Design")])
var ES_i4_text9 = Number(data.col55[data.col1.indexOf("Supplier")])

if(isNaN(ES_i4_text8)){
    ES_i4_text8 = 0
}

if(isNaN(ES_i4_text9)){
    ES_i4_text9 = 0
}

//最後寫回Html
document.getElementById("ES-i4-text7").innerHTML = ES_i4_text7;
document.getElementById("ES-i4-text8").innerHTML = ES_i4_text8;
document.getElementById("ES-i4-text9").innerHTML = ES_i4_text9;
}

function EStable2_init(){

    var table_init = $('#ES-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("ES-table1");
    var tableLen = table.rows.length;
    var data = {col0: [],col2: [], col3: [],col55: [],COMM:[],Commodity:[],Design:[],Diags:[],FactoryOperation:[],Material:[]};

for (var i = 1; i < tableLen; i++) {
    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = table.rows[i].cells[3].innerText;
    coltext3_split = coltext3.split('-');
    coltext3 = coltext3_split[0];
    coltext3=coltext3.replace(/\s*/g,""); //去空白
    var coltext5 = Number(table.rows[i].cells[5].innerText);

//pie
  if (data.col2.indexOf(coltext2) === -1 && coltext5!==0) {
  data.col2.push(coltext2);
  data.col55.push(coltext5);
}
else if (data.col2.indexOf(coltext2) !== -1 && coltext5!==0) {
    var coltext54_old = Number(data.col55[data.col2.indexOf(coltext2)])
    data.col55[data.col2.indexOf(coltext2)] = coltext54_old+ Number(coltext5)
}

//bar
 if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "COMM") {
  data.col0.push(coltext0);
  data.COMM.push(coltext5);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(0);
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Commodity") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(coltext5);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(0);
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Design") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(coltext5);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(0);
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Diags") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(coltext5);
  data.FactoryOperation.push(0);
  data.Material.push(0);
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "FactoryOperation") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(coltext5);
  data.Material.push(0);
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) === -1 && coltext3 === "Material") {
  data.col0.push(coltext0);
  data.COMM.push(0);
  data.Commodity.push(0);
  data.Design.push(0);
  data.Diags.push(0);
  data.FactoryOperation.push(0);
  data.Material.push(coltext5);
}

 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "COMM") {
   var coltext5_old = Number(data.COMM[data.col0.indexOf(coltext0)])
   data.COMM[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Commodity") {
   var coltext5_old = Number(data.Commodity[data.col0.indexOf(coltext0)])
   data.Commodity[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Design") {
   var coltext5_old = Number(data.Design[data.col0.indexOf(coltext0)])
   data.Design[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Diags") {
   var coltext5_old = Number(data.Diags[data.col0.indexOf(coltext0)])
   data.Diags[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "FactoryOperation") {
   var coltext5_old = Number(data.FactoryOperation[data.col0.indexOf(coltext0)])
   data.FactoryOperation[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)
}
 else if (coltext2 !== "Field" && data.col0.indexOf(coltext0) !== -1 && coltext3 === "Material") {
  var coltext5_old = Number(data.Material[data.col0.indexOf(coltext0)])
  data.Material[data.col0.indexOf(coltext0)] = coltext5_old+ Number(coltext5)
}

}
    table_init.page.len(10).draw();

//pie
        if(ES_i2_pie1_build===1){
          ES_i2_pie1.destroy();
    }

ES_i2_pie1_build=1
var canvasP = document.getElementById("ES-i2-pie1")
var ctxP = canvasP.getContext('2d')
 ES_i2_pie1 = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: data.col2,
    datasets: [{
      data: data.col55,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },
             colorschemes: {
        scheme: NPI_pie2_colors
      }
    }
  }
});

// 計算pie圖上方，描述的字的數字
let sum = 0;
for(let n of data.col55) {
  sum += n;
}

var ES_i2_text1 = Number(data.col55[data.col2.indexOf("Field + Factory")])
var ES_i2_text2 = Number(data.col55[data.col2.indexOf("Factory")])
if (isNaN(ES_i2_text1)){ //不是數字的話
    ES_i2_text1 = 0+"%"
}
else{
    ES_i2_text1 = Math.round(ES_i2_text1/sum*100)+"%"
}

if (isNaN(ES_i2_text2)){ //不是數字的話
    ES_i2_text2 = 0+"%"
}
else{
    ES_i2_text2 = Math.round(ES_i2_text2/sum*100)+"%"
}

document.getElementById("ES-i2-text1").innerHTML = ES_i2_text1;
document.getElementById("ES-i2-text2").innerHTML = ES_i2_text2;

//bar
    if(ES_i2_bar1_build === 1){
    ES_i2_bar1.destroy();
    }

ES_i2_bar1_build=1
var ctx = document.getElementById("ES-i2-bar1");
 ES_i2_bar1 = new Chart(ctx, {
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
           datalabels: {
               color: 'transparent',
            },

             colorschemes: {
        scheme: NPI_bar2_colors
      }
    }
  }
});


}

function EStable5_init(){
    var table_init = $('#ES-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("ES-table1");
    var tableLen = table.rows.length;
    var data = {col3: [], col3_2: [], col1: [], col6: [], col5_2: [],col5_3: [],col5_4: []};

for (var i = 1; i < tableLen; i++) {
    var coltext3 = table.rows[i].cells[3].innerText;
    coltext3_split = coltext3.split('-');
    coltext3 = coltext3_split[0];
    coltext3=coltext3.replace(/\s*/g,""); //去空白
    var coltext4 = table.rows[i].cells[4].innerText;
    coltext4_split = coltext4.split('-');
    coltext4 = coltext4_split[0];
    coltext4=coltext4.replace(/\s*/g,""); //去空白
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext5 = Number(table.rows[i].cells[5].innerText);
    var coltext6 = table.rows[i].cells[6].innerText;

//換字
  if (coltext3.indexOf("COMM") !== -1 || coltext3.indexOf("Commodity") !== -1) {
    coltext3 = 'Design';
}
 else if(coltext3.indexOf("TBD") !== -1 || coltext3 ==="Diags" ) {
    coltext3 = 'Others';
}
else if(coltext3.indexOf("FactoryOperation")!== -1) {
    coltext3 = 'Factory';
}
else if(coltext3 ==="Design") {
    var coltext31 = coltext3_split[1];
    coltext31=coltext31.replace(/\s*/g,""); //去空白
}

//Long-term Category
    if(coltext1.indexOf("Factory") === -1){
        coltext1_split = coltext1.split('-');
        coltext1 = coltext1_split[0];
        coltext1=coltext1.replace(/\s*/g,""); //去空白
    }

//換字PRB
 if(coltext4 ==="PRB/TLD/PVR") {
   coltext4 = 'PRB/TLD';
}

//pie
  if (coltext4 === "MV" && data.col1.indexOf(coltext1) === -1 && coltext5!==0) {
  data.col1.push(coltext1);
  data.col5_3.push(coltext5);
}
else if(coltext4 === "MV" && data.col1.indexOf(coltext1) !== -1 && coltext5!==0) {
    var coltext5_3_old = Number(data.col5_3[data.col1.indexOf(coltext1)])
    data.col5_3[data.col1.indexOf(coltext1)] = coltext5_3_old+ Number(coltext5)
}

//bar1
  if (coltext4 === "MV" && data.col3.indexOf(coltext3) === -1 && coltext5!==0) {
    data.col3.push(coltext3);
    data.col5_2.push(coltext5);
}
 else if (coltext4 === "MV" && data.col3.indexOf(coltext3) !== -1 && coltext5!==0) {
    var coltext5_2_old = Number(data.col5_2[data.col3.indexOf(coltext3)])
    data.col5_2[data.col3.indexOf(coltext3)] = coltext5_2_old+ Number(coltext5)
}

//bar2
  if (coltext4 === "MV" && coltext3 ==="Design" && data.col3_2.indexOf(coltext31) === -1 && coltext5!==0) {
  data.col3_2.push(coltext31);
  data.col5_4.push(coltext5);
}
 else if (coltext4 === "MV" && coltext3 ==="Design" && data.col3_2.indexOf(coltext31) !== -1 && coltext5!==0) {
    var coltext5_4_old = Number(data.col5_4[data.col3_2.indexOf(coltext31)])
    data.col5_4[data.col3_2.indexOf(coltext31)] = coltext5_4_old+ Number(coltext5)
}
}

    table_init.page.len(10).draw();

//pie
        if(ES_i5_pie1_build===1){
          ES_i5_pie1.destroy();
    }


ES_i5_pie1_build=1
var canvasP = document.getElementById("ES-i5-pie1")
var ctxP = canvasP.getContext('2d')
 ES_i5_pie1 = new Chart(ctxP, {
 type: 'pie',
  data: {
    labels: data.col1,
    datasets: [{
      data: data.col5_3,
      hoverBorderWidth: 4,
    }]
  },
  options: {
        maintainAspectRatio: false,
      responsive: true,
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10
                }
        },
        plugins: {
           datalabels: {
               color: 'black',
               formatter: function (value) {return Math.round(value) + '%';},
            },

             colorschemes: {
        scheme: NPI_pie5_2_colors
      }
    }
  }
});

// 計算pie圖旁邊，描述的字的數字
let sum = 0;
for(let n of data.col5_2) {
  sum += n;
}

var ES_i5_text3_FF = 0
var ES_i5_text3_FP = 0

if(data.col1.indexOf("Factory - Fixture") !== -1 ){
    ES_i5_text3_FF = Number(data.col5_3[data.col1.indexOf("Factory - Fixture")])
}
if(data.col1.indexOf("Factory - Process") !== -1 ){
    ES_i5_text3_FP = Number(data.col5_3[data.col1.indexOf("Factory - Process")])
}

var ES_i5_text3 = ES_i5_text3_FF + ES_i5_text3_FP
//最後寫回Html
document.getElementById("ES-i5-text3").innerHTML = ES_i5_text3;

// bar1
    if(ES_i5_bar1_build === 1){
    ES_i5_bar1.destroy();
    }

ES_i5_bar1_build=1
var ctx = document.getElementById("ES-i5-bar1");
 ES_i5_bar1 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col3,
    datasets:  [
        {
      data: data.col5_2,
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
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
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
//計算bar1圖上面，描述的字的數字
var ES_i5_text4 = Number(data.col5_2[data.col3.indexOf("Design")])

if(isNaN(ES_i5_text4)){
    ES_i5_text4 = 0 +"%"
}
else{
    ES_i5_text4 = Math.round(ES_i5_text4/sum*100) +"%"
}

//最後寫回Html
document.getElementById("ES-i5-text4").innerHTML = ES_i5_text4;

//bar2
    if(ES_i5_bar2_build === 1){
    ES_i5_bar2.destroy();
    }

ES_i5_bar2_build=1
var ctx = document.getElementById("ES-i5-bar2");
 ES_i5_bar2 = new Chart(ctx, {
  //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
        data: {
        labels: data.col3_2,
    datasets:  [
        {
      data: data.col5_4,
      backgroundColor: NPI_bar5_2_colors,
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
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
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

function DFAtable1_init(){

    var table_init = $('#DFA-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table1");
    var tableLen = table.rows.length;

    var fa_line_func_bond1 = 0;
    var fa_line_func_bond2 = 0;
    var fa_line_func_bond3 = 0;
    var fa_line_func_bond4 = 0;
    var fa_line_func_bond5 = 0;
    var fa_line_func_bond6 = 0;
    var fa_line_func_bond7 = 0;
    var fa_line_func_bond8 = 0;
    var fa_line_func_bond9 = 0;

    var fa_line_func_glu1 = 0;
    var fa_line_func_glu2 = 0;
    var fa_line_func_glu3 = 0;
    var fa_line_func_glu4 = 0;
    var fa_line_func_glu5 = 0;
    var fa_line_func_glu6 = 0;
    var fa_line_func_glu7 = 0;
    var fa_line_func_glu8 = 0;
    var fa_line_func_glu9 = 0;

    var fa_line_func_ass1 = 0;
    var fa_line_func_ass2 = 0;
    var fa_line_func_ass3 = 0;
    var fa_line_func_ass4 = 0;
    var fa_line_func_ass5 = 0;
    var fa_line_func_ass6 = 0;
    var fa_line_func_ass7 = 0;
    var fa_line_func_ass8 = 0;
    var fa_line_func_ass9 = 0;

    var fa_line_func_scr1 = 0;
    var fa_line_func_scr2 = 0;
    var fa_line_func_scr3 = 0;
    var fa_line_func_scr4 = 0;
    var fa_line_func_scr5 = 0;
    var fa_line_func_scr6 = 0;
    var fa_line_func_scr7 = 0;
    var fa_line_func_scr8 = 0;
    var fa_line_func_scr9 = 0;

    var fa_line_func_cab1 = 0;
    var fa_line_func_cab2 = 0;
    var fa_line_func_cab3 = 0;
    var fa_line_func_cab4 = 0;
    var fa_line_func_cab5 = 0;
    var fa_line_func_cab6 = 0;
    var fa_line_func_cab7 = 0;
    var fa_line_func_cab8 = 0;
    var fa_line_func_cab9 = 0;

    var fa_line_func_mat1 = 0;
    var fa_line_func_mat2 = 0;
    var fa_line_func_mat3 = 0;
    var fa_line_func_mat4 = 0;
    var fa_line_func_mat5 = 0;
    var fa_line_func_mat6 = 0;
    var fa_line_func_mat7 = 0;
    var fa_line_func_mat8 = 0;
    var fa_line_func_mat9 = 0;

    var fa_line_func_sum1 = 0;
    var fa_line_func_sum2 = 0;
    var fa_line_func_sum3 = 0;
    var fa_line_func_sum4 = 0;
    var fa_line_func_sum5 = 0;
    var fa_line_func_sum6 = 0;
    var fa_line_func_sum7 = 0;
    var fa_line_func_sum8 = 0;
    var fa_line_func_sum9 = 0;

for (var i = 1; i < tableLen; i++) {
    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {//cnc
            fa_line_func_bond1 = fa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {//si
            fa_line_func_bond4 = fa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {//pv
            fa_line_func_bond7 = fa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_bond2 = fa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_bond5 = fa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_bond8 = fa_line_func_bond8 + coltext8
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_glu1 = fa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_glu4 = fa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_glu7 = fa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_glu2 = fa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_glu5 = fa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_glu8 = fa_line_func_glu8 + coltext8
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_ass1 = fa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_ass4 = fa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_ass7 = fa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_ass2 = fa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_ass5 = fa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_ass8 = fa_line_func_ass8 + coltext8
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_scr1 = fa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_scr4 = fa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_scr7 = fa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_scr2 = fa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_scr5 = fa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_scr8 = fa_line_func_scr8 + coltext8
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_cab1 = fa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_cab4 = fa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_cab7 = fa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_cab2 = fa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_cab5 = fa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_cab8 = fa_line_func_cab8 + coltext8
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_mat1 = fa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_mat4 = fa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_mat7 = fa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_mat2 = fa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_mat5 = fa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_mat8 = fa_line_func_mat8 + coltext8
        }

    }
}

//FA-bond %

if(fa_line_func_bond1 ===0 || fa_line_func_bond2 ===0 ){
    fa_line_func_bond3 = 0+"%"
}
else {
    fa_line_func_bond3 = Math.round(fa_line_func_bond2/fa_line_func_bond1*100)+"%"
}

if(fa_line_func_bond4 ===0 || fa_line_func_bond5 ===0 ){
    fa_line_func_bond6 = 0+"%"
}
else {
    fa_line_func_bond6 = Math.round(fa_line_func_bond5/fa_line_func_bond4*100)+"%"
}

if(fa_line_func_bond7 ===0 || fa_line_func_bond8 ===0 ){
    fa_line_func_bond9 = 0+"%"
}
else {
    fa_line_func_bond9 = Math.round(fa_line_func_bond8/fa_line_func_bond7*100)+"%"
}

//FA-glu %
if(fa_line_func_glu1 ===0 || fa_line_func_glu2 ===0 ){
    fa_line_func_glu3 = 0+"%"
}
else {
    fa_line_func_glu3 = Math.round(fa_line_func_glu2/fa_line_func_glu1*100)+"%"
}

if(fa_line_func_glu4 ===0 || fa_line_func_glu5 ===0 ){
    fa_line_func_glu6 = 0+"%"
}
else {
    fa_line_func_glu6 = Math.round(fa_line_func_glu5/fa_line_func_glu4*100)+"%"
}

if(fa_line_func_glu7 ===0 || fa_line_func_glu8 ===0 ){
    fa_line_func_glu9 = 0+"%"
}
else {
    fa_line_func_glu9 = Math.round(fa_line_func_glu8/fa_line_func_glu7*100)+"%"
}

//FA-ass %
if(fa_line_func_ass1 ===0 || fa_line_func_ass2 ===0 ){
    fa_line_func_ass3 = 0+"%"
}
else {
    fa_line_func_ass3 = Math.round(fa_line_func_ass2/fa_line_func_ass1*100)+"%"
}

if(fa_line_func_ass4 ===0 || fa_line_func_ass5 ===0 ){
    fa_line_func_ass6 = 0+"%"
}
else {
    fa_line_func_ass6 = Math.round(fa_line_func_ass5/fa_line_func_ass4*100)+"%"
}

if(fa_line_func_ass7 ===0 || fa_line_func_ass8 ===0 ){
    fa_line_func_ass9 = 0+"%"
}
else {
    fa_line_func_ass9 = Math.round(fa_line_func_ass8/fa_line_func_ass7*100)+"%"
}

//FA-scr %
if(fa_line_func_scr1 ===0 || fa_line_func_scr2 ===0 ){
    fa_line_func_scr3 = 0+"%"
}
else {
    fa_line_func_scr3 = Math.round(fa_line_func_scr2/fa_line_func_scr1*100)+"%"
}

if(fa_line_func_scr4 ===0 || fa_line_func_scr5 ===0 ){
    fa_line_func_scr6 = 0+"%"
}
else {
    fa_line_func_scr6 = Math.round(fa_line_func_scr5/fa_line_func_scr4*100)+"%"
}

if(fa_line_func_scr7 ===0 || fa_line_func_scr8 ===0 ){
    fa_line_func_scr9 = 0+"%"
}
else {
    fa_line_func_scr9 = Math.round(fa_line_func_scr8/fa_line_func_scr7*100)+"%"
}

//FA-cab %
if(fa_line_func_cab1 ===0 || fa_line_func_cab2 ===0 ){
    fa_line_func_cab3 = 0+"%"
}
else {
    fa_line_func_cab3 = Math.round(fa_line_func_cab2/fa_line_func_cab1*100)+"%"
}

if(fa_line_func_cab4 ===0 || fa_line_func_cab5 ===0 ){
    fa_line_func_cab6 = 0+"%"
}
else {
    fa_line_func_cab6 = Math.round(fa_line_func_cab5/fa_line_func_cab4*100)+"%"
}

if(fa_line_func_cab7 ===0 || fa_line_func_cab8 ===0 ){
    fa_line_func_cab9 = 0+"%"
}
else {
    fa_line_func_cab9 = Math.round(fa_line_func_cab8/fa_line_func_cab7*100)+"%"
}

//FA-mat %
if(fa_line_func_mat1 ===0 || fa_line_func_mat2 ===0 ){
    fa_line_func_mat3 = 0+"%"
}
else {
    fa_line_func_mat3 = Math.round(fa_line_func_mat2/fa_line_func_mat1*100)+"%"
}

if(fa_line_func_mat4 ===0 || fa_line_func_mat5 ===0 ){
    fa_line_func_mat6 = 0+"%"
}
else {
    fa_line_func_mat6 = Math.round(fa_line_func_mat5/fa_line_func_mat4*100)+"%"
}

if(fa_line_func_mat7 ===0 || fa_line_func_mat8 ===0 ){
    fa_line_func_mat9 = 0+"%"
}
else {
    fa_line_func_mat9 = Math.round(fa_line_func_mat8/fa_line_func_mat7*100)+"%"
}

//FA-sum
fa_line_func_sum1 = fa_line_func_bond1+fa_line_func_glu1+fa_line_func_ass1+fa_line_func_scr1+fa_line_func_cab1+fa_line_func_mat1
fa_line_func_sum2 = fa_line_func_bond2+fa_line_func_glu2+fa_line_func_ass2+fa_line_func_scr2+fa_line_func_cab2+fa_line_func_mat2
fa_line_func_sum4 = fa_line_func_bond4+fa_line_func_glu4+fa_line_func_ass4+fa_line_func_scr4+fa_line_func_cab4+fa_line_func_mat4
fa_line_func_sum5 = fa_line_func_bond5+fa_line_func_glu5+fa_line_func_ass5+fa_line_func_scr5+fa_line_func_cab5+fa_line_func_mat5
fa_line_func_sum7 = fa_line_func_bond7+fa_line_func_glu7+fa_line_func_ass7+fa_line_func_scr7+fa_line_func_cab7+fa_line_func_mat7
fa_line_func_sum8 = fa_line_func_bond8+fa_line_func_glu8+fa_line_func_ass8+fa_line_func_scr8+fa_line_func_cab8+fa_line_func_mat8

//FA-sum %
if(fa_line_func_sum1 ===0 || fa_line_func_sum2 ===0 ){
    fa_line_func_sum3 = 0+"%"
}
else {
    fa_line_func_sum3 = Math.round(fa_line_func_sum2/fa_line_func_sum1*100)+"%"
}

if(fa_line_func_sum4 ===0 || fa_line_func_sum5 ===0 ){
    fa_line_func_sum6 = 0+"%"
}
else {
    fa_line_func_sum6 = Math.round(fa_line_func_sum5/fa_line_func_sum4*100)+"%"
}

if(fa_line_func_sum7 ===0 || fa_line_func_sum8 ===0 ){
    fa_line_func_sum9 = 0+"%"
}
else {
    fa_line_func_sum9 = Math.round(fa_line_func_sum8/fa_line_func_sum7*100)+"%"
}

//插入到HTML裡面
document.getElementById("fa-line-func-bond1").innerHTML = fa_line_func_bond1
document.getElementById("fa-line-func-bond2").innerHTML = fa_line_func_bond2
document.getElementById("fa-line-func-bond3").innerHTML = fa_line_func_bond3
document.getElementById("fa-line-func-bond4").innerHTML = fa_line_func_bond4
document.getElementById("fa-line-func-bond5").innerHTML = fa_line_func_bond5
document.getElementById("fa-line-func-bond6").innerHTML = fa_line_func_bond6
document.getElementById("fa-line-func-bond7").innerHTML = fa_line_func_bond7
document.getElementById("fa-line-func-bond8").innerHTML = fa_line_func_bond8
document.getElementById("fa-line-func-bond9").innerHTML = fa_line_func_bond9

document.getElementById("fa-line-func-glu1").innerHTML = fa_line_func_glu1
document.getElementById("fa-line-func-glu2").innerHTML = fa_line_func_glu2
document.getElementById("fa-line-func-glu3").innerHTML = fa_line_func_glu3
document.getElementById("fa-line-func-glu4").innerHTML = fa_line_func_glu4
document.getElementById("fa-line-func-glu5").innerHTML = fa_line_func_glu5
document.getElementById("fa-line-func-glu6").innerHTML = fa_line_func_glu6
document.getElementById("fa-line-func-glu7").innerHTML = fa_line_func_glu7
document.getElementById("fa-line-func-glu8").innerHTML = fa_line_func_glu8
document.getElementById("fa-line-func-glu9").innerHTML = fa_line_func_glu9

document.getElementById("fa-line-func-ass1").innerHTML = fa_line_func_ass1
document.getElementById("fa-line-func-ass2").innerHTML = fa_line_func_ass2
document.getElementById("fa-line-func-ass3").innerHTML = fa_line_func_ass3
document.getElementById("fa-line-func-ass4").innerHTML = fa_line_func_ass4
document.getElementById("fa-line-func-ass5").innerHTML = fa_line_func_ass5
document.getElementById("fa-line-func-ass6").innerHTML = fa_line_func_ass6
document.getElementById("fa-line-func-ass7").innerHTML = fa_line_func_ass7
document.getElementById("fa-line-func-ass8").innerHTML = fa_line_func_ass8
document.getElementById("fa-line-func-ass9").innerHTML = fa_line_func_ass9

document.getElementById("fa-line-func-scr1").innerHTML = fa_line_func_scr1
document.getElementById("fa-line-func-scr2").innerHTML = fa_line_func_scr2
document.getElementById("fa-line-func-scr3").innerHTML = fa_line_func_scr3
document.getElementById("fa-line-func-scr4").innerHTML = fa_line_func_scr4
document.getElementById("fa-line-func-scr5").innerHTML = fa_line_func_scr5
document.getElementById("fa-line-func-scr6").innerHTML = fa_line_func_scr6
document.getElementById("fa-line-func-scr7").innerHTML = fa_line_func_scr7
document.getElementById("fa-line-func-scr8").innerHTML = fa_line_func_scr8
document.getElementById("fa-line-func-scr9").innerHTML = fa_line_func_scr9

document.getElementById("fa-line-func-cab1").innerHTML = fa_line_func_cab1
document.getElementById("fa-line-func-cab2").innerHTML = fa_line_func_cab2
document.getElementById("fa-line-func-cab3").innerHTML = fa_line_func_cab3
document.getElementById("fa-line-func-cab4").innerHTML = fa_line_func_cab4
document.getElementById("fa-line-func-cab5").innerHTML = fa_line_func_cab5
document.getElementById("fa-line-func-cab6").innerHTML = fa_line_func_cab6
document.getElementById("fa-line-func-cab7").innerHTML = fa_line_func_cab7
document.getElementById("fa-line-func-cab8").innerHTML = fa_line_func_cab8
document.getElementById("fa-line-func-cab9").innerHTML = fa_line_func_cab9

document.getElementById("fa-line-func-mat1").innerHTML = fa_line_func_mat1
document.getElementById("fa-line-func-mat2").innerHTML = fa_line_func_mat2
document.getElementById("fa-line-func-mat3").innerHTML = fa_line_func_mat3
document.getElementById("fa-line-func-mat4").innerHTML = fa_line_func_mat4
document.getElementById("fa-line-func-mat5").innerHTML = fa_line_func_mat5
document.getElementById("fa-line-func-mat6").innerHTML = fa_line_func_mat6
document.getElementById("fa-line-func-mat7").innerHTML = fa_line_func_mat7
document.getElementById("fa-line-func-mat8").innerHTML = fa_line_func_mat8
document.getElementById("fa-line-func-mat9").innerHTML = fa_line_func_mat9

document.getElementById("fa-line-func-sum1").innerHTML = fa_line_func_sum1
document.getElementById("fa-line-func-sum2").innerHTML = fa_line_func_sum2
document.getElementById("fa-line-func-sum3").innerHTML = fa_line_func_sum3
document.getElementById("fa-line-func-sum4").innerHTML = fa_line_func_sum4
document.getElementById("fa-line-func-sum5").innerHTML = fa_line_func_sum5
document.getElementById("fa-line-func-sum6").innerHTML = fa_line_func_sum6
document.getElementById("fa-line-func-sum7").innerHTML = fa_line_func_sum7
document.getElementById("fa-line-func-sum8").innerHTML = fa_line_func_sum8
document.getElementById("fa-line-func-sum9").innerHTML = fa_line_func_sum9

document.getElementById("fa-line-func-cnc").innerHTML = fa_line_func_sum3
document.getElementById("fa-line-func-sipv").innerHTML = fa_line_func_sum6
document.getElementById("fa-line-func-mvmp").innerHTML = fa_line_func_sum9

//DFA 4card 的CNC PV MV 的數值，只算第一次而已
if(DFA_card_build === 0){
document.getElementById("card-fa-line-func-cnc").innerHTML = fa_line_func_sum3
document.getElementById("card-fa-line-func-sipv").innerHTML = fa_line_func_sum6
document.getElementById("card-fa-line-func-mvmp").innerHTML = fa_line_func_sum9
DFA_card_build = 1
}

}

function DFAtable2_init(){

    var table_init = $('#DFA-table2').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table2");
    var tableLen = table.rows.length;

    var fa_line_est_bond1 = 0;
    var fa_line_est_bond2 = 0;
    var fa_line_est_bond3 = 0;
    var fa_line_est_bond4 = 0;
    var fa_line_est_bond5 = 0;
    var fa_line_est_bond6 = 0;
    var fa_line_est_bond7 = 0;
    var fa_line_est_bond8 = 0;
    var fa_line_est_bond9 = 0;

    var fa_line_est_glu1 = 0;
    var fa_line_est_glu2 = 0;
    var fa_line_est_glu3 = 0;
    var fa_line_est_glu4 = 0;
    var fa_line_est_glu5 = 0;
    var fa_line_est_glu6 = 0;
    var fa_line_est_glu7 = 0;
    var fa_line_est_glu8 = 0;
    var fa_line_est_glu9 = 0;

    var fa_line_est_ass1 = 0;
    var fa_line_est_ass2 = 0;
    var fa_line_est_ass3 = 0;
    var fa_line_est_ass4 = 0;
    var fa_line_est_ass5 = 0;
    var fa_line_est_ass6 = 0;
    var fa_line_est_ass7 = 0;
    var fa_line_est_ass8 = 0;
    var fa_line_est_ass9 = 0;

    var fa_line_est_scr1 = 0;
    var fa_line_est_scr2 = 0;
    var fa_line_est_scr3 = 0;
    var fa_line_est_scr4 = 0;
    var fa_line_est_scr5 = 0;
    var fa_line_est_scr6 = 0;
    var fa_line_est_scr7 = 0;
    var fa_line_est_scr8 = 0;
    var fa_line_est_scr9 = 0;

    var fa_line_est_cab1 = 0;
    var fa_line_est_cab2 = 0;
    var fa_line_est_cab3 = 0;
    var fa_line_est_cab4 = 0;
    var fa_line_est_cab5 = 0;
    var fa_line_est_cab6 = 0;
    var fa_line_est_cab7 = 0;
    var fa_line_est_cab8 = 0;
    var fa_line_est_cab9 = 0;

    var fa_line_est_mat1 = 0;
    var fa_line_est_mat2 = 0;
    var fa_line_est_mat3 = 0;
    var fa_line_est_mat4 = 0;
    var fa_line_est_mat5 = 0;
    var fa_line_est_mat6 = 0;
    var fa_line_est_mat7 = 0;
    var fa_line_est_mat8 = 0;
    var fa_line_est_mat9 = 0;

    var fa_line_est_sum1 = 0;
    var fa_line_est_sum2 = 0;
    var fa_line_est_sum3 = 0;
    var fa_line_est_sum4 = 0;
    var fa_line_est_sum5 = 0;
    var fa_line_est_sum6 = 0;
    var fa_line_est_sum7 = 0;
    var fa_line_est_sum8 = 0;
    var fa_line_est_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_bond1 = fa_line_est_bond1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_bond4 = fa_line_est_bond4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_bond7 = fa_line_est_bond7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_bond2 = fa_line_est_bond2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_bond5 = fa_line_est_bond5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_bond8 = fa_line_est_bond8 + (coltext3 * coltext8)
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_glu1 = fa_line_est_glu1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_glu4 = fa_line_est_glu4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_glu7 = fa_line_est_glu7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_glu2 = fa_line_est_glu2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_glu5 = fa_line_est_glu5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_glu8 = fa_line_est_glu8 + (coltext3 * coltext8)
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_ass1 = fa_line_est_ass1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_ass4 = fa_line_est_ass4 + (coltext3 * coltext8)
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_ass7 = fa_line_est_ass7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_ass2 = fa_line_est_ass2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_ass5 = fa_line_est_ass5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_ass8 = fa_line_est_ass8 + (coltext3 * coltext8)
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_scr1 = fa_line_est_scr1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_scr4 = fa_line_est_scr4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_scr7 = fa_line_est_scr7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_scr2 = fa_line_est_scr2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_scr5 = fa_line_est_scr5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_scr8 = fa_line_est_scr8 + (coltext3 * coltext8)
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_cab1 = fa_line_est_cab1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_cab4 = fa_line_est_cab4 + (coltext3 * coltext8)
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_cab7 = fa_line_est_cab7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_cab2 = fa_line_est_cab2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_cab5 = fa_line_est_cab5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_cab8 = fa_line_est_cab8 + (coltext3 * coltext8)
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_mat1 = fa_line_est_mat1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_mat4 = fa_line_est_mat4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_mat7 = fa_line_est_mat7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_mat2 = fa_line_est_mat2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_mat5 = fa_line_est_mat5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_mat8 = fa_line_est_mat8 + (coltext3 * coltext8)
        }

    }
}

//FA-bond %
if(fa_line_est_bond1 ===0 || fa_line_est_bond2 ===0 ){
    fa_line_est_bond3 = 0+"%"
}
else {
    fa_line_est_bond3 = Math.round(fa_line_est_bond2/fa_line_est_bond1*100)+"%"
}

if(fa_line_est_bond4 ===0 || fa_line_est_bond5 ===0 ){
    fa_line_est_bond6 = 0+"%"
}
else {
    fa_line_est_bond6 = Math.round(fa_line_est_bond5/fa_line_est_bond4*100)+"%"
}

if(fa_line_est_bond7 ===0 || fa_line_est_bond8 ===0 ){
    fa_line_est_bond9 = 0+"%"
}
else {
    fa_line_est_bond9 = Math.round(fa_line_est_bond8/fa_line_est_bond7*100)+"%"
}

//FA-glu %
if(fa_line_est_glu1 ===0 || fa_line_est_glu2 ===0 ){
    fa_line_est_glu3 = 0+"%"
}
else {
    fa_line_est_glu3 = Math.round(fa_line_est_glu2/fa_line_est_glu1*100)+"%"
}

if(fa_line_est_glu4 ===0 || fa_line_est_glu5 ===0 ){
    fa_line_est_glu6 = 0+"%"
}
else {
    fa_line_est_glu6 = Math.round(fa_line_est_glu5/fa_line_est_glu4*100)+"%"
}

if(fa_line_est_glu7 ===0 || fa_line_est_glu8 ===0 ){
    fa_line_est_glu9 = 0+"%"
}
else {
    fa_line_est_glu9 = Math.round(fa_line_est_glu8/fa_line_est_glu7*100)+"%"
}

//FA-ass %
if(fa_line_est_ass1 ===0 || fa_line_est_ass2 ===0 ){
    fa_line_est_ass3 = 0+"%"
}
else {
    fa_line_est_ass3 = Math.round(fa_line_est_ass2/fa_line_est_ass1*100)+"%"
}

if(fa_line_est_ass4 ===0 || fa_line_est_ass5 ===0 ){
    fa_line_est_ass6 = 0+"%"
}
else {
    fa_line_est_ass6 = Math.round(fa_line_est_ass5/fa_line_est_ass4*100)+"%"
}

if(fa_line_est_ass7 ===0 || fa_line_est_ass8 ===0 ){
    fa_line_est_ass9 = 0+"%"
}
else {
    fa_line_est_ass9 = Math.round(fa_line_est_ass8/fa_line_est_ass7*100)+"%"
}

//FA-scr %
if(fa_line_est_scr1 ===0 || fa_line_est_scr2 ===0 ){
    fa_line_est_scr3 = 0+"%"
}
else {
    fa_line_est_scr3 = Math.round(fa_line_est_scr2/fa_line_est_scr1*100)+"%"
}

if(fa_line_est_scr4 ===0 || fa_line_est_scr5 ===0 ){
    fa_line_est_scr6 = 0+"%"
}
else {
    fa_line_est_scr6 = Math.round(fa_line_est_scr5/fa_line_est_scr4*100)+"%"
}

if(fa_line_est_scr7 ===0 || fa_line_est_scr8 ===0 ){
    fa_line_est_scr9 = 0+"%"
}
else {
    fa_line_est_scr9 = Math.round(fa_line_est_scr8/fa_line_est_scr7*100)+"%"
}

//FA-cab %
if(fa_line_est_cab1 ===0 || fa_line_est_cab2 ===0 ){
    fa_line_est_cab3 = 0+"%"
}
else {
    fa_line_est_cab3 = Math.round(fa_line_est_cab2/fa_line_est_cab1*100)+"%"
}

if(fa_line_est_cab4 ===0 || fa_line_est_cab5 ===0 ){
    fa_line_est_cab6 = 0+"%"
}
else {
    fa_line_est_cab6 = Math.round(fa_line_est_cab5/fa_line_est_cab4*100)+"%"
}

if(fa_line_est_cab7 ===0 || fa_line_est_cab8 ===0 ){
    fa_line_est_cab9 = 0+"%"
}
else {
    fa_line_est_cab9 = Math.round(fa_line_est_cab8/fa_line_est_cab7*100)+"%"
}

//FA-mat %
if(fa_line_est_mat1 ===0 || fa_line_est_mat2 ===0 ){
    fa_line_est_mat3 = 0+"%"
}
else {
    fa_line_est_mat3 = Math.round(fa_line_est_mat2/fa_line_est_mat1*100)+"%"
}

if(fa_line_est_mat4 ===0 || fa_line_est_mat5 ===0 ){
    fa_line_est_mat6 = 0+"%"
}
else {
    fa_line_est_mat6 = Math.round(fa_line_est_mat5/fa_line_est_mat4*100)+"%"
}

if(fa_line_est_mat7 ===0 || fa_line_est_mat8 ===0 ){
    fa_line_est_mat9 = 0+"%"
}
else {
    fa_line_est_mat9 = Math.round(fa_line_est_mat8/fa_line_est_mat7*100)+"%"
}

//FA-sum
fa_line_est_sum1 = fa_line_est_bond1+fa_line_est_glu1+fa_line_est_ass1+fa_line_est_scr1+fa_line_est_cab1+fa_line_est_mat1
fa_line_est_sum2 = fa_line_est_bond2+fa_line_est_glu2+fa_line_est_ass2+fa_line_est_scr2+fa_line_est_cab2+fa_line_est_mat2
fa_line_est_sum4 = fa_line_est_bond4+fa_line_est_glu4+fa_line_est_ass4+fa_line_est_scr4+fa_line_est_cab4+fa_line_est_mat4
fa_line_est_sum5 = fa_line_est_bond5+fa_line_est_glu5+fa_line_est_ass5+fa_line_est_scr5+fa_line_est_cab5+fa_line_est_mat5
fa_line_est_sum7 = fa_line_est_bond7+fa_line_est_glu7+fa_line_est_ass7+fa_line_est_scr7+fa_line_est_cab7+fa_line_est_mat7
fa_line_est_sum8 = fa_line_est_bond8+fa_line_est_glu8+fa_line_est_ass8+fa_line_est_scr8+fa_line_est_cab8+fa_line_est_mat8

//FA-sum %
if(fa_line_est_sum1 ===0 || fa_line_est_sum2 ===0 ){
    fa_line_est_sum3 = 0+"%"
}
else {
    fa_line_est_sum3 = Math.round(fa_line_est_sum2/fa_line_est_sum1*100)+"%"
}

if(fa_line_est_sum4 ===0 || fa_line_est_sum5 ===0 ){
    fa_line_est_sum6 = 0+"%"
}
else {
    fa_line_est_sum6 = Math.round(fa_line_est_sum5/fa_line_est_sum4*100)+"%"
}

if(fa_line_est_sum7 ===0 || fa_line_est_sum8 ===0 ){
    fa_line_est_sum9 = 0+"%"
}
else {
    fa_line_est_sum9 = Math.round(fa_line_est_sum8/fa_line_est_sum7*100)+"%"
}

//插入到HTML裡面 .toFixed(2)取道小數後2位
document.getElementById("fa-line-est-bond1").innerHTML = Number(fa_line_est_bond1.toFixed(2));
document.getElementById("fa-line-est-bond2").innerHTML = Number(fa_line_est_bond2.toFixed(2));
document.getElementById("fa-line-est-bond3").innerHTML = fa_line_est_bond3
document.getElementById("fa-line-est-bond4").innerHTML = Number(fa_line_est_bond4.toFixed(2));
document.getElementById("fa-line-est-bond5").innerHTML = Number(fa_line_est_bond5.toFixed(2));
document.getElementById("fa-line-est-bond6").innerHTML = fa_line_est_bond6
document.getElementById("fa-line-est-bond7").innerHTML = Number(fa_line_est_bond7.toFixed(2));
document.getElementById("fa-line-est-bond8").innerHTML = Number(fa_line_est_bond8.toFixed(2));
document.getElementById("fa-line-est-bond9").innerHTML = fa_line_est_bond9

document.getElementById("fa-line-est-glu1").innerHTML = Number(fa_line_est_glu1.toFixed(2));
document.getElementById("fa-line-est-glu2").innerHTML = Number(fa_line_est_glu2.toFixed(2));
document.getElementById("fa-line-est-glu3").innerHTML = fa_line_est_glu3
document.getElementById("fa-line-est-glu4").innerHTML = Number(fa_line_est_glu4.toFixed(2));
document.getElementById("fa-line-est-glu5").innerHTML = Number(fa_line_est_glu5.toFixed(2));
document.getElementById("fa-line-est-glu6").innerHTML = fa_line_est_glu6
document.getElementById("fa-line-est-glu7").innerHTML = Number(fa_line_est_glu7.toFixed(2));
document.getElementById("fa-line-est-glu8").innerHTML = Number(fa_line_est_glu8.toFixed(2));
document.getElementById("fa-line-est-glu9").innerHTML = fa_line_est_glu9

document.getElementById("fa-line-est-ass1").innerHTML = Number(fa_line_est_ass1.toFixed(2));
document.getElementById("fa-line-est-ass2").innerHTML = Number(fa_line_est_ass2.toFixed(2));
document.getElementById("fa-line-est-ass3").innerHTML = fa_line_est_ass3
document.getElementById("fa-line-est-ass4").innerHTML = Number(fa_line_est_ass4.toFixed(2));
document.getElementById("fa-line-est-ass5").innerHTML = Number(fa_line_est_ass5.toFixed(2));
document.getElementById("fa-line-est-ass6").innerHTML = fa_line_est_ass6
document.getElementById("fa-line-est-ass7").innerHTML = Number(fa_line_est_ass7.toFixed(2));
document.getElementById("fa-line-est-ass8").innerHTML = Number(fa_line_est_ass8.toFixed(2));
document.getElementById("fa-line-est-ass9").innerHTML = fa_line_est_ass9

document.getElementById("fa-line-est-scr1").innerHTML = Number(fa_line_est_scr1.toFixed(2));
document.getElementById("fa-line-est-scr2").innerHTML = Number(fa_line_est_scr2.toFixed(2));
document.getElementById("fa-line-est-scr3").innerHTML = fa_line_est_scr3
document.getElementById("fa-line-est-scr4").innerHTML = Number(fa_line_est_scr4.toFixed(2));
document.getElementById("fa-line-est-scr5").innerHTML = Number(fa_line_est_scr5.toFixed(2));
document.getElementById("fa-line-est-scr6").innerHTML = fa_line_est_scr6
document.getElementById("fa-line-est-scr7").innerHTML = Number(fa_line_est_scr7.toFixed(2));
document.getElementById("fa-line-est-scr8").innerHTML = Number(fa_line_est_scr8.toFixed(2));
document.getElementById("fa-line-est-scr9").innerHTML = fa_line_est_scr9

document.getElementById("fa-line-est-cab1").innerHTML = Number(fa_line_est_cab1.toFixed(2));
document.getElementById("fa-line-est-cab2").innerHTML = Number(fa_line_est_cab2.toFixed(2));
document.getElementById("fa-line-est-cab3").innerHTML = fa_line_est_cab3
document.getElementById("fa-line-est-cab4").innerHTML = Number(fa_line_est_cab4.toFixed(2));
document.getElementById("fa-line-est-cab5").innerHTML = Number(fa_line_est_cab5.toFixed(2));
document.getElementById("fa-line-est-cab6").innerHTML = fa_line_est_cab6
document.getElementById("fa-line-est-cab7").innerHTML = Number(fa_line_est_cab7.toFixed(2));
document.getElementById("fa-line-est-cab8").innerHTML = Number(fa_line_est_cab8.toFixed(2));
document.getElementById("fa-line-est-cab9").innerHTML = fa_line_est_cab9

document.getElementById("fa-line-est-mat1").innerHTML = Number(fa_line_est_mat1.toFixed(2));
document.getElementById("fa-line-est-mat2").innerHTML = Number(fa_line_est_mat2.toFixed(2));
document.getElementById("fa-line-est-mat3").innerHTML = fa_line_est_mat3
document.getElementById("fa-line-est-mat4").innerHTML = Number(fa_line_est_mat4.toFixed(2));
document.getElementById("fa-line-est-mat5").innerHTML = Number(fa_line_est_mat5.toFixed(2));
document.getElementById("fa-line-est-mat6").innerHTML = fa_line_est_mat6
document.getElementById("fa-line-est-mat7").innerHTML = Number(fa_line_est_mat7.toFixed(2));
document.getElementById("fa-line-est-mat8").innerHTML = Number(fa_line_est_mat8.toFixed(2));
document.getElementById("fa-line-est-mat9").innerHTML = fa_line_est_mat9

document.getElementById("fa-line-est-sum1").innerHTML = Number(fa_line_est_sum1.toFixed(2));
document.getElementById("fa-line-est-sum2").innerHTML = Number(fa_line_est_sum2.toFixed(2));
document.getElementById("fa-line-est-sum3").innerHTML = fa_line_est_sum3
document.getElementById("fa-line-est-sum4").innerHTML = Number(fa_line_est_sum4.toFixed(2));
document.getElementById("fa-line-est-sum5").innerHTML = Number(fa_line_est_sum5.toFixed(2));
document.getElementById("fa-line-est-sum6").innerHTML = fa_line_est_sum6
document.getElementById("fa-line-est-sum7").innerHTML = Number(fa_line_est_sum7.toFixed(2));
document.getElementById("fa-line-est-sum8").innerHTML = Number(fa_line_est_sum8.toFixed(2));
document.getElementById("fa-line-est-sum9").innerHTML = fa_line_est_sum9

document.getElementById("fa-line-est-cnc").innerHTML = fa_line_est_sum3
document.getElementById("fa-line-est-sipv").innerHTML = fa_line_est_sum6
document.getElementById("fa-line-est-mvmp").innerHTML = fa_line_est_sum9

}

function DFAtable7_init(){

    var table_init = $('#DFA-table7').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table7");
    var tableLen = table.rows.length;

////////DFA issue1//////////////
    var fa_line_func_bond1 = 0;
    var fa_line_func_bond2 = 0;
    var fa_line_func_bond3 = 0;
    var fa_line_func_bond4 = 0;
    var fa_line_func_bond5 = 0;
    var fa_line_func_bond6 = 0;
    var fa_line_func_bond7 = 0;
    var fa_line_func_bond8 = 0;
    var fa_line_func_bond9 = 0;

    var fa_line_func_glu1 = 0;
    var fa_line_func_glu2 = 0;
    var fa_line_func_glu3 = 0;
    var fa_line_func_glu4 = 0;
    var fa_line_func_glu5 = 0;
    var fa_line_func_glu6 = 0;
    var fa_line_func_glu7 = 0;
    var fa_line_func_glu8 = 0;
    var fa_line_func_glu9 = 0;

    var fa_line_func_ass1 = 0;
    var fa_line_func_ass2 = 0;
    var fa_line_func_ass3 = 0;
    var fa_line_func_ass4 = 0;
    var fa_line_func_ass5 = 0;
    var fa_line_func_ass6 = 0;
    var fa_line_func_ass7 = 0;
    var fa_line_func_ass8 = 0;
    var fa_line_func_ass9 = 0;

    var fa_line_func_scr1 = 0;
    var fa_line_func_scr2 = 0;
    var fa_line_func_scr3 = 0;
    var fa_line_func_scr4 = 0;
    var fa_line_func_scr5 = 0;
    var fa_line_func_scr6 = 0;
    var fa_line_func_scr7 = 0;
    var fa_line_func_scr8 = 0;
    var fa_line_func_scr9 = 0;

    var fa_line_func_cab1 = 0;
    var fa_line_func_cab2 = 0;
    var fa_line_func_cab3 = 0;
    var fa_line_func_cab4 = 0;
    var fa_line_func_cab5 = 0;
    var fa_line_func_cab6 = 0;
    var fa_line_func_cab7 = 0;
    var fa_line_func_cab8 = 0;
    var fa_line_func_cab9 = 0;

    var fa_line_func_mat1 = 0;
    var fa_line_func_mat2 = 0;
    var fa_line_func_mat3 = 0;
    var fa_line_func_mat4 = 0;
    var fa_line_func_mat5 = 0;
    var fa_line_func_mat6 = 0;
    var fa_line_func_mat7 = 0;
    var fa_line_func_mat8 = 0;
    var fa_line_func_mat9 = 0;

    var fa_line_func_sum1 = 0;
    var fa_line_func_sum2 = 0;
    var fa_line_func_sum3 = 0;
    var fa_line_func_sum4 = 0;
    var fa_line_func_sum5 = 0;
    var fa_line_func_sum6 = 0;
    var fa_line_func_sum7 = 0;
    var fa_line_func_sum8 = 0;
    var fa_line_func_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_bond1 = fa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_bond4 = fa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_bond7 = fa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_bond2 = fa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_bond5 = fa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_bond8 = fa_line_func_bond8 + coltext8
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_glu1 = fa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_glu4 = fa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_glu7 = fa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_glu2 = fa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_glu5 = fa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_glu8 = fa_line_func_glu8 + coltext8
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_ass1 = fa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_ass4 = fa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_ass7 = fa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_ass2 = fa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_ass5 = fa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_ass8 = fa_line_func_ass8 + coltext8
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_scr1 = fa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_scr4 = fa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_scr7 = fa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_scr2 = fa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_scr5 = fa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_scr8 = fa_line_func_scr8 + coltext8
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_cab1 = fa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_cab4 = fa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_cab7 = fa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_cab2 = fa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_cab5 = fa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_cab8 = fa_line_func_cab8 + coltext8
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_func_mat1 = fa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_func_mat4 = fa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_func_mat7 = fa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_line_func_mat2 = fa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_line_func_mat5 = fa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_line_func_mat8 = fa_line_func_mat8 + coltext8
        }

    }
}


//FA-sum
fa_line_func_sum1 = fa_line_func_bond1+fa_line_func_glu1+fa_line_func_ass1+fa_line_func_scr1+fa_line_func_cab1+fa_line_func_mat1
fa_line_func_sum2 = fa_line_func_bond2+fa_line_func_glu2+fa_line_func_ass2+fa_line_func_scr2+fa_line_func_cab2+fa_line_func_mat2
fa_line_func_sum4 = fa_line_func_bond4+fa_line_func_glu4+fa_line_func_ass4+fa_line_func_scr4+fa_line_func_cab4+fa_line_func_mat4
fa_line_func_sum5 = fa_line_func_bond5+fa_line_func_glu5+fa_line_func_ass5+fa_line_func_scr5+fa_line_func_cab5+fa_line_func_mat5
fa_line_func_sum7 = fa_line_func_bond7+fa_line_func_glu7+fa_line_func_ass7+fa_line_func_scr7+fa_line_func_cab7+fa_line_func_mat7
fa_line_func_sum8 = fa_line_func_bond8+fa_line_func_glu8+fa_line_func_ass8+fa_line_func_scr8+fa_line_func_cab8+fa_line_func_mat8



////////DFA issue2//////////////
    var fa_line_est_bond1 = 0;
    var fa_line_est_bond2 = 0;
    var fa_line_est_bond3 = 0;
    var fa_line_est_bond4 = 0;
    var fa_line_est_bond5 = 0;
    var fa_line_est_bond6 = 0;
    var fa_line_est_bond7 = 0;
    var fa_line_est_bond8 = 0;
    var fa_line_est_bond9 = 0;

    var fa_line_est_glu1 = 0;
    var fa_line_est_glu2 = 0;
    var fa_line_est_glu3 = 0;
    var fa_line_est_glu4 = 0;
    var fa_line_est_glu5 = 0;
    var fa_line_est_glu6 = 0;
    var fa_line_est_glu7 = 0;
    var fa_line_est_glu8 = 0;
    var fa_line_est_glu9 = 0;

    var fa_line_est_ass1 = 0;
    var fa_line_est_ass2 = 0;
    var fa_line_est_ass3 = 0;
    var fa_line_est_ass4 = 0;
    var fa_line_est_ass5 = 0;
    var fa_line_est_ass6 = 0;
    var fa_line_est_ass7 = 0;
    var fa_line_est_ass8 = 0;
    var fa_line_est_ass9 = 0;

    var fa_line_est_scr1 = 0;
    var fa_line_est_scr2 = 0;
    var fa_line_est_scr3 = 0;
    var fa_line_est_scr4 = 0;
    var fa_line_est_scr5 = 0;
    var fa_line_est_scr6 = 0;
    var fa_line_est_scr7 = 0;
    var fa_line_est_scr8 = 0;
    var fa_line_est_scr9 = 0;

    var fa_line_est_cab1 = 0;
    var fa_line_est_cab2 = 0;
    var fa_line_est_cab3 = 0;
    var fa_line_est_cab4 = 0;
    var fa_line_est_cab5 = 0;
    var fa_line_est_cab6 = 0;
    var fa_line_est_cab7 = 0;
    var fa_line_est_cab8 = 0;
    var fa_line_est_cab9 = 0;

    var fa_line_est_mat1 = 0;
    var fa_line_est_mat2 = 0;
    var fa_line_est_mat3 = 0;
    var fa_line_est_mat4 = 0;
    var fa_line_est_mat5 = 0;
    var fa_line_est_mat6 = 0;
    var fa_line_est_mat7 = 0;
    var fa_line_est_mat8 = 0;
    var fa_line_est_mat9 = 0;

    var fa_line_est_sum1 = 0;
    var fa_line_est_sum2 = 0;
    var fa_line_est_sum3 = 0;
    var fa_line_est_sum4 = 0;
    var fa_line_est_sum5 = 0;
    var fa_line_est_sum6 = 0;
    var fa_line_est_sum7 = 0;
    var fa_line_est_sum8 = 0;
    var fa_line_est_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_bond1 = fa_line_est_bond1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_bond4 = fa_line_est_bond4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_bond7 = fa_line_est_bond7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_bond2 = fa_line_est_bond2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_bond5 = fa_line_est_bond5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_bond8 = fa_line_est_bond8 + (coltext3 * coltext8)
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_glu1 = fa_line_est_glu1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_glu4 = fa_line_est_glu4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_glu7 = fa_line_est_glu7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_glu2 = fa_line_est_glu2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_glu5 = fa_line_est_glu5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_glu8 = fa_line_est_glu8 + (coltext3 * coltext8)
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_ass1 = fa_line_est_ass1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_ass4 = fa_line_est_ass4 + (coltext3 * coltext8)
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_ass7 = fa_line_est_ass7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_ass2 = fa_line_est_ass2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_ass5 = fa_line_est_ass5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_ass8 = fa_line_est_ass8 + (coltext3 * coltext8)
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_scr1 = fa_line_est_scr1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_scr4 = fa_line_est_scr4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_scr7 = fa_line_est_scr7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_scr2 = fa_line_est_scr2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_scr5 = fa_line_est_scr5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_scr8 = fa_line_est_scr8 + (coltext3 * coltext8)
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_cab1 = fa_line_est_cab1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_cab4 = fa_line_est_cab4 + (coltext3 * coltext8)
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_cab7 = fa_line_est_cab7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_cab2 = fa_line_est_cab2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_cab5 = fa_line_est_cab5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_cab8 = fa_line_est_cab8 + (coltext3 * coltext8)
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_line_est_mat1 = fa_line_est_mat1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_line_est_mat4 = fa_line_est_mat4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_line_est_mat7 = fa_line_est_mat7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_line_est_mat2 = fa_line_est_mat2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_line_est_mat5 = fa_line_est_mat5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_line_est_mat8 = fa_line_est_mat8 + (coltext3 * coltext8)
        }

    }
}


//FA-sum
fa_line_est_sum1 = fa_line_est_bond1+fa_line_est_glu1+fa_line_est_ass1+fa_line_est_scr1+fa_line_est_cab1+fa_line_est_mat1
fa_line_est_sum2 = fa_line_est_bond2+fa_line_est_glu2+fa_line_est_ass2+fa_line_est_scr2+fa_line_est_cab2+fa_line_est_mat2
fa_line_est_sum4 = fa_line_est_bond4+fa_line_est_glu4+fa_line_est_ass4+fa_line_est_scr4+fa_line_est_cab4+fa_line_est_mat4
fa_line_est_sum5 = fa_line_est_bond5+fa_line_est_glu5+fa_line_est_ass5+fa_line_est_scr5+fa_line_est_cab5+fa_line_est_mat5
fa_line_est_sum7 = fa_line_est_bond7+fa_line_est_glu7+fa_line_est_ass7+fa_line_est_scr7+fa_line_est_cab7+fa_line_est_mat7
fa_line_est_sum8 = fa_line_est_bond8+fa_line_est_glu8+fa_line_est_ass8+fa_line_est_scr8+fa_line_est_cab8+fa_line_est_mat8


//chart
    if(DFA_bar7_build === 1){
    DFA_bar7.destroy();
    }

//DFA-bar7
DFA_bar7_build=1
var ctx = document.getElementById("DFA-bar7");
 DFA_bar7 = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['CNC','SI-PV','MV/MP'],
            datasets: [

                {
                    label: 'Function',
                    data:[fa_line_func_sum1,fa_line_func_sum4,fa_line_func_sum7],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'Estimated HC',
                    data: [Number(fa_line_est_sum1.toFixed(2)),Number(fa_line_est_sum4.toFixed(2)),Number(fa_line_est_sum7.toFixed(2))],
                    stack: 'Stack 1',
                    hoverBorderWidth: 4,
                }

            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'OverAll',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10,
            }
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
            },
             colorschemes: {
        scheme: DFA_bar7_colors
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
                    //stepSize: 1
                }
            }]
        }
    }
});

    if(DFA_bar7_2_build === 1){
    DFA_bar7_2.destroy();
    }

//DFA-bar7-2
DFA_bar7_2_build=1
var ctx = document.getElementById("DFA-bar7-2");
 DFA_bar7_2 = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['Bonding','Gluing','Assembly','Screwing','Cables Assembly','Material Scan & link'],
            datasets: [

                {
                    label: 'Function',
                    data:[fa_line_func_bond1,fa_line_func_glu1,fa_line_func_ass1,fa_line_func_scr1,fa_line_func_cab1,fa_line_func_mat1],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'Estimated HC',
                    data: [Number(fa_line_est_bond1.toFixed(2)),Number(fa_line_est_glu1.toFixed(2)),Number(fa_line_est_ass1.toFixed(2)),Number(fa_line_est_scr1.toFixed(2)),Number(fa_line_est_cab1.toFixed(2)),Number(fa_line_est_mat1.toFixed(2))],
                    stack: 'Stack 1',
                    hoverBorderWidth: 4,
                }
            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'CNC',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10,
            }
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
            },

             colorschemes: {
        scheme: DFA_bar7_colors
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
                    //stepSize: 1
                }
            }]
        }
    }
});

    if(DFA_bar7_3_build === 1){
    DFA_bar7_3.destroy();
    }

//DFA-bar7-3
DFA_bar7_3_build=1
var ctx = document.getElementById("DFA-bar7-3");
 DFA_bar7_3 = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['Bonding','Gluing','Assembly','Screwing','Cables Assembly','Material Scan & link'],
            datasets: [

                {
                    label: 'Function',
                    data:[fa_line_func_bond4,fa_line_func_glu4,fa_line_func_ass4,fa_line_func_scr4,fa_line_func_cab4,fa_line_func_mat4],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'Estimated HC',
                    data: [Number(fa_line_est_bond4.toFixed(2)),Number(fa_line_est_glu4.toFixed(2)),Number(fa_line_est_ass4.toFixed(2)),Number(fa_line_est_scr4.toFixed(2)),Number(fa_line_est_cab4.toFixed(2)),Number(fa_line_est_mat4.toFixed(2))],
                    stack: 'Stack 1',
                    hoverBorderWidth: 4,
                }
            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'SI-PV',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10,
            }
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
            },
             colorschemes: {
        scheme: DFA_bar7_colors
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
                    //stepSize: 1
                }
            }]
        }
    }
});

    if(DFA_bar7_4_build === 1){
    DFA_bar7_4.destroy();
    }

//DFA-bar7-4
DFA_bar7_4_build=1
var ctx = document.getElementById("DFA-bar7-4");
 DFA_bar7_4 = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['Bonding','Gluing','Assembly','Screwing','Cables Assembly','Material Scan & link'],
            datasets: [

                {
                    label: 'Function',
                    data:[fa_line_func_bond7,fa_line_func_glu7,fa_line_func_ass7,fa_line_func_scr7,fa_line_func_cab7,fa_line_func_mat7],
                    stack: 'Stack 0',
                    hoverBorderWidth: 4,
                },

                  {
                    label: 'Estimated HC',
                    data: [Number(fa_line_est_bond7.toFixed(2)),Number(fa_line_est_glu7.toFixed(2)),Number(fa_line_est_ass7.toFixed(2)),Number(fa_line_est_scr7.toFixed(2)),Number(fa_line_est_cab7.toFixed(2)),Number(fa_line_est_mat7.toFixed(2))],
                    stack: 'Stack 1',
                    hoverBorderWidth: 4,
                }
            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'MV/MP',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        position: "bottom",
          labels: {
            fontColor: "black",
            fontSize: 10,
            }
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
            },

             colorschemes: {
        scheme: DFA_bar7_colors
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
                    //stepSize: 1
                }
            }]
        }
    }
});

}

function DFAtable8_init(){
//radar dataset1
   var table_init = $('#DFA-table8').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table8");
    var tableLen = table.rows.length;

////////DFA issue1//////////////
    var radar1_fa_line_func_bond1 = 0;
    var radar1_fa_line_func_bond2 = 0;
    var radar1_fa_line_func_bond3 = 0;
    var radar1_fa_line_func_bond4 = 0;
    var radar1_fa_line_func_bond5 = 0;
    var radar1_fa_line_func_bond6 = 0;
    var radar1_fa_line_func_bond7 = 0;
    var radar1_fa_line_func_bond8 = 0;
    var radar1_fa_line_func_bond9 = 0;

    var radar1_fa_line_func_glu1 = 0;
    var radar1_fa_line_func_glu2 = 0;
    var radar1_fa_line_func_glu3 = 0;
    var radar1_fa_line_func_glu4 = 0;
    var radar1_fa_line_func_glu5 = 0;
    var radar1_fa_line_func_glu6 = 0;
    var radar1_fa_line_func_glu7 = 0;
    var radar1_fa_line_func_glu8 = 0;
    var radar1_fa_line_func_glu9 = 0;

    var radar1_fa_line_func_ass1 = 0;
    var radar1_fa_line_func_ass2 = 0;
    var radar1_fa_line_func_ass3 = 0;
    var radar1_fa_line_func_ass4 = 0;
    var radar1_fa_line_func_ass5 = 0;
    var radar1_fa_line_func_ass6 = 0;
    var radar1_fa_line_func_ass7 = 0;
    var radar1_fa_line_func_ass8 = 0;
    var radar1_fa_line_func_ass9 = 0;

    var radar1_fa_line_func_scr1 = 0;
    var radar1_fa_line_func_scr2 = 0;
    var radar1_fa_line_func_scr3 = 0;
    var radar1_fa_line_func_scr4 = 0;
    var radar1_fa_line_func_scr5 = 0;
    var radar1_fa_line_func_scr6 = 0;
    var radar1_fa_line_func_scr7 = 0;
    var radar1_fa_line_func_scr8 = 0;
    var radar1_fa_line_func_scr9 = 0;

    var radar1_fa_line_func_cab1 = 0;
    var radar1_fa_line_func_cab2 = 0;
    var radar1_fa_line_func_cab3 = 0;
    var radar1_fa_line_func_cab4 = 0;
    var radar1_fa_line_func_cab5 = 0;
    var radar1_fa_line_func_cab6 = 0;
    var radar1_fa_line_func_cab7 = 0;
    var radar1_fa_line_func_cab8 = 0;
    var radar1_fa_line_func_cab9 = 0;

    var radar1_fa_line_func_mat1 = 0;
    var radar1_fa_line_func_mat2 = 0;
    var radar1_fa_line_func_mat3 = 0;
    var radar1_fa_line_func_mat4 = 0;
    var radar1_fa_line_func_mat5 = 0;
    var radar1_fa_line_func_mat6 = 0;
    var radar1_fa_line_func_mat7 = 0;
    var radar1_fa_line_func_mat8 = 0;
    var radar1_fa_line_func_mat9 = 0;

    var radar1_fa_line_func_sum_bond = 0;
    var radar1_fa_line_func_sum_glu = 0;
    var radar1_fa_line_func_sum_ass = 0;
    var radar1_fa_line_func_sum_scr = 0;
    var radar1_fa_line_func_sum_cab = 0;
    var radar1_fa_line_func_sum_mat = 0;


for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_bond1 = radar1_fa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_bond4 = radar1_fa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_bond7 = radar1_fa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_bond2 = radar1_fa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_bond5 = radar1_fa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_bond8 = radar1_fa_line_func_bond8 + coltext8
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_glu1 = radar1_fa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_glu4 = radar1_fa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_glu7 = radar1_fa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_glu2 = radar1_fa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_glu5 = radar1_fa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_glu8 = radar1_fa_line_func_glu8 + coltext8
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_ass1 = radar1_fa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_ass4 = radar1_fa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_ass7 = radar1_fa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_ass2 = radar1_fa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_ass5 = radar1_fa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_ass8 = radar1_fa_line_func_ass8 + coltext8
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_scr1 = radar1_fa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_scr4 = radar1_fa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_scr7 = radar1_fa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_scr2 = radar1_fa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_scr5 = radar1_fa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_scr8 = radar1_fa_line_func_scr8 + coltext8
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_cab1 = radar1_fa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_cab4 = radar1_fa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_cab7 = radar1_fa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_cab2 = radar1_fa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_cab5 = radar1_fa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_cab8 = radar1_fa_line_func_cab8 + coltext8
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_mat1 = radar1_fa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_mat4 = radar1_fa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_mat7 = radar1_fa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_mat2 = radar1_fa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_mat5 = radar1_fa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_mat8 = radar1_fa_line_func_mat8 + coltext8
        }
    }
}

//FA-sum_radar
radar1_fa_line_func_sum_bond = radar1_fa_line_func_bond1+radar1_fa_line_func_bond4+radar1_fa_line_func_bond7
radar1_fa_line_func_sum_glu = radar1_fa_line_func_glu1+radar1_fa_line_func_glu4+radar1_fa_line_func_glu7
radar1_fa_line_func_sum_ass = radar1_fa_line_func_ass1+radar1_fa_line_func_ass4+radar1_fa_line_func_ass7
radar1_fa_line_func_sum_scr = radar1_fa_line_func_scr1+radar1_fa_line_func_scr4+radar1_fa_line_func_scr7
radar1_fa_line_func_sum_cab = radar1_fa_line_func_cab1+radar1_fa_line_func_cab4+radar1_fa_line_func_cab7
radar1_fa_line_func_sum_mat = radar1_fa_line_func_mat1+radar1_fa_line_func_mat4+radar1_fa_line_func_mat7

//radar dataset2
   var table_init = $('#DFA-table8-2').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table9");
    var tableLen = table.rows.length;

////////DFA issue1//////////////
    var radar2_fa_line_func_bond1 = 0;
    var radar2_fa_line_func_bond2 = 0;
    var radar2_fa_line_func_bond3 = 0;
    var radar2_fa_line_func_bond4 = 0;
    var radar2_fa_line_func_bond5 = 0;
    var radar2_fa_line_func_bond6 = 0;
    var radar2_fa_line_func_bond7 = 0;
    var radar2_fa_line_func_bond8 = 0;
    var radar2_fa_line_func_bond9 = 0;

    var radar2_fa_line_func_glu1 = 0;
    var radar2_fa_line_func_glu2 = 0;
    var radar2_fa_line_func_glu3 = 0;
    var radar2_fa_line_func_glu4 = 0;
    var radar2_fa_line_func_glu5 = 0;
    var radar2_fa_line_func_glu6 = 0;
    var radar2_fa_line_func_glu7 = 0;
    var radar2_fa_line_func_glu8 = 0;
    var radar2_fa_line_func_glu9 = 0;

    var radar2_fa_line_func_ass1 = 0;
    var radar2_fa_line_func_ass2 = 0;
    var radar2_fa_line_func_ass3 = 0;
    var radar2_fa_line_func_ass4 = 0;
    var radar2_fa_line_func_ass5 = 0;
    var radar2_fa_line_func_ass6 = 0;
    var radar2_fa_line_func_ass7 = 0;
    var radar2_fa_line_func_ass8 = 0;
    var radar2_fa_line_func_ass9 = 0;

    var radar2_fa_line_func_scr1 = 0;
    var radar2_fa_line_func_scr2 = 0;
    var radar2_fa_line_func_scr3 = 0;
    var radar2_fa_line_func_scr4 = 0;
    var radar2_fa_line_func_scr5 = 0;
    var radar2_fa_line_func_scr6 = 0;
    var radar2_fa_line_func_scr7 = 0;
    var radar2_fa_line_func_scr8 = 0;
    var radar2_fa_line_func_scr9 = 0;

    var radar2_fa_line_func_cab1 = 0;
    var radar2_fa_line_func_cab2 = 0;
    var radar2_fa_line_func_cab3 = 0;
    var radar2_fa_line_func_cab4 = 0;
    var radar2_fa_line_func_cab5 = 0;
    var radar2_fa_line_func_cab6 = 0;
    var radar2_fa_line_func_cab7 = 0;
    var radar2_fa_line_func_cab8 = 0;
    var radar2_fa_line_func_cab9 = 0;

    var radar2_fa_line_func_mat1 = 0;
    var radar2_fa_line_func_mat2 = 0;
    var radar2_fa_line_func_mat3 = 0;
    var radar2_fa_line_func_mat4 = 0;
    var radar2_fa_line_func_mat5 = 0;
    var radar2_fa_line_func_mat6 = 0;
    var radar2_fa_line_func_mat7 = 0;
    var radar2_fa_line_func_mat8 = 0;
    var radar2_fa_line_func_mat9 = 0;

    var radar2_fa_line_func_sum_bond = 0;
    var radar2_fa_line_func_sum_glu = 0;
    var radar2_fa_line_func_sum_ass = 0;
    var radar2_fa_line_func_sum_scr = 0;
    var radar2_fa_line_func_sum_cab = 0;
    var radar2_fa_line_func_sum_mat = 0;


for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_bond1 = radar2_fa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_bond4 = radar2_fa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_bond7 = radar2_fa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_bond2 = radar2_fa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_bond5 = radar2_fa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_bond8 = radar2_fa_line_func_bond8 + coltext8
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_glu1 = radar2_fa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_glu4 = radar2_fa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_glu7 = radar2_fa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_glu2 = radar2_fa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_glu5 = radar2_fa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_glu8 = radar2_fa_line_func_glu8 + coltext8
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_ass1 = radar2_fa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_ass4 = radar2_fa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_ass7 = radar2_fa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_ass2 = radar2_fa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_ass5 = radar2_fa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_ass8 = radar2_fa_line_func_ass8 + coltext8
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_scr1 = radar2_fa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_scr4 = radar2_fa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_scr7 = radar2_fa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_scr2 = radar2_fa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_scr5 = radar2_fa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_scr8 = radar2_fa_line_func_scr8 + coltext8
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_cab1 = radar2_fa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_cab4 = radar2_fa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_cab7 = radar2_fa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_cab2 = radar2_fa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_cab5 = radar2_fa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_cab8 = radar2_fa_line_func_cab8 + coltext8
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_mat1 = radar2_fa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_mat4 = radar2_fa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_mat7 = radar2_fa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_mat2 = radar2_fa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_mat5 = radar2_fa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_mat8 = radar2_fa_line_func_mat8 + coltext8
        }
    }
}

//FA-sum_radar
radar2_fa_line_func_sum_bond = radar2_fa_line_func_bond1+radar2_fa_line_func_bond4+radar2_fa_line_func_bond7
radar2_fa_line_func_sum_glu = radar2_fa_line_func_glu1+radar2_fa_line_func_glu4+radar2_fa_line_func_glu7
radar2_fa_line_func_sum_ass = radar2_fa_line_func_ass1+radar2_fa_line_func_ass4+radar2_fa_line_func_ass7
radar2_fa_line_func_sum_scr = radar2_fa_line_func_scr1+radar2_fa_line_func_scr4+radar2_fa_line_func_scr7
radar2_fa_line_func_sum_cab = radar2_fa_line_func_cab1+radar2_fa_line_func_cab4+radar2_fa_line_func_cab7
radar2_fa_line_func_sum_mat = radar2_fa_line_func_mat1+radar2_fa_line_func_mat4+radar2_fa_line_func_mat7

//DFA radar
    if(DFA_radar8_build === 1){
    DFA_radar8.destroy();
    }

DFA_radar8_build=1
var ctx = document.getElementById("DFA-radar8");
 DFA_radar8 = new Chart(ctx, {
   //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
  type: 'radar',
    data: {
        labels: ["Bonding","Gluing","Assembly","Screwing","Cables Assembly","Material Scan & link"],
    datasets: [
                {
                    label: 'Dataset1',
                    data: [radar1_fa_line_func_sum_bond,radar1_fa_line_func_sum_glu,radar1_fa_line_func_sum_ass,radar1_fa_line_func_sum_scr,radar1_fa_line_func_sum_cab,radar1_fa_line_func_sum_mat],
                    hoverBorderWidth: 4,
                },
                {
                    label: 'Dataset2',
                    data: [radar2_fa_line_func_sum_bond,radar2_fa_line_func_sum_glu,radar2_fa_line_func_sum_ass,radar2_fa_line_func_sum_scr,radar2_fa_line_func_sum_cab,radar2_fa_line_func_sum_mat],
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
           datalabels: {
               color: 'transparent',
            },

             colorschemes: {
        scheme: DFA_radar8_colors
      }
    }
  }
});

}

function DFAtable9_init(){
//radar dataset1
   var table_init = $('#DFA-table9').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table9");
    var tableLen = table.rows.length;

////////DFA issue1//////////////
    var radar1_fa_line_func_bond1 = 0;
    var radar1_fa_line_func_bond2 = 0;
    var radar1_fa_line_func_bond3 = 0;
    var radar1_fa_line_func_bond4 = 0;
    var radar1_fa_line_func_bond5 = 0;
    var radar1_fa_line_func_bond6 = 0;
    var radar1_fa_line_func_bond7 = 0;
    var radar1_fa_line_func_bond8 = 0;
    var radar1_fa_line_func_bond9 = 0;

    var radar1_fa_line_func_glu1 = 0;
    var radar1_fa_line_func_glu2 = 0;
    var radar1_fa_line_func_glu3 = 0;
    var radar1_fa_line_func_glu4 = 0;
    var radar1_fa_line_func_glu5 = 0;
    var radar1_fa_line_func_glu6 = 0;
    var radar1_fa_line_func_glu7 = 0;
    var radar1_fa_line_func_glu8 = 0;
    var radar1_fa_line_func_glu9 = 0;

    var radar1_fa_line_func_ass1 = 0;
    var radar1_fa_line_func_ass2 = 0;
    var radar1_fa_line_func_ass3 = 0;
    var radar1_fa_line_func_ass4 = 0;
    var radar1_fa_line_func_ass5 = 0;
    var radar1_fa_line_func_ass6 = 0;
    var radar1_fa_line_func_ass7 = 0;
    var radar1_fa_line_func_ass8 = 0;
    var radar1_fa_line_func_ass9 = 0;

    var radar1_fa_line_func_scr1 = 0;
    var radar1_fa_line_func_scr2 = 0;
    var radar1_fa_line_func_scr3 = 0;
    var radar1_fa_line_func_scr4 = 0;
    var radar1_fa_line_func_scr5 = 0;
    var radar1_fa_line_func_scr6 = 0;
    var radar1_fa_line_func_scr7 = 0;
    var radar1_fa_line_func_scr8 = 0;
    var radar1_fa_line_func_scr9 = 0;

    var radar1_fa_line_func_cab1 = 0;
    var radar1_fa_line_func_cab2 = 0;
    var radar1_fa_line_func_cab3 = 0;
    var radar1_fa_line_func_cab4 = 0;
    var radar1_fa_line_func_cab5 = 0;
    var radar1_fa_line_func_cab6 = 0;
    var radar1_fa_line_func_cab7 = 0;
    var radar1_fa_line_func_cab8 = 0;
    var radar1_fa_line_func_cab9 = 0;

    var radar1_fa_line_func_mat1 = 0;
    var radar1_fa_line_func_mat2 = 0;
    var radar1_fa_line_func_mat3 = 0;
    var radar1_fa_line_func_mat4 = 0;
    var radar1_fa_line_func_mat5 = 0;
    var radar1_fa_line_func_mat6 = 0;
    var radar1_fa_line_func_mat7 = 0;
    var radar1_fa_line_func_mat8 = 0;
    var radar1_fa_line_func_mat9 = 0;

    var radar1_fa_line_func_sum_bond = 0;
    var radar1_fa_line_func_sum_glu = 0;
    var radar1_fa_line_func_sum_ass = 0;
    var radar1_fa_line_func_sum_scr = 0;
    var radar1_fa_line_func_sum_cab = 0;
    var radar1_fa_line_func_sum_mat = 0;


for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_bond1 = radar1_fa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_bond4 = radar1_fa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_bond7 = radar1_fa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_bond2 = radar1_fa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_bond5 = radar1_fa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_bond8 = radar1_fa_line_func_bond8 + coltext8
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_glu1 = radar1_fa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_glu4 = radar1_fa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_glu7 = radar1_fa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_glu2 = radar1_fa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_glu5 = radar1_fa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_glu8 = radar1_fa_line_func_glu8 + coltext8
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_ass1 = radar1_fa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_ass4 = radar1_fa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_ass7 = radar1_fa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_ass2 = radar1_fa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_ass5 = radar1_fa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_ass8 = radar1_fa_line_func_ass8 + coltext8
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_scr1 = radar1_fa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_scr4 = radar1_fa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_scr7 = radar1_fa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_scr2 = radar1_fa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_scr5 = radar1_fa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_scr8 = radar1_fa_line_func_scr8 + coltext8
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_cab1 = radar1_fa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_cab4 = radar1_fa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_cab7 = radar1_fa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_cab2 = radar1_fa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_cab5 = radar1_fa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_cab8 = radar1_fa_line_func_cab8 + coltext8
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar1_fa_line_func_mat1 = radar1_fa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar1_fa_line_func_mat4 = radar1_fa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar1_fa_line_func_mat7 = radar1_fa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            radar1_fa_line_func_mat2 = radar1_fa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            radar1_fa_line_func_mat5 = radar1_fa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            radar1_fa_line_func_mat8 = radar1_fa_line_func_mat8 + coltext8
        }
    }
}

//FA-sum_radar
radar1_fa_line_func_sum_bond = radar1_fa_line_func_bond1+radar1_fa_line_func_bond4+radar1_fa_line_func_bond7
radar1_fa_line_func_sum_glu = radar1_fa_line_func_glu1+radar1_fa_line_func_glu4+radar1_fa_line_func_glu7
radar1_fa_line_func_sum_ass = radar1_fa_line_func_ass1+radar1_fa_line_func_ass4+radar1_fa_line_func_ass7
radar1_fa_line_func_sum_scr = radar1_fa_line_func_scr1+radar1_fa_line_func_scr4+radar1_fa_line_func_scr7
radar1_fa_line_func_sum_cab = radar1_fa_line_func_cab1+radar1_fa_line_func_cab4+radar1_fa_line_func_cab7
radar1_fa_line_func_sum_mat = radar1_fa_line_func_mat1+radar1_fa_line_func_mat4+radar1_fa_line_func_mat7

//radar dataset2
   var table_init = $('#DFA-table9-2').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table9-2");
    var tableLen = table.rows.length;

////////DFA issue1//////////////
    var radar2_fa_line_func_bond1 = 0;
    var radar2_fa_line_func_bond2 = 0;
    var radar2_fa_line_func_bond3 = 0;
    var radar2_fa_line_func_bond4 = 0;
    var radar2_fa_line_func_bond5 = 0;
    var radar2_fa_line_func_bond6 = 0;
    var radar2_fa_line_func_bond7 = 0;
    var radar2_fa_line_func_bond8 = 0;
    var radar2_fa_line_func_bond9 = 0;

    var radar2_fa_line_func_glu1 = 0;
    var radar2_fa_line_func_glu2 = 0;
    var radar2_fa_line_func_glu3 = 0;
    var radar2_fa_line_func_glu4 = 0;
    var radar2_fa_line_func_glu5 = 0;
    var radar2_fa_line_func_glu6 = 0;
    var radar2_fa_line_func_glu7 = 0;
    var radar2_fa_line_func_glu8 = 0;
    var radar2_fa_line_func_glu9 = 0;

    var radar2_fa_line_func_ass1 = 0;
    var radar2_fa_line_func_ass2 = 0;
    var radar2_fa_line_func_ass3 = 0;
    var radar2_fa_line_func_ass4 = 0;
    var radar2_fa_line_func_ass5 = 0;
    var radar2_fa_line_func_ass6 = 0;
    var radar2_fa_line_func_ass7 = 0;
    var radar2_fa_line_func_ass8 = 0;
    var radar2_fa_line_func_ass9 = 0;

    var radar2_fa_line_func_scr1 = 0;
    var radar2_fa_line_func_scr2 = 0;
    var radar2_fa_line_func_scr3 = 0;
    var radar2_fa_line_func_scr4 = 0;
    var radar2_fa_line_func_scr5 = 0;
    var radar2_fa_line_func_scr6 = 0;
    var radar2_fa_line_func_scr7 = 0;
    var radar2_fa_line_func_scr8 = 0;
    var radar2_fa_line_func_scr9 = 0;

    var radar2_fa_line_func_cab1 = 0;
    var radar2_fa_line_func_cab2 = 0;
    var radar2_fa_line_func_cab3 = 0;
    var radar2_fa_line_func_cab4 = 0;
    var radar2_fa_line_func_cab5 = 0;
    var radar2_fa_line_func_cab6 = 0;
    var radar2_fa_line_func_cab7 = 0;
    var radar2_fa_line_func_cab8 = 0;
    var radar2_fa_line_func_cab9 = 0;

    var radar2_fa_line_func_mat1 = 0;
    var radar2_fa_line_func_mat2 = 0;
    var radar2_fa_line_func_mat3 = 0;
    var radar2_fa_line_func_mat4 = 0;
    var radar2_fa_line_func_mat5 = 0;
    var radar2_fa_line_func_mat6 = 0;
    var radar2_fa_line_func_mat7 = 0;
    var radar2_fa_line_func_mat8 = 0;
    var radar2_fa_line_func_mat9 = 0;

    var radar2_fa_line_func_sum_bond = 0;
    var radar2_fa_line_func_sum_glu = 0;
    var radar2_fa_line_func_sum_ass = 0;
    var radar2_fa_line_func_sum_scr = 0;
    var radar2_fa_line_func_sum_cab = 0;
    var radar2_fa_line_func_sum_mat = 0;


for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-bond
    if (coltext4 === "FA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_bond1 = radar2_fa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_bond4 = radar2_fa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_bond7 = radar2_fa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_bond2 = radar2_fa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_bond5 = radar2_fa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_bond8 = radar2_fa_line_func_bond8 + coltext8
        }

    }
//FA-glu
    else if (coltext4 === "FA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_glu1 = radar2_fa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_glu4 = radar2_fa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_glu7 = radar2_fa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_glu2 = radar2_fa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_glu5 = radar2_fa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_glu8 = radar2_fa_line_func_glu8 + coltext8
        }

    }
//FA-ass
        else if (coltext4 === "FA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_ass1 = radar2_fa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_ass4 = radar2_fa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_ass7 = radar2_fa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_ass2 = radar2_fa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_ass5 = radar2_fa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_ass8 = radar2_fa_line_func_ass8 + coltext8
        }

    }
//FA-scr
        else if (coltext4 === "FA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_scr1 = radar2_fa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_scr4 = radar2_fa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_scr7 = radar2_fa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_scr2 = radar2_fa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_scr5 = radar2_fa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_scr8 = radar2_fa_line_func_scr8 + coltext8
        }

    }
//FA-cab
        else if (coltext4 === "FA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_cab1 = radar2_fa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_cab4 = radar2_fa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_cab7 = radar2_fa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_cab2 = radar2_fa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_cab5 = radar2_fa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_cab8 = radar2_fa_line_func_cab8 + coltext8
        }

    }
//FA-mat
        else if (coltext4 === "FA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            radar2_fa_line_func_mat1 = radar2_fa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            radar2_fa_line_func_mat4 = radar2_fa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            radar2_fa_line_func_mat7 = radar2_fa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            radar2_fa_line_func_mat2 = radar2_fa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            radar2_fa_line_func_mat5 = radar2_fa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            radar2_fa_line_func_mat8 = radar2_fa_line_func_mat8 + coltext8
        }
    }
}

//FA-sum_radar
radar2_fa_line_func_sum_bond = radar2_fa_line_func_bond1+radar2_fa_line_func_bond4+radar2_fa_line_func_bond7
radar2_fa_line_func_sum_glu = radar2_fa_line_func_glu1+radar2_fa_line_func_glu4+radar2_fa_line_func_glu7
radar2_fa_line_func_sum_ass = radar2_fa_line_func_ass1+radar2_fa_line_func_ass4+radar2_fa_line_func_ass7
radar2_fa_line_func_sum_scr = radar2_fa_line_func_scr1+radar2_fa_line_func_scr4+radar2_fa_line_func_scr7
radar2_fa_line_func_sum_cab = radar2_fa_line_func_cab1+radar2_fa_line_func_cab4+radar2_fa_line_func_cab7
radar2_fa_line_func_sum_mat = radar2_fa_line_func_mat1+radar2_fa_line_func_mat4+radar2_fa_line_func_mat7

//DFA radar
    if(DFA_radar9_build === 1){
    DFA_radar9.destroy();
    }

DFA_radar9_build=1
var ctx = document.getElementById("DFA-radar9");
 DFA_radar9 = new Chart(ctx, {
   //Increase spacing between legend and chart
   plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
  type: 'radar',
    data: {
        labels: ["Bonding","Gluing","Assembly","Screwing","Cables Assembly","Material Scan & link"],
    datasets: [
                {
                    label: 'Dataset1',
                    data: [radar1_fa_line_func_sum_bond,radar1_fa_line_func_sum_glu,radar1_fa_line_func_sum_ass,radar1_fa_line_func_sum_scr,radar1_fa_line_func_sum_cab,radar1_fa_line_func_sum_mat],
                    hoverBorderWidth: 4,
                },
                {
                    label: 'Dataset2',
                    data: [radar2_fa_line_func_sum_bond,radar2_fa_line_func_sum_glu,radar2_fa_line_func_sum_ass,radar2_fa_line_func_sum_scr,radar2_fa_line_func_sum_cab,radar2_fa_line_func_sum_mat],
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
           datalabels: {
               color: 'transparent',
            },
             colorschemes: {
        scheme: DFA_radar8_colors
      }
    }
  }
});

}

function DFAtable10_init(){

    var table_init = $('#DFA-table10').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table10");
    var tableLen = table.rows.length;

////////DFA issue1//////////////

    var fa_line_func_q1_sum1 = 0;
    var fa_line_func_q1_sum2 = 0;
    var fa_line_func_q1_sum4 = 0;
    var fa_line_func_q1_sum5 = 0;
    var fa_line_func_q1_sum7 = 0;
    var fa_line_func_q1_sum8 = 0;

    var fa_line_func_q2_sum1 = 0;
    var fa_line_func_q2_sum2 = 0;
    var fa_line_func_q2_sum4 = 0;
    var fa_line_func_q2_sum5 = 0;
    var fa_line_func_q2_sum7 = 0;
    var fa_line_func_q2_sum8 = 0;

    var fa_line_func_q3_sum1 = 0;
    var fa_line_func_q3_sum2 = 0;
    var fa_line_func_q3_sum4 = 0;
    var fa_line_func_q3_sum5 = 0;
    var fa_line_func_q3_sum7 = 0;
    var fa_line_func_q3_sum8 = 0;

    var fa_line_func_q4_sum1 = 0;
    var fa_line_func_q4_sum2 = 0;
    var fa_line_func_q4_sum4 = 0;
    var fa_line_func_q4_sum5 = 0;
    var fa_line_func_q4_sum7 = 0;
    var fa_line_func_q4_sum8 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);
    var coltext11 = Number(table.rows[i].cells[11].innerText);

//FA-func-q1
    if (coltext4 === "FA") {

        if(coltext11 === 11 || coltext11 === 12 || coltext11 === 01){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q1_sum1 = fa_line_func_q1_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q1_sum4 = fa_line_func_q1_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q1_sum7 = fa_line_func_q1_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q1_sum2 = fa_line_func_q1_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q1_sum5 = fa_line_func_q1_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q1_sum8 = fa_line_func_q1_sum8 + coltext8
                }

            }
        }
    }

//FA-func-q2
    if (coltext4 === "FA") {

        if(coltext11 === 02 || coltext11 ===03 || coltext11 === 04){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q2_sum1 = fa_line_func_q2_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q2_sum4 = fa_line_func_q2_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q2_sum7 = fa_line_func_q2_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q2_sum2 = fa_line_func_q2_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q2_sum5 = fa_line_func_q2_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q2_sum8 = fa_line_func_q2_sum8 + coltext8
                }

            }
        }
    }

//FA-func-q3
    if (coltext4 === "FA") {

        if(coltext11 === 05 || coltext11 === 06 || coltext11 === 07){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q3_sum1 = fa_line_func_q3_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q3_sum4 = fa_line_func_q3_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q3_sum7 = fa_line_func_q3_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q3_sum2 = fa_line_func_q3_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q3_sum5 = fa_line_func_q3_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q3_sum8 = fa_line_func_q3_sum8 + coltext8
                }

            }
        }
    }

//FA-func-q4
    if (coltext4 === "FA") {

        if(coltext11 === 08 || coltext11 === 09 || coltext11 === 10){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q4_sum1 = fa_line_func_q4_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q4_sum4 = fa_line_func_q4_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q4_sum7 = fa_line_func_q4_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q4_sum2 = fa_line_func_q4_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q4_sum5 = fa_line_func_q4_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q4_sum8 = fa_line_func_q4_sum8 + coltext8
                }

            }
        }
    }

}

//FA-func-q1%
fa_line_func_totalitems_q1 = fa_line_func_q1_sum1+fa_line_func_q1_sum4+fa_line_func_q1_sum7
fa_line_func_designavaiable_q1 = fa_line_func_q1_sum2+fa_line_func_q1_sum5+fa_line_func_q1_sum8

if(fa_line_func_totalitems_q1 ===0 || fa_line_func_designavaiable_q1 ===0 ){
    fa_line_func_q1 = 0
}
else {
    fa_line_func_q1 = Math.round(fa_line_func_designavaiable_q1/fa_line_func_totalitems_q1*100)
}

//FA-func-q2%
fa_line_func_totalitems_q2 = fa_line_func_q2_sum1+fa_line_func_q2_sum4+fa_line_func_q2_sum7
fa_line_func_designavaiable_q2 = fa_line_func_q2_sum2+fa_line_func_q2_sum5+fa_line_func_q2_sum8

if(fa_line_func_totalitems_q2 ===0 || fa_line_func_designavaiable_q2 ===0 ){
    fa_line_func_q2 = 0
}
else {
    fa_line_func_q2 = Math.round(fa_line_func_designavaiable_q2/fa_line_func_totalitems_q2*100)
}

//FA-func-q3%
fa_line_func_totalitems_q3 = fa_line_func_q3_sum1+fa_line_func_q3_sum4+fa_line_func_q3_sum7
fa_line_func_designavaiable_q3 = fa_line_func_q3_sum2+fa_line_func_q3_sum5+fa_line_func_q3_sum8

if(fa_line_func_totalitems_q3 ===0 || fa_line_func_designavaiable_q3 ===0 ){
    fa_line_func_q3 = 0
}
else {
    fa_line_func_q3 = Math.round(fa_line_func_designavaiable_q3/fa_line_func_totalitems_q3*100)
}

//FA-func-q4%
fa_line_func_totalitems_q4 = fa_line_func_q4_sum1+fa_line_func_q4_sum4+fa_line_func_q4_sum7
fa_line_func_designavaiable_q4 = fa_line_func_q4_sum2+fa_line_func_q4_sum5+fa_line_func_q4_sum8

if(fa_line_func_totalitems_q4 ===0 || fa_line_func_designavaiable_q4 ===0 ){
    fa_line_func_q4 = 0
}
else {
    fa_line_func_q4 = Math.round(fa_line_func_designavaiable_q4/fa_line_func_totalitems_q4*100)
}

////////DFA issue2//////////////

    var fa_line_est_q1_sum1 = 0;
    var fa_line_est_q1_sum2 = 0;
    var fa_line_est_q1_sum4 = 0;
    var fa_line_est_q1_sum5 = 0;
    var fa_line_est_q1_sum7 = 0;
    var fa_line_est_q1_sum8 = 0;

    var fa_line_est_q2_sum1 = 0;
    var fa_line_est_q2_sum2 = 0;
    var fa_line_est_q2_sum4 = 0;
    var fa_line_est_q2_sum5 = 0;
    var fa_line_est_q2_sum7 = 0;
    var fa_line_est_q2_sum8 = 0;

    var fa_line_est_q3_sum1 = 0;
    var fa_line_est_q3_sum2 = 0;
    var fa_line_est_q3_sum4 = 0;
    var fa_line_est_q3_sum5 = 0;
    var fa_line_est_q3_sum7 = 0;
    var fa_line_est_q3_sum8 = 0;

    var fa_line_est_q4_sum1 = 0;
    var fa_line_est_q4_sum2 = 0;
    var fa_line_est_q4_sum4 = 0;
    var fa_line_est_q4_sum5 = 0;
    var fa_line_est_q4_sum7 = 0;
    var fa_line_est_q4_sum8 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-est-q1
    if (coltext4 === "FA") {

        if(coltext11 === 11 || coltext11 === 12 || coltext11 === 01){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q1_sum1 = fa_line_est_q1_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q1_sum4 = fa_line_est_q1_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q1_sum7 = fa_line_est_q1_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q1_sum2 = fa_line_est_q1_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q1_sum5 = fa_line_est_q1_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q1_sum8 = fa_line_est_q1_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

//FA-est-q2
    if (coltext4 === "FA") {

        if(coltext11 === 02 || coltext11 ===03 || coltext11 === 04){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q2_sum1 = fa_line_est_q2_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q2_sum4 = fa_line_est_q2_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q2_sum7 = fa_line_est_q2_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q2_sum2 = fa_line_est_q2_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q2_sum5 = fa_line_est_q2_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q2_sum8 = fa_line_est_q2_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

//FA-est-q3
    if (coltext4 === "FA") {

        if(coltext11 === 05 || coltext11 === 06 || coltext11 === 07){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q3_sum1 = fa_line_est_q3_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q3_sum4 = fa_line_est_q3_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q3_sum7 = fa_line_est_q3_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q3_sum2 = fa_line_est_q3_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q3_sum5 = fa_line_est_q3_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q3_sum8 = fa_line_est_q3_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

//FA-est-q4
    if (coltext4 === "FA") {

        if(coltext11 === 08 || coltext11 === 09 || coltext11 === 10){

            if(coltext2 === "Bonding" || coltext2 === "Gluing" || coltext2 === "Assembly" || coltext2 === "Screwing" || coltext2 === "Cables Assembly" || coltext2 === "Material Scan & link"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q4_sum1 = fa_line_est_q4_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q4_sum4 = fa_line_est_q4_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q4_sum7 = fa_line_est_q4_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q4_sum2 = fa_line_est_q4_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q4_sum5 = fa_line_est_q4_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q4_sum8 = fa_line_est_q4_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

}

//FA-est-q1%
fa_line_est_totalitems_q1 = fa_line_est_q1_sum1+fa_line_est_q1_sum4+fa_line_est_q1_sum7
fa_line_est_designavaiable_q1 = fa_line_est_q1_sum2+fa_line_est_q1_sum5+fa_line_est_q1_sum8

if(fa_line_est_totalitems_q1 ===0 || fa_line_est_designavaiable_q1 ===0 ){
    fa_line_est_q1 = 0
}
else {
    fa_line_est_q1 = Math.round(fa_line_est_designavaiable_q1/fa_line_est_totalitems_q1*100)
}

//FA-est-q2%
fa_line_est_totalitems_q2 = fa_line_est_q2_sum1+fa_line_est_q2_sum4+fa_line_est_q2_sum7
fa_line_est_designavaiable_q2 = fa_line_est_q2_sum2+fa_line_est_q2_sum5+fa_line_est_q2_sum8

if(fa_line_est_totalitems_q2 ===0 || fa_line_est_designavaiable_q2 ===0 ){
    fa_line_est_q2 = 0
}
else {
    fa_line_est_q2 = Math.round(fa_line_est_designavaiable_q2/fa_line_est_totalitems_q2*100)
}

//FA-est-q3%
fa_line_est_totalitems_q3 = fa_line_est_q3_sum1+fa_line_est_q3_sum4+fa_line_est_q3_sum7
fa_line_est_designavaiable_q3 = fa_line_est_q3_sum2+fa_line_est_q3_sum5+fa_line_est_q3_sum8

if(fa_line_est_totalitems_q3 ===0 || fa_line_est_designavaiable_q3 ===0 ){
    fa_line_est_q3 = 0
}
else {
    fa_line_est_q3 = Math.round(fa_line_est_designavaiable_q3/fa_line_est_totalitems_q3*100)
}

//FA-est-q4%
fa_line_est_totalitems_q4 = fa_line_est_q4_sum1+fa_line_est_q4_sum4+fa_line_est_q4_sum7
fa_line_est_designavaiable_q4 = fa_line_est_q4_sum2+fa_line_est_q4_sum5+fa_line_est_q4_sum8

if(fa_line_est_totalitems_q4 ===0 || fa_line_est_designavaiable_q4 ===0 ){
    fa_line_est_q4 = 0
}
else {
    fa_line_est_q4 = Math.round(fa_line_est_designavaiable_q4/fa_line_est_totalitems_q4*100)
}

//line1
    if(DFA_line10_build === 1){
    DFA_line10.destroy();
    }

DFA_line10_build=1
var ctx = document.getElementById("DFA-line10");
 DFA_line10 = new Chart(ctx, {
    type: 'line',
        data: {
        labels: ['Q1','Q2','Q3','Q4'],
            datasets: [
                {
                    label: 'Function',
                    data:[fa_line_func_q1,fa_line_func_q2,fa_line_func_q3,fa_line_func_q4],
                    stack: 'Stack 0',
                    fill: false,
                    hoverBorderWidth: 4,
                    borderColor: DFA_line10_colors,
                }

            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'Rate of Function(%)',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        display: false,
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
               formatter: function (value) {return Math.round(value) + '%';},
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
                    callback: function(value, index, values) {return (value) + "%"; // 將數值轉換為百分比格式
                    },
                }
            }]
        }
    }
});

//line
    if(DFA_line10_2_build === 1){
    DFA_line10_2.destroy();
    }

DFA_line10_2_build=1
var ctx = document.getElementById("DFA-line10-2");
 DFA_line10_2 = new Chart(ctx, {
    type: 'line',
        data: {
        labels: ['Q1','Q2','Q3','Q4'],
            datasets: [
                {
                    label: 'Estimated HC',
                    data:[fa_line_est_q1,fa_line_est_q2,fa_line_est_q3,fa_line_est_q4],
                    stack: 'Stack 0',
                    fill: false,
                    hoverBorderWidth: 4,
                    borderColor: DFA_line10_colors,
                }

            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'Rate of HC(%)',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        display: false,
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
               formatter: function (value) {return Math.round(value) + '%';},
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
                    callback: function(value, index, values) {return (value) + "%"; // 將數值轉換為百分比格式
                    },
                }
            }]
        }
    }
});
}

function DFAtable11_init(){

    var table_init = $('#DFA-table11').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table11");
    var tableLen = table.rows.length;

////////DFA issue1//////////////

    var fa_line_func_q1_sum1 = 0;
    var fa_line_func_q1_sum2 = 0;
    var fa_line_func_q1_sum4 = 0;
    var fa_line_func_q1_sum5 = 0;
    var fa_line_func_q1_sum7 = 0;
    var fa_line_func_q1_sum8 = 0;

    var fa_line_func_q2_sum1 = 0;
    var fa_line_func_q2_sum2 = 0;
    var fa_line_func_q2_sum4 = 0;
    var fa_line_func_q2_sum5 = 0;
    var fa_line_func_q2_sum7 = 0;
    var fa_line_func_q2_sum8 = 0;

    var fa_line_func_q3_sum1 = 0;
    var fa_line_func_q3_sum2 = 0;
    var fa_line_func_q3_sum4 = 0;
    var fa_line_func_q3_sum5 = 0;
    var fa_line_func_q3_sum7 = 0;
    var fa_line_func_q3_sum8 = 0;

    var fa_line_func_q4_sum1 = 0;
    var fa_line_func_q4_sum2 = 0;
    var fa_line_func_q4_sum4 = 0;
    var fa_line_func_q4_sum5 = 0;
    var fa_line_func_q4_sum7 = 0;
    var fa_line_func_q4_sum8 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);
    var coltext11 = Number(table.rows[i].cells[11].innerText);

//FA-func-q1
    if (coltext4 === "FA") {

        if(coltext11 === 11 || coltext11 === 12 || coltext11 === 01){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q1_sum1 = fa_line_func_q1_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q1_sum4 = fa_line_func_q1_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q1_sum7 = fa_line_func_q1_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q1_sum2 = fa_line_func_q1_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q1_sum5 = fa_line_func_q1_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q1_sum8 = fa_line_func_q1_sum8 + coltext8
                }

            }
        }
    }

//FA-func-q2
    if (coltext4 === "FA") {

        if(coltext11 === 02 || coltext11 ===03 || coltext11 === 04){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q2_sum1 = fa_line_func_q2_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q2_sum4 = fa_line_func_q2_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q2_sum7 = fa_line_func_q2_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q2_sum2 = fa_line_func_q2_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q2_sum5 = fa_line_func_q2_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q2_sum8 = fa_line_func_q2_sum8 + coltext8
                }

            }
        }
    }

//FA-func-q3
    if (coltext4 === "FA") {

        if(coltext11 === 05 || coltext11 === 06 || coltext11 === 07){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q3_sum1 = fa_line_func_q3_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q3_sum4 = fa_line_func_q3_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q3_sum7 = fa_line_func_q3_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q3_sum2 = fa_line_func_q3_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q3_sum5 = fa_line_func_q3_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q3_sum8 = fa_line_func_q3_sum8 + coltext8
                }

            }
        }
    }

//FA-func-q4
    if (coltext4 === "FA") {

        if(coltext11 === 08 || coltext11 === 09 || coltext11 === 10){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_func_q4_sum1 = fa_line_func_q4_sum1 + coltext8
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_func_q4_sum4 = fa_line_func_q4_sum4 + coltext8
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_func_q4_sum7 = fa_line_func_q4_sum7 + coltext8
                }

                if (coltext5 === "Y") {
                    fa_line_func_q4_sum2 = fa_line_func_q4_sum2 + coltext8
                }
                if (coltext6 === "Y") {
                    fa_line_func_q4_sum5 = fa_line_func_q4_sum5 + coltext8
                }
                if (coltext7 === "Y") {
                    fa_line_func_q4_sum8 = fa_line_func_q4_sum8 + coltext8
                }

            }
        }
    }

}

//FA-func-q1%
fa_line_func_totalitems_q1 = fa_line_func_q1_sum1+fa_line_func_q1_sum4+fa_line_func_q1_sum7
fa_line_func_designavaiable_q1 = fa_line_func_q1_sum2+fa_line_func_q1_sum5+fa_line_func_q1_sum8

if(fa_line_func_totalitems_q1 ===0 || fa_line_func_designavaiable_q1 ===0 ){
    fa_line_func_q1 = 0
}
else {
    fa_line_func_q1 = Math.round(fa_line_func_designavaiable_q1/fa_line_func_totalitems_q1*100)
}

//FA-func-q2%
fa_line_func_totalitems_q2 = fa_line_func_q2_sum1+fa_line_func_q2_sum4+fa_line_func_q2_sum7
fa_line_func_designavaiable_q2 = fa_line_func_q2_sum2+fa_line_func_q2_sum5+fa_line_func_q2_sum8

if(fa_line_func_totalitems_q2 ===0 || fa_line_func_designavaiable_q2 ===0 ){
    fa_line_func_q2 = 0
}
else {
    fa_line_func_q2 = Math.round(fa_line_func_designavaiable_q2/fa_line_func_totalitems_q2*100)
}

//FA-func-q3%
fa_line_func_totalitems_q3 = fa_line_func_q3_sum1+fa_line_func_q3_sum4+fa_line_func_q3_sum7
fa_line_func_designavaiable_q3 = fa_line_func_q3_sum2+fa_line_func_q3_sum5+fa_line_func_q3_sum8

if(fa_line_func_totalitems_q3 ===0 || fa_line_func_designavaiable_q3 ===0 ){
    fa_line_func_q3 = 0
}
else {
    fa_line_func_q3 = Math.round(fa_line_func_designavaiable_q3/fa_line_func_totalitems_q3*100)
}

//FA-func-q4%
fa_line_func_totalitems_q4 = fa_line_func_q4_sum1+fa_line_func_q4_sum4+fa_line_func_q4_sum7
fa_line_func_designavaiable_q4 = fa_line_func_q4_sum2+fa_line_func_q4_sum5+fa_line_func_q4_sum8

if(fa_line_func_totalitems_q4 ===0 || fa_line_func_designavaiable_q4 ===0 ){
    fa_line_func_q4 = 0
}
else {
    fa_line_func_q4 = Math.round(fa_line_func_designavaiable_q4/fa_line_func_totalitems_q4*100)
}

////////DFA issue2//////////////

    var fa_line_est_q1_sum1 = 0;
    var fa_line_est_q1_sum2 = 0;
    var fa_line_est_q1_sum4 = 0;
    var fa_line_est_q1_sum5 = 0;
    var fa_line_est_q1_sum7 = 0;
    var fa_line_est_q1_sum8 = 0;

    var fa_line_est_q2_sum1 = 0;
    var fa_line_est_q2_sum2 = 0;
    var fa_line_est_q2_sum4 = 0;
    var fa_line_est_q2_sum5 = 0;
    var fa_line_est_q2_sum7 = 0;
    var fa_line_est_q2_sum8 = 0;

    var fa_line_est_q3_sum1 = 0;
    var fa_line_est_q3_sum2 = 0;
    var fa_line_est_q3_sum4 = 0;
    var fa_line_est_q3_sum5 = 0;
    var fa_line_est_q3_sum7 = 0;
    var fa_line_est_q3_sum8 = 0;

    var fa_line_est_q4_sum1 = 0;
    var fa_line_est_q4_sum2 = 0;
    var fa_line_est_q4_sum4 = 0;
    var fa_line_est_q4_sum5 = 0;
    var fa_line_est_q4_sum7 = 0;
    var fa_line_est_q4_sum8 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-est-q1
    if (coltext4 === "FA") {

        if(coltext11 === 11 || coltext11 === 12 || coltext11 === 01){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q1_sum1 = fa_line_est_q1_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q1_sum4 = fa_line_est_q1_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q1_sum7 = fa_line_est_q1_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q1_sum2 = fa_line_est_q1_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q1_sum5 = fa_line_est_q1_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q1_sum8 = fa_line_est_q1_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

//FA-est-q2
    if (coltext4 === "FA") {

        if(coltext11 === 02 || coltext11 ===03 || coltext11 === 04){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q2_sum1 = fa_line_est_q2_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q2_sum4 = fa_line_est_q2_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q2_sum7 = fa_line_est_q2_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q2_sum2 = fa_line_est_q2_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q2_sum5 = fa_line_est_q2_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q2_sum8 = fa_line_est_q2_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

//FA-est-q3
    if (coltext4 === "FA") {

        if(coltext11 === 05 || coltext11 === 06 || coltext11 === 07){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q3_sum1 = fa_line_est_q3_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q3_sum4 = fa_line_est_q3_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q3_sum7 = fa_line_est_q3_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q3_sum2 = fa_line_est_q3_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q3_sum5 = fa_line_est_q3_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q3_sum8 = fa_line_est_q3_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

//FA-est-q4
    if (coltext4 === "FA") {

        if(coltext11 === 08 || coltext11 === 09 || coltext11 === 10){

            if(coltext2 === "Audits" || coltext2 === "Test" || coltext2 === "Labeling&Packing"){

                if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
                    fa_line_est_q4_sum1 = fa_line_est_q4_sum1 + (coltext3 * coltext8)
                }
                if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
                    fa_line_est_q4_sum4 = fa_line_est_q4_sum4 + (coltext3 * coltext8)
                }
                if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
                    fa_line_est_q4_sum7 = fa_line_est_q4_sum7 + (coltext3 * coltext8)
                }

                if (coltext5 === "Y") {
                    fa_line_est_q4_sum2 = fa_line_est_q4_sum2 + (coltext3 * coltext8)
                }
                if (coltext6 === "Y") {
                    fa_line_est_q4_sum5 = fa_line_est_q4_sum5 + (coltext3 * coltext8)
                }
                if (coltext7 === "Y") {
                    fa_line_est_q4_sum8 = fa_line_est_q4_sum8 + (coltext3 * coltext8)
                }

            }
        }
    }

}

//FA-est-q1%
fa_line_est_totalitems_q1 = fa_line_est_q1_sum1+fa_line_est_q1_sum4+fa_line_est_q1_sum7
fa_line_est_designavaiable_q1 = fa_line_est_q1_sum2+fa_line_est_q1_sum5+fa_line_est_q1_sum8

if(fa_line_est_totalitems_q1 ===0 || fa_line_est_designavaiable_q1 ===0 ){
    fa_line_est_q1 = 0
}
else {
    fa_line_est_q1 = Math.round(fa_line_est_designavaiable_q1/fa_line_est_totalitems_q1*100)
}

//FA-est-q2%
fa_line_est_totalitems_q2 = fa_line_est_q2_sum1+fa_line_est_q2_sum4+fa_line_est_q2_sum7
fa_line_est_designavaiable_q2 = fa_line_est_q2_sum2+fa_line_est_q2_sum5+fa_line_est_q2_sum8

if(fa_line_est_totalitems_q2 ===0 || fa_line_est_designavaiable_q2 ===0 ){
    fa_line_est_q2 = 0
}
else {
    fa_line_est_q2 = Math.round(fa_line_est_designavaiable_q2/fa_line_est_totalitems_q2*100)
}

//FA-est-q3%
fa_line_est_totalitems_q3 = fa_line_est_q3_sum1+fa_line_est_q3_sum4+fa_line_est_q3_sum7
fa_line_est_designavaiable_q3 = fa_line_est_q3_sum2+fa_line_est_q3_sum5+fa_line_est_q3_sum8

if(fa_line_est_totalitems_q3 ===0 || fa_line_est_designavaiable_q3 ===0 ){
    fa_line_est_q3 = 0
}
else {
    fa_line_est_q3 = Math.round(fa_line_est_designavaiable_q3/fa_line_est_totalitems_q3*100)
}

//FA-est-q4%
fa_line_est_totalitems_q4 = fa_line_est_q4_sum1+fa_line_est_q4_sum4+fa_line_est_q4_sum7
fa_line_est_designavaiable_q4 = fa_line_est_q4_sum2+fa_line_est_q4_sum5+fa_line_est_q4_sum8

if(fa_line_est_totalitems_q4 ===0 || fa_line_est_designavaiable_q4 ===0 ){
    fa_line_est_q4 = 0
}
else {
    fa_line_est_q4 = Math.round(fa_line_est_designavaiable_q4/fa_line_est_totalitems_q4*100)
}

//line1
    if(DFA_line11_build === 1){
    DFA_line11.destroy();
    }

DFA_line11_build=1
var ctx = document.getElementById("DFA-line11");
 DFA_line11 = new Chart(ctx, {
    type: 'line',
        data: {
        labels: ['Q1','Q2','Q3','Q4'],
            datasets: [
                {
                    label: 'Function',
                    data:[fa_line_func_q1,fa_line_func_q2,fa_line_func_q3,fa_line_func_q4],
                    stack: 'Stack 0',
                    fill: false,
                    hoverBorderWidth: 4,
                    borderColor: DFA_line10_colors,
                }

            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'Rate of Function(%)',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        display: false,
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
               formatter: function (value) {return Math.round(value) + '%';},
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
                    callback: function(value, index, values) {return (value) + "%"; // 將數值轉換為百分比格式
                    },
                }
            }]
        }
    }
});

//line
    if(DFA_line11_2_build === 1){
    DFA_line11_2.destroy();
    }

DFA_line11_2_build=1
var ctx = document.getElementById("DFA-line11-2");
 DFA_line11_2 = new Chart(ctx, {
    type: 'line',
        data: {
        labels: ['Q1','Q2','Q3','Q4'],
            datasets: [
                {
                    label: 'Estimated HC',
                    data:[fa_line_est_q1,fa_line_est_q2,fa_line_est_q3,fa_line_est_q4],
                    stack: 'Stack 0',
                    fill: false,
                    hoverBorderWidth: 4,
                    borderColor: DFA_line10_colors,
                }

            ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
         title: {
         display: true,
         text: 'Rate of HC(%)',
         position:'top',
         fontColor: "black",
         fontSize: 14,
        },
        legend: {
        display: false,
        },
        plugins: {
           datalabels: {
               color: 'black',
               anchor:'end',
               align:'end',
               formatter: function (value) {return Math.round(value) + '%';},
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
                    callback: function(value, index, values) {return (value) + "%"; // 將數值轉換為百分比格式
                    },
                }
            }]
        }
    }
});
}




//目前不用的 DFA 其他議題
function DFAtable3_init(){

    var table_init = $('#DFA-table3').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table3");
    var tableLen = table.rows.length;

    var fa_all_func_aud1 = 0;
    var fa_all_func_aud2 = 0;
    var fa_all_func_aud3 = 0;
    var fa_all_func_aud4 = 0;
    var fa_all_func_aud5 = 0;
    var fa_all_func_aud6 = 0;
    var fa_all_func_aud7 = 0;
    var fa_all_func_aud8 = 0;
    var fa_all_func_aud9 = 0;

    var fa_all_func_test1 = 0;
    var fa_all_func_test2 = 0;
    var fa_all_func_test3 = 0;
    var fa_all_func_test4 = 0;
    var fa_all_func_test5 = 0;
    var fa_all_func_test6 = 0;
    var fa_all_func_test7 = 0;
    var fa_all_func_test8 = 0;
    var fa_all_func_test9 = 0;

    var fa_all_func_lab1 = 0;
    var fa_all_func_lab2 = 0;
    var fa_all_func_lab3 = 0;
    var fa_all_func_lab4 = 0;
    var fa_all_func_lab5 = 0;
    var fa_all_func_lab6 = 0;
    var fa_all_func_lab7 = 0;
    var fa_all_func_lab8 = 0;
    var fa_all_func_lab9 = 0;


    var fa_all_func_sum1 = 0;
    var fa_all_func_sum2 = 0;
    var fa_all_func_sum3 = 0;
    var fa_all_func_sum4 = 0;
    var fa_all_func_sum5 = 0;
    var fa_all_func_sum6 = 0;
    var fa_all_func_sum7 = 0;
    var fa_all_func_sum8 = 0;
    var fa_all_func_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-aud
    if (coltext4 === "FA" && coltext2 === "Audits") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_all_func_aud1 = fa_all_func_aud1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_all_func_aud4 = fa_all_func_aud4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_all_func_aud7 = fa_all_func_aud7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_all_func_aud2 = fa_all_func_aud2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_all_func_aud5 = fa_all_func_aud5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_all_func_aud8 = fa_all_func_aud8 + coltext8
        }

    }
//FA-test
    else if (coltext4 === "FA" && coltext2 === "Test") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_all_func_test1 = fa_all_func_test1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_all_func_test4 = fa_all_func_test4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_all_func_test7 = fa_all_func_test7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_all_func_test2 = fa_all_func_test2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_all_func_test5 = fa_all_func_test5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_all_func_test8 = fa_all_func_test8 + coltext8
        }

    }
//FA-lab
        else if (coltext4 === "FA" && coltext2 === "Labeling & Packing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_all_func_lab1 = fa_all_func_lab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_all_func_lab4 = fa_all_func_lab4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_all_func_lab7 = fa_all_func_lab7 + coltext8
        }

        if (coltext5 === "Y") {
            fa_all_func_lab2 = fa_all_func_lab2 + coltext8
        }
        if (coltext6 === "Y") {
            fa_all_func_lab5 = fa_all_func_lab5 + coltext8
        }
        if (coltext7 === "Y") {
            fa_all_func_lab8 = fa_all_func_lab8 + coltext8
        }

    }
}

//FA-aud %

if(fa_all_func_aud1 ===0 || fa_all_func_aud2 ===0){
    fa_all_func_aud3 = 0+"%"
}
else {
    fa_all_func_aud3 = Math.round(fa_all_func_aud2/fa_all_func_aud1*100)+"%"
}

if(fa_all_func_aud4 ===0 || fa_all_func_aud5 ===0 ){
    fa_all_func_aud6 = 0+"%"
}
else {
    fa_all_func_aud6 = Math.round(fa_all_func_aud5/fa_all_func_aud4*100)+"%"
}

if(fa_all_func_aud7 ===0 || fa_all_func_aud8 ===0 ){
    fa_all_func_aud9 = 0+"%"
}
else {
    fa_all_func_aud9 = Math.round(fa_all_func_aud8/fa_all_func_aud7*100)+"%"
}

//FA-test %

if(fa_all_func_test1 ===0 || fa_all_func_test2 ===0 ){
    fa_all_func_test3 = 0+"%"
}
else {
    fa_all_func_test3 = Math.round(fa_all_func_test2/fa_all_func_test1*100)+"%"
}

if(fa_all_func_test4 ===0 || fa_all_func_test5 ===0 ){
    fa_all_func_test6 = 0+"%"
}
else {
    fa_all_func_test6 = Math.round(fa_all_func_test5/fa_all_func_test4*100)+"%"
}

if(fa_all_func_test7 ===0 || fa_all_func_test8 ===0 ){
    fa_all_func_test9 = 0+"%"
}
else {
    fa_all_func_test9 = Math.round(fa_all_func_test8/fa_all_func_test7*100)+"%"
}

//FA-lab %

if(fa_all_func_lab1 ===0 || fa_all_func_lab2 ===0 ){
    fa_all_func_lab3 = 0+"%"
}
else {
    fa_all_func_lab3 = Math.round(fa_all_func_lab2/fa_all_func_lab1*100)+"%"
}

if(fa_all_func_lab4 ===0 || fa_all_func_lab5 ===0 ){
    fa_all_func_lab6 = 0+"%"
}
else {
    fa_all_func_lab6 = Math.round(fa_all_func_lab5/fa_all_func_lab4*100)+"%"
}

if(fa_all_func_lab7 ===0 || fa_all_func_lab8 ===0 ){
    fa_all_func_lab9 = 0+"%"
}
else {
    fa_all_func_lab9 = Math.round(fa_all_func_lab8/fa_all_func_lab7*100)+"%"
}


//FA-sum
fa_all_func_sum1 = fa_all_func_aud1+fa_all_func_test1+fa_all_func_lab1
fa_all_func_sum2 = fa_all_func_aud2+fa_all_func_test2+fa_all_func_lab2
fa_all_func_sum4 = fa_all_func_aud4+fa_all_func_test4+fa_all_func_lab4
fa_all_func_sum5 = fa_all_func_aud5+fa_all_func_test5+fa_all_func_lab5
fa_all_func_sum7 = fa_all_func_aud7+fa_all_func_test7+fa_all_func_lab7
fa_all_func_sum8 = fa_all_func_aud8+fa_all_func_test8+fa_all_func_lab8

//FA-sum %

if(fa_all_func_sum1 ===0 || fa_all_func_sum2 ===0 ){
    fa_all_func_sum3 = 0+"%"
}
else {
    fa_all_func_sum3 = Math.round(fa_all_func_sum2/fa_all_func_sum1*100)+"%"
}

if(fa_all_func_sum4 ===0 || fa_all_func_sum5 ===0 ){
    fa_all_func_sum6 = 0+"%"
}
else {
    fa_all_func_sum6 = Math.round(fa_all_func_sum5/fa_all_func_sum4*100)+"%"
}

if(fa_all_func_sum7 ===0 || fa_all_func_sum8 ===0 ){
    fa_all_func_sum9 = 0+"%"
}
else {
    fa_all_func_sum9 = Math.round(fa_all_func_sum8/fa_all_func_sum7*100)+"%"
}


document.getElementById("fa-all-func-aud1").innerHTML = fa_all_func_aud1
document.getElementById("fa-all-func-aud2").innerHTML = fa_all_func_aud2
document.getElementById("fa-all-func-aud3").innerHTML = fa_all_func_aud3
document.getElementById("fa-all-func-aud4").innerHTML = fa_all_func_aud4
document.getElementById("fa-all-func-aud5").innerHTML = fa_all_func_aud5
document.getElementById("fa-all-func-aud6").innerHTML = fa_all_func_aud6
document.getElementById("fa-all-func-aud7").innerHTML = fa_all_func_aud7
document.getElementById("fa-all-func-aud8").innerHTML = fa_all_func_aud8
document.getElementById("fa-all-func-aud9").innerHTML = fa_all_func_aud9

document.getElementById("fa-all-func-test1").innerHTML = fa_all_func_test1
document.getElementById("fa-all-func-test2").innerHTML = fa_all_func_test2
document.getElementById("fa-all-func-test3").innerHTML = fa_all_func_test3
document.getElementById("fa-all-func-test4").innerHTML = fa_all_func_test4
document.getElementById("fa-all-func-test5").innerHTML = fa_all_func_test5
document.getElementById("fa-all-func-test6").innerHTML = fa_all_func_test6
document.getElementById("fa-all-func-test7").innerHTML = fa_all_func_test7
document.getElementById("fa-all-func-test8").innerHTML = fa_all_func_test8
document.getElementById("fa-all-func-test9").innerHTML = fa_all_func_test9

document.getElementById("fa-all-func-lab1").innerHTML = fa_all_func_lab1
document.getElementById("fa-all-func-lab2").innerHTML = fa_all_func_lab2
document.getElementById("fa-all-func-lab3").innerHTML = fa_all_func_lab3
document.getElementById("fa-all-func-lab4").innerHTML = fa_all_func_lab4
document.getElementById("fa-all-func-lab5").innerHTML = fa_all_func_lab5
document.getElementById("fa-all-func-lab6").innerHTML = fa_all_func_lab6
document.getElementById("fa-all-func-lab7").innerHTML = fa_all_func_lab7
document.getElementById("fa-all-func-lab8").innerHTML = fa_all_func_lab8
document.getElementById("fa-all-func-lab9").innerHTML = fa_all_func_lab9

document.getElementById("fa-all-func-sum1").innerHTML = fa_all_func_sum1
document.getElementById("fa-all-func-sum2").innerHTML = fa_all_func_sum2
document.getElementById("fa-all-func-sum3").innerHTML = fa_all_func_sum3
document.getElementById("fa-all-func-sum4").innerHTML = fa_all_func_sum4
document.getElementById("fa-all-func-sum5").innerHTML = fa_all_func_sum5
document.getElementById("fa-all-func-sum6").innerHTML = fa_all_func_sum6
document.getElementById("fa-all-func-sum7").innerHTML = fa_all_func_sum7
document.getElementById("fa-all-func-sum8").innerHTML = fa_all_func_sum8
document.getElementById("fa-all-func-sum9").innerHTML = fa_all_func_sum9

document.getElementById("fa-all-func-cnc").innerHTML = fa_all_func_sum3
document.getElementById("fa-all-func-sipv").innerHTML = fa_all_func_sum6
document.getElementById("fa-all-func-mvmp").innerHTML = fa_all_func_sum9


}
function DFAtable4_init(){

    var table_init = $('#DFA-table4').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table4");
    var tableLen = table.rows.length;

    var fa_all_est_aud1 = 0;
    var fa_all_est_aud2 = 0;
    var fa_all_est_aud3 = 0;
    var fa_all_est_aud4 = 0;
    var fa_all_est_aud5 = 0;
    var fa_all_est_aud6 = 0;
    var fa_all_est_aud7 = 0;
    var fa_all_est_aud8 = 0;
    var fa_all_est_aud9 = 0;

    var fa_all_est_test1 = 0;
    var fa_all_est_test2 = 0;
    var fa_all_est_test3 = 0;
    var fa_all_est_test4 = 0;
    var fa_all_est_test5 = 0;
    var fa_all_est_test6 = 0;
    var fa_all_est_test7 = 0;
    var fa_all_est_test8 = 0;
    var fa_all_est_test9 = 0;

    var fa_all_est_lab1 = 0;
    var fa_all_est_lab2 = 0;
    var fa_all_est_lab3 = 0;
    var fa_all_est_lab4 = 0;
    var fa_all_est_lab5 = 0;
    var fa_all_est_lab6 = 0;
    var fa_all_est_lab7 = 0;
    var fa_all_est_lab8 = 0;
    var fa_all_est_lab9 = 0;

    var fa_all_est_sum1 = 0;
    var fa_all_est_sum2 = 0;
    var fa_all_est_sum3 = 0;
    var fa_all_est_sum4 = 0;
    var fa_all_est_sum5 = 0;
    var fa_all_est_sum6 = 0;
    var fa_all_est_sum7 = 0;
    var fa_all_est_sum8 = 0;
    var fa_all_est_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//FA-aud
    if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Audits") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_all_est_aud1 = fa_all_est_aud1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_all_est_aud4 = fa_all_est_aud4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_all_est_aud7 = fa_all_est_aud7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_all_est_aud2 = fa_all_est_aud2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_all_est_aud5 = fa_all_est_aud5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_all_est_aud8 = fa_all_est_aud8 + (coltext3 * coltext8)
        }

    }
//FA-test
    else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Test") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_all_est_test1 = fa_all_est_test1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_all_est_test4 = fa_all_est_test4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_all_est_test7 = fa_all_est_test7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_all_est_test2 = fa_all_est_test2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_all_est_test5 = fa_all_est_test5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_all_est_test8 = fa_all_est_test8 + (coltext3 * coltext8)
        }

    }
//FA-lab
        else if (coltext4 === "FA" && coltext3 > 0 && coltext2 === "Labeling&Packing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            fa_all_est_lab1 = fa_all_est_lab1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            fa_all_est_lab4 = fa_all_est_lab4 + (coltext3 * coltext8)
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            fa_all_est_lab7 = fa_all_est_lab7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            fa_all_est_lab2 = fa_all_est_lab2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            fa_all_est_lab5 = fa_all_est_lab5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            fa_all_est_lab8 = fa_all_est_lab8 + (coltext3 * coltext8)
        }

    }
}

//FA-aud %

if(fa_all_est_aud1 ===0 || fa_all_est_aud2 ===0 ){
    fa_all_est_aud3 = 0+"%"
}
else {
    fa_all_est_aud3 = Math.round(fa_all_est_aud2/fa_all_est_aud1*100)+"%"
}

if(fa_all_est_aud4 ===0 || fa_all_est_aud5 ===0 ){
    fa_all_est_aud6 = 0+"%"
}
else {
    fa_all_est_aud6 = Math.round(fa_all_est_aud5/fa_all_est_aud4*100)+"%"
}

if(fa_all_est_aud7 ===0 || fa_all_est_aud8 ===0 ){
    fa_all_est_aud9 = 0+"%"
}
else {
    fa_all_est_aud9 = Math.round(fa_all_est_aud8/fa_all_est_aud7*100)+"%"
}

//FA-test %

if(fa_all_est_test1 ===0 || fa_all_est_test2 ===0 ){
    fa_all_est_test3 = 0+"%"
}
else {
    fa_all_est_test3 = Math.round(fa_all_est_test2/fa_all_est_test1*100)+"%"
}

if(fa_all_est_test4 ===0 || fa_all_est_test5 ===0 ){
    fa_all_est_test6 = 0+"%"
}
else {
    fa_all_est_test6 = Math.round(fa_all_est_test5/fa_all_est_test4*100)+"%"
}

if(fa_all_est_test7 ===0 || fa_all_est_test8 ===0 ){
    fa_all_est_test9 = 0+"%"
}
else {
    fa_all_est_test9 = Math.round(fa_all_est_test8/fa_all_est_test7*100)+"%"
}

//FA-lab %

if(fa_all_est_lab1 ===0 || fa_all_est_lab2 ===0 ){
    fa_all_est_lab3 = 0+"%"
}
else {
    fa_all_est_lab3 = Math.round(fa_all_est_lab2/fa_all_est_lab1*100)+"%"
}

if(fa_all_est_lab4 ===0 || fa_all_est_lab5 ===0 ){
    fa_all_est_lab6 = 0+"%"
}
else {
    fa_all_est_lab6 = Math.round(fa_all_est_lab5/fa_all_est_lab4*100)+"%"
}

if(fa_all_est_lab7 ===0 || fa_all_est_lab8 ===0 ){
    fa_all_est_lab9 = 0+"%"
}
else {
    fa_all_est_lab9 = Math.round(fa_all_est_lab8/fa_all_est_lab7*100)+"%"
}


//FA-sum
fa_all_est_sum1 = fa_all_est_aud1+fa_all_est_test1+fa_all_est_lab1
fa_all_est_sum2 = fa_all_est_aud2+fa_all_est_test2+fa_all_est_lab2
fa_all_est_sum4 = fa_all_est_aud4+fa_all_est_test4+fa_all_est_lab4
fa_all_est_sum5 = fa_all_est_aud5+fa_all_est_test5+fa_all_est_lab5
fa_all_est_sum7 = fa_all_est_aud7+fa_all_est_test7+fa_all_est_lab7
fa_all_est_sum8 = fa_all_est_aud8+fa_all_est_test8+fa_all_est_lab8

//FA-sum %

if(fa_all_est_sum1 ===0 || fa_all_est_sum2 ===0 ){
    fa_all_est_sum3 = 0+"%"
}
else {
    fa_all_est_sum3 = Math.round(fa_all_est_sum2/fa_all_est_sum1*100)+"%"
}

if(fa_all_est_sum4 ===0 || fa_all_est_sum5 ===0 ){
    fa_all_est_sum6 = 0+"%"
}
else {
    fa_all_est_sum6 = Math.round(fa_all_est_sum5/fa_all_est_sum4*100)+"%"
}

if(fa_all_est_sum7 ===0 || fa_all_est_sum8 ===0 ){
    fa_all_est_sum9 = 0+"%"
}
else {
    fa_all_est_sum9 = Math.round(fa_all_est_sum8/fa_all_est_sum7*100)+"%"
}


document.getElementById("fa-all-est-aud1").innerHTML = fa_all_est_aud1
document.getElementById("fa-all-est-aud2").innerHTML = fa_all_est_aud2
document.getElementById("fa-all-est-aud3").innerHTML = fa_all_est_aud3
document.getElementById("fa-all-est-aud4").innerHTML = fa_all_est_aud4
document.getElementById("fa-all-est-aud5").innerHTML = fa_all_est_aud5
document.getElementById("fa-all-est-aud6").innerHTML = fa_all_est_aud6
document.getElementById("fa-all-est-aud7").innerHTML = fa_all_est_aud7
document.getElementById("fa-all-est-aud8").innerHTML = fa_all_est_aud8
document.getElementById("fa-all-est-aud9").innerHTML = fa_all_est_aud9

document.getElementById("fa-all-est-test1").innerHTML = fa_all_est_test1
document.getElementById("fa-all-est-test2").innerHTML = fa_all_est_test2
document.getElementById("fa-all-est-test3").innerHTML = fa_all_est_test3
document.getElementById("fa-all-est-test4").innerHTML = fa_all_est_test4
document.getElementById("fa-all-est-test5").innerHTML = fa_all_est_test5
document.getElementById("fa-all-est-test6").innerHTML = fa_all_est_test6
document.getElementById("fa-all-est-test7").innerHTML = fa_all_est_test7
document.getElementById("fa-all-est-test8").innerHTML = fa_all_est_test8
document.getElementById("fa-all-est-test9").innerHTML = fa_all_est_test9

document.getElementById("fa-all-est-lab1").innerHTML = fa_all_est_lab1
document.getElementById("fa-all-est-lab2").innerHTML = fa_all_est_lab2
document.getElementById("fa-all-est-lab3").innerHTML = fa_all_est_lab3
document.getElementById("fa-all-est-lab4").innerHTML = fa_all_est_lab4
document.getElementById("fa-all-est-lab5").innerHTML = fa_all_est_lab5
document.getElementById("fa-all-est-lab6").innerHTML = fa_all_est_lab6
document.getElementById("fa-all-est-lab7").innerHTML = fa_all_est_lab7
document.getElementById("fa-all-est-lab8").innerHTML = fa_all_est_lab8
document.getElementById("fa-all-est-lab9").innerHTML = fa_all_est_lab9


document.getElementById("fa-all-est-sum1").innerHTML = fa_all_est_sum1
document.getElementById("fa-all-est-sum2").innerHTML = fa_all_est_sum2
document.getElementById("fa-all-est-sum3").innerHTML = fa_all_est_sum3
document.getElementById("fa-all-est-sum4").innerHTML = fa_all_est_sum4
document.getElementById("fa-all-est-sum5").innerHTML = fa_all_est_sum5
document.getElementById("fa-all-est-sum6").innerHTML = fa_all_est_sum6
document.getElementById("fa-all-est-sum7").innerHTML = fa_all_est_sum7
document.getElementById("fa-all-est-sum8").innerHTML = fa_all_est_sum8
document.getElementById("fa-all-est-sum9").innerHTML = fa_all_est_sum9

document.getElementById("fa-all-est-cnc").innerHTML = fa_all_est_sum3
document.getElementById("fa-all-est-sipv").innerHTML = fa_all_est_sum6
document.getElementById("fa-all-est-mvmp").innerHTML = fa_all_est_sum9

}
function DFAtable5_init(){

    var table_init = $('#DFA-table5').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table5");
    var tableLen = table.rows.length;

    var sa_line_func_bond1 = 0;
    var sa_line_func_bond2 = 0;
    var sa_line_func_bond3 = 0;
    var sa_line_func_bond4 = 0;
    var sa_line_func_bond5 = 0;
    var sa_line_func_bond6 = 0;
    var sa_line_func_bond7 = 0;
    var sa_line_func_bond8 = 0;
    var sa_line_func_bond9 = 0;

    var sa_line_func_glu1 = 0;
    var sa_line_func_glu2 = 0;
    var sa_line_func_glu3 = 0;
    var sa_line_func_glu4 = 0;
    var sa_line_func_glu5 = 0;
    var sa_line_func_glu6 = 0;
    var sa_line_func_glu7 = 0;
    var sa_line_func_glu8 = 0;
    var sa_line_func_glu9 = 0;

    var sa_line_func_ass1 = 0;
    var sa_line_func_ass2 = 0;
    var sa_line_func_ass3 = 0;
    var sa_line_func_ass4 = 0;
    var sa_line_func_ass5 = 0;
    var sa_line_func_ass6 = 0;
    var sa_line_func_ass7 = 0;
    var sa_line_func_ass8 = 0;
    var sa_line_func_ass9 = 0;

    var sa_line_func_scr1 = 0;
    var sa_line_func_scr2 = 0;
    var sa_line_func_scr3 = 0;
    var sa_line_func_scr4 = 0;
    var sa_line_func_scr5 = 0;
    var sa_line_func_scr6 = 0;
    var sa_line_func_scr7 = 0;
    var sa_line_func_scr8 = 0;
    var sa_line_func_scr9 = 0;

    var sa_line_func_cab1 = 0;
    var sa_line_func_cab2 = 0;
    var sa_line_func_cab3 = 0;
    var sa_line_func_cab4 = 0;
    var sa_line_func_cab5 = 0;
    var sa_line_func_cab6 = 0;
    var sa_line_func_cab7 = 0;
    var sa_line_func_cab8 = 0;
    var sa_line_func_cab9 = 0;

    var sa_line_func_mat1 = 0;
    var sa_line_func_mat2 = 0;
    var sa_line_func_mat3 = 0;
    var sa_line_func_mat4 = 0;
    var sa_line_func_mat5 = 0;
    var sa_line_func_mat6 = 0;
    var sa_line_func_mat7 = 0;
    var sa_line_func_mat8 = 0;
    var sa_line_func_mat9 = 0;

    var sa_line_func_sum1 = 0;
    var sa_line_func_sum2 = 0;
    var sa_line_func_sum3 = 0;
    var sa_line_func_sum4 = 0;
    var sa_line_func_sum5 = 0;
    var sa_line_func_sum6 = 0;
    var sa_line_func_sum7 = 0;
    var sa_line_func_sum8 = 0;
    var sa_line_func_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//SA-bond
    if (coltext4 === "SA" && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_func_bond1 = sa_line_func_bond1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_func_bond4 = sa_line_func_bond4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_func_bond7 = sa_line_func_bond7 + coltext8
        }

        if (coltext5 === "Y") {
            sa_line_func_bond2 = sa_line_func_bond2 + coltext8
        }
        if (coltext6 === "Y") {
            sa_line_func_bond5 = sa_line_func_bond5 + coltext8
        }
        if (coltext7 === "Y") {
            sa_line_func_bond8 = sa_line_func_bond8 + coltext8
        }

    }
//SA-glu
    else if (coltext4 === "SA" && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_func_glu1 = sa_line_func_glu1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_func_glu4 = sa_line_func_glu4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_func_glu7 = sa_line_func_glu7 + coltext8
        }

        if (coltext5 === "Y") {
            sa_line_func_glu2 = sa_line_func_glu2 + coltext8
        }
        if (coltext6 === "Y") {
            sa_line_func_glu5 = sa_line_func_glu5 + coltext8
        }
        if (coltext7 === "Y") {
            sa_line_func_glu8 = sa_line_func_glu8 + coltext8
        }

    }
//SA-ass
        else if (coltext4 === "SA" && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_func_ass1 = sa_line_func_ass1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_func_ass4 = sa_line_func_ass4 + coltext8
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_func_ass7 = sa_line_func_ass7 + coltext8
        }

        if (coltext5 === "Y") {
            sa_line_func_ass2 = sa_line_func_ass2 + coltext8
        }
        if (coltext6 === "Y") {
            sa_line_func_ass5 = sa_line_func_ass5 + coltext8
        }
        if (coltext7 === "Y") {
            sa_line_func_ass8 = sa_line_func_ass8 + coltext8
        }

    }
//SA-scr
        else if (coltext4 === "SA" && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_func_scr1 = sa_line_func_scr1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_func_scr4 = sa_line_func_scr4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_func_scr7 = sa_line_func_scr7 + coltext8
        }

        if (coltext5 === "Y") {
            sa_line_func_scr2 = sa_line_func_scr2 + coltext8
        }
        if (coltext6 === "Y") {
            sa_line_func_scr5 = sa_line_func_scr5 + coltext8
        }
        if (coltext7 === "Y") {
            sa_line_func_scr8 = sa_line_func_scr8 + coltext8
        }

    }
//SA-cab
        else if (coltext4 === "SA" && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_func_cab1 = sa_line_func_cab1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_func_cab4 = sa_line_func_cab4 + coltext8
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_func_cab7 = sa_line_func_cab7 + coltext8
        }

        if (coltext5 === "Y") {
            sa_line_func_cab2 = sa_line_func_cab2 + coltext8
        }
        if (coltext6 === "Y") {
            sa_line_func_cab5 = sa_line_func_cab5 + coltext8
        }
        if (coltext7 === "Y") {
            sa_line_func_cab8 = sa_line_func_cab8 + coltext8
        }

    }
//SA-mat
        else if (coltext4 === "SA" && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_func_mat1 = sa_line_func_mat1 + coltext8
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_func_mat4 = sa_line_func_mat4 + coltext8
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_func_mat7 = sa_line_func_mat7 + coltext8
        }

        if (coltext5 === "Y") {
            sa_line_func_mat2 = sa_line_func_mat2 + coltext8
        }
        if (coltext6 === "Y") {
            sa_line_func_mat5 = sa_line_func_mat5 + coltext8
        }
        if (coltext7 === "Y") {
            sa_line_func_mat8 = sa_line_func_mat8 + coltext8
        }

    }
}

//SA-bond %

if(sa_line_func_bond1 ===0 || sa_line_func_bond2 ===0 ){
    sa_line_func_bond3 = 0+"%"
}
else {
    sa_line_func_bond3 = Math.round(sa_line_func_bond2/sa_line_func_bond1*100)+"%"
}

if(sa_line_func_bond4 ===0 || sa_line_func_bond5 ===0 ){
    sa_line_func_bond6 = 0+"%"
}
else {
    sa_line_func_bond6 = Math.round(sa_line_func_bond5/sa_line_func_bond4*100)+"%"
}

if(sa_line_func_bond7 ===0 || sa_line_func_bond8 ===0 ){
    sa_line_func_bond9 = 0+"%"
}
else {
    sa_line_func_bond9 = Math.round(sa_line_func_bond8/sa_line_func_bond7*100)+"%"
}

//SA-glu %

if(sa_line_func_glu1 ===0 || sa_line_func_glu2 ===0 ){
    sa_line_func_glu3 = 0+"%"
}
else {
    sa_line_func_glu3 = Math.round(sa_line_func_glu2/sa_line_func_glu1*100)+"%"
}

if(sa_line_func_glu4 ===0 || sa_line_func_glu5 ===0 ){
    sa_line_func_glu6 = 0+"%"
}
else {
    sa_line_func_glu6 = Math.round(sa_line_func_glu5/sa_line_func_glu4*100)+"%"
}

if(sa_line_func_glu7 ===0 || sa_line_func_glu8 ===0 ){
    sa_line_func_glu9 = 0+"%"
}
else {
    sa_line_func_glu9 = Math.round(sa_line_func_glu8/sa_line_func_glu7*100)+"%"
}

//SA-ass %

if(sa_line_func_ass1 ===0 || sa_line_func_ass2 ===0 ){
    sa_line_func_ass3 = 0+"%"
}
else {
    sa_line_func_ass3 = Math.round(sa_line_func_ass2/sa_line_func_ass1*100)+"%"
}

if(sa_line_func_ass4 ===0 || sa_line_func_ass5 ===0 ){
    sa_line_func_ass6 = 0+"%"
}
else {
    sa_line_func_ass6 = Math.round(sa_line_func_ass5/sa_line_func_ass4*100)+"%"
}

if(sa_line_func_ass7 ===0 || sa_line_func_ass8 ===0 ){
    sa_line_func_ass9 = 0+"%"
}
else {
    sa_line_func_ass9 = Math.round(sa_line_func_ass8/sa_line_func_ass7*100)+"%"
}

//SA-scr %

if(sa_line_func_scr1 ===0 || sa_line_func_scr2 ===0 ){
    sa_line_func_scr3 = 0+"%"
}
else {
    sa_line_func_scr3 = Math.round(sa_line_func_scr2/sa_line_func_scr1*100)+"%"
}

if(sa_line_func_scr4 ===0 || sa_line_func_scr5 ===0 ){
    sa_line_func_scr6 = 0+"%"
}
else {
    sa_line_func_scr6 = Math.round(sa_line_func_scr5/sa_line_func_scr4*100)+"%"
}

if(sa_line_func_scr7 ===0 || sa_line_func_scr8 ===0 ){
    sa_line_func_scr9 = 0+"%"
}
else {
    sa_line_func_scr9 = Math.round(sa_line_func_scr8/sa_line_func_scr7*100)+"%"
}

//SA-cab %

if(sa_line_func_cab1 ===0 || sa_line_func_cab2 ===0 ){
    sa_line_func_cab3 = 0+"%"
}
else {
    sa_line_func_cab3 = Math.round(sa_line_func_cab2/sa_line_func_cab1*100)+"%"
}

if(sa_line_func_cab4 ===0 || sa_line_func_cab5 ===0 ){
    sa_line_func_cab6 = 0+"%"
}
else {
    sa_line_func_cab6 = Math.round(sa_line_func_cab5/sa_line_func_cab4*100)+"%"
}

if(sa_line_func_cab7 ===0 || sa_line_func_cab8 ===0 ){
    sa_line_func_cab9 = 0+"%"
}
else {
    sa_line_func_cab9 = Math.round(sa_line_func_cab8/sa_line_func_cab7*100)+"%"
}

//SA-mat %

if(sa_line_func_mat1 ===0 || sa_line_func_mat2 ===0 ){
    sa_line_func_mat3 = 0+"%"
}
else {
    sa_line_func_mat3 = Math.round(sa_line_func_mat2/sa_line_func_mat1*100)+"%"
}

if(sa_line_func_mat4 ===0 || sa_line_func_mat5 ===0 ){
    sa_line_func_mat6 = 0+"%"
}
else {
    sa_line_func_mat6 = Math.round(sa_line_func_mat5/sa_line_func_mat4*100)+"%"
}

if(sa_line_func_mat7 ===0 || sa_line_func_mat8 ===0 ){
    sa_line_func_mat9 = 0+"%"
}
else {
    sa_line_func_mat9 = Math.round(sa_line_func_mat8/sa_line_func_mat7*100)+"%"
}

//SA-sum
sa_line_func_sum1 = sa_line_func_bond1+sa_line_func_glu1+sa_line_func_ass1+sa_line_func_scr1+sa_line_func_cab1+sa_line_func_mat1
sa_line_func_sum2 = sa_line_func_bond2+sa_line_func_glu2+sa_line_func_ass2+sa_line_func_scr2+sa_line_func_cab2+sa_line_func_mat2
sa_line_func_sum4 = sa_line_func_bond4+sa_line_func_glu4+sa_line_func_ass4+sa_line_func_scr4+sa_line_func_cab4+sa_line_func_mat4
sa_line_func_sum5 = sa_line_func_bond5+sa_line_func_glu5+sa_line_func_ass5+sa_line_func_scr5+sa_line_func_cab5+sa_line_func_mat5
sa_line_func_sum7 = sa_line_func_bond7+sa_line_func_glu7+sa_line_func_ass7+sa_line_func_scr7+sa_line_func_cab7+sa_line_func_mat7
sa_line_func_sum8 = sa_line_func_bond8+sa_line_func_glu8+sa_line_func_ass8+sa_line_func_scr8+sa_line_func_cab8+sa_line_func_mat8

//SA-sum %

if(sa_line_func_sum1 ===0 || sa_line_func_sum2 ===0 ){
    sa_line_func_sum3 = 0+"%"
}
else {
    sa_line_func_sum3 = Math.round(sa_line_func_sum2/sa_line_func_sum1*100)+"%"
}

if(sa_line_func_sum4 ===0 || sa_line_func_sum5 ===0 ){
    sa_line_func_sum6 = 0+"%"
}
else {
    sa_line_func_sum6 = Math.round(sa_line_func_sum5/sa_line_func_sum4*100)+"%"
}

if(sa_line_func_sum7 ===0 || sa_line_func_sum8 ===0 ){
    sa_line_func_sum9 = 0+"%"
}
else {
    sa_line_func_sum9 = Math.round(sa_line_func_sum8/sa_line_func_sum7*100)+"%"
}


document.getElementById("sa-line-func-bond1").innerHTML = sa_line_func_bond1
document.getElementById("sa-line-func-bond2").innerHTML = sa_line_func_bond2
document.getElementById("sa-line-func-bond3").innerHTML = sa_line_func_bond3
document.getElementById("sa-line-func-bond4").innerHTML = sa_line_func_bond4
document.getElementById("sa-line-func-bond5").innerHTML = sa_line_func_bond5
document.getElementById("sa-line-func-bond6").innerHTML = sa_line_func_bond6
document.getElementById("sa-line-func-bond7").innerHTML = sa_line_func_bond7
document.getElementById("sa-line-func-bond8").innerHTML = sa_line_func_bond8
document.getElementById("sa-line-func-bond9").innerHTML = sa_line_func_bond9

document.getElementById("sa-line-func-glu1").innerHTML = sa_line_func_glu1
document.getElementById("sa-line-func-glu2").innerHTML = sa_line_func_glu2
document.getElementById("sa-line-func-glu3").innerHTML = sa_line_func_glu3
document.getElementById("sa-line-func-glu4").innerHTML = sa_line_func_glu4
document.getElementById("sa-line-func-glu5").innerHTML = sa_line_func_glu5
document.getElementById("sa-line-func-glu6").innerHTML = sa_line_func_glu6
document.getElementById("sa-line-func-glu7").innerHTML = sa_line_func_glu7
document.getElementById("sa-line-func-glu8").innerHTML = sa_line_func_glu8
document.getElementById("sa-line-func-glu9").innerHTML = sa_line_func_glu9

document.getElementById("sa-line-func-ass1").innerHTML = sa_line_func_ass1
document.getElementById("sa-line-func-ass2").innerHTML = sa_line_func_ass2
document.getElementById("sa-line-func-ass3").innerHTML = sa_line_func_ass3
document.getElementById("sa-line-func-ass4").innerHTML = sa_line_func_ass4
document.getElementById("sa-line-func-ass5").innerHTML = sa_line_func_ass5
document.getElementById("sa-line-func-ass6").innerHTML = sa_line_func_ass6
document.getElementById("sa-line-func-ass7").innerHTML = sa_line_func_ass7
document.getElementById("sa-line-func-ass8").innerHTML = sa_line_func_ass8
document.getElementById("sa-line-func-ass9").innerHTML = sa_line_func_ass9

document.getElementById("sa-line-func-scr1").innerHTML = sa_line_func_scr1
document.getElementById("sa-line-func-scr2").innerHTML = sa_line_func_scr2
document.getElementById("sa-line-func-scr3").innerHTML = sa_line_func_scr3
document.getElementById("sa-line-func-scr4").innerHTML = sa_line_func_scr4
document.getElementById("sa-line-func-scr5").innerHTML = sa_line_func_scr5
document.getElementById("sa-line-func-scr6").innerHTML = sa_line_func_scr6
document.getElementById("sa-line-func-scr7").innerHTML = sa_line_func_scr7
document.getElementById("sa-line-func-scr8").innerHTML = sa_line_func_scr8
document.getElementById("sa-line-func-scr9").innerHTML = sa_line_func_scr9

document.getElementById("sa-line-func-cab1").innerHTML = sa_line_func_cab1
document.getElementById("sa-line-func-cab2").innerHTML = sa_line_func_cab2
document.getElementById("sa-line-func-cab3").innerHTML = sa_line_func_cab3
document.getElementById("sa-line-func-cab4").innerHTML = sa_line_func_cab4
document.getElementById("sa-line-func-cab5").innerHTML = sa_line_func_cab5
document.getElementById("sa-line-func-cab6").innerHTML = sa_line_func_cab6
document.getElementById("sa-line-func-cab7").innerHTML = sa_line_func_cab7
document.getElementById("sa-line-func-cab8").innerHTML = sa_line_func_cab8
document.getElementById("sa-line-func-cab9").innerHTML = sa_line_func_cab9

document.getElementById("sa-line-func-mat1").innerHTML = sa_line_func_mat1
document.getElementById("sa-line-func-mat2").innerHTML = sa_line_func_mat2
document.getElementById("sa-line-func-mat3").innerHTML = sa_line_func_mat3
document.getElementById("sa-line-func-mat4").innerHTML = sa_line_func_mat4
document.getElementById("sa-line-func-mat5").innerHTML = sa_line_func_mat5
document.getElementById("sa-line-func-mat6").innerHTML = sa_line_func_mat6
document.getElementById("sa-line-func-mat7").innerHTML = sa_line_func_mat7
document.getElementById("sa-line-func-mat8").innerHTML = sa_line_func_mat8
document.getElementById("sa-line-func-mat9").innerHTML = sa_line_func_mat9

document.getElementById("sa-line-func-sum1").innerHTML = sa_line_func_sum1
document.getElementById("sa-line-func-sum2").innerHTML = sa_line_func_sum2
document.getElementById("sa-line-func-sum3").innerHTML = sa_line_func_sum3
document.getElementById("sa-line-func-sum4").innerHTML = sa_line_func_sum4
document.getElementById("sa-line-func-sum5").innerHTML = sa_line_func_sum5
document.getElementById("sa-line-func-sum6").innerHTML = sa_line_func_sum6
document.getElementById("sa-line-func-sum7").innerHTML = sa_line_func_sum7
document.getElementById("sa-line-func-sum8").innerHTML = sa_line_func_sum8
document.getElementById("sa-line-func-sum9").innerHTML = sa_line_func_sum9

document.getElementById("sa-line-func-cnc").innerHTML = sa_line_func_sum3
document.getElementById("sa-line-func-sipv").innerHTML = sa_line_func_sum6
document.getElementById("sa-line-func-mvmp").innerHTML = sa_line_func_sum9
}
function DFAtable6_init(){

    var table_init = $('#DFA-table6').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("DFA-table6");
    var tableLen = table.rows.length;

    var sa_line_est_bond1 = 0;
    var sa_line_est_bond2 = 0;
    var sa_line_est_bond3 = 0;
    var sa_line_est_bond4 = 0;
    var sa_line_est_bond5 = 0;
    var sa_line_est_bond6 = 0;
    var sa_line_est_bond7 = 0;
    var sa_line_est_bond8 = 0;
    var sa_line_est_bond9 = 0;

    var sa_line_est_glu1 = 0;
    var sa_line_est_glu2 = 0;
    var sa_line_est_glu3 = 0;
    var sa_line_est_glu4 = 0;
    var sa_line_est_glu5 = 0;
    var sa_line_est_glu6 = 0;
    var sa_line_est_glu7 = 0;
    var sa_line_est_glu8 = 0;
    var sa_line_est_glu9 = 0;

    var sa_line_est_ass1 = 0;
    var sa_line_est_ass2 = 0;
    var sa_line_est_ass3 = 0;
    var sa_line_est_ass4 = 0;
    var sa_line_est_ass5 = 0;
    var sa_line_est_ass6 = 0;
    var sa_line_est_ass7 = 0;
    var sa_line_est_ass8 = 0;
    var sa_line_est_ass9 = 0;

    var sa_line_est_scr1 = 0;
    var sa_line_est_scr2 = 0;
    var sa_line_est_scr3 = 0;
    var sa_line_est_scr4 = 0;
    var sa_line_est_scr5 = 0;
    var sa_line_est_scr6 = 0;
    var sa_line_est_scr7 = 0;
    var sa_line_est_scr8 = 0;
    var sa_line_est_scr9 = 0;

    var sa_line_est_cab1 = 0;
    var sa_line_est_cab2 = 0;
    var sa_line_est_cab3 = 0;
    var sa_line_est_cab4 = 0;
    var sa_line_est_cab5 = 0;
    var sa_line_est_cab6 = 0;
    var sa_line_est_cab7 = 0;
    var sa_line_est_cab8 = 0;
    var sa_line_est_cab9 = 0;

    var sa_line_est_mat1 = 0;
    var sa_line_est_mat2 = 0;
    var sa_line_est_mat3 = 0;
    var sa_line_est_mat4 = 0;
    var sa_line_est_mat5 = 0;
    var sa_line_est_mat6 = 0;
    var sa_line_est_mat7 = 0;
    var sa_line_est_mat8 = 0;
    var sa_line_est_mat9 = 0;

    var sa_line_est_sum1 = 0;
    var sa_line_est_sum2 = 0;
    var sa_line_est_sum3 = 0;
    var sa_line_est_sum4 = 0;
    var sa_line_est_sum5 = 0;
    var sa_line_est_sum6 = 0;
    var sa_line_est_sum7 = 0;
    var sa_line_est_sum8 = 0;
    var sa_line_est_sum9 = 0;

for (var i = 1; i < tableLen; i++) {

    var coltext2 = table.rows[i].cells[2].innerText;
    var coltext3 = table.rows[i].cells[3].innerText;
    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = table.rows[i].cells[5].innerText;
    var coltext6 = table.rows[i].cells[6].innerText;
    var coltext7 = table.rows[i].cells[7].innerText;
    var coltext8 = Number(table.rows[i].cells[8].innerText);

//SA-bond
    if (coltext4 === "SA" && coltext3 > 0 && coltext2 === "Bonding") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_est_bond1 = sa_line_est_bond1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_est_bond4 = sa_line_est_bond4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_est_bond7 = sa_line_est_bond7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            sa_line_est_bond2 = sa_line_est_bond2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            sa_line_est_bond5 = sa_line_est_bond5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            sa_line_est_bond8 = sa_line_est_bond8 + (coltext3 * coltext8)
        }

    }
//SA-glu
    else if (coltext4 === "SA" && coltext3 > 0 && coltext2 === "Gluing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_est_glu1 = sa_line_est_glu1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_est_glu4 = sa_line_est_glu4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_est_glu7 = sa_line_est_glu7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            sa_line_est_glu2 = sa_line_est_glu2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            sa_line_est_glu5 = sa_line_est_glu5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            sa_line_est_glu8 = sa_line_est_glu8 + (coltext3 * coltext8)
        }

    }
//SA-ass
        else if (coltext4 === "SA" && coltext3 > 0 && coltext2 === "Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_est_ass1 = sa_line_est_ass1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_est_ass4 = sa_line_est_ass4 + (coltext3 * coltext8)
        }
       if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_est_ass7 = sa_line_est_ass7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            sa_line_est_ass2 = sa_line_est_ass2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            sa_line_est_ass5 = sa_line_est_ass5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            sa_line_est_ass8 = sa_line_est_ass8 + (coltext3 * coltext8)
        }

    }
//SA-scr
        else if (coltext4 === "SA" && coltext3 > 0 && coltext2 === "Screwing") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_est_scr1 = sa_line_est_scr1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_est_scr4 = sa_line_est_scr4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_est_scr7 = sa_line_est_scr7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            sa_line_est_scr2 = sa_line_est_scr2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            sa_line_est_scr5 = sa_line_est_scr5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            sa_line_est_scr8 = sa_line_est_scr8 + (coltext3 * coltext8)
        }

    }
//SA-cab
        else if (coltext4 === "SA" && coltext3 > 0 && coltext2 === "Cables Assembly") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_est_cab1 = sa_line_est_cab1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_est_cab4 = sa_line_est_cab4 + (coltext3 * coltext8)
        }
         if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_est_cab7 = sa_line_est_cab7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            sa_line_est_cab2 = sa_line_est_cab2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            sa_line_est_cab5 = sa_line_est_cab5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            sa_line_est_cab8 = sa_line_est_cab8 + (coltext3 * coltext8)
        }

    }
//SA-mat
        else if (coltext4 === "SA" && coltext3 > 0 && coltext2 === "Material Scan & link") {

        if (coltext5 === "N" || coltext5 === "Y" || coltext5 === "N/A") {
            sa_line_est_mat1 = sa_line_est_mat1 + (coltext3 * coltext8)
        }
        if (coltext6 === "N" || coltext6 === "Y" || coltext6 === "N/A") {
            sa_line_est_mat4 = sa_line_est_mat4 + (coltext3 * coltext8)
        }
        if (coltext7 === "N" || coltext7 === "Y" || coltext7 === "N/A") {
            sa_line_est_mat7 = sa_line_est_mat7 + (coltext3 * coltext8)
        }

        if (coltext5 === "Y") {
            sa_line_est_mat2 = sa_line_est_mat2 + (coltext3 * coltext8)
        }
        if (coltext6 === "Y") {
            sa_line_est_mat5 = sa_line_est_mat5 + (coltext3 * coltext8)
        }
        if (coltext7 === "Y") {
            sa_line_est_mat8 = sa_line_est_mat8 + (coltext3 * coltext8)
        }

    }
}

//SA-bond %

if(sa_line_est_bond1 ===0 || sa_line_est_bond2 ===0 ){
    sa_line_est_bond3 = 0+"%"
}
else {
    sa_line_est_bond3 = Math.round(sa_line_est_bond2/sa_line_est_bond1*100)+"%"
}

if(sa_line_est_bond4 ===0 || sa_line_est_bond5 ===0 ){
    sa_line_est_bond6 = 0+"%"
}
else {
    sa_line_est_bond6 = Math.round(sa_line_est_bond5/sa_line_est_bond4*100)+"%"
}

if(sa_line_est_bond7 ===0 || sa_line_est_bond8 ===0 ){
    sa_line_est_bond9 = 0+"%"
}
else {
    sa_line_est_bond9 = Math.round(sa_line_est_bond8/sa_line_est_bond7*100)+"%"
}

//SA-glu %

if(sa_line_est_glu1 ===0 || sa_line_est_glu2 ===0 ){
    sa_line_est_glu3 = 0+"%"
}
else {
    sa_line_est_glu3 = Math.round(sa_line_est_glu2/sa_line_est_glu1*100)+"%"
}

if(sa_line_est_glu4 ===0 || sa_line_est_glu5 ===0 ){
    sa_line_est_glu6 = 0+"%"
}
else {
    sa_line_est_glu6 = Math.round(sa_line_est_glu5/sa_line_est_glu4*100)+"%"
}

if(sa_line_est_glu7 ===0 || sa_line_est_glu8 ===0 ){
    sa_line_est_glu9 = 0+"%"
}
else {
    sa_line_est_glu9 = Math.round(sa_line_est_glu8/sa_line_est_glu7*100)+"%"
}

//SA-ass %

if(sa_line_est_ass1 ===0 || sa_line_est_ass2 ===0 ){
    sa_line_est_ass3 = 0+"%"
}
else {
    sa_line_est_ass3 = Math.round(sa_line_est_ass2/sa_line_est_ass1*100)+"%"
}

if(sa_line_est_ass4 ===0 || sa_line_est_ass5 ===0 ){
    sa_line_est_ass6 = 0+"%"
}
else {
    sa_line_est_ass6 = Math.round(sa_line_est_ass5/sa_line_est_ass4*100)+"%"
}

if(sa_line_est_ass7 ===0 || sa_line_est_ass8 ===0 ){
    sa_line_est_ass9 = 0+"%"
}
else {
    sa_line_est_ass9 = Math.round(sa_line_est_ass8/sa_line_est_ass7*100)+"%"
}

//SA-scr %

if(sa_line_est_scr1 ===0 || sa_line_est_scr2 ===0 ){
    sa_line_est_scr3 = 0+"%"
}
else {
    sa_line_est_scr3 = Math.round(sa_line_est_scr2/sa_line_est_scr1*100)+"%"
}

if(sa_line_est_scr4 ===0 || sa_line_est_scr5 ===0 ){
    sa_line_est_scr6 = 0+"%"
}
else {
    sa_line_est_scr6 = Math.round(sa_line_est_scr5/sa_line_est_scr4*100)+"%"
}

if(sa_line_est_scr7 ===0 || sa_line_est_scr8 ===0 ){
    sa_line_est_scr9 = 0+"%"
}
else {
    sa_line_est_scr9 = Math.round(sa_line_est_scr8/sa_line_est_scr7*100)+"%"
}

//SA-cab %

if(sa_line_est_cab1 ===0 || sa_line_est_cab2 ===0 ){
    sa_line_est_cab3 = 0+"%"
}
else {
    sa_line_est_cab3 = Math.round(sa_line_est_cab2/sa_line_est_cab1*100)+"%"
}

if(sa_line_est_cab4 ===0 || sa_line_est_cab5 ===0 ){
    sa_line_est_cab6 = 0+"%"
}
else {
    sa_line_est_cab6 = Math.round(sa_line_est_cab5/sa_line_est_cab4*100)+"%"
}

if(sa_line_est_cab7 ===0 || sa_line_est_cab8 ===0 ){
    sa_line_est_cab9 = 0+"%"
}
else {
    sa_line_est_cab9 = Math.round(sa_line_est_cab8/sa_line_est_cab7*100)+"%"
}

//SA-mat %

if(sa_line_est_mat1 ===0 || sa_line_est_mat2 ===0 ){
    sa_line_est_mat3 = 0+"%"
}
else {
    sa_line_est_mat3 = Math.round(sa_line_est_mat2/sa_line_est_mat1*100)+"%"
}

if(sa_line_est_mat4 ===0 || sa_line_est_mat5 ===0 ){
    sa_line_est_mat6 = 0+"%"
}
else {
    sa_line_est_mat6 = Math.round(sa_line_est_mat5/sa_line_est_mat4*100)+"%"
}

if(sa_line_est_mat7 ===0 || sa_line_est_mat8 ===0 ){
    sa_line_est_mat9 = 0+"%"
}
else {
    sa_line_est_mat9 = Math.round(sa_line_est_mat8/sa_line_est_mat7*100)+"%"
}

//SA-sum
sa_line_est_sum1 = sa_line_est_bond1+sa_line_est_glu1+sa_line_est_ass1+sa_line_est_scr1+sa_line_est_cab1+sa_line_est_mat1
sa_line_est_sum2 = sa_line_est_bond2+sa_line_est_glu2+sa_line_est_ass2+sa_line_est_scr2+sa_line_est_cab2+sa_line_est_mat2
sa_line_est_sum4 = sa_line_est_bond4+sa_line_est_glu4+sa_line_est_ass4+sa_line_est_scr4+sa_line_est_cab4+sa_line_est_mat4
sa_line_est_sum5 = sa_line_est_bond5+sa_line_est_glu5+sa_line_est_ass5+sa_line_est_scr5+sa_line_est_cab5+sa_line_est_mat5
sa_line_est_sum7 = sa_line_est_bond7+sa_line_est_glu7+sa_line_est_ass7+sa_line_est_scr7+sa_line_est_cab7+sa_line_est_mat7
sa_line_est_sum8 = sa_line_est_bond8+sa_line_est_glu8+sa_line_est_ass8+sa_line_est_scr8+sa_line_est_cab8+sa_line_est_mat8

//SA-sum %

if(sa_line_est_sum1 ===0 || sa_line_est_sum2 ===0 ){
    sa_line_est_sum3 = 0+"%"
}
else {
    sa_line_est_sum3 = Math.round(sa_line_est_sum2/sa_line_est_sum1*100)+"%"
}

if(sa_line_est_sum4 ===0 || sa_line_est_sum5 ===0 ){
    sa_line_est_sum6 = 0+"%"
}
else {
    sa_line_est_sum6 = Math.round(sa_line_est_sum5/sa_line_est_sum4*100)+"%"
}

if(sa_line_est_sum7 ===0 || sa_line_est_sum8 ===0 ){
    sa_line_est_sum9 = 0+"%"
}
else {
    sa_line_est_sum9 = Math.round(sa_line_est_sum8/sa_line_est_sum7*100)+"%"
}


document.getElementById("sa-line-est-bond1").innerHTML = sa_line_est_bond1
document.getElementById("sa-line-est-bond2").innerHTML = sa_line_est_bond2
document.getElementById("sa-line-est-bond3").innerHTML = sa_line_est_bond3
document.getElementById("sa-line-est-bond4").innerHTML = sa_line_est_bond4
document.getElementById("sa-line-est-bond5").innerHTML = sa_line_est_bond5
document.getElementById("sa-line-est-bond6").innerHTML = sa_line_est_bond6
document.getElementById("sa-line-est-bond7").innerHTML = sa_line_est_bond7
document.getElementById("sa-line-est-bond8").innerHTML = sa_line_est_bond8
document.getElementById("sa-line-est-bond9").innerHTML = sa_line_est_bond9

document.getElementById("sa-line-est-glu1").innerHTML = sa_line_est_glu1
document.getElementById("sa-line-est-glu2").innerHTML = sa_line_est_glu2
document.getElementById("sa-line-est-glu3").innerHTML = sa_line_est_glu3
document.getElementById("sa-line-est-glu4").innerHTML = sa_line_est_glu4
document.getElementById("sa-line-est-glu5").innerHTML = sa_line_est_glu5
document.getElementById("sa-line-est-glu6").innerHTML = sa_line_est_glu6
document.getElementById("sa-line-est-glu7").innerHTML = sa_line_est_glu7
document.getElementById("sa-line-est-glu8").innerHTML = sa_line_est_glu8
document.getElementById("sa-line-est-glu9").innerHTML = sa_line_est_glu9

document.getElementById("sa-line-est-ass1").innerHTML = sa_line_est_ass1
document.getElementById("sa-line-est-ass2").innerHTML = sa_line_est_ass2
document.getElementById("sa-line-est-ass3").innerHTML = sa_line_est_ass3
document.getElementById("sa-line-est-ass4").innerHTML = sa_line_est_ass4
document.getElementById("sa-line-est-ass5").innerHTML = sa_line_est_ass5
document.getElementById("sa-line-est-ass6").innerHTML = sa_line_est_ass6
document.getElementById("sa-line-est-ass7").innerHTML = sa_line_est_ass7
document.getElementById("sa-line-est-ass8").innerHTML = sa_line_est_ass8
document.getElementById("sa-line-est-ass9").innerHTML = sa_line_est_ass9

document.getElementById("sa-line-est-scr1").innerHTML = sa_line_est_scr1
document.getElementById("sa-line-est-scr2").innerHTML = sa_line_est_scr2
document.getElementById("sa-line-est-scr3").innerHTML = sa_line_est_scr3
document.getElementById("sa-line-est-scr4").innerHTML = sa_line_est_scr4
document.getElementById("sa-line-est-scr5").innerHTML = sa_line_est_scr5
document.getElementById("sa-line-est-scr6").innerHTML = sa_line_est_scr6
document.getElementById("sa-line-est-scr7").innerHTML = sa_line_est_scr7
document.getElementById("sa-line-est-scr8").innerHTML = sa_line_est_scr8
document.getElementById("sa-line-est-scr9").innerHTML = sa_line_est_scr9

document.getElementById("sa-line-est-cab1").innerHTML = sa_line_est_cab1
document.getElementById("sa-line-est-cab2").innerHTML = sa_line_est_cab2
document.getElementById("sa-line-est-cab3").innerHTML = sa_line_est_cab3
document.getElementById("sa-line-est-cab4").innerHTML = sa_line_est_cab4
document.getElementById("sa-line-est-cab5").innerHTML = sa_line_est_cab5
document.getElementById("sa-line-est-cab6").innerHTML = sa_line_est_cab6
document.getElementById("sa-line-est-cab7").innerHTML = sa_line_est_cab7
document.getElementById("sa-line-est-cab8").innerHTML = sa_line_est_cab8
document.getElementById("sa-line-est-cab9").innerHTML = sa_line_est_cab9

document.getElementById("sa-line-est-mat1").innerHTML = sa_line_est_mat1
document.getElementById("sa-line-est-mat2").innerHTML = sa_line_est_mat2
document.getElementById("sa-line-est-mat3").innerHTML = sa_line_est_mat3
document.getElementById("sa-line-est-mat4").innerHTML = sa_line_est_mat4
document.getElementById("sa-line-est-mat5").innerHTML = sa_line_est_mat5
document.getElementById("sa-line-est-mat6").innerHTML = sa_line_est_mat6
document.getElementById("sa-line-est-mat7").innerHTML = sa_line_est_mat7
document.getElementById("sa-line-est-mat8").innerHTML = sa_line_est_mat8
document.getElementById("sa-line-est-mat9").innerHTML = sa_line_est_mat9

document.getElementById("sa-line-est-sum1").innerHTML = sa_line_est_sum1
document.getElementById("sa-line-est-sum2").innerHTML = sa_line_est_sum2
document.getElementById("sa-line-est-sum3").innerHTML = sa_line_est_sum3
document.getElementById("sa-line-est-sum4").innerHTML = sa_line_est_sum4
document.getElementById("sa-line-est-sum5").innerHTML = sa_line_est_sum5
document.getElementById("sa-line-est-sum6").innerHTML = sa_line_est_sum6
document.getElementById("sa-line-est-sum7").innerHTML = sa_line_est_sum7
document.getElementById("sa-line-est-sum8").innerHTML = sa_line_est_sum8
document.getElementById("sa-line-est-sum9").innerHTML = sa_line_est_sum9

document.getElementById("sa-line-est-cnc").innerHTML = sa_line_est_sum3
document.getElementById("sa-line-est-sipv").innerHTML = sa_line_est_sum6
document.getElementById("sa-line-est-mvmp").innerHTML = sa_line_est_sum9

}

