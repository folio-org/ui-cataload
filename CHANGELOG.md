# Change history for ui-data-import

## **3.1.0** (in progress)

### Features added:
* Reuse `<JobsList>` component from `stripes-data-transfer-components` rep (UIDATIMP-573)
* Cover `<AcceptedValuesField>` component with unit tests (UIDATIMP-692)
* Cover `<MappedHeader>` component with unit tests (UIDATIMP-693)
* Reuse `<JobsListAccordion>` component from `stripes-data-transfer-components` rep (UIDATIMP-574)
* Reuse `<JobsLogs>` component from `stripes-data-transfer-components` rep (UIDATIMP-572)
* Reuse `<Preloader>` component from `stripes-data-transfer-components` rep (UIDATIMP-580)
* Reuse utils from `stripes-data-transfer-components` rep (UIDATIMP-576)
* Reuse `<SearchResults>` component from `stripes-data-transfer-components` rep (UIDATIMP-581)
* Cover `<BooleanActionField>` component with tests (UIDATIMP-700)
* Reuse `<SearchForm>` component from `stripes-data-transfer-components` rep (UIDATIMP-582)
* Implement a basic layout for the Import job summary page (UIDATIMP-750)
* Cover `<ActionMenu>` component with tests (UIDATIMP-699)
* Field mapping for repeatable fields needs a tweak to validation (UIDATIMP-768)
* Cover `<Callout>` component with tests (UIDATIMP-701)
* Cover `<DataFetcher>` component with tests (UIDATIMP-703)
* Add "Load more" button to an Individual job's log details page (UIDATIMP-756)
* Log lite - import job summary page, from View all page (UIDATIMP-762)
* Enable EDIFACT invoice options in various settings (UIDATIMP-778)
* Cover `<DatePickerDecorator>` component with tests (UIDATIMP-704)
* Add "Load more" button to View all log page (UIDATIMP-755)
* Update the UI permission names for current Data import permissions (UIDATIMP-781)
* Suppress Inventory single record MARC imports from data import log on landing page (UIDATIMP-659)
* Add filter for Inventory single record imports to the View all log screen (UIDATIMP-671)
* Match profile: Add validation to "Existing record" details (UIDATIMP-782)
* Data Import Field Mapping Profile details: Create/Edit Invoice and Invoice line from EDIFACT Invoice (UIDATIMP-296)
* Data Import Field Mapping Profile details: Toggles should display currency selected in Currency select in Extended information accordion(UIDATIMP-801)
* Data Import Field Mapping Profile details: Fund distribution section should be visible only when "Not prorated" option in Pro rate select is selected (UIDATIMP-802)
* Data Import Field Mapping Profile details: Extend functionality of AcceptedValuesField component to be able to choose several option (UIDATIMP-803)
* Disallow UI edit & deletion of the System-supplied default OCLC single record import profiles (UIDATIMP-784)
* Data Import Field Mapping Profile details: Create functionality for "Vendor name" and "Accounting code" fields for Vendor information accordion (UIDATIMP-800)
* Connect the Log light page to the server (UIDATIMP-763)
* Remove "secret button" from Choose jobs screen (UIDATIMP-812)
* Log lite - revised JSON screen (UIDATIMP-751)
* Log lite - Error handling for revised JSON screen (UIDATIMP-765)
* Update stripes to v6 (UIDATIMP-815)
* Suppress OCLC Single record import job profiles from the Choose jobs list (UIDATIMP-819)
* Refactor File Extensions view to use final-form instead of redux-form (UIDATIMP-825)
* Allow 005 to be a protected field (UIDATIMP-835)
* Update stripes-cli to v2 (UIDATIMP-840)
* Refactor Job profiles to use final-form instead of redux-form (UIDATIMP-829)
* Invoice mapping screen, FE updates according last BE changes (UIDATIMP-842)
* Update invoice status value in field mapping profile (UIDATIMP-830)
* Action profiles: Remove MARCcat qualifier from MARC record types (UIDATIMP-843)
* Refactor Match profiles to use final-form instead of redux-form (UIDATIMP-828)
* Invoice field mapping profile: Adjust vendor reference number (UIDATIMP-845)
* Data Import Field Mapping Profile View: Invoice and Invoice line from EDIFACT Invoice (UIDATIMP-783)
* Add personal data disclosure form (UIDATIMP-786)

