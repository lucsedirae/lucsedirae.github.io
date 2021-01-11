//* Dependencies
import React from 'react'

//* Material-UI components, hooks, and icons
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"

const Buttons = () => {
    return (
        <ButtonGroup color="primary">
            <Button href="/about">About</Button>
            <Button href="/portfolio">Portfolio</Button>
            <Button href="/words">Words</Button>
            <Button href="/contact">Contact</Button>
        </ButtonGroup>
    )
}

export default Buttons
