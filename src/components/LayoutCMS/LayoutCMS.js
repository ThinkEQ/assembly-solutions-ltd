import React from 'react'

// Load components
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import Testimonial from '../Testimonial/Testimonial'
import Content, { HTMLContent, MDXWrapper, toHTML } from '../Content'

const LayoutCMS = ({data}) => {
    const CMSContent = HTMLContent || Content
    return ( data &&
        <MDXWrapper>
        <Grid templateColumns={{base: "1fr", lg: "repeat(2, 1fr)"}} templateRows="auto" gap={10} justifyContent="center">
        {data.map((content) => {
            const span = content.type === 'column' ? 1 : 2

            if (content.type === 'full') {
                return (
                    <GridItem colSpan={span} maxWidth={{base: "100%", lg:"60%"}} margin="0 auto">
                        {content.full.title && <Heading as="h4" textStyle="h4" marginBottom="20px">
                            {content.full.title}
                        </Heading>}
                        <CMSContent content={toHTML(content.full.text)} />
                    </GridItem>
                )
            }
            if (content.type === 'testimonial') {
              const spanConfig = content.testimonial.alignment === 'centre' ? {maxW: {base: "100%", lg:"60%"}, margin: "0 auto", colSpan: {base: 2, lg: 2} } : {colSpan: { base: 2, lg: 1}}
        
                return (
                    <GridItem {...spanConfig}>
                        <Testimonial author={content.testimonial.name}  quote={content.testimonial.quote} />
                    </GridItem>
                )
            }
            return (
                <GridItem colSpan={{base: 2,  lg: span}}>
                    {content.column.title && <Heading as="h4" textStyle="h4" marginBottom="20px">
                        {content.column.title}
                    </Heading>}
                    <CMSContent content={toHTML(content.column.text)} />
                </GridItem>
            )
        })}
        </Grid>
      </MDXWrapper>
    )
}

export default LayoutCMS