### Bugs fixed:
* Fix Accessibility problems for settings/data-import/match-profiles (lists must only directly contain li elements) (UIDATIMP-452)
* Fix Accessibility problems for settings/data-import/action-profiles?layer=create (Buttons must have discernible text) (UIDATIMP-448)
* Fix Accessibility problems for settings/data-import/{...-profiles} (Form elements must have labels) (UIDATIMP-457)
* Fix Accessibility problems in ProfileLinker Component (settings/data-import/job-profiles) (UIDATIMP-434)
* Fix an error occurred while searching for associated profiles (UIDATIMP-769)
* Status descending sort on Data Import home page not working. Fixed (UIDATIMP-758)
* Fix an error on switching existing record types on Match profile Create/edit screen (UIDATIMP-804)
* File upload in progress displays when it shouldn't. Fixed (UIDATIMP-742)
* A few updates to the invoice field mapping screen (UIDATIMP-811)
* Fix possibility to create match profile (UIDATIMP-821)
* Match profiles: Remove EDIFACT (UIDATIMP-844)
* Settings > Data import. Learn more button leads to empty page on Confluence (UIDATIMP-838)
* Remove validation error message from invoice field mapping screen (UIDATIMP-814)
* Cannot view log for OCLC Single record import jobs. Fixed (UIDATIMP-848)
* Create/Edit Match Profile WCAG 2.1 AA - Color Contrast violation (UIDATIMP-818)
* Invoice field mapping screen: Remove validation from fields with reference values (UIDATIMP-855)
* Protection fields in field mapping profile only lists 10. Fixed (UIDATIMP-849)
* Invoice field mapping: Lock total checkbox is not working properly. Fixed (UIDATIMP-857)
* Invoice field mapping: Exchange rate checkbox is not being saved. Fixed (UIDATIMP-864)

## [3.0.3](https://github.com/folio-org/ui-data-import/tree/v3.0.3) (2020-11-13)

### Bugs fixed:
* Fix Validation for default data typed into a field mapping profile (UIDATIMP-746)
* 'Reset all' functionality leads to error page (UIDATIMP-754)

## [3.0.2](https://github.com/folio-org/ui-data-import/tree/v3.0.2) (2020-11-05)

### Bugs fixed:
* Log filter dropdowns by job profile and user are not in alphabetical order (UIDATIMP-601)
* Cannot delete an import stuck in "Running" (UIDATIMP-738)
* Fix matching by `id` for Holdings and Item (UIDATIMP-747)
* Bugfest: Search the log list on the View all log screen does not work as expected (UIDATIMP-744)
* Bugfest: Log filter dropdowns by job profile and user are not in alphabetical order (UIDATIMP-743)
* Attempt to sort JobLogs table by status leads to error (UIDATIMP-741)
* Match profiles are misaligned and have a stray line in them (UIDATIMP-739)

## [3.0.1](https://github.com/folio-org/ui-data-import/tree/v3.0.1) (2020-10-27)

### Bugs fixed:
* MARC Bib field mapping profile: inconsistency with the layout (UIDATIMP-694)
* MARC Bib field mapping profile: error while saving MARC Modifications (UIDATIMP-695)
* MARC field protection settings not working in Honeysuckle Bugfest (UIDATIMP-734)

## [3.0.0](https://github.com/folio-org/ui-data-import/tree/v3.0.0) (2020-10-15)

