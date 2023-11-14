import React from 'react'
import {VStack,Input,Button,HStack,Box,Stack,Circle,Heading,Text,Image} from "@chakra-ui/react";
import { FcHome,FcLike ,FcPortraitMode} from "react-icons/fc";
import { RiFlagFill } from "react-icons/ri";
import { SiActigraph} from "react-icons/si";
import { AiFillHeart ,AiFillInstagram,AiFillFacebook,AiFillTwitterCircle,AiFillYoutube} from "react-icons/ai";
import { FiArrowLeft,FiArrowRight} from "react-icons/fi";
import img1 from "../assets/part1.png";
import img2 from "../assets/part12.png"
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import founder from "../assets/founder.png";
import flag from "../assets/flag.png";
import flag2 from "../assets/flag2.png";
import durbin from "../assets/durbin.png";
import map from "../assets/map.png";
import ob1 from "../assets/ob1.png";
import ob2 from "../assets/ob2.png";
import ob3 from "../assets/ob3.png";


const Home = () => {
  return <>
    <section class="first">
      <div class="a">
         <div p={"10"}>
          <p>
          Streamline Your Ride Booking Experience with Our Tracking Website
          </p>
         
          <Input variant={'filled'} placeholder='Outline' type={'text'}
           _hover={{
            background: "white",
            color: "teal.500",
             }}
           />
         
          
  
         </div>
      </div>
      
      <div class="b">
          <Image src={img1} alt="akshay" w={'50%'} h={'40%'} objectFit={'contain'} />
          <Image src={img2} alt="akshay" w={'50%'} h={'40%'} objectFit={'contain'} />
      </div>
    </section>


    <section className='second'>
        <div className='c'>
        <div><Button letterSpacing={'1px'} colorScheme='black' variant='ghost'>About Us</Button></div>
        <div><Button letterSpacing={'1px'} colorScheme='black' variant='ghost'>Service</Button></div>

    </div>
    <Stack direction={['column','row']} spacing='80px' p="5rem" className='stack' justifyContent={'center'} >
  <Box w='340px' h='550px'  boxShadow={ '-20px -20px 50px #ffffff,20px 20px 50px #D2D2D2'} borderWidth='1px' borderRadius={'1rem'} className='box'>
  <VStack color={'black'}  alignItems={'center'} justifyContent={'center'} mt='20'>
  <Circle size='150px' boxShadow={'inset -20px -20px 50px #FFFFFF, inset 20px 20px 50px #CDCDCD'}>
 <Image src={flag} height={'50%'} width={'50%'} />
  </Circle>
  <Heading p='5' >Vision</Heading>
  <Text p="5" textAlign={'center'}> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</Text>
 </VStack>
  </Box>
  <Box w='340px' h='550px' boxShadow={'-20px -20px 50px #ffffff,20px 20px 50px #D2D2D2'} borderWidth='1px' borderRadius={'1rem'}>
 <VStack color={'black'}  alignItems={'center'} justifyContent={'center'} mt='20'>
  <Circle size='150px' boxShadow={'inset -20px -20px 50px #FFFFFF, inset 20px 20px 50px #CDCDCD'} >
  <Image src={durbin} height={'50%'} width={'50%'} />
  </Circle>
  <Heading p='5'>Mission</Heading>
  <Text p="5" textAlign={'center'}> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</Text>
 </VStack>
  
  
  </Box>
  <Box w='340px' h='550px' boxShadow={'-20px -20px 50px #ffffff,20px 20px 50px #D2D2D2'}  borderWidth='1px' borderRadius={'1rem'}>
  <VStack color={'black'}  alignItems={'center'} justifyContent={'center'} mt='20'>
  <Circle size='150px' boxShadow={'inset -20px -20px 50px #FFFFFF, inset 20px 20px 50px #CDCDCD'} >
  <Image src={flag2} height={'50%'} width={'50%'} />
  </Circle>
  <Heading p='5'>Goal</Heading>
  <Text p="5" textAlign={'center'}> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</Text>
 </VStack>
  </Box>
</Stack>
    </section>
    <section className='third'>
    
      
      <div class='obj'>
         <Heading fontFamily={'Montserrat'} fontWeight={'500'} fontSize={'56px'} letterSpacing={'2px'}>Objetives</Heading>
        <div>
          <Circle size='150px'  boxShadow={'inset -20px -20px 50px #FFFFFF, inset 20px 20px 50px #CDCDCD'} >
          <Image src={ob1} height={'50%'} width={'50%'} />
  </Circle>
  <Text textAlign={'center'} width={'60%'}  lineHeight={'200%'}  letterSpacing={'widest'} p="5">We have successfully expanded our service coverage
   to include a broader range of destinations outside the
    plant.</Text>
        </div>
        
      <div>
        <Circle size='150px'  boxShadow={'inset -20px -20px 50px #FFFFFF, inset 20px 20px 50px #CDCDCD'} >
        <Image src={ob2} height={'50%'} width={'50%'} />
  </Circle>
  <Text textAlign={'center'} width={'60%'}  lineHeight={'200%'} letterSpacing={'widest'} p="5">We have implemented rigorous safety and security measure
  s to ensure the well-being of our customers during their journeys. Our 
  fleet of vehicles undergoes regular maintenance and inspections, and our 
  drivers undergo thorough background checks and training.</Text>
       
      </div>
      <div>
         <Circle size={'150px'} boxShadow={'inset -20px -20px 50px #FFFFFF, inset 20px 20px 50px #CDCDCD'} >
         <Image src={ob3} height={'50%'} width={'50%'} />
  </Circle>
  <Text textAlign={'center'} width={'60%'}  lineHeight={'200%'}  letterSpacing={'widest'} p="5">We believe in long term orientation with our diversified 
  business model thus making us stand out in the industry.</Text>
       
      </div>
       
       
      </div>
     
     
    </section>
    <section class="forth">
    <div class="d">
    <Heading fontFamily={'Montserrat'} fontWeight={'500'} fontSize={'56px'} letterSpacing={'2px'}>our client</Heading>
    </div>
    <div class='e'>
    <div>
      <Image src={company1}/>
    </div>
    <div>
      <Image src={company2}/>
    </div>
    <div>
      <Image marginTop={'1.5rem'} src={company4}/>
    </div>
    <div>
      <Image marginTop={'3rem'} src={company3}/>
    </div>


    </div>

    </section>
    <section class="fifth">
      <div class="f">
      <Image width={'100%'} height={'83%'} borderRadius={'1rem 1rem 0 0'}  src={founder}/>
      <h2>ANAND KESHRI</h2>
      <p>Founder,CEO,Com</p>


      </div>
      <div class="g">
      <Text lineHeight={'200%'} textAlign={'center'} letterSpacing={'widest'} p="16" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
       enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.

      
      </Text>
      <div>
      
        <Button margin={'2rem'} 
        width={'100px'} 
        height={'100px'}
         boxShadow={'-20px -20px 50px #ffffff,20px 20px 50px #D2D2D2'}
         borderRadius={'1.2rem'}
         >
        <FiArrowLeft size={'40px'}/>
        </Button>
     
        
          <Button margin={'2rem'}
           width={'100px'}
            height={'100px'}
             boxShadow={'-20px -20px 50px #ffffff,20px 20px 50px #D2D2D2'}
             borderRadius={'1.2rem'}
             >
        <FiArrowRight size={'40px'}/>
          
          </Button>
      
        
      </div>
            </div>
    </section>
    <section class="fifth">
      <div class="h">
      <h1 >Where are we Located?</h1>
      <Text lineHeight={'200%'} textAlign={'start'} letterSpacing={'widest'} p="5">A4 Services offers a cutting-edge tracking website that 
      revolutionizes the way you track and monitor various 
      activities. With our advanced technology and user-friendly 
      interface, you'll have access to comprehensive tracking 
      features all in one place.
          Let’s meet!!</Text>
      <h2>Hostel no-26,BIT Sindri,Sindri,Dhanbad,Jharkhand</h2>
      <div class='i'>
        <AiFillInstagram size={'2rem'}/>
        <AiFillFacebook size={'2rem'}/>
        <AiFillTwitterCircle size={'2rem'}/>
        <AiFillYoutube size={'2rem'}/>
      </div>
      


      </div>
      <div class="f">
      <Image src={map}/>
            </div>
    </section>
    <section class='sixth'>
    <h1>Do we have everything you're looking for?</h1>
    <h2>Drop us your contact details, We are always more than happy to help.</h2>
   <diV class="j">
   <Input variant={'filled'} placeholder={'Outline'}  type={'text'} 
           _hover={{
            background: "white",
            color: "teal.500",
             }}
           />
           <Input variant={'filled'} placeholder='Outline' type={'text'}
           _hover={{
            background: "white",
            color: "teal.500",
             }}
           />
           <Input variant={'filled'} placeholder='Outline' type={'text'}
           _hover={{
            background: "white",
            color: "teal.500",
             }}
           />

   </diV>
    </section>
  
  </>
}

export default Home;
