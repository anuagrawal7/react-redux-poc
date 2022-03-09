import React, { useMemo, useCallback } from 'react';
import { useForm } from './../hooks/useForm';
import { Button, Input } from './../shared';

const UserUpdateForm = ({ initialValues, onSave }) => {
  const manipulateData = useMemo(() => {
    let defaultData = {};

    initialValues.forEach(ele => {
      defaultData[ele['field']] = ele['value'];
    });
    return defaultData;
  }, [initialValues]);

  const updateData = useCallback((formData, formErr = {}) => {
    const errs = Object.keys(formErr);
    if (errs && !errs.length) {
      onSave(formData)
    }
  }, [onSave]);

  const { values, onChange, reset, onBlur, error } = useForm(manipulateData);

  return (
    <section>
      <form className="form-group">
        {initialValues.map((ele, index) => {
          return <Input key={index}
            name={ele['field']}
            value={values[ele['field']]}
            onChange={onChange}
            type={ele['type']}
            onBlur={onBlur}
            label={ele['label']}
            validations={ele.validations} error={error} />
        })}
        <Button onClick={() => updateData(values, error)} classList='btn-primary margin-ry-10' >Save</Button>
        <Button onClick={() => reset(manipulateData)} classList='btn-secondary' >Reset</Button>

      </form>
    </section>
  )
}

export default React.memo(UserUpdateForm);