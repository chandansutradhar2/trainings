class Customer{    
fullName;
email;
mobile;
customerType:CUSTOMER_TYPE;


}

enum CUSTOMER_TYPE{
    "RETAIL"="RETAIL",
    "ENTERPRISE"="ENTERPRISE",
    "CORPORATE"="CORPORATE"
}

//the implementaor of the Customer class
let custObj=new Customer();
custObj.email="";
custObj.customerType=CUSTOMER_TYPE.RETAIL;

let custObj2=new Customer();
custObj2.email="";
custObj2.customerType=CUSTOMER_TYPE.RETAIL;





