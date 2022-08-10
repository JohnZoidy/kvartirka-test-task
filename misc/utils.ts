export const dateParser = (date: string) => {
    const result = new Date(date);
   return result.toLocaleString('ru', {
       year: 'numeric',
       month: 'long',
       day: 'numeric',
   });
};