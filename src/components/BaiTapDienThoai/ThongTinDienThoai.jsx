import React, { Component } from 'react'

export default class ThongTinDienThoai extends Component {
    render() {
        // console.log(this.props.details);
        const {hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau , rom, ram} = this.props.details;
        return (
            <div>
                <div className="row mt-4">
                    <div className="col-4 text-center">
                        <h2>Vinsmart Live</h2>
                        <img
                            className="img-fluid"
                            alt="..."
                            src={hinhAnh}
                        />
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td colSpan={2}>
                                        <h1>Thông số kĩ thuật</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
