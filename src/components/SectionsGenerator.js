import React from 'react'
import { graphql } from 'gatsby'

import Hero from './sections/hero'

export default function SectionsGenerator({ sections }) {
	const sectionsComponents = {
		hero: Hero
	}
	
	const sectionsContent = sections.map((section, key) => {
		const Section = sectionsComponents[section.type]
		if (Section) {
			return <Section key={key} data={section} />
		}
		return <div>{section.type}</div>
	})
	
	return (
		<>
			{sectionsContent}
		</>
	)
}

export const query = graphql`
  fragment Sections on MarkdownRemarkFrontmatter {
    sections {
      id
      type
      title
    #   subtitle
    #   content
  }
}
`
