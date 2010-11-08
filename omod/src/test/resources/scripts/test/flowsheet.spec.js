Screw.Unit(function() {
    describe("Flowsheet grid", function() {
        var flowsheet;
        var data;
        before(function() {
            flowsheet = new Flowsheet("flowsheet");
            data = new FlowsheetData(SampleFlowsheetData());
            flowsheet.render(data.entries);
        }),
                it("should display the concept name of the observation", function() {
                    var name = $('#2').find('td:nth-child(2)').html();
                    expect(name).to(equal, data.entries[2].name);
                }),
                it("should display the concept value of the observation", function() {
                    var value = $('#2').find('td:nth-child(3)').html();
                    expect(value).to(equal, data.entries[2].value);
                }),
                it("should display date of the observation", function() {
                    var date = $('#2').find('td:nth-child(1)').html();
                    expect(date).to(equal, "12/01/2002");//formatted date
                }),
                it("should display observation in reverse chronological order", function() {
                    var firstRowDate = $('#1').find('td:nth-child(1)').html();
                    var secondRowDate = $('#2').find('td:nth-child(1)').html();
                    expect(firstRowDate).to(equal, "12/01/2010");
                    expect(secondRowDate).to(equal, "12/01/2002");
                }),
                it("should display observations grouped by date", function() {
                    var firstGroupRowDate = $('#flowsheetghead_0').find('td:nth-child(1) b').html();
                    var secondGroupRowDate = $('#flowsheetghead_1').find('td:nth-child(1) b').html();
                    expect(firstGroupRowDate).to(equal, "2010-01-12");
                    expect(secondGroupRowDate).to(equal, "2002-01-12");
                }),
                it("should display the range value for numeric observation", function() {
                    var value = $('#2').find('td:nth-child(4)').html();
                    expect(value).to(equal, "("+data.entries[2].numeric.low +"-"+data.entries[2].numeric.hi+" "+data.entries[2].numeric.unit+")");
                }),
                it("should not display the range value for non-numeric observation", function() {
                    var value = $('#3').find('td:nth-child(4)').html();
                    expect(value).to(equal, " ");
                })

    })
});


Screw.Unit(function() {
    describe("Flowsheet data", function() {
        var flowsheetData = new FlowsheetData(SampleFlowsheetData());
        it("should return the unique sorted array of dates", function() {
            var range = flowsheetData.getDateRange();
            expect(range.length).to(equal, 3);
            expect(range[0]).to(equal, "2001-01-12");
            expect(range[1]).to(equal, "2002-01-12");
            expect(range[2]).to(equal, "2010-01-12");

        }),
        it("should be able to filter data by date",function(){
            var filteredData = flowsheetData.filterEntriesByDate("2002-01-02","2020-01-01");
            expect(filteredData.length).to(equal,3);
            filteredData = flowsheetData.filterEntriesByDate("1998-01-02","2020-01-01");
            expect(filteredData.length).to(equal,5);

        })
    })
});

Screw.Unit(function() {
    describe("Date range filter", function() {
        var dateFilterId = "dateFilter";
        it("should create a date range slider for the observations", function() {
            var slider = new DateRangeSlider(jQuery("#slider"));
            slider.render(new FlowsheetData(SampleFlowsheetData()).getDateRange(), dateFilterId);
            expect(jQuery("#"+dateFilterId).val()).to(equal,"2001-01-12 - 2010-01-12");
        })
    })
});
