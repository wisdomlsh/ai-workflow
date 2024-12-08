"use client"
import localFont from "next/font/local";
import "./styles/global.scss";
import './styles/flow-theme.scss';
import {useTheme} from "@/app/hooks";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// export const metadata: Metadata = {
//     title: "neure",
//     description: "神经元，模仿coze",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    useTheme()

    return (
        <html lang="en">
        <head>
            <link rel="alternate icon" href="/favicon.ico"/>
        </head>
        <title>NEUR</title>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div id='root' className='w-full h-full'>
            {/*<ConfigProvider>*/}
            {children}
            {/*</ConfigProvider>*/}
        </div>
        </body>
        </html>
    );
}
