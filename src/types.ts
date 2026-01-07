import type {
  DefaultContext,
  DefaultState,
  Middleware,
  ParameterizedContext,
} from "koa";
import { createRouteTree } from "./route-tree.ts";

export type RouterContext<
  StateT = DefaultState,
  ContextT = DefaultContext,
  ResponseBodyT = unknown,
> = ParameterizedContext<
  StateT,
  ContextT &
    Exclude<ReturnType<ReturnType<typeof createRouteTree>["match"]>, undefined>,
  ResponseBodyT
>;

export type RouterMiddleware<
  StateT = DefaultState,
  ContextT = DefaultContext,
  ResponseBodyT = unknown,
> = Middleware<
  StateT,
  RouterContext<StateT, ContextT, ResponseBodyT>,
  ResponseBodyT
>;
