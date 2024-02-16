// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { UniswapEthUsdcAnalyzerTypes } from './sources/uniswap-eth-usdc-analyzer/types';
import * as importedModule$0 from "./sources/uniswap-eth-usdc-analyzer/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type DailyStat = {
  id: Scalars['ID'];
  totalVolume: Scalars['BigDecimal'];
  totalTransactions: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type DailyStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DailyStat_filter>>>;
};

export type DailyStat_orderBy =
  | 'id'
  | 'totalVolume'
  | 'totalTransactions'
  | 'timestamp';

export type FeeCollection = {
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  amount0: Scalars['BigInt'];
  amount1: Scalars['BigInt'];
  eventType: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type FeeCollection_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigInt']>;
  amount0_not?: InputMaybe<Scalars['BigInt']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount1?: InputMaybe<Scalars['BigInt']>;
  amount1_not?: InputMaybe<Scalars['BigInt']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eventType?: InputMaybe<Scalars['String']>;
  eventType_not?: InputMaybe<Scalars['String']>;
  eventType_gt?: InputMaybe<Scalars['String']>;
  eventType_lt?: InputMaybe<Scalars['String']>;
  eventType_gte?: InputMaybe<Scalars['String']>;
  eventType_lte?: InputMaybe<Scalars['String']>;
  eventType_in?: InputMaybe<Array<Scalars['String']>>;
  eventType_not_in?: InputMaybe<Array<Scalars['String']>>;
  eventType_contains?: InputMaybe<Scalars['String']>;
  eventType_contains_nocase?: InputMaybe<Scalars['String']>;
  eventType_not_contains?: InputMaybe<Scalars['String']>;
  eventType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  eventType_starts_with?: InputMaybe<Scalars['String']>;
  eventType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventType_not_starts_with?: InputMaybe<Scalars['String']>;
  eventType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventType_ends_with?: InputMaybe<Scalars['String']>;
  eventType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eventType_not_ends_with?: InputMaybe<Scalars['String']>;
  eventType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeCollection_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeeCollection_filter>>>;
};

export type FeeCollection_orderBy =
  | 'id'
  | 'owner'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'eventType'
  | 'blockNumber'
  | 'timestamp';

export type FlashLoan = {
  id: Scalars['ID'];
  sender: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  amount0: Scalars['BigInt'];
  amount1: Scalars['BigInt'];
  paid0: Scalars['BigInt'];
  paid1: Scalars['BigInt'];
  totalFlashLoanSize: Scalars['BigInt'];
  numberOfLoans: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type FlashLoanAmount = {
  id: Scalars['ID'];
  flashLoan: FlashLoan;
  amountSize: Scalars['BigInt'];
};

export type FlashLoanAmount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  flashLoan?: InputMaybe<Scalars['String']>;
  flashLoan_not?: InputMaybe<Scalars['String']>;
  flashLoan_gt?: InputMaybe<Scalars['String']>;
  flashLoan_lt?: InputMaybe<Scalars['String']>;
  flashLoan_gte?: InputMaybe<Scalars['String']>;
  flashLoan_lte?: InputMaybe<Scalars['String']>;
  flashLoan_in?: InputMaybe<Array<Scalars['String']>>;
  flashLoan_not_in?: InputMaybe<Array<Scalars['String']>>;
  flashLoan_contains?: InputMaybe<Scalars['String']>;
  flashLoan_contains_nocase?: InputMaybe<Scalars['String']>;
  flashLoan_not_contains?: InputMaybe<Scalars['String']>;
  flashLoan_not_contains_nocase?: InputMaybe<Scalars['String']>;
  flashLoan_starts_with?: InputMaybe<Scalars['String']>;
  flashLoan_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flashLoan_not_starts_with?: InputMaybe<Scalars['String']>;
  flashLoan_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flashLoan_ends_with?: InputMaybe<Scalars['String']>;
  flashLoan_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flashLoan_not_ends_with?: InputMaybe<Scalars['String']>;
  flashLoan_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flashLoan_?: InputMaybe<FlashLoan_filter>;
  amountSize?: InputMaybe<Scalars['BigInt']>;
  amountSize_not?: InputMaybe<Scalars['BigInt']>;
  amountSize_gt?: InputMaybe<Scalars['BigInt']>;
  amountSize_lt?: InputMaybe<Scalars['BigInt']>;
  amountSize_gte?: InputMaybe<Scalars['BigInt']>;
  amountSize_lte?: InputMaybe<Scalars['BigInt']>;
  amountSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlashLoanAmount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlashLoanAmount_filter>>>;
};

export type FlashLoanAmount_orderBy =
  | 'id'
  | 'flashLoan'
  | 'flashLoan__id'
  | 'flashLoan__sender'
  | 'flashLoan__recipient'
  | 'flashLoan__amount0'
  | 'flashLoan__amount1'
  | 'flashLoan__paid0'
  | 'flashLoan__paid1'
  | 'flashLoan__totalFlashLoanSize'
  | 'flashLoan__numberOfLoans'
  | 'flashLoan__blockNumber'
  | 'flashLoan__timestamp'
  | 'amountSize';

