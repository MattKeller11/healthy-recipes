'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '../ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

export const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">Healthy Recipes</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recipe Type</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {recipeTypes.map(type => (
                <ListItem key={type.title} href={type.href} title={type.title}>
                  {type.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link legacyBehavior passHref href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Search</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link legacyBehavior passHref href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Submit Recipe
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const recipeTypes: { title: string; href: string; description: string }[] = [
  {
    title: 'Breakfast',
    href: '/breakfast',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Lunch',
    href: '/lunch',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Dinner',
    href: '/dinner',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Snacks & Dessert',
    href: '/snacks',
    description: 'Visually or semantically separates content.',
  },
]

const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
