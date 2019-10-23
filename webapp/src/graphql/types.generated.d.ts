export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  jsonb: any;
  name: any;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = "ignore",
  /** update the row with the given values */
  Update = "update"
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "postings" */
  delete_postings?: Maybe<Postings_Mutation_Response>;
  /** insert data into the table: "postings" */
  insert_postings?: Maybe<Postings_Mutation_Response>;
  /** update data of the table: "postings" */
  update_postings?: Maybe<Postings_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_PostingsArgs = {
  where: Postings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_PostingsArgs = {
  objects: Array<Postings_Insert_Input>;
  on_conflict?: Maybe<Postings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_PostingsArgs = {
  _append?: Maybe<Postings_Append_Input>;
  _delete_at_path?: Maybe<Postings_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Postings_Delete_Elem_Input>;
  _delete_key?: Maybe<Postings_Delete_Key_Input>;
  _inc?: Maybe<Postings_Inc_Input>;
  _prepend?: Maybe<Postings_Prepend_Input>;
  _set?: Maybe<Postings_Set_Input>;
  where: Postings_Bool_Exp;
};

/** expression to compare columns of type name. All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: Maybe<Scalars["name"]>;
  _gt?: Maybe<Scalars["name"]>;
  _gte?: Maybe<Scalars["name"]>;
  _in?: Maybe<Array<Scalars["name"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["name"]>;
  _lte?: Maybe<Scalars["name"]>;
  _neq?: Maybe<Scalars["name"]>;
  _nin?: Maybe<Array<Scalars["name"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

/** columns and relationships of "postings" */
export type Postings = {
  __typename?: "postings";
  author_icon?: Maybe<Scalars["String"]>;
  author_name?: Maybe<Scalars["String"]>;
  author_url?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  description?: Maybe<Scalars["String"]>;
  fields?: Maybe<Scalars["jsonb"]>;
  id: Scalars["Int"];
  name: Scalars["String"];
  slug?: Maybe<Scalars["name"]>;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "postings" */
export type PostingsFieldsArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "postings" */
export type Postings_Aggregate = {
  __typename?: "postings_aggregate";
  aggregate?: Maybe<Postings_Aggregate_Fields>;
  nodes: Array<Postings>;
};

/** aggregate fields of "postings" */
export type Postings_Aggregate_Fields = {
  __typename?: "postings_aggregate_fields";
  avg?: Maybe<Postings_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Postings_Max_Fields>;
  min?: Maybe<Postings_Min_Fields>;
  stddev?: Maybe<Postings_Stddev_Fields>;
  stddev_pop?: Maybe<Postings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Postings_Stddev_Samp_Fields>;
  sum?: Maybe<Postings_Sum_Fields>;
  var_pop?: Maybe<Postings_Var_Pop_Fields>;
  var_samp?: Maybe<Postings_Var_Samp_Fields>;
  variance?: Maybe<Postings_Variance_Fields>;
};

/** aggregate fields of "postings" */
export type Postings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Postings_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "postings" */
export type Postings_Aggregate_Order_By = {
  avg?: Maybe<Postings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Postings_Max_Order_By>;
  min?: Maybe<Postings_Min_Order_By>;
  stddev?: Maybe<Postings_Stddev_Order_By>;
  stddev_pop?: Maybe<Postings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Postings_Stddev_Samp_Order_By>;
  sum?: Maybe<Postings_Sum_Order_By>;
  var_pop?: Maybe<Postings_Var_Pop_Order_By>;
  var_samp?: Maybe<Postings_Var_Samp_Order_By>;
  variance?: Maybe<Postings_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Postings_Append_Input = {
  fields?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "postings" */
export type Postings_Arr_Rel_Insert_Input = {
  data: Array<Postings_Insert_Input>;
  on_conflict?: Maybe<Postings_On_Conflict>;
};

/** aggregate avg on columns */
export type Postings_Avg_Fields = {
  __typename?: "postings_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "postings" */
export type Postings_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "postings". All fields are combined with a logical 'AND'. */
export type Postings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Postings_Bool_Exp>>>;
  _not?: Maybe<Postings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Postings_Bool_Exp>>>;
  author_icon?: Maybe<Text_Comparison_Exp>;
  author_name?: Maybe<Text_Comparison_Exp>;
  author_url?: Maybe<Text_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<Text_Comparison_Exp>;
  fields?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  slug?: Maybe<Name_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "postings" */
export enum Postings_Constraint {
  /** unique or primary key constraint */
  PostingsPkey = "postings_pkey",
  /** unique or primary key constraint */
  PostingsSlugKey = "postings_slug_key"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Postings_Delete_At_Path_Input = {
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 **/
export type Postings_Delete_Elem_Input = {
  fields?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Postings_Delete_Key_Input = {
  fields?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "postings" */
export type Postings_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "postings" */
export type Postings_Insert_Input = {
  author_icon?: Maybe<Scalars["String"]>;
  author_name?: Maybe<Scalars["String"]>;
  author_url?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  fields?: Maybe<Scalars["jsonb"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["name"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Postings_Max_Fields = {
  __typename?: "postings_max_fields";
  author_icon?: Maybe<Scalars["String"]>;
  author_name?: Maybe<Scalars["String"]>;
  author_url?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "postings" */
export type Postings_Max_Order_By = {
  author_icon?: Maybe<Order_By>;
  author_name?: Maybe<Order_By>;
  author_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Postings_Min_Fields = {
  __typename?: "postings_min_fields";
  author_icon?: Maybe<Scalars["String"]>;
  author_name?: Maybe<Scalars["String"]>;
  author_url?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "postings" */
export type Postings_Min_Order_By = {
  author_icon?: Maybe<Order_By>;
  author_name?: Maybe<Order_By>;
  author_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "postings" */
export type Postings_Mutation_Response = {
  __typename?: "postings_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Postings>;
};

/** input type for inserting object relation for remote table "postings" */
export type Postings_Obj_Rel_Insert_Input = {
  data: Postings_Insert_Input;
  on_conflict?: Maybe<Postings_On_Conflict>;
};

/** on conflict condition type for table "postings" */
export type Postings_On_Conflict = {
  constraint: Postings_Constraint;
  update_columns: Array<Postings_Update_Column>;
};

/** ordering options when selecting data from "postings" */
export type Postings_Order_By = {
  author_icon?: Maybe<Order_By>;
  author_name?: Maybe<Order_By>;
  author_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fields?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Postings_Prepend_Input = {
  fields?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "postings" */
export enum Postings_Select_Column {
  /** column name */
  AuthorIcon = "author_icon",
  /** column name */
  AuthorName = "author_name",
  /** column name */
  AuthorUrl = "author_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Fields = "fields",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Slug = "slug",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "postings" */
export type Postings_Set_Input = {
  author_icon?: Maybe<Scalars["String"]>;
  author_name?: Maybe<Scalars["String"]>;
  author_url?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  fields?: Maybe<Scalars["jsonb"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["name"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Postings_Stddev_Fields = {
  __typename?: "postings_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "postings" */
export type Postings_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Postings_Stddev_Pop_Fields = {
  __typename?: "postings_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "postings" */
export type Postings_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Postings_Stddev_Samp_Fields = {
  __typename?: "postings_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "postings" */
export type Postings_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Postings_Sum_Fields = {
  __typename?: "postings_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "postings" */
export type Postings_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "postings" */
export enum Postings_Update_Column {
  /** column name */
  AuthorIcon = "author_icon",
  /** column name */
  AuthorName = "author_name",
  /** column name */
  AuthorUrl = "author_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Fields = "fields",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Slug = "slug",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Postings_Var_Pop_Fields = {
  __typename?: "postings_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "postings" */
export type Postings_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Postings_Var_Samp_Fields = {
  __typename?: "postings_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "postings" */
export type Postings_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Postings_Variance_Fields = {
  __typename?: "postings_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "postings" */
export type Postings_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  /** fetch aggregated fields from the table: "postings" */
  postings_aggregate: Postings_Aggregate;
  /** fetch data from the table: "postings" using primary key columns */
  postings_by_pk?: Maybe<Postings>;
};

/** query root */
export type Query_RootPostingsArgs = {
  distinct_on?: Maybe<Array<Postings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Postings_Order_By>>;
  where?: Maybe<Postings_Bool_Exp>;
};

/** query root */
export type Query_RootPostings_AggregateArgs = {
  distinct_on?: Maybe<Array<Postings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Postings_Order_By>>;
  where?: Maybe<Postings_Bool_Exp>;
};

/** query root */
export type Query_RootPostings_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "postings" */
  postings: Array<Postings>;
  /** fetch aggregated fields from the table: "postings" */
  postings_aggregate: Postings_Aggregate;
  /** fetch data from the table: "postings" using primary key columns */
  postings_by_pk?: Maybe<Postings>;
};

/** subscription root */
export type Subscription_RootPostingsArgs = {
  distinct_on?: Maybe<Array<Postings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Postings_Order_By>>;
  where?: Maybe<Postings_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPostings_AggregateArgs = {
  distinct_on?: Maybe<Array<Postings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Postings_Order_By>>;
  where?: Maybe<Postings_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPostings_By_PkArgs = {
  id: Scalars["Int"];
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};
