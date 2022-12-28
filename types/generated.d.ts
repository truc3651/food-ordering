type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  float8: any;
  timestamp: any;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
interface BooleanComparisonExp {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
}

/** columns and relationships of "booking_order_options" */
interface BookingOrderOptions {
  __typename?: 'booking_order_options';
  /** An object relationship */
  booking?: Maybe<Bookings>;
  booking_id?: Maybe<Scalars['Int']>;
  booking_order_option_id: Scalars['Int'];
  /** An object relationship */
  order_option?: Maybe<OrderOptions>;
  order_option_id?: Maybe<Scalars['Int']>;
}

/** aggregated selection of "booking_order_options" */
interface BookingOrderOptionsAggregate {
  __typename?: 'booking_order_options_aggregate';
  aggregate?: Maybe<BookingOrderOptionsAggregateFields>;
  nodes: Array<BookingOrderOptions>;
}

interface BookingOrderOptionsAggregateBoolExp {
  count?: InputMaybe<BookingOrderOptionsAggregateBoolExpCount>;
}

interface BookingOrderOptionsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingOrderOptionsBoolExp>;
  predicate: IntComparisonExp;
}

/** aggregate fields of "booking_order_options" */
interface BookingOrderOptionsAggregateFields {
  __typename?: 'booking_order_options_aggregate_fields';
  avg?: Maybe<BookingOrderOptionsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BookingOrderOptionsMaxFields>;
  min?: Maybe<BookingOrderOptionsMinFields>;
  stddev?: Maybe<BookingOrderOptionsStddevFields>;
  stddev_pop?: Maybe<BookingOrderOptionsStddevPopFields>;
  stddev_samp?: Maybe<BookingOrderOptionsStddevSampFields>;
  sum?: Maybe<BookingOrderOptionsSumFields>;
  var_pop?: Maybe<BookingOrderOptionsVarPopFields>;
  var_samp?: Maybe<BookingOrderOptionsVarSampFields>;
  variance?: Maybe<BookingOrderOptionsVarianceFields>;
}


