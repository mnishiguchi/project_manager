import React from 'react'
import S     from 'string'

/**
 * Updates the document title with the specified string.
 * @param {String} title
 */
export function setDocumentTitle(title) {
    const baseTitle = 'Project manager'
    document.title = title ? `${title} | ${baseTitle}` : baseTitle
}

/**
 * Renders an error message for the specified ref.
 * @param  {Array} errors
 * @param  {node} ref
 */
export function renderErrorForRef(errors, ref) {

    if (!errors) { return false }

    return errors.map((error, i) => (
        error[ref] ? (
            <div key={i} className="error">
                {error[ref]}
            </div>
        ) : null
    ))
}

/**
 * http://stringjs.com/#methods/humanize
 */
export function renderField(fieldName, opts={}) {
  const {
    type,
    placeholder,
    label,
    required,
  } = opts

  return (
    <div className="form-group">
      <label htmlFor={fieldName}>
        {label || S(fieldName).humanize().s}
      </label>
      <input
        type={type || 'text'}
        className="form-control"
        id={fieldName}
        ref={fieldName}
        placeholder={placeholder || ''}
        required={required || true}
      />
    </div>
  )
}
