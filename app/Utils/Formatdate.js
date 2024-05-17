export function Formatdate(date) {
  const newDate = new Date(date);

  const locale = "en-US"
  
  return newDate.toLocaleDateString(locale);
}