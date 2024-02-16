// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace UniswapEthUsdcAnalyzerTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** null **/
  feeCollection: InContextSdkMethod<Query['feeCollection'], QueryfeeCollectionArgs, MeshContext>,
  /** null **/
  feeCollections: InContextSdkMethod<Query['feeCollections'], QueryfeeCollectionsArgs, MeshContext>,
  /** null **/
  lastSwapPerBlock: InContextSdkMethod<Query['lastSwapPerBlock'], QuerylastSwapPerBlockArgs, MeshContext>,
  /** null **/
  lastSwapPerBlocks: InContextSdkMethod<Query['lastSwapPerBlocks'], QuerylastSwapPerBlocksArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
  /** null **/
  priceImpact: InContextSdkMethod<Query['priceImpact'], QuerypriceImpactArgs, MeshContext>,
  /** null **/
  priceImpacts: InContextSdkMethod<Query['priceImpacts'], QuerypriceImpactsArgs, MeshContext>,
  /** null **/
  tradeSize: InContextSdkMethod<Query['tradeSize'], QuerytradeSizeArgs, MeshContext>,
  /** null **/
  tradeSizes: InContextSdkMethod<Query['tradeSizes'], QuerytradeSizesArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<Query['flashLoan'], QueryflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Query['flashLoans'], QueryflashLoansArgs, MeshContext>,
  /** null **/
  marketVolatility: InContextSdkMethod<Query['marketVolatility'], QuerymarketVolatilityArgs, MeshContext>,
  /** null **/
  marketVolatilities: InContextSdkMethod<Query['marketVolatilities'], QuerymarketVolatilitiesArgs, MeshContext>,
  /** null **/
  swapAmount: InContextSdkMethod<Query['swapAmount'], QueryswapAmountArgs, MeshContext>,
  /** null **/
  swapAmounts: InContextSdkMethod<Query['swapAmounts'], QueryswapAmountsArgs, MeshContext>,
  /** null **/
  flashLoanAmount: InContextSdkMethod<Query['flashLoanAmount'], QueryflashLoanAmountArgs, MeshContext>,
  /** null **/
  flashLoanAmounts: InContextSdkMethod<Query['flashLoanAmounts'], QueryflashLoanAmountsArgs, MeshContext>,
  /** null **/
  observationCardinality: InContextSdkMethod<Query['observationCardinality'], QueryobservationCardinalityArgs, MeshContext>,
  /** null **/
  observationCardinalities: InContextSdkMethod<Query['observationCardinalities'], QueryobservationCardinalitiesArgs, MeshContext>,
  /** null **/
  dailyStat: InContextSdkMethod<Query['dailyStat'], QuerydailyStatArgs, MeshContext>,
  /** null **/
  dailyStats: InContextSdkMethod<Query['dailyStats'], QuerydailyStatsArgs, MeshContext>,
  /** null **/
  userActivity: InContextSdkMethod<Query['userActivity'], QueryuserActivityArgs, MeshContext>,
  /** null **/
  userActivities: InContextSdkMethod<Query['userActivities'], QueryuserActivitiesArgs, MeshContext>,
  /** null **/
  relayActivity: InContextSdkMethod<Query['relayActivity'], QueryrelayActivityArgs, MeshContext>,
  /** null **/
  relayActivities: InContextSdkMethod<Query['relayActivities'], QueryrelayActivitiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  feeCollection: InContextSdkMethod<Subscription['feeCollection'], SubscriptionfeeCollectionArgs, MeshContext>,
  /** null **/
  feeCollections: InContextSdkMethod<Subscription['feeCollections'], SubscriptionfeeCollectionsArgs, MeshContext>,
  /** null **/
  lastSwapPerBlock: InContextSdkMethod<Subscription['lastSwapPerBlock'], SubscriptionlastSwapPerBlockArgs, MeshContext>,
  /** null **/
  lastSwapPerBlocks: InContextSdkMethod<Subscription['lastSwapPerBlocks'], SubscriptionlastSwapPerBlocksArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
  /** null **/
  priceImpact: InContextSdkMethod<Subscription['priceImpact'], SubscriptionpriceImpactArgs, MeshContext>,
  /** null **/
  priceImpacts: InContextSdkMethod<Subscription['priceImpacts'], SubscriptionpriceImpactsArgs, MeshContext>,
  /** null **/
  tradeSize: InContextSdkMethod<Subscription['tradeSize'], SubscriptiontradeSizeArgs, MeshContext>,
  /** null **/
  tradeSizes: InContextSdkMethod<Subscription['tradeSizes'], SubscriptiontradeSizesArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<Subscription['flashLoan'], SubscriptionflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Subscription['flashLoans'], SubscriptionflashLoansArgs, MeshContext>,
  /** null **/
  marketVolatility: InContextSdkMethod<Subscription['marketVolatility'], SubscriptionmarketVolatilityArgs, MeshContext>,
  /** null **/
  marketVolatilities: InContextSdkMethod<Subscription['marketVolatilities'], SubscriptionmarketVolatilitiesArgs, MeshContext>,
  /** null **/
  swapAmount: InContextSdkMethod<Subscription['swapAmount'], SubscriptionswapAmountArgs, MeshContext>,
  /** null **/
  swapAmounts: InContextSdkMethod<Subscription['swapAmounts'], SubscriptionswapAmountsArgs, MeshContext>,
  /** null **/
  flashLoanAmount: InContextSdkMethod<Subscription['flashLoanAmount'], SubscriptionflashLoanAmountArgs, MeshContext>,
  /** null **/
  flashLoanAmounts: InContextSdkMethod<Subscription['flashLoanAmounts'], SubscriptionflashLoanAmountsArgs, MeshContext>,
  /** null **/
  observationCardinality: InContextSdkMethod<Subscription['observationCardinality'], SubscriptionobservationCardinalityArgs, MeshContext>,
  /** null **/
  observationCardinalities: InContextSdkMethod<Subscription['observationCardinalities'], SubscriptionobservationCardinalitiesArgs, MeshContext>,
  /** null **/
  dailyStat: InContextSdkMethod<Subscription['dailyStat'], SubscriptiondailyStatArgs, MeshContext>,
  /** null **/
  dailyStats: InContextSdkMethod<Subscription['dailyStats'], SubscriptiondailyStatsArgs, MeshContext>,
  /** null **/
  userActivity: InContextSdkMethod<Subscription['userActivity'], SubscriptionuserActivityArgs, MeshContext>,
  /** null **/
  userActivities: InContextSdkMethod<Subscription['userActivities'], SubscriptionuserActivitiesArgs, MeshContext>,
  /** null **/
  relayActivity: InContextSdkMethod<Subscription['relayActivity'], SubscriptionrelayActivityArgs, MeshContext>,
  /** null **/
  relayActivities: InContextSdkMethod<Subscription['relayActivities'], SubscriptionrelayActivitiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["uniswap-eth-usdc-analyzer"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
