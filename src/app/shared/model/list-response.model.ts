export interface ListResponseModel<T> {
  pageSize: number,
  pageIndex: number,
  totalCount: number,
  items: T[]
}
