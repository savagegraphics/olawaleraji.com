export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-3xl px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} T. Olawale RAJI. All rights reserved.</p>
        <p className="mt-1">Crafted with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  )
}

