import { ValidatorsType } from '../utils/validatorstypes';

export const fieldsArray = [
  { field: 'id', type: 'hidden', label: 'Id' },
  { field: 'name', type: 'text', label: 'Name', validations: { [ValidatorsType.MINLENGTH]: 10, [ValidatorsType.MAXLENGTH]: 60 } },
  { field: 'email', type: 'text', label: 'Email', validations: { [ValidatorsType.MAXLENGTH]: 100, [ValidatorsType.EMAIL]: ValidatorsType.EMAIL } },
  { field: 'city', type: 'text', label: 'City', validations: { [ValidatorsType.MAXLENGTH]: 60 } },
  { field: 'phone', type: 'text', label: 'Phone' },
  { field: 'website', type: 'text', label: 'Website' },
  { field: 'company', type: 'text', label: 'Company' }
]