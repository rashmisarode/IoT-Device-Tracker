const Firestore = require('@google-cloud/firestore');
  const PROJECTID = 'neural-cable-290804';
  const COLLECTION_NAME = 'iotdata';
  const firestore = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true,
  });
exports.helloPubSub = (event, context) => {
  const message = event.data

    ? Buffer.from(event.data, 'base64').toString()
    : 'Hello, DB';
    
    //const data = (event.data) || {};
    //const ttl = Number.parseInt(data.ttl);
    //const ciphertext = (data.ciphertext || '').replace(/[^a-zA-Z0-9\-]*/g, '');
    const created = new Date().getTime();
    let data = JSON.parse(message)
    data.created = created;
    firestore.collection(COLLECTION_NAME)
      .add(data)
      .then(doc => {
        console.log("Stored data", doc)
      }).catch(err => {
        console.error(err);
        console.log('unable to store', err )
      });
  console.log("Got Data: ",message);
  setTimeout(function(){ }, 100);

};