### Features added:
* Handle import of stripes-acq-components to modules and platform (UISACQCOMP-3)
* Add validation rules for Move action for the MARC modifications table fields (UIDATIMP-492)
* Add validation rules for Edit action for the MARC modifications table fields (UIDATIMP-489)
* Increment `@folio/stripes` to `v5` and update dependency on `react-router` (UIDATIMP-656)
* Reuse `<EndOfItem>` component from `stripes-data-transfer-components` repository (UIDATIMP-571)
* Fix field mapping for Item record check in/check out note (UIDATIMP-554)
* Field mappings: Repeatable field dropdown Validation (UIDATIMP-508)
* Inventory field mapping: Instance, Holding, Item: add REMOVE option (UIDATIMP-567)
* Field Mapping Profile details: MARC Bib from MARC Bib 10 - View details screen (UIDATIMP-494)
* Field Mapping Profile details: Have view details screen cover the entire screen (UIDATIMP-535)
* Reuse `<Progress>` component from `stripes-data-transfer-components` repository (UIDATIMP-575)
* Create `MARC field protection` settings screen (UIDATIMP-592)
* Reset repeatable fields to neutral when all rows deleted (UIDATIMP-607)
* Match profile: Add Instance UUID as a match option (UIDATIMP-589)
* Match profile: Add Holdings UUID as a match option (UIDATIMP-590)
* Match profile: Add Item UUID as a match option (UIDATIMP-591)
* Update MARC matching UI to differentiate [any] versus [blank] indicators (UIDATIMP-525)
* Reuse `<FullScreenForm>` component from `stripes-data-transfer-components` repository (UIDATIMP-578)
* Add option for Modify or Update MARC Bib field mapping profile (UIDATIMP-612)
* Update the available actions for Action profiles (UIDATIMP-559)
* Change Shelving order to unmappable on Holdings field mapping (UIDATIMP-611)
* Update the Field mapping View for repeatable fields options (UIDATIMP-555)
* Update the available options for Field mapping profile Incoming record types (UIDATIMP-560)
* Update the available Accepted data types for Job profiles (UIDATIMP-561)
* Update the available Incoming record options for Match profiles (UIDATIMP-562)
* Update the available Data type options for File extension settings (UIDATIMP-626)
* Connect MARC field protection settings to the server (UIDATIMP-621)
* Field mappings: Item - update reference dropdown list for Item status (UIDATIMP-529)
* Add validation for fields in MARC field protection settings (UIDATIMP-593)
* Add hover text for "Cannot be mapped" icon in field mappings (UIDATIMP-558)
* Remove "Edit job profile" from Choose jobs action menu (UIDATIMP-553)
* MARC Bib field mapping profile: details for Update Selected fields on Create/Edit screen (UIDATIMP-613)
* Update react-intl to v5 (UIDATIMP-643)
* Relocate the file upload area on the Data Import landing page (UIDATIMP-633)
* Sync with DTO updates. Modifying or updating the SRS MARC record (UIDATIMP-620)
* Update Datepicker decorator (TextDate component) (UIDATIMP-638)
* MARC Bib field mapping profile: details for Update Selected fields on View screen (UIDATIMP-614)
* Add column for Job status and Resequence columns (UIDATIMP-615)
* Match Profiles: Remove EDIFACT invoice as a match option (UIDATIMP-353)
* Change Data Import app name to sentence case (UIDATIMP-634)
* Add Public/Staff field for Holdings Statement Notes (UIDATIMP-642)
* Remove 'import/no-extraneous-dependencies' rule from eslint config and add missed dependencies (UIDATIMP-639)
* Refine an identifier matching for Instances (UIDATIMP-630)
* MARC Bib field mapping profile: add option for Modify or Update to View screen (UIDATIMP-625)
* Remove 'Manage' button from landing page (UIDATIMP-652)
* Refactor `bigtest/mirage` with `miragejs`.
* MARC Bib field mapping profile: details for Update-Overrides on Create/Edit screen (UIDATIMP-631)
* MARC Bib field mapping profile: details for Update-Overrides on View screen (UIDATIMP-632)
* Change "Check in/out note" value to "Check in/out" for items (UIDATIMP-679)
* Add capability to remove jobs that are stuck in "Running" area of Data Import landing page first pane (UIDATIMP-651)
* Match profile create-edit & view screens: change unusable options to disabled (UIDATIMP-676)
* MARC Bib field mapping profile: EXCEPTION details for Update Selected fields on Create/Edit screen (UIDATIMP-660)
* MARC Bib field mapping profile: EXCEPTION details for Update Selected fields on View screen (UIDATIMP-661)
* Action profile create-edit screen: change unusable options to disabled (UIDATIMP-673)
* Field mapping profile create-edit screen for instances: add sentence (UIDATIMP-678)
* MARC Bib field mapping profile: EXCEPTION details for Override protected fields on Create/Edit screen (UIDATIMP-662)
* MARC Bib field mapping profile: EXCEPTION details for Override protected fields on View screen (UIDATIMP-663)
* Field mapping profile create-edit screen: change unusable options to disabled (UIDATIMP-674)
* Job profile create-edit screen: change unusable options to disabled (UIDATIMP-675)
* Replace hyphens with `<NoValue>` component (UIDATIMP-628)
* Data Import App: Consume {{FormattedDate}} and {{FormattedTime}} via stripes-component (UIDATIMP-665)

### Bugs fixed:
* Fix rendering qualifier sections with old data in match profiles details (UIDATIMP-481)
* Fix for validation function `validateRequiredFields` (UIDATIMP-645)
* Fix `SyntaxError: Unexpected token 'export'` error when running tests (UIDATIMP-667)
* Fix "Position" in MCL View is not left justified (UIDATIMP-657)
* An error message appears when linking a match profile with Existing record field = "Identifier: ..." to a job profile (UIDATIMP-687)
* Only import MatchingFieldsManager once (UIDATIMP-689)
* Tweak syntax that caused ESLint to die early, allowing it complete, and find bugs like UIDATIMP-689 (UIDATIMP-690)
* MARC updates field mapping profile: override protected fields change sequence when edited (UIDATIMP-686)
* Fix sorting newly-created file extension settings in alphabetical order (UIDATIMP-681)
* In1, In2, Subfield defaults for subsequent update fields do not default to * (UIDATIMP-691)

