import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Topics = () => {

    return (
        <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
            >
                HTML
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    )
}

export default Topics;
