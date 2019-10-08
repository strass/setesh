import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  query_root: ResolverTypeWrapper<{}>;
  postings_select_column: Postings_Select_Column;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  postings_order_by: Postings_Order_By;
  order_by: Order_By;
  postings_bool_exp: Postings_Bool_Exp;
  text_comparison_exp: Text_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  jsonb: ResolverTypeWrapper<Scalars["jsonb"]>;
  integer_comparison_exp: Integer_Comparison_Exp;
  name_comparison_exp: Name_Comparison_Exp;
  name: ResolverTypeWrapper<Scalars["name"]>;
  postings: ResolverTypeWrapper<Postings>;
  postings_aggregate: ResolverTypeWrapper<Postings_Aggregate>;
  postings_aggregate_fields: ResolverTypeWrapper<Postings_Aggregate_Fields>;
  postings_avg_fields: ResolverTypeWrapper<Postings_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  postings_max_fields: ResolverTypeWrapper<Postings_Max_Fields>;
  postings_min_fields: ResolverTypeWrapper<Postings_Min_Fields>;
  postings_stddev_fields: ResolverTypeWrapper<Postings_Stddev_Fields>;
  postings_stddev_pop_fields: ResolverTypeWrapper<Postings_Stddev_Pop_Fields>;
  postings_stddev_samp_fields: ResolverTypeWrapper<Postings_Stddev_Samp_Fields>;
  postings_sum_fields: ResolverTypeWrapper<Postings_Sum_Fields>;
  postings_var_pop_fields: ResolverTypeWrapper<Postings_Var_Pop_Fields>;
  postings_var_samp_fields: ResolverTypeWrapper<Postings_Var_Samp_Fields>;
  postings_variance_fields: ResolverTypeWrapper<Postings_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  postings_mutation_response: ResolverTypeWrapper<Postings_Mutation_Response>;
  postings_insert_input: Postings_Insert_Input;
  postings_on_conflict: Postings_On_Conflict;
  postings_constraint: Postings_Constraint;
  postings_update_column: Postings_Update_Column;
  postings_append_input: Postings_Append_Input;
  postings_delete_at_path_input: Postings_Delete_At_Path_Input;
  postings_delete_elem_input: Postings_Delete_Elem_Input;
  postings_delete_key_input: Postings_Delete_Key_Input;
  postings_inc_input: Postings_Inc_Input;
  postings_prepend_input: Postings_Prepend_Input;
  postings_set_input: Postings_Set_Input;
  subscription_root: ResolverTypeWrapper<{}>;
  conflict_action: Conflict_Action;
  postings_aggregate_order_by: Postings_Aggregate_Order_By;
  postings_avg_order_by: Postings_Avg_Order_By;
  postings_max_order_by: Postings_Max_Order_By;
  postings_min_order_by: Postings_Min_Order_By;
  postings_stddev_order_by: Postings_Stddev_Order_By;
  postings_stddev_pop_order_by: Postings_Stddev_Pop_Order_By;
  postings_stddev_samp_order_by: Postings_Stddev_Samp_Order_By;
  postings_sum_order_by: Postings_Sum_Order_By;
  postings_var_pop_order_by: Postings_Var_Pop_Order_By;
  postings_var_samp_order_by: Postings_Var_Samp_Order_By;
  postings_variance_order_by: Postings_Variance_Order_By;
  postings_arr_rel_insert_input: Postings_Arr_Rel_Insert_Input;
  postings_obj_rel_insert_input: Postings_Obj_Rel_Insert_Input;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  query_root: {};
  postings_select_column: Postings_Select_Column;
  Int: Scalars["Int"];
  postings_order_by: Postings_Order_By;
  order_by: Order_By;
  postings_bool_exp: Postings_Bool_Exp;
  text_comparison_exp: Text_Comparison_Exp;
  String: Scalars["String"];
  Boolean: Scalars["Boolean"];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  timestamptz: Scalars["timestamptz"];
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  jsonb: Scalars["jsonb"];
  integer_comparison_exp: Integer_Comparison_Exp;
  name_comparison_exp: Name_Comparison_Exp;
  name: Scalars["name"];
  postings: Postings;
  postings_aggregate: Postings_Aggregate;
  postings_aggregate_fields: Postings_Aggregate_Fields;
  postings_avg_fields: Postings_Avg_Fields;
  Float: Scalars["Float"];
  postings_max_fields: Postings_Max_Fields;
  postings_min_fields: Postings_Min_Fields;
  postings_stddev_fields: Postings_Stddev_Fields;
  postings_stddev_pop_fields: Postings_Stddev_Pop_Fields;
  postings_stddev_samp_fields: Postings_Stddev_Samp_Fields;
  postings_sum_fields: Postings_Sum_Fields;
  postings_var_pop_fields: Postings_Var_Pop_Fields;
  postings_var_samp_fields: Postings_Var_Samp_Fields;
  postings_variance_fields: Postings_Variance_Fields;
  mutation_root: {};
  postings_mutation_response: Postings_Mutation_Response;
  postings_insert_input: Postings_Insert_Input;
  postings_on_conflict: Postings_On_Conflict;
  postings_constraint: Postings_Constraint;
  postings_update_column: Postings_Update_Column;
  postings_append_input: Postings_Append_Input;
  postings_delete_at_path_input: Postings_Delete_At_Path_Input;
  postings_delete_elem_input: Postings_Delete_Elem_Input;
  postings_delete_key_input: Postings_Delete_Key_Input;
  postings_inc_input: Postings_Inc_Input;
  postings_prepend_input: Postings_Prepend_Input;
  postings_set_input: Postings_Set_Input;
  subscription_root: {};
  conflict_action: Conflict_Action;
  postings_aggregate_order_by: Postings_Aggregate_Order_By;
  postings_avg_order_by: Postings_Avg_Order_By;
  postings_max_order_by: Postings_Max_Order_By;
  postings_min_order_by: Postings_Min_Order_By;
  postings_stddev_order_by: Postings_Stddev_Order_By;
  postings_stddev_pop_order_by: Postings_Stddev_Pop_Order_By;
  postings_stddev_samp_order_by: Postings_Stddev_Samp_Order_By;
  postings_sum_order_by: Postings_Sum_Order_By;
  postings_var_pop_order_by: Postings_Var_Pop_Order_By;
  postings_var_samp_order_by: Postings_Var_Samp_Order_By;
  postings_variance_order_by: Postings_Variance_Order_By;
  postings_arr_rel_insert_input: Postings_Arr_Rel_Insert_Input;
  postings_obj_rel_insert_input: Postings_Obj_Rel_Insert_Input;
};

