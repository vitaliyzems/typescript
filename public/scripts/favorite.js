export function toggleFavoriteItem(item) {
    const icon = document.querySelector(`[data-id="${item.id}"]`);
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));
    if (favoriteItems == null) {
        localStorage.favoriteItems = JSON.stringify({ [item.id]: item });
        icon.classList.add('active');
        return;
    }
    if (favoriteItems[item.id] == null) {
        favoriteItems[item.id] = item;
        localStorage.favoriteItems = JSON.stringify(favoriteItems);
        icon.classList.add('active');
    }
    else {
        delete favoriteItems[item.id];
        localStorage.favoriteItems = JSON.stringify(favoriteItems);
        icon.classList.remove('active');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmF2b3JpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQW1CO0lBQ3BELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUV4RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7UUFDekIsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixPQUFPO0tBQ1I7SUFFRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2xDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5QjtTQUFNO1FBQ0wsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXZvcml0ZUhvdGVsIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGYXZvcml0ZUl0ZW0oaXRlbTogRmF2b3JpdGVIb3RlbCkge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2l0ZW0uaWR9XCJdYCk7XG4gIGNvbnN0IGZhdm9yaXRlSXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZUl0ZW1zJykpO1xuXG4gIGlmIChmYXZvcml0ZUl0ZW1zID09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2UuZmF2b3JpdGVJdGVtcyA9IEpTT04uc3RyaW5naWZ5KHsgW2l0ZW0uaWRdOiBpdGVtIH0pO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGZhdm9yaXRlSXRlbXNbaXRlbS5pZF0gPT0gbnVsbCkge1xuICAgIGZhdm9yaXRlSXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgIGxvY2FsU3RvcmFnZS5mYXZvcml0ZUl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVJdGVtcyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgZmF2b3JpdGVJdGVtc1tpdGVtLmlkXTtcbiAgICBsb2NhbFN0b3JhZ2UuZmF2b3JpdGVJdGVtcyA9IEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlSXRlbXMpO1xuICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbn1cbiJdfQ==