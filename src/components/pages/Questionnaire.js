//* Dependencies
import React from "react";

//* MUI comps, hooks, icons
import Container from "@material-ui/core/Container"

// const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
//   }

//* Exported component
const Questionnaire = () => {
    // document.getElementById("root")
    
  //  const handleSubmit = e => {
  //       fetch("/", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: encode({ "form-name": "contact", ...this.state })
  //       })
  //         .then(() => alert("Success!"))
  //         .catch(error => alert(error));
    
  //       e.preventDefault();
  //     };

  return (
    <Container style={{padding: "2rem"}}>
      {/* <form onSubmit={handleSubmit} name="questionnaire"> */}
      <form name="questionnaire" method="post">
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
