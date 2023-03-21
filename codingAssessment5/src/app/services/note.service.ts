/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateNote: OnCreateNoteSubscription;
  onUpdateNote: OnUpdateNoteSubscription;
  onDeleteNote: OnDeleteNoteSubscription;
};

export type CreateNoteInput = {
  id?: string | null;
  title: string;
  description?: string | null;
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelNoteConditionInput | null> | null;
  or?: Array<ModelNoteConditionInput | null> | null;
  not?: ModelNoteConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Note = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateNoteInput = {
  id: string;
  title?: string | null;
  description?: string | null;
};

export type DeleteNoteInput = {
  id: string;
};

export type SearchableNoteFilterInput = {
  id?: SearchableIDFilterInput | null;
  title?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableNoteFilterInput | null> | null;
  or?: Array<SearchableNoteFilterInput | null> | null;
  not?: SearchableNoteFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableNoteSortInput = {
  field?: SearchableNoteSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableNoteSortableFields {
  id = 'id',
  title = 'title',
  description = 'description',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type SearchableNoteAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableNoteAggregateField;
};

export enum SearchableAggregateType {
  terms = 'terms',
  avg = 'avg',
  min = 'min',
  max = 'max',
  sum = 'sum',
}

export enum SearchableNoteAggregateField {
  id = 'id',
  title = 'title',
  description = 'description',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type SearchableNoteConnection = {
  __typename: 'SearchableNoteConnection';
  items: Array<Note | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: 'SearchableAggregateResult';
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: 'SearchableAggregateScalarResult';
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: 'SearchableAggregateBucketResult';
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: 'SearchableAggregateBucketResultItem';
  key: string;
  doc_count: number;
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelNoteFilterInput | null> | null;
  or?: Array<ModelNoteFilterInput | null> | null;
  not?: ModelNoteFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelNoteConnection = {
  __typename: 'ModelNoteConnection';
  items: Array<Note | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionNoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionNoteFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateNoteMutation = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateNoteMutation = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteNoteMutation = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type SearchNotesQuery = {
  __typename: 'SearchableNoteConnection';
  items: Array<{
    __typename: 'Note';
    id: string;
    title: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: 'SearchableAggregateResult';
    name: string;
    result:
      | (
          | {
              __typename: 'SearchableAggregateScalarResult';
              value: number;
            }
          | {
              __typename: 'SearchableAggregateBucketResult';
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetNoteQuery = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListNotesQuery = {
  __typename: 'ModelNoteConnection';
  items: Array<{
    __typename: 'Note';
    id: string;
    title: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateNoteSubscription = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateNoteSubscription = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteNoteSubscription = {
  __typename: 'Note';
  id: string;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  async CreateNote(
    input: CreateNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<CreateNoteMutation> {
    const statement = `mutation CreateNote($input: CreateNoteInput!, $condition: ModelNoteConditionInput) {
        createNote(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNoteMutation>response.data.createNote;
  }
  async UpdateNote(
    input: UpdateNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<UpdateNoteMutation> {
    const statement = `mutation UpdateNote($input: UpdateNoteInput!, $condition: ModelNoteConditionInput) {
        updateNote(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNoteMutation>response.data.updateNote;
  }
  async DeleteNote(
    input: DeleteNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<DeleteNoteMutation> {
    const statement = `mutation DeleteNote($input: DeleteNoteInput!, $condition: ModelNoteConditionInput) {
        deleteNote(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNoteMutation>response.data.deleteNote;
  }
  async SearchNotes(
    filter?: SearchableNoteFilterInput,
    sort?: Array<SearchableNoteSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableNoteAggregationInput | null>
  ): Promise<SearchNotesQuery> {
    const statement = `query SearchNotes($filter: SearchableNoteFilterInput, $sort: [SearchableNoteSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableNoteAggregationInput]) {
        searchNotes(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            title
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchNotesQuery>response.data.searchNotes;
  }
  async GetNote(id: string): Promise<GetNoteQuery> {
    const statement = `query GetNote($id: ID!) {
        getNote(id: $id) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNoteQuery>response.data.getNote;
  }
  async ListNotes(
    filter?: ModelNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotesQuery> {
    const statement = `query ListNotes($filter: ModelNoteFilterInput, $limit: Int, $nextToken: String) {
        listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotesQuery>response.data.listNotes;
  }
  OnCreateNoteListener(
    filter?: ModelSubscriptionNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateNote'>>
  > {
    const statement = `subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput, $owner: String) {
        onCreateNote(filter: $filter, owner: $owner) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateNote'>>
    >;
  }

  OnUpdateNoteListener(
    filter?: ModelSubscriptionNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateNote'>>
  > {
    const statement = `subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput, $owner: String) {
        onUpdateNote(filter: $filter, owner: $owner) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateNote'>>
    >;
  }

  OnDeleteNoteListener(
    filter?: ModelSubscriptionNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteNote'>>
  > {
    const statement = `subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput, $owner: String) {
        onDeleteNote(filter: $filter, owner: $owner) {
          __typename
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteNote'>>
    >;
  }
}