/** aggregate fields of "booking_order_options" */
interface BookingOrderOptionsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "booking_order_options" */
interface BookingOrderOptionsAggregateOrderBy {
  avg?: InputMaybe<BookingOrderOptionsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<BookingOrderOptionsMaxOrderBy>;
  min?: InputMaybe<BookingOrderOptionsMinOrderBy>;
  stddev?: InputMaybe<BookingOrderOptionsStddevOrderBy>;
  stddev_pop?: InputMaybe<BookingOrderOptionsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<BookingOrderOptionsStddevSampOrderBy>;
  sum?: InputMaybe<BookingOrderOptionsSumOrderBy>;
  var_pop?: InputMaybe<BookingOrderOptionsVarPopOrderBy>;
  var_samp?: InputMaybe<BookingOrderOptionsVarSampOrderBy>;
  variance?: InputMaybe<BookingOrderOptionsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "booking_order_options" */
interface BookingOrderOptionsArrRelInsertInput {
  data: Array<BookingOrderOptionsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<BookingOrderOptionsOnConflict>;
}

/** aggregate avg on columns */
interface BookingOrderOptionsAvgFields {
  __typename?: 'booking_order_options_avg_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "booking_order_options" */
interface BookingOrderOptionsAvgOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "booking_order_options". All fields are combined with a logical 'AND'. */
interface BookingOrderOptionsBoolExp {
  _and?: InputMaybe<Array<BookingOrderOptionsBoolExp>>;
  _not?: InputMaybe<BookingOrderOptionsBoolExp>;
  _or?: InputMaybe<Array<BookingOrderOptionsBoolExp>>;
  booking?: InputMaybe<BookingsBoolExp>;
  booking_id?: InputMaybe<IntComparisonExp>;
  booking_order_option_id?: InputMaybe<IntComparisonExp>;
  order_option?: InputMaybe<OrderOptionsBoolExp>;
  order_option_id?: InputMaybe<IntComparisonExp>;
}

/** unique or primary key constraints on table "booking_order_options" */
enum BookingOrderOptionsConstraint {
  /** unique or primary key constraint on columns "booking_order_option_id" */
  BookingOrderOptionsPkey = 'booking_order_options_pkey'
}

/** input type for incrementing numeric columns in table "booking_order_options" */
interface BookingOrderOptionsIncInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  booking_order_option_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "booking_order_options" */
interface BookingOrderOptionsInsertInput {
  booking?: InputMaybe<BookingsObjRelInsertInput>;
  booking_id?: InputMaybe<Scalars['Int']>;
  booking_order_option_id?: InputMaybe<Scalars['Int']>;
  order_option?: InputMaybe<OrderOptionsObjRelInsertInput>;
  order_option_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate max on columns */
interface BookingOrderOptionsMaxFields {
  __typename?: 'booking_order_options_max_fields';
  booking_id?: Maybe<Scalars['Int']>;
  booking_order_option_id?: Maybe<Scalars['Int']>;
  order_option_id?: Maybe<Scalars['Int']>;
}

/** order by max() on columns of table "booking_order_options" */
interface BookingOrderOptionsMaxOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface BookingOrderOptionsMinFields {
  __typename?: 'booking_order_options_min_fields';
  booking_id?: Maybe<Scalars['Int']>;
  booking_order_option_id?: Maybe<Scalars['Int']>;
  order_option_id?: Maybe<Scalars['Int']>;
}

/** order by min() on columns of table "booking_order_options" */
interface BookingOrderOptionsMinOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "booking_order_options" */
interface BookingOrderOptionsMutationResponse {
  __typename?: 'booking_order_options_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BookingOrderOptions>;
}

/** on_conflict condition type for table "booking_order_options" */
interface BookingOrderOptionsOnConflict {
  constraint: BookingOrderOptionsConstraint;
  update_columns?: Array<BookingOrderOptionsUpdateColumn>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}

/** Ordering options when selecting data from "booking_order_options". */
interface BookingOrderOptionsOrderBy {
  booking?: InputMaybe<BookingsOrderBy>;
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option?: InputMaybe<OrderOptionsOrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: booking_order_options */
interface BookingOrderOptionsPkColumnsInput {
  booking_order_option_id: Scalars['Int'];
}

/** select columns of table "booking_order_options" */
enum BookingOrderOptionsSelectColumn {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingOrderOptionId = 'booking_order_option_id',
  /** column name */
  OrderOptionId = 'order_option_id'
}

/** input type for updating data in table "booking_order_options" */
interface BookingOrderOptionsSetInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  booking_order_option_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate stddev on columns */
interface BookingOrderOptionsStddevFields {
  __typename?: 'booking_order_options_stddev_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "booking_order_options" */
interface BookingOrderOptionsStddevOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface BookingOrderOptionsStddevPopFields {
  __typename?: 'booking_order_options_stddev_pop_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "booking_order_options" */
interface BookingOrderOptionsStddevPopOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface BookingOrderOptionsStddevSampFields {
  __typename?: 'booking_order_options_stddev_samp_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "booking_order_options" */
interface BookingOrderOptionsStddevSampOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "booking_order_options" */
interface BookingOrderOptionsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: BookingOrderOptionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface BookingOrderOptionsStreamCursorValueInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  booking_order_option_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate sum on columns */
interface BookingOrderOptionsSumFields {
  __typename?: 'booking_order_options_sum_fields';
  booking_id?: Maybe<Scalars['Int']>;
  booking_order_option_id?: Maybe<Scalars['Int']>;
  order_option_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "booking_order_options" */
interface BookingOrderOptionsSumOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** update columns of table "booking_order_options" */
enum BookingOrderOptionsUpdateColumn {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingOrderOptionId = 'booking_order_option_id',
  /** column name */
  OrderOptionId = 'order_option_id'
}

interface BookingOrderOptionsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BookingOrderOptionsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BookingOrderOptionsSetInput>;
  where: BookingOrderOptionsBoolExp;
}

/** aggregate var_pop on columns */
interface BookingOrderOptionsVarPopFields {
  __typename?: 'booking_order_options_var_pop_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "booking_order_options" */
interface BookingOrderOptionsVarPopOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface BookingOrderOptionsVarSampFields {
  __typename?: 'booking_order_options_var_samp_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "booking_order_options" */
interface BookingOrderOptionsVarSampOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface BookingOrderOptionsVarianceFields {
  __typename?: 'booking_order_options_variance_fields';
  booking_id?: Maybe<Scalars['Float']>;
  booking_order_option_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "booking_order_options" */
interface BookingOrderOptionsVarianceOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_option_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
}

/** columns and relationships of "bookings" */
interface Bookings {
  __typename?: 'bookings';
  booking_id: Scalars['Int'];
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>;
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate;
  created_at: Scalars['timestamp'];
  /** An object relationship */
  food: Food;
  food_id: Scalars['Int'];
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['float8']>;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
}


/** columns and relationships of "bookings" */
interface BookingsBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


/** columns and relationships of "bookings" */
interface BookingsBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}

/** aggregated selection of "bookings" */
interface BookingsAggregate {
  __typename?: 'bookings_aggregate';
  aggregate?: Maybe<BookingsAggregateFields>;
  nodes: Array<Bookings>;
}

interface BookingsAggregateBoolExp {
  avg?: InputMaybe<BookingsAggregateBoolExpAvg>;
  corr?: InputMaybe<BookingsAggregateBoolExpCorr>;
  count?: InputMaybe<BookingsAggregateBoolExpCount>;
  covar_samp?: InputMaybe<BookingsAggregateBoolExpCovarSamp>;
  max?: InputMaybe<BookingsAggregateBoolExpMax>;
  min?: InputMaybe<BookingsAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<BookingsAggregateBoolExpStddevSamp>;
  sum?: InputMaybe<BookingsAggregateBoolExpSum>;
  var_samp?: InputMaybe<BookingsAggregateBoolExpVarSamp>;
}

interface BookingsAggregateBoolExpAvg {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpCorr {
  arguments: BookingsAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpCorrArguments {
  X: BookingsSelectColumnBookingsAggregateBoolExpCorrArgumentsColumns;
  Y: BookingsSelectColumnBookingsAggregateBoolExpCorrArgumentsColumns;
}

interface BookingsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<BookingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: IntComparisonExp;
}

interface BookingsAggregateBoolExpCovarSamp {
  arguments: BookingsAggregateBoolExpCovarSampArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpCovarSampArguments {
  X: BookingsSelectColumnBookingsAggregateBoolExpCovarSampArgumentsColumns;
  Y: BookingsSelectColumnBookingsAggregateBoolExpCovarSampArgumentsColumns;
}

interface BookingsAggregateBoolExpMax {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpMin {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpStddevSamp {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpStddevSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpSum {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface BookingsAggregateBoolExpVarSamp {
  arguments: BookingsSelectColumnBookingsAggregateBoolExpVarSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BookingsBoolExp>;
  predicate: Float8ComparisonExp;
}

/** aggregate fields of "bookings" */
interface BookingsAggregateFields {
  __typename?: 'bookings_aggregate_fields';
  avg?: Maybe<BookingsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BookingsMaxFields>;
  min?: Maybe<BookingsMinFields>;
  stddev?: Maybe<BookingsStddevFields>;
  stddev_pop?: Maybe<BookingsStddevPopFields>;
  stddev_samp?: Maybe<BookingsStddevSampFields>;
  sum?: Maybe<BookingsSumFields>;
  var_pop?: Maybe<BookingsVarPopFields>;
  var_samp?: Maybe<BookingsVarSampFields>;
  variance?: Maybe<BookingsVarianceFields>;
}


/** aggregate fields of "bookings" */
interface BookingsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BookingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "bookings" */
interface BookingsAggregateOrderBy {
  avg?: InputMaybe<BookingsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<BookingsMaxOrderBy>;
  min?: InputMaybe<BookingsMinOrderBy>;
  stddev?: InputMaybe<BookingsStddevOrderBy>;
  stddev_pop?: InputMaybe<BookingsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<BookingsStddevSampOrderBy>;
  sum?: InputMaybe<BookingsSumOrderBy>;
  var_pop?: InputMaybe<BookingsVarPopOrderBy>;
  var_samp?: InputMaybe<BookingsVarSampOrderBy>;
  variance?: InputMaybe<BookingsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "bookings" */
interface BookingsArrRelInsertInput {
  data: Array<BookingsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<BookingsOnConflict>;
}

/** aggregate avg on columns */
interface BookingsAvgFields {
  __typename?: 'bookings_avg_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "bookings" */
interface BookingsAvgOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "bookings". All fields are combined with a logical 'AND'. */
interface BookingsBoolExp {
  _and?: InputMaybe<Array<BookingsBoolExp>>;
  _not?: InputMaybe<BookingsBoolExp>;
  _or?: InputMaybe<Array<BookingsBoolExp>>;
  booking_id?: InputMaybe<IntComparisonExp>;
  booking_order_options?: InputMaybe<BookingOrderOptionsBoolExp>;
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateBoolExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  food?: InputMaybe<FoodBoolExp>;
  food_id?: InputMaybe<IntComparisonExp>;
  order?: InputMaybe<OrdersBoolExp>;
  order_id?: InputMaybe<IntComparisonExp>;
  total_price?: InputMaybe<Float8ComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<IntComparisonExp>;
}

/** unique or primary key constraints on table "bookings" */
enum BookingsConstraint {
  /** unique or primary key constraint on columns "booking_id" */
  BookingsPkey = 'bookings_pkey'
}

/** input type for incrementing numeric columns in table "bookings" */
interface BookingsIncInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  food_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['float8']>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "bookings" */
interface BookingsInsertInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  booking_order_options?: InputMaybe<BookingOrderOptionsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  food?: InputMaybe<FoodObjRelInsertInput>;
  food_id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrdersObjRelInsertInput>;
  order_id?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate max on columns */
interface BookingsMaxFields {
  __typename?: 'bookings_max_fields';
  booking_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  food_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** order by max() on columns of table "bookings" */
interface BookingsMaxOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface BookingsMinFields {
  __typename?: 'bookings_min_fields';
  booking_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  food_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** order by min() on columns of table "bookings" */
interface BookingsMinOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "bookings" */
interface BookingsMutationResponse {
  __typename?: 'bookings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bookings>;
}

/** input type for inserting object relation for remote table "bookings" */
interface BookingsObjRelInsertInput {
  data: BookingsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<BookingsOnConflict>;
}

/** on_conflict condition type for table "bookings" */
interface BookingsOnConflict {
  constraint: BookingsConstraint;
  update_columns?: Array<BookingsUpdateColumn>;
  where?: InputMaybe<BookingsBoolExp>;
}

/** Ordering options when selecting data from "bookings". */
interface BookingsOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  food?: InputMaybe<FoodOrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrdersOrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: bookings */
interface BookingsPkColumnsInput {
  booking_id: Scalars['Int'];
}

/** select columns of table "bookings" */
enum BookingsSelectColumn {
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
enum BookingsSelectColumnBookingsAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_corr_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_max_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_min_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpMinArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_sum_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpSumArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** select "bookings_aggregate_bool_exp_var_samp_arguments_columns" columns of table "bookings" */
enum BookingsSelectColumnBookingsAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  TotalPrice = 'total_price'
}

/** input type for updating data in table "bookings" */
interface BookingsSetInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  food_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate stddev on columns */
interface BookingsStddevFields {
  __typename?: 'bookings_stddev_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "bookings" */
interface BookingsStddevOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface BookingsStddevPopFields {
  __typename?: 'bookings_stddev_pop_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "bookings" */
interface BookingsStddevPopOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface BookingsStddevSampFields {
  __typename?: 'bookings_stddev_samp_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "bookings" */
interface BookingsStddevSampOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "bookings" */
interface BookingsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: BookingsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface BookingsStreamCursorValueInput {
  booking_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  food_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate sum on columns */
interface BookingsSumFields {
  __typename?: 'bookings_sum_fields';
  booking_id?: Maybe<Scalars['Int']>;
  food_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "bookings" */
interface BookingsSumOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** update columns of table "bookings" */
enum BookingsUpdateColumn {
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

interface BookingsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BookingsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BookingsSetInput>;
  where: BookingsBoolExp;
}

/** aggregate var_pop on columns */
interface BookingsVarPopFields {
  __typename?: 'bookings_var_pop_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "bookings" */
interface BookingsVarPopOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface BookingsVarSampFields {
  __typename?: 'bookings_var_samp_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "bookings" */
interface BookingsVarSampOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface BookingsVarianceFields {
  __typename?: 'bookings_variance_fields';
  booking_id?: Maybe<Scalars['Float']>;
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "bookings" */
interface BookingsVarianceOrderBy {
  booking_id?: InputMaybe<OrderBy>;
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
interface BpcharComparisonExp {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
}

/** columns and relationships of "configs" */
interface Configs {
  __typename?: 'configs';
  config_id: Scalars['Int'];
  room_capacity?: Maybe<Scalars['Int']>;
  room_duration?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['bpchar']>;
}

/** aggregated selection of "configs" */
interface ConfigsAggregate {
  __typename?: 'configs_aggregate';
  aggregate?: Maybe<ConfigsAggregateFields>;
  nodes: Array<Configs>;
}

/** aggregate fields of "configs" */
interface ConfigsAggregateFields {
  __typename?: 'configs_aggregate_fields';
  avg?: Maybe<ConfigsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ConfigsMaxFields>;
  min?: Maybe<ConfigsMinFields>;
  stddev?: Maybe<ConfigsStddevFields>;
  stddev_pop?: Maybe<ConfigsStddevPopFields>;
  stddev_samp?: Maybe<ConfigsStddevSampFields>;
  sum?: Maybe<ConfigsSumFields>;
  var_pop?: Maybe<ConfigsVarPopFields>;
  var_samp?: Maybe<ConfigsVarSampFields>;
  variance?: Maybe<ConfigsVarianceFields>;
}


/** aggregate fields of "configs" */
interface ConfigsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<ConfigsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
interface ConfigsAvgFields {
  __typename?: 'configs_avg_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "configs". All fields are combined with a logical 'AND'. */
interface ConfigsBoolExp {
  _and?: InputMaybe<Array<ConfigsBoolExp>>;
  _not?: InputMaybe<ConfigsBoolExp>;
  _or?: InputMaybe<Array<ConfigsBoolExp>>;
  config_id?: InputMaybe<IntComparisonExp>;
  room_capacity?: InputMaybe<IntComparisonExp>;
  room_duration?: InputMaybe<IntComparisonExp>;
  stage?: InputMaybe<BpcharComparisonExp>;
}

/** unique or primary key constraints on table "configs" */
enum ConfigsConstraint {
  /** unique or primary key constraint on columns "config_id" */
  ConfigsPkey = 'configs_pkey'
}

/** input type for incrementing numeric columns in table "configs" */
interface ConfigsIncInput {
  config_id?: InputMaybe<Scalars['Int']>;
  room_capacity?: InputMaybe<Scalars['Int']>;
  room_duration?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "configs" */
interface ConfigsInsertInput {
  config_id?: InputMaybe<Scalars['Int']>;
  room_capacity?: InputMaybe<Scalars['Int']>;
  room_duration?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['bpchar']>;
}

/** aggregate max on columns */
interface ConfigsMaxFields {
  __typename?: 'configs_max_fields';
  config_id?: Maybe<Scalars['Int']>;
  room_capacity?: Maybe<Scalars['Int']>;
  room_duration?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['bpchar']>;
}

/** aggregate min on columns */
interface ConfigsMinFields {
  __typename?: 'configs_min_fields';
  config_id?: Maybe<Scalars['Int']>;
  room_capacity?: Maybe<Scalars['Int']>;
  room_duration?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['bpchar']>;
}

/** response of any mutation on the table "configs" */
interface ConfigsMutationResponse {
  __typename?: 'configs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Configs>;
}

/** on_conflict condition type for table "configs" */
interface ConfigsOnConflict {
  constraint: ConfigsConstraint;
  update_columns?: Array<ConfigsUpdateColumn>;
  where?: InputMaybe<ConfigsBoolExp>;
}

/** Ordering options when selecting data from "configs". */
interface ConfigsOrderBy {
  config_id?: InputMaybe<OrderBy>;
  room_capacity?: InputMaybe<OrderBy>;
  room_duration?: InputMaybe<OrderBy>;
  stage?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: configs */
interface ConfigsPkColumnsInput {
  config_id: Scalars['Int'];
}

/** select columns of table "configs" */
enum ConfigsSelectColumn {
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
interface ConfigsSetInput {
  config_id?: InputMaybe<Scalars['Int']>;
  room_capacity?: InputMaybe<Scalars['Int']>;
  room_duration?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['bpchar']>;
}

/** aggregate stddev on columns */
interface ConfigsStddevFields {
  __typename?: 'configs_stddev_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
interface ConfigsStddevPopFields {
  __typename?: 'configs_stddev_pop_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
interface ConfigsStddevSampFields {
  __typename?: 'configs_stddev_samp_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** Streaming cursor of the table "configs" */
interface ConfigsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: ConfigsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface ConfigsStreamCursorValueInput {
  config_id?: InputMaybe<Scalars['Int']>;
  room_capacity?: InputMaybe<Scalars['Int']>;
  room_duration?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['bpchar']>;
}

/** aggregate sum on columns */
interface ConfigsSumFields {
  __typename?: 'configs_sum_fields';
  config_id?: Maybe<Scalars['Int']>;
  room_capacity?: Maybe<Scalars['Int']>;
  room_duration?: Maybe<Scalars['Int']>;
}

/** update columns of table "configs" */
enum ConfigsUpdateColumn {
  /** column name */
  ConfigId = 'config_id',
  /** column name */
  RoomCapacity = 'room_capacity',
  /** column name */
  RoomDuration = 'room_duration',
  /** column name */
  Stage = 'stage'
}

interface ConfigsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ConfigsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ConfigsSetInput>;
  where: ConfigsBoolExp;
}

/** aggregate var_pop on columns */
interface ConfigsVarPopFields {
  __typename?: 'configs_var_pop_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
interface ConfigsVarSampFields {
  __typename?: 'configs_var_samp_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
interface ConfigsVarianceFields {
  __typename?: 'configs_variance_fields';
  config_id?: Maybe<Scalars['Float']>;
  room_capacity?: Maybe<Scalars['Float']>;
  room_duration?: Maybe<Scalars['Float']>;
}

/** ordering argument of a cursor */
enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
interface Float8ComparisonExp {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
}

/** columns and relationships of "food" */
interface Food {
  __typename?: 'food';
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate;
  food_id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id?: Maybe<Scalars['Int']>;
  price: Scalars['float8'];
  thumbnail?: Maybe<Scalars['String']>;
}


/** columns and relationships of "food" */
interface FoodBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


/** columns and relationships of "food" */
interface FoodBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}

/** aggregated selection of "food" */
interface FoodAggregate {
  __typename?: 'food_aggregate';
  aggregate?: Maybe<FoodAggregateFields>;
  nodes: Array<Food>;
}

interface FoodAggregateBoolExp {
  avg?: InputMaybe<FoodAggregateBoolExpAvg>;
  corr?: InputMaybe<FoodAggregateBoolExpCorr>;
  count?: InputMaybe<FoodAggregateBoolExpCount>;
  covar_samp?: InputMaybe<FoodAggregateBoolExpCovarSamp>;
  max?: InputMaybe<FoodAggregateBoolExpMax>;
  min?: InputMaybe<FoodAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<FoodAggregateBoolExpStddevSamp>;
  sum?: InputMaybe<FoodAggregateBoolExpSum>;
  var_samp?: InputMaybe<FoodAggregateBoolExpVarSamp>;
}

interface FoodAggregateBoolExpAvg {
  arguments: FoodSelectColumnFoodAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpCorr {
  arguments: FoodAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpCorrArguments {
  X: FoodSelectColumnFoodAggregateBoolExpCorrArgumentsColumns;
  Y: FoodSelectColumnFoodAggregateBoolExpCorrArgumentsColumns;
}

interface FoodAggregateBoolExpCount {
  arguments?: InputMaybe<Array<FoodSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: IntComparisonExp;
}

interface FoodAggregateBoolExpCovarSamp {
  arguments: FoodAggregateBoolExpCovarSampArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpCovarSampArguments {
  X: FoodSelectColumnFoodAggregateBoolExpCovarSampArgumentsColumns;
  Y: FoodSelectColumnFoodAggregateBoolExpCovarSampArgumentsColumns;
}

interface FoodAggregateBoolExpMax {
  arguments: FoodSelectColumnFoodAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpMin {
  arguments: FoodSelectColumnFoodAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpStddevSamp {
  arguments: FoodSelectColumnFoodAggregateBoolExpStddevSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpSum {
  arguments: FoodSelectColumnFoodAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

interface FoodAggregateBoolExpVarSamp {
  arguments: FoodSelectColumnFoodAggregateBoolExpVarSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FoodBoolExp>;
  predicate: Float8ComparisonExp;
}

/** aggregate fields of "food" */
interface FoodAggregateFields {
  __typename?: 'food_aggregate_fields';
  avg?: Maybe<FoodAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FoodMaxFields>;
  min?: Maybe<FoodMinFields>;
  stddev?: Maybe<FoodStddevFields>;
  stddev_pop?: Maybe<FoodStddevPopFields>;
  stddev_samp?: Maybe<FoodStddevSampFields>;
  sum?: Maybe<FoodSumFields>;
  var_pop?: Maybe<FoodVarPopFields>;
  var_samp?: Maybe<FoodVarSampFields>;
  variance?: Maybe<FoodVarianceFields>;
}


/** aggregate fields of "food" */
interface FoodAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<FoodSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "food" */
interface FoodAggregateOrderBy {
  avg?: InputMaybe<FoodAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FoodMaxOrderBy>;
  min?: InputMaybe<FoodMinOrderBy>;
  stddev?: InputMaybe<FoodStddevOrderBy>;
  stddev_pop?: InputMaybe<FoodStddevPopOrderBy>;
  stddev_samp?: InputMaybe<FoodStddevSampOrderBy>;
  sum?: InputMaybe<FoodSumOrderBy>;
  var_pop?: InputMaybe<FoodVarPopOrderBy>;
  var_samp?: InputMaybe<FoodVarSampOrderBy>;
  variance?: InputMaybe<FoodVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "food" */
interface FoodArrRelInsertInput {
  data: Array<FoodInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<FoodOnConflict>;
}

/** aggregate avg on columns */
interface FoodAvgFields {
  __typename?: 'food_avg_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "food" */
interface FoodAvgOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "food". All fields are combined with a logical 'AND'. */
interface FoodBoolExp {
  _and?: InputMaybe<Array<FoodBoolExp>>;
  _not?: InputMaybe<FoodBoolExp>;
  _or?: InputMaybe<Array<FoodBoolExp>>;
  bookings?: InputMaybe<BookingsBoolExp>;
  bookings_aggregate?: InputMaybe<BookingsAggregateBoolExp>;
  food_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<OrdersBoolExp>;
  order_id?: InputMaybe<IntComparisonExp>;
  price?: InputMaybe<Float8ComparisonExp>;
  thumbnail?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "food" */
enum FoodConstraint {
  /** unique or primary key constraint on columns "food_id" */
  FoodPkey = 'food_pkey'
}

/** input type for incrementing numeric columns in table "food" */
interface FoodIncInput {
  food_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
}

/** input type for inserting data into table "food" */
interface FoodInsertInput {
  bookings?: InputMaybe<BookingsArrRelInsertInput>;
  food_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<OrdersObjRelInsertInput>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  thumbnail?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
interface FoodMaxFields {
  __typename?: 'food_max_fields';
  food_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  thumbnail?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "food" */
interface FoodMaxOrderBy {
  food_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface FoodMinFields {
  __typename?: 'food_min_fields';
  food_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  thumbnail?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "food" */
interface FoodMinOrderBy {
  food_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "food" */
interface FoodMutationResponse {
  __typename?: 'food_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Food>;
}

/** input type for inserting object relation for remote table "food" */
interface FoodObjRelInsertInput {
  data: FoodInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<FoodOnConflict>;
}

/** on_conflict condition type for table "food" */
interface FoodOnConflict {
  constraint: FoodConstraint;
  update_columns?: Array<FoodUpdateColumn>;
  where?: InputMaybe<FoodBoolExp>;
}

/** Ordering options when selecting data from "food". */
interface FoodOrderBy {
  bookings_aggregate?: InputMaybe<BookingsAggregateOrderBy>;
  food_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrdersOrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: food */
interface FoodPkColumnsInput {
  food_id: Scalars['Int'];
}

/** select columns of table "food" */
enum FoodSelectColumn {
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
enum FoodSelectColumnFoodAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_corr_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_max_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_min_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_sum_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "food_aggregate_bool_exp_var_samp_arguments_columns" columns of table "food" */
enum FoodSelectColumnFoodAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "food" */
interface FoodSetInput {
  food_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  thumbnail?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
interface FoodStddevFields {
  __typename?: 'food_stddev_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "food" */
interface FoodStddevOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface FoodStddevPopFields {
  __typename?: 'food_stddev_pop_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "food" */
interface FoodStddevPopOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface FoodStddevSampFields {
  __typename?: 'food_stddev_samp_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "food" */
interface FoodStddevSampOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "food" */
interface FoodStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: FoodStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface FoodStreamCursorValueInput {
  food_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  thumbnail?: InputMaybe<Scalars['String']>;
}

/** aggregate sum on columns */
interface FoodSumFields {
  __typename?: 'food_sum_fields';
  food_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
}

/** order by sum() on columns of table "food" */
interface FoodSumOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** update columns of table "food" */
enum FoodUpdateColumn {
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

interface FoodUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FoodIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FoodSetInput>;
  where: FoodBoolExp;
}

/** aggregate var_pop on columns */
interface FoodVarPopFields {
  __typename?: 'food_var_pop_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "food" */
interface FoodVarPopOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface FoodVarSampFields {
  __typename?: 'food_var_samp_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "food" */
interface FoodVarSampOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface FoodVarianceFields {
  __typename?: 'food_variance_fields';
  food_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "food" */
interface FoodVarianceOrderBy {
  food_id?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** mutation root */
interface MutationRoot {
  __typename?: 'mutation_root';
  /** delete data from the table: "booking_order_options" */
  delete_booking_order_options?: Maybe<BookingOrderOptionsMutationResponse>;
  /** delete single row from the table: "booking_order_options" */
  delete_booking_order_options_by_pk?: Maybe<BookingOrderOptions>;
  /** delete data from the table: "bookings" */
  delete_bookings?: Maybe<BookingsMutationResponse>;
  /** delete single row from the table: "bookings" */
  delete_bookings_by_pk?: Maybe<Bookings>;
  /** delete data from the table: "configs" */
  delete_configs?: Maybe<ConfigsMutationResponse>;
  /** delete single row from the table: "configs" */
  delete_configs_by_pk?: Maybe<Configs>;
  /** delete data from the table: "food" */
  delete_food?: Maybe<FoodMutationResponse>;
  /** delete single row from the table: "food" */
  delete_food_by_pk?: Maybe<Food>;
  /** delete data from the table: "order_options" */
  delete_order_options?: Maybe<OrderOptionsMutationResponse>;
  /** delete single row from the table: "order_options" */
  delete_order_options_by_pk?: Maybe<OrderOptions>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<OrdersMutationResponse>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<RoomsMutationResponse>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "threads" */
  delete_threads?: Maybe<ThreadsMutationResponse>;
  /** delete single row from the table: "threads" */
  delete_threads_by_pk?: Maybe<Threads>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_rooms" */
  delete_users_rooms?: Maybe<UsersRoomsMutationResponse>;
  /** delete single row from the table: "users_rooms" */
  delete_users_rooms_by_pk?: Maybe<UsersRooms>;
  /** insert data into the table: "booking_order_options" */
  insert_booking_order_options?: Maybe<BookingOrderOptionsMutationResponse>;
  /** insert a single row into the table: "booking_order_options" */
  insert_booking_order_options_one?: Maybe<BookingOrderOptions>;
  /** insert data into the table: "bookings" */
  insert_bookings?: Maybe<BookingsMutationResponse>;
  /** insert a single row into the table: "bookings" */
  insert_bookings_one?: Maybe<Bookings>;
  /** insert data into the table: "configs" */
  insert_configs?: Maybe<ConfigsMutationResponse>;
  /** insert a single row into the table: "configs" */
  insert_configs_one?: Maybe<Configs>;
  /** insert data into the table: "food" */
  insert_food?: Maybe<FoodMutationResponse>;
  /** insert a single row into the table: "food" */
  insert_food_one?: Maybe<Food>;
  /** insert data into the table: "order_options" */
  insert_order_options?: Maybe<OrderOptionsMutationResponse>;
  /** insert a single row into the table: "order_options" */
  insert_order_options_one?: Maybe<OrderOptions>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<OrdersMutationResponse>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<RoomsMutationResponse>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "threads" */
  insert_threads?: Maybe<ThreadsMutationResponse>;
  /** insert a single row into the table: "threads" */
  insert_threads_one?: Maybe<Threads>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "users_rooms" */
  insert_users_rooms?: Maybe<UsersRoomsMutationResponse>;
  /** insert a single row into the table: "users_rooms" */
  insert_users_rooms_one?: Maybe<UsersRooms>;
  /** update data of the table: "booking_order_options" */
  update_booking_order_options?: Maybe<BookingOrderOptionsMutationResponse>;
  /** update single row of the table: "booking_order_options" */
  update_booking_order_options_by_pk?: Maybe<BookingOrderOptions>;
  /** update multiples rows of table: "booking_order_options" */
  update_booking_order_options_many?: Maybe<Array<Maybe<BookingOrderOptionsMutationResponse>>>;
  /** update data of the table: "bookings" */
  update_bookings?: Maybe<BookingsMutationResponse>;
  /** update single row of the table: "bookings" */
  update_bookings_by_pk?: Maybe<Bookings>;
  /** update multiples rows of table: "bookings" */
  update_bookings_many?: Maybe<Array<Maybe<BookingsMutationResponse>>>;
  /** update data of the table: "configs" */
  update_configs?: Maybe<ConfigsMutationResponse>;
  /** update single row of the table: "configs" */
  update_configs_by_pk?: Maybe<Configs>;
  /** update multiples rows of table: "configs" */
  update_configs_many?: Maybe<Array<Maybe<ConfigsMutationResponse>>>;
  /** update data of the table: "food" */
  update_food?: Maybe<FoodMutationResponse>;
  /** update single row of the table: "food" */
  update_food_by_pk?: Maybe<Food>;
  /** update multiples rows of table: "food" */
  update_food_many?: Maybe<Array<Maybe<FoodMutationResponse>>>;
  /** update data of the table: "order_options" */
  update_order_options?: Maybe<OrderOptionsMutationResponse>;
  /** update single row of the table: "order_options" */
  update_order_options_by_pk?: Maybe<OrderOptions>;
  /** update multiples rows of table: "order_options" */
  update_order_options_many?: Maybe<Array<Maybe<OrderOptionsMutationResponse>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<OrdersMutationResponse>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<OrdersMutationResponse>>>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<RoomsMutationResponse>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update multiples rows of table: "rooms" */
  update_rooms_many?: Maybe<Array<Maybe<RoomsMutationResponse>>>;
  /** update data of the table: "threads" */
  update_threads?: Maybe<ThreadsMutationResponse>;
  /** update single row of the table: "threads" */
  update_threads_by_pk?: Maybe<Threads>;
  /** update multiples rows of table: "threads" */
  update_threads_many?: Maybe<Array<Maybe<ThreadsMutationResponse>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "users_rooms" */
  update_users_rooms?: Maybe<UsersRoomsMutationResponse>;
  /** update single row of the table: "users_rooms" */
  update_users_rooms_by_pk?: Maybe<UsersRooms>;
  /** update multiples rows of table: "users_rooms" */
  update_users_rooms_many?: Maybe<Array<Maybe<UsersRoomsMutationResponse>>>;
}


/** mutation root */
interface MutationRootDeleteBookingOrderOptionsArgs {
  where: BookingOrderOptionsBoolExp;
}


/** mutation root */
interface MutationRootDeleteBookingOrderOptionsByPkArgs {
  booking_order_option_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteBookingsArgs {
  where: BookingsBoolExp;
}


/** mutation root */
interface MutationRootDeleteBookingsByPkArgs {
  booking_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteConfigsArgs {
  where: ConfigsBoolExp;
}


/** mutation root */
interface MutationRootDeleteConfigsByPkArgs {
  config_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteFoodArgs {
  where: FoodBoolExp;
}


/** mutation root */
interface MutationRootDeleteFoodByPkArgs {
  food_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteOrderOptionsArgs {
  where: OrderOptionsBoolExp;
}


/** mutation root */
interface MutationRootDeleteOrderOptionsByPkArgs {
  order_option_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteOrdersArgs {
  where: OrdersBoolExp;
}


/** mutation root */
interface MutationRootDeleteOrdersByPkArgs {
  order_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteRoomsArgs {
  where: RoomsBoolExp;
}


/** mutation root */
interface MutationRootDeleteRoomsByPkArgs {
  room_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteThreadsArgs {
  where: ThreadsBoolExp;
}


/** mutation root */
interface MutationRootDeleteThreadsByPkArgs {
  thread_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteUsersArgs {
  where: UsersBoolExp;
}


/** mutation root */
interface MutationRootDeleteUsersByPkArgs {
  user_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootDeleteUsersRoomsArgs {
  where: UsersRoomsBoolExp;
}


/** mutation root */
interface MutationRootDeleteUsersRoomsByPkArgs {
  user_room_id: Scalars['Int'];
}


/** mutation root */
interface MutationRootInsertBookingOrderOptionsArgs {
  objects: Array<BookingOrderOptionsInsertInput>;
  on_conflict?: InputMaybe<BookingOrderOptionsOnConflict>;
}


/** mutation root */
interface MutationRootInsertBookingOrderOptionsOneArgs {
  object: BookingOrderOptionsInsertInput;
  on_conflict?: InputMaybe<BookingOrderOptionsOnConflict>;
}


/** mutation root */
interface MutationRootInsertBookingsArgs {
  objects: Array<BookingsInsertInput>;
  on_conflict?: InputMaybe<BookingsOnConflict>;
}


/** mutation root */
interface MutationRootInsertBookingsOneArgs {
  object: BookingsInsertInput;
  on_conflict?: InputMaybe<BookingsOnConflict>;
}


/** mutation root */
interface MutationRootInsertConfigsArgs {
  objects: Array<ConfigsInsertInput>;
  on_conflict?: InputMaybe<ConfigsOnConflict>;
}


/** mutation root */
interface MutationRootInsertConfigsOneArgs {
  object: ConfigsInsertInput;
  on_conflict?: InputMaybe<ConfigsOnConflict>;
}


/** mutation root */
interface MutationRootInsertFoodArgs {
  objects: Array<FoodInsertInput>;
  on_conflict?: InputMaybe<FoodOnConflict>;
}


/** mutation root */
interface MutationRootInsertFoodOneArgs {
  object: FoodInsertInput;
  on_conflict?: InputMaybe<FoodOnConflict>;
}


/** mutation root */
interface MutationRootInsertOrderOptionsArgs {
  objects: Array<OrderOptionsInsertInput>;
  on_conflict?: InputMaybe<OrderOptionsOnConflict>;
}


/** mutation root */
interface MutationRootInsertOrderOptionsOneArgs {
  object: OrderOptionsInsertInput;
  on_conflict?: InputMaybe<OrderOptionsOnConflict>;
}


/** mutation root */
interface MutationRootInsertOrdersArgs {
  objects: Array<OrdersInsertInput>;
  on_conflict?: InputMaybe<OrdersOnConflict>;
}


/** mutation root */
interface MutationRootInsertOrdersOneArgs {
  object: OrdersInsertInput;
  on_conflict?: InputMaybe<OrdersOnConflict>;
}


/** mutation root */
interface MutationRootInsertRoomsArgs {
  objects: Array<RoomsInsertInput>;
  on_conflict?: InputMaybe<RoomsOnConflict>;
}


/** mutation root */
interface MutationRootInsertRoomsOneArgs {
  object: RoomsInsertInput;
  on_conflict?: InputMaybe<RoomsOnConflict>;
}


/** mutation root */
interface MutationRootInsertThreadsArgs {
  objects: Array<ThreadsInsertInput>;
  on_conflict?: InputMaybe<ThreadsOnConflict>;
}


/** mutation root */
interface MutationRootInsertThreadsOneArgs {
  object: ThreadsInsertInput;
  on_conflict?: InputMaybe<ThreadsOnConflict>;
}


/** mutation root */
interface MutationRootInsertUsersArgs {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
}


/** mutation root */
interface MutationRootInsertUsersOneArgs {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
}


/** mutation root */
interface MutationRootInsertUsersRoomsArgs {
  objects: Array<UsersRoomsInsertInput>;
  on_conflict?: InputMaybe<UsersRoomsOnConflict>;
}


/** mutation root */
interface MutationRootInsertUsersRoomsOneArgs {
  object: UsersRoomsInsertInput;
  on_conflict?: InputMaybe<UsersRoomsOnConflict>;
}


/** mutation root */
interface MutationRootUpdateBookingOrderOptionsArgs {
  _inc?: InputMaybe<BookingOrderOptionsIncInput>;
  _set?: InputMaybe<BookingOrderOptionsSetInput>;
  where: BookingOrderOptionsBoolExp;
}


/** mutation root */
interface MutationRootUpdateBookingOrderOptionsByPkArgs {
  _inc?: InputMaybe<BookingOrderOptionsIncInput>;
  _set?: InputMaybe<BookingOrderOptionsSetInput>;
  pk_columns: BookingOrderOptionsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateBookingOrderOptionsManyArgs {
  updates: Array<BookingOrderOptionsUpdates>;
}


/** mutation root */
interface MutationRootUpdateBookingsArgs {
  _inc?: InputMaybe<BookingsIncInput>;
  _set?: InputMaybe<BookingsSetInput>;
  where: BookingsBoolExp;
}


/** mutation root */
interface MutationRootUpdateBookingsByPkArgs {
  _inc?: InputMaybe<BookingsIncInput>;
  _set?: InputMaybe<BookingsSetInput>;
  pk_columns: BookingsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateBookingsManyArgs {
  updates: Array<BookingsUpdates>;
}


/** mutation root */
interface MutationRootUpdateConfigsArgs {
  _inc?: InputMaybe<ConfigsIncInput>;
  _set?: InputMaybe<ConfigsSetInput>;
  where: ConfigsBoolExp;
}


/** mutation root */
interface MutationRootUpdateConfigsByPkArgs {
  _inc?: InputMaybe<ConfigsIncInput>;
  _set?: InputMaybe<ConfigsSetInput>;
  pk_columns: ConfigsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateConfigsManyArgs {
  updates: Array<ConfigsUpdates>;
}


/** mutation root */
interface MutationRootUpdateFoodArgs {
  _inc?: InputMaybe<FoodIncInput>;
  _set?: InputMaybe<FoodSetInput>;
  where: FoodBoolExp;
}


/** mutation root */
interface MutationRootUpdateFoodByPkArgs {
  _inc?: InputMaybe<FoodIncInput>;
  _set?: InputMaybe<FoodSetInput>;
  pk_columns: FoodPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateFoodManyArgs {
  updates: Array<FoodUpdates>;
}


/** mutation root */
interface MutationRootUpdateOrderOptionsArgs {
  _inc?: InputMaybe<OrderOptionsIncInput>;
  _set?: InputMaybe<OrderOptionsSetInput>;
  where: OrderOptionsBoolExp;
}


/** mutation root */
interface MutationRootUpdateOrderOptionsByPkArgs {
  _inc?: InputMaybe<OrderOptionsIncInput>;
  _set?: InputMaybe<OrderOptionsSetInput>;
  pk_columns: OrderOptionsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateOrderOptionsManyArgs {
  updates: Array<OrderOptionsUpdates>;
}


/** mutation root */
interface MutationRootUpdateOrdersArgs {
  _inc?: InputMaybe<OrdersIncInput>;
  _set?: InputMaybe<OrdersSetInput>;
  where: OrdersBoolExp;
}


/** mutation root */
interface MutationRootUpdateOrdersByPkArgs {
  _inc?: InputMaybe<OrdersIncInput>;
  _set?: InputMaybe<OrdersSetInput>;
  pk_columns: OrdersPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateOrdersManyArgs {
  updates: Array<OrdersUpdates>;
}


/** mutation root */
interface MutationRootUpdateRoomsArgs {
  _inc?: InputMaybe<RoomsIncInput>;
  _set?: InputMaybe<RoomsSetInput>;
  where: RoomsBoolExp;
}


/** mutation root */
interface MutationRootUpdateRoomsByPkArgs {
  _inc?: InputMaybe<RoomsIncInput>;
  _set?: InputMaybe<RoomsSetInput>;
  pk_columns: RoomsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateRoomsManyArgs {
  updates: Array<RoomsUpdates>;
}


/** mutation root */
interface MutationRootUpdateThreadsArgs {
  _inc?: InputMaybe<ThreadsIncInput>;
  _set?: InputMaybe<ThreadsSetInput>;
  where: ThreadsBoolExp;
}


/** mutation root */
interface MutationRootUpdateThreadsByPkArgs {
  _inc?: InputMaybe<ThreadsIncInput>;
  _set?: InputMaybe<ThreadsSetInput>;
  pk_columns: ThreadsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateThreadsManyArgs {
  updates: Array<ThreadsUpdates>;
}


/** mutation root */
interface MutationRootUpdateUsersArgs {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
}


/** mutation root */
interface MutationRootUpdateUsersByPkArgs {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateUsersManyArgs {
  updates: Array<UsersUpdates>;
}


/** mutation root */
interface MutationRootUpdateUsersRoomsArgs {
  _inc?: InputMaybe<UsersRoomsIncInput>;
  _set?: InputMaybe<UsersRoomsSetInput>;
  where: UsersRoomsBoolExp;
}


/** mutation root */
interface MutationRootUpdateUsersRoomsByPkArgs {
  _inc?: InputMaybe<UsersRoomsIncInput>;
  _set?: InputMaybe<UsersRoomsSetInput>;
  pk_columns: UsersRoomsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateUsersRoomsManyArgs {
  updates: Array<UsersRoomsUpdates>;
}

/** column ordering options */
enum OrderBy {
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
interface OrderOptions {
  __typename?: 'order_options';
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>;
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate;
  name: Scalars['String'];
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id?: Maybe<Scalars['Int']>;
  order_option_id: Scalars['Int'];
  price?: Maybe<Scalars['float8']>;
}


/** columns and relationships of "order_options" */
interface OrderOptionsBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


/** columns and relationships of "order_options" */
interface OrderOptionsBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}

/** aggregated selection of "order_options" */
interface OrderOptionsAggregate {
  __typename?: 'order_options_aggregate';
  aggregate?: Maybe<OrderOptionsAggregateFields>;
  nodes: Array<OrderOptions>;
}

interface OrderOptionsAggregateBoolExp {
  avg?: InputMaybe<OrderOptionsAggregateBoolExpAvg>;
  corr?: InputMaybe<OrderOptionsAggregateBoolExpCorr>;
  count?: InputMaybe<OrderOptionsAggregateBoolExpCount>;
  covar_samp?: InputMaybe<OrderOptionsAggregateBoolExpCovarSamp>;
  max?: InputMaybe<OrderOptionsAggregateBoolExpMax>;
  min?: InputMaybe<OrderOptionsAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<OrderOptionsAggregateBoolExpStddevSamp>;
  sum?: InputMaybe<OrderOptionsAggregateBoolExpSum>;
  var_samp?: InputMaybe<OrderOptionsAggregateBoolExpVarSamp>;
}

interface OrderOptionsAggregateBoolExpAvg {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpCorr {
  arguments: OrderOptionsAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpCorrArguments {
  X: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCorrArgumentsColumns;
  Y: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCorrArgumentsColumns;
}

interface OrderOptionsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: IntComparisonExp;
}

interface OrderOptionsAggregateBoolExpCovarSamp {
  arguments: OrderOptionsAggregateBoolExpCovarSampArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpCovarSampArguments {
  X: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCovarSampArgumentsColumns;
  Y: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCovarSampArgumentsColumns;
}

interface OrderOptionsAggregateBoolExpMax {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpMin {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpStddevSamp {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpStddevSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpSum {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrderOptionsAggregateBoolExpVarSamp {
  arguments: OrderOptionsSelectColumnOrderOptionsAggregateBoolExpVarSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderOptionsBoolExp>;
  predicate: Float8ComparisonExp;
}

/** aggregate fields of "order_options" */
interface OrderOptionsAggregateFields {
  __typename?: 'order_options_aggregate_fields';
  avg?: Maybe<OrderOptionsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OrderOptionsMaxFields>;
  min?: Maybe<OrderOptionsMinFields>;
  stddev?: Maybe<OrderOptionsStddevFields>;
  stddev_pop?: Maybe<OrderOptionsStddevPopFields>;
  stddev_samp?: Maybe<OrderOptionsStddevSampFields>;
  sum?: Maybe<OrderOptionsSumFields>;
  var_pop?: Maybe<OrderOptionsVarPopFields>;
  var_samp?: Maybe<OrderOptionsVarSampFields>;
  variance?: Maybe<OrderOptionsVarianceFields>;
}


/** aggregate fields of "order_options" */
interface OrderOptionsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "order_options" */
interface OrderOptionsAggregateOrderBy {
  avg?: InputMaybe<OrderOptionsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OrderOptionsMaxOrderBy>;
  min?: InputMaybe<OrderOptionsMinOrderBy>;
  stddev?: InputMaybe<OrderOptionsStddevOrderBy>;
  stddev_pop?: InputMaybe<OrderOptionsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<OrderOptionsStddevSampOrderBy>;
  sum?: InputMaybe<OrderOptionsSumOrderBy>;
  var_pop?: InputMaybe<OrderOptionsVarPopOrderBy>;
  var_samp?: InputMaybe<OrderOptionsVarSampOrderBy>;
  variance?: InputMaybe<OrderOptionsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "order_options" */
interface OrderOptionsArrRelInsertInput {
  data: Array<OrderOptionsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderOptionsOnConflict>;
}

/** aggregate avg on columns */
interface OrderOptionsAvgFields {
  __typename?: 'order_options_avg_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "order_options" */
interface OrderOptionsAvgOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "order_options". All fields are combined with a logical 'AND'. */
interface OrderOptionsBoolExp {
  _and?: InputMaybe<Array<OrderOptionsBoolExp>>;
  _not?: InputMaybe<OrderOptionsBoolExp>;
  _or?: InputMaybe<Array<OrderOptionsBoolExp>>;
  booking_order_options?: InputMaybe<BookingOrderOptionsBoolExp>;
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<OrdersBoolExp>;
  order_id?: InputMaybe<IntComparisonExp>;
  order_option_id?: InputMaybe<IntComparisonExp>;
  price?: InputMaybe<Float8ComparisonExp>;
}

/** unique or primary key constraints on table "order_options" */
enum OrderOptionsConstraint {
  /** unique or primary key constraint on columns "order_option_id" */
  OrderOptionsPkey = 'order_options_pkey'
}

/** input type for incrementing numeric columns in table "order_options" */
interface OrderOptionsIncInput {
  order_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
}

/** input type for inserting data into table "order_options" */
interface OrderOptionsInsertInput {
  booking_order_options?: InputMaybe<BookingOrderOptionsArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<OrdersObjRelInsertInput>;
  order_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
}

/** aggregate max on columns */
interface OrderOptionsMaxFields {
  __typename?: 'order_options_max_fields';
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  order_option_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
}

/** order by max() on columns of table "order_options" */
interface OrderOptionsMaxOrderBy {
  name?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface OrderOptionsMinFields {
  __typename?: 'order_options_min_fields';
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  order_option_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
}

/** order by min() on columns of table "order_options" */
interface OrderOptionsMinOrderBy {
  name?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "order_options" */
interface OrderOptionsMutationResponse {
  __typename?: 'order_options_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderOptions>;
}

/** input type for inserting object relation for remote table "order_options" */
interface OrderOptionsObjRelInsertInput {
  data: OrderOptionsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderOptionsOnConflict>;
}

/** on_conflict condition type for table "order_options" */
interface OrderOptionsOnConflict {
  constraint: OrderOptionsConstraint;
  update_columns?: Array<OrderOptionsUpdateColumn>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}

/** Ordering options when selecting data from "order_options". */
interface OrderOptionsOrderBy {
  booking_order_options_aggregate?: InputMaybe<BookingOrderOptionsAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrdersOrderBy>;
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: order_options */
interface OrderOptionsPkColumnsInput {
  order_option_id: Scalars['Int'];
}

/** select columns of table "order_options" */
enum OrderOptionsSelectColumn {
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
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_corr_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_max_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_min_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_sum_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** select "order_options_aggregate_bool_exp_var_samp_arguments_columns" columns of table "order_options" */
enum OrderOptionsSelectColumnOrderOptionsAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "order_options" */
interface OrderOptionsSetInput {
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
}

/** aggregate stddev on columns */
interface OrderOptionsStddevFields {
  __typename?: 'order_options_stddev_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "order_options" */
interface OrderOptionsStddevOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface OrderOptionsStddevPopFields {
  __typename?: 'order_options_stddev_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "order_options" */
interface OrderOptionsStddevPopOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface OrderOptionsStddevSampFields {
  __typename?: 'order_options_stddev_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "order_options" */
interface OrderOptionsStddevSampOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "order_options" */
interface OrderOptionsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: OrderOptionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface OrderOptionsStreamCursorValueInput {
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  order_option_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
}

/** aggregate sum on columns */
interface OrderOptionsSumFields {
  __typename?: 'order_options_sum_fields';
  order_id?: Maybe<Scalars['Int']>;
  order_option_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
}

/** order by sum() on columns of table "order_options" */
interface OrderOptionsSumOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** update columns of table "order_options" */
enum OrderOptionsUpdateColumn {
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderOptionId = 'order_option_id',
  /** column name */
  Price = 'price'
}

interface OrderOptionsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrderOptionsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrderOptionsSetInput>;
  where: OrderOptionsBoolExp;
}

/** aggregate var_pop on columns */
interface OrderOptionsVarPopFields {
  __typename?: 'order_options_var_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "order_options" */
interface OrderOptionsVarPopOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface OrderOptionsVarSampFields {
  __typename?: 'order_options_var_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "order_options" */
interface OrderOptionsVarSampOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface OrderOptionsVarianceFields {
  __typename?: 'order_options_variance_fields';
  order_id?: Maybe<Scalars['Float']>;
  order_option_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "order_options" */
interface OrderOptionsVarianceOrderBy {
  order_id?: InputMaybe<OrderBy>;
  order_option_id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
}

/** columns and relationships of "orders" */
interface Orders {
  __typename?: 'orders';
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate;
  created_at: Scalars['timestamp'];
  created_by: Scalars['Int'];
  discount?: Maybe<Scalars['float8']>;
  /** An array relationship */
  food: Array<Food>;
  /** An aggregate relationship */
  food_aggregate: FoodAggregate;
  order_id: Scalars['Int'];
  /** An array relationship */
  order_options: Array<OrderOptions>;
  /** An aggregate relationship */
  order_options_aggregate: OrderOptionsAggregate;
  room_id: Scalars['Int'];
  store_address?: Maybe<Scalars['String']>;
  store_name: Scalars['String'];
  total_price?: Maybe<Scalars['float8']>;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
}


/** columns and relationships of "orders" */
interface OrdersBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


/** columns and relationships of "orders" */
interface OrdersBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


/** columns and relationships of "orders" */
interface OrdersFoodArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FoodOrderBy>>;
  where?: InputMaybe<FoodBoolExp>;
}


/** columns and relationships of "orders" */
interface OrdersFoodAggregateArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FoodOrderBy>>;
  where?: InputMaybe<FoodBoolExp>;
}


/** columns and relationships of "orders" */
interface OrdersOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}


/** columns and relationships of "orders" */
interface OrdersOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}

/** aggregated selection of "orders" */
interface OrdersAggregate {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<OrdersAggregateFields>;
  nodes: Array<Orders>;
}

interface OrdersAggregateBoolExp {
  avg?: InputMaybe<OrdersAggregateBoolExpAvg>;
  corr?: InputMaybe<OrdersAggregateBoolExpCorr>;
  count?: InputMaybe<OrdersAggregateBoolExpCount>;
  covar_samp?: InputMaybe<OrdersAggregateBoolExpCovarSamp>;
  max?: InputMaybe<OrdersAggregateBoolExpMax>;
  min?: InputMaybe<OrdersAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<OrdersAggregateBoolExpStddevSamp>;
  sum?: InputMaybe<OrdersAggregateBoolExpSum>;
  var_samp?: InputMaybe<OrdersAggregateBoolExpVarSamp>;
}

interface OrdersAggregateBoolExpAvg {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpCorr {
  arguments: OrdersAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpCorrArguments {
  X: OrdersSelectColumnOrdersAggregateBoolExpCorrArgumentsColumns;
  Y: OrdersSelectColumnOrdersAggregateBoolExpCorrArgumentsColumns;
}

interface OrdersAggregateBoolExpCount {
  arguments?: InputMaybe<Array<OrdersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: IntComparisonExp;
}

interface OrdersAggregateBoolExpCovarSamp {
  arguments: OrdersAggregateBoolExpCovarSampArguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpCovarSampArguments {
  X: OrdersSelectColumnOrdersAggregateBoolExpCovarSampArgumentsColumns;
  Y: OrdersSelectColumnOrdersAggregateBoolExpCovarSampArgumentsColumns;
}

interface OrdersAggregateBoolExpMax {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpMin {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpStddevSamp {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpStddevSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpSum {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

interface OrdersAggregateBoolExpVarSamp {
  arguments: OrdersSelectColumnOrdersAggregateBoolExpVarSampArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrdersBoolExp>;
  predicate: Float8ComparisonExp;
}

/** aggregate fields of "orders" */
interface OrdersAggregateFields {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<OrdersAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OrdersMaxFields>;
  min?: Maybe<OrdersMinFields>;
  stddev?: Maybe<OrdersStddevFields>;
  stddev_pop?: Maybe<OrdersStddevPopFields>;
  stddev_samp?: Maybe<OrdersStddevSampFields>;
  sum?: Maybe<OrdersSumFields>;
  var_pop?: Maybe<OrdersVarPopFields>;
  var_samp?: Maybe<OrdersVarSampFields>;
  variance?: Maybe<OrdersVarianceFields>;
}


/** aggregate fields of "orders" */
interface OrdersAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<OrdersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "orders" */
interface OrdersAggregateOrderBy {
  avg?: InputMaybe<OrdersAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OrdersMaxOrderBy>;
  min?: InputMaybe<OrdersMinOrderBy>;
  stddev?: InputMaybe<OrdersStddevOrderBy>;
  stddev_pop?: InputMaybe<OrdersStddevPopOrderBy>;
  stddev_samp?: InputMaybe<OrdersStddevSampOrderBy>;
  sum?: InputMaybe<OrdersSumOrderBy>;
  var_pop?: InputMaybe<OrdersVarPopOrderBy>;
  var_samp?: InputMaybe<OrdersVarSampOrderBy>;
  variance?: InputMaybe<OrdersVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "orders" */
interface OrdersArrRelInsertInput {
  data: Array<OrdersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrdersOnConflict>;
}

/** aggregate avg on columns */
interface OrdersAvgFields {
  __typename?: 'orders_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "orders" */
interface OrdersAvgOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
interface OrdersBoolExp {
  _and?: InputMaybe<Array<OrdersBoolExp>>;
  _not?: InputMaybe<OrdersBoolExp>;
  _or?: InputMaybe<Array<OrdersBoolExp>>;
  bookings?: InputMaybe<BookingsBoolExp>;
  bookings_aggregate?: InputMaybe<BookingsAggregateBoolExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  created_by?: InputMaybe<IntComparisonExp>;
  discount?: InputMaybe<Float8ComparisonExp>;
  food?: InputMaybe<FoodBoolExp>;
  food_aggregate?: InputMaybe<FoodAggregateBoolExp>;
  order_id?: InputMaybe<IntComparisonExp>;
  order_options?: InputMaybe<OrderOptionsBoolExp>;
  order_options_aggregate?: InputMaybe<OrderOptionsAggregateBoolExp>;
  room_id?: InputMaybe<IntComparisonExp>;
  store_address?: InputMaybe<StringComparisonExp>;
  store_name?: InputMaybe<StringComparisonExp>;
  total_price?: InputMaybe<Float8ComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
}

/** unique or primary key constraints on table "orders" */
enum OrdersConstraint {
  /** unique or primary key constraint on columns "order_id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
interface OrdersIncInput {
  created_by?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['float8']>;
  order_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['float8']>;
}

/** input type for inserting data into table "orders" */
interface OrdersInsertInput {
  bookings?: InputMaybe<BookingsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['float8']>;
  food?: InputMaybe<FoodArrRelInsertInput>;
  order_id?: InputMaybe<Scalars['Int']>;
  order_options?: InputMaybe<OrderOptionsArrRelInsertInput>;
  room_id?: InputMaybe<Scalars['Int']>;
  store_address?: InputMaybe<Scalars['String']>;
  store_name?: InputMaybe<Scalars['String']>;
  total_price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
}

/** aggregate max on columns */
interface OrdersMaxFields {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['float8']>;
  order_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  store_address?: Maybe<Scalars['String']>;
  store_name?: Maybe<Scalars['String']>;
  total_price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by max() on columns of table "orders" */
interface OrdersMaxOrderBy {
  created_at?: InputMaybe<OrderBy>;
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  store_address?: InputMaybe<OrderBy>;
  store_name?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface OrdersMinFields {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['float8']>;
  order_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  store_address?: Maybe<Scalars['String']>;
  store_name?: Maybe<Scalars['String']>;
  total_price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by min() on columns of table "orders" */
interface OrdersMinOrderBy {
  created_at?: InputMaybe<OrderBy>;
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  store_address?: InputMaybe<OrderBy>;
  store_name?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "orders" */
interface OrdersMutationResponse {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
}

/** input type for inserting object relation for remote table "orders" */
interface OrdersObjRelInsertInput {
  data: OrdersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<OrdersOnConflict>;
}

/** on_conflict condition type for table "orders" */
interface OrdersOnConflict {
  constraint: OrdersConstraint;
  update_columns?: Array<OrdersUpdateColumn>;
  where?: InputMaybe<OrdersBoolExp>;
}

/** Ordering options when selecting data from "orders". */
interface OrdersOrderBy {
  bookings_aggregate?: InputMaybe<BookingsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  food_aggregate?: InputMaybe<FoodAggregateOrderBy>;
  order_id?: InputMaybe<OrderBy>;
  order_options_aggregate?: InputMaybe<OrderOptionsAggregateOrderBy>;
  room_id?: InputMaybe<OrderBy>;
  store_address?: InputMaybe<OrderBy>;
  store_name?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
}

/** primary key columns input for table: orders */
interface OrdersPkColumnsInput {
  order_id: Scalars['Int'];
}

/** select columns of table "orders" */
enum OrdersSelectColumn {
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
enum OrdersSelectColumnOrdersAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_corr_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_max_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_min_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_sum_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** select "orders_aggregate_bool_exp_var_samp_arguments_columns" columns of table "orders" */
enum OrdersSelectColumnOrdersAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Discount = 'discount',
  /** column name */
  TotalPrice = 'total_price'
}

/** input type for updating data in table "orders" */
interface OrdersSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['float8']>;
  order_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  store_address?: InputMaybe<Scalars['String']>;
  store_name?: InputMaybe<Scalars['String']>;
  total_price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
}

/** aggregate stddev on columns */
interface OrdersStddevFields {
  __typename?: 'orders_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "orders" */
interface OrdersStddevOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface OrdersStddevPopFields {
  __typename?: 'orders_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "orders" */
interface OrdersStddevPopOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface OrdersStddevSampFields {
  __typename?: 'orders_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "orders" */
interface OrdersStddevSampOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "orders" */
interface OrdersStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: OrdersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface OrdersStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['float8']>;
  order_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  store_address?: InputMaybe<Scalars['String']>;
  store_name?: InputMaybe<Scalars['String']>;
  total_price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
}

/** aggregate sum on columns */
interface OrdersSumFields {
  __typename?: 'orders_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['float8']>;
  order_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['float8']>;
}

/** order by sum() on columns of table "orders" */
interface OrdersSumOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** update columns of table "orders" */
enum OrdersUpdateColumn {
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

interface OrdersUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrdersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrdersSetInput>;
  where: OrdersBoolExp;
}

/** aggregate var_pop on columns */
interface OrdersVarPopFields {
  __typename?: 'orders_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "orders" */
interface OrdersVarPopOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface OrdersVarSampFields {
  __typename?: 'orders_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "orders" */
interface OrdersVarSampOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface OrdersVarianceFields {
  __typename?: 'orders_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "orders" */
interface OrdersVarianceOrderBy {
  created_by?: InputMaybe<OrderBy>;
  discount?: InputMaybe<OrderBy>;
  order_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  total_price?: InputMaybe<OrderBy>;
}

interface QueryRoot {
  __typename?: 'query_root';
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>;
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate;
  /** fetch data from the table: "booking_order_options" using primary key columns */
  booking_order_options_by_pk?: Maybe<BookingOrderOptions>;
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table: "configs" */
  configs: Array<Configs>;
  /** fetch aggregated fields from the table: "configs" */
  configs_aggregate: ConfigsAggregate;
  /** fetch data from the table: "configs" using primary key columns */
  configs_by_pk?: Maybe<Configs>;
  /** An array relationship */
  food: Array<Food>;
  /** An aggregate relationship */
  food_aggregate: FoodAggregate;
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>;
  /** An array relationship */
  order_options: Array<OrderOptions>;
  /** An aggregate relationship */
  order_options_aggregate: OrderOptionsAggregate;
  /** fetch data from the table: "order_options" using primary key columns */
  order_options_by_pk?: Maybe<OrderOptions>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: OrdersAggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: RoomsAggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  threads: Array<Threads>;
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate;
  /** fetch data from the table: "threads" using primary key columns */
  threads_by_pk?: Maybe<Threads>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_rooms: Array<UsersRooms>;
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate;
  /** fetch data from the table: "users_rooms" using primary key columns */
  users_rooms_by_pk?: Maybe<UsersRooms>;
}


interface QueryRootBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


interface QueryRootBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


interface QueryRootBookingOrderOptionsByPkArgs {
  booking_order_option_id: Scalars['Int'];
}


interface QueryRootBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


interface QueryRootBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


interface QueryRootBookingsByPkArgs {
  booking_id: Scalars['Int'];
}


interface QueryRootConfigsArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigsOrderBy>>;
  where?: InputMaybe<ConfigsBoolExp>;
}


interface QueryRootConfigsAggregateArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigsOrderBy>>;
  where?: InputMaybe<ConfigsBoolExp>;
}


interface QueryRootConfigsByPkArgs {
  config_id: Scalars['Int'];
}


interface QueryRootFoodArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FoodOrderBy>>;
  where?: InputMaybe<FoodBoolExp>;
}


interface QueryRootFoodAggregateArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FoodOrderBy>>;
  where?: InputMaybe<FoodBoolExp>;
}


interface QueryRootFoodByPkArgs {
  food_id: Scalars['Int'];
}


interface QueryRootOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}


interface QueryRootOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}


interface QueryRootOrderOptionsByPkArgs {
  order_option_id: Scalars['Int'];
}


interface QueryRootOrdersArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrdersOrderBy>>;
  where?: InputMaybe<OrdersBoolExp>;
}


interface QueryRootOrdersAggregateArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrdersOrderBy>>;
  where?: InputMaybe<OrdersBoolExp>;
}


interface QueryRootOrdersByPkArgs {
  order_id: Scalars['Int'];
}


interface QueryRootRoomsArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
}


interface QueryRootRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
}


interface QueryRootRoomsByPkArgs {
  room_id: Scalars['Int'];
}


interface QueryRootThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


interface QueryRootThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


interface QueryRootThreadsByPkArgs {
  thread_id: Scalars['Int'];
}


interface QueryRootUsersArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface QueryRootUsersAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface QueryRootUsersByPkArgs {
  user_id: Scalars['Int'];
}


interface QueryRootUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


interface QueryRootUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


interface QueryRootUsersRoomsByPkArgs {
  user_room_id: Scalars['Int'];
}

/** columns and relationships of "rooms" */
interface Rooms {
  __typename?: 'rooms';
  created_at: Scalars['timestamp'];
  firebase_room_id: Scalars['String'];
  host_id: Scalars['Int'];
  room_id: Scalars['Int'];
  /** An array relationship */
  threads: Array<Threads>;
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  users_rooms: Array<UsersRooms>;
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate;
}


/** columns and relationships of "rooms" */
interface RoomsThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


/** columns and relationships of "rooms" */
interface RoomsThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


/** columns and relationships of "rooms" */
interface RoomsUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


/** columns and relationships of "rooms" */
interface RoomsUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}

/** aggregated selection of "rooms" */
interface RoomsAggregate {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<RoomsAggregateFields>;
  nodes: Array<Rooms>;
}

interface RoomsAggregateBoolExp {
  count?: InputMaybe<RoomsAggregateBoolExpCount>;
}

interface RoomsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<RoomsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<RoomsBoolExp>;
  predicate: IntComparisonExp;
}

/** aggregate fields of "rooms" */
interface RoomsAggregateFields {
  __typename?: 'rooms_aggregate_fields';
  avg?: Maybe<RoomsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<RoomsMaxFields>;
  min?: Maybe<RoomsMinFields>;
  stddev?: Maybe<RoomsStddevFields>;
  stddev_pop?: Maybe<RoomsStddevPopFields>;
  stddev_samp?: Maybe<RoomsStddevSampFields>;
  sum?: Maybe<RoomsSumFields>;
  var_pop?: Maybe<RoomsVarPopFields>;
  var_samp?: Maybe<RoomsVarSampFields>;
  variance?: Maybe<RoomsVarianceFields>;
}


/** aggregate fields of "rooms" */
interface RoomsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<RoomsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "rooms" */
interface RoomsAggregateOrderBy {
  avg?: InputMaybe<RoomsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RoomsMaxOrderBy>;
  min?: InputMaybe<RoomsMinOrderBy>;
  stddev?: InputMaybe<RoomsStddevOrderBy>;
  stddev_pop?: InputMaybe<RoomsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<RoomsStddevSampOrderBy>;
  sum?: InputMaybe<RoomsSumOrderBy>;
  var_pop?: InputMaybe<RoomsVarPopOrderBy>;
  var_samp?: InputMaybe<RoomsVarSampOrderBy>;
  variance?: InputMaybe<RoomsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "rooms" */
interface RoomsArrRelInsertInput {
  data: Array<RoomsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<RoomsOnConflict>;
}

/** aggregate avg on columns */
interface RoomsAvgFields {
  __typename?: 'rooms_avg_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "rooms" */
interface RoomsAvgOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
interface RoomsBoolExp {
  _and?: InputMaybe<Array<RoomsBoolExp>>;
  _not?: InputMaybe<RoomsBoolExp>;
  _or?: InputMaybe<Array<RoomsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  firebase_room_id?: InputMaybe<StringComparisonExp>;
  host_id?: InputMaybe<IntComparisonExp>;
  room_id?: InputMaybe<IntComparisonExp>;
  threads?: InputMaybe<ThreadsBoolExp>;
  threads_aggregate?: InputMaybe<ThreadsAggregateBoolExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  users_rooms?: InputMaybe<UsersRoomsBoolExp>;
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateBoolExp>;
}

/** unique or primary key constraints on table "rooms" */
enum RoomsConstraint {
  /** unique or primary key constraint on columns "room_id" */
  RoomsPkey = 'rooms_pkey'
}

/** input type for incrementing numeric columns in table "rooms" */
interface RoomsIncInput {
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "rooms" */
interface RoomsInsertInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  firebase_room_id?: InputMaybe<Scalars['String']>;
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  threads?: InputMaybe<ThreadsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  users_rooms?: InputMaybe<UsersRoomsArrRelInsertInput>;
}

/** aggregate max on columns */
interface RoomsMaxFields {
  __typename?: 'rooms_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  firebase_room_id?: Maybe<Scalars['String']>;
  host_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by max() on columns of table "rooms" */
interface RoomsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>;
  firebase_room_id?: InputMaybe<OrderBy>;
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface RoomsMinFields {
  __typename?: 'rooms_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  firebase_room_id?: Maybe<Scalars['String']>;
  host_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by min() on columns of table "rooms" */
interface RoomsMinOrderBy {
  created_at?: InputMaybe<OrderBy>;
  firebase_room_id?: InputMaybe<OrderBy>;
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "rooms" */
interface RoomsMutationResponse {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
}

/** input type for inserting object relation for remote table "rooms" */
interface RoomsObjRelInsertInput {
  data: RoomsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<RoomsOnConflict>;
}

/** on_conflict condition type for table "rooms" */
interface RoomsOnConflict {
  constraint: RoomsConstraint;
  update_columns?: Array<RoomsUpdateColumn>;
  where?: InputMaybe<RoomsBoolExp>;
}

/** Ordering options when selecting data from "rooms". */
interface RoomsOrderBy {
  created_at?: InputMaybe<OrderBy>;
  firebase_room_id?: InputMaybe<OrderBy>;
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  threads_aggregate?: InputMaybe<ThreadsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateOrderBy>;
}

/** primary key columns input for table: rooms */
interface RoomsPkColumnsInput {
  room_id: Scalars['Int'];
}

/** select columns of table "rooms" */
enum RoomsSelectColumn {
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
interface RoomsSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  firebase_room_id?: InputMaybe<Scalars['String']>;
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
}

/** aggregate stddev on columns */
interface RoomsStddevFields {
  __typename?: 'rooms_stddev_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "rooms" */
interface RoomsStddevOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface RoomsStddevPopFields {
  __typename?: 'rooms_stddev_pop_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "rooms" */
interface RoomsStddevPopOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface RoomsStddevSampFields {
  __typename?: 'rooms_stddev_samp_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "rooms" */
interface RoomsStddevSampOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "rooms" */
interface RoomsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: RoomsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface RoomsStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  firebase_room_id?: InputMaybe<Scalars['String']>;
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
}

/** aggregate sum on columns */
interface RoomsSumFields {
  __typename?: 'rooms_sum_fields';
  host_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "rooms" */
interface RoomsSumOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** update columns of table "rooms" */
enum RoomsUpdateColumn {
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

interface RoomsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RoomsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RoomsSetInput>;
  where: RoomsBoolExp;
}

/** aggregate var_pop on columns */
interface RoomsVarPopFields {
  __typename?: 'rooms_var_pop_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "rooms" */
interface RoomsVarPopOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface RoomsVarSampFields {
  __typename?: 'rooms_var_samp_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "rooms" */
interface RoomsVarSampOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface RoomsVarianceFields {
  __typename?: 'rooms_variance_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "rooms" */
interface RoomsVarianceOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
}

interface SubscriptionRoot {
  __typename?: 'subscription_root';
  /** An array relationship */
  booking_order_options: Array<BookingOrderOptions>;
  /** An aggregate relationship */
  booking_order_options_aggregate: BookingOrderOptionsAggregate;
  /** fetch data from the table: "booking_order_options" using primary key columns */
  booking_order_options_by_pk?: Maybe<BookingOrderOptions>;
  /** fetch data from the table in a streaming manner: "booking_order_options" */
  booking_order_options_stream: Array<BookingOrderOptions>;
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table in a streaming manner: "bookings" */
  bookings_stream: Array<Bookings>;
  /** fetch data from the table: "configs" */
  configs: Array<Configs>;
  /** fetch aggregated fields from the table: "configs" */
  configs_aggregate: ConfigsAggregate;
  /** fetch data from the table: "configs" using primary key columns */
  configs_by_pk?: Maybe<Configs>;
  /** fetch data from the table in a streaming manner: "configs" */
  configs_stream: Array<Configs>;
  /** An array relationship */
  food: Array<Food>;
  /** An aggregate relationship */
  food_aggregate: FoodAggregate;
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>;
  /** fetch data from the table in a streaming manner: "food" */
  food_stream: Array<Food>;
  /** An array relationship */
  order_options: Array<OrderOptions>;
  /** An aggregate relationship */
  order_options_aggregate: OrderOptionsAggregate;
  /** fetch data from the table: "order_options" using primary key columns */
  order_options_by_pk?: Maybe<OrderOptions>;
  /** fetch data from the table in a streaming manner: "order_options" */
  order_options_stream: Array<OrderOptions>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: OrdersAggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: RoomsAggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table in a streaming manner: "rooms" */
  rooms_stream: Array<Rooms>;
  /** An array relationship */
  threads: Array<Threads>;
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate;
  /** fetch data from the table: "threads" using primary key columns */
  threads_by_pk?: Maybe<Threads>;
  /** fetch data from the table in a streaming manner: "threads" */
  threads_stream: Array<Threads>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_rooms: Array<UsersRooms>;
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate;
  /** fetch data from the table: "users_rooms" using primary key columns */
  users_rooms_by_pk?: Maybe<UsersRooms>;
  /** fetch data from the table in a streaming manner: "users_rooms" */
  users_rooms_stream: Array<UsersRooms>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
}


interface SubscriptionRootBookingOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


interface SubscriptionRootBookingOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingOrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingOrderOptionsOrderBy>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


interface SubscriptionRootBookingOrderOptionsByPkArgs {
  booking_order_option_id: Scalars['Int'];
}


interface SubscriptionRootBookingOrderOptionsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BookingOrderOptionsStreamCursorInput>>;
  where?: InputMaybe<BookingOrderOptionsBoolExp>;
}


interface SubscriptionRootBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


interface SubscriptionRootBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


interface SubscriptionRootBookingsByPkArgs {
  booking_id: Scalars['Int'];
}


interface SubscriptionRootBookingsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BookingsStreamCursorInput>>;
  where?: InputMaybe<BookingsBoolExp>;
}


interface SubscriptionRootConfigsArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigsOrderBy>>;
  where?: InputMaybe<ConfigsBoolExp>;
}


interface SubscriptionRootConfigsAggregateArgs {
  distinct_on?: InputMaybe<Array<ConfigsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigsOrderBy>>;
  where?: InputMaybe<ConfigsBoolExp>;
}


interface SubscriptionRootConfigsByPkArgs {
  config_id: Scalars['Int'];
}


interface SubscriptionRootConfigsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ConfigsStreamCursorInput>>;
  where?: InputMaybe<ConfigsBoolExp>;
}


interface SubscriptionRootFoodArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FoodOrderBy>>;
  where?: InputMaybe<FoodBoolExp>;
}


interface SubscriptionRootFoodAggregateArgs {
  distinct_on?: InputMaybe<Array<FoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FoodOrderBy>>;
  where?: InputMaybe<FoodBoolExp>;
}


interface SubscriptionRootFoodByPkArgs {
  food_id: Scalars['Int'];
}


interface SubscriptionRootFoodStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FoodStreamCursorInput>>;
  where?: InputMaybe<FoodBoolExp>;
}


interface SubscriptionRootOrderOptionsArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}


interface SubscriptionRootOrderOptionsAggregateArgs {
  distinct_on?: InputMaybe<Array<OrderOptionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderOptionsOrderBy>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}


interface SubscriptionRootOrderOptionsByPkArgs {
  order_option_id: Scalars['Int'];
}


interface SubscriptionRootOrderOptionsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OrderOptionsStreamCursorInput>>;
  where?: InputMaybe<OrderOptionsBoolExp>;
}


interface SubscriptionRootOrdersArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrdersOrderBy>>;
  where?: InputMaybe<OrdersBoolExp>;
}


interface SubscriptionRootOrdersAggregateArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrdersOrderBy>>;
  where?: InputMaybe<OrdersBoolExp>;
}


interface SubscriptionRootOrdersByPkArgs {
  order_id: Scalars['Int'];
}


interface SubscriptionRootOrdersStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OrdersStreamCursorInput>>;
  where?: InputMaybe<OrdersBoolExp>;
}


interface SubscriptionRootRoomsArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
}


interface SubscriptionRootRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
}


interface SubscriptionRootRoomsByPkArgs {
  room_id: Scalars['Int'];
}


interface SubscriptionRootRoomsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RoomsStreamCursorInput>>;
  where?: InputMaybe<RoomsBoolExp>;
}


interface SubscriptionRootThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


interface SubscriptionRootThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


interface SubscriptionRootThreadsByPkArgs {
  thread_id: Scalars['Int'];
}


interface SubscriptionRootThreadsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ThreadsStreamCursorInput>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


interface SubscriptionRootUsersArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface SubscriptionRootUsersAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface SubscriptionRootUsersByPkArgs {
  user_id: Scalars['Int'];
}


interface SubscriptionRootUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


interface SubscriptionRootUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


interface SubscriptionRootUsersRoomsByPkArgs {
  user_room_id: Scalars['Int'];
}


interface SubscriptionRootUsersRoomsStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UsersRoomsStreamCursorInput>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


interface SubscriptionRootUsersStreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
}

/** columns and relationships of "threads" */
interface Threads {
  __typename?: 'threads';
  created_at: Scalars['timestamp'];
  host_id: Scalars['Int'];
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['Int'];
  thread_id: Scalars['Int'];
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
}

/** aggregated selection of "threads" */
interface ThreadsAggregate {
  __typename?: 'threads_aggregate';
  aggregate?: Maybe<ThreadsAggregateFields>;
  nodes: Array<Threads>;
}

interface ThreadsAggregateBoolExp {
  count?: InputMaybe<ThreadsAggregateBoolExpCount>;
}

interface ThreadsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<ThreadsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ThreadsBoolExp>;
  predicate: IntComparisonExp;
}

/** aggregate fields of "threads" */
interface ThreadsAggregateFields {
  __typename?: 'threads_aggregate_fields';
  avg?: Maybe<ThreadsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ThreadsMaxFields>;
  min?: Maybe<ThreadsMinFields>;
  stddev?: Maybe<ThreadsStddevFields>;
  stddev_pop?: Maybe<ThreadsStddevPopFields>;
  stddev_samp?: Maybe<ThreadsStddevSampFields>;
  sum?: Maybe<ThreadsSumFields>;
  var_pop?: Maybe<ThreadsVarPopFields>;
  var_samp?: Maybe<ThreadsVarSampFields>;
  variance?: Maybe<ThreadsVarianceFields>;
}


/** aggregate fields of "threads" */
interface ThreadsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<ThreadsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "threads" */
interface ThreadsAggregateOrderBy {
  avg?: InputMaybe<ThreadsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ThreadsMaxOrderBy>;
  min?: InputMaybe<ThreadsMinOrderBy>;
  stddev?: InputMaybe<ThreadsStddevOrderBy>;
  stddev_pop?: InputMaybe<ThreadsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ThreadsStddevSampOrderBy>;
  sum?: InputMaybe<ThreadsSumOrderBy>;
  var_pop?: InputMaybe<ThreadsVarPopOrderBy>;
  var_samp?: InputMaybe<ThreadsVarSampOrderBy>;
  variance?: InputMaybe<ThreadsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "threads" */
interface ThreadsArrRelInsertInput {
  data: Array<ThreadsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ThreadsOnConflict>;
}

/** aggregate avg on columns */
interface ThreadsAvgFields {
  __typename?: 'threads_avg_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "threads" */
interface ThreadsAvgOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "threads". All fields are combined with a logical 'AND'. */
interface ThreadsBoolExp {
  _and?: InputMaybe<Array<ThreadsBoolExp>>;
  _not?: InputMaybe<ThreadsBoolExp>;
  _or?: InputMaybe<Array<ThreadsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  host_id?: InputMaybe<IntComparisonExp>;
  room?: InputMaybe<RoomsBoolExp>;
  room_id?: InputMaybe<IntComparisonExp>;
  thread_id?: InputMaybe<IntComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
}

/** unique or primary key constraints on table "threads" */
enum ThreadsConstraint {
  /** unique or primary key constraint on columns "thread_id" */
  ThreadsPkey = 'threads_pkey'
}

/** input type for incrementing numeric columns in table "threads" */
interface ThreadsIncInput {
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  thread_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "threads" */
interface ThreadsInsertInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  host_id?: InputMaybe<Scalars['Int']>;
  room?: InputMaybe<RoomsObjRelInsertInput>;
  room_id?: InputMaybe<Scalars['Int']>;
  thread_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
}

/** aggregate max on columns */
interface ThreadsMaxFields {
  __typename?: 'threads_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  host_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  thread_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by max() on columns of table "threads" */
interface ThreadsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>;
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface ThreadsMinFields {
  __typename?: 'threads_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  host_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  thread_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by min() on columns of table "threads" */
interface ThreadsMinOrderBy {
  created_at?: InputMaybe<OrderBy>;
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "threads" */
interface ThreadsMutationResponse {
  __typename?: 'threads_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Threads>;
}

/** on_conflict condition type for table "threads" */
interface ThreadsOnConflict {
  constraint: ThreadsConstraint;
  update_columns?: Array<ThreadsUpdateColumn>;
  where?: InputMaybe<ThreadsBoolExp>;
}

/** Ordering options when selecting data from "threads". */
interface ThreadsOrderBy {
  created_at?: InputMaybe<OrderBy>;
  host_id?: InputMaybe<OrderBy>;
  room?: InputMaybe<RoomsOrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
}

/** primary key columns input for table: threads */
interface ThreadsPkColumnsInput {
  thread_id: Scalars['Int'];
}

/** select columns of table "threads" */
enum ThreadsSelectColumn {
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
interface ThreadsSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  thread_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
}

/** aggregate stddev on columns */
interface ThreadsStddevFields {
  __typename?: 'threads_stddev_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "threads" */
interface ThreadsStddevOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface ThreadsStddevPopFields {
  __typename?: 'threads_stddev_pop_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "threads" */
interface ThreadsStddevPopOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface ThreadsStddevSampFields {
  __typename?: 'threads_stddev_samp_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "threads" */
interface ThreadsStddevSampOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "threads" */
interface ThreadsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: ThreadsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface ThreadsStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  host_id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  thread_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
}

/** aggregate sum on columns */
interface ThreadsSumFields {
  __typename?: 'threads_sum_fields';
  host_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  thread_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "threads" */
interface ThreadsSumOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** update columns of table "threads" */
enum ThreadsUpdateColumn {
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

interface ThreadsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ThreadsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ThreadsSetInput>;
  where: ThreadsBoolExp;
}

/** aggregate var_pop on columns */
interface ThreadsVarPopFields {
  __typename?: 'threads_var_pop_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "threads" */
interface ThreadsVarPopOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface ThreadsVarSampFields {
  __typename?: 'threads_var_samp_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "threads" */
interface ThreadsVarSampOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface ThreadsVarianceFields {
  __typename?: 'threads_variance_fields';
  host_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "threads" */
interface ThreadsVarianceOrderBy {
  host_id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
interface TimestampComparisonExp {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
}

/** columns and relationships of "users" */
interface Users {
  __typename?: 'users';
  access_secret_key?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: BookingsAggregate;
  changed_avatar_manually?: Maybe<Scalars['Boolean']>;
  changed_displayed_name_manually?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamp'];
  displayed_name: Scalars['String'];
  email: Scalars['String'];
  forgot_password_token?: Maybe<Scalars['String']>;
  momo_phone_number?: Maybe<Scalars['bpchar']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: OrdersAggregate;
  password_hashed?: Maybe<Scalars['String']>;
  request_forgot_password_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: RoomsAggregate;
  sex?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  threads: Array<Threads>;
  /** An aggregate relationship */
  threads_aggregate: ThreadsAggregate;
  updated_at: Scalars['timestamp'];
  user_id: Scalars['Int'];
  /** An array relationship */
  users_rooms: Array<UsersRooms>;
  /** An aggregate relationship */
  users_rooms_aggregate: UsersRoomsAggregate;
  verified_email?: Maybe<Scalars['Boolean']>;
}


/** columns and relationships of "users" */
interface UsersBookingsArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersBookingsAggregateArgs {
  distinct_on?: InputMaybe<Array<BookingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BookingsOrderBy>>;
  where?: InputMaybe<BookingsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersOrdersArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrdersOrderBy>>;
  where?: InputMaybe<OrdersBoolExp>;
}


/** columns and relationships of "users" */
interface UsersOrdersAggregateArgs {
  distinct_on?: InputMaybe<Array<OrdersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrdersOrderBy>>;
  where?: InputMaybe<OrdersBoolExp>;
}


/** columns and relationships of "users" */
interface UsersRoomsArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersThreadsArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersThreadsAggregateArgs {
  distinct_on?: InputMaybe<Array<ThreadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ThreadsOrderBy>>;
  where?: InputMaybe<ThreadsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersUsersRoomsArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersUsersRoomsAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersRoomsOrderBy>>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}

/** aggregated selection of "users" */
interface UsersAggregate {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
interface UsersAggregateFields {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<UsersAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
}


/** aggregate fields of "users" */
interface UsersAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
interface UsersAvgFields {
  __typename?: 'users_avg_fields';
  user_id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
interface UsersBoolExp {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  access_secret_key?: InputMaybe<StringComparisonExp>;
  active?: InputMaybe<BooleanComparisonExp>;
  avatar?: InputMaybe<StringComparisonExp>;
  bookings?: InputMaybe<BookingsBoolExp>;
  bookings_aggregate?: InputMaybe<BookingsAggregateBoolExp>;
  changed_avatar_manually?: InputMaybe<BooleanComparisonExp>;
  changed_displayed_name_manually?: InputMaybe<BooleanComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  displayed_name?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  forgot_password_token?: InputMaybe<StringComparisonExp>;
  momo_phone_number?: InputMaybe<BpcharComparisonExp>;
  orders?: InputMaybe<OrdersBoolExp>;
  orders_aggregate?: InputMaybe<OrdersAggregateBoolExp>;
  password_hashed?: InputMaybe<StringComparisonExp>;
  request_forgot_password_at?: InputMaybe<TimestampComparisonExp>;
  rooms?: InputMaybe<RoomsBoolExp>;
  rooms_aggregate?: InputMaybe<RoomsAggregateBoolExp>;
  sex?: InputMaybe<BooleanComparisonExp>;
  threads?: InputMaybe<ThreadsBoolExp>;
  threads_aggregate?: InputMaybe<ThreadsAggregateBoolExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_id?: InputMaybe<IntComparisonExp>;
  users_rooms?: InputMaybe<UsersRoomsBoolExp>;
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateBoolExp>;
  verified_email?: InputMaybe<BooleanComparisonExp>;
}

/** unique or primary key constraints on table "users" */
enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "momo_phone_number" */
  UsersMomoPhoneNumberKey = 'users_momo_phone_number_key',
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
interface UsersIncInput {
  user_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "users" */
interface UsersInsertInput {
  access_secret_key?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  bookings?: InputMaybe<BookingsArrRelInsertInput>;
  changed_avatar_manually?: InputMaybe<Scalars['Boolean']>;
  changed_displayed_name_manually?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  displayed_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token?: InputMaybe<Scalars['String']>;
  momo_phone_number?: InputMaybe<Scalars['bpchar']>;
  orders?: InputMaybe<OrdersArrRelInsertInput>;
  password_hashed?: InputMaybe<Scalars['String']>;
  request_forgot_password_at?: InputMaybe<Scalars['timestamp']>;
  rooms?: InputMaybe<RoomsArrRelInsertInput>;
  sex?: InputMaybe<Scalars['Boolean']>;
  threads?: InputMaybe<ThreadsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
  users_rooms?: InputMaybe<UsersRoomsArrRelInsertInput>;
  verified_email?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate max on columns */
interface UsersMaxFields {
  __typename?: 'users_max_fields';
  access_secret_key?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  displayed_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token?: Maybe<Scalars['String']>;
  momo_phone_number?: Maybe<Scalars['bpchar']>;
  password_hashed?: Maybe<Scalars['String']>;
  request_forgot_password_at?: Maybe<Scalars['timestamp']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** aggregate min on columns */
interface UsersMinFields {
  __typename?: 'users_min_fields';
  access_secret_key?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  displayed_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  forgot_password_token?: Maybe<Scalars['String']>;
  momo_phone_number?: Maybe<Scalars['bpchar']>;
  password_hashed?: Maybe<Scalars['String']>;
  request_forgot_password_at?: Maybe<Scalars['timestamp']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** response of any mutation on the table "users" */
interface UsersMutationResponse {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
}

/** input type for inserting object relation for remote table "users" */
interface UsersObjRelInsertInput {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
}

/** on_conflict condition type for table "users" */
interface UsersOnConflict {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
}

/** Ordering options when selecting data from "users". */
interface UsersOrderBy {
  access_secret_key?: InputMaybe<OrderBy>;
  active?: InputMaybe<OrderBy>;
  avatar?: InputMaybe<OrderBy>;
  bookings_aggregate?: InputMaybe<BookingsAggregateOrderBy>;
  changed_avatar_manually?: InputMaybe<OrderBy>;
  changed_displayed_name_manually?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  displayed_name?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  forgot_password_token?: InputMaybe<OrderBy>;
  momo_phone_number?: InputMaybe<OrderBy>;
  orders_aggregate?: InputMaybe<OrdersAggregateOrderBy>;
  password_hashed?: InputMaybe<OrderBy>;
  request_forgot_password_at?: InputMaybe<OrderBy>;
  rooms_aggregate?: InputMaybe<RoomsAggregateOrderBy>;
  sex?: InputMaybe<OrderBy>;
  threads_aggregate?: InputMaybe<ThreadsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  users_rooms_aggregate?: InputMaybe<UsersRoomsAggregateOrderBy>;
  verified_email?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: users */
interface UsersPkColumnsInput {
  user_id: Scalars['Int'];
}

/** columns and relationships of "users_rooms" */
interface UsersRooms {
  __typename?: 'users_rooms';
  created_at: Scalars['timestamp'];
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
  user_room_id: Scalars['Int'];
}

/** aggregated selection of "users_rooms" */
interface UsersRoomsAggregate {
  __typename?: 'users_rooms_aggregate';
  aggregate?: Maybe<UsersRoomsAggregateFields>;
  nodes: Array<UsersRooms>;
}

interface UsersRoomsAggregateBoolExp {
  count?: InputMaybe<UsersRoomsAggregateBoolExpCount>;
}

interface UsersRoomsAggregateBoolExpCount {
  arguments?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UsersRoomsBoolExp>;
  predicate: IntComparisonExp;
}

/** aggregate fields of "users_rooms" */
interface UsersRoomsAggregateFields {
  __typename?: 'users_rooms_aggregate_fields';
  avg?: Maybe<UsersRoomsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UsersRoomsMaxFields>;
  min?: Maybe<UsersRoomsMinFields>;
  stddev?: Maybe<UsersRoomsStddevFields>;
  stddev_pop?: Maybe<UsersRoomsStddevPopFields>;
  stddev_samp?: Maybe<UsersRoomsStddevSampFields>;
  sum?: Maybe<UsersRoomsSumFields>;
  var_pop?: Maybe<UsersRoomsVarPopFields>;
  var_samp?: Maybe<UsersRoomsVarSampFields>;
  variance?: Maybe<UsersRoomsVarianceFields>;
}


/** aggregate fields of "users_rooms" */
interface UsersRoomsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UsersRoomsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "users_rooms" */
interface UsersRoomsAggregateOrderBy {
  avg?: InputMaybe<UsersRoomsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersRoomsMaxOrderBy>;
  min?: InputMaybe<UsersRoomsMinOrderBy>;
  stddev?: InputMaybe<UsersRoomsStddevOrderBy>;
  stddev_pop?: InputMaybe<UsersRoomsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UsersRoomsStddevSampOrderBy>;
  sum?: InputMaybe<UsersRoomsSumOrderBy>;
  var_pop?: InputMaybe<UsersRoomsVarPopOrderBy>;
  var_samp?: InputMaybe<UsersRoomsVarSampOrderBy>;
  variance?: InputMaybe<UsersRoomsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "users_rooms" */
interface UsersRoomsArrRelInsertInput {
  data: Array<UsersRoomsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersRoomsOnConflict>;
}

/** aggregate avg on columns */
interface UsersRoomsAvgFields {
  __typename?: 'users_rooms_avg_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "users_rooms" */
interface UsersRoomsAvgOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "users_rooms". All fields are combined with a logical 'AND'. */
interface UsersRoomsBoolExp {
  _and?: InputMaybe<Array<UsersRoomsBoolExp>>;
  _not?: InputMaybe<UsersRoomsBoolExp>;
  _or?: InputMaybe<Array<UsersRoomsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  room?: InputMaybe<RoomsBoolExp>;
  room_id?: InputMaybe<IntComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<IntComparisonExp>;
  user_room_id?: InputMaybe<IntComparisonExp>;
}

/** unique or primary key constraints on table "users_rooms" */
enum UsersRoomsConstraint {
  /** unique or primary key constraint on columns "user_room_id" */
  UsersRoomsPkey = 'users_rooms_pkey'
}

/** input type for incrementing numeric columns in table "users_rooms" */
interface UsersRoomsIncInput {
  room_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
  user_room_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "users_rooms" */
interface UsersRoomsInsertInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  room?: InputMaybe<RoomsObjRelInsertInput>;
  room_id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['Int']>;
  user_room_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate max on columns */
interface UsersRoomsMaxFields {
  __typename?: 'users_rooms_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  room_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_room_id?: Maybe<Scalars['Int']>;
}

/** order by max() on columns of table "users_rooms" */
interface UsersRoomsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface UsersRoomsMinFields {
  __typename?: 'users_rooms_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  room_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_room_id?: Maybe<Scalars['Int']>;
}

/** order by min() on columns of table "users_rooms" */
interface UsersRoomsMinOrderBy {
  created_at?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "users_rooms" */
interface UsersRoomsMutationResponse {
  __typename?: 'users_rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UsersRooms>;
}

/** on_conflict condition type for table "users_rooms" */
interface UsersRoomsOnConflict {
  constraint: UsersRoomsConstraint;
  update_columns?: Array<UsersRoomsUpdateColumn>;
  where?: InputMaybe<UsersRoomsBoolExp>;
}

/** Ordering options when selecting data from "users_rooms". */
interface UsersRoomsOrderBy {
  created_at?: InputMaybe<OrderBy>;
  room?: InputMaybe<RoomsOrderBy>;
  room_id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: users_rooms */
interface UsersRoomsPkColumnsInput {
  user_room_id: Scalars['Int'];
}

/** select columns of table "users_rooms" */
enum UsersRoomsSelectColumn {
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
interface UsersRoomsSetInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  room_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
  user_room_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate stddev on columns */
interface UsersRoomsStddevFields {
  __typename?: 'users_rooms_stddev_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "users_rooms" */
interface UsersRoomsStddevOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface UsersRoomsStddevPopFields {
  __typename?: 'users_rooms_stddev_pop_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "users_rooms" */
interface UsersRoomsStddevPopOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface UsersRoomsStddevSampFields {
  __typename?: 'users_rooms_stddev_samp_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "users_rooms" */
interface UsersRoomsStddevSampOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** Streaming cursor of the table "users_rooms" */
interface UsersRoomsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: UsersRoomsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface UsersRoomsStreamCursorValueInput {
  created_at?: InputMaybe<Scalars['timestamp']>;
  room_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
  user_room_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate sum on columns */
interface UsersRoomsSumFields {
  __typename?: 'users_rooms_sum_fields';
  room_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_room_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "users_rooms" */
interface UsersRoomsSumOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** update columns of table "users_rooms" */
enum UsersRoomsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRoomId = 'user_room_id'
}

interface UsersRoomsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersRoomsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersRoomsSetInput>;
  where: UsersRoomsBoolExp;
}

/** aggregate var_pop on columns */
interface UsersRoomsVarPopFields {
  __typename?: 'users_rooms_var_pop_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "users_rooms" */
interface UsersRoomsVarPopOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface UsersRoomsVarSampFields {
  __typename?: 'users_rooms_var_samp_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "users_rooms" */
interface UsersRoomsVarSampOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface UsersRoomsVarianceFields {
  __typename?: 'users_rooms_variance_fields';
  room_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  user_room_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "users_rooms" */
interface UsersRoomsVarianceOrderBy {
  room_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  user_room_id?: InputMaybe<OrderBy>;
}

/** select columns of table "users" */
enum UsersSelectColumn {
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
  PasswordHashed = 'password_hashed',
  /** column name */
  RequestForgotPasswordAt = 'request_forgot_password_at',
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
interface UsersSetInput {
  access_secret_key?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  changed_avatar_manually?: InputMaybe<Scalars['Boolean']>;
  changed_displayed_name_manually?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  displayed_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token?: InputMaybe<Scalars['String']>;
  momo_phone_number?: InputMaybe<Scalars['bpchar']>;
  password_hashed?: InputMaybe<Scalars['String']>;
  request_forgot_password_at?: InputMaybe<Scalars['timestamp']>;
  sex?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
  verified_email?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate stddev on columns */
interface UsersStddevFields {
  __typename?: 'users_stddev_fields';
  user_id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
interface UsersStddevPopFields {
  __typename?: 'users_stddev_pop_fields';
  user_id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
interface UsersStddevSampFields {
  __typename?: 'users_stddev_samp_fields';
  user_id?: Maybe<Scalars['Float']>;
}

/** Streaming cursor of the table "users" */
interface UsersStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
interface UsersStreamCursorValueInput {
  access_secret_key?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  changed_avatar_manually?: InputMaybe<Scalars['Boolean']>;
  changed_displayed_name_manually?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  displayed_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  forgot_password_token?: InputMaybe<Scalars['String']>;
  momo_phone_number?: InputMaybe<Scalars['bpchar']>;
  password_hashed?: InputMaybe<Scalars['String']>;
  request_forgot_password_at?: InputMaybe<Scalars['timestamp']>;
  sex?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
  verified_email?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate sum on columns */
interface UsersSumFields {
  __typename?: 'users_sum_fields';
  user_id?: Maybe<Scalars['Int']>;
}

/** update columns of table "users" */
enum UsersUpdateColumn {
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
  PasswordHashed = 'password_hashed',
  /** column name */
  RequestForgotPasswordAt = 'request_forgot_password_at',
  /** column name */
  Sex = 'sex',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VerifiedEmail = 'verified_email'
}

interface UsersUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
}

/** aggregate var_pop on columns */
interface UsersVarPopFields {
  __typename?: 'users_var_pop_fields';
  user_id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
interface UsersVarSampFields {
  __typename?: 'users_var_samp_fields';
  user_id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
interface UsersVarianceFields {
  __typename?: 'users_variance_fields';
  user_id?: Maybe<Scalars['Float']>;
}
