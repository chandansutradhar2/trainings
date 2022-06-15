//program to extract, transform and load data from csv/excel to rdbms

function startETLJob() {
  //load the files (csv/excel) into file stream
  //TODO:
  //read each line of data and store it in array
  //TODO:
  //create a Row Object of each item in array
  //TODO:
  //establish a connection with the database
  //TODO:
  //send the ROWObject via sql query (INSERT) to store in db
  //TODO:
}

function loadFile() {
  //TODO:
  createDataArray();
}

function createDataArray() {
  //TODO:
  createRowObject();

  //declare a row array
  let rows = [];
  //adding item into the array
  rows.push("some data");
}

function createRowObject() {
  //TODO:
  dbConnect();
}

function dbConnect() {
  //TODO:
  insertToDB();
}

function insertToDB() {
  //insertion logic here.
}


function initiateETL(){
    
}