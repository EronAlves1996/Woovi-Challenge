/**
 * @generated SignedSource<<31e6d1f7e674503eebda524e91950f8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LoggedQuery$variables = {
  email: string;
  password: string;
};
export type LoggedQuery$data = {
  readonly loginInfo: {
    readonly name: string | null;
  } | null;
};
export type LoggedQuery = {
  response: LoggedQuery$data;
  variables: LoggedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "loginInformation"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "loginInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoggedQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoggedQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f2a39d7858c2c68b9b4e2088aa3116ef",
    "id": null,
    "metadata": {},
    "name": "LoggedQuery",
    "operationKind": "query",
    "text": "query LoggedQuery(\n  $email: String!\n  $password: String!\n) {\n  loginInfo(loginInformation: {email: $email, password: $password}) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "503a5cbc6e4f91cb442ce3608e014ba6";

export default node;