export type FlashLoan_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigInt']>;
  amount0_not?: InputMaybe<Scalars['BigInt']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount1?: InputMaybe<Scalars['BigInt']>;
  amount1_not?: InputMaybe<Scalars['BigInt']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paid0?: InputMaybe<Scalars['BigInt']>;
  paid0_not?: InputMaybe<Scalars['BigInt']>;
  paid0_gt?: InputMaybe<Scalars['BigInt']>;
  paid0_lt?: InputMaybe<Scalars['BigInt']>;
  paid0_gte?: InputMaybe<Scalars['BigInt']>;
  paid0_lte?: InputMaybe<Scalars['BigInt']>;
  paid0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paid0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paid1?: InputMaybe<Scalars['BigInt']>;
  paid1_not?: InputMaybe<Scalars['BigInt']>;
  paid1_gt?: InputMaybe<Scalars['BigInt']>;
  paid1_lt?: InputMaybe<Scalars['BigInt']>;
  paid1_gte?: InputMaybe<Scalars['BigInt']>;
  paid1_lte?: InputMaybe<Scalars['BigInt']>;
  paid1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paid1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFlashLoanSize?: InputMaybe<Scalars['BigInt']>;
  totalFlashLoanSize_not?: InputMaybe<Scalars['BigInt']>;
  totalFlashLoanSize_gt?: InputMaybe<Scalars['BigInt']>;
  totalFlashLoanSize_lt?: InputMaybe<Scalars['BigInt']>;
  totalFlashLoanSize_gte?: InputMaybe<Scalars['BigInt']>;
  totalFlashLoanSize_lte?: InputMaybe<Scalars['BigInt']>;
  totalFlashLoanSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFlashLoanSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfLoans?: InputMaybe<Scalars['BigInt']>;
  numberOfLoans_not?: InputMaybe<Scalars['BigInt']>;
  numberOfLoans_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfLoans_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfLoans_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfLoans_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfLoans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfLoans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlashLoan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlashLoan_filter>>>;
};

export type FlashLoan_orderBy =
  | 'id'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'paid0'
  | 'paid1'
  | 'totalFlashLoanSize'
  | 'numberOfLoans'
  | 'blockNumber'
  | 'timestamp';

export type LastSwapPerBlock = {
  id: Scalars['ID'];
  lastSwapId: Scalars['String'];
};

export type LastSwapPerBlock_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastSwapId?: InputMaybe<Scalars['String']>;
  lastSwapId_not?: InputMaybe<Scalars['String']>;
  lastSwapId_gt?: InputMaybe<Scalars['String']>;
  lastSwapId_lt?: InputMaybe<Scalars['String']>;
  lastSwapId_gte?: InputMaybe<Scalars['String']>;
  lastSwapId_lte?: InputMaybe<Scalars['String']>;
  lastSwapId_in?: InputMaybe<Array<Scalars['String']>>;
  lastSwapId_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastSwapId_contains?: InputMaybe<Scalars['String']>;
  lastSwapId_contains_nocase?: InputMaybe<Scalars['String']>;
  lastSwapId_not_contains?: InputMaybe<Scalars['String']>;
  lastSwapId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastSwapId_starts_with?: InputMaybe<Scalars['String']>;
  lastSwapId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapId_not_starts_with?: InputMaybe<Scalars['String']>;
  lastSwapId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapId_ends_with?: InputMaybe<Scalars['String']>;
  lastSwapId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapId_not_ends_with?: InputMaybe<Scalars['String']>;
  lastSwapId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LastSwapPerBlock_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LastSwapPerBlock_filter>>>;
};

export type LastSwapPerBlock_orderBy =
  | 'id'
  | 'lastSwapId';

export type MarketVolatility = {
  id: Scalars['ID'];
  totalVolatility: Scalars['BigDecimal'];
  lastUpdated: Scalars['BigInt'];
};

export type MarketVolatility_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalVolatility?: InputMaybe<Scalars['BigDecimal']>;
  totalVolatility_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolatility_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolatility_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolatility_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolatility_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolatility_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolatility_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketVolatility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MarketVolatility_filter>>>;
};

export type MarketVolatility_orderBy =
  | 'id'
  | 'totalVolatility'
  | 'lastUpdated';

export type ObservationCardinality = {
  id: Scalars['ID'];
  oldCardinality: Scalars['Int'];
  newCardinality: Scalars['Int'];
  timestamp: Scalars['BigInt'];
};

export type ObservationCardinality_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  oldCardinality?: InputMaybe<Scalars['Int']>;
  oldCardinality_not?: InputMaybe<Scalars['Int']>;
  oldCardinality_gt?: InputMaybe<Scalars['Int']>;
  oldCardinality_lt?: InputMaybe<Scalars['Int']>;
  oldCardinality_gte?: InputMaybe<Scalars['Int']>;
  oldCardinality_lte?: InputMaybe<Scalars['Int']>;
  oldCardinality_in?: InputMaybe<Array<Scalars['Int']>>;
  oldCardinality_not_in?: InputMaybe<Array<Scalars['Int']>>;
  newCardinality?: InputMaybe<Scalars['Int']>;
  newCardinality_not?: InputMaybe<Scalars['Int']>;
  newCardinality_gt?: InputMaybe<Scalars['Int']>;
  newCardinality_lt?: InputMaybe<Scalars['Int']>;
  newCardinality_gte?: InputMaybe<Scalars['Int']>;
  newCardinality_lte?: InputMaybe<Scalars['Int']>;
  newCardinality_in?: InputMaybe<Array<Scalars['Int']>>;
  newCardinality_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObservationCardinality_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ObservationCardinality_filter>>>;
};

export type ObservationCardinality_orderBy =
  | 'id'
  | 'oldCardinality'
  | 'newCardinality'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PriceImpact = {
  id: Scalars['ID'];
  swapEvent: Swap;
  priceBefore: Scalars['BigDecimal'];
  priceAfter: Scalars['BigDecimal'];
  impact: Scalars['BigDecimal'];
};

