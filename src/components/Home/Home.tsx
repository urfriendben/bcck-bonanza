import './Home.scss';
import { connect } from 'react-redux';
import _ from 'lodash';
import dashboardImgs from '@/assets/dashboard';

function Home({dataItems}) {
  function getItem(item, single, multiRow) {
    const button = item.text && item.text.button ? <span className={`btn ${item.text.button.class} ${item.text.button.position}`} style={item.text.button.css}>{item.text.button.value}</span> : null;

    const text = item.text ? <div className="info">
      <p className={`text ${item.text.position}`} dangerouslySetInnerHTML={{__html: item.text.value}} style={item.text.css}></p>
      {button}
    </div> : null;
    return <div key={item.image} className={`item${single ? ' single' : ''}${multiRow ? ' multi-row' : ''} center`} style={{background: `${item.text ? 'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), ' : ''}url(${dashboardImgs[item.image] || item.image})`, ...item.css}}>
      {text}
    </div>;
  }

  const items = _.map(dataItems, (item, index) => {
    let isMultirow = false;
    if (index % 2 === 0 && dataItems.length > 1 && index !== dataItems.length - 1) {
      isMultirow = dataItems[index + 1].items.length > 2;
    } else if (index % 2 > 0) {
      isMultirow = dataItems[index - 1].items.length > 2;
    }

    return <div key={`group-${index}`} className="container">
        {_.reduce(_.map(item.items, (it) => getItem(it, item.items.length === 1, isMultirow)), (prev, curr) => [prev, '', curr])}
      </div>;
  });

  return (
    <div className="content">
      {_.reduce(items, (prev, curr) => [prev, '', curr])}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataItems: state.home.dashboard.content
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
