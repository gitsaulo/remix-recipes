import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
  route("/discover","routes/discover.txs"), 
] satisfies RouteConfig;