## [2.1.4](https://github.com/folio-org/ui-data-import/tree/v2.1.4) (2020-08-13)

### Bugs fixed:
* Cannot create a holdings field mapping profile on Goldenrod bugfest, hotfix (UIDATIMP-619)

## [2.1.3](https://github.com/folio-org/ui-data-import/tree/v2.1.3) (2020-08-11)

### Bugs fixed:
* Fix saving subfield information of match profile, hotfix (UIDATIMP-604)

## [2.1.2](https://github.com/folio-org/ui-data-import/tree/v2.1.2) (2020-08-11)

### Bugs fixed:
* Fix Inconsistent in Holding schema between UI and Backend (UIDATIMP-596)
* Fix optional sections of match profile do not clear out when removed (UIDATIMP-597)

## [2.1.1](https://github.com/folio-org/ui-data-import/tree/v2.1.1) (2020-07-09)

### Features added:
* Get rid of imported translations for math profiles (UIDATIMP-570)

### Bugs fixed:
* Fix deletion repeatable fields in Field mapping profile (UIDATIMP-482)
* Fix assigning and unassigning tags to data import profiles (UIDATIMP-499)

## [2.1.0](https://github.com/folio-org/ui-data-import/tree/v2.1.0) (2020-06-25)

### Features added:
* Field Mapping Profile details: MARC Bib from MARC Bib 2 - Delete (UIDATIMP-486)
* Update Requests to SRS for v4 (UIDATIMP-486)

### Bugs fixed:
* Fix Accessibility problems for MARCTable component (UIDATIMP-547)
* Fix issue with holdings type field population (UIDATIMP-542)
* Fix issue with digitization policy field (UIDATIMP-543)
* Fix repeatable fields in Field mapping profiles (UIDATIMP-538)
* Fix Accessibility problems for /data-import page (UIDATIMP-429)
* Fix Accessibility problems for data-import/job-logs (Buttons must have discernible text) (UIDATIMP-432)
* Fix Accessibility problems for settings/data-import/job-profiles?layer=create (UIDATIMP-433)

## [2.0.0](https://github.com/folio-org/ui-data-import/tree/v2.0.0) (2020-06-12)

### Features added:
* Purge "intlShape" in prep for "react-intl" "v4" migration. (UIDATIMP-517)
* Data Import: Update to Stripes v4 (UIDATIMP-520)
* Add hotlinks for match and action profiles on Job profiles details view (UIDATIMP-478)
* Layout styles in repeatable sections, which contain withRepeatableActions decorator has been fixed (UIDATIMP-502)
* Implement basic layout for Field Mapping Profile details: MARC Bib from MARC Bib (UIDATIMP-297)
* Cover Mapping Profile Form with tests including field decorators (UIDATIMP-442)
* Implement add new row functionality for the Field Mapping Profile details (UIDATIMP-497)
* Change placement of repeatable decorator in the Inventory field mapping screens (UIDATIMP-518)
* Implement delete row functionality for the Field Mapping Profile details (UIDATIMP-498)
* Implement re-order row functionality for the Field Mapping Profile details (UIDATIMP-496)
* Add acceptedValues obj to reference dropdown fields (UIDATIMP-519)
* Get rid of "@folio/stripes-core" and "@folio/stripes-smart-components" dependencies
* Update "react-router" and "react-router-dom" dependencies
* Connect MARC modifications table to the Field mapping profile form (UIDATIMP-536)
* Add validation rules for Add action for the MARC modifications table fields (UIDATIMP-487)
* Migrate from `stripes.type` to `stripes.actsAs`
* Adjust mapping rules for repeatable fields in Field mapping profiles (UIDATIMP-544)
* Field Mapping Profile details: MARC Bib from MARC Bib 4 - Add Subsequent lines (UIDATIMP-488)

### Bugs fixed:
* Fix Item status list in field mapping profiles (UIDATIMP-515)
* Initial data doesn't show up for checkbox decorator for existing profiles (UIDATIMP-500)
* Update logic for reference dropdowns (UIDATIMP-516)
* Fix reference dropdowns long lists height (UIDATIMP-511)
* Update logic for reference dropdowns with datepicker (UIDATIMP-523)
* Add location code display to accepted values list (UIDATIMP-514)
* Reference dropdowns. Statistical code values lists has been updated (UIDATIMP-512)

