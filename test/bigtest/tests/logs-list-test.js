import { expect } from 'chai';
import {
  describe,
  beforeEach,
  it,
} from '@bigtest/mocha';

import MultiColumnListInteractor from '@folio/stripes-components/lib/MultiColumnList/tests/interactor';

import { setupApplication } from '../helpers';

const logsList = new MultiColumnListInteractor('#job-logs-list');
const getCellContent = (row, cell) => logsList.rows(row).cells(cell).content;

describe('Logs list', () => {
  setupApplication({ scenarios: ['fetch-jobs-logs-success'] });

  beforeEach(function () {
    this.visit('/data-import');
  });

  it('renders the correct number of rows', () => {
    expect(logsList.rowCount).to.equal(3);
  });

  describe('sorting', () => {
    describe('compares fields as strings', () => {
      beforeEach(async () => {
        await logsList.headers(0).click();
      });

      it('ascending', () => {
        expect(getCellContent(0, 0)).to.equal('import_22.mrc');
        expect(getCellContent(1, 0)).to.equal('import_22.mrc');
        expect(getCellContent(2, 0)).to.equal('import_28.mrc');
      });

      describe('and', () => {
        beforeEach(async () => {
          await logsList.headers(0).click();
        });

        it('descending', () => {
          expect(getCellContent(0, 0)).to.equal('import_28.mrc');
          expect(getCellContent(1, 0)).to.equal('import_22.mrc');
          expect(getCellContent(2, 0)).to.equal('import_22.mrc');
        });
      });
    });

    describe('compares fields as numbers', () => {
      beforeEach(async () => {
        await logsList.headers(1).click();
      });

      it('ascending', () => {
        expect(getCellContent(0, 1)).to.equal('01');
        expect(getCellContent(1, 1)).to.equal('02');
        expect(getCellContent(2, 1)).to.equal('03');
      });

      describe('and', () => {
        beforeEach(async () => {
          await logsList.headers(1).click();
        });

        it('descending', () => {
          expect(getCellContent(0, 1)).to.equal('03');
          expect(getCellContent(1, 1)).to.equal('02');
          expect(getCellContent(2, 1)).to.equal('01');
        });
      });
    });

    describe('compares fields as dates', () => {
      it('descending', () => {
        expect(getCellContent(0, 4)).to.equal('11/11/2018, 2:10 PM');
        expect(getCellContent(1, 4)).to.equal('11/5/2018, 2:21 PM');
        expect(getCellContent(2, 4)).to.equal('11/5/2018, 1:08 PM');
      });

      describe('and', () => {
        beforeEach(async () => {
          await logsList.headers(4).click();
        });

        it('ascending', () => {
          expect(getCellContent(0, 4)).to.equal('11/5/2018, 1:08 PM');
          expect(getCellContent(1, 4)).to.equal('11/5/2018, 2:21 PM');
          expect(getCellContent(2, 4)).to.equal('11/11/2018, 2:10 PM');
        });
      });
    });

    describe('compares by `runBy` field', () => {
      beforeEach(async () => {
        await logsList.headers(5).click();
      });

      it('ascending', () => {
        expect(getCellContent(0, 5)).to.equal('Elliot Lane');
        expect(getCellContent(1, 5)).to.equal('Jay Morrowitz');
        expect(getCellContent(2, 5)).to.equal('Ozzy Campenshtorm');
      });

      describe('and', () => {
        beforeEach(async () => {
          await logsList.headers(5).click();
        });

        it('descending', () => {
          expect(getCellContent(0, 5)).to.equal('Ozzy Campenshtorm');
          expect(getCellContent(1, 5)).to.equal('Jay Morrowitz');
          expect(getCellContent(2, 5)).to.equal('Elliot Lane');
        });
      });
    });
  });
});
