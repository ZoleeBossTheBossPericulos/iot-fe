import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./App.css";
import { db } from "./firebase";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface DataProps {
  hum: number;
  lux: number;
  temp: number;
  id: string;
}

function App() {
  const [data, setData] = useState<DataProps[]>([]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "data"));
    const newData = querySnapshot.docs.map(
      (doc) =>
        ({
          ...doc.data(),
          id: doc.id,
        } as any)
    );
    setData(newData);
  };

  useEffect(() => {
    const fetchDataWithInterval = async () => {
      await fetchData();

      const intervalId = setInterval(async () => {
        await fetchData();
      }, 5000);

      return () => clearInterval(intervalId);
    };

    fetchDataWithInterval();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const humidity = {
    labels: data.map((d) => d.id),
    datasets: [
      {
        label: "Humidity",
        data: data.map((d) => d.hum),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const temperature = {
    labels: data.map((d) => d.id),
    datasets: [
      {
        label: "Temperature",
        data: data.map((d) => d.temp),
        borderColor: "rgb(173, 180, 7)",
        backgroundColor: "rgba(173, 180, 7, 0.5)",
      },
    ],
  };

  const lux = {
    labels: data.map((d) => d.id),
    datasets: [
      {
        label: "Lux",
        data: data.map((d) => d.lux),
        borderColor: "rgb(5, 5, 132)",
        backgroundColor: "rgba(5, 5, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h1>Humidity chart</h1>
      <Line options={options} data={humidity} />
      <br />
      <br />
      <br />
      <h1>Temperature chart</h1>
      <Line options={options} data={temperature} />
      <br />
      <br />
      <br />
      <h1>Lux chart</h1>
      <Line options={options} data={lux} />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