export interface JsonbScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["jsonb"], any> {
  name: "jsonb";
}

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_postings?: Resolver<
    Maybe<ResolversTypes["postings_mutation_response"]>,
    ParentType,
    ContextType,
    Mutation_RootDelete_PostingsArgs
  >;
  insert_postings?: Resolver<
    Maybe<ResolversTypes["postings_mutation_response"]>,
    ParentType,
    ContextType,
    Mutation_RootInsert_PostingsArgs
  >;
  update_postings?: Resolver<
    Maybe<ResolversTypes["postings_mutation_response"]>,
    ParentType,
    ContextType,
    Mutation_RootUpdate_PostingsArgs
  >;
};

export interface NameScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["name"], any> {
  name: "name";
}

export type PostingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings"] = ResolversParentTypes["postings"]
> = {
  author_icon?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  author_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  author_url?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fields?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    PostingsFieldsArgs
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes["name"]>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
};

export type Postings_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_aggregate"] = ResolversParentTypes["postings_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["postings_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["postings"]>, ParentType, ContextType>;
};

export type Postings_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_aggregate_fields"] = ResolversParentTypes["postings_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["postings_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType,
    Postings_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<
    Maybe<ResolversTypes["postings_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["postings_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["postings_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["postings_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["postings_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["postings_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["postings_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["postings_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["postings_variance_fields"]>,
    ParentType,
    ContextType
  >;
};

export type Postings_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_avg_fields"] = ResolversParentTypes["postings_avg_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Postings_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_max_fields"] = ResolversParentTypes["postings_max_fields"]
> = {
  author_icon?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  author_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  author_url?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
};

export type Postings_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_min_fields"] = ResolversParentTypes["postings_min_fields"]
> = {
  author_icon?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  author_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  author_url?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
};

export type Postings_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_mutation_response"] = ResolversParentTypes["postings_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["postings"]>,
    ParentType,
    ContextType
  >;
};

export type Postings_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_stddev_fields"] = ResolversParentTypes["postings_stddev_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Postings_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_stddev_pop_fields"] = ResolversParentTypes["postings_stddev_pop_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Postings_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_stddev_samp_fields"] = ResolversParentTypes["postings_stddev_samp_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Postings_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_sum_fields"] = ResolversParentTypes["postings_sum_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type Postings_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_var_pop_fields"] = ResolversParentTypes["postings_var_pop_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Postings_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_var_samp_fields"] = ResolversParentTypes["postings_var_samp_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Postings_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["postings_variance_fields"] = ResolversParentTypes["postings_variance_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  postings?: Resolver<
    Array<ResolversTypes["postings"]>,
    ParentType,
    ContextType,
    Query_RootPostingsArgs
  >;
  postings_aggregate?: Resolver<
    ResolversTypes["postings_aggregate"],
    ParentType,
    ContextType,
    Query_RootPostings_AggregateArgs
  >;
  postings_by_pk?: Resolver<
    Maybe<ResolversTypes["postings"]>,
    ParentType,
    ContextType,
    Query_RootPostings_By_PkArgs
  >;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  postings?: SubscriptionResolver<
    Array<ResolversTypes["postings"]>,
    ParentType,
    ContextType,
    Subscription_RootPostingsArgs
  >;
  postings_aggregate?: SubscriptionResolver<
    ResolversTypes["postings_aggregate"],
    ParentType,
    ContextType,
    Subscription_RootPostings_AggregateArgs
  >;
  postings_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["postings"]>,
    ParentType,
    ContextType,
    Subscription_RootPostings_By_PkArgs
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type Resolvers<ContextType = any> = {
  jsonb?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  name?: GraphQLScalarType;
  postings?: PostingsResolvers<ContextType>;
  postings_aggregate?: Postings_AggregateResolvers<ContextType>;
  postings_aggregate_fields?: Postings_Aggregate_FieldsResolvers<ContextType>;
  postings_avg_fields?: Postings_Avg_FieldsResolvers<ContextType>;
  postings_max_fields?: Postings_Max_FieldsResolvers<ContextType>;
  postings_min_fields?: Postings_Min_FieldsResolvers<ContextType>;
  postings_mutation_response?: Postings_Mutation_ResponseResolvers<ContextType>;
  postings_stddev_fields?: Postings_Stddev_FieldsResolvers<ContextType>;
  postings_stddev_pop_fields?: Postings_Stddev_Pop_FieldsResolvers<ContextType>;
  postings_stddev_samp_fields?: Postings_Stddev_Samp_FieldsResolvers<
    ContextType
  >;
  postings_sum_fields?: Postings_Sum_FieldsResolvers<ContextType>;
  postings_var_pop_fields?: Postings_Var_Pop_FieldsResolvers<ContextType>;
  postings_var_samp_fields?: Postings_Var_Samp_FieldsResolvers<ContextType>;
  postings_variance_fields?: Postings_Variance_FieldsResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
