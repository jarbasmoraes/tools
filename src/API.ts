/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  description?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteTaskInput = {
  id: string,
  _version?: number | null,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
  _version?: number | null,
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteConditionInput | null > | null,
  or?: Array< ModelPrivateNoteConditionInput | null > | null,
  not?: ModelPrivateNoteConditionInput | null,
};

export type PrivateNote = {
  __typename: "PrivateNote",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
  _version?: number | null,
};

export type DeletePrivateNoteInput = {
  id: string,
  _version?: number | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type ModelPrivateNoteConnection = {
  __typename: "ModelPrivateNoteConnection",
  items:  Array<PrivateNote | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPrivateNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPrivateNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionPrivateNoteFilterInput | null > | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes?:  {
    __typename: "ModelPrivateNoteConnection",
    items:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPrivateNotesQuery = {
  syncPrivateNotes?:  {
    __typename: "ModelPrivateNoteConnection",
    items:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePrivateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionPrivateNoteFilterInput | null,
  owner?: string | null,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdatePrivateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionPrivateNoteFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeletePrivateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionPrivateNoteFilterInput | null,
  owner?: string | null,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
