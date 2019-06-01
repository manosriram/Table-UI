const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/sendData", (req, res) => {
  const sellingBTC = [
    { Sum: 0.00013059, Quantity: 0.00013059, Price: 5618.73 },
    { Sum: 0.00029443, Quantity: 0.00016384, Price: 5620.24 },
    { Sum: 0.00048528, Quantity: 0.00019085, Price: 5621.15 },
    { Sum: 0.00066658, Quantity: 0.0001813, Price: 5621.84 },
    { Sum: 0.00085202, Quantity: 0.00018544, Price: 5624.12 },
    { Sum: 0.00098459, Quantity: 0.00013257, Price: 5624.2 },
    { Sum: 0.00109475, Quantity: 0.00011016, Price: 5626.0 },
    { Sum: 0.00126472, Quantity: 0.00016997, Price: 5626.86 },
    { Sum: 0.00146348, Quantity: 0.00019876, Price: 5626.97 },
    { Sum: 0.00162331, Quantity: 0.00015984, Price: 5627.78 },
    { Sum: 0.0018, Quantity: 0.00017669, Price: 5628.08 },
    { Sum: 0.00211586, Quantity: 0.00031586, Price: 5629.75 },
    { Sum: 0.00223857, Quantity: 0.00012271, Price: 5630.02 }
  ];

  const buyingBTC = [
    { Sum: 0.002454, Quantity: 0.002454, Price: 5399.01 },
    { Sum: 0.004454, Quantity: 0.002, Price: 5398.01 },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined },
    { Sum: undefined, Quantity: undefined, Price: undefined }
  ];

  const rows = ["Sum (BTC)", "Quantity", "Price"];

  return res.json({ Table1: sellingBTC, Table2: buyingBTC, rows });
});

app.get("/", (req, res) => {
  return res.json({ message: "Yoo Hoo !!" });
});

app.listen(port, () => console.log(`Server at ${port}`));
module.exports = app;
