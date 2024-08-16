import express from "express"
import { sendEmail } from "./email.mjs";
import dotenv from "dotenv"
dotenv.config({ debug: true })
if (!process.env.gmail || !process.env.password) {
  process.exit()
}
const app = express();

const port = 2424
app.use(express.json())

app.post('/api/send-email', async (req, res) => {
  const { to, subject, text } = req.body

  try {
    await sendEmail(to, subject, text);
    res.status(200).json("emmail send success")
  } catch (error) {
    res.status(500).json(error)
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})