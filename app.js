const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/1.html");//__dirname表示当前文件的绝对路径
});
app.get('/music', function (req, res) {
    res.send("音乐频道");
});
app.get("/student/:xuehao", function (req, res) {
    if (/^[\d]{6}$/.test(req.params.xuehao)) {
        res.send("学生频道, 学号" + req.params.xuehao);
    }else {
        res.send("学号不正确，应该是6位数字！");
    }
});
//use表示使用中间件
app.use(express.static("public"));
//app.use("/jingtai", express.static("public"));//将public里面的文件映射到jingtai里面
app.listen(4000, function () {
    console.log("Server started on port 4000...");
});
