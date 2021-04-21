import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function JumbotronContent() {
    return (
      <div className="JumbotronContentApp m-3">
        <div className="row justify-content-center ">
            <div className="col-md-10">
                <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>
            </div>
        </div>
    </div>
    )
  }

  export default JumbotronContent