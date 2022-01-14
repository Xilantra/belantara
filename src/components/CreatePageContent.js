import React from "react"
import Features from "../components/Features";

export default function SocialLinks(type,contentType) {

    if (type === 'typeOne') {
        return (
          <Features gridItems={contentType} />
        );
    } else if (type === 'typeTwo') {
        return (
          <div>ooooo</div>
        );
    } else {
        return <div>aaaaaaaaa</div>
    }
}
