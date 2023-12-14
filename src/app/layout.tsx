import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import Image from "next/image";
import WechatImg from "../../public/WechatIMG1.jpg";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header
            className={'flex flex-row justify-between px-4 py-5 bg-neutral-900/90 text-white font-serif rounded-b-sm sticky top-0'}>
            <div>
                <h6 className={'font-serif'}>index</h6>
            </div>
            <div className={'text-black w-16 bg-stone-50 rounded-full text-sm flex justify-center items-center'}>
                login
            </div>
        </header>
        <main className={'mt-4 font-serif'}>
            <div className={'mx-4 px-4 py-4 bg-neutral-900/90 rounded-sm flex flex-row justify-end items-start'}>
                <div className={'flex flex-row'}>
                    <div className={'flex flex-col justify-end items-end mr-2'}>
                        <h1 className={'text-sm mb-1'}>刘铭熙</h1>
                        <h6 className={'text-xs font-light'}>我愿在这星球上种一朵玫瑰花，看她花开花落.</h6>
                    </div>
                    <Image className={'h-12 w-12 rounded-lg'} src={WechatImg} alt={'刘铭熙'}/>
                </div>
            </div>
            {children}
        </main>
        <footer>
            <div className={'flex justify-center items-center px-4 py-5 text-white text-xs font-light'}>
                © 2023 SOLITUDE 随欲. All Right Reserved.
            </div>
        </footer>
        </body>
        </html>
    )
}