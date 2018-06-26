/**
 * SectionList
 * 包装 react-native 的SectionList组件。
 * 增加 `renderSection()` 代替 `renderItem()`
 * 所以不再依赖sections[i]结构的`data`属性
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SectionList } from 'react-native';


export default class SectionListComponent extends React.Component {
  static propTypes = {
    ...SectionList.propTypes,
    // 参数为 section
    renderSection: PropTypes.func
  };

  // 使用renderSection代替renderItem
  renderItem = ({ item }) => {
    const { renderSection } = this.props;
    if (item && item.renderSection) {
      return item.renderSection(item);
    }

    return renderSection(item);
  };

  render() {
    const { sections, ...rest } = this.props;

    // 转换为react-native SectionList的结构
    const virtualSections = sections.map((section) => {
      return {
        ...section,
        data: [section]
      };
    });

    return (
      <SectionList
        {...rest}
        sections={virtualSections}
        renderItem={this.renderItem}
      />
    );
  }
}
