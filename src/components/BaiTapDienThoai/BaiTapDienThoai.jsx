import React, { Component } from 'react'
import phone from "../../Data/phoneList.json"
import DanhSachDienThoai from './DanhSachDienThoai'
import ThongTinDienThoai from './ThongTinDienThoai'
import GioHang from './GioHang'
export default class BaiTapDienThoai extends Component {
    state = {
        phoneDetails: phone[2],
        cartList: [],
    }
    handalQuantity = (id, isIncrease) => {
        console.log(id);
        console.log(isIncrease);
        const data = [...this.state.cartList];
        const index = data.findIndex((element) => {
            return element.maSP === id;
        })
        if (isIncrease) {
            // tăng số lượng lên 1
            data[index].soluong += 1;
        } else {
            // trừ thì giảm đi
            if (data[index].soluong === 1) {
                const result = window.confirm("Are you sure");
                if (result) {
                    // nếu comfirm thì xóa sản phẩm
                    data.splice(index, 1);
                }
            } else {
                data[index].soluong -= 1;
            }
        };
        this.setState({
            cartList: data,
        })
    }
    delPhone = (id) => {
        console.log(id);
        const data = [...this.state.cartList];
        const index = data.findIndex((element) => {
            return element.maSP === id;
        });
        const result = window.confirm("are you sure")
        if (result) {
            data.splice(index, 1);
        }
        this.setState({
            cartList: data,
        });
        // dùng hàm filter để xóa
        // this.setState({
        //     cartList: this.state.cartList.filter((element) => element.maSP !== id),
        // });
    };
    addToCart = (phone) => {
        const data = [...this.state.cartList]
        const index = data.findIndex((element) => {
            return element.maSP === phone.maSP;
        })
        console.log(index);
        if (index !== -1) {
            // tăng số lượng sản phẩm
            data[index].soluong += 1;
        } else {
            // push vào mảng giỏ hàng
            data.push({ ...phone, soluong: 1 });
        }
        this.setState({
            cartList: data,
        }, () => {
            console.log(data);
        })
    }
    getPhoneDetails = (phone) => {
        this.setState({
            phoneDetails: phone,
        })
    }
    render() {
        return (
            <div>
                <section className="w-75 mx-auto">
                    <GioHang delPhone={this.delPhone} handalQuantity={this.handalQuantity} cartList={this.state.cartList} />
                    <DanhSachDienThoai addToCart={this.addToCart} getPhoneDetails={this.getPhoneDetails} data={phone} />
                    <ThongTinDienThoai details={this.state.phoneDetails} />
                </section>
            </div>
        )
    }
}
