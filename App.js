import './index.css';
import React, { Component,useState,useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
  Stack,
  HStack,
  Flex,
  Text,
  Radio,
  RadioGroup,
  Select,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react"

function App(){
  const [user,setUser]=useState({
    name:null,
    email:null,
    password:null,
    jobtype:0,
    expertise:[],
    resume:null,
  })
  useEffect(()=>{
    console.log(user)
  })
  const handleSubmit=(event)=>{
    event.preventDefault();
    setUser({
      name:"",
      email:"",
      password:"",
      jobtype:0,
      expertise:[],
      resume:null,
    })
    document.getElementById('resumefile').value=null
  }
    return(
    <div className="container">
      <form action="">
        <Stack spacing="3">
          <Text textAlign="center" fontSize="2xl" fontWeight="700" marginTop="2">Job Application</Text>
          <HStack display="flexlex" width="100%" justifyContent="space-between">
            <Text fontSize="md" fontWeight="650">Learnovate Task 4-II </Text>
            <Text fontSize="md" fontWeight="650">By-Shahpar Yilmaz </Text>
          </HStack>
        <FormControl id="name" border="0px">
          <FormLabel for="name" fontSize="70%">Full Name</FormLabel>
          <Input for="name" name="name" value={user.name} onChange={(event)=>{setUser({...user,name:event.target.value})}} type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="First Last" fontSize="80%"/>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl id="email" border="0px">
          <FormLabel for="email" fontSize="70%">Email</FormLabel>
          <Input for="email" name="email" value={user.email} onChange={(event)=>{setUser({...user,email:event.target.value})}} type="email" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="username@email.com" fontSize="80%"/>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl id="password" border="0px">
          <FormLabel for="password" fontSize="70%">Password</FormLabel>
          <Input for="password" name="password" value={user.password} onChange={(event)=>{setUser({...user,password:event.target.value})}} type="password" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="********" fontSize="80%"/>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl id="jobtype" border="0px">
          <FormLabel for="jobtype" fontSize="70%">Job Type</FormLabel>
          {/* <RadioGroup onChange={(event)=>{setUser({...user,jobtype:event.target.value})}} value={user.jobtype}> */}
          <RadioGroup>
            <HStack display="flex" justifyContent="space-evenly">
                <Radio size="sm" _hover={{cursor:"pointer"}} value="1">Full-time</Radio>
                <Radio size="sm" _hover={{cursor:"pointer"}} value="2">Part-time</Radio>
                <Radio size="sm" _hover={{cursor:"pointer"}} value="3">Internship</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl id="expertise" bordeer="0px">
          <FormLabel for="expertise" fontSize="70%">Your skills include</FormLabel>
          <Stack spacing={2} direction="column">
            <Checkbox size="sm">
              Front-end
            </Checkbox>
            <Checkbox size="sm">
              Back-end
            </Checkbox>
          </Stack>
        </FormControl>
        <FormControl id="experience" border="0px">
          <FormLabel for="experience" fontSize="70%">Your experience</FormLabel>
          <Select color="rgb(151, 151, 151)" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" fontSize="80%">
          <option value="option1">Beginner</option>
          <option value="option2">Intermediate</option>
          <option value="option3">Expert</option>
          </Select>
        </FormControl>
        <FormControl id="resume" border="0px">
          <FormLabel for="resume" fontSize="70%">Upload your resume</FormLabel>
          <HStack>
          <input onChange={(event)=>{setUser({...user,resume:event.target.files[0]})}} id="resumefile" for="resume" name="resume" class="resume" type="file"/>
          {/* <Button size="xs" colorScheme="blue">Upload</Button> */}
          </HStack>
        </FormControl>
        <Button size="md" colorScheme="blue" onClick={(event)=>{handleSubmit(event)}}>Submit</Button>
        </Stack>
        
      </form>
    </div>
  );
}

export default App;
