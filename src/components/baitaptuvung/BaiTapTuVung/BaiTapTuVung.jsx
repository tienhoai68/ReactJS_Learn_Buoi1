import React, { Component } from "react";
import "./style.css";
import Form from "./Form";
import VocabularyList from "./VocabularyList";
import data from "../../../Data/vocabularyList.json"
import TabList from "./TabList";
import HistoryList from "./HistoryList";
export default class BaiTapTuVung extends Component {
  state = {
    vocabularyList: data,
    isOnlyFavorite: false,
    historyList: [],
  };

  handleAddHistory = (action, en, vi) => {
    const history = {
      action,
      en,
      vi,
      date: new Date().toLocaleString(),
    };

    const data = [history, ...this.state.historyList]; // push data vào historyList
    this.setState({
      historyList: data,
    });

  };

  handleSaveData = (vocabulary) => {
    const data = [...this.state.vocabularyList];
    // dùng unshift để thêm phần tử vào đầu mảng thay vì dùng push như thường
    data.unshift(vocabulary);
    // console.log(data);
    // cách viết tắt 
    // this.setState ({
    //   vocabularyList: [data, ...this.state.vocabularyList],
    // });
    this.setState({
      vocabularyList: data,
    }, () => {
      this.handleAddHistory("ADD", vocabulary.en, vocabulary.vi);
    });
    // do this.setState bất đồng bộ nên phải truyền vào một call back function
  };

  handleChangeFavorite = (id, isFavorited) => {
    const data = [...this.state.vocabularyList];

    const index = data.findIndex((element) => {
      return element.id === id;
    });
    // cho ngược lại giá trị mặc định !isFavorited;
    data[index].isFavorited = !isFavorited;
    this.setState({
      vocabularyList: data,
    }, () => {
    const vocabulary = data[index];
      this.handleAddHistory(vocabulary.isFavorited ? "Like" : "Unlike", vocabulary.en, vocabulary.vi);
    });
    // this.setState({
    //   vocabularyList: this.state.vocabularyList.map((element) => element.id === id ? { ...element, isFavorited: !isFavorited } : element),
    // });
    // dùng map để thay đổi thành phần bên trong mảng: 
    // + điều kiện ID giống: (element) => element.id === id 
    // + nếu giống ID thì thay clone lại mảng thay đổi isFavorited sai thì bình thường element.id === id ? {...element, isFavorited: !isFavorited} : element)
  };

  handleChangeFilter = (isChecked) => {
    console.log(isChecked);
    this.setState({
      isOnlyFavorite: isChecked,
    })
  };

  handleDeleteItem = (id) => {
    const data = [...this.state.vocabularyList];
    const index = data.findIndex((element) => element.id === id);
    const vocabulary = data[index];
    data.splice(index, 1);
    this.setState({
      vocabularyList: data,
    }, () => {
      this.handleAddHistory("Remove", vocabulary.en, vocabulary.vi)
    });
  };

  render() {
    return (
      <div className="mt-5 p-3 ml-5 border" style={{ width: 350, height: 580 }}>

        <Form handleSaveData={this.handleSaveData} />

        <div className="mt-2">

          <TabList handleChangeFilter={this.handleChangeFilter} />

          <div
            className="tab-content border-bottom border-top"
            id="pills-tabContent"
            style={{ height: 262, overflowX: "hidden" }}
          >
            <VocabularyList handleDeleteItem={this.handleDeleteItem} isOnlyFavorite={this.state.isOnlyFavorite} vocabularyList={this.state.vocabularyList} handleChangeFavorite={this.handleChangeFavorite} />
            <HistoryList historyList={this.state.historyList}/>
          </div>
        </div>
      </div>
    );
  }
}
