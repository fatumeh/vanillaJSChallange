/* marka hore waxan sameyey variable bntcolor is aan uso aqrista buttomka */
const btnColor = document.getElementById("btnColor");

/* 2. Waxaan ku xiray 'addEventListener' si uu u 
dhageysto marka button-ka la riixo 
 ka dibna u fuliyo logic-ga gudaha ku jira */
btnColor.addEventListener("click", () => {
  /* 3. Waxaan sameeyay array ka koban letters iyo numbers laga samenaya Hex Colorka */
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  /* 4. Hex colorku wuxuu  ku bilowdaa  # markaa variablekan aya no qabaya */
  let hex = "#";
  /* next Waxan isticmaly for loop si uu 6 jeer u soo dhex 
    warego arrayda maadaama Hex Codeku ka koban yahay 6 digit */
  for (let i = 0; i < 6; i++) {
    /* waxan sameyey index random ah: 
                Math.random() wuxuu so sara nambar u dhexeya 0 ilaa 1
                Waxaan ku dhuftay dhererka arrayda and then si aan u helno nambar
                 Math.floor() wuxuu ka saraya jajabka   */
    let randomIndex = Math.floor(Math.random() * colors.length);
    hex += colors[randomIndex];
  }
  /* finaly waxan bedelnay colorka backgrounka
   sido kale waxana soo bandhignay code-ka midabkaas */
  document.body.style.backgroundColor = hex;
  let hexCode = document.getElementById("hexCode");
  hexCode.innerText = hex;
});
