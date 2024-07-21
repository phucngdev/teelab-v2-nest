import { FieldTimeOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../services/order.service";
import moment from "moment";
import formatPrice from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    await dispatch(getAllOrder());
  };
  useEffect(() => {
    fetchData();
  }, []);
  const orders = useSelector((state) => state.order.data);
  console.log(orders);
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-2xl font-bold">
            <ShopOutlined /> Danh sách đơn hàng
          </h3>
          <Input className="w-1/5" placeholder="Tìm kiếm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {orders?.map((od, index) => (
            <div
              key={od.order_id}
              onClick={() => navigate(`/admin/don-hang/${od.order_id}`)}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{od.name}</h2>
                  <p className="text-gray-500">{od.phone}</p>
                </div>
                <button className="text-sm bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                  {od.status === 0
                    ? "Mới"
                    : od.status === 1
                    ? "Vận chuyển"
                    : "Hoàn thành"}
                </button>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <div className="flex items-center text-gray-500 mb-4">
                <FieldTimeOutlined />
                <p className="ml-2">
                  {moment(od.created_at).format("hh:mm A, DD MMM, YYYY")}
                </p>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <div className="flex items-center justify-between text-gray-600 mb-4">
                <p className="font-semibold">
                  {od.order_details.reduce((total, detail) => {
                    return total + detail.quantity;
                  }, 0)}{" "}
                  sản phẩm
                </p>
                <span className="text-blue-600">
                  {formatPrice(od.total_amount)}
                </span>
              </div>
              <div className="text-gray-600">
                {od.order_details.map((dt, index) => (
                  <div className="flex justify-between mb-2">
                    <p>
                      {dt.quantity} - {dt.product.category.category_name}
                    </p>
                    <p>{dt.size.size_name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
