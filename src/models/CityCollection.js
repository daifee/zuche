/**
 * @flow
 * CityCollection 城市计划
 */
import ModelCollection from './ModelCollection';
import City from './City';
import { type DOC_ARRAY } from './flow.type';

export default class CityCollection extends ModelCollection {
  constructor(docArr: DOC_ARRAY) {
    super(City, docArr);
  }

  groupForMultipleColumnsSectionList() {
    const result = [];

    const sectionMapper = {};
    function getSection(model) {
      const key = model.letter;
      let section = sectionMapper[key];
      if (!section) {
        section = {
          title: model.letter,
          data: [{ key }],
          flatListData: []
        };
        sectionMapper[key] = section;
        result.push(section);
      }

      return section;
    }

    // hot
    const hotSection = {
      title: '热门',
      data: [{ key: 'hot' }],
      flatListData: []
    };
    result.unshift(hotSection);

    this.each((model) => {
      const section = getSection(model);
      section.flatListData.push(model);

      // hot
      if (model.hot) {
        hotSection.flatListData.push(model);
      }
    });

    // TODO sort

    return result;
  }
}

