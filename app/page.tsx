'use client'
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react'
import Navbar from "./navbar";
import Hero from "./Hero";
import Mission from "./mission";
import Images from "./images";


export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Images />
      <Mission />
    </ChakraProvider>
  )
}
