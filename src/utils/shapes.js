import PropTypes from 'prop-types';

import {
  MAPPING_DETAILS_ACTIONS,
  MAPPING_DETAILS_SUBACTIONS,
  MAPPING_DETAILS_POSITION,
  BOOLEAN_ACTIONS,
  REPEATABLE_ACTIONS,
  CRITERION_TYPES,
  COMPARISON_PARTS,
  QUALIFIER_TYPES, STATIC_VALUE_TYPES,
} from './constants';

export const mappingMARCDataShape = PropTypes.shape({
  text: PropTypes.string,
  find: PropTypes.string,
  replaceWith: PropTypes.string,
  marcField: PropTypes.shape({
    field: PropTypes.string,
    indicator1: PropTypes.string,
    indicator2: PropTypes.string,
    subfields: PropTypes.arrayOf(PropTypes.shape({ subfield: PropTypes.string })),
  }),
});

export const mappingMARCSubfieldShape = PropTypes.shape({
  subfield: PropTypes.string,
  data: mappingMARCDataShape,
  subaction: PropTypes.oneOf([...Object.values(MAPPING_DETAILS_SUBACTIONS)]),
  position: PropTypes.oneOf([...Object.values(MAPPING_DETAILS_POSITION)]),
});

export const mappingMARCFieldShape = PropTypes.shape({
  order: PropTypes.number.isRequired,
  field: PropTypes.shape({
    subfields: PropTypes.arrayOf(mappingMARCSubfieldShape.isRequired).isRequired,
    field: PropTypes.string,
    indicator1: PropTypes.string,
    indicator2: PropTypes.string,
  }).isRequired,
  action: PropTypes.oneOf([...Object.values(MAPPING_DETAILS_ACTIONS)]),
});

export const mappingProfileSubfieldShape = PropTypes.shape({
  order: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
    value: PropTypes.string,
    enabled: PropTypes.bool,
    booleanFieldAction: PropTypes.oneOf(Object.values(BOOLEAN_ACTIONS)),
    repeatableFieldAction: PropTypes.oneOf(Object.values(REPEATABLE_ACTIONS)),
    acceptedValues: PropTypes.object,
  })),
});

export const mappingProfileFieldShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  value: PropTypes.string,
  enabled: PropTypes.bool,
  booleanFieldAction: PropTypes.oneOf(Object.values(BOOLEAN_ACTIONS)),
  repeatableFieldAction: PropTypes.oneOf(Object.values(REPEATABLE_ACTIONS)),
  acceptedValues: PropTypes.object,
  subfields: PropTypes.arrayOf(mappingProfileSubfieldShape),
});

export const mappingInstanceInitialFieldsShape = PropTypes.shape({
  statisticalCodes: mappingProfileSubfieldShape,
  alternativeTitles: mappingProfileSubfieldShape,
  seriesStatements: mappingProfileSubfieldShape,
  precedingTitles: mappingProfileSubfieldShape,
  succeedingTitles: mappingProfileSubfieldShape,
  identifiers: mappingProfileSubfieldShape,
  contributors: mappingProfileSubfieldShape,
  publications: mappingProfileSubfieldShape,
  editions: mappingProfileSubfieldShape,
  physicalDescriptions: mappingProfileSubfieldShape,
  natureOfContentTermIds: mappingProfileSubfieldShape,
  instanceFormatIds: mappingProfileSubfieldShape,
  languages: mappingProfileSubfieldShape,
  publicationFrequency: mappingProfileSubfieldShape,
  publicationRange: mappingProfileSubfieldShape,
  notes: mappingProfileSubfieldShape,
  electronicAccess: mappingProfileSubfieldShape,
  subjects: mappingProfileSubfieldShape,
  classifications: mappingProfileSubfieldShape,
  parentInstances: mappingProfileSubfieldShape,
  childInstances: mappingProfileSubfieldShape,
});

