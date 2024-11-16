import type {Metadata} from "next";
import localFont from "next/font/local";
import "./styles/global.scss";
import './styles/flow-theme.scss';

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

export const metadata: Metadata = {
    title: "neure",
    description: "神经元，模仿coze",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/svg+xml" href="/logo.svg"/>
            {/* 提供备用的 favicon.ico */}
            <link rel="alternate icon" href="/favicon.ico"/>
        </head>
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
