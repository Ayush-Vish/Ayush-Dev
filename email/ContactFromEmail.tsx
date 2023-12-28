"use client";


import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

function ContactFromEmail( { message , email} : {message:string ,email : string} ) {
  return (
    <Html>
        <Head/>
        <Preview> New Message from the portfolio Website </Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md '>
                        <Heading className='leading-tight text-center '>You recieved the following message from the contact form</Heading>
                        <Text>
                            {message}

                        </Text>
                        <Hr/>
                        <Text>
                            The Sender's email id : {email}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default ContactFromEmail