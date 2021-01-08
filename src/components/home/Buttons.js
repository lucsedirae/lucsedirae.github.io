//* Dependencies
import React from 'react'

//* Material-UI components, hooks, and icons
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"

const Buttons = () => {
    return (
        <ButtonGroup color="primary">
            <Button>About</Button>
            <Button>Portfolio</Button>
            <Button>Words</Button>
            <Button>Contact</Button>
        </ButtonGroup>
    )
}

export default Buttons
