import React from "react";
import Questions from "../../components/Questions"

class Section extends React.Component {
    render() {
        const {section, questions, applicable} = this.props.section;
       return (
          <div>
             <h1> {section} </h1>
            <Questions />
          </div>
       );
    }
 }

 export default Section