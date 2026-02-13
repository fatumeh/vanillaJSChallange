// marka hore waxaan sameyey variables kan(title, para, btn)
// waxan isticamlayey document.getElementById iyo querySelector

/* 
why aan u isticamlay waxan raba in js u 
shega elementska saxda ah 
aan rabo in aan wax kabadalo
*/

let title = document.getElementById("title"),
    para = document.getElementById("para"),
    btnClick = document.querySelector("button");

/* 
Kadib, waxaan ku daray addEventListener why ugu sodaray
hadi qofka userka ah click dhaho buttonka waxa la fulinaya logic ku dhex qoran functionkan 
oo ah in wax laga badalla muqalka text tiga paragraphka iyo titleka 
 */

btnClick.addEventListener("click", () => {
    title.classList.add("capitalize", "font-[InkFree]", "text-xl");
    para.classList.add("font-[Constantia]");
});