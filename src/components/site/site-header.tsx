import { Link } from '@tanstack/react-router'
import { ChevronDown, ExternalLink, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { SmartLink } from '@/components/site/smart-link'
import { brand, cdn, isExternal, navGroups } from '@/data/site'

export function SiteHeader() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl"
    >
      <div className="trans-stripe h-1 w-full" aria-hidden />
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 rounded-full">
          <img
            src={cdn('/img/site/logo.png', 96)}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full glow-cyan"
          />
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
            BabyBluJ <span className="text-neon">Productions</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navGroups.map((group) => (
            <DropdownMenu key={group.label} modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-foreground/85">
                  {group.label}
                  <ChevronDown className="size-3.5 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-2">
                {group.links.map((link) => (
                  <DropdownMenuItem key={link.label} asChild className="cursor-pointer">
                    <SmartLink
                      href={link.href}
                      className="flex flex-col items-start gap-0.5 rounded-md px-3 py-2"
                    >
                      <span className="flex items-center gap-1.5 font-medium">
                        {link.label}
                        {isExternal(link.href) && (
                          <ExternalLink className="size-3 opacity-50" aria-label="(opens in new tab)" />
                        )}
                      </span>
                      {link.description && (
                        <span className="text-xs text-muted-foreground">{link.description}</span>
                      )}
                    </SmartLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <Button asChild size="sm" variant="ghost">
            <Link to="/about">About</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex glow-cyan">
            <Link to="/projects/home-binger">Get Home Binger</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-display">{brand.name}</SheetTitle>
          <SheetDescription>Projects, services, music and more.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4 pb-8">
          <SheetClose asChild>
            <Link to="/about" className="font-medium hover:text-primary">
              About me
            </Link>
          </SheetClose>
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-xs font-semibold tracking-widest text-accent uppercase">
                {group.label}
              </p>
              <ul className="flex flex-col gap-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <SheetClose asChild>
                      <SmartLink
                        href={link.href}
                        className="block rounded-md px-2 py-1.5 hover:bg-secondary"
                      >
                        {link.label}
                      </SmartLink>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
