import '@app/styles/global.css'

export const metadata = {
    title: `What's weather?`,
    description: `Check weather in your city!`
}


export default function RootLayout({children}) {
    return (
        <html lang='en'>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}