## [1.8.3](https://github.com/folio-org/ui-data-import/tree/v1.8.3) (2020-04-27)

### Features added:
* Data Import field mapping profile details: Repeatable field dropdown component (UIDATIMP-401)
* Data Import field mapping profile details: Reference values dropdown component (UIDATIMP-402)
* Data Import field mapping profile details: Checkbox decorator (UIDATIMP-368)
* Cover MCL in mapping profile details sections with tests (UIDATIMP-469)
* Distinguish not mapped and unmappable fields in Field mapping profile View screen (UIDATIMP-471)
* Implement <ProhibitionIcon> component (UIDATIMP-477)
* Field mapping profile - Add line above associated action profiles (UIDATIMP-472)
* Label for Year field in caption section has been updated (UIDATIMP-475)
* Preceding/succeeding sections has been updated to match new Instance fields (UIDATIMP-476)
* Update dependency on stripes-smart-components to version 3.1.1 (UIDATIMP-485)
* Implement date picker decorator (UIDATIMP-407)
* Add validation for field mapping profile fields (UIDATIMP-405)

### Bugs fixed:
* When returned to search results screen after profile save, wrong profile details show (UIDATIMP-424)
* Optional sections are collapsed even if contain data (UIDATIMP-479)
* Fix tree lines in Job profile associations tree (UIDATIMP-343)
* Fix displaying of profile associations on a job profile tree (UIDATIMP-413)

## [1.8.2](https://github.com/folio-org/ui-data-import/tree/v1.8.2) (2020-04-07)

### Features added:
* Render Repeatable Fields as MultiColumnList in FlexibleForm static view when needed (UIDATIMP-445)
* Cover mapping profile details sections with tests (UIDATIMP-406)

### Bugs fixed:
* More than one record cannot be created in Mapping Profiles Form repeatable fields (UIDATIMP-443)
* Error message when assigning or unassigning a tag to a data import profiles (UIDATIMP-461)
* Trash can next to match profile match criteria should not be there (UIDATIMP-466)

## [1.8.1](https://github.com/folio-org/ui-data-import/tree/v1.8.1) (2020-03-31)

### Features added:
* Data Import Field Mapping Profile details: Inventory instance from MARC (UIDATIMP-15)
* Data Import Field Mapping Profile details: Inventory holdings from MARC Bib (UIDATIMP-290)
* Data Import Field Mapping Profile details: Inventory item from MARC Bib (UIDATIMP-292)
* Rearrange the match profile diagram structure (UIDATIMP-411)
* Wipe out lines from the match profile diagram (UIDATIMP-411)
* Provide a profile snapshot with childWrappers when new profile association added to a job profile (UIDATIMP-413)
* Data import settings Match Profiles: Changes for Static value Number, Date submatches (UIDATIMP-414)
* Set defaultMapping query param when data-import process is run with chosen JobProfile to false (UIDATIMP-418)
* Add "profileType" query param to request for get /profileSnapshots/{profileId} (UIDATIMP-444)

### Bugs fixed:
* Fix broken Record Type Selection Tree in RTL mode (UIDATIMP-425)
* Fix broken Match criterion section in RTL mode (UIDATIMP-426)
* Mapping Profiles Form existing record type recognition behavior is wrong (UIDATIMP-456)
* Fix hardcoded tenant value for the modules retrieving (UIDATIMP-465)
* Fix styles for the form text fields (UIDATIMP-426)

## [1.8.0](https://github.com/folio-org/ui-data-import/tree/v1.8.0) (2020-03-13)

