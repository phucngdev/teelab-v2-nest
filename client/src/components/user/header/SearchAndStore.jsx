import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import icon_incart from "../../../../public/icon_incart.svg";
import { Avatar, Badge, Input, Popover } from "antd";
import { DashOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const SearchAndStore = ({ user }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.myCart.data);
  console.log(cart);

  return (
    <>
      <div className="hidden md:block py-[5px] bg-[#f5f5f5]">
        <div className="container mx-auto flex gap-2 justify-end items-center">
          <form className="relative h-10 flex items-center">
            <Input placeholder="Tìm kiếm sản phẩm" />
          </form>
          {user ? (
            <>
              <div className="h-full w-10 relative group flex items-center justify-center">
                <Link to="/gio-hang" className="m-0">
                  <Badge count={cart.length} showZero>
                    <Avatar shape="square" icon={<ShoppingCartOutlined />} />
                  </Badge>
                </Link>
                <div className="group-hover:block rounded-sm shadow-lg bg-white absolute z-[99] top-[100%] right-0 hidden">
                  <div className="w-[400px] max-h-[500px] overflow-scroll flex flex-col items-center text-center p-2">
                    {cart.length > 0 ? (
                      cart.map((product, index) => (
                        <div
                          onClick={() =>
                            navigate(`/chi-tiet/${product.product.product_id}`)
                          }
                          key={index}
                          className="grid grid-cols-12 items-center gap-2 p-1 cursor-pointer rounded-md hover:bg-[#ededed]"
                        >
                          <div className="col-span-2">
                            <img
                              className="w-full h-full object-cover"
                              src={product.product.thumbnail}
                              alt={product.product.product_name}
                            />
                          </div>
                          <span className="col-span-6">
                            {product.product.product_name}
                          </span>
                          <span className="col-span-1 text-left">
                            {product.color.color_name}
                          </span>
                          <span className="col-span-2 text-center">
                            {product.size.size_name}
                          </span>
                          <span className="col-span-1">x{product.count}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex flex-col justify-center items-center">
                          <img
                            className="w-20 m-[15px]"
                            src={icon_incart}
                            alt=""
                          />
                          <p className="mb-2">
                            Không có sản phẩm nào trong giỏ hàng của bạn
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-10 h-full flex items-center justify-center">
                <Popover
                  content={
                    <>
                      <div>
                        <p>Content</p>
                        <p>Content</p>
                      </div>
                    </>
                  }
                  title="Chức năng"
                  trigger="hover"
                >
                  <img
                    src={user?.avatar}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </Popover>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 ms-3">
                <button className="" onClick={() => navigate("/dang-nhap")}>
                  Sign In
                </button>
                <button
                  onClick={() => navigate("/dang-ky")}
                  className="hover:px-4 transition-all px-3 py-1 rounded-full bg-stone-700 text-white border border-black"
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchAndStore;
