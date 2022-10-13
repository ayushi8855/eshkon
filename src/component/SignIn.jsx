import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login"

import { 
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
    useToast,
  
   
  } from '@chakra-ui/react'
import { refreshTokenSetup } from '../refreshTokenSetup';
export const SignIn = () => {
  const navigate = useNavigate();
  const { handleAuth } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({});

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  console.log("loginData", loginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userArr = JSON.parse(localStorage.getItem("userDatas"));
    console.log("loginDataafter", loginData);
    console.log("userArr", userArr);
    if (
      userArr.some(
        (users) =>
          users.email === loginData.email &&
          users.password === loginData.password
      )
    ) {
      toast({
        title: "Logged in successfully",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    navigate ("/");
      
      // window.location.href="/";
      handleAuth()
    } else{
      toast({
        title: "Validation failed please try again!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
   
 
  };
  const responseSuccessGoogle = (response) => {
    // console.log(response.profileObj.name);
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    refreshTokenSetup(response)
    navigate("/");
  };
  const responseErrorGoogle = (response) => {
    // console.log(response);
  };
  useEffect(() => {
    
},[responseSuccessGoogle]);

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg'margin="auto" padding="10px">
      <form onSubmit={handleSubmit}>
    <FormControl>
      
    <FormLabel>Email address</FormLabel>
    <Input type='email'
     name='email'
     onChange={handleChange}
    />
  
    <FormHelperText>
      Enter  your email 
    </FormHelperText>
 

   <FormLabel>Password</FormLabel>
    <Input type='password'
    name="password"
     onChange={handleChange}
    />
  
    <FormHelperText>
      Enter the password.
    </FormHelperText>
  
    <Input type="submit" value="Sign In" bg="#3EC70B" marginBottom={10}></Input>
      
  
    </FormControl>
    </form>
    <GoogleLogin 
                  
          clientId="221635093495-gtt7i5tpnriopvhp0ds3llj573elforh.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          expectcssClass="google-button"
          cookiePolicy={"single_host_origin"}
        
          isSignedIn={true}
         
        />
    </Box>
  )
}
