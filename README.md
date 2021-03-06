This is a demo project to see how DHTMLX performs using [DHTMLX Optimus Framework](https://docs.dhtmlx.com/optimus__index.html) (DHTMLX in es6) not yet connected to a REST API on Node using JSON and fetch.

# Demo
[gius.nl](http://gius.nl/dhtmlx-es6/)

## SPA + browser history + PickLists

This implementation is build as Single Page Application (SPA) that not only  keeps track of the view you have opened, but also the record that is displayed. When navigationg across views forth and back the location within the program is remembered. Also Limited lists, aka PickList are implemented. 

![](tutorial_images/Screenshot_20180705_073212.png)

# Collapsable SideBar + DatePicker + Sync accross Components

When the 'hamburger-menu' is clicked, the SideBar is toggled. When clicking a date field, a DatePicker is shown and when editing data on the grid, the form is updated and vice versa.

![](tutorial_images/Screenshot_20180705_083504.png)

# Field validation / Read-Only Fields

An example of field-level validation is created on the Contacts-view. Also read-only fields are implemented on form-level such as the Id, also note the e-mail link.

![](tutorial_images/Screenshot_20180705_083824.png)

# Checked Combo + Font Awesome

On the Projects-view the Multi-value list 'Assigned to' is a Combo with checkboxes. The field on grid-level is read-only. The icons on the SideBar and ToolBar are not images, but fontawesome. So this is kept in the browser's cache and improves performance.

![](tutorial_images/Screenshot_20180705_073133.png)

# Related projects

1. [Your First App tutorial](https://docs.dhtmlx.com/tutorials__first_app__index.html) showing you the basis or DHX
  1.1 [My version of Your First App](https://github.com/rkristelijn/dhtmlx-grid-rest-api) - where I connect it to a REST API using [dhtmlxDataProcessor](https://docs.dhtmlx.com/dataprocessor__index.html)
2. [CRM System - demo app](https://dhtmlx.com/docs/products/demoApps/dhtmlxCRMSystem/index.html)
  2.1 [My version of CRM System - demo app](https://github.com/rkristelijn/dhtmlx-json-node) - same as above but with working back-end build on Node and REST API
3. [DHTMLX/optimus-starter](https://github.com/DHTMLX/optimus-start) - [DHTMLX Optimus Framework](https://docs.dhtmlx.com/optimus__index.html) - by Stanislaw Wolski
  3.1 [My version of the optimus-starter](https://github.com/rkristelijn/optimus-start) (this project is a fork of that)

# Plan of approach

- [X] Restructure files [feature-oriented instead of type-oriented](https://softwareengineering.stackexchange.com/questions/338597/folder-by-type-or-folder-by-feature)
- [X] Implement the views per es6
- [x] Add missing GUI's to create,update,delete data (sales, events, settings)
- [x] Restructure data to save dateTypes in real dates, numberTypes in real numbers, implement bounded picklists
- [ ] Add the REST API from [My version of CRM System - demo app](https://github.com/rkristelijn/dhtmlx-json-node)
  - [ ] @see [Forked project](https://github.com/rkristelijn/dhtmlx-json-node-es6)

# Solved challenges
- [x] Structure code in a way that is reusable, easy to read and maintain
- [x] Implement routes to be able to navigate to views and specific records
- [x] Solved url #/contacts/id, alerting when the id is not found in the loaded records, filtering alphanumeric, showing a modal dialogue, highlighting the first record
- [x] fixed the navigation bar, being able to collapse (default) and show using 'hamburger menu'
- [x] Solved back/forward history keeping selected row or item in history
- [x] All views fixed
- [x] Handled events across form and grid, changing fields in grid and form if changed on one
- [x] Fixed validation on grid
- [x] Fixed types: combo, date
- [x] Fixed checked combo for Assigned to in Projects
- [x] Bug: when combo is opened and clicked somewhere else, an error is thrown

# Back log

- [ ] Connect Node REST API: I'm not doing this because I want to create a demo with static content
- [ ] I've learned that all events need to be handled manually across components showing the same data. It would be better if there's a shared model, where components can subscribe on.
- [ ] Bug: when a validation fires, only enter/escape can close the modal dialogue, pressing 'ok' seems to work differently
- [ ] Bug: when a date is being picked by the grid, the form temporarily will display 'Invalid Date'. it does not seem related to the events, this is because onRowSelect is fired upon edit
- [ ] Bug: `npm run build` works partly, I still need to remove `/codebase` from all sources and minification doesn't happen

