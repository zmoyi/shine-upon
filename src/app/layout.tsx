import React from "react";
import type {Metadata} from 'next'
import './globals.css'
import Image from "next/image";
import WechatImg from "../../public/WechatIMG1.jpg";
import {ThemeProvider} from "@/components/ThemeProvider";
import {cn} from "@/lib/utils";
import {ModeToggle} from "@/components/ModeToggle";
import Sidebar from "@/components/pages/Sidebar";
import Controls from "@/components/pages/Controls";

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
        <html lang="zh" suppressHydrationWarning>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
        >

            <div className={'flex md:pl-24 lg:pl-10 xl:px-32'}>
                <div className={'hidden lg:block'}>
                    <Sidebar/>
                </div>
                <div className={'basis-1/1'}>
                    <header
                        className={'flex flex-row justify-between items-center px-4 py-5 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 '}>
                        <div>
                            <input placeholder={'!Boring packaging'} className={'border-white rounded-full py-2 px-5 bg-stone-100/60 dark:bg-stone-900/60 focus:outline-none focus:shadow-outline'}/>
                        </div>
                        <ModeToggle/>
                    </header>
                    <main className={'mt-4 flex'}>
                        <div className={'flex-1'}>
                            <div className={"m-4 font-bold"}>
                                Is Me
                            </div>
                            <div
                                className={'m-4 p-4 rounded-lg flex flex-row justify-end items-start bg-stone-100/60 dark:bg-stone-900/60'}>
                                <div className={'flex flex-row'}>
                                    <div className={'flex flex-col justify-end items-end mr-2'}>
                                        <h1 className={'text-base'}>刘铭熙</h1>
                                        <h6 className={'text-sm font-light'}>我愿在这星球上种一朵玫瑰花，看她花开花落.</h6>
                                    </div>
                                    <Image className={'h-16 w-16 rounded-lg'} src={WechatImg} alt={'刘铭熙'}/>
                                </div>
                            </div>
                            {children}
                        </div>
                        <div className={'hidden lg:block lg:basis-1/3'}>
                            <Controls/>
                        </div>

                    </main>

                    <footer>
                        <div
                            className={'flex uppercase justify-center items-center px-4 py-5 dark:text-white text-xs font-light'}>
                            © 2023 SOLITUDE 随欲. All Right Reserved.
                        </div>
                    </footer>
                </div>

            </div>


        </ThemeProvider>
        </body>
        </html>
    )
}
