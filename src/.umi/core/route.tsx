// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  return {
    routes: {"1":{"path":"/","redirect":"/home","parentId":"ant-design-pro-layout","id":"1"},"2":{"name":"首页","path":"/home","file":"@/pages/Home/index.tsx","parentId":"ant-design-pro-layout","id":"2"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","file":"@/.umi/plugin-layout/Layout.tsx","isLayout":true}},
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__Home__index" */'@/pages/Home/index.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: ".umi__plugin-layout__Layout" */'@/.umi/plugin-layout/Layout.tsx')),
},
  };
}