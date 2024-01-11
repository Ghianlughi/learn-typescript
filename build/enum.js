"use strict";
// enum 
// numeric enum
// enum Month{
//     JANUARI = 1,
//     FEBBRUARI,
//     MARET,
//     APRIL,
//     MAY
// }
// console.log(Month.MAR)
var Month;
(function (Month) {
    Month["Bulan1"] = "Januari";
    Month["Bulan2"] = "Februari";
    Month["Bulan3"] = "Maret";
    Month["Bulan4"] = "April";
    Month["Bulan5"] = "Mei";
})(Month || (Month = {}));
console.log(Month.Bulan1);
