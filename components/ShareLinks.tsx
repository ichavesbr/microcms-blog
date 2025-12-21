"use client"

import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share"

const ShareLinks = () => {
  return (
    <>
      <FacebookShareButton url="/">
        <FacebookIcon size={28} round />
      </FacebookShareButton>

      <TwitterShareButton url="/">
        <XIcon size={28} round />
      </TwitterShareButton>

      <LineShareButton url="/">
        <LineIcon size={28} round />
      </LineShareButton>

      <HatenaShareButton url="/">
        <HatenaIcon size={28} round />
      </HatenaShareButton>
    </>
  )
}

export default ShareLinks