### Features added:
* Attach a field mapping profile to an action profile that does not have one (UIDATIMP-269)
* Attach one or more action profiles to a field mapping profile (UIDATIMP-279)
* Create ProfileTree Component (UIDATIMP-326)
* Job profile details, part 1: adding match profiles (UIDATIMP-312)
* Job profile details, part 2: adding secondary match/action profiles (UIDATIMP-313)
* Add rules for prohibited profile siblings for the ProfileTree component (UIDATIMP-314)
* Job profile details, part 4: unlinking match or action profiles (UIDATIMP-315)
* Create FOLIO records' field lists (UIDATIMP-330)
* Connect Profile Associator Component to unified data source (UIDATIMP-341)
* Update field naming for mapping profiles (UIDATIMP-349)
* Data import settings page's 4th pane for Match Profiles: Changes needed to support Static value submatches (UIDATIMP-352)
* Connect Profile Tree Component to unified data source (UIDATIMP-357)
* Rework ProfileLinker Component (UIDATIMP-358)
* Data import settings page's 4th pane for Match Profiles: Create MARC records' match-to section (UIDATIMP-373)
* Convert Match Profiles form Existing Record Field name to JSONPath format (UIDATIMP-375)
* Define API Contract for MappingProfile field mapping definitions (UIDATIMP-377)
* Remove extra action buttons in profiles Settings screens (UIDATIMP-394 - UIDATIMP-397)
* Augment RecordTypeSelector component with Incoming Record Type selection dropdown (UIDATIMP-386)
* Job profile details: suppress the delete/trash can icon (UIDATIMP-390)
* Job Profile Tree: Changes needed to support Static value submatches (UIPFIMP-11)
* Add "defaultMapping" query param to "/processFiles" path (UIDATIMP-417)
* Add caret to the incoming record select dropdown in match profile
* Upgrade Stripes and all the dependencies to version 3.0.0 (UIDATIMP-422)
* Rename renewal.json to ongoing.json (UIDATIMP-428)
* Remove extra action buttons in File extension Settings screens after central component update (UIDATIMP-398)

### Bugs fixed:
* Profile Associator lists are empty when the user reloads the page with Profile Edit Form open (UIDATIMP-338)
* ProfileTree component TreeLines re-renders are late by one tick from state updates (UIDATIMP-343)
* ProfileTree component ProfileLinker dropdown doesn't close automatically after list option has chosen (UIDATIMP-345)
* Associated profiles not clearing out after viewing, like they should (UIDATIMP-354)
* Search and Sort don't work in Profile Associator Component in view mode (UIDATIMP-374)
* Fix wording of unlink confirmation modal (UIDATIMP-378)
* Fix wording of profile create/update confirmation toast (UIDATIMP-379)
* Page unstable error when trying to save match profile (UIDATIMP-380)
* Unlink action profile from field mapping profile is not working (UIDATIMP-381)
* ProfileAssociator Component lists are empty (UIDATIMP-399)
* Fix UI tests (UIDATIMP-399)
* Fix action profiles' sequence in job profiles (UIDATIMP-412)
* Wipe out linked profiles when duplicate a profile (UIDATIMP-410)
* Fix unlinking associated profiles from job profile (UIDATIMP-420)
* Fix Match Profile regressions (UIDATIMP-421)
* Fix existing record field name displaying on match profiles (UIDATIMP-427)

## [1.7.3](https://github.com/folio-org/ui-data-import/tree/v1.7.3) (2019-12-04)
* Update sorting query for jobs (UIDATIMP-346)
* Fix typo in a field mapping profile modal (UIDATIMP-336)

## [1.7.2](https://github.com/folio-org/ui-data-import/tree/v1.7.2) (2019-12-04)
* Add action options to choose jobs screen (UIDATIMP-268)
* Add non-editable mode feature for RecordTypesSelect component (UIDATIMP-323)
* Add match details to the View match profile details pane (UIDATIMP-239)
* Create Match Profiles Form renderer (UIDATIMP-325)
* Increase the width of the View details pane for Match profiles (UIDATIMP-332)
* Create Associator Component (UIDATIMP-275)
* Attach a field mapping profile to an action profile that does not have one (UIDATIMP-269)
* Attach one or more action profiles to a field mapping profile (UIDATIMP-279)
* Fix sentence case for Qualifier field dropdowns in Create/View match profile details (UIDATIMP-340)

## [1.6.0](https://github.com/folio-org/ui-data-import/tree/v1.6.0) (2019-11-01)
* Add details section on create/edit action profile form (UIDATIMP-207)
* Add details section of action profile details pane (UIDATIMP-280)
* Update format of settings cancel/save options (UIDATIMP-238)
* Add associated job profiles search on match profile details pane (UIDATIMP-178)
* Update requests for retrieving logs and jobExecutions (UIDATIMP-304)
* Fix unstable message for job profiles (UIDATIMP-305)
* Create "view all" log screen (UIDATIMP-285)
* Add search details for the "view all" log screen (UIDATIMP-286)
* Add filter details for the "view all" log screen (UIDATIMP-287)
* Update query for sorting by numeric field (UIDATIMP-310)
* Update dependency on source-record-manager (UIDATIMP-318)
* Remove "React to" from action profiles(UIDATIMP-316)

## [1.5.1](https://github.com/folio-org/ui-data-import/tree/v1.5.1) (2019-09-25)
* Create Section component (UIDATIMP-278)
* Create and integrate RecordTypesSelect component (UIDATIMP-244)
* Add a Records column to a job logs table, rename Import ID column to ID, swap columns and change width of panes (UIDATIMP-260)
* Fix save match profile (UIDATIMP-282)

