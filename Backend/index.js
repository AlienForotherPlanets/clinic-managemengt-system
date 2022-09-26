const con = require("./config/db_conn");
const { config } = require('dotenv');
config();

con();

const express = require("express");

const app = express();

const cors = require("cors");
const port = process.env.port;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
   res.send({ key: "hello SnehiClinic!" });
});
app.use("/Patient", require("./routes/patient"));
app.use("/Allergy", require("./routes/allergy"));
app.use("/Medicine", require("./routes/medicine"));
app.use("/Appointment", require("./routes/appointment"));
app.use("/Doctor", require("./routes/Doctor"));

app.listen(port, () => {
   console.log("server running at port : " + port);
});