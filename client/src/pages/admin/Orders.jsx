import { FieldTimeOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

const Orders = () => {
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
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">David Moore</h2>
                <p className="text-gray-500">+1 9876543210</p>
              </div>
              <button className="bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                New Order
              </button>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center text-gray-500 mb-4">
              <FieldTimeOutlined />
              <p className="ml-2">11:00 AM, 08 Feb, 2024</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <p className="font-semibold">3 sản phẩm</p>
              <span className="text-blue-600">599.000 đ</span>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <p>1 Spaghetti Bolognese</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>1 Garlic Bread</p>
                <p>x1</p>
              </div>
              <div className="flex justify-between">
                <p>1 Caesar Salad</p>
                <p>x1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