## [1.5.0](https://github.com/folio-org/ui-data-import/tree/v1.5.0) (2019-09-10)
* Implement mapping profile duplication feature (UIDATIMP-228)
* Implement mapping profile deletion feature (UIDATIMP-229)
* Make mapping profile name a hotlink in action profile details (UIDATIMP-214)
* Add tags accordion for match profiles (UIDATIMP-18)
* Create TreeView component (UIDATIMP-243)
* Add choose jobs screen 2nd pane (UIDATIMP-257)
* Add job profile details pane on choose job profile page (UIDATIMP-258)
* Fix file extension validation by making it case insensitive (UIDATIMP-252)
* Add associated job profiles search on action profile details pane (UIDATIMP-217)
* Integrate updated MultiColumnList component (UIDATIMP-276)

## [1.4.0](https://github.com/folio-org/ui-data-import/tree/v1.4.0) (2019-08-02)
* Create data import settings page's 3rd pane for action profiles (UIDATIMP-8)
* Implement header caret actions for action profiles (UIDATIMP-14)
* Add form for new action profile action (UIDATIMP-144)
* Implement save the new action profile feature (UIDATIMP-145)
* Implement details view for action profiles (UIDATIMP-146)
* Add search box for 3rd pane of action profiles (UIDATIMP-167)
* Create edit action profile form (UIDATIMP-149)
* Add saving of edited action profile feature (UIDATIMP-220)
* Implement action profile deletion feature (UIDATIMP-215)
* Implement action profile duplication feature (UIDATIMP-148)
* Make job profile name a hotlink in action profile details (UIDATIMP-213)
* Add tags accordion for match profiles (UIDATIMP-16)
* Add tags accordion for action profiles (UIDATIMP-17)
* Create data import settings page's 3rd pane for Field Mapping Profiles (UIDATIMP-9)
* Implement details view for mapping profiles (UIDATIMP-219)
* Implement create mapping profile feature (UIDATIMP-227)
* Implement edit mapping profile feature (UIDATIMP-230)
* Generalize and modularize Modals and Toasts templates, create common Callout renderer (UIDATIMP-210)
* Generalize and modularize Entity List View templates, create common ListView component (UIDATIMP-211)
* Add fields to edit mapping profile screen (UIDATIMP-247)

## [1.3.0](https://github.com/folio-org/ui-data-import/tree/v1.3.0) (2019-06-12)
* Create data import settings page's 3rd pane for Match Profiles. Add string capitalization (capitalize) and HTML special chars decoding (htmlDecode) utils (UIDATIMP-6)
* Create temporary MARC Bib files load option on Choose jobs pane (UIDATIMP-185)
* Add Search box for 3rd pane of Match Profiles (UIDATIMP-166)
* Implement landing page changes when temporary MARC Bib Load option button pushed (UIDATIMP-186)
* Create the form for a new match profile creation (UIDATIMP-138)
* Reorganize testing folder structure and code improvements (UIDATIMP-200)
* Implement details view for match profiles (UIDATIMP-140)
* Save the new match profile (UIDATIMP-139)
* Create edit match profile form (UIDATIMP-143)
* Implement saving of edited match profile (UIDATIMP-182)
* Make job profile name a hotlink in match profile details (UIDATIMP-184)
* Implement match profile duplication feature (UIDATIMP-142)
* Implement match profile deletion feature (UIDATIMP-144)
* Refactor all the profile list views to generalize them and move common parts to separate components (UIDATIMP-201)
* Create ListTemplate and ColumnTemplate components for declarative definition of EntityList (UIDATIMP-201)
* Create MenuTemplate and ItemTemplate  components for declarative definition of ActionMenu, create ActionMenu component (UIDATIMP-201)
* Create Spinner and LastMenu components (UIDATIMP-201)
* Create LogViewer and modular CodeHighlight components among with modular language definitions (langJSON and langRAW for now) and 2 highlight themes (light - Coy and dark - Stalker) (UIDATIMP-209)
* Refine ViewJobLog page component with a new endpoint to show all the log including error ones through LogViewer component (UIDATIMP-209)
* Add missing icons for Match Profiles record types (UIDATIMP-194)
* Implement match profile deletion feature (UIDATIMP-176)

## [1.2.1](https://github.com/folio-org/ui-data-import/tree/v1.2.1) (2019-05-14)
* Downgrade okapi interface version in order to have data-import-converter-storage API endpoints work (UIDATIMP-195)

