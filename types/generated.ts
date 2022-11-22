export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bpchar: any
  float8: any
  timestamp: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "booking_order_options" */
export interface BookingOrderOptions {
  __typename?: 'booking_order_options'
  /** An object relationship */
  booking?: Maybe<Bookings>
  booking_id?: Maybe<Scalars['Int']>
  booking_order_option_id: Scalars['Int']
  /** An object relationship */
  order_option?: Maybe<OrderOptions>
  order_option_id?: Maybe<Scalars['Int']>
}

/** aggregated selection of "booking_order_options" */
export interface BookingOrderOptionsAggregate {
  __typename?: 'booking_order_options_aggregate'
  aggregate?: Maybe<BookingOrderOptionsAggregateFields>
  nodes: Array<BookingOrderOptions>
}

export interface BookingOrderOptionsAggregateBoolExp {
  count?: InputMaybe<BookingOrderOptionsAggregateBoolExpCount>
}

export interface BookingOrderOptionsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingOrderOptionsBoolExp>
  predicate: IntComparisonExp
}

/** aggregate fields of "booking_order_options" */
export interface BookingOrderOptionsAggregateFields {
  __typename?: 'booking_order_options_aggregate_fields'
  avg?: Maybe<BookingOrderOptionsAvgFields>
  count: Scalars['Int']
  max?: Maybe<BookingOrderOptionsMaxFields>
  min?: Maybe<BookingOrderOptionsMinFields>
  stddev?: Maybe<BookingOrderOptionsStddevFields>
  stddev_pop?: Maybe<BookingOrderOptionsStddevPopFields>
  stddev_samp?: Maybe<BookingOrderOptionsStddevSampFields>
  sum?: Maybe<BookingOrderOptionsSumFields>
  var_pop?: Maybe<BookingOrderOptionsVarPopFields>
  var_samp?: Maybe<BookingOrderOptionsVarSampFields>
  variance?: Maybe<BookingOrderOptionsVarianceFields>
}

