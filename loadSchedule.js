var scheduleRef = firebase.database().ref('schedule');
scheduleRef.on('value', function(snapshot) {
    const data = snapshot.val();
    //console.log(data);
    app.schedule = data;
});


const theSchedule = {

    overrides:{
        //Sunday
    //Monday

        "7-17-2020":[
            {name:"Assembly", start:[10,0],end:[11,0]},
            {name:"Period 1", start:[11,10],end:[11,30]},
            {name:"Period 2", start:[11,40],end:[12,0]},
            {name:"Period 3", start:[12,10],end:[12,30]},
            {name:"Lunch", start:[12,30],end:[13,0]},
            {name:"Period 4", start:[13,10],end:[13,35]},
            {name:"Period 5", start:[13,45],end:[14,5]},
            {name:"Period 6", start:[14,15],end:[14,35]},
            {name:"Period 7", start:[14,45],end:[15,5]},
            {name:"Period 8", start:[15,15],end:[15,35]}
        ],
        "7-19-2020":[
            {name:"Period 5", start:[9,40],end:[10,55]},
            {name:"Go to Period 5", start:[11,5],end:[11,40]},
            {name:"Lunch", start:[11,40],end:[12,10]},
            {name:"Period 6", start:[12,20],end:[13,35]},
            {name:"Period 7", start:[13,45],end:[15,0]},
        ]
},
   //array where 0:Sunday, 6:Saturday
    defaults:[
        [],
        [
            {name:"Period 1", start:[10,0],end:[10,30]},
            {name:"Period 2", start:[10,40],end:[11,10]},
            {name:"Period 3", start:[11,20],end:[11,50]},
            {name:"Period 4", start:[12,0],end:[12,35]},
            {name:"Lunch", start:[12,35],end:[13,5]},
            {name:"Period 5", start:[13,15],end:[13,45]},
            {name:"Period 6", start:[13,55],end:[14,25]},
            {name:"Period 7", start:[14,35],end:[15,5]},
            {name:"Period 8", start:[15,45],end:[16,15]}
            ],
        [
            {name:"Period 1", start:[9,0],end:[10,15]},
            {name:"Period 2", start:[10,25],end:[11,40]},
            {name:"Lunch", start:[11,40],end:[12,10]},
            {name:"Period 3", start:[12,20],end:[13,35]},
            {name:"Period 4", start:[13,45],end:[15,0]},

            {name:"Period 8", start:[15,45],end:[17,0]}
        ],
        [
            {name:"Period 5", start:[9,40],end:[10,55]},
            {name:"Gunn Together", start:[11,5],end:[11,40]},
            {name:"Lunch", start:[11,40],end:[12,10]},
            {name:"Period 6", start:[12,20],end:[13,35]},
            {name:"Period 7", start:[13,45],end:[15,0]},

        ],
        [
            {name:"Period 1", start:[9,0],end:[10,15]},
            {name:"Period 2", start:[10,25],end:[11,40]},
            {name:"Lunch", start:[11,40],end:[12,10]},
            {name:"Period 3", start:[12,20],end:[13,35]},
            {name:"Period 4", start:[13,45],end:[15,0]},

            {name:"Period 8", start:[15,45],end:[17,0]}
        ],
        [
            {name:"Period 5", start:[9,40],end:[10,55]},
            {name:"SELF", start:[11,5],end:[11,40]},
            {name:"Lunch", start:[11,40],end:[12,10]},
            {name:"Period 6", start:[12,20],end:[13,35]},
            {name:"Period 7", start:[13,45],end:[15,0]},

        ],
        []

    ]
    

}



