/**
 * Return object of aria attributes using options
 */
export default (function (_ref) {
  var active = _ref.active,
      controls = _ref.controls,
      describedby = _ref.describedby,
      expanded = _ref.expanded,
      haspopup = _ref.haspopup,
      hidden = _ref.hidden,
      id = _ref.id,
      labelledby = _ref.labelledby,
      guid = _ref.guid,
      role = _ref.role,
      selected = _ref.selected;
  var arias = {}; // Handle standard aria values

  if (describedby) arias['aria-describedby'] = guid;
  if (expanded) arias['aria-expanded'] = String(active);
  if (haspopup) arias['aria-haspopup'] = 'true';
  if (hidden) arias['aria-hidden'] = String(!active);
  if (selected) arias['aria-selected'] = String(active);
  if (role) arias.role = role; // Handle dynamic aria values

  if (controls) arias['aria-controls'] = typeof controls === 'string' ? controls : guid;
  if (id) arias.id = typeof id === 'string' ? id : guid;
  if (labelledby) arias['aria-labelledby'] = typeof labelledby === 'string' ? labelledby : guid;
  return arias;
});