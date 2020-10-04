const Firestore = require('@google-cloud/firestore');
  const PROJECTID = 'neural-cable-290804';
  const COLLECTION_NAME = 'iotdata';
  const firestore = new Firestore({
    projectId: PROJECTID,
    timestampsInSnapshots: true,
  });

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  //  res.status(200).send(message);


  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
   var fromDate = Date.now()-(60*60*24*2*1000);
   var toDate = Date.now()+(60*60*24*2*1000);
   
   if (req.query.fromDate) {
     fromDate = parseInt(req.query.fromDate);
   }
   if (req.query.toDate) {
     toDate = parseInt(req.query.toDate);
   }
  console.log("From Date", fromDate);
  console.log("to Date", toDate);

   var getFunc =  firestore.collection(COLLECTION_NAME).where('time', '>=', fromDate).where('time', '<=', toDate).get();
   getFunc.then((snapshot)=> {
     var dataArr = [];
     snapshot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      dataArr.push(doc.data());
     })
     res.status(200).send(dataArr);
   }).catch((err)=> {
     console.err(err)
     res.status(500).send(err);
   });
  }
  
};

/*
getDataArr.then((snapshot)=> {
    //console.log(snapshot);
     var dataArr = [];
     snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      dataArr.push(doc.data());
     });
    res.status(200).send(dataArr);
    }).catch((err)=> {
      res.status(500).send("failed to extract doc"+err);
    }); 

async function getDataArr() {
    const citiesRef = firestore.collection(COLLECTION_NAME);
    const yesterday = Date.now()-(60*60*24*2*1000);
    const snapshot = await citiesRef.where('time', '>', 100).get();
  return snapshot;
}

*/
