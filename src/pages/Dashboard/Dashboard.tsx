import './Dashboard.css';
import { useState, useEffect, useRef } from 'react';
import Card from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import PieChart from '../../components/Charts/PieChart/PieChart';

const items = [
  { label: "Fajar", secondaryColor: "rgba(255, 140, 0, 0.4)", primaryColor: "rgba(255, 140, 0, 1)" },
  { label: "Dhuhr", secondaryColor: "rgba(255, 69, 0, 0.4)", primaryColor: "rgba(255, 69, 0, 1)" },
  { label: "Asr", secondaryColor: "rgba(173, 255, 47, 0.4)", primaryColor: "rgba(173, 255, 47, 1)" },
  { label: "Maghrib", secondaryColor: "rgba(255, 140, 0, 0.4)", primaryColor: "rgba(255, 140, 0, 1)" },
  { label: "Isha", secondaryColor: "rgba(0, 206, 209, 0.4)", primaryColor: "rgba(0, 206, 209, 1)" },
];

const deeds = [
  { label: "Namaz" },
  { label: "Qur'an" },
  { label: "Tasbeeh" },
  { label: "Sadaqah" },
  { label: "Roza" }
];

const Dashboard = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const [activeDeed, setActiveDeed] = useState(0);
  const [overflow, setOverflow] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [itemsWidth, setItemsWidth] = useState<number[]>([]);
  const [deedsWidth, setDeedsWidth] = useState<number[]>([]);

  const handleRight = () => {
    if (activeScrollIndex >= deeds.length) return;

    const offset = deedsWidth[activeScrollIndex] + 46 + (activeScrollIndex !== 0 && activeScrollIndex % 8 === 0 ? 5 : 0);
    const newLeft = scrollLeft - offset;

    if (-newLeft < overflow) {
      setScrollLeft(newLeft);
      setActiveScrollIndex(prev => prev + 1);
    } else {
      setScrollLeft(-overflow + 5);
      setActiveScrollIndex(deeds.length);
    }
  };

  const handleLeft = () => {
    if (activeScrollIndex <= 0) return;

    const offset = deedsWidth[activeScrollIndex - 1] + 46 + (activeScrollIndex - 1 !== 0 && (activeScrollIndex - 1) % 8 === 0 ? 5 : 0);
    const newLeft = scrollLeft + offset;

    if (-newLeft > 0) {
      setScrollLeft(newLeft);
      setActiveScrollIndex(prev => prev - 1);
    } else {
      setScrollLeft(0);
      setActiveScrollIndex(0);
    }
  };

  useEffect(() => {
    const measureTextWidth = (label: string, ctx: CanvasRenderingContext2D): number => {
      ctx.font = `400 18px Poppins`;
      return Math.floor(ctx.measureText(label).width);
    };

    const getLabelWidths = (labels: string[]): number[] => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return [];
      return labels.map(label => measureTextWidth(label, ctx));
    };

    document.fonts.ready.then(() => {
      setItemsWidth(getLabelWidths(items.map(i => i.label)));
      setDeedsWidth(getLabelWidths(deeds.map(d => d.label)));
    });

    const checkOverflow = () => {
      if (!containerRef.current || !contentRef.current) return;
      const diff = contentRef.current.scrollWidth - containerRef.current.clientWidth;
      setOverflow(diff > 0 ? diff : 0);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-content">
        
        <div className="dashboard-column">
          <Card width="100%">
            <div className="toolbar-wrapper">
              <div className="toolbar-button-left" style={{ opacity: overflow ? 1 : 0 }} onClick={handleLeft}>
                <Button isCancel><i className="fa-solid fa-caret-left"></i></Button>
              </div>
              <div className="toolbar-container" ref={containerRef}>
                <div
                  className={`toolbar-content ${overflow ? 'absolute' : ''}`}
                  style={{ left: `${scrollLeft}px` }}
                  ref={contentRef}
                >
                  {deeds.map((deed, index) => (
                    <div key={index} onClick={() => setActiveDeed(index)}>
                      <Button isCancel={index !== activeDeed}>{deed.label}</Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="toolbar-button-right" style={{ opacity: overflow ? 1 : 0 }} onClick={handleRight}>
                <Button isCancel><i className="fa-solid fa-caret-right"></i></Button>
              </div>
            </div>

            <div className="scrollable-button-container">
              <div className="scrollable-wrapper">
                <div className="scrollable-content">
                  {deeds.map((deed, index) => (
                    <div key={index} onClick={() => setActiveDeed(index)}>
                      <Button isCancel={index !== activeDeed}>{deed.label}</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <PieChart />

            <div className="legend-container">
              {items.map((item, index) => (
                <div key={index} className="legend-item">
                  <div className="legend-color-box" style={{ background: item.secondaryColor, borderColor: item.primaryColor }}></div>
                  <div className="legend-label" style={{ width: `${Math.floor(Math.max(...itemsWidth)) + 10}px` }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="dashboard-column">
          <Card width="100%" height="100%">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>{window.innerWidth}, {window.innerHeight}</div>
            ))}
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;