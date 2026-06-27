const dateTimeFormatter = new Intl.DateTimeFormat('es', {
  dateStyle: 'short',
  timeStyle: 'short',
});

export const formatDateTime = (timestamp: number): string => {
  return dateTimeFormatter.format(new Date(timestamp));
};
