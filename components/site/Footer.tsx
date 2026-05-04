export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-secondary text-primary-foreground font-bold text-sm">
            YP
          </span>
          <div>
            <div className="font-semibold tracking-tight text-sm">
              Yang Penting <span className="text-gradient">Kode</span>
            </div>
            <div className="text-xs text-muted-foreground">Code with purpose. Ship with pride.</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yang Penting Kode. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
