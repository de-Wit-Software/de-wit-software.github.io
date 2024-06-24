import "./globals.css";
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
})

export default function RootLayout(props: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassName = `h-full w-full m-0 p-0 ${courier.className}`
  return (
    <html className="h-full w-full m-0 p-0">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={bodyClassName}>
        {props.children}
      </body>
    </html>
  );
}
