import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING } from '../../../styles';
// import px from '../../../utils/'


export const Body = StyleSheet.create({
  contianer: {
    // flex: 1,
    overflow: 'hidden'
  }
});

const SECTION_CONTAINER = {
  backgroundColor: COMPONENT_BG_COLOR,
  marginTop: PADDING.md
};

export const OrderSection = StyleSheet.create({
  container: {
    ...SECTION_CONTAINER
  }
});

export const ProductSection = StyleSheet.create({
  container: {
    ...SECTION_CONTAINER
  }
});


export const FunctionSection = StyleSheet.create({
  container: {
    ...SECTION_CONTAINER
  }
});


export const OtherSection = StyleSheet.create({
  container: {
    ...SECTION_CONTAINER
  }
});
