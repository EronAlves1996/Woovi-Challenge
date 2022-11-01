/**
 * @generated SignedSource<<aa62bbee72a9c6bc8d7f34211f842c0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LoginFormQuery$variables = {
  email: string;
  password: string;
};
export type LoginFormQuery$data = {
  readonly loginInfo: {
    readonly name: string | null;
  } | null;
};
export type LoginFormQuery = {
  response: LoginFormQuery$data;
  variables: LoginFormQuery$variables;
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
    "name": "LoginFormQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginFormQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e94b58d594ac03ce59789402ab1aee6d",
    "id": null,
    "metadata": {},
    "name": "LoginFormQuery",
    "operationKind": "query",
    "text": "query LoginFormQuery(\n  $email: String!\n  $password: String!\n) {\n  loginInfo(loginInformation: {email: $email, password: $password}) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "7e6892623b6f8ddaf779d1a5c3eb2855";

export default node;
