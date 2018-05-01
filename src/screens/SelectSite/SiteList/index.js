import React from 'react';
import { SectionList, View, Text } from 'react-native';
import SiteItem from './SiteItem';
import { SiteList as styles } from './styles';

const sections = [
  {
    title: 'title',
    data: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]
  },
  {
    title: 'title',
    data: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]
  },
  {
    title: 'title',
    data: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]
  },
  {
    title: 'title',
    data: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]
  }
];

export default class SiteList extends React.Component {
  renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderSectionFooter() {
    return (<View style={styles.sectionFooterContainer} />);
  }

  renderItem({ item }) {
    return (
      <SiteItem
        city={item}
        selected={item.id === 'a'}
      />
    );
  }

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        keyExtractor={(item) => {
          return `${item.id}`;
        }}
        stickySectionHeadersEnabled
        renderSectionHeader={this.renderSectionHeader}
        renderSectionFooter={this.renderSectionFooter}
        renderItem={this.renderItem}
        ItemSeparatorComponent={({ highlighted }) => {
          const style = [styles.separator];
          if (highlighted) {
            style.push(styles.separatorActive);
          }

          return <View style={style} />;
        }}
      />
    );
  }
}

