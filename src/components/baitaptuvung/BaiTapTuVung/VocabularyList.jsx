import React, { Component } from 'react'
import VocabularyItem from './VocabularyItem'

export default class VocabularyList extends Component {
    renderContent = () => {
        const data = this.props.vocabularyList.filter((element) => {
            if (this.props.isOnlyFavorite) {
                // filter những thằng isFavorited = true
                return element.isFavorited === true
            } else {
                // lấy tất cả
                return true;
            }
        });
        return data.map((element) => {
            return <VocabularyItem handleDeleteItem = {this.props.handleDeleteItem} key={element.id} element={element} handleChangeFavorite={this.props.handleChangeFavorite} />
        });
    }
    render() {
        return (
            <div
                className="tab-pane fade show active"
                id="pills-vocabulary"
                role="tabpanel"
                aria-labelledby="pills-vocabulary-tab"
            >
                {this.renderContent()}
            </div>
        );
    }
}
