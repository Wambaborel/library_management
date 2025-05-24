/**
 * Frappe client-side script for the 'Library Member' doctype.
 * 
 * Adds custom buttons to the form for creating related 'Library Membership' and 'Library Transaction' documents,
 * pre-filling the 'library_member' field with the current member's name.
 * 
 * @namespace frappe.ui.form.on
 * @param {frappe.ui.Form} frm - The current form instance for 'Library Member'.
 */
// Copyright (c) 2025, w data and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
 refresh: function(frm) {
 frm.add_custom_button('Create Membership', () => {
 frappe.new_doc('Library Membership', {
 library_member: frm.doc.name
 })
 })
 frm.add_custom_button('Create Transaction', () => {
 frappe.new_doc('Library Transaction', {
 library_member: frm.doc.name
 })
 })
 }
});
