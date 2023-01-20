function formatDate(year, month, day) {
    return `${year}-${month.toString().length === 1 ? `0${month}` : month}-${day}`;
}
export const myDate = {
    addDays(addedDays = 0) {
        const date = new Date();
        date.setDate(date.getDate() + addedDays);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return formatDate(year, month, day);
    },
    getMaxDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const maxDate = new Date(year, month + 2, 0);
        return formatDate(year, month + 2, maxDate.getDate());
    }
};
