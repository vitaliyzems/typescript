import { renderBlock } from './lib.js';
import { renderFavoritesBlock } from './favorite.js';
export function writeUser(user) {
    localStorage.user = JSON.stringify(user);
}
export function renderUserBlock(userName, avatarLink, favoriteItemsAmount) {
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            ${renderFavoritesBlock(favoriteItemsAmount)}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    return JSON.parse(localStorage.user);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE1BQU0sVUFBVSxTQUFTLENBQUMsSUFBVTtJQUNsQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLG1CQUEyQjtJQUMvRixXQUFXLENBQ1QsWUFBWSxFQUNaOztnQ0FFNEIsVUFBVTs7NEJBRWQsUUFBUTs7Y0FFdEIsb0JBQW9CLENBQUMsbUJBQW1CLENBQUM7Ozs7S0FJbEQsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgcmVuZGVyRmF2b3JpdGVzQmxvY2sgfSBmcm9tICcuL2Zhdm9yaXRlLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVXNlcih1c2VyOiBVc2VyKTogdm9pZCB7XG4gIGxvY2FsU3RvcmFnZS51c2VyID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sodXNlck5hbWU6IHN0cmluZywgYXZhdGFyTGluazogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz0ke2F2YXRhckxpbmt9IGFsdD1cIldhZGUgV2FycmVuXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgICR7cmVuZGVyRmF2b3JpdGVzQmxvY2soZmF2b3JpdGVJdGVtc0Ftb3VudCl9XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKTogVXNlciB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS51c2VyKTtcbn1cbiJdfQ==