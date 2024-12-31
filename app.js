const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3010;

const dummyUser = {
  email: "test@test.com",
  password: "test0000",
};

app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["POST"],
    credentials: true,
  })
);

app.post("/login", (req, res) => {
  console.log("요청: ", req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "이메일과 비밀번호를 입력해주세요." });
  }

  if (email === dummyUser.email && password === dummyUser.password) {
    res.status(200).send({ message: "로그인 성공" });
  }

  return res.status(400).send({ message: "이메일 또는 비밀번호가 틀렸습니다." });
});

app.listen(PORT, () => {
  console.log(`서버 실행, 포트: ${PORT}`);
});