export type PriceImpact_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  swapEvent?: InputMaybe<Scalars['String']>;
  swapEvent_not?: InputMaybe<Scalars['String']>;
  swapEvent_gt?: InputMaybe<Scalars['String']>;
  swapEvent_lt?: InputMaybe<Scalars['String']>;
  swapEvent_gte?: InputMaybe<Scalars['String']>;
  swapEvent_lte?: InputMaybe<Scalars['String']>;
  swapEvent_in?: InputMaybe<Array<Scalars['String']>>;
  swapEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  swapEvent_contains?: InputMaybe<Scalars['String']>;
  swapEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  swapEvent_not_contains?: InputMaybe<Scalars['String']>;
  swapEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  swapEvent_starts_with?: InputMaybe<Scalars['String']>;
  swapEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swapEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  swapEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swapEvent_ends_with?: InputMaybe<Scalars['String']>;
  swapEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  swapEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapEvent_?: InputMaybe<Swap_filter>;
  priceBefore?: InputMaybe<Scalars['BigDecimal']>;
  priceBefore_not?: InputMaybe<Scalars['BigDecimal']>;
  priceBefore_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceBefore_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceBefore_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceBefore_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceBefore_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceBefore_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceAfter?: InputMaybe<Scalars['BigDecimal']>;
  priceAfter_not?: InputMaybe<Scalars['BigDecimal']>;
  priceAfter_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceAfter_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceAfter_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceAfter_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceAfter_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceAfter_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  impact?: InputMaybe<Scalars['BigDecimal']>;
  impact_not?: InputMaybe<Scalars['BigDecimal']>;
  impact_gt?: InputMaybe<Scalars['BigDecimal']>;
  impact_lt?: InputMaybe<Scalars['BigDecimal']>;
  impact_gte?: InputMaybe<Scalars['BigDecimal']>;
  impact_lte?: InputMaybe<Scalars['BigDecimal']>;
  impact_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  impact_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceImpact_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PriceImpact_filter>>>;
};

export type PriceImpact_orderBy =
  | 'id'
  | 'swapEvent'
  | 'swapEvent__id'
  | 'swapEvent__sender'
  | 'swapEvent__recipient'
  | 'swapEvent__amount0'
  | 'swapEvent__amount1'
  | 'swapEvent__sqrtPriceX96'
  | 'swapEvent__liquidity'
  | 'swapEvent__tick'
  | 'swapEvent__blockNumber'
  | 'swapEvent__blockTimestamp'
  | 'swapEvent__transactionHash'
  | 'priceBefore'
  | 'priceAfter'
  | 'impact';

export type Query = {
  feeCollection?: Maybe<FeeCollection>;
  feeCollections: Array<FeeCollection>;
  lastSwapPerBlock?: Maybe<LastSwapPerBlock>;
  lastSwapPerBlocks: Array<LastSwapPerBlock>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  priceImpact?: Maybe<PriceImpact>;
  priceImpacts: Array<PriceImpact>;
  tradeSize?: Maybe<TradeSize>;
  tradeSizes: Array<TradeSize>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  marketVolatility?: Maybe<MarketVolatility>;
  marketVolatilities: Array<MarketVolatility>;
  swapAmount?: Maybe<SwapAmount>;
  swapAmounts: Array<SwapAmount>;
  flashLoanAmount?: Maybe<FlashLoanAmount>;
  flashLoanAmounts: Array<FlashLoanAmount>;
  observationCardinality?: Maybe<ObservationCardinality>;
  observationCardinalities: Array<ObservationCardinality>;
  dailyStat?: Maybe<DailyStat>;
  dailyStats: Array<DailyStat>;
  userActivity?: Maybe<UserActivity>;
  userActivities: Array<UserActivity>;
  relayActivity?: Maybe<RelayActivity>;
  relayActivities: Array<RelayActivity>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryfeeCollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeeCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeCollection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylastSwapPerBlockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylastSwapPerBlocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LastSwapPerBlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LastSwapPerBlock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceImpactArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceImpactsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceImpact_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceImpact_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradeSizeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradeSizesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TradeSize_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradeSize_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketVolatilityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketVolatilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketVolatility_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketVolatility_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapAmountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoanAmountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoanAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoanAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoanAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryobservationCardinalityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryobservationCardinalitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ObservationCardinality_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObservationCardinality_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserActivityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserActivity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserActivity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrelayActivityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrelayActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RelayActivity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RelayActivity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RelayActivity = {
  id: Scalars['ID'];
  numberOfSwaps: Scalars['BigInt'];
  totalVolume: Scalars['BigDecimal'];
};

export type RelayActivity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfSwaps?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSwaps_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RelayActivity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RelayActivity_filter>>>;
};

export type RelayActivity_orderBy =
  | 'id'
  | 'numberOfSwaps'
  | 'totalVolume';

