import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});
app.get('/skb2a', (req, res) => {
  const sum = (+ req.query.a || 0) + (+req.query.b || 0);
  return res.send(sum.toString());
});
app.get('/task2b', (req, res) => {
  const fio = req.query.fullname || "";
  const fios = fio.split(' ');
  var retfio = "";
  const reg = /\d/;
  var match = reg.exec(fio);
  if(match != null){
    return res.send("Invalid fullname");
  }
  if(fios.length>3){
    //console.log(1);
    return res.send("Invalid fullname");
  }else if(fios.length==1){
  //  console.log(2);
    return res.send(fios[0]==""?"Invalid fullname":fios[0]);
  }else if(fios.length==2){
//    console.log(3);
    return res.send(fios[1] + " " + fios[0].charAt(0) + ".");
  }else if(fios.length==3){
  //  console.log(4);
    return res.send(fios[2] + " " + fios[0].charAt(0) + ". " + fios[1].charAt(0) + ".");
  }else{
    return res.send("Invalid fullname");
  }
  return res.send(retfio);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
