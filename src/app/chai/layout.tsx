export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <h2>Inner layout Item</h2>
        {children}
    </> 
  )
}