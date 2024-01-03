export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return ( 
        <section className='bg-primary-color min-h-screen'>
            <main className='max-w-6xl flex justify-between px-6 mx-auto h-screen items-center'>
                {children}
            </main>
        </section>
    ) 
  }