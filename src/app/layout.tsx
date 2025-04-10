import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/tailwind-plus-template/Spotlight/components/Layout'

// import '@/styles/tailwind.css'
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - Johnathan Nguyen',
    default:
      'Johnathan Nguyen - Coding Enthusiast, web developer, software engineer',
  },
  description:
    'I’m Johnathan, a full-stack developer based in Chino Hills, California. I like to build Websites and Microservices.',
  // alternates: {
  //   types: {
  //     'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased " suppressHydrationWarning>
      <body className="flex h-full bg-zinc-100 dark:bg-black">
        <Providers>
          <div className="flex w-full animate-fade">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
