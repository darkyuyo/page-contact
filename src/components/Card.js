import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack       background="white" 
      borderRadius="lg" 
      boxShadow="md" 
      overflow="hidden"
      spacing={4}
      align="start" >
      <Image src={imageSrc} alt={title}  borderRadius="lg" />
      <Heading  px={4} size="sm" color="black" >{title}</Heading>
      <Text  fontSize="sm" px={4}color="gray.600">{ description}</Text>
      <Text px={4} pb={4}color="black" fontSize="sm">See more  <FontAwesomeIcon  icon={faArrowRight} size="1x" color="blue" /></Text>
    </VStack>
  )
};

export default Card;