export type Subscription = {
  feeCollection?: Maybe<FeeCollection>;
  feeCollections: Array<FeeCollection>;
  lastSwapPerBlock?: Maybe<LastSwapPerBlock>;
  lastSwapPerBlocks: Array<LastSwapPerBlock>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  priceImpact?: Maybe<PriceImpact>;
  priceImpacts: Array<PriceImpact>;
  tradeSize?: Maybe<TradeSize>;
  tradeSizes: Array<TradeSize>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  marketVolatility?: Maybe<MarketVolatility>;
  marketVolatilities: Array<MarketVolatility>;
  swapAmount?: Maybe<SwapAmount>;
  swapAmounts: Array<SwapAmount>;
  flashLoanAmount?: Maybe<FlashLoanAmount>;
  flashLoanAmounts: Array<FlashLoanAmount>;
  observationCardinality?: Maybe<ObservationCardinality>;
  observationCardinalities: Array<ObservationCardinality>;
  dailyStat?: Maybe<DailyStat>;
  dailyStats: Array<DailyStat>;
  userActivity?: Maybe<UserActivity>;
  userActivities: Array<UserActivity>;
  relayActivity?: Maybe<RelayActivity>;
  relayActivities: Array<RelayActivity>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionfeeCollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeeCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeCollection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlastSwapPerBlockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlastSwapPerBlocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LastSwapPerBlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LastSwapPerBlock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceImpactArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceImpactsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceImpact_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceImpact_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradeSizeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradeSizesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TradeSize_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradeSize_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketVolatilityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketVolatilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketVolatility_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketVolatility_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapAmountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoanAmountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoanAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoanAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoanAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionobservationCardinalityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionobservationCardinalitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ObservationCardinality_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObservationCardinality_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserActivityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserActivity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserActivity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrelayActivityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrelayActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RelayActivity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RelayActivity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = {
  id: Scalars['ID'];
  sender: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  amount0: Scalars['BigInt'];
  amount1: Scalars['BigInt'];
  sqrtPriceX96: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  tick: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  lastSwapPerBlock?: Maybe<LastSwapPerBlock>;
  priceImpact: PriceImpact;
};

export type SwapAmount = {
  id: Scalars['ID'];
  swap: Swap;
  amountSize: Scalars['BigInt'];
};

export type SwapAmount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  swap?: InputMaybe<Scalars['String']>;
  swap_not?: InputMaybe<Scalars['String']>;
  swap_gt?: InputMaybe<Scalars['String']>;
  swap_lt?: InputMaybe<Scalars['String']>;
  swap_gte?: InputMaybe<Scalars['String']>;
  swap_lte?: InputMaybe<Scalars['String']>;
  swap_in?: InputMaybe<Array<Scalars['String']>>;
  swap_not_in?: InputMaybe<Array<Scalars['String']>>;
  swap_contains?: InputMaybe<Scalars['String']>;
  swap_contains_nocase?: InputMaybe<Scalars['String']>;
  swap_not_contains?: InputMaybe<Scalars['String']>;
  swap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  swap_starts_with?: InputMaybe<Scalars['String']>;
  swap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swap_not_starts_with?: InputMaybe<Scalars['String']>;
  swap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swap_ends_with?: InputMaybe<Scalars['String']>;
  swap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swap_not_ends_with?: InputMaybe<Scalars['String']>;
  swap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swap_?: InputMaybe<Swap_filter>;
  amountSize?: InputMaybe<Scalars['BigInt']>;
  amountSize_not?: InputMaybe<Scalars['BigInt']>;
  amountSize_gt?: InputMaybe<Scalars['BigInt']>;
  amountSize_lt?: InputMaybe<Scalars['BigInt']>;
  amountSize_gte?: InputMaybe<Scalars['BigInt']>;
  amountSize_lte?: InputMaybe<Scalars['BigInt']>;
  amountSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapAmount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapAmount_filter>>>;
};

export type SwapAmount_orderBy =
  | 'id'
  | 'swap'
  | 'swap__id'
  | 'swap__sender'
  | 'swap__recipient'
  | 'swap__amount0'
  | 'swap__amount1'
  | 'swap__sqrtPriceX96'
  | 'swap__liquidity'
  | 'swap__tick'
  | 'swap__blockNumber'
  | 'swap__blockTimestamp'
  | 'swap__transactionHash'
  | 'amountSize';

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigInt']>;
  amount0_not?: InputMaybe<Scalars['BigInt']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount1?: InputMaybe<Scalars['BigInt']>;
  amount1_not?: InputMaybe<Scalars['BigInt']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick?: InputMaybe<Scalars['Int']>;
  tick_not?: InputMaybe<Scalars['Int']>;
  tick_gt?: InputMaybe<Scalars['Int']>;
  tick_lt?: InputMaybe<Scalars['Int']>;
  tick_gte?: InputMaybe<Scalars['Int']>;
  tick_lte?: InputMaybe<Scalars['Int']>;
  tick_in?: InputMaybe<Array<Scalars['Int']>>;
  tick_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  lastSwapPerBlock?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_gt?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_lt?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_gte?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_lte?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_in?: InputMaybe<Array<Scalars['String']>>;
  lastSwapPerBlock_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastSwapPerBlock_contains?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_contains_nocase?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not_contains?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_starts_with?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not_starts_with?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_ends_with?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not_ends_with?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastSwapPerBlock_?: InputMaybe<LastSwapPerBlock_filter>;
  priceImpact?: InputMaybe<Scalars['String']>;
  priceImpact_not?: InputMaybe<Scalars['String']>;
  priceImpact_gt?: InputMaybe<Scalars['String']>;
  priceImpact_lt?: InputMaybe<Scalars['String']>;
  priceImpact_gte?: InputMaybe<Scalars['String']>;
  priceImpact_lte?: InputMaybe<Scalars['String']>;
  priceImpact_in?: InputMaybe<Array<Scalars['String']>>;
  priceImpact_not_in?: InputMaybe<Array<Scalars['String']>>;
  priceImpact_contains?: InputMaybe<Scalars['String']>;
  priceImpact_contains_nocase?: InputMaybe<Scalars['String']>;
  priceImpact_not_contains?: InputMaybe<Scalars['String']>;
  priceImpact_not_contains_nocase?: InputMaybe<Scalars['String']>;
  priceImpact_starts_with?: InputMaybe<Scalars['String']>;
  priceImpact_starts_with_nocase?: InputMaybe<Scalars['String']>;
  priceImpact_not_starts_with?: InputMaybe<Scalars['String']>;
  priceImpact_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  priceImpact_ends_with?: InputMaybe<Scalars['String']>;
  priceImpact_ends_with_nocase?: InputMaybe<Scalars['String']>;
  priceImpact_not_ends_with?: InputMaybe<Scalars['String']>;
  priceImpact_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  priceImpact_?: InputMaybe<PriceImpact_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};

