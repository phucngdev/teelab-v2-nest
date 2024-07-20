import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Drawer } from "antd";
import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderMobile = () => {
  const cart = useSelector((state) => state.myCart.data);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="w-full h-[46px] flex items-center fixed z-50 top-0 py-[5px] px-2 md:hidden bg-[#f5f5f5] z-50">
        <ul className="container flex justify-between items-center">
          <li>
            <Button
              className="border-0 rotate-[180deg]"
              variant="primary"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
            <Drawer
              title="Teelab"
              placement="left"
              onClose={onClose}
              open={open}
            >
              <ul className="menu list-disc text-base ps-3 sm:text-2xl">
                <li className="my-[5px]">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="my-[5px]">
                  <Link to="/tat-ca-san-pham" className="">
                    Tất cả sản phẩm
                    <ul className="ms-[15px] sm:ps-5 list-disc">
                      <li className="my-[5px]">
                        <Link to="/ao-thun">Áo thun</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/ao-polo">Áo polo</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/baby-tee">Baby Tee</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/ao-so-mi">Áo sơ mi</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/ao-khoac">Áo khoác</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/hoodie">Hoodie</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/quan">Quần</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/quan-nu">Quần nữ</Link>
                      </li>
                      <li className="my-[5px]">
                        <Link to="/phu-kien">Phụ kiện</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="my-[5px]">
                  <Link to="/chinh-sach-doi-tra">Chính sách Đổi trả</Link>
                </li>
                <li className="my-[5px]">
                  <Link to="/bang-size">Bảng Size</Link>
                </li>
                <li className="my-[5px]">
                  <Link to="/kiem-tra-don-hang">Kiểm tra đơn hàng</Link>
                </li>
                <li className="my-[5px]">
                  <Link to="/he-thong-cua-hang">Hệ thống Cửa hàng</Link>
                </li>
              </ul>
            </Drawer>
          </li>
          <li className="w-[150px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link to="gio-hang">
              <Badge count={cart.length}>
                <Avatar shape="square" icon={<ShoppingCartOutlined />} />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMobile;
