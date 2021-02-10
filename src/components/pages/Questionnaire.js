//* Dependencies
import React, { Fragment } from "react";

//* MUI comps, hooks, icons
import Container from "@material-ui/core/Container"


const Questionnaire = () => {
    document.getElementById("root")
    
  return (
    <Container style={{padding: "2rem"}}>
      <form name="questionnaire">
        <input type="hidden" name="form-name" value="questionnaire" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      
    </Container>
  );
};

export default Questionnaire;
