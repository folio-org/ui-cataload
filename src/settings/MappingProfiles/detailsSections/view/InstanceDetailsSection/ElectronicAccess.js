import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Accordion,
  Row,
  Col,
  MultiColumnList,
} from '@folio/stripes/components';

import { ProhibitionIcon } from '../../../../../components';

import {
  transformSubfieldsData,
  getContentData,
  getFieldValue,
} from '../../utils';
import { TRANSLATION_ID_PREFIX } from '../../constants';
import { mappingProfileFieldShape } from '../../../../../utils';

import css from '../../../MappingProfiles.css';

export const ElectronicAccess = ({ mappingDetails }) => {
  const prohibitionIconElement = fieldName => <ProhibitionIcon fieldName={fieldName} />;

  const electronicAccess = getFieldValue(mappingDetails, 'electronicAccess', 'subfields');

  const electronicAccessVisibleColumns = ['relationshipId', 'uri', 'linkText', 'materialsSpecification', 'publicNote'];
  const electronicAccessMapping = {
    relationshipId: (
      <FormattedMessage id={`${TRANSLATION_ID_PREFIX}.EAccess.field.relationship`} />
    ),
    uri: (
      <FormattedMessage id={`${TRANSLATION_ID_PREFIX}.EAccess.field.uri`} />
    ),
    linkText: (
      <FormattedMessage id={`${TRANSLATION_ID_PREFIX}.EAccess.field.linkText`} />
    ),
    materialsSpecification: (
      <FormattedMessage id={`${TRANSLATION_ID_PREFIX}.EAccess.field.materialsSpecified`} />
    ),
    publicNote: (
      <FormattedMessage id={`${TRANSLATION_ID_PREFIX}.EAccess.field.urlPublicNote`} />
    ),
  };
  const electronicAccessFormatter = {
    relationshipId: x => x?.relationshipId || prohibitionIconElement('electronic-access-relationship-id'),
    uri: x => x?.uri || prohibitionIconElement('electronic-access-uri'),
    linkText: x => x?.linkText || prohibitionIconElement('electronic-access-link-text'),
    materialsSpecification: x => x?.materialsSpecification || prohibitionIconElement('electronic-materials-specification'),
    publicNote: x => x?.publicNote || prohibitionIconElement('electronic-public-note'),
  };
  const electronicAccessFieldsMap = [
    {
      field: 'relationshipId',
      key: 'value',
    }, {
      field: 'uri',
      key: 'value',
    }, {
      field: 'linkText',
      key: 'value',
    }, {
      field: 'materialsSpecification',
      key: 'value',
    }, {
      field: 'publicNote',
      key: 'value',
    },
  ];
  const electronicAccessData = transformSubfieldsData(electronicAccess, electronicAccessFieldsMap);

  return (
    <Accordion
      id="instance-electronic-access"
      label={<FormattedMessage id={`${TRANSLATION_ID_PREFIX}.EAccess.section`} />}
    >
      <Row left="xs">
        <Col
          data-test-electronic-access
          xs={12}
          className={css.colWithTable}
        >
          <MultiColumnList
            contentData={getContentData(electronicAccessData)}
            visibleColumns={electronicAccessVisibleColumns}
            columnMapping={electronicAccessMapping}
            formatter={electronicAccessFormatter}
          />
        </Col>
      </Row>
    </Accordion>
  );
};

ElectronicAccess.propTypes = { mappingDetails: PropTypes.arrayOf(mappingProfileFieldShape).isRequired };
