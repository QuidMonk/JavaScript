var states=[
    "Delhi","mumbai",1999,"Goa","Punjab","Kasol","Pakur"
];

// for(let i=0;i<states.length;i++)
// {if(typeof states[i]!=="string")
// continue;
//     console.log(states[i]);
// }

//states.forEach((e) =>console.log(e));

// for (var s of states)
// {
//     console.log(s);
// }

var symbols={
    yt:"youtube",
    fb:"facebook",
    ig:"instagram",
    nf:"netflix"
}

for (const s in symbols){
    console.log(`${s}: ${symbols[s]}`);
}

