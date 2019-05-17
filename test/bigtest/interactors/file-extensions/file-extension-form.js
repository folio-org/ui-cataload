import {
  Interactor,
  isPresent,
} from '@bigtest/interactor';

import TextFieldInteractor from '@folio/stripes-components/lib/TextField/tests/interactor';
import TextAreaInteractor from '@folio/stripes-components/lib/TextArea/tests/interactor';
import CheckboxInteractor from '@folio/stripes-components/lib/Checkbox/tests/interactor';
import MultiSelectionInteractor from '@folio/stripes-components/lib/MultiSelection/tests/interactor';

import { FullScreenFormInteractor } from '../full-screen-form';

class NewFileExtensionInteractor extends FullScreenFormInteractor {
  isLoaded = isPresent('[name="description"]');
  descriptionField = new TextAreaInteractor('[data-test-description-field]');
  extensionField = new TextFieldInteractor('[data-test-extension-field]');
  blockedField = new CheckboxInteractor('[data-test-blocked-field] [class^="checkbox"]');
  dataTypesField = new MultiSelectionInteractor('[data-test-types-field]');

  whenLoaded() {
    return this.when(() => this.isLoaded);
  }

  clickBlockedField() {
    return new Interactor('[data-test-blocked-field] label').click();
  }
}

export const fileExtensionForm = new NewFileExtensionInteractor('#file-extensions-form');
