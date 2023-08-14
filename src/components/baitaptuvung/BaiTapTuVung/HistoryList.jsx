import React, { Component } from 'react'
import HistoryItem from './HistoryItem'

export default class HistoryList extends Component {
    renderContent = () => {
       return this.props.historyList.map((element, index) => {
          return  <HistoryItem element={element} key={index}/>              
        })
    }
     render() {
        return (
            <div
                className="tab-pane fade"
                id="pills-history"
                role="tabpanel"
                aria-labelledby="pills-history-tab"
            >
                {this.renderContent()}      
            </div>
        )
    }
}
