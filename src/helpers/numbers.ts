// display numbers with comma (form string)
export const displayNumbers = (num: number): string => num.toString().replace(/((\d{3})+(?!$))/g, '$2,');
