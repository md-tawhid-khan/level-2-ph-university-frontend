export const monthName=[
    'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const genders=['male' ,'female' , 'other']

export const monthOptions=monthName.map(month=>({
    label:month,
    value:month
})) ;

export const genderOptions=genders.map(gender=>({
  label:gender,
  value:gender
}))