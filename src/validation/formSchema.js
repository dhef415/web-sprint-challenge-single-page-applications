import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('Name is required')
    .min(3,'Name must be at least 3 chars long'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'],'Size is required'),
    sauce: yup
    .string()
    .oneOf(['red-sauce', 'garlic', 'bbq-sauce', 'spinach-alfredo'], 'Sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    olive: yup.boolean(),
});