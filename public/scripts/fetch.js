var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dateToUnixStamp(date) {
    return date.getTime() / 1000;
}
function responseToJson(requestPromise) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield requestPromise;
        const json = yield response.text();
        const hotels = JSON.parse(json);
        return hotels;
    });
}
export function search(data) {
    const checkInDate = new Date(data.checkInDate);
    const checkOutDate = new Date(data.checkOutDate);
    let url = `http://localhost:3030/places?` +
        `checkInDate=${dateToUnixStamp(checkInDate)}&` +
        `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
        `coordinates=59.9386,30.3141`;
    if (data.maxPrice != null) {
        url += `&maxPrice=${data.maxPrice}`;
    }
    return responseToJson(fetch(url));
}
// function book(placeId, checkInDate, checkOutDate) {
//   return responseToJson(fetch(
//     `http://localhost:3030/places/${placeId}?` +
//     `checkInDate=${dateToUnixStamp(checkInDate)}&` +
//     `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
//     { method: 'PATCH' }
//   ));
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsU0FBUyxlQUFlLENBQUMsSUFBVTtJQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDL0IsQ0FBQztBQUVELFNBQWUsY0FBYyxDQUFDLGNBQWlDOztRQUM3RCxNQUFNLFFBQVEsR0FBYSxNQUFNLGNBQWMsQ0FBQztRQUNoRCxNQUFNLElBQUksR0FBVyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxNQUFNLE1BQU0sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTtBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBb0I7SUFDekMsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVqRCxJQUFJLEdBQUcsR0FBRywrQkFBK0I7UUFDdkMsZUFBZSxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUc7UUFDOUMsZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsR0FBRztRQUNoRCw2QkFBNkIsQ0FBQztJQUVoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3pCLEdBQUcsSUFBSSxhQUFhLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNyQztJQUVELE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxzREFBc0Q7QUFDdEQsaUNBQWlDO0FBQ2pDLG1EQUFtRDtBQUNuRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEZvcm1EYXRhLCBIb3RlbCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG5mdW5jdGlvbiBkYXRlVG9Vbml4U3RhbXAoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAvIDEwMDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc3BvbnNlVG9Kc29uKHJlcXVlc3RQcm9taXNlOiBQcm9taXNlPFJlc3BvbnNlPik6IFByb21pc2U8SG90ZWxbXT4ge1xuICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZTtcbiAgY29uc3QganNvbjogc3RyaW5nID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICBjb25zdCBob3RlbHM6IEhvdGVsW10gPSBKU09OLnBhcnNlKGpzb24pO1xuICByZXR1cm4gaG90ZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoKGRhdGE6IFNlYXJjaEZvcm1EYXRhKSB7XG4gIGNvbnN0IGNoZWNrSW5EYXRlID0gbmV3IERhdGUoZGF0YS5jaGVja0luRGF0ZSk7XG4gIGNvbnN0IGNoZWNrT3V0RGF0ZSA9IG5ldyBEYXRlKGRhdGEuY2hlY2tPdXREYXRlKTtcblxuICBsZXQgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXM/YCArXG4gICAgYGNoZWNrSW5EYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrSW5EYXRlKX0mYCArXG4gICAgYGNoZWNrT3V0RGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja091dERhdGUpfSZgICtcbiAgICBgY29vcmRpbmF0ZXM9NTkuOTM4NiwzMC4zMTQxYDtcblxuICBpZiAoZGF0YS5tYXhQcmljZSAhPSBudWxsKSB7XG4gICAgdXJsICs9IGAmbWF4UHJpY2U9JHtkYXRhLm1heFByaWNlfWA7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2VUb0pzb24oZmV0Y2godXJsKSk7XG59XG5cbi8vIGZ1bmN0aW9uIGJvb2socGxhY2VJZCwgY2hlY2tJbkRhdGUsIGNoZWNrT3V0RGF0ZSkge1xuLy8gICByZXR1cm4gcmVzcG9uc2VUb0pzb24oZmV0Y2goXG4vLyAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXMvJHtwbGFjZUlkfT9gICtcbi8vICAgICBgY2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZgICtcbi8vICAgICBgY2hlY2tPdXREYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSl9JmAsXG4vLyAgICAgeyBtZXRob2Q6ICdQQVRDSCcgfVxuLy8gICApKTtcbi8vIH1cbiJdfQ==