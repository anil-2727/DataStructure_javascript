const usersObject = {
    "total": 2,
    "users": [
      {
        "name": "Patrick"
      },
      {
        "name": "Michael"
      }
    ]
  }
  //To convert object to string is called serialization
  // To convert string to object is called deserialization.

  let serialization = JSON.stringify(usersObject);
  console.log(serialization);

   let deserialization = JSON.parse(serialization);
   console.log(deserialization);