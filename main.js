


(function () {
  "use strict"

  window.addEventListener('load', () => {
    setTimeout(() => {
      alert(" Esse aplicativo usa serviços externos \n de https://docs.awesomeapi.com.br/ \n api-de-moedas ");
      // msg saud company api.
    }, 3000)
  })
  // start of main function auto close
  //variabls global
  const c = (el) => document
    .querySelector(el)
  //===≠=========
  const event = c("#Event");
  event.addEventListener('click',
    (e) => { e.preventDefault() })
  // prevent event click
  //=≠===============≠====≠=======
  let Rl = document
    .querySelector("#rl");
  // id simbol Real
  let Dl = c("#dl");
  //id simbol dolar
  //=========≠==============
  let
    Curr_select1 = c("#currency_select1")
  // select the position of the coin on the screen
  let
    Curr_select2 = c("#currency_select2")
  //select the position of the coin on the screen
  //========================

  const H_igh = c("#high");
  const B_id = c("#b_id");
  const A_sk = c("#a_sk");
  const L_ow = c("#low");
  const C_date = c("#c_date");
  const V_arbid = c("#var_bid");
  const P_ctchange = c("#pct_change");
  const T_imestamp = c("#time_stamp");
  //======REQUEST= USD BRL======
  const Url = fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");// api
  Url.then(response => response.json())
    .then(data => {
      let api = JSON.stringify(data);
      Getdata(api);
    });
  const Getdata = (d) => {
    const y = d;
    const result = JSON.parse(y)
    // console.log(result)
    const { USDBRL } = result;
    //const  {EURBRL}= result;
    //Euro not used
    const {
      name,
      bid,
      ask,
      code,
      create_date,
      high,
      codein,
      low,
      varBid,
      pctChange,
      timestamp
    } = USDBRL;
    // const {name,bid,ask,code}=EURBRL
    //console.log(EURBRL)
    const Obj = ([{
      Name: name,
      Varbid: varBid,
      Pctchange: pctChange,
      Timestamp: timestamp,
      Bid: bid,
      High: high,
      Low: low,
      Codein: codein,
      Ask: ask,
      Code: code,
      Create_date: create_date
    }]
    )

    const openObj = Obj;
    openObj.map((item) => {
      //const Item=JSON.stringify(item)
      // console.log(item.Name)
      Curr_select1
        .innerHTML = `${item.Codein}`
    
      rl.innerHTML = `1${item.Codein}=0,2072 ${code}`
      //===========≠===========
      Curr_select2.innerHTML = `${code}`
    
      Dl.innerHTML = `
       1 ${code} = ${item.Bid} ${codein}`
      //=============================
      B_id
        .innerHTML = `Compra ${bid}`
      A_sk.innerHTML = `Venda ${ask}`
      H_igh
        .innerHTML = `Maximo ${item.High}`
      L_ow.innerHTML = ` Minimo ${low}`
      V_arbid
        .innerHTML = `Variação ${varBid} %`
      P_ctchange
        .innerHTML = `Porcentagem de Variação ${item.Pctchange} %`
      C_date
        .innerHTML = `Data Criação ${create_date}`
    })
  }
}(window)) 
