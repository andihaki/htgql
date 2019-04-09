import React, { Component } from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

class LinkList extends Component {
  render() {
    return (
      <div>
        {/* HOC */}
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

            const linkToRender = data.feed.links;

            /* render props  */
            return (
              <div>
                {linkToRender.map(link => (
                  <Link key={link.id} link={link} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default LinkList;