export const mappingInstanceRefTablesShape = PropTypes.shape({
  statisticalCodes: PropTypes.arrayOf(mappingProfileSubfieldShape),
  alternativeTitles: PropTypes.arrayOf(mappingProfileSubfieldShape),
  seriesStatements: PropTypes.arrayOf(mappingProfileSubfieldShape),
  precedingTitles: PropTypes.arrayOf(mappingProfileSubfieldShape),
  succeedingTitles: PropTypes.arrayOf(mappingProfileSubfieldShape),
  identifiers: PropTypes.arrayOf(mappingProfileSubfieldShape),
  contributors: PropTypes.arrayOf(mappingProfileSubfieldShape),
  publications: PropTypes.arrayOf(mappingProfileSubfieldShape),
  editions: PropTypes.arrayOf(mappingProfileSubfieldShape),
  physicalDescriptions: PropTypes.arrayOf(mappingProfileSubfieldShape),
  natureOfContentTermIds: PropTypes.arrayOf(mappingProfileSubfieldShape),
  instanceFormatIds: PropTypes.arrayOf(mappingProfileSubfieldShape),
  languages: PropTypes.arrayOf(mappingProfileSubfieldShape),
  publicationFrequency: PropTypes.arrayOf(mappingProfileSubfieldShape),
  publicationRange: PropTypes.arrayOf(mappingProfileSubfieldShape),
  notes: PropTypes.arrayOf(mappingProfileSubfieldShape),
  electronicAccess: PropTypes.arrayOf(mappingProfileSubfieldShape),
  subjects: PropTypes.arrayOf(mappingProfileSubfieldShape),
  classifications: PropTypes.arrayOf(mappingProfileSubfieldShape),
  parentInstances: PropTypes.arrayOf(mappingProfileSubfieldShape),
  childInstances: PropTypes.arrayOf(mappingProfileSubfieldShape),
});

export const mappingItemInitialFieldsShape = PropTypes.shape({
  formerIds: mappingProfileSubfieldShape,
  statisticalCodeIds: mappingProfileSubfieldShape,
  yearCaption: mappingProfileSubfieldShape,
  notes: mappingProfileSubfieldShape,
  circulationNotes: mappingProfileSubfieldShape,
  electronicAccess: mappingProfileSubfieldShape,
});

export const mappingItemRefTablesShape = PropTypes.shape({
  formerIds: PropTypes.arrayOf(mappingProfileSubfieldShape),
  statisticalCodeIds: PropTypes.arrayOf(mappingProfileSubfieldShape),
  yearCaption: PropTypes.arrayOf(mappingProfileSubfieldShape),
  notes: PropTypes.arrayOf(mappingProfileSubfieldShape),
  circulationNotes: PropTypes.arrayOf(mappingProfileSubfieldShape),
  electronicAccess: PropTypes.arrayOf(mappingProfileSubfieldShape),
});

export const mappingHoldingsInitialFieldsShape = PropTypes.shape({
  formerIds: mappingProfileSubfieldShape,
  statisticalCodeIds: mappingProfileSubfieldShape,
  holdingStatements: mappingProfileSubfieldShape,
  holdingsStatementsForSupplements: mappingProfileSubfieldShape,
  holdingsStatementsForIndexes: mappingProfileSubfieldShape,
  notes: mappingProfileSubfieldShape,
  electronicAccess: mappingProfileSubfieldShape,
  receivingHistory: mappingProfileSubfieldShape,
});

export const mappingHoldingsRefTablesShape = PropTypes.shape({
  formerIds: PropTypes.arrayOf(mappingProfileSubfieldShape),
  statisticalCodeIds: PropTypes.arrayOf(mappingProfileSubfieldShape),
  holdingStatements: PropTypes.arrayOf(mappingProfileSubfieldShape),
  holdingsStatementsForSupplements: PropTypes.arrayOf(mappingProfileSubfieldShape),
  holdingsStatementsForIndexes: PropTypes.arrayOf(mappingProfileSubfieldShape),
  notes: PropTypes.arrayOf(mappingProfileSubfieldShape),
  electronicAccess: PropTypes.arrayOf(mappingProfileSubfieldShape),
  receivingHistory: PropTypes.arrayOf(mappingProfileSubfieldShape),
});

export const okapiShape = PropTypes.shape({
  tenant: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const qualifierShape = PropTypes.shape({
  comparisonPart: PropTypes.oneOf(Object.values(COMPARISON_PARTS)),
  qualifierType: PropTypes.oneOf(Object.values(QUALIFIER_TYPES)),
  qualifierValue: PropTypes.string,
});

export const matchExpressionShape = PropTypes.shape({
  dataValueType: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  qualifier: qualifierShape,
});

export const matchDetailsShape = PropTypes.shape({
  existingMatchExpression: matchExpressionShape.isRequired,
  existingRecordType: PropTypes.string.isRequired,
  incomingMatchExpression: matchExpressionShape.isRequired,
  incomingRecordType: PropTypes.string.isRequired,
  matchCriterion: PropTypes.oneOf(Object.values(CRITERION_TYPES)).isRequired,
});

export const staticValueDetailsShape = PropTypes.shape({
  staticValueType: PropTypes.oneOf(Object.values(STATIC_VALUE_TYPES)),
  text: PropTypes.string,
  number: PropTypes.string,
  exactDate: PropTypes.string,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
});
