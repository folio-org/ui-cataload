import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';

import {
  Accordion,
  Row,
  Col,
  TextField,
} from '@folio/stripes/components';

import { WithValidation } from '../../../../../components';

import { getFieldName } from '../../utils';
import { TRANSLATION_ID_PREFIX } from '../../constants';

export const Acquisition = () => {
  return (
    <Accordion
      id="holdings-acquisition"
      label={<FormattedMessage id={`${TRANSLATION_ID_PREFIX}.acquisition.section`} />}
    >
      <Row left="xs">
        <Col
          data-test-acquisition-method
          xs={4}
        >
          <WithValidation isRemoveValueAllowed>
            {validation => (
              <Field
                component={TextField}
                name={getFieldName(23)}
                label={<FormattedMessage id={`${TRANSLATION_ID_PREFIX}.field.acquisitionMethod`} />}
                validate={[validation]}
              />
            )}
          </WithValidation>
        </Col>
        <Col
          data-test-order-format
          xs={4}
        >
          <WithValidation isRemoveValueAllowed>
            {validation => (
              <Field
                component={TextField}
                name={getFieldName(24)}
                label={<FormattedMessage id={`${TRANSLATION_ID_PREFIX}.field.orderFormat`} />}
                validate={[validation]}
              />
            )}
          </WithValidation>
        </Col>
        <Col
          data-test-receipt-status
          xs={4}
        >
          <WithValidation isRemoveValueAllowed>
            {validation => (
              <Field
                component={TextField}
                name={getFieldName(25)}
                label={<FormattedMessage id={`${TRANSLATION_ID_PREFIX}.field.receiptStatus`} />}
                validate={[validation]}
              />
            )}
          </WithValidation>
        </Col>
      </Row>
    </Accordion>
  );
};