export type Swap_orderBy =
  | 'id'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'sqrtPriceX96'
  | 'liquidity'
  | 'tick'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'
  | 'lastSwapPerBlock'
  | 'lastSwapPerBlock__id'
  | 'lastSwapPerBlock__lastSwapId'
  | 'priceImpact'
  | 'priceImpact__id'
  | 'priceImpact__priceBefore'
  | 'priceImpact__priceAfter'
  | 'priceImpact__impact';

export type TradeSize = {
  id: Scalars['ID'];
  swap: Swap;
  sizeToken0: Scalars['BigInt'];
  sizeToken1: Scalars['BigInt'];
};

export type TradeSize_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  swap?: InputMaybe<Scalars['String']>;
  swap_not?: InputMaybe<Scalars['String']>;
  swap_gt?: InputMaybe<Scalars['String']>;
  swap_lt?: InputMaybe<Scalars['String']>;
  swap_gte?: InputMaybe<Scalars['String']>;
  swap_lte?: InputMaybe<Scalars['String']>;
  swap_in?: InputMaybe<Array<Scalars['String']>>;
  swap_not_in?: InputMaybe<Array<Scalars['String']>>;
  swap_contains?: InputMaybe<Scalars['String']>;
  swap_contains_nocase?: InputMaybe<Scalars['String']>;
  swap_not_contains?: InputMaybe<Scalars['String']>;
  swap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  swap_starts_with?: InputMaybe<Scalars['String']>;
  swap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swap_not_starts_with?: InputMaybe<Scalars['String']>;
  swap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swap_ends_with?: InputMaybe<Scalars['String']>;
  swap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swap_not_ends_with?: InputMaybe<Scalars['String']>;
  swap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swap_?: InputMaybe<Swap_filter>;
  sizeToken0?: InputMaybe<Scalars['BigInt']>;
  sizeToken0_not?: InputMaybe<Scalars['BigInt']>;
  sizeToken0_gt?: InputMaybe<Scalars['BigInt']>;
  sizeToken0_lt?: InputMaybe<Scalars['BigInt']>;
  sizeToken0_gte?: InputMaybe<Scalars['BigInt']>;
  sizeToken0_lte?: InputMaybe<Scalars['BigInt']>;
  sizeToken0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeToken0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeToken1?: InputMaybe<Scalars['BigInt']>;
  sizeToken1_not?: InputMaybe<Scalars['BigInt']>;
  sizeToken1_gt?: InputMaybe<Scalars['BigInt']>;
  sizeToken1_lt?: InputMaybe<Scalars['BigInt']>;
  sizeToken1_gte?: InputMaybe<Scalars['BigInt']>;
  sizeToken1_lte?: InputMaybe<Scalars['BigInt']>;
  sizeToken1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeToken1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradeSize_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TradeSize_filter>>>;
};

export type TradeSize_orderBy =
  | 'id'
  | 'swap'
  | 'swap__id'
  | 'swap__sender'
  | 'swap__recipient'
  | 'swap__amount0'
  | 'swap__amount1'
  | 'swap__sqrtPriceX96'
  | 'swap__liquidity'
  | 'swap__tick'
  | 'swap__blockNumber'
  | 'swap__blockTimestamp'
  | 'swap__transactionHash'
  | 'sizeToken0'
  | 'sizeToken1';

export type UserActivity = {
  id: Scalars['ID'];
  numberOfSwaps: Scalars['BigInt'];
  totalVolume: Scalars['BigDecimal'];
};

export type UserActivity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfSwaps?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSwaps_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSwaps_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserActivity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserActivity_filter>>>;
};

