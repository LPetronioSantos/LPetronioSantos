function tempo(data1, data2, unidade){
    d1 = new Date(data1);
    d2 = new Date(data2);
    a1 = d1.getUTCFullYear();
    a2 = d2.getUTCFullYear();
    dia1 = d1.getUTCDay();
    dia2 = d2.getUTCDay();

    
    if (unidade == "ano"){return Math.abs(a1-a2)
    }
        if( unidade == "dia"){return (dia1 - dia2)
         ;}
            if(unidade == "mês"){return
         ;}
}

console.log(tempo(1243817066000, "2009-07-28T19:24:00", "dia"));
/*var d1 = ("2018-01-01")
var d2 = ("2019-03-22")
var v1 = new Date(d1)
var v2 = new Date(d2)
var r1 = v1.getUTCFullYear();
var r2 = v2.getUTCFullYear();
result = Math.abs(parseInt(r1-r2))
console.log(result);*/