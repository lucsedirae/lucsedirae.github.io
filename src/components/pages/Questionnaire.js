//* Dependencies
import React from "react";

//* MUI comps, hooks, icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//* Exported component
const Questionnaire = () => {
  return (
    <Container style={{ padding: "2rem" }}>
      {/* <form onSubmit={handleSubmit} name="questionnaire"> */}
          <form name="questionnaire" method="post">
      <Grid container >
        <Grid item xs={12} md={6} align="center">
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
                Company/Site: <input type="text" name="company" />
              </label>
            </p>
            <p>
              Will you need a blog?
              <input type="checkbox" id="blog1" name="blog1" value="Yes"/>
              <label for="blog1">Yes</label>
              <input type="checkbox" id="blog2" name="blog2" value="No"/>
              <label for="blog1">No</label>
            </p>

            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <p>
            <label>
              Another One: <input />
            </label>
          </p>
        </Grid>
      </Grid>
          </form>
    </Container>
  );
};

export default Questionnaire;
