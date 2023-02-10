'use client'
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react'
import Navbar from "./navbar";
import Hero from "./Hero";
import Mission from "./Mission";
import Images from "./images";
import Card from "./Card";
import Footer from "./Footer";


export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Images />
      <Mission />
      <Card />
      <Footer />
    </ChakraProvider>
  )
}
