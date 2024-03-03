import { spawn } from "child_process";

const executePython = async (script, args) => {
  const result = await new Promise((resolve, reject) => {
    let output;
    const childPython = spawn("python", [script, ...args]);

    childPython.stdout.on("data", (data) => {
      output = JSON.parse(data);
    });

    childPython.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
      reject(`Error occured in ${script}`);
    });

    childPython.on("exit", (code) => {
      console.log(`Child process exited with code ${code}`);
      resolve(output);
    });
  });
  return result;
};

export const ai = async (req, res) => {
  try {
    let {budget, useCase} = req.body
    const result = await executePython("python/script.py", [budget, useCase, ""]);
    res.json({ result: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
