import User from "../models/User.js";

export const signin = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({name});
    if(!user) return res.json("User does not exists")

    const isPasswordCorrect = user.password === password;
    if(!isPasswordCorrect) return res.status(400).json("Plese enter valid credentials")

    res.json(user._id)
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const emailCheck = await User.findOne({email});
    const nameCheck = await User.findOne({name});

    if (emailCheck) res.status(400).json({ message: "Email already exists" });
    if (nameCheck) res.status(400).json({ message: "Name already exists" });

    const newUser = new User({
        name: name,
        email: email,
        password: password
    })

    await newUser.save()
    res.json(newUser)
  } catch (error) {
    console.log(error);
  }
};
