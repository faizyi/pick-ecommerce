import { Pagination as AntPagination } from 'antd';
export default function Pagination({ current, total, pageSize, onChange, showSizeChanger }) {
  return (
    <div className="mt-8 flex justify-center">
    <AntPagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={showSizeChanger}
    />
  </div>
  )
}
