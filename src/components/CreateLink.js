import React, { Component } from "react";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// graphql command to mutation
const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };

  render() {
    const { description, url } = this.state;

    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="description for link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="url for link"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
        >
          {/* {() => (
                        <button onClick={`... you'll implement this 🔜`}>Submit</button>
                    )} */}
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