export type UserActivity_orderBy =
  | 'id'
  | 'numberOfSwaps'
  | 'totalVolume';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  DailyStat: ResolverTypeWrapper<DailyStat>;
  DailyStat_filter: DailyStat_filter;
  DailyStat_orderBy: DailyStat_orderBy;
  FeeCollection: ResolverTypeWrapper<FeeCollection>;
  FeeCollection_filter: FeeCollection_filter;
  FeeCollection_orderBy: FeeCollection_orderBy;
  FlashLoan: ResolverTypeWrapper<FlashLoan>;
  FlashLoanAmount: ResolverTypeWrapper<FlashLoanAmount>;
  FlashLoanAmount_filter: FlashLoanAmount_filter;
  FlashLoanAmount_orderBy: FlashLoanAmount_orderBy;
  FlashLoan_filter: FlashLoan_filter;
  FlashLoan_orderBy: FlashLoan_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  LastSwapPerBlock: ResolverTypeWrapper<LastSwapPerBlock>;
  LastSwapPerBlock_filter: LastSwapPerBlock_filter;
  LastSwapPerBlock_orderBy: LastSwapPerBlock_orderBy;
  MarketVolatility: ResolverTypeWrapper<MarketVolatility>;
  MarketVolatility_filter: MarketVolatility_filter;
  MarketVolatility_orderBy: MarketVolatility_orderBy;
  ObservationCardinality: ResolverTypeWrapper<ObservationCardinality>;
  ObservationCardinality_filter: ObservationCardinality_filter;
  ObservationCardinality_orderBy: ObservationCardinality_orderBy;
  OrderDirection: OrderDirection;
  PriceImpact: ResolverTypeWrapper<PriceImpact>;
  PriceImpact_filter: PriceImpact_filter;
  PriceImpact_orderBy: PriceImpact_orderBy;
  Query: ResolverTypeWrapper<{}>;
  RelayActivity: ResolverTypeWrapper<RelayActivity>;
  RelayActivity_filter: RelayActivity_filter;
  RelayActivity_orderBy: RelayActivity_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Swap: ResolverTypeWrapper<Swap>;
  SwapAmount: ResolverTypeWrapper<SwapAmount>;
  SwapAmount_filter: SwapAmount_filter;
  SwapAmount_orderBy: SwapAmount_orderBy;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  TradeSize: ResolverTypeWrapper<TradeSize>;
  TradeSize_filter: TradeSize_filter;
  TradeSize_orderBy: TradeSize_orderBy;
  UserActivity: ResolverTypeWrapper<UserActivity>;
  UserActivity_filter: UserActivity_filter;
  UserActivity_orderBy: UserActivity_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  DailyStat: DailyStat;
  DailyStat_filter: DailyStat_filter;
  FeeCollection: FeeCollection;
  FeeCollection_filter: FeeCollection_filter;
  FlashLoan: FlashLoan;
  FlashLoanAmount: FlashLoanAmount;
  FlashLoanAmount_filter: FlashLoanAmount_filter;
  FlashLoan_filter: FlashLoan_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  LastSwapPerBlock: LastSwapPerBlock;
  LastSwapPerBlock_filter: LastSwapPerBlock_filter;
  MarketVolatility: MarketVolatility;
  MarketVolatility_filter: MarketVolatility_filter;
  ObservationCardinality: ObservationCardinality;
  ObservationCardinality_filter: ObservationCardinality_filter;
  PriceImpact: PriceImpact;
  PriceImpact_filter: PriceImpact_filter;
  Query: {};
  RelayActivity: RelayActivity;
  RelayActivity_filter: RelayActivity_filter;
  String: Scalars['String'];
  Subscription: {};
  Swap: Swap;
  SwapAmount: SwapAmount;
  SwapAmount_filter: SwapAmount_filter;
  Swap_filter: Swap_filter;
  TradeSize: TradeSize;
  TradeSize_filter: TradeSize_filter;
  UserActivity: UserActivity;
  UserActivity_filter: UserActivity_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DailyStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DailyStat'] = ResolversParentTypes['DailyStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeeCollectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeeCollection'] = ResolversParentTypes['FeeCollection']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashLoanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlashLoan'] = ResolversParentTypes['FlashLoan']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  paid0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  paid1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFlashLoanSize?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfLoans?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashLoanAmountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlashLoanAmount'] = ResolversParentTypes['FlashLoanAmount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  flashLoan?: Resolver<ResolversTypes['FlashLoan'], ParentType, ContextType>;
  amountSize?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LastSwapPerBlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LastSwapPerBlock'] = ResolversParentTypes['LastSwapPerBlock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastSwapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketVolatilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketVolatility'] = ResolversParentTypes['MarketVolatility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalVolatility?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ObservationCardinalityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ObservationCardinality'] = ResolversParentTypes['ObservationCardinality']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oldCardinality?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  newCardinality?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceImpactResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceImpact'] = ResolversParentTypes['PriceImpact']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  swapEvent?: Resolver<ResolversTypes['Swap'], ParentType, ContextType>;
  priceBefore?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceAfter?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  impact?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  feeCollection?: Resolver<Maybe<ResolversTypes['FeeCollection']>, ParentType, ContextType, RequireFields<QueryfeeCollectionArgs, 'id' | 'subgraphError'>>;
  feeCollections?: Resolver<Array<ResolversTypes['FeeCollection']>, ParentType, ContextType, RequireFields<QueryfeeCollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  lastSwapPerBlock?: Resolver<Maybe<ResolversTypes['LastSwapPerBlock']>, ParentType, ContextType, RequireFields<QuerylastSwapPerBlockArgs, 'id' | 'subgraphError'>>;
  lastSwapPerBlocks?: Resolver<Array<ResolversTypes['LastSwapPerBlock']>, ParentType, ContextType, RequireFields<QuerylastSwapPerBlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceImpact?: Resolver<Maybe<ResolversTypes['PriceImpact']>, ParentType, ContextType, RequireFields<QuerypriceImpactArgs, 'id' | 'subgraphError'>>;
  priceImpacts?: Resolver<Array<ResolversTypes['PriceImpact']>, ParentType, ContextType, RequireFields<QuerypriceImpactsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tradeSize?: Resolver<Maybe<ResolversTypes['TradeSize']>, ParentType, ContextType, RequireFields<QuerytradeSizeArgs, 'id' | 'subgraphError'>>;
  tradeSizes?: Resolver<Array<ResolversTypes['TradeSize']>, ParentType, ContextType, RequireFields<QuerytradeSizesArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoan?: Resolver<Maybe<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<QueryflashLoanArgs, 'id' | 'subgraphError'>>;
  flashLoans?: Resolver<Array<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<QueryflashLoansArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketVolatility?: Resolver<Maybe<ResolversTypes['MarketVolatility']>, ParentType, ContextType, RequireFields<QuerymarketVolatilityArgs, 'id' | 'subgraphError'>>;
  marketVolatilities?: Resolver<Array<ResolversTypes['MarketVolatility']>, ParentType, ContextType, RequireFields<QuerymarketVolatilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapAmount?: Resolver<Maybe<ResolversTypes['SwapAmount']>, ParentType, ContextType, RequireFields<QueryswapAmountArgs, 'id' | 'subgraphError'>>;
  swapAmounts?: Resolver<Array<ResolversTypes['SwapAmount']>, ParentType, ContextType, RequireFields<QueryswapAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoanAmount?: Resolver<Maybe<ResolversTypes['FlashLoanAmount']>, ParentType, ContextType, RequireFields<QueryflashLoanAmountArgs, 'id' | 'subgraphError'>>;
  flashLoanAmounts?: Resolver<Array<ResolversTypes['FlashLoanAmount']>, ParentType, ContextType, RequireFields<QueryflashLoanAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  observationCardinality?: Resolver<Maybe<ResolversTypes['ObservationCardinality']>, ParentType, ContextType, RequireFields<QueryobservationCardinalityArgs, 'id' | 'subgraphError'>>;
  observationCardinalities?: Resolver<Array<ResolversTypes['ObservationCardinality']>, ParentType, ContextType, RequireFields<QueryobservationCardinalitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyStat?: Resolver<Maybe<ResolversTypes['DailyStat']>, ParentType, ContextType, RequireFields<QuerydailyStatArgs, 'id' | 'subgraphError'>>;
  dailyStats?: Resolver<Array<ResolversTypes['DailyStat']>, ParentType, ContextType, RequireFields<QuerydailyStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userActivity?: Resolver<Maybe<ResolversTypes['UserActivity']>, ParentType, ContextType, RequireFields<QueryuserActivityArgs, 'id' | 'subgraphError'>>;
  userActivities?: Resolver<Array<ResolversTypes['UserActivity']>, ParentType, ContextType, RequireFields<QueryuserActivitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  relayActivity?: Resolver<Maybe<ResolversTypes['RelayActivity']>, ParentType, ContextType, RequireFields<QueryrelayActivityArgs, 'id' | 'subgraphError'>>;
  relayActivities?: Resolver<Array<ResolversTypes['RelayActivity']>, ParentType, ContextType, RequireFields<QueryrelayActivitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RelayActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelayActivity'] = ResolversParentTypes['RelayActivity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfSwaps?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  feeCollection?: SubscriptionResolver<Maybe<ResolversTypes['FeeCollection']>, "feeCollection", ParentType, ContextType, RequireFields<SubscriptionfeeCollectionArgs, 'id' | 'subgraphError'>>;
  feeCollections?: SubscriptionResolver<Array<ResolversTypes['FeeCollection']>, "feeCollections", ParentType, ContextType, RequireFields<SubscriptionfeeCollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  lastSwapPerBlock?: SubscriptionResolver<Maybe<ResolversTypes['LastSwapPerBlock']>, "lastSwapPerBlock", ParentType, ContextType, RequireFields<SubscriptionlastSwapPerBlockArgs, 'id' | 'subgraphError'>>;
  lastSwapPerBlocks?: SubscriptionResolver<Array<ResolversTypes['LastSwapPerBlock']>, "lastSwapPerBlocks", ParentType, ContextType, RequireFields<SubscriptionlastSwapPerBlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceImpact?: SubscriptionResolver<Maybe<ResolversTypes['PriceImpact']>, "priceImpact", ParentType, ContextType, RequireFields<SubscriptionpriceImpactArgs, 'id' | 'subgraphError'>>;
  priceImpacts?: SubscriptionResolver<Array<ResolversTypes['PriceImpact']>, "priceImpacts", ParentType, ContextType, RequireFields<SubscriptionpriceImpactsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tradeSize?: SubscriptionResolver<Maybe<ResolversTypes['TradeSize']>, "tradeSize", ParentType, ContextType, RequireFields<SubscriptiontradeSizeArgs, 'id' | 'subgraphError'>>;
  tradeSizes?: SubscriptionResolver<Array<ResolversTypes['TradeSize']>, "tradeSizes", ParentType, ContextType, RequireFields<SubscriptiontradeSizesArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoan?: SubscriptionResolver<Maybe<ResolversTypes['FlashLoan']>, "flashLoan", ParentType, ContextType, RequireFields<SubscriptionflashLoanArgs, 'id' | 'subgraphError'>>;
  flashLoans?: SubscriptionResolver<Array<ResolversTypes['FlashLoan']>, "flashLoans", ParentType, ContextType, RequireFields<SubscriptionflashLoansArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketVolatility?: SubscriptionResolver<Maybe<ResolversTypes['MarketVolatility']>, "marketVolatility", ParentType, ContextType, RequireFields<SubscriptionmarketVolatilityArgs, 'id' | 'subgraphError'>>;
  marketVolatilities?: SubscriptionResolver<Array<ResolversTypes['MarketVolatility']>, "marketVolatilities", ParentType, ContextType, RequireFields<SubscriptionmarketVolatilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapAmount?: SubscriptionResolver<Maybe<ResolversTypes['SwapAmount']>, "swapAmount", ParentType, ContextType, RequireFields<SubscriptionswapAmountArgs, 'id' | 'subgraphError'>>;
  swapAmounts?: SubscriptionResolver<Array<ResolversTypes['SwapAmount']>, "swapAmounts", ParentType, ContextType, RequireFields<SubscriptionswapAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoanAmount?: SubscriptionResolver<Maybe<ResolversTypes['FlashLoanAmount']>, "flashLoanAmount", ParentType, ContextType, RequireFields<SubscriptionflashLoanAmountArgs, 'id' | 'subgraphError'>>;
  flashLoanAmounts?: SubscriptionResolver<Array<ResolversTypes['FlashLoanAmount']>, "flashLoanAmounts", ParentType, ContextType, RequireFields<SubscriptionflashLoanAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  observationCardinality?: SubscriptionResolver<Maybe<ResolversTypes['ObservationCardinality']>, "observationCardinality", ParentType, ContextType, RequireFields<SubscriptionobservationCardinalityArgs, 'id' | 'subgraphError'>>;
  observationCardinalities?: SubscriptionResolver<Array<ResolversTypes['ObservationCardinality']>, "observationCardinalities", ParentType, ContextType, RequireFields<SubscriptionobservationCardinalitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyStat?: SubscriptionResolver<Maybe<ResolversTypes['DailyStat']>, "dailyStat", ParentType, ContextType, RequireFields<SubscriptiondailyStatArgs, 'id' | 'subgraphError'>>;
  dailyStats?: SubscriptionResolver<Array<ResolversTypes['DailyStat']>, "dailyStats", ParentType, ContextType, RequireFields<SubscriptiondailyStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userActivity?: SubscriptionResolver<Maybe<ResolversTypes['UserActivity']>, "userActivity", ParentType, ContextType, RequireFields<SubscriptionuserActivityArgs, 'id' | 'subgraphError'>>;
  userActivities?: SubscriptionResolver<Array<ResolversTypes['UserActivity']>, "userActivities", ParentType, ContextType, RequireFields<SubscriptionuserActivitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  relayActivity?: SubscriptionResolver<Maybe<ResolversTypes['RelayActivity']>, "relayActivity", ParentType, ContextType, RequireFields<SubscriptionrelayActivityArgs, 'id' | 'subgraphError'>>;
  relayActivities?: SubscriptionResolver<Array<ResolversTypes['RelayActivity']>, "relayActivities", ParentType, ContextType, RequireFields<SubscriptionrelayActivitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  lastSwapPerBlock?: Resolver<Maybe<ResolversTypes['LastSwapPerBlock']>, ParentType, ContextType>;
  priceImpact?: Resolver<ResolversTypes['PriceImpact'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapAmountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapAmount'] = ResolversParentTypes['SwapAmount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  swap?: Resolver<ResolversTypes['Swap'], ParentType, ContextType>;
  amountSize?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TradeSizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradeSize'] = ResolversParentTypes['TradeSize']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  swap?: Resolver<ResolversTypes['Swap'], ParentType, ContextType>;
  sizeToken0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeToken1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserActivity'] = ResolversParentTypes['UserActivity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfSwaps?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  DailyStat?: DailyStatResolvers<ContextType>;
  FeeCollection?: FeeCollectionResolvers<ContextType>;
  FlashLoan?: FlashLoanResolvers<ContextType>;
  FlashLoanAmount?: FlashLoanAmountResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  LastSwapPerBlock?: LastSwapPerBlockResolvers<ContextType>;
  MarketVolatility?: MarketVolatilityResolvers<ContextType>;
  ObservationCardinality?: ObservationCardinalityResolvers<ContextType>;
  PriceImpact?: PriceImpactResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RelayActivity?: RelayActivityResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  SwapAmount?: SwapAmountResolvers<ContextType>;
  TradeSize?: TradeSizeResolvers<ContextType>;
  UserActivity?: UserActivityResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = UniswapEthUsdcAnalyzerTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/uniswap-eth-usdc-analyzer/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const uniswapEthUsdcAnalyzerTransforms = [];
const additionalTypeDefs = [] as any[];
const uniswapEthUsdcAnalyzerHandler = new GraphqlHandler({
              name: "uniswap-eth-usdc-analyzer",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/marcusats/uniswap-eth-usdc-analyzer"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswap-eth-usdc-analyzer"),
              logger: logger.child("uniswap-eth-usdc-analyzer"),
              importFn,
            });
