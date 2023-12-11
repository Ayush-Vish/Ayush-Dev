"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "lucide-react"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes({liveLink , githubLinkFrontend,githubLinkBackend} : {liveLink : string , githubLinkFrontend : string , githubLinkBackend : string}) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
    function goToLink (link : string) {
        window.open(link , "_blank");
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 outline-none"> <  Link className="h-5"  /> </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuCheckboxItem
         
          onClick={(e)=> goToLink(liveLink)}
        >
          LiveLink
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
         
          
          onClick={(e)=> goToLink(githubLinkFrontend)}
        >
          FrontEnd
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
         
          onClick={(e)=> goToLink(githubLinkBackend)}
        >
          Backend
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
