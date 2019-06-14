


```js

initialState = {
  treeData: [{ title: "Chicken", children: [{ title: "Egg" }] }]
}
;
<div style={{ height: 400 }}>
    <Tree treeData={state.treeData} onChange={treeData => setState({ treeData })} />
</div>
```