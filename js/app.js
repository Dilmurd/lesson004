// // 1-masala
// switch (1) {
//     case 1:
//         console.log(` 1:${"chorshanba"} `);
//         break;
//     case 2:
//         console.log(` 2:${"dushanba"} `);
//         break;
//     case 3:
//         console.log(` 3:${"payshanba"} `);
//         break;
//     default:
//         console.log("uyga bor");
        
//         break;
// }
// // 2-masala
// switch (5) {
//     case 1:
//         console.log(`1-${"yomon"}`);
//         break;
//     case 2:
//         console.log(`2-${"qoniqarsiz"}`);
//         break;
//     case 3:
//         console.log(`3-${"qoniqarli"}`);
//         break;
//     case 4:
//         console.log(`4-${"yahshi"}`);
//         break;
//     case 5:
//         console.log(`5-${"a'lo"}`);
//         break;

//     default:
//         console.log("uyga bor bolam");
        
//         break;
// }
// // 3-masala
// switch (33) {
//     case 1:
//         console.log(`1 chi oy ${"qish"}`);
//         break;
//     case 2:
//         console.log(`2 chi oy ${"bahor"}`);
//         break;
//     case 3:
//         console.log(`3 chi oy ${"yoz"}`);
//         break;
//     default:
//         console.log("uyingizda dam oling");
//         break;
// }
// // 4-masala
// {
//     let a = +prompt ("Son kiriting")
//     let b;
//     switch (a) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             a = "31 kun";
//             break;
//             case 2:
//                 a = "28 kun"
//                 break;
//         default:
//             break;
//     }
//     console.log(a);
// }
// // 5 masala 
// {
//     let a = +prompt ("a sonini kiriting")
//     let b = +prompt ("b sonini kiriting")
//     let k = +prompt ("1 qoshish , 2 ayirish , 3 bolish , 4 kopaytirish")
//     let result;
//     switch (k) {
//         case 1:
//             k = a + b;
//             console.log("K" + k);
//             break;
    
//         case 2:
//             k = a - b;
//             console.log("K" - k);
//             break;
//         case 3:
//             if(b !== 0){
//                 k = a / b
//                 console.log("k" + k);
//             }
//             break;
//             case 4:
//             k = a * b
//             console.log("K" + k);
//             break;
//         default:
//             break;
//     }
// }
// // 6-masala
// {
//     let birlik = +prompt ("uzunlik birliklarni kiriting")
//     let uzunlik = +prompt ("kesmaning uzunlikini kiriting")
//     let metr;
//     switch (birlik) {
//         case 1:
//             metr = uzunlik / 10
//             break;
//         case 2:
//             metr = uzunlik * 1000
//             break;
//         case 3:
//             metr = uzunlik
//             break;
//         case 4:
//             metr = uzunlik / 1000
//             break;
//         case 5:
//             metr = uzunlik / 100
//             break;
//         default:
//             break;
//     }
//     if (metr === "string") {
//         console.log(metr);
//     }else{
//         console.log("kesmaning uzunligi" + metr + "metr");
        
//     }
// }
// // 7-masala
// {
//     let a = +prompt ("Ogirlikni kiriting")
//     let b = +prompt ("ogirlikni qiymati")
//     let ogirlik;
//     switch (a) {
//         case 1:
//             ogirlik = b / 10
//             break;
    
//         case 2:
//             ogirlik = b * 1000
//             break;
//         case 3:
//             ogirlik = b
//             break;
//         case 4:
//             ogirlik = b / 1000
//             break;
//         case 4:
//             ogirlik = b / 100
//             break;
//         default:
//             break;
//     }
//     if (ogirlik === "string") {
//         console.log(ogirlik);
//     }else{
//         console.log("ogirlik" + ogirlik + "KG");
        
//     }
// }
// // 8 masala
// {

//     let a = 28
//     let b = 1
    
//     switch (b) {
//         case 1:
//             if (a >= 1 && a <= 31) {
//                 console.log(`${a}-dekabr`);
//             }
//             break;
//             case 2:
//                 if (a >= 1 && a <= 28) {
//                     console.log(`${a}-noyabr`);
//                 }
//                 break;
//                 case 3:
//                     if (a >= 1 && a <= 31) {
//                         console.log(`${a}-oktaybr`);
//                     }
//                     break;
                    
//                     default:
//                         break;
//                     }
// }
// // 9-masala
// {
//     let a = 13
//     let b = 3
//     switch (a) {
//         case 1:
//             if (b >= 1 && b <= 31) {
//                 console.log(`${a += 1}-dekabr`);
//             }
//             break;
    
//         case 2:
//             if (b >= 1 && b <= 31) {
//                 console.log(`${a += 1}-yanvar`);
//             }
//             break;
    
//         case 1:
//             if (b >= 1 && b <= 31) {
//                 console.log(`${a += 1}-fevral`);
//             }
//             break;
    
//         default:
//             break;
//     }
// }
                    