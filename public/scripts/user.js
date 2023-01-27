import { renderBlock } from './lib.js';
export function writeUser(user) {
    localStorage.user = JSON.stringify(user);
}
export function renderUserBlock(userName, avatarLink, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount
        ? favoriteItemsAmount
        : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    return JSON.parse(localStorage.user);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFVO0lBQ2xDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFVBQWtCLEVBQUUsbUJBQTJCO0lBQy9GLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CO1FBQzFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDckIsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNqQixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUU1RCxXQUFXLENBQ1QsWUFBWSxFQUNaOztnQ0FFNEIsVUFBVTs7NEJBRWQsUUFBUTs7a0NBRUYsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5pbXBvcnQgeyBGYXZvcml0ZUl0ZW1zLCBVc2VyIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZVVzZXIodXNlcjogVXNlcik6IHZvaWQge1xuICBsb2NhbFN0b3JhZ2UudXNlciA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKHVzZXJOYW1lOiBzdHJpbmcsIGF2YXRhckxpbms6IHN0cmluZywgZmF2b3JpdGVJdGVtc0Ftb3VudDogbnVtYmVyKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50XG4gICAgPyBmYXZvcml0ZUl0ZW1zQW1vdW50XG4gICAgOiAn0L3QuNGH0LXQs9C+INC90LXRgic7XG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9JHthdmF0YXJMaW5rfSBhbHQ9XCJXYWRlIFdhcnJlblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2hhc0Zhdm9yaXRlSXRlbXMgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCk6IFVzZXIge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudXNlcik7XG59Il19