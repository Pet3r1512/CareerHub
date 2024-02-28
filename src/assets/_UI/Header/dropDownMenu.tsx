import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { twMerge } from "tailwind-merge";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={twMerge(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function DropDownMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium text-lg">
            Your Career
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem className="text-primary" title="Find Jobs" href="/jobs">
                Discover jobs across the world!
              </ListItem>
              <ListItem
                className="text-primary"
                title="Browse Companies"
                href="/companies"
              >
                Find your dream jobs at favorites companies!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium text-lg">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex gap-3 p-4 w-max">
              <ListItem
                className="text-gray-dark"
                title="Pricing & Plans"
                href="/pricing"
              ></ListItem>
              <ListItem
                className="text-gray-dark"
                title="Terms of Usage"
                href="/terms"
              ></ListItem>
              <ListItem
                className="text-gray-dark"
                title="Blogs"
                href="/advice"
              ></ListItem>
              <ListItem
                className="text-gray-dark"
                title="Privacy Policies"
                href="/privacy-policy"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
