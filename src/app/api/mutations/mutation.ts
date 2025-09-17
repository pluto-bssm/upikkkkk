import { gql } from "@apollo/client";

export const Create_Vote = gql`
mutation MyMutation($title: String!, $category: String!, $options: [String!]!) {
  vote {
    createVote(input: {options: $options, category: $category, title: $title}) {
      id
      category
      finishedAt
      hasVoted
      options {
        content
        percentage
        responseCount
        id
      }
      totalResponses
      title
      status
    }
  }
}
`;