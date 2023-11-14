import React from 'react';
import {BiBusSchool} from "react-icons/bi";
import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Button} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  
  useDisclosure,
  
  VStack,
  HStack
} from '@chakra-ui/react';




const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <nav>
  <div class="a">
  <Button>
    <BiBusSchool size={"40"}/>
  </Button>
    
  </div>
  <div class="b">
  <Button variant={""}>
<Link  to={"/"}>Home</Link>
  </Button>
  <Button>
     <Link  to={"#about"}>AboutUs</Link>
  </Button>
  <Button>
    <Link  to={"#services"}>Services</Link>
  </Button>
  <Button>
    <Link to={"#contactus"}>ContactUs</Link>
  </Button>
             
        </div>
        
        <div class="c">
        <div class='d'>
          <Button
        onClick={onOpen}
        >
          <FaBars size={"30"}
             onMouseOver={({target})=>target.style.color=" #bbaeae"}
             onMouseOut={({target})=>target.style.color="black"}
             
          />
        </Button>
        </div>
        
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent backgroundColor={'#F3F3F3'} color={'black'}>
        <DrawerCloseButton />
        <DrawerHeader>BUS</DrawerHeader>
        <DrawerBody>
        <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'black'}>
                    <Link to={'/'}>HOME</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'black'}>
                <Link  to={"#about"}>AboutUs</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'black'}>
                <Link  to={"#services"}>Services</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'black'}>
                <Link to={"#contactus"}>ContactUs</Link>
                </Button>
            </VStack>
            
           
        </DrawerBody>
        <DrawerFooter>
            
            <HStack>
            <Button onClick={onClose} colorScheme='black' mr={3}>
                <Link to={'/login'}>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme='black' variant={'outline'}>
                <Link  to={'/signup'}>sign Up</Link>
            </Button>
            </HStack>
          </DrawerFooter>

        </DrawerContent>

        </Drawer>
    
  </div>
  <div class='e'>
  <Button>
    <Link  to={"/login"}>Log In</Link>
  </Button>
  <Button>
    <Link to={"/signup"}>Sign Up</Link>
  </Button>
  </div>

  </nav>
}

export default Header
