import React, { useState, useEffect } from "react";
import "../App.css";
import swap from "./swap.svg";

const Table = () => {
  const [tableOneData, setTableOneData] = useState([]);
  const [tableTwoData, setTableTwoData] = useState([]);
  const [rows, setRows] = useState([]);
  const [sellB, setSell] = useState("Selling BTC");
  const [buyB, setBuy] = useState("Buying BTC");
  const [totalSell, setSellTotal] = useState("24.04 AUD");
  const [totalBuy, setBuyTotal] = useState("0.01555923 BTC");

  const swapStates = () => {
    let dataTemp = tableTwoData;
    let BTCtemp = totalSell;
    let sellTemp = sellB;

    setTableTwoData(tableOneData);
    setTableOneData(dataTemp);
    setRows(rows.reverse());
    setSellTotal(totalBuy);
    setBuyTotal(BTCtemp);
    setSell(buyB);
    setBuy(sellTemp);

    let left = document.getElementsByClassName("leftOne");
    let right = document.getElementsByClassName("rightOne");
    for (let t = 0; t < right.length; t++) {
      right[t].style.color = "red";
    }
    for (let t = 0; t < left.length; t++) {
      left[t].style.color = "green";
    }
  };

  const fetchData = async () => {
    const resp = await fetch("/sendData");
    const data = await resp.json();
    setTableOneData(data.Table1);
    setTableTwoData(data.Table2);
    setRows(data.rows);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="total">
      <div id="TableOne">
        <div id="sb1">
          <h4 id="sell">{sellB}</h4>
          <h4 id="buy">TOTAL : {totalSell}</h4>
        </div>
        <table>
          <tbody>
            <tr>
              {rows.map((el, elInd) => {
                return (
                  <th id="TD" key={elInd}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {el}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </th>
                );
              })}
            </tr>
            {tableOneData.map((el, elInd) => {
              if (el.Sum === undefined) {
                return (
                  <tr key={elInd}>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={elInd}>
                    <td>{el.Sum}</td>
                    <td>{el.Quantity}</td>
                    <td className="leftOne">{el.Price}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <img src={swap} alt="Swap" id="swap" onClick={swapStates} />
      <div id="TableTwo">
        <div id="sb2">
          <h4 id="buy">{buyB}</h4>
          <h4 id="buy">TOTAL : {totalBuy}</h4>
        </div>
        <table>
          <tbody>
            <tr>
              {rows.reverse().map((el, elInd) => {
                return (
                  <th id="TD" key={elInd}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {el}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </th>
                );
              })}
            </tr>
            {tableTwoData.map((el, elInd) => {
              if (el.Sum === undefined) {
                return (
                  <tr key={elInd}>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={elInd}>
                    <td className="rightOne">{el.Price}</td>
                    <td>{el.Quantity}</td>
                    <td>{el.Sum}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
