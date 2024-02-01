import { useState } from 'react';
import { loginFields } from "../constants/formField";
import { useAuth } from "../store/auth.jsx";
import FormAction from "./FormActions";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [user,setuser]=useState(fieldsState);

    const handleChange=(e)=>{
        setuser({...user,[e.target.id]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1212/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user), // Ensure user object has correct fields
            });
            const responseData = await response.json();
            if (response.ok) {
              console.log("Registration successful");
              setuser({
                email: "",
                password: "",
              });
              // console.log(response);
              storeToken(responseData.token);
      
              navigate("/login");
              toast.success("Registration successful");
            } else {
              toast.error(responseData.extraDetails);
            }
          } catch (error) {
            console.log("register", error);
          }
        };
    

   

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={user[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}