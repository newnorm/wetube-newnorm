
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

// express framework execute
const app = express();

// pug view engine 
app.set("view engine", "pug");
// middlewares
app.use(cookieParser()); //cookie 전달받는 미들웨어
app.use(bodyParser.json()); // 클라이언트로부터 form 이나 json으로 전달된 정보 검사
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet()) // 안전성 증가시키는 미들웨어
app.use(morgan("dev")); // 어플리케이션에서 발생하는 일들의로그를 기록하는 미들웨어

// router 사용 (3개로 분리해서 편의 증가)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
