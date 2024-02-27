
const setr = "\r\n";
let balansmelumati = setr+"1 - Balansizin yoxlamaq" + setr
            +"2 - Balansinizdan pul cekmek " +setr
            +"3 - Cixmaq"+setr;
let cekileceksumma = setr+"10 - Azn" + setr
            +"100 - Azn " +setr
            +"200 - Azn"+setr
            +"500 - Azn"+setr
            +"<1>   Diger"+setr;

let miqdar = 1000;
let daxilolunan = Number(prompt("Zehmet olmasa birini daxil edin." + balansmelumati));

if( daxilolunan != ""){
    switch(daxilolunan){
        case 1:
            console.log("Sizin balansinizda " + miqdar + " Azn pul var");
        break;
        case 2:
            let how = Number(prompt("Neqeder pul cekmek isteyirsiniz ?" + cekileceksumma));
                if(how<=miqdar){
                    let buy=miqdar-how;
                    console.log("Sizin balansinizda "+ buy + " Azn mebleg qaldi." + setr + "Emeliyyatin icra olmasini gozleyin .....");
                }else{
                    alert("sizin balansinizda kifayet qeder vesait yoxdur." + setr +"Balansiniz: " +  miqdar + setr + "Eksik mezenne: "+(how-miqdar) );
                }
        break;
        default:
         alert("Cox tessufki isteyiniz qeyd alinmadi.Zehmet olmasa yeniden cehd edin.");
        break;
    }
}else{
    console.log("Zehmet olmasa xanalari bos buraxmayin.");
}
