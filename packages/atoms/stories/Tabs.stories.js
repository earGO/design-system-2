import React from 'react'

import {Tabs} from '../src/Tabs'
import TabPane from '../src/TabPane'
import Text from '../src/Text'
import Icon from '../src/Icon'

export default {
  title: 'Design System|Tabs',
  parameters: {
    component: Tabs
  }
}

export const basic = () => (
  <Tabs>
    <TabPane tabKey="tab1" tab="Tab 1">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </TabPane>
    <TabPane tabKey="tab2" tab="Tab 2">
      <Text>
        Nunc efficitur lacus a nisi hendrerit congue. Ut sagittis in arcu vitae
        condimentum. Nunc non sapien in lacus mollis pharetra eleifend id
        turpis. Donec eget tempus nisl. Curabitur eu imperdiet felis, vel
        interdum ex. Vivamus ut mi tortor. Sed sit amet tellus tellus. Phasellus
        finibus nisi a velit pharetra, eget consequat lorem tristique.
      </Text>
    </TabPane>
    <TabPane
      tabKey="tab3"
      tab={[<Icon name="beer" />, <Text ml={2}>Tab 3</Text>]}
    >
      <Text>
        Maecenas sed metus elit. Aenean rhoncus tempor sollicitudin. Sed
        pulvinar malesuada odio quis molestie. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Aenean
        maximus justo mi, sit amet viverra elit porttitor id. Sed gravida sem
        dolor, ut interdum dolor aliquet non. Etiam faucibus nisi quis
        ullamcorper efficitur. Fusce maximus commodo ante, posuere rutrum odio
        malesuada ut.
      </Text>
    </TabPane>
    <TabPane tabKey="tab4" tab="Tab 4" disabled>
      <Text>
        Curabitur eu imperdiet felis, vel interdum ex. Vivamus ut mi tortor. Sed
        sit amet tellus tellus. Phasellus finibus nisi a velit pharetra, eget
        consequat lorem tristique. Etiam faucibus nisi quis ullamcorper
        efficitur. Fusce maximus commodo ante, posuere rutrum odio malesuada ut.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Aenean maximus justo mi, sit amet viverra elit
        porttitor id.
      </Text>
    </TabPane>
  </Tabs>
)
basic.story = {
  parameters: {
    info: {
      text: `
        **<Tabs/>** используется совместно со своим дочерним компонентом **<Tabs.TabPane/>**
            Для каждого TabPane обязателен уникальный атрибут (ключ) tabKey. В целях составления документации TabPane импортированы как отдельный компонент.
        `
    }
  }
}
