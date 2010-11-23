var SampleFlowsheetData = function() {
    var sampleflowsheet = {
        entries : [
            {name:"Systolic blood pressure",value:"",dataType:"numeric",classType:"Test", date: "2001-01-12",numeric:{hi:"",low:"",unit:"mmHg"}},
            {name:"diastolic blood pressure",value:"55",dataType:"numeric",classType:"Diagnosis", date: "2001-01-12",numeric:{hi:"150",low:"100",unit:"mmHg"}},
            {name:"Temparature (C)",value:"103",dataType:"numeric",classType:"Test", date: "2002-01-12",numeric:{hi:"150",low:"100",unit:"DEG C"}},
            {name:"Pregnancy status",value:"false",dataType:"boolean",classType:"Finding",date: "2002-01-12"},
            {name:"Problem added",value:"Dermatitis",dataType:"non-numeric",classType:"Finding", date: "2010-01-12"}

        ],
        "conceptMap":{
            "Systolic blood pressure"
        :
            {
                "desc":
                "SBP is the pressure exerted by circulating blood upon the walls of blood vessels, and is one of the principal vital signs."
            }
        }
    };
    this.flowsheet = sampleflowsheet;
    return this;
}