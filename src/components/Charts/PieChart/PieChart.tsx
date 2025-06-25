import './PieChart.css';
import { useEffect, useRef } from 'react';

const PieChart = () => {
  const chartInstanceRef = useRef<any>(null);
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  useEffect(() => {
    const canvas = pieChartRef.current;
    const Chart = (window as any).Chart;

    if (!canvas || !Chart) return;

    const rect = canvas.getBoundingClientRect();
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = rect.width * pixelRatio;
    canvas.height = rect.height * pixelRatio;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(pixelRatio, pixelRatio);

    chartInstanceRef.current?.destroy();

    const data = {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [{
        data: [10, 20, 30, 40],
        backgroundColor: [
          'rgba(255, 140, 0, 0.4)',
          'rgba(255, 69, 0, 0.4)',
          'rgba(173, 255, 47, 0.4)',
          'rgba(0, 206, 209, 0.4)'
        ],
        hoverBackgroundColor: [
          'rgba(255, 140, 0, 0.8)',
          'rgba(255, 69, 0, 0.8)',
          'rgba(173, 255, 47, 0.8)',
          'rgba(0, 206, 209, 0.8)'
        ],
        borderColor: [
          'rgba(255, 140, 0, 1)',
          'rgba(255, 69, 0, 1)',
          'rgba(173, 255, 47, 1)',
          'rgba(0, 206, 209, 1)'
        ],
        borderWidth: 1,
        borderRadius: isPortrait ? 8:10,
        spacing: 10,
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: isPortrait ? '55%' : '60%',
      layout: {
        padding: 10,
      },
      plugins: {
        legend: {
          display: false,
        }
      },
      elements: {
        arc: {
          hoverOffset: 10,
        }
      }
    };

    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data,
      options
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <div className='chart'>
      <div className="chart-container">
        <canvas ref={pieChartRef}></canvas>
      </div>
    </div>
  );
};

export default PieChart;