import React, { useContext, useState } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
    useToast,
  
   
  } from '@chakra-ui/react'
export const SignIn = () => {
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
      <Navigate to="/" replace={false} />;
      
      window.location.href="/";
    } else{
      toast({
        title: "Validation failed please try again!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
   
      
    
  };
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
  
    <Input type="submit" value="Sign In" bg="#3EC70B"></Input>
      
  
    </FormControl>
    </form>
    </Box>
  )
}
