import './Dashboard.css';
import Card from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import PieChart from '../../components/Charts/PieChart/PieChart';

const Dashboard = () => {
  
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <Card width="100%" height="100%">
          {/* <div className='chart-section-toolbar'>
            <div className={`chart-section-toolbar-left ${( toolbar === 1 || toolbar === 2 ) ? 'hide': ''}`}>
              <div className='low-opacity' onClick={() => scrollToolbar('left')}>
                <Button isCancel width='50px'><i className="fa-solid fa-caret-left"></i></Button>
              </div>
            </div>
            <div className={`chart-section-toolbar-middle ${( toolbar === 1 || toolbar === 2 ) ? 'left': ''} ${( toolbar === 1 || toolbar === 3 ) ? 'right': ''} ${( toolbar === 1 ) ? 'border': ''}`} ref={containerRef}>
              {deeds.map((deed, index) => {
                return (
                  <div key={index}>
                    <Button isCancel={!deed.active}>{deed.label}</Button>
                  </div>
                );
              })}
            </div>
            <div className={`chart-section-toolbar-right ${( toolbar === 1 || toolbar === 3 ) ? 'hide': ''}`}>
              <div className='low-opacity' onClick={() => scrollToolbar('right')}>
                <Button isCancel width='50px'><i className="fa-solid fa-caret-right"></i></Button>
              </div>
            </div>
          </div> */}
          <div className='chart-section-toolbar'>
            <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "5px 0px 5px 5px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", borderLeft: "1px solid rgba(255, 255, 255, 0.1)", opacity: 0 }}>
              <Button isCancel width="50px"><i className="fa-solid fa-caret-left"></i></Button>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "5px", padding: "5px 0px", border: "1px solid rgba(255, 255, 255, 0.1)", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", overflowX: "auto" }}>
                <div style={{ flexShrink: 0 }}><Button>Namaz</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
                <div style={{ flexShrink: 0 }}><Button isCancel>Qur'an</Button></div>
              </div>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "5px 5px 5px 0px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", borderRight: "1px solid rgba(255, 255, 255, 0.1)", opacity: 0 }}>
              <Button isCancel width="50px"><i className="fa-solid fa-caret-right"></i></Button>
            </div>
          </div>
          <div style={{ height: 'calc(100% - 72px)' }}>
            <PieChart />
          </div>
        </Card>
      </div>
      <div className="dashboard-column">
        <Card width="100%" height="100%">
          {window.innerWidth}, {window.innerHeight}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;