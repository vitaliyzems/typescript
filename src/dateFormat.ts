export class Dates {
  getMinDate(): string {
    const date = new Date;

    return this._formatDate(date);
  }

  getMaxDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const maxDate = new Date(year, month + 1, 0);

    return this._formatDate(maxDate);
  }

  addDays(addedDays: number): string {
    const date = new Date();
    date.setDate(date.getDate() + addedDays);

    return this._formatDate(date);
  }

  private _formatDate(date: Date): string {
    const year = date.getFullYear();
    const monthString = (date.getMonth() + 1).toString();
    const month = monthString.length === 1 ? `0${monthString}` : monthString;
    const dayString = date.getDate().toString();
    const day = dayString.length === 1 ? `0${dayString}` : dayString;

    return `${year}-${month}-${day}`;
  }
}
