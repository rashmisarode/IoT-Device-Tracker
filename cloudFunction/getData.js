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
  } 
  else if (req.method === 'POST') {
      const iot = require('@google-cloud/iot');
      const iotClient = new iot.v1.DeviceManagerClient({
        // optional auth parameters.
      });
      const cloudRegion = 'us-central1';
      const deviceId = 'my-device';
      const commandMessage = req.body.command;
      const projectId = 'neural-cable-290804';
      const registryId = 'my-registry';

      const formattedName = iotClient.devicePath(
        projectId,
        cloudRegion,
        registryId,
        deviceId
      );
      const binaryData = Buffer.from(commandMessage);
      const request = {
        name: formattedName,
        binaryData: binaryData,
      };

        iotClient.sendCommandToDevice(request).then(res=>{
          console.log('Sent command: ', res);
          res.status(200).send(`Command has sent to device ${deviceId}, belong to registry: ${registryId}, Response: ${res}`);
        }).catch(err=> {
          console.error('Could not send command:', err);
          res.status(500).send(err);
        })     
  }  else {
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


