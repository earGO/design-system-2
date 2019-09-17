```js
<Collapse>
  <Collapse.Panel key="key1" title="Title number 1">
  <Text p={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  </Collapse.Panel>
  <Collapse.Panel key="key2" title="Title number 2">
    <Text p={4}>Nunc efficitur lacus a nisi hendrerit congue. Ut sagittis in arcu vitae condimentum. Nunc non sapien in lacus mollis
    pharetra eleifend id turpis. Donec eget tempus nisl. Curabitur eu imperdiet felis, vel interdum ex. Vivamus ut mi
    tortor. Sed sit amet tellus tellus. Phasellus finibus nisi a velit pharetra, eget consequat lorem tristique.
    Suspendisse ut lectus in nibh sagittis ullamcorper. Nunc molestie mauris lacus, id vulputate libero cursus in.</Text>
  </Collapse.Panel>
  <Collapse.Panel key="key3" title={<Text bold>Title number 3</Text>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui laoreet, placerat enim eget, dictum arcu.
    Maecenas eu enim sem. Vestibulum hendrerit, erat nec facilisis tempor, ante leo gravida massa, eu lobortis ante
    risus eget est. Donec ultricies elementum libero, ut malesuada elit convallis eu. Suspendisse sed augue at est
    tincidunt sollicitudin vel id tellus. Praesent sollicitudin, massa vitae tristique lacinia, erat odio porta dolor,
    eu aliquam sem justo sed massa. Etiam pellentesque nec ante eget rutrum. Morbi posuere vel justo vel sagittis.
    Mauris eros libero, tincidunt quis mi commodo, rhoncus lobortis quam. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Praesent vel sem felis. Aenean mollis odio vitae purus mattis vestibulum.
    Fusce eget imperdiet elit. Maecenas sed metus elit. Aenean rhoncus tempor sollicitudin. Sed pulvinar malesuada odio
    quis molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean
    maximus justo mi, sit amet viverra elit porttitor id. Sed gravida sem dolor, ut interdum dolor aliquet non. Etiam
    faucibus nisi quis ullamcorper efficitur. Fusce maximus commodo ante, posuere rutrum odio malesuada ut. Aliquam erat
    volutpat. Nulla vel dolor leo. Nunc bibendum, libero ut auctor lobortis, turpis urna porttitor dolor, et congue
    mauris lectus ac nulla. Praesent bibendum scelerisque sagittis. Cras lorem lorem, sodales ut justo a, condimentum
    finibus velit. Vestibulum vehicula, lorem nec sollicitudin congue, urna mi venenatis felis, vel venenatis risus
    sapien a ligula. Maecenas vitae placerat dui. Donec sagittis mauris vitae ultrices euismod. Nulla sagittis aliquam
    sapien, et tempor purus.
  </Collapse.Panel>
</Collapse>
```

Параметр **defaultActiveKeys** отвечает за открытые панели по умолчанию:
```js
<Collapse defaultActiveKeys={['key1', 'key2']}>
  <Collapse.Panel key="key1" title="Title number 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
  <Collapse.Panel key="key2" title="Title number 2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
  <Collapse.Panel key="key3" title="Title number 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
</Collapse>
```

Полностью "контролируемый" вариант:
```js
initialState = {
  activeKeys: [],
}

const onChange = newKeys => {
  setState({
    activeKeys: newKeys,
  })
};

<Collapse activeKeys={state.activeKeys} onChange={onChange}>
  <Collapse.Panel key="key1" title="Title number 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
  <Collapse.Panel key="key2" title="Title number 2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
  <Collapse.Panel key="key3" title="Title number 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
</Collapse>
```

Параметр **disabled** - определяет возможность скрыть/раскрыть панель.
```js
<Collapse defaultActiveKeys={['key2']}>
  <Collapse.Panel key="key1" title="Title number 1" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
  <Collapse.Panel key="key2" title="Title number 2" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
  <Collapse.Panel key="key3" title="Title number 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Collapse.Panel>
</Collapse>
```
