/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import {
    View,
    LabeledFieldView,
    createLabeledInputText,
    ButtonView,
    submitHandler
} from '@ckeditor/ckeditor5-ui';

// Inline-Icons (SVG-String)
const checkIcon = `
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M7.7 14.3L3.4 10l1.4-1.4 2.9 2.9 7.5-7.5L16.6 5l-8.9 9.3z"/>
</svg>`;
const cancelIcon = `
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 5l10 10M15 5L5 15" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"/>
</svg>`;

export default class FormView extends View {
    constructor(locale) {
        super(locale);

        this.abbrInputView = this._createInput('Add abbreviation');
        this.titleInputView = this._createInput('Add title');

        this.saveButtonView = this._createButton('Save', checkIcon, 'ck-button-save');
        this.saveButtonView.type = 'submit';

        this.cancelButtonView = this._createButton('Cancel', cancelIcon, 'ck-button-cancel');
        this.cancelButtonView.delegate('execute').to(this, 'cancel');

        this.childViews = this.createCollection([
            this.abbrInputView,
            this.titleInputView,
            this.saveButtonView,
            this.cancelButtonView
        ]);

        this.setTemplate({
            tag: 'form',
            attributes: { class: ['ck','ck-abbr-form'], tabindex: '-1' },
            children: this.childViews
        });
    }

    render() { super.render(); submitHandler({ view: this }); }
    focus() { this.childViews.first.focus(); }

    _createInput(label) {
        const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText);
        labeledInput.label = label;
        return labeledInput;
    }

    _createButton(label, icon, className) {
        const button = new ButtonView();
        button.set({ label, icon, tooltip: true, class: className });
        return button;
    }
}
