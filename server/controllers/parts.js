import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const mongoData = process.env.MONGO_URL;

export const cpuData = async (req, res) => {
    await axios.post(mongoData, {
        "collection":"cpuNew",
        "database":"geekbench",
        "dataSource":"Cluster0"
      },{
        headers: {
            "Content-Type": "application/json",
            "api-key": process.env.apiKey,
            "Access-Control-Request-Headers": "*",
        }
      })
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        console.log(error.message);
      });
}

export const monitorData = async (req, res) => {
  await axios.post(mongoData, {
      "collection":"monitorData",
      "database":"geekbench",
      "dataSource":"Cluster0"
    },{
      headers: {
          "Content-Type": "application/json",
          "api-key": process.env.apiKey,
          "Access-Control-Request-Headers": "*",
      }
    })
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const gpuData = async (req, res) => {
  await axios.post(mongoData, {
      "collection":"gpuNew",
      "database":"geekbench",
      "dataSource":"Cluster0"
    },{
      headers: {
          "Content-Type": "application/json",
          "api-key": process.env.apiKey,
          "Access-Control-Request-Headers": "*",
      }
    })
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const ramData = async (req, res) => {
  await axios.post(mongoData, {
      "collection":"ramData",
      "database":"geekbench",
      "dataSource":"Cluster0"
    },{
      headers: {
          "Content-Type": "application/json",
          "api-key": process.env.apiKey,
          "Access-Control-Request-Headers": "*",
      }
    })
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const ssdData = async (req, res) => {
  await axios.post(mongoData, {
      "collection":"ssdData",
      "database":"geekbench",
      "dataSource":"Cluster0"
    },{
      headers: {
          "Content-Type": "application/json",
          "api-key": process.env.apiKey,
          "Access-Control-Request-Headers": "*",
      }
    })
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const hddData = async (req, res) => {
  await axios.post(mongoData, {
      "collection":"hddData",
      "database":"geekbench",
      "dataSource":"Cluster0"
    },{
      headers: {
          "Content-Type": "application/json",
          "api-key": process.env.apiKey,
          "Access-Control-Request-Headers": "*",
      }
    })
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}