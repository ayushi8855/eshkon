import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <Box boxShadow='sm' p='5'>
        <Flex justifyContent="space-around" maxW='sm' >
          <Link to="/">  <Text as='b'>PROFILE</Text></Link>
          <Link to="/login"> <Text as='b'>LOGIN</Text></Link>
          <Link to="/signup"> <Text as='b'>SIGN-UP</Text></Link>
            
        </Flex>
    </Box>
  )
}
