import Asus from "./Asus"; 
import MacBook from "./macBook"; 

let asus = new Asus( "VivoBook", true,true );
console.log(asus);

let macBook = new MacBook("2024", false,false);
console.log(macBook);

macBook.a();
macBook.b();
console.log(macBook);
