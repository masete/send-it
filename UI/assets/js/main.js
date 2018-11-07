function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "" && password ==""){

        document.getElementById("msg").innerHTML = "Please Fill All Fields !";

    }else if(username == ""){

        document.getElementById("msg").innerHTML = "Username Empty !";
    
    }else if(password == ""){

        document.getElementById("msg").innerHTML = "Password Empty !";

    }else{


        if(username == "admin" && password =="12345"){

            window.location.href = "admin-change-parcel.html";
    
           
        }else if(username == "user" && password == "12345"){
    
            window.location.href = "create-parcel.html"; 
    
        }
    

    }



    
    
}