## [1.2.0](https://github.com/folio-org/ui-data-import/tree/v1.2.0) (2019-05-10)
* Create data import settings page's 3rd pane for Jobs Profiles (UIDATIMP-6)
* Add job profile form (UIDATIMP-132)
* Delete upload definition when it does not have files on the landing page so the user can start over new uploading process (UIDATIMP-110)
* Implement search job profiles feature (UIDATIMP-164)
* Implement save the new job profile feature (UIDATIMP-136)
* Implement job profile editing feature (UIDATIMP-137)
* Implement details view for job profiles feature (UIDATIMP-133)
* Align wording for the create new job profile submit button (UIDATIMP-179)
* Implement job profile duplication feature (UIDATIMP-134)
* Handle text wrapping issue in columns of the job profile results list (UIDATIMP-190)
* Implement job profile deletion feature (UIDATIMP-173)
* Handle text wrapping issue in columns of the job profile results list (UIDATIMP-190)
* Implement caret actions and items selection for job profiles (UIDATIMP-12)
* Add status check for failed backend responses on the UI (UIDATIMP-189)
* Create Log button in the jobs log list for showing the resulting SRS JSON document (UIDATIMP-187)

## [1.1.0](https://github.com/folio-org/ui-data-import/tree/v1.1.0) (2019-03-22)
* Add file extensions validation and `InvalidFilesModal` component for file upload (UIDATIMP-46)
* Hide popover when user clicks on the link button (UIDATIMP-71)
* Write documentation for `FileUploader` component and some code refactor (UIDATIMP-65)
* Create UI for styling for `Completed` file uploads (UIDATIMP-38)
* Prevent user navigation when file upload is in progress (UIDATIMP-67)
* Add document icon to upload file items (UIDATIMP-74)
* Setup BigTest and write tests for Jobs pane (UIDATIMP-75)
* Implement deleting failed files from server feature (UIDATIMP-72)
* Handle file name issue with file upload definition (UIDATIMP-97)
* Show error message on UI when there is not enough server space for uploaded file(s) on uploading job profiles (UIDATIMP-86)
* Create data import settings page's 3rd pane for File Extensions (UIDATIMP-47)
* Show modal on Leaving Choose Job Profile page (UIDATIMP-104)
* Prohibit file upload when there is a draft job in progress (UIDATIMP-106)
* Implement add new file extension feature (UIDATIMP-56)
* Handle sorting icons for both job logs and file extensions tables (UIDATIMP-124)
* Update API endpoints on UI due to changes on backend across the application (UIDATIMP-112, UIDATIMP-113, UIDATIMP-114)
* Implement "Save the new file extension" feature (UIDATIMP-79)
* Implement return to Choose Job Profile page functionality (UIDATIMP-103)
* Write tests for return to Choose Job Profile page functionality (UIDATIMP-154)
* Implement file extension editing feature (UIDATIMP-84)
* Fix file extensions order after adding/editing a file extension (UIDATIMP-159)
* Close invalid files modal after clicking "Choose other files to upload" button (UIDATIMP-160)
* Implement "Reset all extension mappings to system defaults" feature (UIDATIMP-55)
* Create data import File Extension Details view (UIDATIMP-61)
* Implement file extension deletion feature (UIDATIMP-69)
* Implement search file extensions feature (UIDATIMP-157)
* Handle horizontal scroll issue for the file extensions list (UIDATIMP-76)
* Hook up file upload behavior to file extension settings when uploads for certain extensions are forbidden (UIDATIMP-117)

## [1.0.0](https://github.com/folio-org/ui-data-import/tree/v1.0.0) (2018-11-10)
* New app created with stripes-cli
* Adjust skeleton application (UIDATIMP-2)
* Add app icon (UIDATIMP-19)
* Add layout for landing page (UIDATIMP-20)
* Add layout for first pane on Landing page (UIDATIMP-22)
* Create a reusable stripes component for "Preview" & "Running Jobs" boxes (UIDATIMP-31)
* Create UI for "File Upload" feature on Landing page (UIDATIMP-33)
* Create reusable react "Drag and Drop" component (UIDATIMP-35)
* Implement "Preview jobs" feature on Landing page (UIDATIMP-23)
* Implement "Logs" feature on Landing page (UIDATIMP-29)
* Update stripes-* dependencies and imports to use stripes framework 1.0 (FOLIO-1549)
* Implement data fetching for JobExecutions and JobLogs on Landing Page (UIDATIMP-27)
* Add Data Import settings page (UIDATIMP-5)
* Create UI for File Upload: Action & Styling for "In Process" file uploads (UIDATIMP-37)
