function centesimiInSessantesimi(){
    let input = prompt("Inserisci il valore in centesimi.");
    if(input!="") console.log(`Il valore in sessantesimi è ${input * (60/100)}`);
     else console.log("vuoto!");
}