/** aggregate fields of "booking_order_options" */
export interface BookingOrderOptionsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "booking_order_options" */
export interface BookingOrderOptionsAggregateOrderBy {
  avg?: InputMaybe<BookingOrderOptionsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<BookingOrderOptionsMaxOrderBy>
  min?: InputMaybe<BookingOrderOptionsMinOrderBy>
  stddev?: InputMaybe<BookingOrderOptionsStddevOrderBy>
  stddev_pop?: InputMaybe<BookingOrderOptionsStddevPopOrderBy>
  stddev_samp?: InputMaybe<BookingOrderOptionsStddevSampOrderBy>
  sum?: InputMaybe<BookingOrderOptionsSumOrderBy>
  var_pop?: InputMaybe<BookingOrderOptionsVarPopOrderBy>
  var_samp?: InputMaybe<BookingOrderOptionsVarSampOrderBy>
  variance?: InputMaybe<BookingOrderOptionsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "booking_order_options" */
export interface BookingOrderOptionsArrRelInsertInput {
  data: Array<BookingOrderOptionsInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<BookingOrderOptionsOnConflict>
}

/** aggregate avg on columns */
export interface BookingOrderOptionsAvgFields {
  __typename?: 'booking_order_options_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "booking_order_options" */
export interface BookingOrderOptionsAvgOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "booking_order_options". All fields are combined with a logical 'AND'. */
export interface BookingOrderOptionsBoolExp {
  _and?: InputMaybe<Array<BookingOrderOptionsBoolExp>>
  _not?: InputMaybe<BookingOrderOptionsBoolExp>
  _or?: InputMaybe<Array<BookingOrderOptionsBoolExp>>
  booking?: InputMaybe<BookingsBoolExp>
  booking_id?: InputMaybe<IntComparisonExp>
  booking_order_option_id?: InputMaybe<IntComparisonExp>
  order_option?: InputMaybe<OrderOptionsBoolExp>
  order_option_id?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "booking_order_options" */
export const enum BookingOrderOptionsConstraint {
  /** unique or primary key constraint on columns "booking_order_option_id" */
  BookingOrderOptionsPkey = 'booking_order_options_pkey'
}

/** input type for incrementing numeric columns in table "booking_order_options" */
export interface BookingOrderOptionsIncInput {
  booking_id?: InputMaybe<Scalars['Int']>
  booking_order_option_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "booking_order_options" */
export interface BookingOrderOptionsInsertInput {
  booking?: InputMaybe<BookingsObjRelInsertInput>
  booking_id?: InputMaybe<Scalars['Int']>
  booking_order_option_id?: InputMaybe<Scalars['Int']>
  order_option?: InputMaybe<OrderOptionsObjRelInsertInput>
  order_option_id?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export interface BookingOrderOptionsMaxFields {
  __typename?: 'booking_order_options_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  booking_order_option_id?: Maybe<Scalars['Int']>
  order_option_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "booking_order_options" */
export interface BookingOrderOptionsMaxOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface BookingOrderOptionsMinFields {
  __typename?: 'booking_order_options_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  booking_order_option_id?: Maybe<Scalars['Int']>
  order_option_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "booking_order_options" */
export interface BookingOrderOptionsMinOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "booking_order_options" */
export interface BookingOrderOptionsMutationResponse {
  __typename?: 'booking_order_options_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<BookingOrderOptions>
}

/** on_conflict condition type for table "booking_order_options" */
export interface BookingOrderOptionsOnConflict {
  constraint: BookingOrderOptionsConstraint
  update_columns?: Array<BookingOrderOptionsUpdateColumn>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

/** Ordering options when selecting data from "booking_order_options". */
export interface BookingOrderOptionsOrderBy {
  booking?: InputMaybe<BookingsOrderBy>
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option?: InputMaybe<OrderOptionsOrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** primary key columns input for table: booking_order_options */
export interface BookingOrderOptionsPkColumnsInput {
  booking_order_option_id: Scalars['Int']
}

/** select columns of table "booking_order_options" */
export const enum BookingOrderOptionsSelectColumn {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingOrderOptionId = 'booking_order_option_id',
  /** column name */
  OrderOptionId = 'order_option_id'
}

/** input type for updating data in table "booking_order_options" */
export interface BookingOrderOptionsSetInput {
  booking_id?: InputMaybe<Scalars['Int']>
  booking_order_option_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export interface BookingOrderOptionsStddevFields {
  __typename?: 'booking_order_options_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "booking_order_options" */
export interface BookingOrderOptionsStddevOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface BookingOrderOptionsStddevPopFields {
  __typename?: 'booking_order_options_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "booking_order_options" */
export interface BookingOrderOptionsStddevPopOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface BookingOrderOptionsStddevSampFields {
  __typename?: 'booking_order_options_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "booking_order_options" */
export interface BookingOrderOptionsStddevSampOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "booking_order_options" */
export interface BookingOrderOptionsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: BookingOrderOptionsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface BookingOrderOptionsStreamCursorValueInput {
  booking_id?: InputMaybe<Scalars['Int']>
  booking_order_option_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export interface BookingOrderOptionsSumFields {
  __typename?: 'booking_order_options_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  booking_order_option_id?: Maybe<Scalars['Int']>
  order_option_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "booking_order_options" */
export interface BookingOrderOptionsSumOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** update columns of table "booking_order_options" */
export const enum BookingOrderOptionsUpdateColumn {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingOrderOptionId = 'booking_order_option_id',
  /** column name */
  OrderOptionId = 'order_option_id'
}

export interface BookingOrderOptionsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BookingOrderOptionsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BookingOrderOptionsSetInput>
  where: BookingOrderOptionsBoolExp
}

/** aggregate var_pop on columns */
export interface BookingOrderOptionsVarPopFields {
  __typename?: 'booking_order_options_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "booking_order_options" */
export interface BookingOrderOptionsVarPopOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface BookingOrderOptionsVarSampFields {
  __typename?: 'booking_order_options_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "booking_order_options" */
export interface BookingOrderOptionsVarSampOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface BookingOrderOptionsVarianceFields {
  __typename?: 'booking_order_options_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_order_option_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "booking_order_options" */
export interface BookingOrderOptionsVarianceOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_option_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
}

/** columns and relationships of "bookings" */
export interface Bookings {
  __typename?: 'bookings'
  booking_id: Scalars['Int']
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate
  created_at: Scalars['timestamp']
  /** An object relationship */
  food: Food
  food_id: Scalars['Int']
  /** An object relationship */
  order?: Maybe<Orders>
  order_id?: Maybe<Scalars['Int']>
  total_price?: Maybe<Scalars['float8']>
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
}

/** columns and relationships of "bookings" */
export interface BookingsBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

/** columns and relationships of "bookings" */
export interface BookingsBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

/** aggregated selection of "bookings" */
export interface BookingsAggregate {
  __typename?: 'bookings_aggregate'
  aggregate?: Maybe<BookingsAggregateFields>
  nodes: Array<Bookings>
}

export interface BookingsAggregateBoolExp {
  avg?: InputMaybe<BookingsAggregateBoolExpAvg>
  corr?: InputMaybe<BookingsAggregateBoolExpCorr>
  count?: InputMaybe<BookingsAggregateBoolExpCount>
  covar_samp?: InputMaybe<BookingsAggregateBoolExpCovarSamp>
  max?: InputMaybe<BookingsAggregateBoolExpMax>
  min?: InputMaybe<BookingsAggregateBoolExpMin>
  stddev_samp?: InputMaybe<BookingsAggregateBoolExpStddevSamp>
  sum?: InputMaybe<BookingsAggregateBoolExpSum>
  var_samp?: InputMaybe<BookingsAggregateBoolExpVarSamp>
}

export interface BookingsAggregateBoolExpAvg {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpAvgArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpCorr {
  arguments: BookingsAggregateBoolExpCorrArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpCorrArguments {
  X: BookingsSelectColumnBookingsAggregateBoolExpCorrArgumentsColumns
  Y: BookingsSelectColumnBookingsAggregateBoolExpCorrArgumentsColumns
}

export interface BookingsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<BookingsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: IntComparisonExp
}

export interface BookingsAggregateBoolExpCovarSamp {
  arguments: BookingsAggregateBoolExpCovarSampArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpCovarSampArguments {
  X: BookingsSelectColumnBookingsAggregateBoolExpCovarSampArgumentsColumns
  Y: BookingsSelectColumnBookingsAggregateBoolExpCovarSampArgumentsColumns
}

export interface BookingsAggregateBoolExpMax {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpMaxArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpMin {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpMinArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpStddevSamp {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpStddevSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpSum {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpSumArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

export interface BookingsAggregateBoolExpVarSamp {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpVarSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<BookingsBoolExp>
  predicate: Float8ComparisonExp
}

/** aggregate fields of "bookings" */
export interface BookingsAggregateFields {
  __typename?: 'bookings_aggregate_fields'
  avg?: Maybe<BookingsAvgFields>
  count: Scalars['Int']
  max?: Maybe<BookingsMaxFields>
  min?: Maybe<BookingsMinFields>
  stddev?: Maybe<BookingsStddevFields>
  stddev_pop?: Maybe<BookingsStddevPopFields>
  stddev_samp?: Maybe<BookingsStddevSampFields>
  sum?: Maybe<BookingsSumFields>
  var_pop?: Maybe<BookingsVarPopFields>
  var_samp?: Maybe<BookingsVarSampFields>
  variance?: Maybe<BookingsVarianceFields>
}

/** aggregate fields of "bookings" */
export interface BookingsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BookingsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings" */
export interface BookingsAggregateOrderBy {
  avg?: InputMaybe<BookingsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<BookingsMaxOrderBy>
  min?: InputMaybe<BookingsMinOrderBy>
  stddev?: InputMaybe<BookingsStddevOrderBy>
  stddev_pop?: InputMaybe<BookingsStddevPopOrderBy>
  stddev_samp?: InputMaybe<BookingsStddevSampOrderBy>
  sum?: InputMaybe<BookingsSumOrderBy>
  var_pop?: InputMaybe<BookingsVarPopOrderBy>
  var_samp?: InputMaybe<BookingsVarSampOrderBy>
  variance?: InputMaybe<BookingsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "bookings" */
export interface BookingsArrRelInsertInput {
  data: Array<BookingsInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<BookingsOnConflict>
}

/** aggregate avg on columns */
export interface BookingsAvgFields {
  __typename?: 'bookings_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings" */
export interface BookingsAvgOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "bookings". All fields are combined with a logical 'AND'. */
export interface BookingsBoolExp {
  _and?: InputMaybe<Array<BookingsBoolExp>>
  _not?: InputMaybe<BookingsBoolExp>
  _or?: InputMaybe<Array<BookingsBoolExp>>
  booking_id?: InputMaybe<IntComparisonExp>
  booking_order_options?: InputMaybe<BookingOrderOptionsBoolExp>
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateBoolExp>
  created_at?: InputMaybe<TimestampComparisonExp>
  food?: InputMaybe<FoodBoolExp>
  food_id?: InputMaybe<IntComparisonExp>
  order?: InputMaybe<OrdersBoolExp>
  order_id?: InputMaybe<IntComparisonExp>
  total_price?: InputMaybe<Float8ComparisonExp>
  updated_at?: InputMaybe<TimestampComparisonExp>
  user?: InputMaybe<UsersBoolExp>
  user_id?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "bookings" */
export const enum BookingsConstraint {
  /** unique or primary key constraint on columns "booking_id" */
  BookingsPkey = 'bookings_pkey'
}

/** input type for incrementing numeric columns in table "bookings" */
export interface BookingsIncInput {
  booking_id?: InputMaybe<Scalars['Int']>
  food_id?: InputMaybe<Scalars['Int']>
  order_id?: InputMaybe<Scalars['Int']>
  total_price?: InputMaybe<Scalars['float8']>
  user_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "bookings" */
export interface BookingsInsertInput {
  booking_id?: InputMaybe<Scalars['Int']>
  booking_order_options?: InputMaybe<BookingOrderOptionsArrRelInsertInput>
  created_at?: InputMaybe<Scalars['timestamp']>
  food?: InputMaybe<FoodObjRelInsertInput>
  food_id?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<OrdersObjRelInsertInput>
  order_id?: InputMaybe<Scalars['Int']>
  total_price?: InputMaybe<Scalars['float8']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user?: InputMaybe<UsersObjRelInsertInput>
  user_id?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export interface BookingsMaxFields {
  __typename?: 'bookings_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamp']>
  food_id?: Maybe<Scalars['Int']>
  order_id?: Maybe<Scalars['Int']>
  total_price?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "bookings" */
export interface BookingsMaxOrderBy {
  booking_id?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface BookingsMinFields {
  __typename?: 'bookings_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamp']>
  food_id?: Maybe<Scalars['Int']>
  order_id?: Maybe<Scalars['Int']>
  total_price?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "bookings" */
export interface BookingsMinOrderBy {
  booking_id?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "bookings" */
export interface BookingsMutationResponse {
  __typename?: 'bookings_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Bookings>
}

/** input type for inserting object relation for remote table "bookings" */
export interface BookingsObjRelInsertInput {
  data: BookingsInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<BookingsOnConflict>
}

/** on_conflict condition type for table "bookings" */
export interface BookingsOnConflict {
  constraint: BookingsConstraint
  update_columns?: Array<BookingsUpdateColumn>
  where?: InputMaybe<BookingsBoolExp>
}

/** Ordering options when selecting data from "bookings". */
export interface BookingsOrderBy {
  booking_id?: InputMaybe<OrderBy>
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateOrderBy>
  created_at?: InputMaybe<OrderBy>
  food?: InputMaybe<FoodOrderBy>
  food_id?: InputMaybe<OrderBy>
  order?: InputMaybe<OrdersOrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
  user?: InputMaybe<UsersOrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** primary key columns input for table: bookings */
export interface BookingsPkColumnsInput {
  booking_id: Scalars['Int']
}

/** select columns of table "bookings" */
export const enum BookingsSelectColumn {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FoodId = 'food_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "bookings_aggregate_bool_exp_avg_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_corr_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_max_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_min_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpMinArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_sum_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpSumArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_var_samp_arguments_columns" columns of table "bookings" */
export const enum BookingsSelectColumnBookingsAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** input type for updating data in table "bookings" */
export interface BookingsSetInput {
  booking_id?: InputMaybe<Scalars['Int']>
  created_at?: InputMaybe<Scalars['timestamp']>
  food_id?: InputMaybe<Scalars['Int']>
  order_id?: InputMaybe<Scalars['Int']>
  total_price?: InputMaybe<Scalars['float8']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user_id?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export interface BookingsStddevFields {
  __typename?: 'bookings_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings" */
export interface BookingsStddevOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface BookingsStddevPopFields {
  __typename?: 'bookings_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings" */
export interface BookingsStddevPopOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface BookingsStddevSampFields {
  __typename?: 'bookings_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings" */
export interface BookingsStddevSampOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "bookings" */
export interface BookingsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: BookingsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface BookingsStreamCursorValueInput {
  booking_id?: InputMaybe<Scalars['Int']>
  created_at?: InputMaybe<Scalars['timestamp']>
  food_id?: InputMaybe<Scalars['Int']>
  order_id?: InputMaybe<Scalars['Int']>
  total_price?: InputMaybe<Scalars['float8']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user_id?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export interface BookingsSumFields {
  __typename?: 'bookings_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  food_id?: Maybe<Scalars['Int']>
  order_id?: Maybe<Scalars['Int']>
  total_price?: Maybe<Scalars['float8']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "bookings" */
export interface BookingsSumOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** update columns of table "bookings" */
export const enum BookingsUpdateColumn {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FoodId = 'food_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export interface BookingsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BookingsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BookingsSetInput>
  where: BookingsBoolExp
}

/** aggregate var_pop on columns */
export interface BookingsVarPopFields {
  __typename?: 'bookings_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings" */
export interface BookingsVarPopOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface BookingsVarSampFields {
  __typename?: 'bookings_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings" */
export interface BookingsVarSampOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface BookingsVarianceFields {
  __typename?: 'bookings_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings" */
export interface BookingsVarianceOrderBy {
  booking_id?: InputMaybe<OrderBy>
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export interface BpcharComparisonExp {
  _eq?: InputMaybe<Scalars['bpchar']>
  _gt?: InputMaybe<Scalars['bpchar']>
  _gte?: InputMaybe<Scalars['bpchar']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>
  _in?: InputMaybe<Array<Scalars['bpchar']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>
  _lt?: InputMaybe<Scalars['bpchar']>
  _lte?: InputMaybe<Scalars['bpchar']>
  _neq?: InputMaybe<Scalars['bpchar']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>
  _nin?: InputMaybe<Array<Scalars['bpchar']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>
}

/** columns and relationships of "configs" */
export interface Configs {
  __typename?: 'configs'
  config_id: Scalars['Int']
  room_capacity?: Maybe<Scalars['Int']>
  room_duration?: Maybe<Scalars['Int']>
  stage?: Maybe<Scalars['bpchar']>
}

/** aggregated selection of "configs" */
export interface ConfigsAggregate {
  __typename?: 'configs_aggregate'
  aggregate?: Maybe<ConfigsAggregateFields>
  nodes: Array<Configs>
}

/** aggregate fields of "configs" */
export interface ConfigsAggregateFields {
  __typename?: 'configs_aggregate_fields'
  avg?: Maybe<ConfigsAvgFields>
  count: Scalars['Int']
  max?: Maybe<ConfigsMaxFields>
  min?: Maybe<ConfigsMinFields>
  stddev?: Maybe<ConfigsStddevFields>
  stddev_pop?: Maybe<ConfigsStddevPopFields>
  stddev_samp?: Maybe<ConfigsStddevSampFields>
  sum?: Maybe<ConfigsSumFields>
  var_pop?: Maybe<ConfigsVarPopFields>
  var_samp?: Maybe<ConfigsVarSampFields>
  variance?: Maybe<ConfigsVarianceFields>
}

/** aggregate fields of "configs" */
export interface ConfigsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<ConfigsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface ConfigsAvgFields {
  __typename?: 'configs_avg_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "configs". All fields are combined with a logical 'AND'. */
export interface ConfigsBoolExp {
  _and?: InputMaybe<Array<ConfigsBoolExp>>
  _not?: InputMaybe<ConfigsBoolExp>
  _or?: InputMaybe<Array<ConfigsBoolExp>>
  config_id?: InputMaybe<IntComparisonExp>
  room_capacity?: InputMaybe<IntComparisonExp>
  room_duration?: InputMaybe<IntComparisonExp>
  stage?: InputMaybe<BpcharComparisonExp>
}

/** unique or primary key constraints on table "configs" */
export const enum ConfigsConstraint {
  /** unique or primary key constraint on columns "config_id" */
  ConfigsPkey = 'configs_pkey'
}

/** input type for incrementing numeric columns in table "configs" */
export interface ConfigsIncInput {
  config_id?: InputMaybe<Scalars['Int']>
  room_capacity?: InputMaybe<Scalars['Int']>
  room_duration?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "configs" */
export interface ConfigsInsertInput {
  config_id?: InputMaybe<Scalars['Int']>
  room_capacity?: InputMaybe<Scalars['Int']>
  room_duration?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Scalars['bpchar']>
}

/** aggregate max on columns */
export interface ConfigsMaxFields {
  __typename?: 'configs_max_fields'
  config_id?: Maybe<Scalars['Int']>
  room_capacity?: Maybe<Scalars['Int']>
  room_duration?: Maybe<Scalars['Int']>
  stage?: Maybe<Scalars['bpchar']>
}

/** aggregate min on columns */
export interface ConfigsMinFields {
  __typename?: 'configs_min_fields'
  config_id?: Maybe<Scalars['Int']>
  room_capacity?: Maybe<Scalars['Int']>
  room_duration?: Maybe<Scalars['Int']>
  stage?: Maybe<Scalars['bpchar']>
}

/** response of any mutation on the table "configs" */
export interface ConfigsMutationResponse {
  __typename?: 'configs_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Configs>
}

/** on_conflict condition type for table "configs" */
export interface ConfigsOnConflict {
  constraint: ConfigsConstraint
  update_columns?: Array<ConfigsUpdateColumn>
  where?: InputMaybe<ConfigsBoolExp>
}

/** Ordering options when selecting data from "configs". */
export interface ConfigsOrderBy {
  config_id?: InputMaybe<OrderBy>
  room_capacity?: InputMaybe<OrderBy>
  room_duration?: InputMaybe<OrderBy>
  stage?: InputMaybe<OrderBy>
}

/** primary key columns input for table: configs */
export interface ConfigsPkColumnsInput {
  config_id: Scalars['Int']
}

/** select columns of table "configs" */
export const enum ConfigsSelectColumn {
  /** column name */
  ConfigId = 'config_id',
  /** column name */
  RoomCapacity = 'room_capacity',
  /** column name */
  RoomDuration = 'room_duration',
  /** column name */
  Stage = 'stage'
}

/** input type for updating data in table "configs" */
export interface ConfigsSetInput {
  config_id?: InputMaybe<Scalars['Int']>
  room_capacity?: InputMaybe<Scalars['Int']>
  room_duration?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Scalars['bpchar']>
}

/** aggregate stddev on columns */
export interface ConfigsStddevFields {
  __typename?: 'configs_stddev_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface ConfigsStddevPopFields {
  __typename?: 'configs_stddev_pop_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface ConfigsStddevSampFields {
  __typename?: 'configs_stddev_samp_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "configs" */
export interface ConfigsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: ConfigsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface ConfigsStreamCursorValueInput {
  config_id?: InputMaybe<Scalars['Int']>
  room_capacity?: InputMaybe<Scalars['Int']>
  room_duration?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Scalars['bpchar']>
}

/** aggregate sum on columns */
export interface ConfigsSumFields {
  __typename?: 'configs_sum_fields'
  config_id?: Maybe<Scalars['Int']>
  room_capacity?: Maybe<Scalars['Int']>
  room_duration?: Maybe<Scalars['Int']>
}

/** update columns of table "configs" */
export const enum ConfigsUpdateColumn {
  /** column name */
  ConfigId = 'config_id',
  /** column name */
  RoomCapacity = 'room_capacity',
  /** column name */
  RoomDuration = 'room_duration',
  /** column name */
  Stage = 'stage'
}

export interface ConfigsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ConfigsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ConfigsSetInput>
  where: ConfigsBoolExp
}

/** aggregate var_pop on columns */
export interface ConfigsVarPopFields {
  __typename?: 'configs_var_pop_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface ConfigsVarSampFields {
  __typename?: 'configs_var_samp_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface ConfigsVarianceFields {
  __typename?: 'configs_variance_fields'
  config_id?: Maybe<Scalars['Float']>
  room_capacity?: Maybe<Scalars['Float']>
  room_duration?: Maybe<Scalars['Float']>
}

/** ordering argument of a cursor */
export const enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export interface Float8ComparisonExp {
  _eq?: InputMaybe<Scalars['float8']>
  _gt?: InputMaybe<Scalars['float8']>
  _gte?: InputMaybe<Scalars['float8']>
  _in?: InputMaybe<Array<Scalars['float8']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['float8']>
  _lte?: InputMaybe<Scalars['float8']>
  _neq?: InputMaybe<Scalars['float8']>
  _nin?: InputMaybe<Array<Scalars['float8']>>
}

/** columns and relationships of "food" */
export interface Food {
  __typename?: 'food'
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate
  food_id: Scalars['Int']
  name: Scalars['String']
  /** An object relationship */
  order?: Maybe<Orders>
  order_id?: Maybe<Scalars['Int']>
  price: Scalars['float8']
  thumbnail?: Maybe<Scalars['String']>
}

/** columns and relationships of "food" */
export interface FoodBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

/** columns and relationships of "food" */
export interface FoodBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

/** aggregated selection of "food" */
export interface FoodAggregate {
  __typename?: 'food_aggregate'
  aggregate?: Maybe<FoodAggregateFields>
  nodes: Array<Food>
}

export interface FoodAggregateBoolExp {
  avg?: InputMaybe<FoodAggregateBoolExpAvg>
  corr?: InputMaybe<FoodAggregateBoolExpCorr>
  count?: InputMaybe<FoodAggregateBoolExpCount>
  covar_samp?: InputMaybe<FoodAggregateBoolExpCovarSamp>
  max?: InputMaybe<FoodAggregateBoolExpMax>
  min?: InputMaybe<FoodAggregateBoolExpMin>
  stddev_samp?: InputMaybe<FoodAggregateBoolExpStddevSamp>
  sum?: InputMaybe<FoodAggregateBoolExpSum>
  var_samp?: InputMaybe<FoodAggregateBoolExpVarSamp>
}

export interface FoodAggregateBoolExpAvg {
  arguments: FoodSelectColumnFoodAggregateBoolExpAvgArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpCorr {
  arguments: FoodAggregateBoolExpCorrArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpCorrArguments {
  X: FoodSelectColumnFoodAggregateBoolExpCorrArgumentsColumns
  Y: FoodSelectColumnFoodAggregateBoolExpCorrArgumentsColumns
}

export interface FoodAggregateBoolExpCount {
  arguments?: InputMaybe<Array<FoodSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: IntComparisonExp
}

export interface FoodAggregateBoolExpCovarSamp {
  arguments: FoodAggregateBoolExpCovarSampArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpCovarSampArguments {
  X: FoodSelectColumnFoodAggregateBoolExpCovarSampArgumentsColumns
  Y: FoodSelectColumnFoodAggregateBoolExpCovarSampArgumentsColumns
}

export interface FoodAggregateBoolExpMax {
  arguments: FoodSelectColumnFoodAggregateBoolExpMaxArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpMin {
  arguments: FoodSelectColumnFoodAggregateBoolExpMinArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpStddevSamp {
  arguments: FoodSelectColumnFoodAggregateBoolExpStddevSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpSum {
  arguments: FoodSelectColumnFoodAggregateBoolExpSumArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

export interface FoodAggregateBoolExpVarSamp {
  arguments: FoodSelectColumnFoodAggregateBoolExpVarSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<FoodBoolExp>
  predicate: Float8ComparisonExp
}

/** aggregate fields of "food" */
export interface FoodAggregateFields {
  __typename?: 'food_aggregate_fields'
  avg?: Maybe<FoodAvgFields>
  count: Scalars['Int']
  max?: Maybe<FoodMaxFields>
  min?: Maybe<FoodMinFields>
  stddev?: Maybe<FoodStddevFields>
  stddev_pop?: Maybe<FoodStddevPopFields>
  stddev_samp?: Maybe<FoodStddevSampFields>
  sum?: Maybe<FoodSumFields>
  var_pop?: Maybe<FoodVarPopFields>
  var_samp?: Maybe<FoodVarSampFields>
  variance?: Maybe<FoodVarianceFields>
}

/** aggregate fields of "food" */
export interface FoodAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<FoodSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "food" */
export interface FoodAggregateOrderBy {
  avg?: InputMaybe<FoodAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<FoodMaxOrderBy>
  min?: InputMaybe<FoodMinOrderBy>
  stddev?: InputMaybe<FoodStddevOrderBy>
  stddev_pop?: InputMaybe<FoodStddevPopOrderBy>
  stddev_samp?: InputMaybe<FoodStddevSampOrderBy>
  sum?: InputMaybe<FoodSumOrderBy>
  var_pop?: InputMaybe<FoodVarPopOrderBy>
  var_samp?: InputMaybe<FoodVarSampOrderBy>
  variance?: InputMaybe<FoodVarianceOrderBy>
}

/** input type for inserting array relation for remote table "food" */
export interface FoodArrRelInsertInput {
  data: Array<FoodInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<FoodOnConflict>
}

/** aggregate avg on columns */
export interface FoodAvgFields {
  __typename?: 'food_avg_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "food" */
export interface FoodAvgOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "food". All fields are combined with a logical 'AND'. */
export interface FoodBoolExp {
  _and?: InputMaybe<Array<FoodBoolExp>>
  _not?: InputMaybe<FoodBoolExp>
  _or?: InputMaybe<Array<FoodBoolExp>>
  bookings?: InputMaybe<BookingsBoolExp>
  bookings_aggregate?: InputMaybe<BookingsAggregateBoolExp>
  food_id?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  order?: InputMaybe<OrdersBoolExp>
  order_id?: InputMaybe<IntComparisonExp>
  price?: InputMaybe<Float8ComparisonExp>
  thumbnail?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "food" */
export const enum FoodConstraint {
  /** unique or primary key constraint on columns "food_id" */
  FoodPkey = 'food_pkey'
}

/** input type for incrementing numeric columns in table "food" */
export interface FoodIncInput {
  food_id?: InputMaybe<Scalars['Int']>
  order_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
}

/** input type for inserting data into table "food" */
export interface FoodInsertInput {
  bookings?: InputMaybe<BookingsArrRelInsertInput>
  food_id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<OrdersObjRelInsertInput>
  order_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
  thumbnail?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface FoodMaxFields {
  __typename?: 'food_max_fields'
  food_id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  order_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['float8']>
  thumbnail?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "food" */
export interface FoodMaxOrderBy {
  food_id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  thumbnail?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface FoodMinFields {
  __typename?: 'food_min_fields'
  food_id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  order_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['float8']>
  thumbnail?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "food" */
export interface FoodMinOrderBy {
  food_id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  thumbnail?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "food" */
export interface FoodMutationResponse {
  __typename?: 'food_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Food>
}

/** input type for inserting object relation for remote table "food" */
export interface FoodObjRelInsertInput {
  data: FoodInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<FoodOnConflict>
}

/** on_conflict condition type for table "food" */
export interface FoodOnConflict {
  constraint: FoodConstraint
  update_columns?: Array<FoodUpdateColumn>
  where?: InputMaybe<FoodBoolExp>
}

/** Ordering options when selecting data from "food". */
export interface FoodOrderBy {
  bookings_aggregate?: InputMaybe<BookingsAggregateOrderBy>
  food_id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  order?: InputMaybe<OrdersOrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  thumbnail?: InputMaybe<OrderBy>
}

/** primary key columns input for table: food */
export interface FoodPkColumnsInput {
  food_id: Scalars['Int']
}

/** select columns of table "food" */
export const enum FoodSelectColumn {
  /** column name */
  FoodId = 'food_id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  Thumbnail = 'thumbnail'
}

/** select "food_aggregate_bool_exp_avg_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_corr_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_max_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_min_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_sum_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_var_samp_arguments_columns" columns of table "food" */
export const enum FoodSelectColumnFoodAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "food" */
export interface FoodSetInput {
  food_id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  order_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
  thumbnail?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface FoodStddevFields {
  __typename?: 'food_stddev_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "food" */
export interface FoodStddevOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface FoodStddevPopFields {
  __typename?: 'food_stddev_pop_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "food" */
export interface FoodStddevPopOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface FoodStddevSampFields {
  __typename?: 'food_stddev_samp_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "food" */
export interface FoodStddevSampOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "food" */
export interface FoodStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: FoodStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface FoodStreamCursorValueInput {
  food_id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  order_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
  thumbnail?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export interface FoodSumFields {
  __typename?: 'food_sum_fields'
  food_id?: Maybe<Scalars['Int']>
  order_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "food" */
export interface FoodSumOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** update columns of table "food" */
export const enum FoodUpdateColumn {
  /** column name */
  FoodId = 'food_id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  Thumbnail = 'thumbnail'
}

export interface FoodUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FoodIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FoodSetInput>
  where: FoodBoolExp
}

/** aggregate var_pop on columns */
export interface FoodVarPopFields {
  __typename?: 'food_var_pop_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "food" */
export interface FoodVarPopOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface FoodVarSampFields {
  __typename?: 'food_var_samp_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "food" */
export interface FoodVarSampOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface FoodVarianceFields {
  __typename?: 'food_variance_fields'
  food_id?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "food" */
export interface FoodVarianceOrderBy {
  food_id?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** mutation root */
export interface MutationRoot {
  __typename?: 'mutation_root'
  /** delete data from the table: "booking_order_options" */
  delete_booking_order_options?: Maybe<BookingOrderOptionsMutationResponse>
  /** delete single row from the table: "booking_order_options" */
  delete_booking_order_options_by_pk?: Maybe<BookingOrderOptions>
  /** delete data from the table: "bookings" */
  delete_bookings?: Maybe<BookingsMutationResponse>
  /** delete single row from the table: "bookings" */
  delete_bookings_by_pk?: Maybe<Bookings>
  /** delete data from the table: "configs" */
  delete_configs?: Maybe<ConfigsMutationResponse>
  /** delete single row from the table: "configs" */
  delete_configs_by_pk?: Maybe<Configs>
  /** delete data from the table: "food" */
  delete_food?: Maybe<FoodMutationResponse>
  /** delete single row from the table: "food" */
  delete_food_by_pk?: Maybe<Food>
  /** delete data from the table: "order_options" */
  delete_order_options?: Maybe<OrderOptionsMutationResponse>
  /** delete single row from the table: "order_options" */
  delete_order_options_by_pk?: Maybe<OrderOptions>
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<OrdersMutationResponse>
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<RoomsMutationResponse>
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>
  /** delete data from the table: "threads" */
  delete_threads?: Maybe<ThreadsMutationResponse>
  /** delete single row from the table: "threads" */
  delete_threads_by_pk?: Maybe<Threads>
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** delete data from the table: "users_rooms" */
  delete_users_rooms?: Maybe<UsersRoomsMutationResponse>
  /** delete single row from the table: "users_rooms" */
  delete_users_rooms_by_pk?: Maybe<UsersRooms>
  /** insert data into the table: "booking_order_options" */
  insert_booking_order_options?: Maybe<BookingOrderOptionsMutationResponse>
  /** insert a single row into the table: "booking_order_options" */
  insert_booking_order_options_one?: Maybe<BookingOrderOptions>
  /** insert data into the table: "bookings" */
  insert_bookings?: Maybe<BookingsMutationResponse>
  /** insert a single row into the table: "bookings" */
  insert_bookings_one?: Maybe<Bookings>
  /** insert data into the table: "configs" */
  insert_configs?: Maybe<ConfigsMutationResponse>
  /** insert a single row into the table: "configs" */
  insert_configs_one?: Maybe<Configs>
  /** insert data into the table: "food" */
  insert_food?: Maybe<FoodMutationResponse>
  /** insert a single row into the table: "food" */
  insert_food_one?: Maybe<Food>
  /** insert data into the table: "order_options" */
  insert_order_options?: Maybe<OrderOptionsMutationResponse>
  /** insert a single row into the table: "order_options" */
  insert_order_options_one?: Maybe<OrderOptions>
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<OrdersMutationResponse>
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<RoomsMutationResponse>
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>
  /** insert data into the table: "threads" */
  insert_threads?: Maybe<ThreadsMutationResponse>
  /** insert a single row into the table: "threads" */
  insert_threads_one?: Maybe<Threads>
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** insert data into the table: "users_rooms" */
  insert_users_rooms?: Maybe<UsersRoomsMutationResponse>
  /** insert a single row into the table: "users_rooms" */
  insert_users_rooms_one?: Maybe<UsersRooms>
  /** update data of the table: "booking_order_options" */
  update_booking_order_options?: Maybe<BookingOrderOptionsMutationResponse>
  /** update single row of the table: "booking_order_options" */
  update_booking_order_options_by_pk?: Maybe<BookingOrderOptions>
  /** update multiples rows of table: "booking_order_options" */
  update_booking_order_options_many?: Maybe<Array<Maybe<BookingOrderOptionsMutationResponse>>>
  /** update data of the table: "bookings" */
  update_bookings?: Maybe<BookingsMutationResponse>
  /** update single row of the table: "bookings" */
  update_bookings_by_pk?: Maybe<Bookings>
  /** update multiples rows of table: "bookings" */
  update_bookings_many?: Maybe<Array<Maybe<BookingsMutationResponse>>>
  /** update data of the table: "configs" */
  update_configs?: Maybe<ConfigsMutationResponse>
  /** update single row of the table: "configs" */
  update_configs_by_pk?: Maybe<Configs>
  /** update multiples rows of table: "configs" */
  update_configs_many?: Maybe<Array<Maybe<ConfigsMutationResponse>>>
  /** update data of the table: "food" */
  update_food?: Maybe<FoodMutationResponse>
  /** update single row of the table: "food" */
  update_food_by_pk?: Maybe<Food>
  /** update multiples rows of table: "food" */
  update_food_many?: Maybe<Array<Maybe<FoodMutationResponse>>>
  /** update data of the table: "order_options" */
  update_order_options?: Maybe<OrderOptionsMutationResponse>
  /** update single row of the table: "order_options" */
  update_order_options_by_pk?: Maybe<OrderOptions>
  /** update multiples rows of table: "order_options" */
  update_order_options_many?: Maybe<Array<Maybe<OrderOptionsMutationResponse>>>
  /** update data of the table: "orders" */
  update_orders?: Maybe<OrdersMutationResponse>
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<OrdersMutationResponse>>>
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<RoomsMutationResponse>
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>
  /** update multiples rows of table: "rooms" */
  update_rooms_many?: Maybe<Array<Maybe<RoomsMutationResponse>>>
  /** update data of the table: "threads" */
  update_threads?: Maybe<ThreadsMutationResponse>
  /** update single row of the table: "threads" */
  update_threads_by_pk?: Maybe<Threads>
  /** update multiples rows of table: "threads" */
  update_threads_many?: Maybe<Array<Maybe<ThreadsMutationResponse>>>
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>
  /** update data of the table: "users_rooms" */
  update_users_rooms?: Maybe<UsersRoomsMutationResponse>
  /** update single row of the table: "users_rooms" */
  update_users_rooms_by_pk?: Maybe<UsersRooms>
  /** update multiples rows of table: "users_rooms" */
  update_users_rooms_many?: Maybe<Array<Maybe<UsersRoomsMutationResponse>>>
}

/** mutation root */
export interface MutationRootDeleteBookingOrderOptionsArgs {
  where: BookingOrderOptionsBoolExp
}

/** mutation root */
export interface MutationRootDeleteBookingOrderOptionsByPkArgs {
  booking_order_option_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteBookingsArgs {
  where: BookingsBoolExp
}

/** mutation root */
export interface MutationRootDeleteBookingsByPkArgs {
  booking_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteConfigsArgs {
  where: ConfigsBoolExp
}

/** mutation root */
export interface MutationRootDeleteConfigsByPkArgs {
  config_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteFoodArgs {
  where: FoodBoolExp
}

/** mutation root */
export interface MutationRootDeleteFoodByPkArgs {
  food_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteOrderOptionsArgs {
  where: OrderOptionsBoolExp
}

/** mutation root */
export interface MutationRootDeleteOrderOptionsByPkArgs {
  order_option_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteOrdersArgs {
  where: OrdersBoolExp
}

/** mutation root */
export interface MutationRootDeleteOrdersByPkArgs {
  order_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteRoomsArgs {
  where: RoomsBoolExp
}

/** mutation root */
export interface MutationRootDeleteRoomsByPkArgs {
  room_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteThreadsArgs {
  where: ThreadsBoolExp
}

/** mutation root */
export interface MutationRootDeleteThreadsByPkArgs {
  thread_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteUsersArgs {
  where: UsersBoolExp
}

/** mutation root */
export interface MutationRootDeleteUsersByPkArgs {
  user_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteUsersRoomsArgs {
  where: UsersRoomsBoolExp
}

/** mutation root */
export interface MutationRootDeleteUsersRoomsByPkArgs {
  user_room_id: Scalars['Int']
}

/** mutation root */
export interface MutationRootInsertBookingOrderOptionsArgs {
  objects: Array<BookingOrderOptionsInsertInput>
  on_conflict?: InputMaybe<BookingOrderOptionsOnConflict>
}

/** mutation root */
export interface MutationRootInsertBookingOrderOptionsOneArgs {
  object: BookingOrderOptionsInsertInput
  on_conflict?: InputMaybe<BookingOrderOptionsOnConflict>
}

/** mutation root */
export interface MutationRootInsertBookingsArgs {
  objects: Array<BookingsInsertInput>
  on_conflict?: InputMaybe<BookingsOnConflict>
}

/** mutation root */
export interface MutationRootInsertBookingsOneArgs {
  object: BookingsInsertInput
  on_conflict?: InputMaybe<BookingsOnConflict>
}

/** mutation root */
export interface MutationRootInsertConfigsArgs {
  objects: Array<ConfigsInsertInput>
  on_conflict?: InputMaybe<ConfigsOnConflict>
}

/** mutation root */
export interface MutationRootInsertConfigsOneArgs {
  object: ConfigsInsertInput
  on_conflict?: InputMaybe<ConfigsOnConflict>
}

/** mutation root */
export interface MutationRootInsertFoodArgs {
  objects: Array<FoodInsertInput>
  on_conflict?: InputMaybe<FoodOnConflict>
}

/** mutation root */
export interface MutationRootInsertFoodOneArgs {
  object: FoodInsertInput
  on_conflict?: InputMaybe<FoodOnConflict>
}

/** mutation root */
export interface MutationRootInsertOrderOptionsArgs {
  objects: Array<OrderOptionsInsertInput>
  on_conflict?: InputMaybe<OrderOptionsOnConflict>
}

/** mutation root */
export interface MutationRootInsertOrderOptionsOneArgs {
  object: OrderOptionsInsertInput
  on_conflict?: InputMaybe<OrderOptionsOnConflict>
}

/** mutation root */
export interface MutationRootInsertOrdersArgs {
  objects: Array<OrdersInsertInput>
  on_conflict?: InputMaybe<OrdersOnConflict>
}

/** mutation root */
export interface MutationRootInsertOrdersOneArgs {
  object: OrdersInsertInput
  on_conflict?: InputMaybe<OrdersOnConflict>
}

/** mutation root */
export interface MutationRootInsertRoomsArgs {
  objects: Array<RoomsInsertInput>
  on_conflict?: InputMaybe<RoomsOnConflict>
}

/** mutation root */
export interface MutationRootInsertRoomsOneArgs {
  object: RoomsInsertInput
  on_conflict?: InputMaybe<RoomsOnConflict>
}

/** mutation root */
export interface MutationRootInsertThreadsArgs {
  objects: Array<ThreadsInsertInput>
  on_conflict?: InputMaybe<ThreadsOnConflict>
}

/** mutation root */
export interface MutationRootInsertThreadsOneArgs {
  object: ThreadsInsertInput
  on_conflict?: InputMaybe<ThreadsOnConflict>
}

/** mutation root */
export interface MutationRootInsertUsersArgs {
  objects: Array<UsersInsertInput>
  on_conflict?: InputMaybe<UsersOnConflict>
}

/** mutation root */
export interface MutationRootInsertUsersOneArgs {
  object: UsersInsertInput
  on_conflict?: InputMaybe<UsersOnConflict>
}

/** mutation root */
export interface MutationRootInsertUsersRoomsArgs {
  objects: Array<UsersRoomsInsertInput>
  on_conflict?: InputMaybe<UsersRoomsOnConflict>
}

/** mutation root */
export interface MutationRootInsertUsersRoomsOneArgs {
  object: UsersRoomsInsertInput
  on_conflict?: InputMaybe<UsersRoomsOnConflict>
}

/** mutation root */
export interface MutationRootUpdateBookingOrderOptionsArgs {
  _inc?: InputMaybe<BookingOrderOptionsIncInput>
  _set?: InputMaybe<BookingOrderOptionsSetInput>
  where: BookingOrderOptionsBoolExp
}

/** mutation root */
export interface MutationRootUpdateBookingOrderOptionsByPkArgs {
  _inc?: InputMaybe<BookingOrderOptionsIncInput>
  _set?: InputMaybe<BookingOrderOptionsSetInput>
  pk_columns: BookingOrderOptionsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateBookingOrderOptionsManyArgs {
  updates: Array<BookingOrderOptionsUpdates>
}

/** mutation root */
export interface MutationRootUpdateBookingsArgs {
  _inc?: InputMaybe<BookingsIncInput>
  _set?: InputMaybe<BookingsSetInput>
  where: BookingsBoolExp
}

/** mutation root */
export interface MutationRootUpdateBookingsByPkArgs {
  _inc?: InputMaybe<BookingsIncInput>
  _set?: InputMaybe<BookingsSetInput>
  pk_columns: BookingsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateBookingsManyArgs {
  updates: Array<BookingsUpdates>
}

/** mutation root */
export interface MutationRootUpdateConfigsArgs {
  _inc?: InputMaybe<ConfigsIncInput>
  _set?: InputMaybe<ConfigsSetInput>
  where: ConfigsBoolExp
}

/** mutation root */
export interface MutationRootUpdateConfigsByPkArgs {
  _inc?: InputMaybe<ConfigsIncInput>
  _set?: InputMaybe<ConfigsSetInput>
  pk_columns: ConfigsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateConfigsManyArgs {
  updates: Array<ConfigsUpdates>
}

/** mutation root */
export interface MutationRootUpdateFoodArgs {
  _inc?: InputMaybe<FoodIncInput>
  _set?: InputMaybe<FoodSetInput>
  where: FoodBoolExp
}

/** mutation root */
export interface MutationRootUpdateFoodByPkArgs {
  _inc?: InputMaybe<FoodIncInput>
  _set?: InputMaybe<FoodSetInput>
  pk_columns: FoodPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateFoodManyArgs {
  updates: Array<FoodUpdates>
}

/** mutation root */
export interface MutationRootUpdateOrderOptionsArgs {
  _inc?: InputMaybe<OrderOptionsIncInput>
  _set?: InputMaybe<OrderOptionsSetInput>
  where: OrderOptionsBoolExp
}

/** mutation root */
export interface MutationRootUpdateOrderOptionsByPkArgs {
  _inc?: InputMaybe<OrderOptionsIncInput>
  _set?: InputMaybe<OrderOptionsSetInput>
  pk_columns: OrderOptionsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateOrderOptionsManyArgs {
  updates: Array<OrderOptionsUpdates>
}

/** mutation root */
export interface MutationRootUpdateOrdersArgs {
  _inc?: InputMaybe<OrdersIncInput>
  _set?: InputMaybe<OrdersSetInput>
  where: OrdersBoolExp
}

/** mutation root */
export interface MutationRootUpdateOrdersByPkArgs {
  _inc?: InputMaybe<OrdersIncInput>
  _set?: InputMaybe<OrdersSetInput>
  pk_columns: OrdersPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateOrdersManyArgs {
  updates: Array<OrdersUpdates>
}

/** mutation root */
export interface MutationRootUpdateRoomsArgs {
  _inc?: InputMaybe<RoomsIncInput>
  _set?: InputMaybe<RoomsSetInput>
  where: RoomsBoolExp
}

/** mutation root */
export interface MutationRootUpdateRoomsByPkArgs {
  _inc?: InputMaybe<RoomsIncInput>
  _set?: InputMaybe<RoomsSetInput>
  pk_columns: RoomsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateRoomsManyArgs {
  updates: Array<RoomsUpdates>
}

/** mutation root */
export interface MutationRootUpdateThreadsArgs {
  _inc?: InputMaybe<ThreadsIncInput>
  _set?: InputMaybe<ThreadsSetInput>
  where: ThreadsBoolExp
}

/** mutation root */
export interface MutationRootUpdateThreadsByPkArgs {
  _inc?: InputMaybe<ThreadsIncInput>
  _set?: InputMaybe<ThreadsSetInput>
  pk_columns: ThreadsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateThreadsManyArgs {
  updates: Array<ThreadsUpdates>
}

/** mutation root */
export interface MutationRootUpdateUsersArgs {
  _inc?: InputMaybe<UsersIncInput>
  _set?: InputMaybe<UsersSetInput>
  where: UsersBoolExp
}

/** mutation root */
export interface MutationRootUpdateUsersByPkArgs {
  _inc?: InputMaybe<UsersIncInput>
  _set?: InputMaybe<UsersSetInput>
  pk_columns: UsersPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateUsersManyArgs {
  updates: Array<UsersUpdates>
}

/** mutation root */
export interface MutationRootUpdateUsersRoomsArgs {
  _inc?: InputMaybe<UsersRoomsIncInput>
  _set?: InputMaybe<UsersRoomsSetInput>
  where: UsersRoomsBoolExp
}

/** mutation root */
export interface MutationRootUpdateUsersRoomsByPkArgs {
  _inc?: InputMaybe<UsersRoomsIncInput>
  _set?: InputMaybe<UsersRoomsSetInput>
  pk_columns: UsersRoomsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateUsersRoomsManyArgs {
  updates: Array<UsersRoomsUpdates>
}

/** column ordering options */
export const enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_options" */
export interface OrderOptions {
  __typename?: 'order_options'
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate
  name: Scalars['String']
  /** An object relationship */
  order?: Maybe<Orders>
  order_id?: Maybe<Scalars['Int']>
  order_option_id: Scalars['Int']
  price?: Maybe<Scalars['float8']>
}

/** columns and relationships of "order_options" */
export interface OrderOptionsBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

/** columns and relationships of "order_options" */
export interface OrderOptionsBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

/** aggregated selection of "order_options" */
export interface OrderOptionsAggregate {
  __typename?: 'order_options_aggregate'
  aggregate?: Maybe<OrderOptionsAggregateFields>
  nodes: Array<OrderOptions>
}

export interface OrderOptionsAggregateBoolExp {
  avg?: InputMaybe<OrderOptionsAggregateBoolExpAvg>
  corr?: InputMaybe<OrderOptionsAggregateBoolExpCorr>
  count?: InputMaybe<OrderOptionsAggregateBoolExpCount>
  covar_samp?: InputMaybe<OrderOptionsAggregateBoolExpCovarSamp>
  max?: InputMaybe<OrderOptionsAggregateBoolExpMax>
  min?: InputMaybe<OrderOptionsAggregateBoolExpMin>
  stddev_samp?: InputMaybe<OrderOptionsAggregateBoolExpStddevSamp>
  sum?: InputMaybe<OrderOptionsAggregateBoolExpSum>
  var_samp?: InputMaybe<OrderOptionsAggregateBoolExpVarSamp>
}

export interface OrderOptionsAggregateBoolExpAvg {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpAvgArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpCorr {
  arguments: OrderOptionsAggregateBoolExpCorrArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpCorrArguments {
  X: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCorrArgumentsColumns
  Y: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCorrArgumentsColumns
}

export interface OrderOptionsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<OrderOptionsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: IntComparisonExp
}

export interface OrderOptionsAggregateBoolExpCovarSamp {
  arguments: OrderOptionsAggregateBoolExpCovarSampArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpCovarSampArguments {
  X: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCovarSampArgumentsColumns
  Y: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCovarSampArgumentsColumns
}

export interface OrderOptionsAggregateBoolExpMax {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMaxArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpMin {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMinArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpStddevSamp {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpStddevSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpSum {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpSumArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrderOptionsAggregateBoolExpVarSamp {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpVarSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrderOptionsBoolExp>
  predicate: Float8ComparisonExp
}

/** aggregate fields of "order_options" */
export interface OrderOptionsAggregateFields {
  __typename?: 'order_options_aggregate_fields'
  avg?: Maybe<OrderOptionsAvgFields>
  count: Scalars['Int']
  max?: Maybe<OrderOptionsMaxFields>
  min?: Maybe<OrderOptionsMinFields>
  stddev?: Maybe<OrderOptionsStddevFields>
  stddev_pop?: Maybe<OrderOptionsStddevPopFields>
  stddev_samp?: Maybe<OrderOptionsStddevSampFields>
  sum?: Maybe<OrderOptionsSumFields>
  var_pop?: Maybe<OrderOptionsVarPopFields>
  var_samp?: Maybe<OrderOptionsVarSampFields>
  variance?: Maybe<OrderOptionsVarianceFields>
}

/** aggregate fields of "order_options" */
export interface OrderOptionsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<OrderOptionsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "order_options" */
export interface OrderOptionsAggregateOrderBy {
  avg?: InputMaybe<OrderOptionsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<OrderOptionsMaxOrderBy>
  min?: InputMaybe<OrderOptionsMinOrderBy>
  stddev?: InputMaybe<OrderOptionsStddevOrderBy>
  stddev_pop?: InputMaybe<OrderOptionsStddevPopOrderBy>
  stddev_samp?: InputMaybe<OrderOptionsStddevSampOrderBy>
  sum?: InputMaybe<OrderOptionsSumOrderBy>
  var_pop?: InputMaybe<OrderOptionsVarPopOrderBy>
  var_samp?: InputMaybe<OrderOptionsVarSampOrderBy>
  variance?: InputMaybe<OrderOptionsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "order_options" */
export interface OrderOptionsArrRelInsertInput {
  data: Array<OrderOptionsInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<OrderOptionsOnConflict>
}

/** aggregate avg on columns */
export interface OrderOptionsAvgFields {
  __typename?: 'order_options_avg_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "order_options" */
export interface OrderOptionsAvgOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "order_options". All fields are combined with a logical 'AND'. */
export interface OrderOptionsBoolExp {
  _and?: InputMaybe<Array<OrderOptionsBoolExp>>
  _not?: InputMaybe<OrderOptionsBoolExp>
  _or?: InputMaybe<Array<OrderOptionsBoolExp>>
  booking_order_options?: InputMaybe<BookingOrderOptionsBoolExp>
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateBoolExp>
  name?: InputMaybe<StringComparisonExp>
  order?: InputMaybe<OrdersBoolExp>
  order_id?: InputMaybe<IntComparisonExp>
  order_option_id?: InputMaybe<IntComparisonExp>
  price?: InputMaybe<Float8ComparisonExp>
}

/** unique or primary key constraints on table "order_options" */
export const enum OrderOptionsConstraint {
  /** unique or primary key constraint on columns "order_option_id" */
  OrderOptionsPkey = 'order_options_pkey'
}

/** input type for incrementing numeric columns in table "order_options" */
export interface OrderOptionsIncInput {
  order_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
}

/** input type for inserting data into table "order_options" */
export interface OrderOptionsInsertInput {
  booking_order_options?: InputMaybe<BookingOrderOptionsArrRelInsertInput>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<OrdersObjRelInsertInput>
  order_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
}

/** aggregate max on columns */
export interface OrderOptionsMaxFields {
  __typename?: 'order_options_max_fields'
  name?: Maybe<Scalars['String']>
  order_id?: Maybe<Scalars['Int']>
  order_option_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "order_options" */
export interface OrderOptionsMaxOrderBy {
  name?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface OrderOptionsMinFields {
  __typename?: 'order_options_min_fields'
  name?: Maybe<Scalars['String']>
  order_id?: Maybe<Scalars['Int']>
  order_option_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "order_options" */
export interface OrderOptionsMinOrderBy {
  name?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "order_options" */
export interface OrderOptionsMutationResponse {
  __typename?: 'order_options_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<OrderOptions>
}

/** input type for inserting object relation for remote table "order_options" */
export interface OrderOptionsObjRelInsertInput {
  data: OrderOptionsInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<OrderOptionsOnConflict>
}

/** on_conflict condition type for table "order_options" */
export interface OrderOptionsOnConflict {
  constraint: OrderOptionsConstraint
  update_columns?: Array<OrderOptionsUpdateColumn>
  where?: InputMaybe<OrderOptionsBoolExp>
}

/** Ordering options when selecting data from "order_options". */
export interface OrderOptionsOrderBy {
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateOrderBy>
  name?: InputMaybe<OrderBy>
  order?: InputMaybe<OrdersOrderBy>
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** primary key columns input for table: order_options */
export interface OrderOptionsPkColumnsInput {
  order_option_id: Scalars['Int']
}

/** select columns of table "order_options" */
export const enum OrderOptionsSelectColumn {
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderOptionId = 'order_option_id',
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_avg_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_corr_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_max_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_min_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_sum_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_var_samp_arguments_columns" columns of table "order_options" */
export const enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "order_options" */
export interface OrderOptionsSetInput {
  name?: InputMaybe<Scalars['String']>
  order_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export interface OrderOptionsStddevFields {
  __typename?: 'order_options_stddev_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "order_options" */
export interface OrderOptionsStddevOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface OrderOptionsStddevPopFields {
  __typename?: 'order_options_stddev_pop_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "order_options" */
export interface OrderOptionsStddevPopOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface OrderOptionsStddevSampFields {
  __typename?: 'order_options_stddev_samp_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "order_options" */
export interface OrderOptionsStddevSampOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "order_options" */
export interface OrderOptionsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: OrderOptionsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface OrderOptionsStreamCursorValueInput {
  name?: InputMaybe<Scalars['String']>
  order_id?: InputMaybe<Scalars['Int']>
  order_option_id?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['float8']>
}

/** aggregate sum on columns */
export interface OrderOptionsSumFields {
  __typename?: 'order_options_sum_fields'
  order_id?: Maybe<Scalars['Int']>
  order_option_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "order_options" */
export interface OrderOptionsSumOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** update columns of table "order_options" */
export const enum OrderOptionsUpdateColumn {
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderOptionId = 'order_option_id',
  /** column name */
  Price = 'price'
}

export interface OrderOptionsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrderOptionsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrderOptionsSetInput>
  where: OrderOptionsBoolExp
}

/** aggregate var_pop on columns */
export interface OrderOptionsVarPopFields {
  __typename?: 'order_options_var_pop_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "order_options" */
export interface OrderOptionsVarPopOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface OrderOptionsVarSampFields {
  __typename?: 'order_options_var_samp_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "order_options" */
export interface OrderOptionsVarSampOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface OrderOptionsVarianceFields {
  __typename?: 'order_options_variance_fields'
  order_id?: Maybe<Scalars['Float']>
  order_option_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "order_options" */
export interface OrderOptionsVarianceOrderBy {
  order_id?: InputMaybe<OrderBy>
  order_option_id?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
}

/** columns and relationships of "orders" */
export interface Orders {
  __typename?: 'orders'
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate
  created_at: Scalars['timestamp']
  created_by: Scalars['Int']
  discount?: Maybe<Scalars['float8']>
  /** An array relationship */
  food: Array<Food>
  /** An aggregate relationship */
  food_aggregate: FoodAggregate
  order_id: Scalars['Int']
  /** An array relationship */
  order_options: Array<OrderOptions>
  /** An aggregate relationship */
  order_options_aggregate: OrderOptionsAggregate
  room_id: Scalars['Int']
  store_address?: Maybe<Scalars['String']>
  store_name: Scalars['String']
  total_price?: Maybe<Scalars['float8']>
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
}

/** columns and relationships of "orders" */
export interface OrdersBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

/** columns and relationships of "orders" */
export interface OrdersBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

/** columns and relationships of "orders" */
export interface OrdersFoodArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<FoodOrderBy>>
  where?: InputMaybe<FoodBoolExp>
}

/** columns and relationships of "orders" */
export interface OrdersFoodAggregateArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<FoodOrderBy>>
  where?: InputMaybe<FoodBoolExp>
}

/** columns and relationships of "orders" */
export interface OrdersOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

/** columns and relationships of "orders" */
export interface OrdersOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

/** aggregated selection of "orders" */
export interface OrdersAggregate {
  __typename?: 'orders_aggregate'
  aggregate?: Maybe<OrdersAggregateFields>
  nodes: Array<Orders>
}

export interface OrdersAggregateBoolExp {
  avg?: InputMaybe<OrdersAggregateBoolExpAvg>
  corr?: InputMaybe<OrdersAggregateBoolExpCorr>
  count?: InputMaybe<OrdersAggregateBoolExpCount>
  covar_samp?: InputMaybe<OrdersAggregateBoolExpCovarSamp>
  max?: InputMaybe<OrdersAggregateBoolExpMax>
  min?: InputMaybe<OrdersAggregateBoolExpMin>
  stddev_samp?: InputMaybe<OrdersAggregateBoolExpStddevSamp>
  sum?: InputMaybe<OrdersAggregateBoolExpSum>
  var_samp?: InputMaybe<OrdersAggregateBoolExpVarSamp>
}

export interface OrdersAggregateBoolExpAvg {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpAvgArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpCorr {
  arguments: OrdersAggregateBoolExpCorrArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpCorrArguments {
  X: OrdersSelectColumnOrdersAggregateBoolExpCorrArgumentsColumns
  Y: OrdersSelectColumnOrdersAggregateBoolExpCorrArgumentsColumns
}

export interface OrdersAggregateBoolExpCount {
  arguments?: InputMaybe<Array<OrdersSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: IntComparisonExp
}

export interface OrdersAggregateBoolExpCovarSamp {
  arguments: OrdersAggregateBoolExpCovarSampArguments
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpCovarSampArguments {
  X: OrdersSelectColumnOrdersAggregateBoolExpCovarSampArgumentsColumns
  Y: OrdersSelectColumnOrdersAggregateBoolExpCovarSampArgumentsColumns
}

export interface OrdersAggregateBoolExpMax {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpMaxArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpMin {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpMinArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpStddevSamp {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpStddevSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpSum {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpSumArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

export interface OrdersAggregateBoolExpVarSamp {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpVarSampArgumentsColumns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<OrdersBoolExp>
  predicate: Float8ComparisonExp
}

/** aggregate fields of "orders" */
export interface OrdersAggregateFields {
  __typename?: 'orders_aggregate_fields'
  avg?: Maybe<OrdersAvgFields>
  count: Scalars['Int']
  max?: Maybe<OrdersMaxFields>
  min?: Maybe<OrdersMinFields>
  stddev?: Maybe<OrdersStddevFields>
  stddev_pop?: Maybe<OrdersStddevPopFields>
  stddev_samp?: Maybe<OrdersStddevSampFields>
  sum?: Maybe<OrdersSumFields>
  var_pop?: Maybe<OrdersVarPopFields>
  var_samp?: Maybe<OrdersVarSampFields>
  variance?: Maybe<OrdersVarianceFields>
}

/** aggregate fields of "orders" */
export interface OrdersAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<OrdersSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "orders" */
export interface OrdersAggregateOrderBy {
  avg?: InputMaybe<OrdersAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<OrdersMaxOrderBy>
  min?: InputMaybe<OrdersMinOrderBy>
  stddev?: InputMaybe<OrdersStddevOrderBy>
  stddev_pop?: InputMaybe<OrdersStddevPopOrderBy>
  stddev_samp?: InputMaybe<OrdersStddevSampOrderBy>
  sum?: InputMaybe<OrdersSumOrderBy>
  var_pop?: InputMaybe<OrdersVarPopOrderBy>
  var_samp?: InputMaybe<OrdersVarSampOrderBy>
  variance?: InputMaybe<OrdersVarianceOrderBy>
}

/** input type for inserting array relation for remote table "orders" */
export interface OrdersArrRelInsertInput {
  data: Array<OrdersInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<OrdersOnConflict>
}

/** aggregate avg on columns */
export interface OrdersAvgFields {
  __typename?: 'orders_avg_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "orders" */
export interface OrdersAvgOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export interface OrdersBoolExp {
  _and?: InputMaybe<Array<OrdersBoolExp>>
  _not?: InputMaybe<OrdersBoolExp>
  _or?: InputMaybe<Array<OrdersBoolExp>>
  bookings?: InputMaybe<BookingsBoolExp>
  bookings_aggregate?: InputMaybe<BookingsAggregateBoolExp>
  created_at?: InputMaybe<TimestampComparisonExp>
  created_by?: InputMaybe<IntComparisonExp>
  discount?: InputMaybe<Float8ComparisonExp>
  food?: InputMaybe<FoodBoolExp>
  food_aggregate?: InputMaybe<FoodAggregateBoolExp>
  order_id?: InputMaybe<IntComparisonExp>
  order_options?: InputMaybe<OrderOptionsBoolExp>
  order_options_aggregate?: InputMaybe<OrderOptionsAggregateBoolExp>
  room_id?: InputMaybe<IntComparisonExp>
  store_address?: InputMaybe<StringComparisonExp>
  store_name?: InputMaybe<StringComparisonExp>
  total_price?: InputMaybe<Float8ComparisonExp>
  updated_at?: InputMaybe<TimestampComparisonExp>
  user?: InputMaybe<UsersBoolExp>
}

/** unique or primary key constraints on table "orders" */
export const enum OrdersConstraint {
  /** unique or primary key constraint on columns "order_id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export interface OrdersIncInput {
  created_by?: InputMaybe<Scalars['Int']>
  discount?: InputMaybe<Scalars['float8']>
  order_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  total_price?: InputMaybe<Scalars['float8']>
}

/** input type for inserting data into table "orders" */
export interface OrdersInsertInput {
  bookings?: InputMaybe<BookingsArrRelInsertInput>
  created_at?: InputMaybe<Scalars['timestamp']>
  created_by?: InputMaybe<Scalars['Int']>
  discount?: InputMaybe<Scalars['float8']>
  food?: InputMaybe<FoodArrRelInsertInput>
  order_id?: InputMaybe<Scalars['Int']>
  order_options?: InputMaybe<OrderOptionsArrRelInsertInput>
  room_id?: InputMaybe<Scalars['Int']>
  store_address?: InputMaybe<Scalars['String']>
  store_name?: InputMaybe<Scalars['String']>
  total_price?: InputMaybe<Scalars['float8']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user?: InputMaybe<UsersObjRelInsertInput>
}

/** aggregate max on columns */
export interface OrdersMaxFields {
  __typename?: 'orders_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  created_by?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  order_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  store_address?: Maybe<Scalars['String']>
  store_name?: Maybe<Scalars['String']>
  total_price?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "orders" */
export interface OrdersMaxOrderBy {
  created_at?: InputMaybe<OrderBy>
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  store_address?: InputMaybe<OrderBy>
  store_name?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface OrdersMinFields {
  __typename?: 'orders_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  created_by?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  order_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  store_address?: Maybe<Scalars['String']>
  store_name?: Maybe<Scalars['String']>
  total_price?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "orders" */
export interface OrdersMinOrderBy {
  created_at?: InputMaybe<OrderBy>
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  store_address?: InputMaybe<OrderBy>
  store_name?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "orders" */
export interface OrdersMutationResponse {
  __typename?: 'orders_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Orders>
}

/** input type for inserting object relation for remote table "orders" */
export interface OrdersObjRelInsertInput {
  data: OrdersInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<OrdersOnConflict>
}

/** on_conflict condition type for table "orders" */
export interface OrdersOnConflict {
  constraint: OrdersConstraint
  update_columns?: Array<OrdersUpdateColumn>
  where?: InputMaybe<OrdersBoolExp>
}

/** Ordering options when selecting data from "orders". */
export interface OrdersOrderBy {
  bookings_aggregate?: InputMaybe<BookingsAggregateOrderBy>
  created_at?: InputMaybe<OrderBy>
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  food_aggregate?: InputMaybe<FoodAggregateOrderBy>
  order_id?: InputMaybe<OrderBy>
  order_options_aggregate?: InputMaybe<OrderOptionsAggregateOrderBy>
  room_id?: InputMaybe<OrderBy>
  store_address?: InputMaybe<OrderBy>
  store_name?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
  user?: InputMaybe<UsersOrderBy>
}

/** primary key columns input for table: orders */
export interface OrdersPkColumnsInput {
  order_id: Scalars['Int']
}

/** select columns of table "orders" */
export const enum OrdersSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Discount = 'discount',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  StoreAddress = 'store_address',
  /** column name */
  StoreName = 'store_name',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "orders_aggregate_bool_exp_avg_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_corr_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_max_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_min_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_sum_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_var_samp_arguments_columns" columns of table "orders" */
export const enum OrdersSelectColumnOrdersAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** input type for updating data in table "orders" */
export interface OrdersSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  created_by?: InputMaybe<Scalars['Int']>
  discount?: InputMaybe<Scalars['float8']>
  order_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  store_address?: InputMaybe<Scalars['String']>
  store_name?: InputMaybe<Scalars['String']>
  total_price?: InputMaybe<Scalars['float8']>
  updated_at?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export interface OrdersStddevFields {
  __typename?: 'orders_stddev_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "orders" */
export interface OrdersStddevOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface OrdersStddevPopFields {
  __typename?: 'orders_stddev_pop_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "orders" */
export interface OrdersStddevPopOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface OrdersStddevSampFields {
  __typename?: 'orders_stddev_samp_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "orders" */
export interface OrdersStddevSampOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "orders" */
export interface OrdersStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: OrdersStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface OrdersStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  created_by?: InputMaybe<Scalars['Int']>
  discount?: InputMaybe<Scalars['float8']>
  order_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  store_address?: InputMaybe<Scalars['String']>
  store_name?: InputMaybe<Scalars['String']>
  total_price?: InputMaybe<Scalars['float8']>
  updated_at?: InputMaybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export interface OrdersSumFields {
  __typename?: 'orders_sum_fields'
  created_by?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  order_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  total_price?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "orders" */
export interface OrdersSumOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** update columns of table "orders" */
export const enum OrdersUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Discount = 'discount',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  StoreAddress = 'store_address',
  /** column name */
  StoreName = 'store_name',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

export interface OrdersUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrdersIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrdersSetInput>
  where: OrdersBoolExp
}

/** aggregate var_pop on columns */
export interface OrdersVarPopFields {
  __typename?: 'orders_var_pop_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "orders" */
export interface OrdersVarPopOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface OrdersVarSampFields {
  __typename?: 'orders_var_samp_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "orders" */
export interface OrdersVarSampOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface OrdersVarianceFields {
  __typename?: 'orders_variance_fields'
  created_by?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  order_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  total_price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "orders" */
export interface OrdersVarianceOrderBy {
  created_by?: InputMaybe<OrderBy>
  discount?: InputMaybe<OrderBy>
  order_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  total_price?: InputMaybe<OrderBy>
}

export interface QueryRoot {
  __typename?: 'query_root'
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate
  /** fetch data from the table: "booking_order_options" using primary key columns */
  booking_order_options_by_pk?: Maybe<BookingOrderOptions>
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>
  /** fetch data from the table: "configs" */
  configs: Array<Configs>
  /** fetch aggregated fields from the table: "configs" */
  configs_aggregate: ConfigsAggregate
  /** fetch data from the table: "configs" using primary key columns */
  configs_by_pk?: Maybe<Configs>
  /** An array relationship */
  food: Array<Food>
  /** An aggregate relationship */
  food_aggregate: FoodAggregate
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>
  /** An array relationship */
  order_options: Array<OrderOptions>
  /** An aggregate relationship */
  order_options_aggregate: OrderOptionsAggregate
  /** fetch data from the table: "order_options" using primary key columns */
  order_options_by_pk?: Maybe<OrderOptions>
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: OrdersAggregate
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>
  /** An array relationship */
  rooms: Array<Rooms>
  /** An aggregate relationship */
  rooms_aggregate: RoomsAggregate
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>
  /** An array relationship */
  threads: Array<Threads>
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate
  /** fetch data from the table: "threads" using primary key columns */
  threads_by_pk?: Maybe<Threads>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** An array relationship */
  users_rooms: Array<UsersRooms>
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate
  /** fetch data from the table: "users_rooms" using primary key columns */
  users_rooms_by_pk?: Maybe<UsersRooms>
}

export interface QueryRootBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

export interface QueryRootBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

export interface QueryRootBookingOrderOptionsByPkArgs {
  booking_order_option_id: Scalars['Int']
}

export interface QueryRootBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

export interface QueryRootBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

export interface QueryRootBookingsByPkArgs {
  booking_id: Scalars['Int']
}

export interface QueryRootConfigsArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ConfigsOrderBy>>
  where?: InputMaybe<ConfigsBoolExp>
}

export interface QueryRootConfigsAggregateArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ConfigsOrderBy>>
  where?: InputMaybe<ConfigsBoolExp>
}

export interface QueryRootConfigsByPkArgs {
  config_id: Scalars['Int']
}

export interface QueryRootFoodArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<FoodOrderBy>>
  where?: InputMaybe<FoodBoolExp>
}

export interface QueryRootFoodAggregateArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<FoodOrderBy>>
  where?: InputMaybe<FoodBoolExp>
}

export interface QueryRootFoodByPkArgs {
  food_id: Scalars['Int']
}

export interface QueryRootOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

export interface QueryRootOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

export interface QueryRootOrderOptionsByPkArgs {
  order_option_id: Scalars['Int']
}

export interface QueryRootOrdersArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrdersOrderBy>>
  where?: InputMaybe<OrdersBoolExp>
}

export interface QueryRootOrdersAggregateArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrdersOrderBy>>
  where?: InputMaybe<OrdersBoolExp>
}

export interface QueryRootOrdersByPkArgs {
  order_id: Scalars['Int']
}

export interface QueryRootRoomsArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RoomsOrderBy>>
  where?: InputMaybe<RoomsBoolExp>
}

export interface QueryRootRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RoomsOrderBy>>
  where?: InputMaybe<RoomsBoolExp>
}

export interface QueryRootRoomsByPkArgs {
  room_id: Scalars['Int']
}

export interface QueryRootThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

export interface QueryRootThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

export interface QueryRootThreadsByPkArgs {
  thread_id: Scalars['Int']
}

export interface QueryRootUsersArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export interface QueryRootUsersAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export interface QueryRootUsersByPkArgs {
  user_id: Scalars['Int']
}

export interface QueryRootUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

export interface QueryRootUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

export interface QueryRootUsersRoomsByPkArgs {
  user_room_id: Scalars['Int']
}

/** columns and relationships of "rooms" */
export interface Rooms {
  __typename?: 'rooms'
  created_at: Scalars['timestamp']
  firebase_room_id: Scalars['String']
  host_id: Scalars['Int']
  room_id: Scalars['Int']
  /** An array relationship */
  threads: Array<Threads>
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
  /** An array relationship */
  users_rooms: Array<UsersRooms>
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate
}

/** columns and relationships of "rooms" */
export interface RoomsThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

/** columns and relationships of "rooms" */
export interface RoomsThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

/** columns and relationships of "rooms" */
export interface RoomsUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

/** columns and relationships of "rooms" */
export interface RoomsUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

/** aggregated selection of "rooms" */
export interface RoomsAggregate {
  __typename?: 'rooms_aggregate'
  aggregate?: Maybe<RoomsAggregateFields>
  nodes: Array<Rooms>
}

export interface RoomsAggregateBoolExp {
  count?: InputMaybe<RoomsAggregateBoolExpCount>
}

export interface RoomsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<RoomsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<RoomsBoolExp>
  predicate: IntComparisonExp
}

/** aggregate fields of "rooms" */
export interface RoomsAggregateFields {
  __typename?: 'rooms_aggregate_fields'
  avg?: Maybe<RoomsAvgFields>
  count: Scalars['Int']
  max?: Maybe<RoomsMaxFields>
  min?: Maybe<RoomsMinFields>
  stddev?: Maybe<RoomsStddevFields>
  stddev_pop?: Maybe<RoomsStddevPopFields>
  stddev_samp?: Maybe<RoomsStddevSampFields>
  sum?: Maybe<RoomsSumFields>
  var_pop?: Maybe<RoomsVarPopFields>
  var_samp?: Maybe<RoomsVarSampFields>
  variance?: Maybe<RoomsVarianceFields>
}

/** aggregate fields of "rooms" */
export interface RoomsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<RoomsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "rooms" */
export interface RoomsAggregateOrderBy {
  avg?: InputMaybe<RoomsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<RoomsMaxOrderBy>
  min?: InputMaybe<RoomsMinOrderBy>
  stddev?: InputMaybe<RoomsStddevOrderBy>
  stddev_pop?: InputMaybe<RoomsStddevPopOrderBy>
  stddev_samp?: InputMaybe<RoomsStddevSampOrderBy>
  sum?: InputMaybe<RoomsSumOrderBy>
  var_pop?: InputMaybe<RoomsVarPopOrderBy>
  var_samp?: InputMaybe<RoomsVarSampOrderBy>
  variance?: InputMaybe<RoomsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "rooms" */
export interface RoomsArrRelInsertInput {
  data: Array<RoomsInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<RoomsOnConflict>
}

/** aggregate avg on columns */
export interface RoomsAvgFields {
  __typename?: 'rooms_avg_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "rooms" */
export interface RoomsAvgOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export interface RoomsBoolExp {
  _and?: InputMaybe<Array<RoomsBoolExp>>
  _not?: InputMaybe<RoomsBoolExp>
  _or?: InputMaybe<Array<RoomsBoolExp>>
  created_at?: InputMaybe<TimestampComparisonExp>
  firebase_room_id?: InputMaybe<StringComparisonExp>
  host_id?: InputMaybe<IntComparisonExp>
  room_id?: InputMaybe<IntComparisonExp>
  threads?: InputMaybe<ThreadsBoolExp>
  threads_aggregate?: InputMaybe<ThreadsAggregateBoolExp>
  updated_at?: InputMaybe<TimestampComparisonExp>
  user?: InputMaybe<UsersBoolExp>
  users_rooms?: InputMaybe<UsersRoomsBoolExp>
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateBoolExp>
}

/** unique or primary key constraints on table "rooms" */
export const enum RoomsConstraint {
  /** unique or primary key constraint on columns "room_id" */
  RoomsPkey = 'rooms_pkey'
}

/** input type for incrementing numeric columns in table "rooms" */
export interface RoomsIncInput {
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "rooms" */
export interface RoomsInsertInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  firebase_room_id?: InputMaybe<Scalars['String']>
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  threads?: InputMaybe<ThreadsArrRelInsertInput>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user?: InputMaybe<UsersObjRelInsertInput>
  users_rooms?: InputMaybe<UsersRoomsArrRelInsertInput>
}

/** aggregate max on columns */
export interface RoomsMaxFields {
  __typename?: 'rooms_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  firebase_room_id?: Maybe<Scalars['String']>
  host_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "rooms" */
export interface RoomsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>
  firebase_room_id?: InputMaybe<OrderBy>
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface RoomsMinFields {
  __typename?: 'rooms_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  firebase_room_id?: Maybe<Scalars['String']>
  host_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "rooms" */
export interface RoomsMinOrderBy {
  created_at?: InputMaybe<OrderBy>
  firebase_room_id?: InputMaybe<OrderBy>
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "rooms" */
export interface RoomsMutationResponse {
  __typename?: 'rooms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>
}

/** input type for inserting object relation for remote table "rooms" */
export interface RoomsObjRelInsertInput {
  data: RoomsInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<RoomsOnConflict>
}

/** on_conflict condition type for table "rooms" */
export interface RoomsOnConflict {
  constraint: RoomsConstraint
  update_columns?: Array<RoomsUpdateColumn>
  where?: InputMaybe<RoomsBoolExp>
}

/** Ordering options when selecting data from "rooms". */
export interface RoomsOrderBy {
  created_at?: InputMaybe<OrderBy>
  firebase_room_id?: InputMaybe<OrderBy>
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  threads_aggregate?: InputMaybe<ThreadsAggregateOrderBy>
  updated_at?: InputMaybe<OrderBy>
  user?: InputMaybe<UsersOrderBy>
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateOrderBy>
}

/** primary key columns input for table: rooms */
export interface RoomsPkColumnsInput {
  room_id: Scalars['Int']
}

/** select columns of table "rooms" */
export const enum RoomsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirebaseRoomId = 'firebase_room_id',
  /** column name */
  HostId = 'host_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rooms" */
export interface RoomsSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  firebase_room_id?: InputMaybe<Scalars['String']>
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export interface RoomsStddevFields {
  __typename?: 'rooms_stddev_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "rooms" */
export interface RoomsStddevOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface RoomsStddevPopFields {
  __typename?: 'rooms_stddev_pop_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "rooms" */
export interface RoomsStddevPopOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface RoomsStddevSampFields {
  __typename?: 'rooms_stddev_samp_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "rooms" */
export interface RoomsStddevSampOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "rooms" */
export interface RoomsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: RoomsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface RoomsStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  firebase_room_id?: InputMaybe<Scalars['String']>
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export interface RoomsSumFields {
  __typename?: 'rooms_sum_fields'
  host_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "rooms" */
export interface RoomsSumOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** update columns of table "rooms" */
export const enum RoomsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirebaseRoomId = 'firebase_room_id',
  /** column name */
  HostId = 'host_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export interface RoomsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RoomsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RoomsSetInput>
  where: RoomsBoolExp
}

/** aggregate var_pop on columns */
export interface RoomsVarPopFields {
  __typename?: 'rooms_var_pop_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "rooms" */
export interface RoomsVarPopOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface RoomsVarSampFields {
  __typename?: 'rooms_var_samp_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "rooms" */
export interface RoomsVarSampOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface RoomsVarianceFields {
  __typename?: 'rooms_variance_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "rooms" */
export interface RoomsVarianceOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
}

export interface SubscriptionRoot {
  __typename?: 'subscription_root'
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate
  /** fetch data from the table: "booking_order_options" using primary key columns */
  booking_order_options_by_pk?: Maybe<BookingOrderOptions>
  /** fetch data from the table in a streaming manner: "booking_order_options" */
  booking_order_options_stream: Array<BookingOrderOptions>
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>
  /** fetch data from the table in a streaming manner: "bookings" */
  bookings_stream: Array<Bookings>
  /** fetch data from the table: "configs" */
  configs: Array<Configs>
  /** fetch aggregated fields from the table: "configs" */
  configs_aggregate: ConfigsAggregate
  /** fetch data from the table: "configs" using primary key columns */
  configs_by_pk?: Maybe<Configs>
  /** fetch data from the table in a streaming manner: "configs" */
  configs_stream: Array<Configs>
  /** An array relationship */
  food: Array<Food>
  /** An aggregate relationship */
  food_aggregate: FoodAggregate
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>
  /** fetch data from the table in a streaming manner: "food" */
  food_stream: Array<Food>
  /** An array relationship */
  order_options: Array<OrderOptions>
  /** An aggregate relationship */
  order_options_aggregate: OrderOptionsAggregate
  /** fetch data from the table: "order_options" using primary key columns */
  order_options_by_pk?: Maybe<OrderOptions>
  /** fetch data from the table in a streaming manner: "order_options" */
  order_options_stream: Array<OrderOptions>
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: OrdersAggregate
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>
  /** An array relationship */
  rooms: Array<Rooms>
  /** An aggregate relationship */
  rooms_aggregate: RoomsAggregate
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>
  /** fetch data from the table in a streaming manner: "rooms" */
  rooms_stream: Array<Rooms>
  /** An array relationship */
  threads: Array<Threads>
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate
  /** fetch data from the table: "threads" using primary key columns */
  threads_by_pk?: Maybe<Threads>
  /** fetch data from the table in a streaming manner: "threads" */
  threads_stream: Array<Threads>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** An array relationship */
  users_rooms: Array<UsersRooms>
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate
  /** fetch data from the table: "users_rooms" using primary key columns */
  users_rooms_by_pk?: Maybe<UsersRooms>
  /** fetch data from the table in a streaming manner: "users_rooms" */
  users_rooms_stream: Array<UsersRooms>
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>
}

export interface SubscriptionRootBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

export interface SubscriptionRootBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

export interface SubscriptionRootBookingOrderOptionsByPkArgs {
  booking_order_option_id: Scalars['Int']
}

export interface SubscriptionRootBookingOrderOptionsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<BookingOrderOptionsStreamCursorInput>>
  where?: InputMaybe<BookingOrderOptionsBoolExp>
}

export interface SubscriptionRootBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

export interface SubscriptionRootBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

export interface SubscriptionRootBookingsByPkArgs {
  booking_id: Scalars['Int']
}

export interface SubscriptionRootBookingsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<BookingsStreamCursorInput>>
  where?: InputMaybe<BookingsBoolExp>
}

export interface SubscriptionRootConfigsArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ConfigsOrderBy>>
  where?: InputMaybe<ConfigsBoolExp>
}

export interface SubscriptionRootConfigsAggregateArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ConfigsOrderBy>>
  where?: InputMaybe<ConfigsBoolExp>
}

export interface SubscriptionRootConfigsByPkArgs {
  config_id: Scalars['Int']
}

export interface SubscriptionRootConfigsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<ConfigsStreamCursorInput>>
  where?: InputMaybe<ConfigsBoolExp>
}

export interface SubscriptionRootFoodArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<FoodOrderBy>>
  where?: InputMaybe<FoodBoolExp>
}

export interface SubscriptionRootFoodAggregateArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<FoodOrderBy>>
  where?: InputMaybe<FoodBoolExp>
}

export interface SubscriptionRootFoodByPkArgs {
  food_id: Scalars['Int']
}

export interface SubscriptionRootFoodStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<FoodStreamCursorInput>>
  where?: InputMaybe<FoodBoolExp>
}

export interface SubscriptionRootOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

export interface SubscriptionRootOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

export interface SubscriptionRootOrderOptionsByPkArgs {
  order_option_id: Scalars['Int']
}

export interface SubscriptionRootOrderOptionsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<OrderOptionsStreamCursorInput>>
  where?: InputMaybe<OrderOptionsBoolExp>
}

export interface SubscriptionRootOrdersArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrdersOrderBy>>
  where?: InputMaybe<OrdersBoolExp>
}

export interface SubscriptionRootOrdersAggregateArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrdersOrderBy>>
  where?: InputMaybe<OrdersBoolExp>
}

export interface SubscriptionRootOrdersByPkArgs {
  order_id: Scalars['Int']
}

export interface SubscriptionRootOrdersStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<OrdersStreamCursorInput>>
  where?: InputMaybe<OrdersBoolExp>
}

export interface SubscriptionRootRoomsArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RoomsOrderBy>>
  where?: InputMaybe<RoomsBoolExp>
}

export interface SubscriptionRootRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RoomsOrderBy>>
  where?: InputMaybe<RoomsBoolExp>
}

export interface SubscriptionRootRoomsByPkArgs {
  room_id: Scalars['Int']
}

export interface SubscriptionRootRoomsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<RoomsStreamCursorInput>>
  where?: InputMaybe<RoomsBoolExp>
}

export interface SubscriptionRootThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

export interface SubscriptionRootThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

export interface SubscriptionRootThreadsByPkArgs {
  thread_id: Scalars['Int']
}

export interface SubscriptionRootThreadsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<ThreadsStreamCursorInput>>
  where?: InputMaybe<ThreadsBoolExp>
}

export interface SubscriptionRootUsersArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export interface SubscriptionRootUsersAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export interface SubscriptionRootUsersByPkArgs {
  user_id: Scalars['Int']
}

export interface SubscriptionRootUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

export interface SubscriptionRootUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

export interface SubscriptionRootUsersRoomsByPkArgs {
  user_room_id: Scalars['Int']
}

export interface SubscriptionRootUsersRoomsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<UsersRoomsStreamCursorInput>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

export interface SubscriptionRootUsersStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<UsersStreamCursorInput>>
  where?: InputMaybe<UsersBoolExp>
}

/** columns and relationships of "threads" */
export interface Threads {
  __typename?: 'threads'
  created_at: Scalars['timestamp']
  host_id: Scalars['Int']
  /** An object relationship */
  room: Rooms
  room_id: Scalars['Int']
  thread_id: Scalars['Int']
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "threads" */
export interface ThreadsAggregate {
  __typename?: 'threads_aggregate'
  aggregate?: Maybe<ThreadsAggregateFields>
  nodes: Array<Threads>
}

export interface ThreadsAggregateBoolExp {
  count?: InputMaybe<ThreadsAggregateBoolExpCount>
}

export interface ThreadsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<ThreadsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<ThreadsBoolExp>
  predicate: IntComparisonExp
}

/** aggregate fields of "threads" */
export interface ThreadsAggregateFields {
  __typename?: 'threads_aggregate_fields'
  avg?: Maybe<ThreadsAvgFields>
  count: Scalars['Int']
  max?: Maybe<ThreadsMaxFields>
  min?: Maybe<ThreadsMinFields>
  stddev?: Maybe<ThreadsStddevFields>
  stddev_pop?: Maybe<ThreadsStddevPopFields>
  stddev_samp?: Maybe<ThreadsStddevSampFields>
  sum?: Maybe<ThreadsSumFields>
  var_pop?: Maybe<ThreadsVarPopFields>
  var_samp?: Maybe<ThreadsVarSampFields>
  variance?: Maybe<ThreadsVarianceFields>
}

/** aggregate fields of "threads" */
export interface ThreadsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<ThreadsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "threads" */
export interface ThreadsAggregateOrderBy {
  avg?: InputMaybe<ThreadsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<ThreadsMaxOrderBy>
  min?: InputMaybe<ThreadsMinOrderBy>
  stddev?: InputMaybe<ThreadsStddevOrderBy>
  stddev_pop?: InputMaybe<ThreadsStddevPopOrderBy>
  stddev_samp?: InputMaybe<ThreadsStddevSampOrderBy>
  sum?: InputMaybe<ThreadsSumOrderBy>
  var_pop?: InputMaybe<ThreadsVarPopOrderBy>
  var_samp?: InputMaybe<ThreadsVarSampOrderBy>
  variance?: InputMaybe<ThreadsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "threads" */
export interface ThreadsArrRelInsertInput {
  data: Array<ThreadsInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<ThreadsOnConflict>
}

/** aggregate avg on columns */
export interface ThreadsAvgFields {
  __typename?: 'threads_avg_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "threads" */
export interface ThreadsAvgOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "threads". All fields are combined with a logical 'AND'. */
export interface ThreadsBoolExp {
  _and?: InputMaybe<Array<ThreadsBoolExp>>
  _not?: InputMaybe<ThreadsBoolExp>
  _or?: InputMaybe<Array<ThreadsBoolExp>>
  created_at?: InputMaybe<TimestampComparisonExp>
  host_id?: InputMaybe<IntComparisonExp>
  room?: InputMaybe<RoomsBoolExp>
  room_id?: InputMaybe<IntComparisonExp>
  thread_id?: InputMaybe<IntComparisonExp>
  updated_at?: InputMaybe<TimestampComparisonExp>
  user?: InputMaybe<UsersBoolExp>
}

/** unique or primary key constraints on table "threads" */
export const enum ThreadsConstraint {
  /** unique or primary key constraint on columns "thread_id" */
  ThreadsPkey = 'threads_pkey'
}

/** input type for incrementing numeric columns in table "threads" */
export interface ThreadsIncInput {
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  thread_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "threads" */
export interface ThreadsInsertInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  host_id?: InputMaybe<Scalars['Int']>
  room?: InputMaybe<RoomsObjRelInsertInput>
  room_id?: InputMaybe<Scalars['Int']>
  thread_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user?: InputMaybe<UsersObjRelInsertInput>
}

/** aggregate max on columns */
export interface ThreadsMaxFields {
  __typename?: 'threads_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  host_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  thread_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "threads" */
export interface ThreadsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface ThreadsMinFields {
  __typename?: 'threads_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  host_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  thread_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "threads" */
export interface ThreadsMinOrderBy {
  created_at?: InputMaybe<OrderBy>
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "threads" */
export interface ThreadsMutationResponse {
  __typename?: 'threads_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Threads>
}

/** on_conflict condition type for table "threads" */
export interface ThreadsOnConflict {
  constraint: ThreadsConstraint
  update_columns?: Array<ThreadsUpdateColumn>
  where?: InputMaybe<ThreadsBoolExp>
}

/** Ordering options when selecting data from "threads". */
export interface ThreadsOrderBy {
  created_at?: InputMaybe<OrderBy>
  host_id?: InputMaybe<OrderBy>
  room?: InputMaybe<RoomsOrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
  user?: InputMaybe<UsersOrderBy>
}

/** primary key columns input for table: threads */
export interface ThreadsPkColumnsInput {
  thread_id: Scalars['Int']
}

/** select columns of table "threads" */
export const enum ThreadsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HostId = 'host_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "threads" */
export interface ThreadsSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  thread_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export interface ThreadsStddevFields {
  __typename?: 'threads_stddev_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "threads" */
export interface ThreadsStddevOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface ThreadsStddevPopFields {
  __typename?: 'threads_stddev_pop_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "threads" */
export interface ThreadsStddevPopOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface ThreadsStddevSampFields {
  __typename?: 'threads_stddev_samp_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "threads" */
export interface ThreadsStddevSampOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "threads" */
export interface ThreadsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: ThreadsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface ThreadsStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  host_id?: InputMaybe<Scalars['Int']>
  room_id?: InputMaybe<Scalars['Int']>
  thread_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export interface ThreadsSumFields {
  __typename?: 'threads_sum_fields'
  host_id?: Maybe<Scalars['Int']>
  room_id?: Maybe<Scalars['Int']>
  thread_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "threads" */
export interface ThreadsSumOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** update columns of table "threads" */
export const enum ThreadsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HostId = 'host_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export interface ThreadsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ThreadsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ThreadsSetInput>
  where: ThreadsBoolExp
}

/** aggregate var_pop on columns */
export interface ThreadsVarPopFields {
  __typename?: 'threads_var_pop_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "threads" */
export interface ThreadsVarPopOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface ThreadsVarSampFields {
  __typename?: 'threads_var_samp_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "threads" */
export interface ThreadsVarSampOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface ThreadsVarianceFields {
  __typename?: 'threads_variance_fields'
  host_id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  thread_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "threads" */
export interface ThreadsVarianceOrderBy {
  host_id?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  thread_id?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface TimestampComparisonExp {
  _eq?: InputMaybe<Scalars['timestamp']>
  _gt?: InputMaybe<Scalars['timestamp']>
  _gte?: InputMaybe<Scalars['timestamp']>
  _in?: InputMaybe<Array<Scalars['timestamp']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamp']>
  _lte?: InputMaybe<Scalars['timestamp']>
  _neq?: InputMaybe<Scalars['timestamp']>
  _nin?: InputMaybe<Array<Scalars['timestamp']>>
}

/** columns and relationships of "users" */
export interface Users {
  __typename?: 'users'
  access_secret_key?: Maybe<Scalars['String']>
  active?: Maybe<Scalars['Boolean']>
  avatar?: Maybe<Scalars['String']>
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate
  changed_avatar_manually?: Maybe<Scalars['Boolean']>
  changed_displayed_name_manually?: Maybe<Scalars['Boolean']>
  created_at: Scalars['timestamp']
  displayed_name: Scalars['String']
  email: Scalars['String']
  forgot_password_token?: Maybe<Scalars['String']>
  momo_phone_number?: Maybe<Scalars['bpchar']>
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: OrdersAggregate
  otp?: Maybe<Scalars['bpchar']>
  password_hashed?: Maybe<Scalars['String']>
  /** An array relationship */
  rooms: Array<Rooms>
  /** An aggregate relationship */
  rooms_aggregate: RoomsAggregate
  sex?: Maybe<Scalars['Boolean']>
  /** An array relationship */
  threads: Array<Threads>
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate
  updated_at: Scalars['timestamp']
  user_id: Scalars['Int']
  /** An array relationship */
  users_rooms: Array<UsersRooms>
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate
  verified_email?: Maybe<Scalars['Boolean']>
}

/** columns and relationships of "users" */
export interface UsersBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<BookingsOrderBy>>
  where?: InputMaybe<BookingsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersOrdersArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrdersOrderBy>>
  where?: InputMaybe<OrdersBoolExp>
}

/** columns and relationships of "users" */
export interface UsersOrdersAggregateArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<OrdersOrderBy>>
  where?: InputMaybe<OrdersBoolExp>
}

/** columns and relationships of "users" */
export interface UsersRoomsArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RoomsOrderBy>>
  where?: InputMaybe<RoomsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RoomsOrderBy>>
  where?: InputMaybe<RoomsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ThreadsOrderBy>>
  where?: InputMaybe<ThreadsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

/** columns and relationships of "users" */
export interface UsersUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>
  where?: InputMaybe<UsersRoomsBoolExp>
}

/** aggregated selection of "users" */
export interface UsersAggregate {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<UsersAggregateFields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export interface UsersAggregateFields {
  __typename?: 'users_aggregate_fields'
  avg?: Maybe<UsersAvgFields>
  count: Scalars['Int']
  max?: Maybe<UsersMaxFields>
  min?: Maybe<UsersMinFields>
  stddev?: Maybe<UsersStddevFields>
  stddev_pop?: Maybe<UsersStddevPopFields>
  stddev_samp?: Maybe<UsersStddevSampFields>
  sum?: Maybe<UsersSumFields>
  var_pop?: Maybe<UsersVarPopFields>
  var_samp?: Maybe<UsersVarSampFields>
  variance?: Maybe<UsersVarianceFields>
}

/** aggregate fields of "users" */
export interface UsersAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UsersSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface UsersAvgFields {
  __typename?: 'users_avg_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: InputMaybe<Array<UsersBoolExp>>
  _not?: InputMaybe<UsersBoolExp>
  _or?: InputMaybe<Array<UsersBoolExp>>
  access_secret_key?: InputMaybe<StringComparisonExp>
  active?: InputMaybe<BooleanComparisonExp>
  avatar?: InputMaybe<StringComparisonExp>
  bookings?: InputMaybe<BookingsBoolExp>
  bookings_aggregate?: InputMaybe<BookingsAggregateBoolExp>
  changed_avatar_manually?: InputMaybe<BooleanComparisonExp>
  changed_displayed_name_manually?: InputMaybe<BooleanComparisonExp>
  created_at?: InputMaybe<TimestampComparisonExp>
  displayed_name?: InputMaybe<StringComparisonExp>
  email?: InputMaybe<StringComparisonExp>
  forgot_password_token?: InputMaybe<StringComparisonExp>
  momo_phone_number?: InputMaybe<BpcharComparisonExp>
  orders?: InputMaybe<OrdersBoolExp>
  orders_aggregate?: InputMaybe<OrdersAggregateBoolExp>
  otp?: InputMaybe<BpcharComparisonExp>
  password_hashed?: InputMaybe<StringComparisonExp>
  rooms?: InputMaybe<RoomsBoolExp>
  rooms_aggregate?: InputMaybe<RoomsAggregateBoolExp>
  sex?: InputMaybe<BooleanComparisonExp>
  threads?: InputMaybe<ThreadsBoolExp>
  threads_aggregate?: InputMaybe<ThreadsAggregateBoolExp>
  updated_at?: InputMaybe<TimestampComparisonExp>
  user_id?: InputMaybe<IntComparisonExp>
  users_rooms?: InputMaybe<UsersRoomsBoolExp>
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateBoolExp>
  verified_email?: InputMaybe<BooleanComparisonExp>
}

/** unique or primary key constraints on table "users" */
export const enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "momo_phone_number" */
  UsersMomoPhoneNumberKey = 'users_momo_phone_number_key',
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export interface UsersIncInput {
  user_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  access_secret_key?: InputMaybe<Scalars['String']>
  active?: InputMaybe<Scalars['Boolean']>
  avatar?: InputMaybe<Scalars['String']>
  bookings?: InputMaybe<BookingsArrRelInsertInput>
  changed_avatar_manually?: InputMaybe<Scalars['Boolean']>
  changed_displayed_name_manually?: InputMaybe<Scalars['Boolean']>
  created_at?: InputMaybe<Scalars['timestamp']>
  displayed_name?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  forgot_password_token?: InputMaybe<Scalars['String']>
  momo_phone_number?: InputMaybe<Scalars['bpchar']>
  orders?: InputMaybe<OrdersArrRelInsertInput>
  otp?: InputMaybe<Scalars['bpchar']>
  password_hashed?: InputMaybe<Scalars['String']>
  rooms?: InputMaybe<RoomsArrRelInsertInput>
  sex?: InputMaybe<Scalars['Boolean']>
  threads?: InputMaybe<ThreadsArrRelInsertInput>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user_id?: InputMaybe<Scalars['Int']>
  users_rooms?: InputMaybe<UsersRoomsArrRelInsertInput>
  verified_email?: InputMaybe<Scalars['Boolean']>
}

/** aggregate max on columns */
export interface UsersMaxFields {
  __typename?: 'users_max_fields'
  access_secret_key?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  displayed_name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  forgot_password_token?: Maybe<Scalars['String']>
  momo_phone_number?: Maybe<Scalars['bpchar']>
  otp?: Maybe<Scalars['bpchar']>
  password_hashed?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export interface UsersMinFields {
  __typename?: 'users_min_fields'
  access_secret_key?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  displayed_name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  forgot_password_token?: Maybe<Scalars['String']>
  momo_phone_number?: Maybe<Scalars['bpchar']>
  otp?: Maybe<Scalars['bpchar']>
  password_hashed?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "users" */
export interface UsersMutationResponse {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {
  data: UsersInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>
}

/** on_conflict condition type for table "users" */
export interface UsersOnConflict {
  constraint: UsersConstraint
  update_columns?: Array<UsersUpdateColumn>
  where?: InputMaybe<UsersBoolExp>
}

/** Ordering options when selecting data from "users". */
export interface UsersOrderBy {
  access_secret_key?: InputMaybe<OrderBy>
  active?: InputMaybe<OrderBy>
  avatar?: InputMaybe<OrderBy>
  bookings_aggregate?: InputMaybe<BookingsAggregateOrderBy>
  changed_avatar_manually?: InputMaybe<OrderBy>
  changed_displayed_name_manually?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  displayed_name?: InputMaybe<OrderBy>
  email?: InputMaybe<OrderBy>
  forgot_password_token?: InputMaybe<OrderBy>
  momo_phone_number?: InputMaybe<OrderBy>
  orders_aggregate?: InputMaybe<OrdersAggregateOrderBy>
  otp?: InputMaybe<OrderBy>
  password_hashed?: InputMaybe<OrderBy>
  rooms_aggregate?: InputMaybe<RoomsAggregateOrderBy>
  sex?: InputMaybe<OrderBy>
  threads_aggregate?: InputMaybe<ThreadsAggregateOrderBy>
  updated_at?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateOrderBy>
  verified_email?: InputMaybe<OrderBy>
}

/** primary key columns input for table: users */
export interface UsersPkColumnsInput {
  user_id: Scalars['Int']
}

/** columns and relationships of "users_rooms" */
export interface UsersRooms {
  __typename?: 'users_rooms'
  created_at: Scalars['timestamp']
  /** An object relationship */
  room: Rooms
  room_id: Scalars['Int']
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
  user_room_id: Scalars['Int']
}

/** aggregated selection of "users_rooms" */
export interface UsersRoomsAggregate {
  __typename?: 'users_rooms_aggregate'
  aggregate?: Maybe<UsersRoomsAggregateFields>
  nodes: Array<UsersRooms>
}

export interface UsersRoomsAggregateBoolExp {
  count?: InputMaybe<UsersRoomsAggregateBoolExpCount>
}

export interface UsersRoomsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<UsersRoomsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<UsersRoomsBoolExp>
  predicate: IntComparisonExp
}

/** aggregate fields of "users_rooms" */
export interface UsersRoomsAggregateFields {
  __typename?: 'users_rooms_aggregate_fields'
  avg?: Maybe<UsersRoomsAvgFields>
  count: Scalars['Int']
  max?: Maybe<UsersRoomsMaxFields>
  min?: Maybe<UsersRoomsMinFields>
  stddev?: Maybe<UsersRoomsStddevFields>
  stddev_pop?: Maybe<UsersRoomsStddevPopFields>
  stddev_samp?: Maybe<UsersRoomsStddevSampFields>
  sum?: Maybe<UsersRoomsSumFields>
  var_pop?: Maybe<UsersRoomsVarPopFields>
  var_samp?: Maybe<UsersRoomsVarSampFields>
  variance?: Maybe<UsersRoomsVarianceFields>
}

/** aggregate fields of "users_rooms" */
export interface UsersRoomsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UsersRoomsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_rooms" */
export interface UsersRoomsAggregateOrderBy {
  avg?: InputMaybe<UsersRoomsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<UsersRoomsMaxOrderBy>
  min?: InputMaybe<UsersRoomsMinOrderBy>
  stddev?: InputMaybe<UsersRoomsStddevOrderBy>
  stddev_pop?: InputMaybe<UsersRoomsStddevPopOrderBy>
  stddev_samp?: InputMaybe<UsersRoomsStddevSampOrderBy>
  sum?: InputMaybe<UsersRoomsSumOrderBy>
  var_pop?: InputMaybe<UsersRoomsVarPopOrderBy>
  var_samp?: InputMaybe<UsersRoomsVarSampOrderBy>
  variance?: InputMaybe<UsersRoomsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "users_rooms" */
export interface UsersRoomsArrRelInsertInput {
  data: Array<UsersRoomsInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<UsersRoomsOnConflict>
}

/** aggregate avg on columns */
export interface UsersRoomsAvgFields {
  __typename?: 'users_rooms_avg_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "users_rooms" */
export interface UsersRoomsAvgOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "users_rooms". All fields are combined with a logical 'AND'. */
export interface UsersRoomsBoolExp {
  _and?: InputMaybe<Array<UsersRoomsBoolExp>>
  _not?: InputMaybe<UsersRoomsBoolExp>
  _or?: InputMaybe<Array<UsersRoomsBoolExp>>
  created_at?: InputMaybe<TimestampComparisonExp>
  room?: InputMaybe<RoomsBoolExp>
  room_id?: InputMaybe<IntComparisonExp>
  user?: InputMaybe<UsersBoolExp>
  user_id?: InputMaybe<IntComparisonExp>
  user_room_id?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "users_rooms" */
export const enum UsersRoomsConstraint {
  /** unique or primary key constraint on columns "user_room_id" */
  UsersRoomsPkey = 'users_rooms_pkey'
}

/** input type for incrementing numeric columns in table "users_rooms" */
export interface UsersRoomsIncInput {
  room_id?: InputMaybe<Scalars['Int']>
  user_id?: InputMaybe<Scalars['Int']>
  user_room_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "users_rooms" */
export interface UsersRoomsInsertInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  room?: InputMaybe<RoomsObjRelInsertInput>
  room_id?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<UsersObjRelInsertInput>
  user_id?: InputMaybe<Scalars['Int']>
  user_room_id?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export interface UsersRoomsMaxFields {
  __typename?: 'users_rooms_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  room_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
  user_room_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "users_rooms" */
export interface UsersRoomsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface UsersRoomsMinFields {
  __typename?: 'users_rooms_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  room_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
  user_room_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "users_rooms" */
export interface UsersRoomsMinOrderBy {
  created_at?: InputMaybe<OrderBy>
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "users_rooms" */
export interface UsersRoomsMutationResponse {
  __typename?: 'users_rooms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<UsersRooms>
}

/** on_conflict condition type for table "users_rooms" */
export interface UsersRoomsOnConflict {
  constraint: UsersRoomsConstraint
  update_columns?: Array<UsersRoomsUpdateColumn>
  where?: InputMaybe<UsersRoomsBoolExp>
}

/** Ordering options when selecting data from "users_rooms". */
export interface UsersRoomsOrderBy {
  created_at?: InputMaybe<OrderBy>
  room?: InputMaybe<RoomsOrderBy>
  room_id?: InputMaybe<OrderBy>
  user?: InputMaybe<UsersOrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** primary key columns input for table: users_rooms */
export interface UsersRoomsPkColumnsInput {
  user_room_id: Scalars['Int']
}

/** select columns of table "users_rooms" */
export const enum UsersRoomsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRoomId = 'user_room_id'
}

/** input type for updating data in table "users_rooms" */
export interface UsersRoomsSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  room_id?: InputMaybe<Scalars['Int']>
  user_id?: InputMaybe<Scalars['Int']>
  user_room_id?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export interface UsersRoomsStddevFields {
  __typename?: 'users_rooms_stddev_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "users_rooms" */
export interface UsersRoomsStddevOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface UsersRoomsStddevPopFields {
  __typename?: 'users_rooms_stddev_pop_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "users_rooms" */
export interface UsersRoomsStddevPopOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface UsersRoomsStddevSampFields {
  __typename?: 'users_rooms_stddev_samp_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "users_rooms" */
export interface UsersRoomsStddevSampOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "users_rooms" */
export interface UsersRoomsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: UsersRoomsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface UsersRoomsStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>
  room_id?: InputMaybe<Scalars['Int']>
  user_id?: InputMaybe<Scalars['Int']>
  user_room_id?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export interface UsersRoomsSumFields {
  __typename?: 'users_rooms_sum_fields'
  room_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
  user_room_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "users_rooms" */
export interface UsersRoomsSumOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** update columns of table "users_rooms" */
export const enum UsersRoomsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRoomId = 'user_room_id'
}

export interface UsersRoomsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersRoomsIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersRoomsSetInput>
  where: UsersRoomsBoolExp
}

/** aggregate var_pop on columns */
export interface UsersRoomsVarPopFields {
  __typename?: 'users_rooms_var_pop_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "users_rooms" */
export interface UsersRoomsVarPopOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface UsersRoomsVarSampFields {
  __typename?: 'users_rooms_var_samp_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "users_rooms" */
export interface UsersRoomsVarSampOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface UsersRoomsVarianceFields {
  __typename?: 'users_rooms_variance_fields'
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
  user_room_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "users_rooms" */
export interface UsersRoomsVarianceOrderBy {
  room_id?: InputMaybe<OrderBy>
  user_id?: InputMaybe<OrderBy>
  user_room_id?: InputMaybe<OrderBy>
}

/** select columns of table "users" */
export const enum UsersSelectColumn {
  /** column name */
  AccessSecretKey = 'access_secret_key',
  /** column name */
  Active = 'active',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  ChangedAvatarManually = 'changed_avatar_manually',
  /** column name */
  ChangedDisplayedNameManually = 'changed_displayed_name_manually',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayedName = 'displayed_name',
  /** column name */
  Email = 'email',
  /** column name */
  ForgotPasswordToken = 'forgot_password_token',
  /** column name */
  MomoPhoneNumber = 'momo_phone_number',
  /** column name */
  Otp = 'otp',
  /** column name */
  PasswordHashed = 'password_hashed',
  /** column name */
  Sex = 'sex',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VerifiedEmail = 'verified_email'
}

/** input type for updating data in table "users" */
export interface UsersSetInput {
  access_secret_key?: InputMaybe<Scalars['String']>
  active?: InputMaybe<Scalars['Boolean']>
  avatar?: InputMaybe<Scalars['String']>
  changed_avatar_manually?: InputMaybe<Scalars['Boolean']>
  changed_displayed_name_manually?: InputMaybe<Scalars['Boolean']>
  created_at?: InputMaybe<Scalars['timestamp']>
  displayed_name?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  forgot_password_token?: InputMaybe<Scalars['String']>
  momo_phone_number?: InputMaybe<Scalars['bpchar']>
  otp?: InputMaybe<Scalars['bpchar']>
  password_hashed?: InputMaybe<Scalars['String']>
  sex?: InputMaybe<Scalars['Boolean']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user_id?: InputMaybe<Scalars['Int']>
  verified_email?: InputMaybe<Scalars['Boolean']>
}

/** aggregate stddev on columns */
export interface UsersStddevFields {
  __typename?: 'users_stddev_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface UsersStddevPopFields {
  __typename?: 'users_stddev_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface UsersStddevSampFields {
  __typename?: 'users_stddev_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "users" */
export interface UsersStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface UsersStreamCursorValueInput {
  access_secret_key?: InputMaybe<Scalars['String']>
  active?: InputMaybe<Scalars['Boolean']>
  avatar?: InputMaybe<Scalars['String']>
  changed_avatar_manually?: InputMaybe<Scalars['Boolean']>
  changed_displayed_name_manually?: InputMaybe<Scalars['Boolean']>
  created_at?: InputMaybe<Scalars['timestamp']>
  displayed_name?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  forgot_password_token?: InputMaybe<Scalars['String']>
  momo_phone_number?: InputMaybe<Scalars['bpchar']>
  otp?: InputMaybe<Scalars['bpchar']>
  password_hashed?: InputMaybe<Scalars['String']>
  sex?: InputMaybe<Scalars['Boolean']>
  updated_at?: InputMaybe<Scalars['timestamp']>
  user_id?: InputMaybe<Scalars['Int']>
  verified_email?: InputMaybe<Scalars['Boolean']>
}

/** aggregate sum on columns */
export interface UsersSumFields {
  __typename?: 'users_sum_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** update columns of table "users" */
export const enum UsersUpdateColumn {
  /** column name */
  AccessSecretKey = 'access_secret_key',
  /** column name */
  Active = 'active',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  ChangedAvatarManually = 'changed_avatar_manually',
  /** column name */
  ChangedDisplayedNameManually = 'changed_displayed_name_manually',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayedName = 'displayed_name',
  /** column name */
  Email = 'email',
  /** column name */
  ForgotPasswordToken = 'forgot_password_token',
  /** column name */
  MomoPhoneNumber = 'momo_phone_number',
  /** column name */
  Otp = 'otp',
  /** column name */
  PasswordHashed = 'password_hashed',
  /** column name */
  Sex = 'sex',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VerifiedEmail = 'verified_email'
}

export interface UsersUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>
  where: UsersBoolExp
}

/** aggregate var_pop on columns */
export interface UsersVarPopFields {
  __typename?: 'users_var_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface UsersVarSampFields {
  __typename?: 'users_var_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface UsersVarianceFields {
  __typename?: 'users_variance_fields'
  user_id?: Maybe<Scalars['Float']>
}
