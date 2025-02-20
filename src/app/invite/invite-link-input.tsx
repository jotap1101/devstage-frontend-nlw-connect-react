'use client'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    console.log('Copied invite link to clipboard')
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        defaultValue={inviteLink}
        readOnly
      />

      <IconButton
        className="-mr-2"
        onClick={copyInviteLink}
      >
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