sources[0] = {
          name: 'uniswap-eth-usdc-analyzer',
          handler: uniswapEthUsdcAnalyzerHandler,
          transforms: uniswapEthUsdcAnalyzerTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetDailyStatsDocument,
        get rawSDL() {
          return printWithCache(GetDailyStatsDocument);
        },
        location: 'GetDailyStatsDocument.graphql'
      },{
        document: GetMarketVolatilityDocument,
        get rawSDL() {
          return printWithCache(GetMarketVolatilityDocument);
        },
        location: 'GetMarketVolatilityDocument.graphql'
      },{
        document: GetUserActivityDocument,
        get rawSDL() {
          return printWithCache(GetUserActivityDocument);
        },
        location: 'GetUserActivityDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetDailyStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDailyStatsQuery = { dailyStats: Array<Pick<DailyStat, 'id' | 'totalTransactions' | 'totalVolume'>> };

export type GetMarketVolatilityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMarketVolatilityQuery = { marketVolatilities: Array<Pick<MarketVolatility, 'id' | 'totalVolatility'>> };

export type GetUserActivityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserActivityQuery = { userActivities: Array<Pick<UserActivity, 'id' | 'numberOfSwaps' | 'totalVolume'>> };


export const GetDailyStatsDocument = gql`
    query GetDailyStats {
  dailyStats {
    id
    totalTransactions
    totalVolume
  }
}
    ` as unknown as DocumentNode<GetDailyStatsQuery, GetDailyStatsQueryVariables>;
export const GetMarketVolatilityDocument = gql`
    query GetMarketVolatility {
  marketVolatilities(
    orderBy: id
    orderDirection: asc
    skip: 10
    where: {totalVolatility_lt: "0.1"}
  ) {
    id
    totalVolatility
  }
}
    ` as unknown as DocumentNode<GetMarketVolatilityQuery, GetMarketVolatilityQueryVariables>;
export const GetUserActivityDocument = gql`
    query GetUserActivity {
  userActivities(
    skip: 50
    first: 30
    where: {numberOfSwaps_gte: "3", numberOfSwaps_lt: "96"}
  ) {
    id
    numberOfSwaps
    totalVolume
  }
}
    ` as unknown as DocumentNode<GetUserActivityQuery, GetUserActivityQueryVariables>;




export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetDailyStats(variables?: GetDailyStatsQueryVariables, options?: C): Promise<GetDailyStatsQuery> {
      return requester<GetDailyStatsQuery, GetDailyStatsQueryVariables>(GetDailyStatsDocument, variables, options) as Promise<GetDailyStatsQuery>;
    },
    GetMarketVolatility(variables?: GetMarketVolatilityQueryVariables, options?: C): Promise<GetMarketVolatilityQuery> {
      return requester<GetMarketVolatilityQuery, GetMarketVolatilityQueryVariables>(GetMarketVolatilityDocument, variables, options) as Promise<GetMarketVolatilityQuery>;
    },
    GetUserActivity(variables?: GetUserActivityQueryVariables, options?: C): Promise<GetUserActivityQuery> {
      return requester<GetUserActivityQuery, GetUserActivityQueryVariables>(GetUserActivityDocument, variables, options) as Promise<GetUserActivityQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;