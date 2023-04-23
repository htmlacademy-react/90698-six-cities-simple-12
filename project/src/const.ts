export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer/:id'
}

export const SORTING_TYPE = [
  {label: 'Popular'},
  {label: 'Price: low to high'},
  {label: 'Price: high to low'},
  {label: 'Top rated first'}
];

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
 }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Offers = 'OFFERS',
  City = 'CITY',
  Authorization = 'AUTHORIZATION',
  Comments = 'COMMENTS',
}
